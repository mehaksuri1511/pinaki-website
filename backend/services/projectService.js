import pool from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Get all active projects
|--------------------------------------------------------------------------
*/

export const getAllProjects = async ({
  projectType = null,
  search = null,
} = {}) => {
  let query = `
    SELECT
      p.id,
      p.user_id,
      p.title,
      p.slug,
      p.description,
      p.project_type,
      p.tech_stack,
      p.github_url,
      p.live_url,
      p.image_url,
      p.is_active,
      p.created_at,
      p.updated_at,

      u.name AS creator_name,
      u.email AS creator_email

    FROM projects p

    INNER JOIN users u
      ON u.id = p.user_id

    WHERE p.is_active = TRUE
      AND u.is_active = TRUE
  `;

  const params = [];

  if (projectType) {
    query += ` AND p.project_type = ?`;
    params.push(projectType);
  }

  if (search) {
    query += `
      AND (
        p.title LIKE ?
        OR p.description LIKE ?
        OR p.tech_stack LIKE ?
      )
    `;

    const searchValue = `%${search}%`;

    params.push(
      searchValue,
      searchValue,
      searchValue
    );
  }

  query += `
    ORDER BY p.created_at DESC
  `;

  const [rows] = await pool.query(query, params);

  return rows;
};

/*
|--------------------------------------------------------------------------
| Get single project
|--------------------------------------------------------------------------
*/

export const getProjectById = async (projectId) => {
  const [rows] = await pool.query(
    `
      SELECT
        p.id,
        p.user_id,
        p.title,
        p.slug,
        p.description,
        p.project_type,
        p.tech_stack,
        p.github_url,
        p.live_url,
        p.image_url,
        p.is_active,
        p.created_at,
        p.updated_at,

        u.name AS creator_name,
        u.email AS creator_email

      FROM projects p

      INNER JOIN users u
        ON u.id = p.user_id

      WHERE p.id = ?
        AND p.is_active = TRUE
        AND u.is_active = TRUE

      LIMIT 1
    `,
    [projectId]
  );

  if (rows.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  return rows[0];
};

/*
|--------------------------------------------------------------------------
| Create project
|--------------------------------------------------------------------------
*/

export const createProject = async ({
  userId,
  title,
  slug,
  description,
  projectType,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  // Check user
  const [users] = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        role
      FROM users
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [userId]
  );

  if (users.length === 0) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  // Check slug
  const [existingSlug] = await pool.query(
    `
      SELECT id
      FROM projects
      WHERE slug = ?
      LIMIT 1
    `,
    [slug]
  );

  if (existingSlug.length > 0) {
    const error = new Error(
      "A project with this slug already exists"
    );
    error.statusCode = 409;
    throw error;
  }

  const [result] = await pool.query(
    `
      INSERT INTO projects
      (
        user_id,
        title,
        slug,
        description,
        project_type,
        tech_stack,
        github_url,
        live_url,
        image_url
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      userId,
      title,
      slug,
      description || null,
      projectType,
      techStack || null,
      githubUrl || null,
      liveUrl || null,
      imageUrl || null,
    ]
  );

  return getProjectById(result.insertId);
};

/*
|--------------------------------------------------------------------------
| Update project
|--------------------------------------------------------------------------
*/

export const updateProject = async ({
  projectId,
  userId,
  role,
  title,
  slug,
  description,
  projectType,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  isActive,
}) => {
  const [projects] = await pool.query(
    `
      SELECT
        id,
        user_id,
        slug
      FROM projects
      WHERE id = ?
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  const project = projects[0];

  // Only project owner or admin can update
  if (
    role !== "admin" &&
    Number(project.user_id) !== Number(userId)
  ) {
    const error = new Error(
      "You are not authorized to update this project"
    );
    error.statusCode = 403;
    throw error;
  }

  // Check slug if it is being changed
  if (slug && slug !== project.slug) {
    const [existingSlug] = await pool.query(
      `
        SELECT id
        FROM projects
        WHERE slug = ?
          AND id != ?
        LIMIT 1
      `,
      [slug, projectId]
    );

    if (existingSlug.length > 0) {
      const error = new Error(
        "A project with this slug already exists"
      );
      error.statusCode = 409;
      throw error;
    }
  }

  const fields = [];
  const values = [];

  if (title !== undefined) {
    fields.push("title = ?");
    values.push(title);
  }

  if (slug !== undefined) {
    fields.push("slug = ?");
    values.push(slug);
  }

  if (description !== undefined) {
    fields.push("description = ?");
    values.push(description);
  }

  if (projectType !== undefined) {
    fields.push("project_type = ?");
    values.push(projectType);
  }

  if (techStack !== undefined) {
    fields.push("tech_stack = ?");
    values.push(techStack);
  }

  if (githubUrl !== undefined) {
    fields.push("github_url = ?");
    values.push(githubUrl);
  }

  if (liveUrl !== undefined) {
    fields.push("live_url = ?");
    values.push(liveUrl);
  }

  if (imageUrl !== undefined) {
    fields.push("image_url = ?");
    values.push(imageUrl);
  }

  if (isActive !== undefined) {
    fields.push("is_active = ?");
    values.push(isActive ? 1 : 0);
  }

  if (fields.length === 0) {
    return getProjectById(projectId);
  }

  values.push(projectId);

  await pool.query(
    `
      UPDATE projects
      SET
        ${fields.join(", ")},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    values
  );

  return getProjectById(projectId);
};

/*
|--------------------------------------------------------------------------
| Delete project
|--------------------------------------------------------------------------
|
| We use a soft delete.
| The project remains in the database but becomes inactive.
|--------------------------------------------------------------------------
*/

export const deleteProject = async ({
  projectId,
  userId,
  role,
}) => {
  const [projects] = await pool.query(
    `
      SELECT
        id,
        user_id
      FROM projects
      WHERE id = ?
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  const project = projects[0];

  // Only owner or admin can delete
  if (
    role !== "admin" &&
    Number(project.user_id) !== Number(userId)
  ) {
    const error = new Error(
      "You are not authorized to delete this project"
    );
    error.statusCode = 403;
    throw error;
  }

  await pool.query(
    `
      UPDATE projects
      SET
        is_active = FALSE,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    [projectId]
  );

  return {
    id: projectId,
    message: "Project deleted successfully",
  };
};

/*
|--------------------------------------------------------------------------
| Get projects created by a specific user
|--------------------------------------------------------------------------
*/

export const getMyProjects = async (userId) => {
  const [rows] = await pool.query(
    `
      SELECT
        p.id,
        p.user_id,
        p.title,
        p.slug,
        p.description,
        p.project_type,
        p.tech_stack,
        p.github_url,
        p.live_url,
        p.image_url,
        p.is_active,
        p.created_at,
        p.updated_at

      FROM projects p

      WHERE p.user_id = ?

      ORDER BY p.created_at DESC
    `,
    [userId]
  );

  return rows;
};