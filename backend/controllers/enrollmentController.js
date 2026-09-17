import {
  createEnrollment,
  getMyEnrollments,
  getEnrollmentById,
  cancelEnrollment,
  getCourseProgress,
  updateCourseProgress,
} from "../services/enrollmentService.js";

export const enroll = async (req, res, next) => {
  try {
    const { course_id } = req.body;

    if (!course_id) {
      return res.status(400).json({
        success: false,
        message: "course_id is required",
      });
    }

    const courseId = Number(course_id);

    if (!Number.isInteger(courseId) || courseId <= 0) {
      return res.status(400).json({
        success: false,
        message: "course_id must be a valid positive integer",
      });
    }

    const enrollment = await createEnrollment(
      req.user.id,
      courseId
    );

    res.status(201).json({
      success: true,
      message: "Course enrollment successful",
      data: {
        enrollment,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMyEnrollmentsController = async (
  req,
  res,
  next
) => {
  try {
    const enrollments = await getMyEnrollments(
      req.user.id
    );

    res.status(200).json({
      success: true,
      data: {
        enrollments,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getEnrollment = async (
  req,
  res,
  next
) => {
  try {
    const enrollmentId = Number(req.params.id);

    if (
      !Number.isInteger(enrollmentId) ||
      enrollmentId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid enrollment id",
      });
    }

    const enrollment = await getEnrollmentById(
      req.user.id,
      enrollmentId
    );

    res.status(200).json({
      success: true,
      data: {
        enrollment,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const cancel = async (
  req,
  res,
  next
) => {
  try {
    const enrollmentId = Number(req.params.id);

    if (
      !Number.isInteger(enrollmentId) ||
      enrollmentId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid enrollment id",
      });
    }

    const enrollment = await cancelEnrollment(
      req.user.id,
      enrollmentId
    );

    res.status(200).json({
      success: true,
      message: "Enrollment cancelled successfully",
      data: {
        enrollment,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProgress = async (
  req,
  res,
  next
) => {
  try {
    const enrollmentId = Number(req.params.id);

    if (
      !Number.isInteger(enrollmentId) ||
      enrollmentId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid enrollment id",
      });
    }

    const progress = await getCourseProgress(
      req.user.id,
      enrollmentId
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

export const updateProgress = async (
  req,
  res,
  next
) => {
  try {
    const enrollmentId = Number(req.params.id);

    if (
      !Number.isInteger(enrollmentId) ||
      enrollmentId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid enrollment id",
      });
    }

    const {
      progress_percent,
      last_module_id,
    } = req.body;

    if (
      progress_percent === undefined ||
      progress_percent === null
    ) {
      return res.status(400).json({
        success: false,
        message: "progress_percent is required",
      });
    }

    const progressPercent = Number(
      progress_percent
    );

    if (
      !Number.isFinite(progressPercent) ||
      progressPercent < 0 ||
      progressPercent > 100
    ) {
      return res.status(400).json({
        success: false,
        message:
          "progress_percent must be between 0 and 100",
      });
    }

    let lastModuleId = null;

    if (
      last_module_id !== undefined &&
      last_module_id !== null
    ) {
      lastModuleId = Number(last_module_id);

      if (
        !Number.isInteger(lastModuleId) ||
        lastModuleId <= 0
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid last_module_id",
        });
      }
    }

    const progress = await updateCourseProgress({
      userId: req.user.id,
      enrollmentId,
      progressPercent,
      lastModuleId,
    });

    res.status(200).json({
      success: true,
      message: "Course progress updated successfully",
      data: {
        progress,
      },
    });
  } catch (error) {
    next(error);
  }
};