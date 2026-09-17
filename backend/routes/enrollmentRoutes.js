import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  enroll,
  getMyEnrollmentsController,
  getEnrollment,
  cancel,
  getProgress,
  updateProgress,
} from "../controllers/enrollmentController.js";

const router = express.Router();

// All enrollment routes require authentication
router.use(authMiddleware);

// Enroll in a course
router.post("/", enroll);

// Get logged-in user's enrollments
router.get("/my", getMyEnrollmentsController);

// Get specific enrollment
router.get("/:id", getEnrollment);

// Cancel enrollment
router.patch("/:id/cancel", cancel);

// Get course progress
router.get("/:id/progress", getProgress);

// Update course progress
router.patch("/:id/progress", updateProgress);

export default router;