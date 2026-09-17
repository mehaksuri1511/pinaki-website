import api from "./api.js";

/**
 * Get all active courses
 */
export const getCourses = async () => {
  const response = await api.get("/courses");

  return response.data;
};

/**
 * Get a single course with its complete learning material
 */
export const getCourseById = async (courseId) => {
  const response = await api.get(`/courses/${courseId}`);

  return response.data;
};