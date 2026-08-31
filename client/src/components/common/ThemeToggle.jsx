import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label="Toggle theme"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
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

        shadow-sm

        transition-all
        duration-300

        hover:scale-105
        hover:bg-emerald-50
        hover:text-emerald-600

        dark:border-slate-700
        dark:bg-slate-800
        dark:text-yellow-300
        dark:hover:bg-slate-700
      "
    >
      {darkMode ? (
        <FaSun size={17} />
      ) : (
        <FaMoon size={17} />
      )}
    </button>
  );
};

export default ThemeToggle;