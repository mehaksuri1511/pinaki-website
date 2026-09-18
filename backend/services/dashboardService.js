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