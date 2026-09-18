import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getProjects,
  getProject,
  create,
  update,
  remove,
  getMyProjectsController,
} from "../controllers/projectController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public routes
|--------------------------------------------------------------------------
*/

// GET /api/projects
// Public route for getting all active projects
router.get("/", getProjects);


/*
|--------------------------------------------------------------------------
| Authenticated routes
|--------------------------------------------------------------------------
*/

// IMPORTANT:
// /my MUST come before /:id
//
// GET /api/projects/my
// Returns only projects belonging to the logged-in user.
router.get(
  "/my",
  authMiddleware,
  getMyProjectsController
);


// GET /api/projects/:id
// Get a single project by ID.
router.get(
  "/:id",
  getProject
);


// POST /api/projects
// Create a project for the logged-in user.
router.post(
  "/",
  authMiddleware,
  create
);


// PATCH /api/projects/:id
// Update user's own project.
router.patch(
  "/:id",
  authMiddleware,
  update
);


// DELETE /api/projects/:id
// Delete user's own project.
router.delete(
  "/:id",
  authMiddleware,
  remove
);

export default router;