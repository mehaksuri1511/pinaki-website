import pool from "../config/db.js";
import { hashToken } from "../utils/tokens.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const sessionTokenHash = hashToken(token);

    const [rows] = await pool.query(
      `
        SELECT
          us.id AS session_id,
          us.user_id,
          us.expires_at,
          u.name,
          u.email,
          u.avatar_url,
          u.role,
          u.email_verified,
          u.is_active
        FROM user_sessions us
        INNER JOIN users u ON u.id = us.user_id
        WHERE us.session_token_hash = ?
          AND us.revoked_at IS NULL
          AND us.expires_at > NOW()
          AND u.is_active = TRUE
        LIMIT 1
      `,
      [sessionTokenHash]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired session",
      });
    }

    const session = rows[0];

    req.user = {
      id: session.user_id,
      name: session.name,
      email: session.email,
      avatar_url: session.avatar_url,
      role: session.role,
      email_verified: session.email_verified,
    };

    req.sessionId = session.session_id;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;