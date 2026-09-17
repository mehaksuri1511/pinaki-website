import {
  getLearningDashboard,
  getProjectDashboard,
} from "../services/dashboardService.js";

export const getLearningDashboardData = async (
  req,
  res,
  next
) => {
  try {
    const dashboard = await getLearningDashboard(
      req.user.id
    );

    res.status(200).json({
      success: true,

      data: {
        user: req.user,

        ...dashboard,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectDashboardData = async (
  req,
  res,
  next
) => {
  try {
    const dashboard = await getProjectDashboard(
      req.user.id
    );

    res.status(200).json({
      success: true,

      data: {
        user: req.user,

        ...dashboard,
      },
    });
  } catch (error) {
    next(error);
  }
};