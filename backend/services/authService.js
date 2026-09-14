import bcrypt from "bcryptjs";
import pool from "../config/db.js";

import {
  generateSessionToken,
  generateVerificationToken,
  hashToken,
} from "../utils/tokens.js";

export const registerUser = async ({ name, email, password }) => {
  const [existingUsers] = await pool.query(
    `SELECT id FROM users WHERE email = ? LIMIT 1`,
    [email]
  );

  if (existingUsers.length > 0) {
    const error = new Error("Email is already registered");
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [result] = await pool.query(
    `
      INSERT INTO users
        (name, email, password_hash)
      VALUES
        (?, ?, ?)
    `,
    [name, email, passwordHash]
  );

  return {
    id: result.insertId,
    name,
    email,
  };
};

export const loginUser = async ({ email, password }) => {
  const [users] = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        password_hash,
        avatar_url,
        role,
        email_verified,
        is_active
      FROM users
      WHERE email = ?
      LIMIT 1
    `,
    [email]
  );

  if (users.length === 0) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const user = users[0];

  if (!user.is_active) {
    const error = new Error("Your account is inactive");
    error.statusCode = 403;
    throw error;
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!passwordMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const sessionToken = generateSessionToken();

  const sessionTokenHash = hashToken(sessionToken);

  const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  await pool.query(
    `
      INSERT INTO user_sessions
        (user_id, session_token_hash, expires_at)
      VALUES
        (?, ?, ?)
    `,
    [user.id, sessionTokenHash, expiresAt]
  );

  return {
    token: sessionToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
      role: user.role,
      email_verified: user.email_verified,
    },
  };
};

export const logoutUser = async (sessionId) => {
  await pool.query(
    `
      UPDATE user_sessions
      SET revoked_at = NOW()
      WHERE id = ?
        AND revoked_at IS NULL
    `,
    [sessionId]
  );
};

export const createEmailVerificationToken = async (userId) => {
  await pool.query(
    `
      UPDATE email_verification_tokens
      SET used_at = NOW()
      WHERE user_id = ?
        AND used_at IS NULL
    `,
    [userId]
  );

  const verificationToken = generateVerificationToken();

  const tokenHash = hashToken(verificationToken);

  const expiresAt = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  );

  await pool.query(
    `
      INSERT INTO email_verification_tokens
        (user_id, token_hash, expires_at)
      VALUES
        (?, ?, ?)
    `,
    [userId, tokenHash, expiresAt]
  );

  return verificationToken;
};

export const verifyEmailToken = async (token) => {
  const tokenHash = hashToken(token);

  const [tokens] = await pool.query(
    `
      SELECT
        id,
        user_id,
        expires_at,
        used_at
      FROM email_verification_tokens
      WHERE token_hash = ?
      LIMIT 1
    `,
    [tokenHash]
  );

  if (tokens.length === 0) {
    const error = new Error("Invalid verification token");
    error.statusCode = 400;
    throw error;
  }

  const verification = tokens[0];

  if (verification.used_at) {
    const error = new Error(
      "Verification token has already been used"
    );
    error.statusCode = 400;
    throw error;
  }

  if (new Date(verification.expires_at) <= new Date()) {
    const error = new Error("Verification token has expired");
    error.statusCode = 400;
    throw error;
  }

  await pool.query(
    `
      UPDATE users
      SET
        email_verified = TRUE,
        email_verified_at = NOW()
      WHERE id = ?
    `,
    [verification.user_id]
  );

  await pool.query(
    `
      UPDATE email_verification_tokens
      SET used_at = NOW()
      WHERE id = ?
    `,
    [verification.id]
  );

  return true;
};