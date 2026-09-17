import {
  getAllPosts,
  getPostBySlug,
  getAllCategories,
  getAllTags,
} from "../services/blogService.js";

/*
|--------------------------------------------------------------------------
| GET /api/blog
|--------------------------------------------------------------------------
*/

export const getPosts = async (
  req,
  res,
  next
) => {
  try {
    let page = Number(req.query.page || 1);
    let limit = Number(req.query.limit || 10);

    if (
      !Number.isInteger(page) ||
      page < 1
    ) {
      page = 1;
    }

    if (
      !Number.isInteger(limit) ||
      limit < 1
    ) {
      limit = 10;
    }

    // Prevent excessively large requests
    if (limit > 50) {
      limit = 50;
    }

    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : "";

    const category =
      typeof req.query.category === "string"
        ? req.query.category.trim().toLowerCase()
        : "";

    const tag =
      typeof req.query.tag === "string"
        ? req.query.tag.trim().toLowerCase()
        : "";

    const result = await getAllPosts({
      page,
      limit,
      search,
      category,
      tag,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/blog/:slug
|--------------------------------------------------------------------------
*/

export const getPost = async (
  req,
  res,
  next
) => {
  try {
    const slug = req.params.slug;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Post slug is required",
      });
    }

    const post = await getPostBySlug(slug);

    res.status(200).json({
      success: true,
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/blog/categories
|--------------------------------------------------------------------------
*/

export const getCategories = async (
  req,
  res,
  next
) => {
  try {
    const categories =
      await getAllCategories();

    res.status(200).json({
      success: true,
      data: {
        categories,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/blog/tags
|--------------------------------------------------------------------------
*/

export const getTags = async (
  req,
  res,
  next
) => {
  try {
    const tags = await getAllTags();

    res.status(200).json({
      success: true,
      data: {
        tags,
      },
    });
  } catch (error) {
    next(error);
  }
};