import express from "express";

import {
  register,
  login,
  getMe,
  logout,
  verifyEmail,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/me", authMiddleware, getMe);

router.post("/logout", authMiddleware, logout);

router.post("/verify-email", verifyEmail);

export default router;