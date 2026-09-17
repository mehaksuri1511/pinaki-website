import api from "./api.js";

/**
 * Get all blog posts
 *
 * Supports:
 * - pagination
 * - search
 * - category filter
 * - tag filter
 */
export const getBlogPosts = async ({
  page = 1,
  limit = 10,
  search = "",
  category = "",
  tag = "",
} = {}) => {
  const response = await api.get("/blog/posts", {
    params: {
      page,
      limit,
      search: search || undefined,
      category: category || undefined,
      tag: tag || undefined,
    },
  });

  return response.data;
};

/**
 * Get a single blog post by slug
 */
export const getBlogPostBySlug = async (slug) => {
  const response = await api.get(`/blog/posts/${slug}`);

  return response.data;
};

/**
 * Get all blog categories
 */
export const getBlogCategories = async () => {
  const response = await api.get("/blog/categories");

  return response.data;
};

/**
 * Get all blog tags
 */
export const getBlogTags = async () => {
  const response = await api.get("/blog/tags");

  return response.data;
};