import api from "./api.js";

/**
 * Get the logged-in student's learning dashboard
 */
export const getLearningDashboard = async () => {
  const response = await api.get("/dashboard/learning");

  return response.data;
};

/**
 * Get the logged-in student's project dashboard
 */
export const getProjectDashboard = async () => {
  const response = await api.get("/dashboard/projects");

  return response.data;
};