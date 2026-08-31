import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { courseList } from "../../data/courseData";

const icons = {
  "introduction-to-generative-ai": BrainCircuit,
  "cyber-security-and-ethical-hacking": ShieldCheck,
  "machine-learning": Database,
  "advanced-digital-marketing": BarChart3,
  "full-stack-development": Code2,
  "data-scientist-global-certification": GraduationCap,
};

const MegaMenu = () => {
  return (
    <div
      className="
        w-[760px]
        rounded-2xl
        border border-slate-200
        bg-white
        p-8
        shadow-2xl

        dark:border-slate-700
        dark:bg-[#111827]
        dark:shadow-black/40
      "
    >
      {/* Heading */}
      <h3
        className="
          mb-5
          text-lg
          font-bold
          text-slate-800
          dark:text-white
        "
      >
        Professional Courses
      </h3>

      {/* Courses */}
      <div className="grid grid-cols-2 gap-2">
        {courseList.map((course) => {
          const Icon = icons[course.slug] || GraduationCap;

          return (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                p-3

                text-slate-700
                hover:bg-slate-100

                dark:text-slate-200
                dark:hover:bg-slate-800

                transition-all
                duration-200
              "
            >
              <Icon
                size={22}
                className="
                  text-emerald-600
                  dark:text-emerald-400
                  shrink-0
                "
              />

              <span className="font-medium">
                {course.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;