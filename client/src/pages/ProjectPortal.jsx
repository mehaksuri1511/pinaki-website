import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  ExternalLink,
  FileText,
  Home,
  Layers3,
  Lightbulb,
  LogOut,
  Menu,
  Play,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Upload,
  X,
} from "lucide-react";

import { getProjectDashboard } from "../API/dashboardService.js";

import {
  getProjectById,
  getProjectProgress,
  getProjectSubmissions,
  submitProject,
  updateProjectProgress,
} from "../API/projectService.js";

import { useAuth } from "../context/AuthContext.jsx";

const NAVBAR_HEIGHT = "top-20";
const NAVBAR_OFFSET = 80;

/* =========================================================
   PROJECT PORTAL
========================================================= */

const ProjectPortal = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [dashboard, setDashboard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectProgress, setProjectProgress] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [projectLoading, setProjectLoading] = useState(false);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("overview");

  const [error, setError] = useState("");

  const [updatingProgress, setUpdatingProgress] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [submissionUrl, setSubmissionUrl] = useState("");
  const [submissionNotes, setSubmissionNotes] = useState("");

  /* =======================================================
     LOAD DASHBOARD
  ======================================================= */

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProjectDashboard();

      if (response.success) {
        setDashboard(response.data);
      } else {
        setError(
          response.message ||
            "Unable to load your project dashboard."
        );
      }
    } catch (err) {
      console.error("Project dashboard error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load your project dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  const projects = dashboard?.projects || [];

  /* =======================================================
     STATS
  ======================================================= */

  const stats = useMemo(() => {
    const total = projects.length;

    const notStarted = projects.filter(
      (project) =>
        project.progress?.status === "not_started"
    ).length;

    const inProgress = projects.filter(
      (project) =>
        project.progress?.status === "in_progress"
    ).length;

    const completed = projects.filter(
      (project) =>
        project.progress?.status === "completed"
    ).length;

    const submitted = projects.filter(
      (project) =>
        project.progress?.status === "submitted"
    ).length;

    const overallProgress =
      total > 0
        ? Math.round(
            projects.reduce(
              (sum, project) =>
                sum +
                Number(
                  project.progress?.progress_percent || 0
                ),
              0
            ) / total
          )
        : 0;

    return {
      total,
      notStarted,
      inProgress,
      completed,
      submitted,
      overallProgress,
    };
  }, [projects]);

  /* =======================================================
     SECTION NAVIGATION
  ======================================================= */

  const scrollToSection = (section) => {
    setActiveSection(section);
    setSelectedProject(null);
    setMobileSidebarOpen(false);

    const element = document.getElementById(section);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_OFFSET -
      24;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  const openProject = async (projectId) => {
    try {
      setProjectLoading(true);
      setError("");

      const [
        projectResponse,
        progressResponse,
        submissionsResponse,
      ] = await Promise.all([
        getProjectById(projectId),
        getProjectProgress(projectId),
        getProjectSubmissions(projectId),
      ]);

      if (!projectResponse.success) {
        setError(
          projectResponse.message ||
            "Unable to load project details."
        );

        return;
      }

      setSelectedProject(
        projectResponse.data.project ||
          projectResponse.data
      );

      if (progressResponse.success) {
        setProjectProgress(
          progressResponse.data.progress ||
            progressResponse.data
        );
      }

      if (submissionsResponse.success) {
        setSubmissions(
          submissionsResponse.data.submissions ||
            submissionsResponse.data ||
            []
        );
      }

      setSubmissionUrl("");
      setSubmissionNotes("");
      setMobileSidebarOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Project details error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load project details."
      );
    } finally {
      setProjectLoading(false);
    }
  };

  /* =======================================================
     UPDATE PROGRESS
  ======================================================= */

  const handleProgressUpdate = async (
    progressPercent,
    status = "in_progress"
  ) => {
    if (!selectedProject) return;

    try {
      setUpdatingProgress(true);
      setError("");

      const response = await updateProjectProgress({
        projectId: selectedProject.id,
        status,
        progressPercent,
      });

      if (response.success) {
        setProjectProgress(
          response.data.progress ||
            response.data
        );

        await loadDashboard();
      } else {
        setError(
          response.message ||
            "Unable to update project progress."
        );
      }
    } catch (err) {
      console.error("Project progress error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to update project progress."
      );
    } finally {
      setUpdatingProgress(false);
    }
  };

  /* =======================================================
     SUBMIT PROJECT
  ======================================================= */

  const handleSubmitProject = async (event) => {
    event.preventDefault();

    if (!selectedProject) return;

    if (
      !submissionUrl.trim() &&
      !submissionNotes.trim()
    ) {
      setError(
        "Please provide a project URL or submission notes."
      );

      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await submitProject({
        projectId: selectedProject.id,
        submissionUrl: submissionUrl.trim(),
        notes: submissionNotes.trim(),
      });

      if (!response.success) {
        setError(
          response.message ||
            "Unable to submit your project."
        );

        return;
      }

      const [
        submissionsResponse,
        progressResponse,
      ] = await Promise.all([
        getProjectSubmissions(selectedProject.id),
        getProjectProgress(selectedProject.id),
      ]);

      if (submissionsResponse.success) {
        setSubmissions(
          submissionsResponse.data.submissions ||
            submissionsResponse.data ||
            []
        );
      }

      if (progressResponse.success) {
        setProjectProgress(
          progressResponse.data.progress ||
            progressResponse.data
        );
      }

      setSubmissionUrl("");
      setSubmissionNotes("");

      await loadDashboard();
    } catch (err) {
      console.error("Project submission error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to submit your project."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Rocket className="h-6 w-6 animate-pulse" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Loading your project workspace
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Preparing everything for you...
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (error && !dashboard) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
              <X className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Unable to load projects
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Try Again
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <button
        type="button"
        onClick={() => setMobileSidebarOpen(true)}
        className="fixed left-4 top-24 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white lg:hidden"
        aria-label="Open project navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      {mobileSidebarOpen && (
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          aria-label="Close project navigation"
        />
      )}

      {/* ===================================================
          PORTAL LAYOUT
      =================================================== */}

      <div className="flex min-h-[calc(100vh-5rem)]">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside
          className={`
            ${NAVBAR_HEIGHT}
            fixed
            left-0
            z-50
            flex
            h-[calc(100vh-5rem)]
            shrink-0
            flex-col
            border-r
            border-slate-200
            bg-white
            transition-all
            duration-300
            dark:border-slate-800
            dark:bg-slate-900
            lg:sticky
            lg:self-start
            ${
              sidebarCollapsed
                ? "lg:w-[76px]"
                : "lg:w-[270px]"
            }
            ${
              mobileSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* Sidebar brand */}
          <div
            className={`
              flex
              h-[82px]
              shrink-0
              items-center
              border-b
              border-slate-200
              dark:border-slate-800
              ${
                sidebarCollapsed
                  ? "justify-center"
                  : "justify-between px-5"
              }
            `}
          >
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20">
                  <Rocket className="h-5 w-5" />
                </div>

                <div>
                  <h1 className="text-base font-bold tracking-tight">
                    Pinaki IT
                  </h1>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Project Portal
                  </p>
                </div>
              </div>
            )}

            {sidebarCollapsed && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/20">
                PI
              </div>
            )}

            <button
              type="button"
              onClick={() =>
                setSidebarCollapsed(
                  !sidebarCollapsed
                )
              }
              className={`
                hidden
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                text-slate-700
                transition
                hover:bg-slate-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-slate-200
                dark:hover:bg-slate-700
                lg:flex
                ${
                  sidebarCollapsed
                    ? "absolute -right-4 shadow-md"
                    : ""
                }
              `}
              aria-label={
                sidebarCollapsed
                  ? "Expand sidebar"
                  : "Collapse sidebar"
              }
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setMobileSidebarOpen(false)
              }
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User */}
          <div className="border-b border-slate-200 px-4 py-4 dark:border-slate-800">
            <div
              className={`
                flex
                items-center
                rounded-2xl
                bg-slate-50
                dark:bg-slate-800/70
                ${
                  sidebarCollapsed
                    ? "justify-center p-2"
                    : "gap-3 p-3"
                }
              `}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white ring-4 ring-emerald-500/10">
                {user?.name
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </div>

              {!sidebarCollapsed && (
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {user?.name || "Student"}
                  </p>

                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                    {user?.email || "Student account"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
            <SidebarButton
              icon={Home}
              label="Overview"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "overview" &&
                !selectedProject
              }
              onClick={() =>
                scrollToSection("overview")
              }
            />

            <SidebarButton
              icon={BriefcaseBusiness}
              label="My Projects"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "projects" &&
                !selectedProject
              }
              onClick={() =>
                scrollToSection("projects")
              }
            />

            <SidebarButton
              icon={Upload}
              label="Submissions"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "submissions" &&
                !selectedProject
              }
              onClick={() =>
                scrollToSection("submissions")
              }
            />

            <SidebarButton
              icon={BarChart3}
              label="Progress"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "progress" &&
                !selectedProject
              }
              onClick={() =>
                scrollToSection("progress")
              }
            />
          </nav>

          {/* Bottom */}
          <div className="space-y-1 border-t border-slate-200 px-3 py-4 dark:border-slate-800">
            <SidebarButton
              icon={CircleUserRound}
              label="Profile"
              collapsed={sidebarCollapsed}
              onClick={() => {}}
            />

            <SidebarButton
              icon={LogOut}
              label="Logout"
              collapsed={sidebarCollapsed}
              onClick={handleLogout}
            />
          </div>
        </aside>

        {/* =================================================
            CONTENT
        ================================================= */}

        <main className="min-w-0 flex-1">
          <div className="relative overflow-hidden">

            {/* Ambient background */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-emerald-300/15 blur-[130px] dark:bg-emerald-500/5" />

            <div className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-teal-300/15 blur-[130px] dark:bg-teal-500/5" />

            {/* Decorative grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)]
                [background-size:70px_70px]
                dark:opacity-[0.035]
                dark:[background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
              "
            />

            <div className="relative mx-auto max-w-[1500px] px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10 xl:px-10">

              {/* Error */}
              {error && (
                <div className="mb-6 flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
                  <div className="flex items-start gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>{error}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setError("")}
                    className="rounded-lg p-1 hover:bg-red-500/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {selectedProject ? (
                <ProjectDetail
                  project={selectedProject}
                  progress={projectProgress}
                  submissions={submissions}
                  onBack={() => {
                    setSelectedProject(null);
                    setProjectProgress(null);
                    setSubmissions([]);
                    setActiveSection("projects");
                  }}
                  onProgressUpdate={
                    handleProgressUpdate
                  }
                  onSubmit={handleSubmitProject}
                  submissionUrl={submissionUrl}
                  submissionNotes={submissionNotes}
                  setSubmissionUrl={
                    setSubmissionUrl
                  }
                  setSubmissionNotes={
                    setSubmissionNotes
                  }
                  updatingProgress={
                    updatingProgress
                  }
                  submitting={submitting}
                  loading={projectLoading}
                />
              ) : (
                <>
                  {/* =================================================
                      HERO
                  ================================================= */}

                  <section
                    id="overview"
                    className="scroll-mt-28"
                  >
                    <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">

                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-teal-50/60 dark:from-emerald-500/5 dark:to-teal-500/5" />

                      <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-[100px] dark:bg-emerald-500/10" />

                      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-teal-300/20 blur-[100px] dark:bg-teal-500/10" />

                      <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_360px] lg:p-10 xl:p-12">

                        <div className="flex flex-col justify-center">
                          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <Sparkles className="h-3.5 w-3.5" />
                            Project Workspace
                          </div>

                          <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl">
                            Build.
                            <span className="text-emerald-600 dark:text-emerald-400">
                              {" "}
                              Submit.
                            </span>{" "}
                            Grow. 🚀
                          </h1>

                          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                            Welcome back,{" "}
                            <span className="font-bold text-slate-900 dark:text-white">
                              {user?.name || "Student"}
                            </span>
                            . Turn what you learn into practical
                            projects, track your progress, and build
                            work you can proudly showcase.
                          </p>

                          <div className="mt-8 flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                scrollToSection(
                                  "projects"
                                )
                              }
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                              <Rocket className="h-4 w-4" />
                              Explore Projects
                              <ArrowRight className="h-4 w-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                scrollToSection(
                                  "progress"
                                )
                              }
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                            >
                              <BarChart3 className="h-4 w-4" />
                              View Progress
                            </button>
                          </div>
                        </div>

                        {/* Overall progress */}
                        <div className="relative">
                          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700 dark:bg-slate-950/60 dark:shadow-black/20">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                  Overall Progress
                                </p>

                                <p className="mt-2 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                                  {stats.overallProgress}%
                                </p>
                              </div>

                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                <Target className="h-6 w-6" />
                              </div>
                            </div>

                            <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
                                style={{
                                  width: `${Math.min(
                                    100,
                                    Math.max(
                                      0,
                                      stats.overallProgress
                                    )
                                  )}%`,
                                }}
                              />
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                              <MiniMetric
                                label="Projects"
                                value={stats.total}
                              />

                              <MiniMetric
                                label="Completed"
                                value={stats.completed}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      <StatCard
                        icon={BriefcaseBusiness}
                        label="Total Projects"
                        value={stats.total}
                        description="Available to you"
                      />

                      <StatCard
                        icon={Clock3}
                        label="Not Started"
                        value={stats.notStarted}
                        description="Waiting to begin"
                      />

                      <StatCard
                        icon={Play}
                        label="In Progress"
                        value={stats.inProgress}
                        description="Currently working"
                      />

                      <StatCard
                        icon={Trophy}
                        label="Completed"
                        value={stats.completed}
                        description="Successfully finished"
                      />
                    </div>

                    {/* Quick cards */}
                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                      <InfoCard
                        icon={Lightbulb}
                        title="Learn by Building"
                        description="Apply what you learn through practical, hands-on projects."
                      />

                      <InfoCard
                        icon={Target}
                        title="Track Your Journey"
                        description="Keep your project progress updated as you work."
                      />

                      <InfoCard
                        icon={Trophy}
                        title="Showcase Your Work"
                        description="Submit finished work and grow your project portfolio."
                      />
                    </div>
                  </section>

                  {/* =================================================
                      PROJECTS
                  ================================================= */}

                  <section
                    id="projects"
                    className="mt-16 scroll-mt-28"
                  >
                    <SectionHeading
                      eyebrow="BUILD SOMETHING"
                      title="My Projects"
                      description="Projects available through your enrolled courses."
                      icon={BriefcaseBusiness}
                    />

                    {projects.length === 0 ? (
                      <EmptyState
                        icon={Rocket}
                        title="No projects available yet"
                        description="Projects will appear here when they become available for your enrolled courses."
                      />
                    ) : (
                      <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            onOpen={() =>
                              openProject(
                                project.id
                              )
                            }
                          />
                        ))}
                      </div>
                    )}
                  </section>

                  {/* =================================================
                      PROGRESS
                  ================================================= */}

                  <section
                    id="progress"
                    className="mt-16 scroll-mt-28"
                  >
                    <SectionHeading
                      eyebrow="KEEP MOVING"
                      title="Project Progress"
                      description="Track your progress across every project."
                      icon={BarChart3}
                    />

                    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            Overall completion
                          </p>

                          <p className="mt-1 text-3xl font-black">
                            {stats.overallProgress}%
                          </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <BarChart3 className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(
                                0,
                                stats.overallProgress
                              )
                            )}%`,
                          }}
                        />
                      </div>

                      <div className="mt-8 space-y-4">
                        {projects.length === 0 ? (
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            No projects to track yet.
                          </p>
                        ) : (
                          projects.map((project) => {
                            const progress = Number(
                              project.progress
                                ?.progress_percent ||
                                0
                            );

                            const status =
                              project.progress
                                ?.status ||
                              "not_started";

                            return (
                              <div
                                key={project.id}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-emerald-500/30"
                              >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                  <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                      <h3 className="font-bold">
                                        {project.title}
                                      </h3>

                                      <StatusBadge
                                        status={status}
                                      />
                                    </div>

                                    {project.course && (
                                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        {
                                          project.course
                                            .title
                                        }
                                      </p>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                                      {progress}%
                                    </span>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        openProject(
                                          project.id
                                        )
                                      }
                                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                                    >
                                      <ArrowUpRight className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>

                                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                                    style={{
                                      width: `${Math.min(
                                        100,
                                        Math.max(
                                          0,
                                          progress
                                        )
                                      )}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </section>

                  {/* =================================================
                      SUBMISSIONS
                  ================================================= */}

                  <section
                    id="submissions"
                    className="mt-16 scroll-mt-28"
                  >
                    <SectionHeading
                      eyebrow="YOUR WORK"
                      title="Submissions"
                      description="Open a project to submit your work and review previous submissions."
                      icon={Upload}
                    />

                    {projects.length === 0 ? (
                      <EmptyState
                        icon={FileText}
                        title="No submissions yet"
                        description="Your project submissions will appear here after you start working on projects."
                      />
                    ) : (
                      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
                        <div className="space-y-4">
                          {projects.map((project) => {
                            const projectSubmissions =
                              project.submissions ||
                              [];

                            return (
                              <div
                                key={project.id}
                                className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-emerald-500/30 sm:flex-row sm:items-center sm:justify-between"
                              >
                                <div className="flex min-w-0 items-start gap-4">
                                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                    <FileText className="h-5 w-5" />
                                  </div>

                                  <div className="min-w-0">
                                    <h3 className="truncate font-bold">
                                      {project.title}
                                    </h3>

                                    {project.course && (
                                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        {
                                          project
                                            .course
                                            .title
                                        }
                                      </p>
                                    )}

                                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                      {
                                        projectSubmissions.length
                                      }{" "}
                                      submission
                                      {projectSubmissions.length !==
                                      1
                                        ? "s"
                                        : ""}
                                    </p>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() =>
                                    openProject(
                                      project.id
                                    )
                                  }
                                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                                >
                                  View Project
                                  <ArrowRight className="h-4 w-4" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </section>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* =========================================================
   SIDEBAR BUTTON
========================================================= */

const SidebarButton = ({
  icon: Icon,
  label,
  collapsed,
  active = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`
        group
        flex
        w-full
        items-center
        rounded-xl
        text-sm
        font-semibold
        transition-all
        duration-200
        ${
          collapsed
            ? "justify-center px-2 py-3"
            : "gap-3 px-3.5 py-3"
        }
        ${
          active
            ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/15"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        }
      `}
    >
      <Icon className="h-5 w-5 shrink-0" />

      {!collapsed && (
        <span className="truncate">
          {label}
        </span>
      )}

      {!collapsed && active && (
        <ArrowRight className="ml-auto h-4 w-4 opacity-80" />
      )}
    </button>
  );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  icon: Icon,
  label,
  value,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/5" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {label}
          </p>

          <p className="mt-2 text-3xl font-black tracking-tight">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
            {description}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MINI METRIC
========================================================= */

const MiniMetric = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-900">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-black">
        {value}
      </p>
    </div>
  );
};

/* =========================================================
   INFO CARD
========================================================= */

const InfoCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-bold">
            {title}
          </h3>

          <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({
  eyebrow,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="mb-7 flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
          {title}
        </h2>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  onOpen,
}) => {
  const progress = Number(
    project.progress?.progress_percent || 0
  );

  const status =
    project.progress?.status ||
    "not_started";

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20">

      <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Rocket className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-black tracking-tight">
                {project.title}
              </h3>

              {project.course && (
                <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="h-3.5 w-3.5" />

                  <span className="truncate">
                    {project.course.title}
                  </span>
                </div>
              )}
            </div>
          </div>

          <StatusBadge status={status} />
        </div>

        {project.description && (
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {project.description}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.difficulty && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold capitalize text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <Layers3 className="h-3 w-3" />
              {project.difficulty}
            </span>
          )}
        </div>

        <div className="mt-6">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Project Progress
            </span>

            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
              {progress}%
            </span>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{
                width: `${Math.min(
                  100,
                  Math.max(0, progress)
                )}%`,
              }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Play className="h-4 w-4" />

          {progress > 0
            ? "Continue Project"
            : "Start Project"}

          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   STATUS
========================================================= */

const StatusBadge = ({ status }) => {
  const config = {
    not_started: {
      label: "Not Started",
      icon: Clock3,
      className:
        "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    },

    in_progress: {
      label: "In Progress",
      icon: Play,
      className:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    },

    submitted: {
      label: "Submitted",
      icon: Upload,
      className:
        "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
    },

    completed: {
      label: "Completed",
      icon: CheckCircle2,
      className:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    },
  };

  const current =
    config[status] || config.not_started;

  const Icon = current.icon;

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${current.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {current.label}
    </span>
  );
};

/* =========================================================
   PROJECT DETAIL
========================================================= */

const ProjectDetail = ({
  project,
  progress,
  submissions,
  onBack,
  onProgressUpdate,
  onSubmit,
  submissionUrl,
  submissionNotes,
  setSubmissionUrl,
  setSubmissionNotes,
  updatingProgress,
  submitting,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <Rocket className="h-6 w-6 animate-pulse" />
          </div>

          <p className="mt-4 font-semibold">
            Loading project...
          </p>
        </div>
      </div>
    );
  }

  const currentProgress = Number(
    progress?.progress_percent || 0
  );

  const currentStatus =
    progress?.status || "not_started";

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="group mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to My Projects
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-teal-50/60 dark:from-emerald-500/5 dark:to-teal-500/5" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold capitalize text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  {project.difficulty ||
                    "Project"}
                </span>

                {project.course && (
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {project.course.title}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              {project.description && (
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                  {project.description}
                </p>
              )}
            </div>

            <StatusBadge
              status={currentStatus}
            />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <DetailMetric
              icon={Target}
              label="Progress"
              value={`${currentProgress}%`}
            />

            <DetailMetric
              icon={FileText}
              label="Submissions"
              value={submissions.length}
            />

            <DetailMetric
              icon={CalendarDays}
              label="Status"
              value={statusLabel(
                currentStatus
              )}
            />
          </div>
        </div>
      </div>

      {/* Progress */}
      <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
              Your Progress
            </p>

            <h2 className="mt-1 text-xl font-black">
              Project Progress
            </h2>
          </div>

          <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {currentProgress}%
          </span>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
            style={{
              width: `${Math.min(
                100,
                Math.max(0, currentProgress)
              )}%`,
            }}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {currentProgress === 0 && (
            <button
              type="button"
              disabled={updatingProgress}
              onClick={() =>
                onProgressUpdate(
                  10,
                  "in_progress"
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 disabled:opacity-60"
            >
              <Play className="h-4 w-4" />

              {updatingProgress
                ? "Updating..."
                : "Start Project"}
            </button>
          )}

          {currentProgress > 0 &&
            currentProgress < 100 && (
              <>
                <button
                  type="button"
                  disabled={updatingProgress}
                  onClick={() =>
                    onProgressUpdate(
                      Math.min(
                        100,
                        currentProgress + 10
                      ),
                      "in_progress"
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60"
                >
                  <ArrowRight className="h-4 w-4" />
                  {updatingProgress
                    ? "Updating..."
                    : "Mark More Progress"}
                </button>

                <button
                  type="button"
                  disabled={updatingProgress}
                  onClick={() =>
                    onProgressUpdate(
                      100,
                      "completed"
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <Check className="h-4 w-4" />
                  Mark Completed
                </button>
              </>
            )}

          {currentProgress >= 100 && (
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-5 py-2.5 text-sm font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Project Completed
            </div>
          )}
        </div>
      </section>

      {/* Instructions */}
      {project.instructions && (
        <section className="mt-10">
          <SectionHeading
            eyebrow="GET STARTED"
            title="Project Instructions"
            description="Follow these instructions to complete your project."
            icon={Lightbulb}
          />

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Lightbulb className="h-5 w-5" />
              </div>

              <p className="whitespace-pre-line text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                {project.instructions}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Submission */}
      <section
        id="project-submission"
        className="mt-10"
      >
        <SectionHeading
          eyebrow="TURN IN YOUR WORK"
          title="Submit Your Project"
          description="Share your completed project with the Pinaki IT team."
          icon={Upload}
        />

        <form
          onSubmit={onSubmit}
          className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="submissionUrl"
                className="mb-2 block text-sm font-bold"
              >
                Project URL
              </label>

              <div className="relative">
                <ExternalLink className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  id="submissionUrl"
                  type="url"
                  value={submissionUrl}
                  onChange={(event) =>
                    setSubmissionUrl(
                      event.target.value
                    )
                  }
                  placeholder="https://github.com/username/project"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                GitHub repository, deployed application,
                or project link.
              </p>
            </div>

            <div>
              <label
                htmlFor="submissionNotes"
                className="mb-2 block text-sm font-bold"
              >
                Notes
              </label>

              <textarea
                id="submissionNotes"
                rows={5}
                value={submissionNotes}
                onChange={(event) =>
                  setSubmissionNotes(
                    event.target.value
                  )
                }
                placeholder="Add any notes about your submission..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              You can provide a URL, notes, or both.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Upload className="h-4 w-4" />

              {submitting
                ? "Submitting..."
                : "Submit Project"}
            </button>
          </div>
        </form>
      </section>

      {/* History */}
      <section className="mt-12">
        <SectionHeading
          eyebrow="PAST WORK"
          title="Submission History"
          description="Review your previous submissions and feedback."
          icon={FileText}
        />

        {submissions.length === 0 ? (
          <EmptyState
            icon={FileText}
            title="No submissions yet"
            description="Once you submit your project, your submission history will appear here."
          />
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">
                        Submission #{submission.id}
                      </p>

                      {submission.submitted_at && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                          <CalendarDays className="h-3.5 w-3.5" />
                          Submitted{" "}
                          {formatDate(
                            submission.submitted_at
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {submission.status}
                  </span>
                </div>

                {submission.submission_url && (
                  <a
                    href={
                      submission.submission_url
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-emerald-600 transition hover:bg-emerald-50 dark:border-slate-800 dark:bg-slate-950 dark:text-emerald-400 dark:hover:bg-emerald-500/5"
                  >
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />

                    <span className="break-all">
                      {submission.submission_url}
                    </span>
                  </a>
                )}

                {submission.notes && (
                  <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Notes
                    </p>

                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {submission.notes}
                    </p>
                  </div>
                )}

                {submission.reviewer_feedback && (
                  <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                        Reviewer Feedback
                      </p>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {submission.reviewer_feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

/* =========================================================
   DETAIL METRIC
========================================================= */

const DetailMetric = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {label}
          </p>

          <p className="mt-0.5 truncate text-sm font-black capitalize">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900 sm:p-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[90px] dark:bg-emerald-500/5" />

      <div className="relative">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mt-5 text-lg font-black">
          {title}
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   HELPERS
========================================================= */

const statusLabel = (status) => {
  const labels = {
    not_started: "Not Started",
    in_progress: "In Progress",
    submitted: "Submitted",
    completed: "Completed",
  };

  return labels[status] || status;
};

const formatDate = (date) => {
  if (!date) return "";

  try {
    return new Date(date).toLocaleString(
      undefined,
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  } catch {
    return date;
  }
};

export default ProjectPortal;