import api from "./api.js";

/**
 * Get all active projects
 */
export const getProjects = async () => {
  const response = await api.get("/projects");

  return response.data;
};

/**
 * Get a single project
 */
export const getProjectById = async (projectId) => {
  const response = await api.get(
    `/projects/${projectId}`
  );

  return response.data;
};

/**
 * Get the logged-in student's progress for a project
 */
export const getProjectProgress = async (projectId) => {
  const response = await api.get(
    `/projects/${projectId}/progress`
  );

  return response.data;
};

/**
 * Update the logged-in student's project progress
 */
export const updateProjectProgress = async ({
  projectId,
  status,
  progressPercent,
}) => {
  const response = await api.patch(
    `/projects/${projectId}/progress`,
    {
      status,
      progress_percent: progressPercent,
    }
  );

  return response.data;
};

/**
 * Submit a project
 */
export const submitProject = async ({
  projectId,
  submissionUrl,
  notes,
}) => {
  const response = await api.post(
    `/projects/${projectId}/submissions`,
    {
      submission_url: submissionUrl || null,
      notes: notes || null,
    }
  );

  return response.data;
};

/**
 * Get submissions of the logged-in student
 * for a specific project
 */
export const getProjectSubmissions = async (projectId) => {
  const response = await api.get(
    `/projects/${projectId}/submissions`
  );

  return response.data;
};