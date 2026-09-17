import express from "express";

import {
  getPosts,
  getPost,
  getCategories,
  getTags,
} from "../controllers/blogController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
| These routes must come before /:slug.
|--------------------------------------------------------------------------
*/

router.get("/categories", getCategories);

router.get("/tags", getTags);

router.get("/", getPosts);

router.get("/:slug", getPost);

export default router;