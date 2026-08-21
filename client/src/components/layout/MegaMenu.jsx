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
    <div className="absolute left-0 top-full mt-5 w-[760px] rounded-2xl border border-slate-200 bg-white shadow-2xl p-8">
      <h3 className="mb-5 text-lg font-bold text-slate-800">
        Professional Courses
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {courseList.map((course) => {
          const Icon = icons[course.slug] || GraduationCap;
          return (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100 transition"
            >
              <Icon size={22} className="text-emerald-600" />
              <span>{course.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
