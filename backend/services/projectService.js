import pool from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Get all active projects
|--------------------------------------------------------------------------
*/

export const getAllProjects = async () => {
  const [rows] = await pool.query(
    `
      SELECT
        p.id,
        p.course_id,
        p.title,
        p.slug,
        p.description,
        p.difficulty,
        p.instructions,
        p.is_active,
        p.created_at,
        p.updated_at,

        c.title AS course_title,
        c.slug AS course_slug

      FROM projects p

      INNER JOIN courses c
        ON c.id = p.course_id

      WHERE p.is_active = TRUE

      ORDER BY p.created_at DESC
    `
  );

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
        p.course_id,
        p.title,
        p.slug,
        p.description,
        p.difficulty,
        p.instructions,
        p.is_active,
        p.created_at,
        p.updated_at,

        c.title AS course_title,
        c.slug AS course_slug

      FROM projects p

      INNER JOIN courses c
        ON c.id = p.course_id

      WHERE p.id = ?
        AND p.is_active = TRUE

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
| Get project progress for logged-in user
|--------------------------------------------------------------------------
*/

export const getProjectProgress = async (
  userId,
  projectId
) => {
  // First check that project exists
  const [projects] = await pool.query(
    `
      SELECT
        id,
        course_id,
        title,
        slug
      FROM projects
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  const [rows] = await pool.query(
    `
      SELECT
        pp.id,
        pp.user_id,
        pp.project_id,
        pp.status,
        pp.progress_percent,
        pp.started_at,
        pp.completed_at,
        pp.updated_at

      FROM project_progress pp

      WHERE pp.user_id = ?
        AND pp.project_id = ?

      LIMIT 1
    `,
    [userId, projectId]
  );

  // No progress record means the user hasn't started it
  if (rows.length === 0) {
    return {
      user_id: userId,
      project_id: projectId,
      status: "not_started",
      progress_percent: 0,
      started_at: null,
      completed_at: null,
    };
  }

  return rows[0];
};

/*
|--------------------------------------------------------------------------
| Update project progress
|--------------------------------------------------------------------------
*/

export const updateProjectProgress = async ({
  userId,
  projectId,
  status,
  progressPercent,
}) => {
  // Check project
  const [projects] = await pool.query(
    `
      SELECT
        id
      FROM projects
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  // Validate progress
  if (
    !Number.isFinite(progressPercent) ||
    progressPercent < 0 ||
    progressPercent > 100
  ) {
    const error = new Error(
      "progress_percent must be between 0 and 100"
    );

    error.statusCode = 400;
    throw error;
  }

  const validStatuses = [
    "not_started",
    "in_progress",
    "submitted",
    "completed",
  ];

  if (!validStatuses.includes(status)) {
    const error = new Error("Invalid project status");
    error.statusCode = 400;
    throw error;
  }

  let startedAt = null;
  let completedAt = null;

  // If the project has started
  if (
    status === "in_progress" ||
    status === "submitted" ||
    status === "completed"
  ) {
    startedAt = new Date();
  }

  // If completed
  if (status === "completed") {
    completedAt = new Date();
  }

  /*
   * Don't overwrite the original started_at
   * when updating an existing progress record.
   */

  const [existing] = await pool.query(
    `
      SELECT
        id,
        started_at
      FROM project_progress
      WHERE user_id = ?
        AND project_id = ?
      LIMIT 1
    `,
    [userId, projectId]
  );

  if (existing.length > 0) {
    startedAt = existing[0].started_at;

    await pool.query(
      `
        UPDATE project_progress
        SET
          status = ?,
          progress_percent = ?,
          completed_at = ?,
          updated_at = CURRENT_TIMESTAMP

        WHERE user_id = ?
          AND project_id = ?
      `,
      [
        status,
        progressPercent,
        completedAt,
        userId,
        projectId,
      ]
    );
  } else {
    await pool.query(
      `
        INSERT INTO project_progress
          (
            user_id,
            project_id,
            status,
            progress_percent,
            started_at,
            completed_at
          )
        VALUES
          (?, ?, ?, ?, ?, ?)
      `,
      [
        userId,
        projectId,
        status,
        progressPercent,
        startedAt,
        completedAt,
      ]
    );
  }

  return getProjectProgress(userId, projectId);
};

/*
|--------------------------------------------------------------------------
| Submit project
|--------------------------------------------------------------------------
*/

export const submitProject = async ({
  userId,
  projectId,
  submissionUrl,
  notes,
}) => {
  // Check project
  const [projects] = await pool.query(
    `
      SELECT
        id,
        title
      FROM projects
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  // Create submission
  const [result] = await pool.query(
    `
      INSERT INTO project_submissions
        (
          user_id,
          project_id,
          submission_url,
          notes,
          status
        )
      VALUES
        (?, ?, ?, ?, 'submitted')
    `,
    [
      userId,
      projectId,
      submissionUrl || null,
      notes || null,
    ]
  );

  // Mark project as submitted
  const [existingProgress] = await pool.query(
    `
      SELECT
        id,
        started_at
      FROM project_progress
      WHERE user_id = ?
        AND project_id = ?
      LIMIT 1
    `,
    [userId, projectId]
  );

  if (existingProgress.length > 0) {
    await pool.query(
      `
        UPDATE project_progress
        SET
          status = 'submitted',
          progress_percent = GREATEST(progress_percent, 100),
          updated_at = CURRENT_TIMESTAMP

        WHERE user_id = ?
          AND project_id = ?
      `,
      [userId, projectId]
    );
  } else {
    await pool.query(
      `
        INSERT INTO project_progress
          (
            user_id,
            project_id,
            status,
            progress_percent,
            started_at
          )
        VALUES
          (?, ?, 'submitted', 100, NOW())
      `,
      [userId, projectId]
    );
  }

  return getSubmissionById(
    userId,
    result.insertId
  );
};

/*
|--------------------------------------------------------------------------
| Get one submission
|--------------------------------------------------------------------------
*/

export const getSubmissionById = async (
  userId,
  submissionId
) => {
  const [rows] = await pool.query(
    `
      SELECT
        ps.id,
        ps.user_id,
        ps.project_id,
        ps.submission_url,
        ps.notes,
        ps.status,
        ps.reviewer_feedback,
        ps.submitted_at,
        ps.reviewed_at,

        p.title AS project_title,
        p.slug AS project_slug

      FROM project_submissions ps

      INNER JOIN projects p
        ON p.id = ps.project_id

      WHERE ps.id = ?
        AND ps.user_id = ?

      LIMIT 1
    `,
    [submissionId, userId]
  );

  if (rows.length === 0) {
    const error = new Error("Submission not found");
    error.statusCode = 404;
    throw error;
  }

  return rows[0];
};

/*
|--------------------------------------------------------------------------
| Get user's submissions for a project
|--------------------------------------------------------------------------
*/

export const getProjectSubmissions = async (
  userId,
  projectId
) => {
  // Check project
  const [projects] = await pool.query(
    `
      SELECT
        id
      FROM projects
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [projectId]
  );

  if (projects.length === 0) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  const [rows] = await pool.query(
    `
      SELECT
        ps.id,
        ps.user_id,
        ps.project_id,
        ps.submission_url,
        ps.notes,
        ps.status,
        ps.reviewer_feedback,
        ps.submitted_at,
        ps.reviewed_at

      FROM project_submissions ps

      WHERE ps.user_id = ?
        AND ps.project_id = ?

      ORDER BY ps.submitted_at DESC
    `,
    [userId, projectId]
  );

  return rows;
};