import api from "./api.js";

/**
 * Enroll the logged-in user in a course
 */
export const enrollInCourse = async (courseId) => {
  const response = await api.post("/enrollments", {
    course_id: courseId,
  });

  return response.data;
};

/**
 * Get all enrollments of the logged-in user
 */
export const getMyEnrollments = async () => {
  const response = await api.get("/enrollments/my");

  return response.data;
};

/**
 * Get a specific enrollment
 */
export const getEnrollmentById = async (enrollmentId) => {
  const response = await api.get(
    `/enrollments/${enrollmentId}`
  );

  return response.data;
};

/**
 * Cancel an enrollment
 */
export const cancelEnrollment = async (enrollmentId) => {
  const response = await api.patch(
    `/enrollments/${enrollmentId}/cancel`
  );

  return response.data;
};

/**
 * Get course progress for an enrollment
 */
export const getCourseProgress = async (enrollmentId) => {
  const response = await api.get(
    `/enrollments/${enrollmentId}/progress`
  );

  return response.data;
};

/**
 * Update course progress
 */
export const updateCourseProgress = async ({
  enrollmentId,
  progressPercent,
  lastModuleId = null,
}) => {
  const response = await api.patch(
    `/enrollments/${enrollmentId}/progress`,
    {
      progress_percent: progressPercent,
      last_module_id: lastModuleId,
    }
  );

  return response.data;
};