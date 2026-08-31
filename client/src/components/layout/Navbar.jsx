import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
  ArrowRight,
  FolderKanban,
  GraduationCap,
} from "lucide-react";

import logo from "../../assets/images/pinaki-logo.jpeg.png";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  /* ================= THEME ================= */

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* ================= NAV ITEMS ================= */

  const navItems = [
    { name: "Home", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Training", path: "/training" },
    { name: "Industries", path: "/industries" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===================================================== */}
      {/* ======================= NAVBAR ====================== */}
      {/* ===================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full

          border-b
          border-slate-200/80

          bg-white/90
          text-slate-900

          shadow-sm
          backdrop-blur-xl

          transition-all
          duration-300

          dark:border-slate-800/80
          dark:bg-slate-950/90
          dark:text-white
          dark:shadow-[0_4px_30px_rgba(0,0,0,0.35)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-8
          "
        >
          {/* ================================================= */}
          {/* ====================== LOGO ===================== */}
          {/* ================================================= */}

          <NavLink
            to="/education"
            onClick={() => {
              setOpen(false);
              setGetStartedOpen(false);
            }}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Pinaki IT"
              className="
                h-12
                w-auto
                rounded-lg
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />

            <div className="hidden sm:block">
              <h2
                className="
                  text-lg
                  font-extrabold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                PINAKI
              </h2>

              <p
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.16em]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                IT CONSULTANT
              </p>
            </div>
          </NavLink>

          {/* ================================================= */}
          {/* ================= DESKTOP NAV =================== */}
          {/* ================================================= */}

          <nav className="hidden items-center gap-7 lg:flex">

            {/* ================= OFFERINGS ================= */}

            <div className="group relative">
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1.5
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-colors
                  duration-200
                  hover:text-emerald-600

                  dark:text-slate-200
                  dark:hover:text-emerald-400
                "
              >
                Offerings

                <ChevronDown
                  size={15}
                  className="
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              </button>

              {/* ================= MEGA MENU ================= */}

              <div
                className="
                  invisible
                  absolute
                  left-1/2
                  top-full
                  -translate-x-1/2
                  pt-5
                  opacity-0

                  transition-all
                  duration-200

                  group-hover:visible
                  group-hover:opacity-100
                "
              >
                <MegaMenu />
              </div>
            </div>

            {/* ================= NAV ITEMS ================= */}

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  relative
                  py-2
                  text-sm
                  font-semibold
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400"
                  }

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[2px]
                  after:rounded-full
                  after:bg-gradient-to-r
                  after:from-emerald-500
                  after:to-cyan-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full

                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* ================================================= */}
          {/* ================= DESKTOP ACTIONS ============== */}
          {/* ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* ================= THEME ================= */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full

                border
                border-slate-700
                bg-slate-900
                text-yellow-300

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-emerald-500

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* ================================================= */}
            {/* ================= GET STARTED ================== */}
            {/* ================================================= */}

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setGetStartedOpen(!getStartedOpen)
                }
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl

                  bg-gradient-to-r
                  from-emerald-500
                  via-teal-500
                  to-cyan-500

                  px-5
                  py-3

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-emerald-500/20

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-emerald-500/30
                "
              >
                Get Started

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      getStartedOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* ================= GET STARTED DROPDOWN ================= */}

              {getStartedOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-full
                    z-[100]
                    mt-3
                    w-64

                    overflow-hidden
                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    shadow-2xl

                    dark:border-slate-700
                    dark:bg-slate-900
                  "
                >
                  {/* ================= PROJECT PORTAL ================= */}

                  <a
                    href="YOUR_PROJECT_PORTAL_URL"
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4

                      transition-all
                      duration-200

                      hover:bg-emerald-50

                      dark:hover:bg-emerald-500/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        bg-emerald-100
                        text-emerald-600

                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      "
                    >
                      <FolderKanban size={20} />
                    </div>

                    <div className="flex-1">
                      <p
                        className="
                          text-sm
                          font-bold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        Project Portal
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Manage your projects
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="
                        text-slate-400

                        transition-transform
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-emerald-500
                      "
                    />
                  </a>

                  {/* ================= DIVIDER ================= */}

                  <div
                    className="
                      mx-5
                      border-t
                      border-slate-200
                      dark:border-slate-700
                    "
                  />

                  {/* ================= LEARNING PORTAL ================= */}

                  <a
                    href="YOUR_LEARNING_PORTAL_URL"
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4

                      transition-all
                      duration-200

                      hover:bg-cyan-50

                      dark:hover:bg-cyan-500/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        bg-cyan-100
                        text-cyan-600

                        dark:bg-cyan-500/10
                        dark:text-cyan-400
                      "
                    >
                      <GraduationCap size={20} />
                    </div>

                    <div className="flex-1">
                      <p
                        className="
                          text-sm
                          font-bold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        Learning Portal
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Continue learning
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="
                        text-slate-400

                        transition-transform
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-cyan-500
                      "
                    />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= MOBILE ACTIONS ================ */}
          {/* ================================================= */}

          <div className="flex items-center gap-2 lg:hidden">

            {/* ================= MOBILE THEME ================= */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full

                border
                border-slate-200
                bg-slate-50
                text-slate-700

                transition-all
                duration-300

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-yellow-300
              "
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* ================= MOBILE MENU ================= */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full

                border
                border-slate-200
                bg-slate-50
                text-slate-700

                transition-all
                duration-200

                hover:bg-slate-100

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                dark:hover:bg-slate-800
              "
            >
              {open ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* ===================================================== */}
        {/* ==================== MOBILE MENU ==================== */}
        {/* ===================================================== */}

        {open && (
          <div
            className="
              border-t
              border-slate-200

              bg-white
              px-6
              py-6

              shadow-xl

              dark:border-slate-800
              dark:bg-slate-950

              lg:hidden
            "
          >
            <nav className="flex flex-col gap-1">

              {/* ================= NAV LINKS ================= */}

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    rounded-xl
                    px-4
                    py-3

                    text-sm
                    font-semibold

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-emerald-400"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* ================================================= */}
              {/* ============== MOBILE GET STARTED =============== */}
              {/* ================================================= */}

              <div className="mt-4">

                <button
                  type="button"
                  onClick={() =>
                    setGetStartedOpen(!getStartedOpen)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-xl

                    bg-gradient-to-r
                    from-emerald-500
                    via-teal-500
                    to-cyan-500

                    px-5
                    py-3

                    font-bold
                    text-white

                    shadow-lg
                  "
                >
                  <span>Get Started</span>

                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        getStartedOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* MOBILE OPTIONS */}

                {getStartedOpen && (
                  <div
                    className="
                      mt-2
                      overflow-hidden
                      rounded-2xl

                      border
                      border-slate-200

                      bg-white
                      shadow-lg

                      dark:border-slate-700
                      dark:bg-slate-900
                    "
                  >
                    {/* PROJECT PORTAL */}

                    <a
                      href="YOUR_PROJECT_PORTAL_URL"
                      className="
                        flex
                        items-center
                        gap-4
                        px-5
                        py-4

                        hover:bg-emerald-50

                        dark:hover:bg-emerald-500/10
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl

                          bg-emerald-100
                          text-emerald-600

                          dark:bg-emerald-500/10
                          dark:text-emerald-400
                        "
                      >
                        <FolderKanban size={20} />
                      </div>

                      <div className="flex-1">
                        <p
                          className="
                            text-sm
                            font-bold
                            text-slate-900
                            dark:text-white
                          "
                        >
                          Project Portal
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          Manage your projects
                        </p>
                      </div>

                      <ArrowRight
                        size={17}
                        className="text-slate-400"
                      />
                    </a>

                    {/* DIVIDER */}

                    <div
                      className="
                        mx-5
                        border-t
                        border-slate-200
                        dark:border-slate-700
                      "
                    />

                    {/* LEARNING PORTAL */}

                    <a
                      href="YOUR_LEARNING_PORTAL_URL"
                      className="
                        flex
                        items-center
                        gap-4
                        px-5
                        py-4

                        hover:bg-cyan-50

                        dark:hover:bg-cyan-500/10
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl

                          bg-cyan-100
                          text-cyan-600

                          dark:bg-cyan-500/10
                          dark:text-cyan-400
                        "
                      >
                        <GraduationCap size={20} />
                      </div>

                      <div className="flex-1">
                        <p
                          className="
                            text-sm
                            font-bold
                            text-slate-900
                            dark:text-white
                          "
                        >
                          Learning Portal
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          Continue learning
                        </p>
                      </div>

                      <ArrowRight
                        size={17}
                        className="text-slate-400"
                      />
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;