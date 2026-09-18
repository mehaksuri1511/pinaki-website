import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getMyProjects,
} from "../services/projectService.js";

/*
|--------------------------------------------------------------------------
| GET /api/projects
|--------------------------------------------------------------------------
*/

export const getProjects = async (
  req,
  res,
  next
) => {
  try {
    const {
      type,
      search,
    } = req.query;

    const projects = await getAllProjects({
      projectType: type || null,
      search: search || null,
    });

    res.status(200).json({
      success: true,
      data: {
        projects,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/projects/:id
|--------------------------------------------------------------------------
*/

export const getProject = async (
  req,
  res,
  next
) => {
  try {
    const projectId = Number(req.params.id);

    if (
      !Number.isInteger(projectId) ||
      projectId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid project id",
      });
    }

    const project = await getProjectById(projectId);

    res.status(200).json({
      success: true,
      data: {
        project,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| POST /api/projects
|--------------------------------------------------------------------------
*/

export const create = async (
  req,
  res,
  next
) => {
  try {
    const {
      title,
      slug,
      description,
      project_type,
      tech_stack,
      github_url,
      live_url,
      image_url,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "title is required",
      });
    }

    if (!slug || !slug.trim()) {
      return res.status(400).json({
        success: false,
        message: "slug is required",
      });
    }

    if (!project_type) {
      return res.status(400).json({
        success: false,
        message: "project_type is required",
      });
    }

    const validProjectTypes = [
      "web-development",
      "machine-learning",
      "gen-ai",
      "ai-ml",
      "app-development",
      "data-science",
      "other",
    ];

    if (!validProjectTypes.includes(project_type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project_type",
      });
    }

    const project = await createProject({
      userId: req.user.id,
      title: title.trim(),
      slug: slug.trim(),
      description: description?.trim() || null,
      projectType: project_type,
      techStack: tech_stack?.trim() || null,
      githubUrl: github_url?.trim() || null,
      liveUrl: live_url?.trim() || null,
      imageUrl: image_url?.trim() || null,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: {
        project,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| PATCH /api/projects/:id
|--------------------------------------------------------------------------
*/

export const update = async (
  req,
  res,
  next
) => {
  try {
    const projectId = Number(req.params.id);

    if (
      !Number.isInteger(projectId) ||
      projectId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid project id",
      });
    }

    const {
      title,
      slug,
      description,
      project_type,
      tech_stack,
      github_url,
      live_url,
      image_url,
      is_active,
    } = req.body;

    const validProjectTypes = [
      "web-development",
      "machine-learning",
      "gen-ai",
      "ai-ml",
      "app-development",
      "data-science",
      "other",
    ];

    if (
      project_type !== undefined &&
      !validProjectTypes.includes(project_type)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid project_type",
      });
    }

    const project = await updateProject({
      projectId,
      userId: req.user.id,
      role: req.user.role,
      title:
        title !== undefined
          ? title.trim()
          : undefined,
      slug:
        slug !== undefined
          ? slug.trim()
          : undefined,
      description:
        description !== undefined
          ? description?.trim() || null
          : undefined,
      projectType: project_type,
      techStack:
        tech_stack !== undefined
          ? tech_stack?.trim() || null
          : undefined,
      githubUrl:
        github_url !== undefined
          ? github_url?.trim() || null
          : undefined,
      liveUrl:
        live_url !== undefined
          ? live_url?.trim() || null
          : undefined,
      imageUrl:
        image_url !== undefined
          ? image_url?.trim() || null
          : undefined,
      isActive: is_active,
    });

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: {
        project,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| DELETE /api/projects/:id
|--------------------------------------------------------------------------
*/

export const remove = async (
  req,
  res,
  next
) => {
  try {
    const projectId = Number(req.params.id);

    if (
      !Number.isInteger(projectId) ||
      projectId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid project id",
      });
    }

    const result = await deleteProject({
      projectId,
      userId: req.user.id,
      role: req.user.role,
    });

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/projects/my
|--------------------------------------------------------------------------
*/

export const getMyProjectsController = async (
  req,
  res,
  next
) => {
  try {
    const projects = await getMyProjects(
      req.user.id
    );

    res.status(200).json({
      success: true,
      data: {
        projects,
      },
    });
  } catch (error) {
    next(error);
  }
};