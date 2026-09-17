import pool from "../config/db.js";

export const getLearningDashboard = async (userId) => {
  // Get the user's enrollments with their course and progress
  const [enrollments] = await pool.query(
    `
      SELECT
        e.id AS enrollment_id,
        e.status AS enrollment_status,
        e.enrolled_at,
        e.completed_at,

        c.id AS course_id,
        c.slug AS course_slug,
        c.title AS course_title,
        c.category AS course_category,
        c.duration AS course_duration,
        c.level AS course_level,
        c.image_url AS course_image_url,

        COALESCE(cp.progress_percent, 0) AS progress_percent,
        cp.last_module_id,
        cp.last_accessed_at

      FROM enrollments e

      INNER JOIN courses c
        ON c.id = e.course_id

      LEFT JOIN course_progress cp
        ON cp.enrollment_id = e.id

      WHERE e.user_id = ?
        AND c.is_active = TRUE

      ORDER BY e.enrolled_at DESC
    `,
    [userId]
  );

  // Get active courses that the user has NOT enrolled in
  const [exploreCourses] = await pool.query(
    `
      SELECT
        c.id,
        c.slug,
        c.title,
        c.category,
        c.duration,
        c.level,
        c.image_url,
        c.overview

      FROM courses c

      WHERE c.is_active = TRUE

        AND NOT EXISTS (
          SELECT 1
          FROM enrollments e
          WHERE e.user_id = ?
            AND e.course_id = c.id
            AND e.status != 'cancelled'
        )

      ORDER BY c.created_at DESC
    `,
    [userId]
  );
  

  return {
    enrollments: enrollments.map((enrollment) => ({
      id: enrollment.enrollment_id,
      status: enrollment.enrollment_status,
      enrolled_at: enrollment.enrolled_at,
      completed_at: enrollment.completed_at,

      course: {
        id: enrollment.course_id,
        slug: enrollment.course_slug,
        title: enrollment.course_title,
        category: enrollment.course_category,
        duration: enrollment.course_duration,
        level: enrollment.course_level,
        image_url: enrollment.course_image_url,
      },

      progress: {
        progress_percent: Number(enrollment.progress_percent),
        last_module_id: enrollment.last_module_id,
        last_accessed_at: enrollment.last_accessed_at,
      },
    })),

    

    explore_courses: exploreCourses,
  };
};

export const getProjectDashboard = async (userId) => {
  const [projects] = await pool.query(
    `
      SELECT
        p.id AS project_id,
        p.title AS project_title,
        p.slug AS project_slug,
        p.description AS project_description,
        p.difficulty AS project_difficulty,
        p.instructions AS project_instructions,

        c.id AS course_id,
        c.title AS course_title,
        c.slug AS course_slug,

        pp.status AS progress_status,
        COALESCE(pp.progress_percent, 0) AS progress_percent,
        pp.started_at,
        pp.completed_at,
        pp.updated_at AS progress_updated_at

      FROM projects p

      INNER JOIN courses c
        ON c.id = p.course_id

      INNER JOIN enrollments e
        ON e.course_id = c.id
        AND e.user_id = ?
        AND e.status IN ('active', 'completed')

      LEFT JOIN project_progress pp
        ON pp.project_id = p.id
        AND pp.user_id = ?

      WHERE p.is_active = TRUE
        AND c.is_active = TRUE

      ORDER BY p.created_at DESC
    `,
    [userId, userId]
  );

  // Get submissions belonging to this student
  const projectIds = projects.map(
    (project) => project.project_id
  );

  let submissions = [];

  if (projectIds.length > 0) {
    const placeholders = projectIds
      .map(() => "?")
      .join(",");

    const [rows] = await pool.query(
      `
        SELECT
          id,
          project_id,
          submission_url,
          notes,
          status,
          reviewer_feedback,
          submitted_at,
          reviewed_at

        FROM project_submissions

        WHERE user_id = ?
          AND project_id IN (${placeholders})

        ORDER BY submitted_at DESC
      `,
      [userId, ...projectIds]
    );

    submissions = rows;
  }

  return {
    projects: projects.map((project) => ({
      id: project.project_id,

      title: project.project_title,
      slug: project.project_slug,
      description: project.project_description,
      difficulty: project.project_difficulty,
      instructions: project.project_instructions,

      course: {
        id: project.course_id,
        title: project.course_title,
        slug: project.course_slug,
      },

      progress: {
        status: project.progress_status || "not_started",
        progress_percent: Number(project.progress_percent),
        started_at: project.started_at,
        completed_at: project.completed_at,
        updated_at: project.progress_updated_at,
      },

      submissions: submissions
        .filter(
          (submission) =>
            submission.project_id === project.project_id
        )
        .map((submission) => ({
          id: submission.id,
          submission_url: submission.submission_url,
          notes: submission.notes,
          status: submission.status,
          reviewer_feedback: submission.reviewer_feedback,
          submitted_at: submission.submitted_at,
          reviewed_at: submission.reviewed_at,
        })),
    })),
  };
};