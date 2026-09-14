import crypto from "crypto";

export const generateSessionToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const hashToken = (token) => {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
};