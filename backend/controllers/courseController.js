import { getAllCourses } from "../services/courseService.js";

export const getCourses = async (req, res, next) => {
  try {
    const courses = await getAllCourses();

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};