import api from "./api.js";

/**
 * Get all active projects
 *
 * Optional filters:
 * - type
 * - search
 */
export const getProjects = async ({
  type = null,
  search = null,
} = {}) => {
  const params = {};

  if (type) {
    params.type = type;
  }

  if (search) {
    params.search = search;
  }

  const response = await api.get("/projects", {
    params,
  });

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
 * Get projects created by the logged-in user
 */
export const getMyProjects = async () => {
  const response = await api.get("/projects/my");

  return response.data;
};

/**
 * Create a new project
 */
export const createProject = async ({
  title,
  slug,
  description,
  projectType,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  const response = await api.post("/projects", {
    title,
    slug,
    description,
    project_type: projectType,
    tech_stack: techStack,
    github_url: githubUrl,
    live_url: liveUrl,
    image_url: imageUrl,
  });

  return response.data;
};

/**
 * Update an existing project
 */
export const updateProject = async ({
  projectId,
  title,
  slug,
  description,
  projectType,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  isActive,
}) => {
  const response = await api.patch(
    `/projects/${projectId}`,
    {
      title,
      slug,
      description,
      project_type: projectType,
      tech_stack: techStack,
      github_url: githubUrl,
      live_url: liveUrl,
      image_url: imageUrl,
      is_active: isActive,
    }
  );

  return response.data;
};

/**
 * Delete a project
 */
export const deleteProject = async (projectId) => {
  const response = await api.delete(
    `/projects/${projectId}`
  );

  return response.data;
};