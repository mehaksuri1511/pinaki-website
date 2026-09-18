import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
  Loader2,
  LogOut,
  Menu,
  Pencil,
  Plus,
  Rocket,
  Search,
  Trash2,
  X,
} from "lucide-react";

import {
  getMyProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../API/projectService.js";

import { useAuth } from "../context/AuthContext.jsx";

/* ============================================================
   PROJECT TYPES
============================================================ */

const PROJECT_TYPES = [
  {
    value: "all",
    label: "All Types",
  },
  {
    value: "web-development",
    label: "Web Development",
  },
  {
    value: "machine-learning",
    label: "Machine Learning",
  },
  {
    value: "gen-ai",
    label: "Gen AI",
  },
  {
    value: "ai-ml",
    label: "AI / ML",
  },
  {
    value: "app-development",
    label: "App Development",
  },
  {
    value: "data-science",
    label: "Data Science",
  },
  {
    value: "other",
    label: "Other",
  },
];

/* ============================================================
   HELPERS
============================================================ */

const getProjectTypeLabel = (value) => {
  return (
    PROJECT_TYPES.find(
      (type) => type.value === value
    )?.label || "Other"
  );
};

const getInitial = (name) => {
  return (
    name?.trim()?.charAt(0)?.toUpperCase() || "U"
  );
};

const createSlug = (value) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const isValidUrl = (value) => {
  if (!value?.trim()) {
    return true;
  }

  try {
    const url = new URL(value.trim());

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
};

const getErrorMessage = (
  error,
  fallback = "Something went wrong."
) => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    fallback
  );
};

const INPUT_CLASS =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-500";

/* ============================================================
   MAIN COMPONENT
============================================================ */

const ProjectPortal = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] =
    useState("all");

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [showProjectForm, setShowProjectForm] =
    useState(false);

  const [editingProject, setEditingProject] =
    useState(null);

  const [deletingProjectId, setDeletingProjectId] =
    useState(null);

  const [toast, setToast] = useState(null);

  /* ==========================================================
     LOAD PROJECTS
  ========================================================== */

  useEffect(() => {
    loadMyProjects();
  }, []);

  /* ==========================================================
     TOAST AUTO CLOSE
  ========================================================== */

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast]);

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (showProjectForm) {
        setShowProjectForm(false);
        setEditingProject(null);
        return;
      }

      if (selectedProject) {
        setSelectedProject(null);
      }

      setMobileSidebarOpen(false);
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedProject, showProjectForm]);

  /* ==========================================================
     GET ONLY CURRENT USER'S PROJECTS
  ========================================================== */

  const loadMyProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getMyProjects();

      if (response?.success) {
        setProjects(
          response?.data?.projects || []
        );
      } else {
        setError(
          response?.message ||
            "Unable to load your projects."
        );
      }
    } catch (error) {
      console.error(
        "Load my projects error:",
        error
      );

      setError(
        getErrorMessage(
          error,
          "Unable to load your projects."
        )
      );
    } finally {
      setLoading(false);
    }
  };

  /* ==========================================================
     FILTER PROJECTS
  ========================================================== */

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (selectedType !== "all") {
      result = result.filter(
        (project) =>
          project.project_type === selectedType
      );
    }

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter((project) => {
        const title =
          project.title?.toLowerCase() || "";

        const description =
          project.description?.toLowerCase() || "";

        const techStack =
          project.tech_stack?.toLowerCase() || "";

        const type =
          getProjectTypeLabel(
            project.project_type
          ).toLowerCase();

        return (
          title.includes(query) ||
          description.includes(query) ||
          techStack.includes(query) ||
          type.includes(query)
        );
      });
    }

    return result;
  }, [projects, search, selectedType]);

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const scrollToProjects = () => {
    setMobileSidebarOpen(false);

    document
      .getElementById("my-projects")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* ==========================================================
     CREATE
  ========================================================== */

  const openCreateForm = () => {
    setEditingProject(null);
    setSelectedProject(null);
    setMobileSidebarOpen(false);
    setShowProjectForm(true);
  };

  /* ==========================================================
     EDIT
  ========================================================== */

  const openEditForm = (project) => {
    setSelectedProject(null);
    setEditingProject(project);
    setShowProjectForm(true);
  };

  /* ==========================================================
     CLOSE FORM
  ========================================================== */

  const closeProjectForm = () => {
    setShowProjectForm(false);
    setEditingProject(null);
  };

  /* ==========================================================
     PROJECT SAVED
  ========================================================== */

  const handleProjectSaved = async () => {
    setShowProjectForm(false);
    setEditingProject(null);

    setToast({
      type: "success",
      message: "Project saved successfully.",
    });

    await loadMyProjects();
  };

  /* ==========================================================
     DELETE
  ========================================================== */

  const handleDeleteProject = async (
    project
  ) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingProjectId(project.id);

      const response = await deleteProject(
        project.id
      );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to delete project."
        );
      }

      setProjects((previous) =>
        previous.filter(
          (item) => item.id !== project.id
        )
      );

      if (
        selectedProject?.id === project.id
      ) {
        setSelectedProject(null);
      }

      setToast({
        type: "success",
        message:
          "Project deleted successfully.",
      });
    } catch (error) {
      console.error(
        "Delete project error:",
        error
      );

      setToast({
        type: "error",
        message: getErrorMessage(
          error,
          "Unable to delete project."
        ),
      });
    } finally {
      setDeletingProjectId(null);
    }
  };

  /* ==========================================================
     LOGOUT
  ========================================================== */

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error(
        "Logout error:",
        error
      );
    }
  };

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Rocket className="h-7 w-7 animate-pulse" />
            </div>

            <h2 className="mt-5 text-xl font-black">
              Loading your projects
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Getting your project showcase ready...
            </p>

            <Loader2 className="mx-auto mt-5 h-5 w-5 animate-spin text-emerald-500" />
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
     ERROR STATE
  ========================================================== */

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-xl font-black">
              Unable to load your projects
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {error}
            </p>

            <button
              type="button"
              onClick={loadMyProjects}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Retry
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
     MAIN UI
  ========================================================== */

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* ======================================================
          MOBILE MENU BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={() =>
          setMobileSidebarOpen(true)
        }
        className="fixed left-4 top-24 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white lg:hidden"
        aria-label="Open project navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ======================================================
          MOBILE OVERLAY
      ====================================================== */}

      {mobileSidebarOpen && (
        <button
          type="button"
          onClick={() =>
            setMobileSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          aria-label="Close project navigation"
        />
      )}

      {/* ======================================================
          FLEX LAYOUT

          IMPORTANT:
          Desktop sidebar is sticky and part of
          normal document flow.

          This prevents the sidebar from covering
          the footer.
      ====================================================== */}

      <div className="flex min-h-[calc(100vh-5rem)]">

        {/* ====================================================
            SIDEBAR
        ==================================================== */}

        <aside
          className={`
            fixed
            left-0
            top-20
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
                : "lg:w-[248px]"
            }

            ${
              mobileSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* ==================================================
              BRAND
          ================================================== */}

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
                  <h1 className="text-base font-bold">
                    Pinaki IT
                  </h1>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Project Portal
                  </p>
                </div>
              </div>
            )}

            {sidebarCollapsed && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-black text-white shadow-lg shadow-emerald-500/20">
                PI
              </div>
            )}

            {/* Collapse button */}

            <button
              type="button"
              onClick={() =>
                setSidebarCollapsed(
                  (previous) => !previous
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

            {/* Mobile close */}

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

          {/* ==================================================
              USER
          ================================================== */}

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
                {getInitial(user?.name)}
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

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">

            <SidebarButton
              icon={Layers3}
              label="My Projects"
              collapsed={sidebarCollapsed}
              active
              onClick={scrollToProjects}
            />

            <SidebarButton
              icon={Plus}
              label="Add Project"
              collapsed={sidebarCollapsed}
              onClick={openCreateForm}
            />

          </nav>

          {/* ==================================================
              BOTTOM
          ================================================== */}

          <div className="space-y-1 border-t border-slate-200 px-3 py-4 dark:border-slate-800">

            <SidebarButton
              icon={LogOut}
              label="Logout"
              collapsed={sidebarCollapsed}
              onClick={handleLogout}
            />

          </div>
        </aside>

        {/* ====================================================
            MAIN CONTENT
        ==================================================== */}

        <main className="min-w-0 flex-1">

          <div className="relative overflow-hidden">

            {/* Background glow */}

            <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-[120px] dark:bg-emerald-500/5" />

            <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-teal-300/20 blur-[120px] dark:bg-teal-500/5" />

            {/* Main container */}

            <div className="relative mx-auto max-w-[1400px] px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10 xl:px-10">

              {/* ==================================================
                  ERROR TOAST INSIDE PAGE
              ================================================== */}

              {error && (
                <div className="mb-6 flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">

                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>{error}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setError("")
                    }
                    className="rounded-lg p-1 hover:bg-red-500/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* ==================================================
                  HERO
              ================================================== */}

              <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-500/5 dark:via-slate-900 dark:to-cyan-500/5" />

                <div className="relative p-6 sm:p-8 lg:p-10">

                  <div className="max-w-3xl">

                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Rocket className="h-3.5 w-3.5" />
                      Your Project Showcase
                    </span>

                    <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                      Your work.
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {" "}
                        Your showcase.
                      </span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                      Keep all your projects in one
                      place. Add your GitHub
                      repository, live project and
                      technology stack to showcase
                      what you have built.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3">

                      <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 dark:border-slate-700 dark:bg-slate-900">
                        <span className="text-lg font-black text-slate-900 dark:text-white">
                          {projects.length}
                        </span>

                        <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {projects.length === 1
                            ? "Project"
                            : "Projects"}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={openCreateForm}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-0.5"
                      >
                        <Plus className="h-4 w-4" />
                        Add Project
                      </button>

                    </div>
                  </div>
                </div>
              </section>

              {/* ==================================================
                  MY PROJECTS
              ================================================== */}

              <section
                id="my-projects"
                className="mt-12 scroll-mt-28"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                      Your Work
                    </p>

                    <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                      My Projects
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Projects created by you.
                    </p>
                  </div>

                  {projects.length > 0 && (
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {filteredProjects.length}{" "}
                      displayed
                    </div>
                  )}

                </div>

                {/* =================================================
                    SEARCH + FILTER
                ================================================= */}

                {projects.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                    <div className="flex flex-col gap-3 md:flex-row">

                      {/* Search */}

                      <div className="relative flex-1">

                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          type="text"
                          value={search}
                          onChange={(event) =>
                            setSearch(
                              event.target.value
                            )
                          }
                          placeholder="Search your projects..."
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                        />

                        {search && (
                          <button
                            type="button"
                            onClick={() =>
                              setSearch("")
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>

                      {/* Type */}

                      <div className="relative md:w-64">

                        <Layers3 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <select
                          value={selectedType}
                          onChange={(event) =>
                            setSelectedType(
                              event.target.value
                            )
                          }
                          className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                          {PROJECT_TYPES.map(
                            (type) => (
                              <option
                                key={type.value}
                                value={type.value}
                              >
                                {type.label}
                              </option>
                            )
                          )}
                        </select>

                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================
                    PROJECT LIST
                ================================================= */}

                {projects.length === 0 ? (
                  <EmptyProjects
                    onAdd={openCreateForm}
                  />
                ) : filteredProjects.length ===
                  0 ? (
                  <EmptyFilteredProjects
                    onClear={() => {
                      setSearch("");
                      setSelectedType("all");
                    }}
                  />
                ) : (
                  <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {filteredProjects.map(
                      (project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onOpen={() =>
                            setSelectedProject(
                              project
                            )
                          }
                          onEdit={() =>
                            openEditForm(project)
                          }
                          onDelete={() =>
                            handleDeleteProject(
                              project
                            )
                          }
                          deleting={
                            deletingProjectId ===
                            project.id
                          }
                        />
                      )
                    )}

                  </div>
                )}

              </section>
            </div>
          </div>
        </main>
      </div>

      {/* ======================================================
          DETAILS MODAL
      ====================================================== */}

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
          onEdit={() =>
            openEditForm(selectedProject)
          }
          onDelete={() =>
            handleDeleteProject(
              selectedProject
            )
          }
          deleting={
            deletingProjectId ===
            selectedProject.id
          }
        />
      )}

      {/* ======================================================
          CREATE / EDIT MODAL
      ====================================================== */}

      {showProjectForm && (
        <ProjectFormModal
          project={editingProject}
          onClose={closeProjectForm}
          onSaved={handleProjectSaved}
          setToast={setToast}
        />
      )}

      {/* ======================================================
          TOAST
      ====================================================== */}

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

/* ============================================================
   SIDEBAR BUTTON
============================================================ */

const SidebarButton = ({
  icon: Icon,
  label,
  collapsed,
  active,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`
        flex
        w-full
        items-center
        rounded-xl
        text-sm
        font-semibold
        transition

        ${
          collapsed
            ? "justify-center px-3 py-3"
            : "gap-3 px-3.5 py-3"
        }

        ${
          active
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        }
      `}
    >
      <Icon className="h-4 w-4 shrink-0" />

      {!collapsed && (
        <span>{label}</span>
      )}
    </button>
  );
};

/* ============================================================
   PROJECT CARD
============================================================ */

const ProjectCard = ({
  project,
  onOpen,
  onEdit,
  onDelete,
  deleting,
}) => {
  const technologies = project.tech_stack
    ? project.tech_stack
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const visibleTechnologies =
    technologies.slice(0, 4);

  const remaining =
    technologies.length -
    visibleTechnologies.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/30">

      {/* Image */}

      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full overflow-hidden bg-slate-100 text-left dark:bg-slate-800"
      >
        <div className="aspect-[16/9]">

          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display =
                  "none";
              }}
            />
          ) : (
            <ProjectImagePlaceholder />
          )}

        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
          <Layers3 className="h-3 w-3" />

          {getProjectTypeLabel(
            project.project_type
          )}
        </span>
      </button>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5">

        <div className="flex-1">

          <h3 className="line-clamp-1 text-lg font-black tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>

          {project.description && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          )}

          {visibleTechnologies.length >
            0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">

              {visibleTechnologies.map(
                (technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {technology}
                  </span>
                )
              )}

              {remaining > 0 && (
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                  +{remaining}
                </span>
              )}

            </div>
          )}

        </div>

        {/* Main actions */}

        <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">

          <button
            type="button"
            onClick={onOpen}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            View Project

            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Open GitHub repository"
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}

          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700 dark:bg-emerald-500"
              aria-label="Open live project"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

        </div>

        {/* Edit / Delete */}

        <div className="mt-2 flex gap-2">

          <button
            type="button"
            onClick={onEdit}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Pencil className="h-3.5 w-3.5" />

            Edit
          </button>

          <button
            type="button"
            onClick={onDelete}
            disabled={deleting}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-50 dark:border-red-500/20 dark:text-red-400 dark:hover:bg-red-500/10"
          >
            {deleting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Trash2 className="h-3.5 w-3.5" />
            )}

            Delete
          </button>

        </div>
      </div>
    </article>
  );
};

/* ============================================================
   IMAGE PLACEHOLDER
============================================================ */

const ProjectImagePlaceholder = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-cyan-950/30">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-white text-emerald-500 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900 dark:text-emerald-400">
        <Rocket className="h-7 w-7" />
      </div>

    </div>
  );
};

/* ============================================================
   EMPTY PROJECTS
============================================================ */

const EmptyProjects = ({ onAdd }) => {
  return (
    <div className="mt-7 overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-900 sm:px-10">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Rocket className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white">
        You haven't added any projects yet
      </h3>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
        Start building your personal showcase.
        Add a project with its technology
        stack, GitHub repository and live demo.
      </p>

      <button
        type="button"
        onClick={onAdd}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-0.5"
      >
        <Plus className="h-4 w-4" />

        Add Your First Project
      </button>
    </div>
  );
};

/* ============================================================
   EMPTY FILTERED
============================================================ */

const EmptyFilteredProjects = ({
  onClear,
}) => {
  return (
    <div className="mt-7 rounded-[24px] border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        <Search className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-black">
        No matching projects
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Try changing your search or project
        type.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white dark:bg-white dark:text-slate-900"
      >
        Clear Filters
      </button>
    </div>
  );
};

/* ============================================================
   PROJECT DETAILS MODAL
============================================================ */

const ProjectDetailsModal = ({
  project,
  onClose,
  onEdit,
  onDelete,
  deleting,
}) => {
  const technologies = project.tech_stack
    ? project.tech_stack
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        {/* Image */}

        <div className="relative">

          <div className="aspect-[16/7] overflow-hidden bg-slate-100 dark:bg-slate-800">

            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProjectImagePlaceholder />
            )}

          </div>

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/60 text-white backdrop-blur-md"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Content */}

        <div className="p-6 sm:p-8">

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <Layers3 className="h-3 w-3" />

            {getProjectTypeLabel(
              project.project_type
            )}
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
            {project.title}
          </h2>

          {project.description && (
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              {project.description}
            </p>
          )}

          {/* Technologies */}

          {technologies.length > 0 && (
            <div className="mt-7">

              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                Technologies
              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                {technologies.map(
                  (technology, index) => (
                    <span
                      key={`${technology}-${index}`}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>
            </div>
          )}

          {/* Links */}

          {(project.github_url ||
            project.live_url) && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub Repository
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white"
                >
                  <Globe className="h-4 w-4" />
                  Open Live Project
                </a>
              )}

            </div>
          )}

          {/* Controls */}

          <div className="mt-5 flex gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">

            <button
              type="button"
              onClick={onEdit}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold dark:border-slate-700"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </button>

            <button
              type="button"
              onClick={onDelete}
              disabled={deleting}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-bold text-red-600 disabled:opacity-50 dark:border-red-500/20 dark:text-red-400"
            >
              {deleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}

              Delete
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   PROJECT FORM MODAL
============================================================ */

const ProjectFormModal = ({
  project,
  onClose,
  onSaved,
  setToast,
}) => {
  const isEditing = Boolean(project);

  const [formData, setFormData] = useState({
    title: project?.title || "",

    description:
      project?.description || "",

    projectType:
      project?.project_type ||
      "web-development",

    techStack:
      project?.tech_stack || "",

    githubUrl:
      project?.github_url || "",

    liveUrl:
      project?.live_url || "",

    imageUrl:
      project?.image_url || "",
  });

  const [submitting, setSubmitting] =
    useState(false);

  const [formError, setFormError] =
    useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormError("");

    const title =
      formData.title.trim();

    const description =
      formData.description.trim();

    const techStack =
      formData.techStack.trim();

    const githubUrl =
      formData.githubUrl.trim();

    const liveUrl =
      formData.liveUrl.trim();

    const imageUrl =
      formData.imageUrl.trim();

    if (!title) {
      setFormError(
        "Project title is required."
      );
      return;
    }

    if (!description) {
      setFormError(
        "Project description is required."
      );
      return;
    }

    if (
      !isValidUrl(githubUrl) ||
      !isValidUrl(liveUrl) ||
      !isValidUrl(imageUrl)
    ) {
      setFormError(
        "Please enter valid HTTP or HTTPS URLs."
      );
      return;
    }

    if (
      githubUrl &&
      !githubUrl
        .toLowerCase()
        .includes("github.com")
    ) {
      setFormError(
        "Please enter a valid GitHub repository URL."
      );
      return;
    }

    try {
      setSubmitting(true);

      let response;

      if (isEditing) {
        response = await updateProject({
          projectId: project.id,

          title,

          slug:
            project.slug ||
            createSlug(title),

          description,

          projectType:
            formData.projectType,

          techStack,

          githubUrl,

          liveUrl,

          imageUrl,

          isActive:
            project.is_active !== undefined
              ? Boolean(project.is_active)
              : true,
        });
      } else {
        response = await createProject({
          title,

          slug: createSlug(title),

          description,

          projectType:
            formData.projectType,

          techStack,

          githubUrl,

          liveUrl,

          imageUrl,
        });
      }

      if (!response?.success) {
        throw new Error(
          response?.message ||
            `Unable to ${
              isEditing
                ? "update"
                : "create"
            } project.`
        );
      }

      const savedProject =
        response?.data?.project ||
        response?.project ||
        response?.data ||
        null;

      await onSaved(
        savedProject,
        isEditing
          ? "update"
          : "create"
      );
    } catch (error) {
      console.error(
        "Save project error:",
        error
      );

      const message =
        getErrorMessage(
          error,
          `Unable to ${
            isEditing
              ? "update"
              : "create"
          } project.`
        );

      setFormError(message);

      setToast({
        type: "error",
        message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !submitting
        ) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-slate-200 p-6 dark:border-slate-800 sm:p-7">

          <div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              {isEditing ? (
                <Pencil className="h-5 w-5" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
            </div>

            <h2 className="mt-4 text-xl font-black sm:text-2xl">
              {isEditing
                ? "Edit Project"
                : "Add New Project"}
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {isEditing
                ? "Update your project information."
                : "Add a project to your personal showcase."}
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-7"
        >

          {formError && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

              <span>{formError}</span>
            </div>
          )}

          <div className="space-y-5">

            {/* Title */}

            <FormField
              label="Project Title"
              required
            >
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. PhishGuard"
                maxLength={255}
                className={INPUT_CLASS}
              />
            </FormField>

            {/* Type */}

            <FormField
              label="Project Type"
              required
            >
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={INPUT_CLASS}
              >
                {PROJECT_TYPES.filter(
                  (type) =>
                    type.value !== "all"
                ).map((type) => (
                  <option
                    key={type.value}
                    value={type.value}
                  >
                    {type.label}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Description */}

            <FormField
              label="Description"
              required
            >
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project and what it does..."
                rows={5}
                className={`${INPUT_CLASS} resize-none`}
              />
            </FormField>

            {/* Tech stack */}

            <FormField
              label="Tech Stack"
              hint="Separate technologies with commas"
            >
              <input
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB, Tailwind CSS"
                className={INPUT_CLASS}
              />
            </FormField>

            {/* GitHub */}

            <FormField
              label="GitHub Repository"
              hint="Optional"
            >
              <div className="relative">

                <Code2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/username/project"
                  className={`${INPUT_CLASS} pl-10`}
                />

              </div>
            </FormField>

            {/* Live URL */}

            <FormField
              label="Live Project"
              hint="Optional"
            >
              <div className="relative">

                <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  placeholder="https://your-project.vercel.app"
                  className={`${INPUT_CLASS} pl-10`}
                />

              </div>
            </FormField>

            {/* Image */}

            <FormField
              label="Project Image URL"
              hint="Optional"
            >
              <input
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/project-image.jpg"
                className={INPUT_CLASS}
              />
            </FormField>

          </div>

          {/* Footer */}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 dark:border-slate-800 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >

              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />

                  {isEditing
                    ? "Updating..."
                    : "Adding..."}
                </>
              ) : (
                <>
                  {isEditing ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}

                  {isEditing
                    ? "Update Project"
                    : "Add Project"}
                </>
              )}

            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

/* ============================================================
   FORM FIELD
============================================================ */

const FormField = ({
  label,
  required,
  hint,
  children,
}) => {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between gap-3">

        <label className="text-sm font-bold text-slate-800 dark:text-slate-200">

          {label}

          {required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}

        </label>

        {hint && (
          <span className="text-[11px] text-slate-400">
            {hint}
          </span>
        )}

      </div>

      {children}
    </div>
  );
};

/* ============================================================
   TOAST
============================================================ */

const Toast = ({
  type,
  message,
  onClose,
}) => {
  const success = type === "success";

  return (
    <div className="fixed bottom-5 right-5 z-[200] w-[calc(100%-2rem)] max-w-sm">

      <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
            success
              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {success ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
        </div>

        <p className="flex-1 pt-1 text-sm font-semibold leading-5">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

      </div>
    </div>
  );
};

export default ProjectPortal;