import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getProjects,
  getProject,
  getProgress,
  updateProgress,
  submit,
  getSubmissions,
} from "../controllers/projectController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public routes
|--------------------------------------------------------------------------
*/

router.get("/", getProjects);

/*
|--------------------------------------------------------------------------
| Authenticated routes
|--------------------------------------------------------------------------
*/

router.get(
  "/:id/progress",
  authMiddleware,
  getProgress
);

router.patch(
  "/:id/progress",
  authMiddleware,
  updateProgress
);

router.post(
  "/:id/submissions",
  authMiddleware,
  submit
);

router.get(
  "/:id/submissions",
  authMiddleware,
  getSubmissions
);

/*
|--------------------------------------------------------------------------
| Public single-project route
|--------------------------------------------------------------------------
*/

router.get("/:id", getProject);

export default router;