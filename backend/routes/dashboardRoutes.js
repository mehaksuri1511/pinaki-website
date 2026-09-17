import express from "express";

import {
  getLearningDashboardData,
  getProjectDashboardData,
} from "../controllers/dashboardController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/learning",
  authMiddleware,
  getLearningDashboardData
);

router.get(
  "/projects",
  authMiddleware,
  getProjectDashboardData
);

export default router;