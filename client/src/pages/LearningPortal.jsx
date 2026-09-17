import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  GraduationCap,
  Home,
  Layers3,
  LogOut,
  Menu,
  Play,
  Rocket,
  Search,
  Sparkles,
  Target,
  Trophy,
  X,
} from "lucide-react";

import { getLearningDashboard } from "../API/dashboardService.js";
import { getCourseById } from "../API/courseService.js";
import { enrollInCourse } from "../API/enrollmentService.js";
import { useAuth } from "../context/AuthContext.jsx";


/* =========================================================
   LEARNING PORTAL
========================================================= */

const LearningPortal = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [dashboard, setDashboard] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [loading, setLoading] = useState(true);
  const [courseLoading, setCourseLoading] = useState(false);

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("overview");

  const [enrollingCourseId, setEnrollingCourseId] =
    useState(null);

  const [error, setError] = useState("");


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

      const response = await getLearningDashboard();

      if (response.success) {
        setDashboard(response.data);
      } else {
        setError(
          response.message ||
            "Unable to load your learning dashboard."
        );
      }
    } catch (err) {
      console.error("Learning dashboard error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load your learning dashboard."
      );
    } finally {
      setLoading(false);
    }
  };


  /* =======================================================
     DATA
  ======================================================= */

  const enrollments = dashboard?.enrollments || [];
  const exploreCourses =
    dashboard?.explore_courses || [];


  /* =======================================================
     STATS
  ======================================================= */

  const stats = useMemo(() => {
    const activeCourses = enrollments.filter(
      (item) => item.status === "active"
    ).length;

    const completedCourses = enrollments.filter(
      (item) => item.status === "completed"
    ).length;

    const totalProgress = enrollments.reduce(
      (sum, item) =>
        sum +
        Number(
          item.progress?.progress_percent || 0
        ),
      0
    );

    const overallProgress = enrollments.length
      ? Math.round(
          totalProgress / enrollments.length
        )
      : 0;

    return {
      total: enrollments.length,
      active: activeCourses,
      completed: completedCourses,
      progress: overallProgress,
    };
  }, [enrollments]);


  /* =======================================================
     SECTION NAVIGATION
  ======================================================= */

  const scrollToSection = (section) => {
    setActiveSection(section);
    setSelectedCourse(null);
    setMobileSidebarOpen(false);

    const element =
      document.getElementById(section);

    if (!element) return;

    const navbarOffset = 104;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };


  /* =======================================================
     OPEN COURSE
  ======================================================= */

  const openCourse = async (courseId) => {
    try {
      setCourseLoading(true);
      setError("");

      const response =
        await getCourseById(courseId);

      if (response.success) {
        setSelectedCourse(
          response.data.course ||
            response.data
        );

        setMobileSidebarOpen(false);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        setError(
          response.message ||
            "Unable to load course material."
        );
      }
    } catch (err) {
      console.error(
        "Course details error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Unable to load course material."
      );
    } finally {
      setCourseLoading(false);
    }
  };


  /* =======================================================
     ENROLL
  ======================================================= */

  const handleEnroll = async (courseId) => {
    try {
      setEnrollingCourseId(courseId);
      setError("");

      const response =
        await enrollInCourse(courseId);

      if (!response.success) {
        setError(
          response.message ||
            "Unable to enroll in this course."
        );
        return;
      }

      const dashboardResponse =
        await getLearningDashboard();

      if (dashboardResponse.success) {
        setDashboard(
          dashboardResponse.data
        );
      }

      setActiveSection("learning");

      setTimeout(() => {
        document
          .getElementById("learning")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    } catch (err) {
      console.error(
        "Enrollment error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Unable to enroll in this course."
      );
    } finally {
      setEnrollingCourseId(null);
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
              <GraduationCap className="h-6 w-6 animate-pulse" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Loading your learning portal
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Preparing your learning workspace...
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
          <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
              <X className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Unable to load dashboard
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                window.location.reload()
              }
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5"
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
     MAIN PORTAL
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* ===================================================
          MOBILE MENU BUTTON
      =================================================== */}

      <button
        type="button"
        onClick={() =>
          setMobileSidebarOpen(true)
        }
        className="fixed left-4 top-24 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white lg:hidden"
        aria-label="Open learning navigation"
      >
        <Menu className="h-5 w-5" />
      </button>


      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      {mobileSidebarOpen && (
        <button
          type="button"
          onClick={() =>
            setMobileSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          aria-label="Close learning navigation"
        />
      )}


      {/* ===================================================
          PORTAL FLEX LAYOUT

          IMPORTANT:
          Sidebar is sticky instead of fixed.
          This allows Footer to remain below portal.
      =================================================== */}

      <div className="flex min-h-[calc(100vh-5rem)]">


        {/* =================================================
            SIDEBAR
        ================================================= */}

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
                : "lg:w-[270px]"
            }
            ${
              mobileSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* =================================================
              BRAND
          ================================================= */}

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
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div>
                  <h1 className="text-base font-bold">
                    Pinaki IT
                  </h1>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Learning Portal
                  </p>
                </div>
              </div>
            )}

            {sidebarCollapsed && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-black text-white shadow-lg shadow-emerald-500/20">
                PI
              </div>
            )}

            {/* Collapse */}
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


          {/* =================================================
              USER
          ================================================= */}

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


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">

            <SidebarButton
              icon={Home}
              label="Overview"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "overview" &&
                !selectedCourse
              }
              onClick={() =>
                scrollToSection("overview")
              }
            />

            <SidebarButton
              icon={BookOpen}
              label="My Learning"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "learning" &&
                !selectedCourse
              }
              onClick={() =>
                scrollToSection("learning")
              }
            />

            <SidebarButton
              icon={Search}
              label="Explore Courses"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "explore" &&
                !selectedCourse
              }
              onClick={() =>
                scrollToSection("explore")
              }
            />

            <SidebarButton
              icon={Layers3}
              label="My Progress"
              collapsed={sidebarCollapsed}
              active={
                activeSection === "progress" &&
                !selectedCourse
              }
              onClick={() =>
                scrollToSection("progress")
              }
            />
          </nav>


          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

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
            MAIN CONTENT
        ================================================= */}

        <main className="min-w-0 flex-1">

          {/* Ambient background */}
          <div className="relative overflow-hidden">

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

              {/* =================================================
                  ERROR
              ================================================= */}

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


              {/* =================================================
                  COURSE MATERIAL
              ================================================= */}

              {selectedCourse ? (
                <CourseLearningView
                  course={selectedCourse}
                  onBack={() => {
                    setSelectedCourse(null);
                    setActiveSection(
                      "learning"
                    );

                    setTimeout(() => {
                      document
                        .getElementById(
                          "learning"
                        )
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 50);
                  }}
                  courseLoading={
                    courseLoading
                  }
                />
              ) : (
                <>

                  {/* =================================================
                      OVERVIEW
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
                            Learning Workspace
                          </div>

                          <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl">
                            Learn.
                            <span className="text-emerald-600 dark:text-emerald-400">
                              {" "}
                              Build.
                            </span>{" "}
                            Grow. 🎓
                          </h1>

                          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                            Welcome back,{" "}
                            <span className="font-bold text-slate-900 dark:text-white">
                              {user?.name
                                ?.split(" ")[0] ||
                                "Student"}
                            </span>
                            . Continue your learning journey,
                            explore new courses, and keep building
                            your skills.
                          </p>

                          <div className="mt-8 flex flex-wrap gap-3">

                            <button
                              type="button"
                              onClick={() =>
                                scrollToSection(
                                  "learning"
                                )
                              }
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                              <BookOpen className="h-4 w-4" />

                              My Learning

                              <ArrowRight className="h-4 w-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                scrollToSection(
                                  "explore"
                                )
                              }
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                            >
                              <Search className="h-4 w-4" />

                              Explore Courses
                            </button>

                          </div>
                        </div>


                        {/* Overall Progress */}
                        <div>
                          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700 dark:bg-slate-950/60 dark:shadow-black/20">

                            <div className="flex items-start justify-between">

                              <div>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                  Overall Progress
                                </p>

                                <p className="mt-2 text-5xl font-black tracking-tight">
                                  {stats.progress}%
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
                                      stats.progress
                                    )
                                  )}%`,
                                }}
                              />
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">

                              <MiniMetric
                                label="Courses"
                                value={stats.total}
                              />

                              <MiniMetric
                                label="Completed"
                                value={
                                  stats.completed
                                }
                              />

                            </div>

                          </div>
                        </div>

                      </div>
                    </div>


                    {/* Stats */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                      <StatCard
                        icon={BookOpen}
                        label="My Courses"
                        value={stats.total}
                        description="Courses you're enrolled in"
                      />

                      <StatCard
                        icon={Play}
                        label="Active Courses"
                        value={stats.active}
                        description="Currently learning"
                      />

                      <StatCard
                        icon={Trophy}
                        label="Completed"
                        value={stats.completed}
                        description="Successfully finished"
                      />

                      <StatCard
                        icon={GraduationCap}
                        label="Overall Progress"
                        value={`${stats.progress}%`}
                        description="Across your courses"
                      />

                    </div>


                    {/* Quick cards */}
                    <div className="mt-6 grid gap-4 lg:grid-cols-3">

                      <InfoCard
                        icon={BookOpen}
                        title="Learn at Your Pace"
                        description="Continue your enrolled courses whenever you're ready."
                      />

                      <InfoCard
                        icon={Target}
                        title="Track Your Progress"
                        description="See how far you've progressed across your learning journey."
                      />

                      <InfoCard
                        icon={Rocket}
                        title="Build Your Skills"
                        description="Turn course knowledge into practical technical skills."
                      />

                    </div>

                  </section>


                  {/* =================================================
                      MY LEARNING
                  ================================================= */}

                  <section
                    id="learning"
                    className="mt-16 scroll-mt-28"
                  >

                    <SectionHeading
                      eyebrow="YOUR COURSES"
                      title="My Learning"
                      description="Courses you are currently enrolled in."
                      icon={BookOpen}
                    />

                    {enrollments.length === 0 ? (
                      <EmptyState
                        icon={BookOpen}
                        title="No courses yet"
                        description="Explore our available courses and start your learning journey."
                        buttonText="Explore Courses"
                        onClick={() =>
                          scrollToSection(
                            "explore"
                          )
                        }
                      />
                    ) : (
                      <div className="grid gap-6 lg:grid-cols-2">

                        {enrollments.map(
                          (enrollment) => (
                            <LearningCourseCard
                              key={
                                enrollment.id
                              }
                              enrollment={
                                enrollment
                              }
                              onContinue={() =>
                                openCourse(
                                  enrollment
                                    .course.id
                                )
                              }
                            />
                          )
                        )}

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
                      eyebrow="YOUR JOURNEY"
                      title="My Progress"
                      description="Track your progress across enrolled courses."
                      icon={Layers3}
                    />

                    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">

                      {enrollments.length === 0 ? (
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Enroll in a course to start
                          tracking your progress.
                        </p>
                      ) : (
                        <div className="space-y-5">

                          {enrollments.map(
                            (enrollment) => {
                              const progress =
                                Number(
                                  enrollment
                                    .progress
                                    ?.progress_percent ||
                                    0
                                );

                              return (
                                <div
                                  key={
                                    enrollment.id
                                  }
                                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60"
                                >

                                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2">
                                        <h3 className="truncate font-bold">
                                          {
                                            enrollment
                                              .course
                                              .title
                                          }
                                        </h3>

                                        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold capitalize text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                          {
                                            enrollment.status
                                          }
                                        </span>
                                      </div>

                                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        {
                                          enrollment
                                            .course
                                            .category
                                        }
                                      </p>
                                    </div>

                                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                                      {progress}%
                                    </span>

                                  </div>

                                  <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
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
                            }
                          )}

                        </div>
                      )}

                    </div>

                  </section>


                  {/* =================================================
                      EXPLORE
                  ================================================= */}

                  <section
                    id="explore"
                    className="mt-16 scroll-mt-28"
                  >

                    <SectionHeading
                      eyebrow="KEEP LEARNING"
                      title="Explore More Courses"
                      description="Discover courses and continue building your skills."
                      icon={Search}
                    />

                    {exploreCourses.length ===
                    0 ? (
                      <div className="relative overflow-hidden rounded-[30px] border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">

                        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[90px] dark:bg-emerald-500/5" />

                        <div className="relative">
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>

                          <h3 className="mt-5 text-lg font-black">
                            You're enrolled in all
                            available courses
                          </h3>

                          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Keep learning and complete
                            your current courses.
                          </p>
                        </div>

                      </div>
                    ) : (
                      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                        {exploreCourses.map(
                          (course) => (
                            <ExploreCourseCard
                              key={course.id}
                              course={course}
                              loading={
                                enrollingCourseId ===
                                course.id
                              }
                              onEnroll={() =>
                                handleEnroll(
                                  course.id
                                )
                              }
                            />
                          )
                        )}

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

const MiniMetric = ({
  label,
  value,
}) => {
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
   LEARNING COURSE CARD
========================================================= */

const LearningCourseCard = ({
  enrollment,
  onContinue,
}) => {
  const course = enrollment.course;

  const progress = Number(
    enrollment.progress?.progress_percent ||
      0
  );

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20">

      <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

      <div className="aspect-[16/7] overflow-hidden bg-slate-100 dark:bg-slate-800">

        {course.image_url ? (
          <img
            src={course.image_url}
            alt={course.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen className="h-10 w-10 text-slate-400" />
          </div>
        )}

      </div>

      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {course.category}
            </span>

            <h3 className="mt-1 text-lg font-black tracking-tight">
              {course.title}
            </h3>
          </div>

          <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold capitalize text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            {enrollment.status}
          </span>

        </div>


        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">

          <span className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" />
            {course.level}
          </span>

        </div>


        <div className="mt-6">

          <div className="mb-2.5 flex items-center justify-between">

            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Course Progress
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
          onClick={onContinue}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Play className="h-4 w-4" />

          Continue Learning

          <ArrowRight className="h-4 w-4" />
        </button>

      </div>
    </div>
  );
};


/* =========================================================
   EXPLORE COURSE CARD
========================================================= */

const ExploreCourseCard = ({
  course,
  loading,
  onEnroll,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20">

      <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">

        {course.image_url ? (
          <img
            src={course.image_url}
            alt={course.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen className="h-10 w-10 text-slate-400" />
          </div>
        )}

      </div>

      <div className="p-6">

        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
          {course.category}
        </span>

        <h3 className="mt-1 line-clamp-2 text-lg font-black tracking-tight">
          {course.title}
        </h3>

        {course.overview && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {course.overview}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">

          <span className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" />
            {course.level}
          </span>

        </div>

        <button
          type="button"
          disabled={loading}
          onClick={onEnroll}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 dark:text-emerald-400 dark:hover:text-white"
        >
          {loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Enrolling...
            </>
          ) : (
            <>
              <GraduationCap className="h-4 w-4" />
              Enroll Now
            </>
          )}
        </button>

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
  buttonText,
  onClick,
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

        {buttonText && (
          <button
            type="button"
            onClick={onClick}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

      </div>
    </div>
  );
};


/* =========================================================
   COURSE LEARNING VIEW
========================================================= */

const CourseLearningView = ({
  course,
  onBack,
  courseLoading,
}) => {
  if (courseLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <BookOpen className="h-6 w-6 animate-pulse" />
          </div>

          <p className="mt-4 font-semibold">
            Loading course material...
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Preparing your learning content
          </p>

        </div>
      </div>
    );
  }

  const modules = course.modules || [];
  const highlights =
    course.highlights || [];

  const intros =
    course.intros ||
    course.intro ||
    [];

  const photos = course.photos || [];
  const logos = course.logos || [];


  return (
    <div>

      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="group mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to My Learning
      </button>


      {/* =================================================
          COURSE HERO
      ================================================= */}

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">

        <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />

        <div className="aspect-[16/5] overflow-hidden bg-slate-100 dark:bg-slate-800">

          {course.image_url ? (
            <img
              src={course.image_url}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <BookOpen className="h-12 w-12 text-slate-400" />
            </div>
          )}

        </div>


        <div className="relative p-6 sm:p-8 lg:p-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/15 blur-[100px] dark:bg-emerald-500/5" />

          <div className="relative">

            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              {course.category}
            </span>

            <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Clock3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                {course.duration}
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                {course.level}
              </span>

            </div>

          </div>
        </div>
      </div>


      {/* =================================================
          OVERVIEW
      ================================================= */}

      {course.overview && (
        <CourseContentSection
          eyebrow="START HERE"
          title="Course Overview"
          icon={BookOpen}
        >
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              {course.overview}
            </p>

          </div>
        </CourseContentSection>
      )}


      {/* =================================================
          INTRO
      ================================================= */}

      {intros.length > 0 && (
        <CourseContentSection
          eyebrow="GET STARTED"
          title="Course Introduction"
          icon={Sparkles}
        >
          <div className="space-y-4">

            {intros.map(
              (intro, index) => (
                <div
                  key={
                    intro.id || index
                  }
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >

                  {intro.title && (
                    <h3 className="text-lg font-black">
                      {intro.title}
                    </h3>
                  )}

                  {intro.content && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {intro.content}
                    </p>
                  )}

                  {intro.description && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {intro.description}
                    </p>
                  )}

                </div>
              )
            )}

          </div>
        </CourseContentSection>
      )}


      {/* =================================================
          HIGHLIGHTS
      ================================================= */}

      {highlights.length > 0 && (
        <CourseContentSection
          eyebrow="WHAT YOU'LL LEARN"
          title="Course Highlights"
          icon={Target}
        >
          <div className="grid gap-4 sm:grid-cols-2">

            {highlights.map(
              (highlight, index) => {

                const text =
                  highlight.title ||
                  highlight.text ||
                  highlight.description ||
                  highlight.content;

                return (
                  <div
                    key={
                      highlight.id ||
                      index
                    }
                    className="group flex items-start gap-4 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/20"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>

                    <span className="pt-1 text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                      {text}
                    </span>

                  </div>
                );
              }
            )}

          </div>
        </CourseContentSection>
      )}


      {/* =================================================
          MODULES
      ================================================= */}

      {modules.length > 0 && (
        <CourseContentSection
          eyebrow="COURSE ROADMAP"
          title="Course Content"
          icon={Layers3}
        >
          <div className="space-y-3">

            {modules.map(
              (module, index) => (
                <ModuleAccordion
                  key={
                    module.id || index
                  }
                  module={module}
                  index={index}
                />
              )
            )}

          </div>
        </CourseContentSection>
      )}


      {/* =================================================
          PHOTOS
      ================================================= */}

      {photos.length > 0 && (
        <CourseContentSection
          eyebrow="VISUALS"
          title="Course Gallery"
          icon={Sparkles}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {photos.map(
              (photo, index) => {

                const imageUrl =
                  photo.image_url ||
                  photo.photo_url ||
                  photo.url;

                if (!imageUrl) return null;

                return (
                  <div
                    key={
                      photo.id ||
                      index
                    }
                    className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <img
                      src={imageUrl}
                      alt={course.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                );
              }
            )}

          </div>
        </CourseContentSection>
      )}


      {/* =================================================
          LOGOS
      ================================================= */}

      {logos.length > 0 && (
        <CourseContentSection
          eyebrow="PARTNERS"
          title="Course Partners"
          icon={GraduationCap}
        >
          <div className="flex flex-wrap gap-5">

            {logos.map(
              (logo, index) => {

                const imageUrl =
                  logo.logo_url ||
                  logo.image_url ||
                  logo.url;

                if (!imageUrl) return null;

                return (
                  <div
                    key={
                      logo.id ||
                      index
                    }
                    className="flex h-24 w-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <img
                      src={imageUrl}
                      alt="Course partner"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                );
              }
            )}

          </div>
        </CourseContentSection>
      )}

    </div>
  );
};


/* =========================================================
   COURSE CONTENT SECTION
========================================================= */

const CourseContentSection = ({
  eyebrow,
  title,
  icon: Icon,
  children,
}) => {
  return (
    <section className="mt-12">

      <div className="mb-6 flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>

        <div>

          {eyebrow && (
            <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-1 text-2xl font-black tracking-tight">
            {title}
          </h2>

        </div>
      </div>

      {children}

    </section>
  );
};


/* =========================================================
   MODULE ACCORDION
========================================================= */

const ModuleAccordion = ({
  module,
  index,
}) => {
  const [open, setOpen] =
    useState(index === 0);

  const points =
    module.points ||
    module.module_points ||
    module.items ||
    [];

  return (
    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/70"
      >

        <div className="flex min-w-0 items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="min-w-0">

            <p className="font-bold">
              {module.title ||
                module.name ||
                `Module ${index + 1}`}
            </p>

            {module.description && (
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {module.description}
              </p>
            )}

          </div>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {open ? (
            <ChevronLeft className="h-4 w-4 rotate-90" />
          ) : (
            <ChevronRight className="h-4 w-4 rotate-90" />
          )}
        </div>

      </button>


      {open && points.length > 0 && (
        <div className="border-t border-slate-200 px-5 pb-5 pt-3 dark:border-slate-800">

          <div className="space-y-1">

            {points.map(
              (point, pointIndex) => {

                const text =
                  point.point ||
                  point.title ||
                  point.text ||
                  point.description ||
                  point.content;

                return (
                  <div
                    key={
                      point.id ||
                      pointIndex
                    }
                    className="flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >

                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {text}
                    </p>

                  </div>
                );
              }
            )}

          </div>
        </div>
      )}

    </div>
  );
};


export default LearningPortal;