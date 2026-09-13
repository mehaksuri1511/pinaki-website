import pool from "../config/db.js";

export const getAllCourses = async () => {
  const [rows] = await pool.query(`
    SELECT
      id,
      slug,
      title,
      category,
      duration,
      level,
      image_url,
      overview,
      is_active,
      created_at,
      updated_at
    FROM courses
    WHERE is_active = TRUE
    ORDER BY id ASC
  `);

  return rows;
};