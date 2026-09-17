import pool from "../config/db.js";

export const createEnrollment = async (userId, courseId) => {
  // Check that course exists and is active
  const [courses] = await pool.query(
    `
      SELECT
        id,
        slug,
        title,
        category,
        duration,
        level,
        image_url
      FROM courses
      WHERE id = ?
        AND is_active = TRUE
      LIMIT 1
    `,
    [courseId]
  );

  if (courses.length === 0) {
    const error = new Error("Course not found");
    error.statusCode = 404;
    throw error;
  }

  // Check existing enrollment
  const [existingEnrollments] = await pool.query(
    `
      SELECT
        id,
        status,
        enrolled_at,
        completed_at
      FROM enrollments
      WHERE user_id = ?
        AND course_id = ?
      LIMIT 1
    `,
    [userId, courseId]
  );

  if (existingEnrollments.length > 0) {
    const enrollment = existingEnrollments[0];

    if (
      enrollment.status === "cancelled"
    ) {
      // Allow re-enrollment after cancellation
      const [result] = await pool.query(
        `
          UPDATE enrollments
          SET
            status = 'active',
            enrolled_at = NOW(),
            completed_at = NULL
          WHERE id = ?
        `,
        [enrollment.id]
      );

      return getEnrollmentById(userId, enrollment.id);
    }

    const error = new Error(
      "You are already enrolled in this course"
    );
    error.statusCode = 409;
    throw error;
  }

  // Create enrollment
  const [result] = await pool.query(
    `
      INSERT INTO enrollments
        (user_id, course_id, status)
      VALUES
        (?, ?, 'active')
    `,
    [userId, courseId]
  );

  // Create initial progress record
  await pool.query(
    `
      INSERT INTO course_progress
        (
          enrollment_id,
          progress_percent,
          last_module_id
        )
      VALUES
        (?, 0, NULL)
    `,
    [result.insertId]
  );

  return getEnrollmentById(userId, result.insertId);
};

export const getMyEnrollments = async (userId) => {
  const [rows] = await pool.query(
    `
      SELECT
        e.id,
        e.status,
        e.enrolled_at,
        e.completed_at,

        c.id AS course_id,
        c.slug,
        c.title,
        c.category,
        c.duration,
        c.level,
        c.image_url,

        COALESCE(cp.progress_percent, 0) AS progress_percent,
        cp.last_module_id,
        cp.last_accessed_at

      FROM enrollments e

      INNER JOIN courses c
        ON c.id = e.course_id

      LEFT JOIN course_progress cp
        ON cp.enrollment_id = e.id

      WHERE e.user_id = ?

      ORDER BY e.enrolled_at DESC
    `,
    [userId]
  );

  return rows;
};

export const getEnrollmentById = async (
  userId,
  enrollmentId
) => {
  const [rows] = await pool.query(
    `
      SELECT
        e.id,
        e.status,
        e.enrolled_at,
        e.completed_at,

        c.id AS course_id,
        c.slug,
        c.title,
        c.category,
        c.duration,
        c.level,
        c.image_url,

        COALESCE(cp.progress_percent, 0) AS progress_percent,
        cp.last_module_id,
        cp.last_accessed_at

      FROM enrollments e

      INNER JOIN courses c
        ON c.id = e.course_id

      LEFT JOIN course_progress cp
        ON cp.enrollment_id = e.id

      WHERE e.id = ?
        AND e.user_id = ?

      LIMIT 1
    `,
    [enrollmentId, userId]
  );

  if (rows.length === 0) {
    const error = new Error("Enrollment not found");
    error.statusCode = 404;
    throw error;
  }

  return rows[0];
};

export const cancelEnrollment = async (
  userId,
  enrollmentId
) => {
  const [rows] = await pool.query(
    `
      SELECT
        id,
        status
      FROM enrollments
      WHERE id = ?
        AND user_id = ?
      LIMIT 1
    `,
    [enrollmentId, userId]
  );

  if (rows.length === 0) {
    const error = new Error("Enrollment not found");
    error.statusCode = 404;
    throw error;
  }

  if (rows[0].status === "cancelled") {
    const error = new Error(
      "Enrollment is already cancelled"
    );
    error.statusCode = 400;
    throw error;
  }

  if (rows[0].status === "completed") {
    const error = new Error(
      "Completed enrollment cannot be cancelled"
    );
    error.statusCode = 400;
    throw error;
  }

  await pool.query(
    `
      UPDATE enrollments
      SET status = 'cancelled'
      WHERE id = ?
        AND user_id = ?
    `,
    [enrollmentId, userId]
  );

  return getEnrollmentById(userId, enrollmentId);
};

export const getCourseProgress = async (
  userId,
  enrollmentId
) => {
  const [rows] = await pool.query(
    `
      SELECT
        e.id AS enrollment_id,
        e.user_id,
        e.course_id,
        e.status,

        cp.progress_percent,
        cp.last_module_id,
        cp.last_accessed_at,

        c.title AS course_title,
        c.slug AS course_slug

      FROM enrollments e

      INNER JOIN courses c
        ON c.id = e.course_id

      LEFT JOIN course_progress cp
        ON cp.enrollment_id = e.id

      WHERE e.id = ?
        AND e.user_id = ?

      LIMIT 1
    `,
    [enrollmentId, userId]
  );

  if (rows.length === 0) {
    const error = new Error("Enrollment not found");
    error.statusCode = 404;
    throw error;
  }

  return rows[0];
};

export const updateCourseProgress = async ({
  userId,
  enrollmentId,
  progressPercent,
  lastModuleId,
}) => {
  // Get enrollment + course
  const [enrollments] = await pool.query(
    `
      SELECT
        id,
        course_id,
        status
      FROM enrollments
      WHERE id = ?
        AND user_id = ?
      LIMIT 1
    `,
    [enrollmentId, userId]
  );

  if (enrollments.length === 0) {
    const error = new Error("Enrollment not found");
    error.statusCode = 404;
    throw error;
  }

  const enrollment = enrollments[0];

  if (enrollment.status === "cancelled") {
    const error = new Error(
      "Cancelled enrollment cannot be updated"
    );
    error.statusCode = 400;
    throw error;
  }

  if (progressPercent < 0 || progressPercent > 100) {
    const error = new Error(
      "Progress must be between 0 and 100"
    );
    error.statusCode = 400;
    throw error;
  }

  // If a module is provided, verify that it belongs
  // to this course.
  if (lastModuleId !== null && lastModuleId !== undefined) {
    const [modules] = await pool.query(
      `
        SELECT id
        FROM course_modules
        WHERE id = ?
          AND course_id = ?
        LIMIT 1
      `,
      [lastModuleId, enrollment.course_id]
    );

    if (modules.length === 0) {
      const error = new Error(
        "Invalid module for this course"
      );
      error.statusCode = 400;
      throw error;
    }
  }

  const finalProgress = Number(progressPercent);

  let status = enrollment.status;
  let completedAt = null;

  if (finalProgress >= 100) {
    status = "completed";
    completedAt = new Date();
  } else if (enrollment.status === "completed") {
    status = "active";
  }

  await pool.query(
    `
      INSERT INTO course_progress
        (
          enrollment_id,
          progress_percent,
          last_module_id,
          last_accessed_at
        )
      VALUES
        (?, ?, ?, NOW())

      ON DUPLICATE KEY UPDATE
        progress_percent = VALUES(progress_percent),
        last_module_id = VALUES(last_module_id),
        last_accessed_at = NOW()
    `,
    [
      enrollmentId,
      finalProgress,
      lastModuleId ?? null,
    ]
  );

  await pool.query(
    `
      UPDATE enrollments
      SET
        status = ?,
        completed_at = ?
      WHERE id = ?
        AND user_id = ?
    `,
    [
      status,
      completedAt,
      enrollmentId,
      userId,
    ]
  );

  return getCourseProgress(userId, enrollmentId);
};