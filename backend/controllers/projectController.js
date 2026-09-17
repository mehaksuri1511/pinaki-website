import {
  getAllProjects,
  getProjectById,
  getProjectProgress,
  updateProjectProgress,
  submitProject,
  getProjectSubmissions,
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
    const projects = await getAllProjects();

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
| GET /api/projects/:id/progress
|--------------------------------------------------------------------------
*/

export const getProgress = async (
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

    const progress = await getProjectProgress(
      req.user.id,
      projectId
    );

    res.status(200).json({
      success: true,
      data: {
        progress,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| PATCH /api/projects/:id/progress
|--------------------------------------------------------------------------
*/

export const updateProgress = async (
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
      status,
      progress_percent,
    } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "status is required",
      });
    }

    if (progress_percent === undefined) {
      return res.status(400).json({
        success: false,
        message: "progress_percent is required",
      });
    }

    const progressPercent = Number(
      progress_percent
    );

    const progress = await updateProjectProgress({
      userId: req.user.id,
      projectId,
      status,
      progressPercent,
    });

    res.status(200).json({
      success: true,
      message: "Project progress updated successfully",
      data: {
        progress,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| POST /api/projects/:id/submissions
|--------------------------------------------------------------------------
*/

export const submit = async (
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
      submission_url,
      notes,
    } = req.body;

    const submission = await submitProject({
      userId: req.user.id,
      projectId,
      submissionUrl: submission_url,
      notes,
    });

    res.status(201).json({
      success: true,
      message: "Project submitted successfully",
      data: {
        submission,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| GET /api/projects/:id/submissions
|--------------------------------------------------------------------------
*/

export const getSubmissions = async (
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

    const submissions =
      await getProjectSubmissions(
        req.user.id,
        projectId
      );

    res.status(200).json({
      success: true,
      data: {
        submissions,
      },
    });
  } catch (error) {
    next(error);
  }
};