import pool from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Get all published blog posts
|--------------------------------------------------------------------------
*/

export const getAllPosts = async ({
  page = 1,
  limit = 10,
  search = "",
  category = "",
  tag = "",
}) => {
  const offset = (page - 1) * limit;

  const conditions = [
    `p.status = 'published'`,
  ];

  const params = [];

  /*
  |--------------------------------------------------------------------------
  | Search
  |--------------------------------------------------------------------------
  */

  if (search) {
    conditions.push(`
      (
        p.title LIKE ?
        OR p.excerpt LIKE ?
        OR p.content LIKE ?
      )
    `);

    const searchValue = `%${search}%`;

    params.push(
      searchValue,
      searchValue,
      searchValue
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Category filter
  |--------------------------------------------------------------------------
  */

  if (category) {
    conditions.push(`
      EXISTS (
        SELECT 1
        FROM post_categories pc_filter
        INNER JOIN categories c_filter
          ON c_filter.id = pc_filter.category_id
        WHERE pc_filter.post_id = p.id
          AND c_filter.slug = ?
      )
    `);

    params.push(category);
  }

  /*
  |--------------------------------------------------------------------------
  | Tag filter
  |--------------------------------------------------------------------------
  */

  if (tag) {
    conditions.push(`
      EXISTS (
        SELECT 1
        FROM post_tags pt_filter
        INNER JOIN tags t_filter
          ON t_filter.id = pt_filter.tag_id
        WHERE pt_filter.post_id = p.id
          AND t_filter.slug = ?
      )
    `);

    params.push(tag);
  }

  const whereClause = conditions.join(" AND ");

  /*
  |--------------------------------------------------------------------------
  | Count
  |--------------------------------------------------------------------------
  */

  const [countRows] = await pool.query(
    `
      SELECT COUNT(*) AS total
      FROM posts p
      WHERE ${whereClause}
    `,
    params
  );

  const total = Number(countRows[0].total);

  /*
  |--------------------------------------------------------------------------
  | Posts
  |--------------------------------------------------------------------------
  */

  const [posts] = await pool.query(
    `
      SELECT
        p.id,
        p.title,
        p.slug,
        p.excerpt,
        p.featured_image,
        p.author_id,
        p.status,
        p.published_at,
        p.created_at,
        p.updated_at

      FROM posts p

      WHERE ${whereClause}

      ORDER BY
        p.published_at DESC,
        p.id DESC

      LIMIT ?
      OFFSET ?
    `,
    [
      ...params,
      Number(limit),
      Number(offset),
    ]
  );

  /*
  |--------------------------------------------------------------------------
  | Add categories and tags
  |--------------------------------------------------------------------------
  */

  for (const post of posts) {
    const [categories] = await pool.query(
      `
        SELECT
          c.id,
          c.name,
          c.slug

        FROM post_categories pc

        INNER JOIN categories c
          ON c.id = pc.category_id

        WHERE pc.post_id = ?

        ORDER BY c.name ASC
      `,
      [post.id]
    );

    const [tags] = await pool.query(
      `
        SELECT
          t.id,
          t.name,
          t.slug

        FROM post_tags pt

        INNER JOIN tags t
          ON t.id = pt.tag_id

        WHERE pt.post_id = ?

        ORDER BY t.name ASC
      `,
      [post.id]
    );

    post.categories = categories;
    post.tags = tags;
  }

  const totalPages =
    total === 0
      ? 0
      : Math.ceil(total / limit);

  return {
    posts,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      total_pages: totalPages,
      has_next_page:
        Number(page) < totalPages,
      has_previous_page:
        Number(page) > 1,
    },
  };
};

/*
|--------------------------------------------------------------------------
| Get single published post by slug
|--------------------------------------------------------------------------
*/

export const getPostBySlug = async (slug) => {
  const [rows] = await pool.query(
    `
      SELECT
        p.id,
        p.title,
        p.slug,
        p.excerpt,
        p.content,
        p.featured_image,
        p.author_id,
        p.status,
        p.published_at,
        p.created_at,
        p.updated_at

      FROM posts p

      WHERE p.slug = ?
        AND p.status = 'published'

      LIMIT 1
    `,
    [slug]
  );

  if (rows.length === 0) {
    const error = new Error("Blog post not found");
    error.statusCode = 404;
    throw error;
  }

  const post = rows[0];

  /*
  |--------------------------------------------------------------------------
  | Categories
  |--------------------------------------------------------------------------
  */

  const [categories] = await pool.query(
    `
      SELECT
        c.id,
        c.name,
        c.slug

      FROM post_categories pc

      INNER JOIN categories c
        ON c.id = pc.category_id

      WHERE pc.post_id = ?

      ORDER BY c.name ASC
    `,
    [post.id]
  );

  /*
  |--------------------------------------------------------------------------
  | Tags
  |--------------------------------------------------------------------------
  */

  const [tags] = await pool.query(
    `
      SELECT
        t.id,
        t.name,
        t.slug

      FROM post_tags pt

      INNER JOIN tags t
        ON t.id = pt.tag_id

      WHERE pt.post_id = ?

      ORDER BY t.name ASC
    `,
    [post.id]
  );

  post.categories = categories;
  post.tags = tags;

  return post;
};

/*
|--------------------------------------------------------------------------
| Get categories
|--------------------------------------------------------------------------
*/

export const getAllCategories = async () => {
  const [rows] = await pool.query(
    `
      SELECT
        c.id,
        c.name,
        c.slug,
        COUNT(pc.post_id) AS post_count

      FROM categories c

      LEFT JOIN post_categories pc
        ON pc.category_id = c.id

      LEFT JOIN posts p
        ON p.id = pc.post_id
        AND p.status = 'published'

      GROUP BY
        c.id,
        c.name,
        c.slug

      ORDER BY c.name ASC
    `
  );

  return rows;
};

/*
|--------------------------------------------------------------------------
| Get tags
|--------------------------------------------------------------------------
*/

export const getAllTags = async () => {
  const [rows] = await pool.query(
    `
      SELECT
        t.id,
        t.name,
        t.slug,
        COUNT(pt.post_id) AS post_count

      FROM tags t

      LEFT JOIN post_tags pt
        ON pt.tag_id = t.id

      LEFT JOIN posts p
        ON p.id = pt.post_id
        AND p.status = 'published'

      GROUP BY
        t.id,
        t.name,
        t.slug

      ORDER BY t.name ASC
    `
  );

  return rows;
};