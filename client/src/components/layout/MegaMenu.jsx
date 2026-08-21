import {
  Code2,
  BrainCircuit,
  Database,
  ShieldCheck,
  Cloud,
  Palette,
  Globe,
  Smartphone,
  Briefcase,
  BarChart3,
  GraduationCap,
} from "lucide-react";

const training = [
  { icon: Code2, title: "Full Stack Development" },
  { icon: BrainCircuit, title: "Artificial Intelligence" },
  { icon: Database, title: "Data Science" },
  { icon: ShieldCheck, title: "Cyber Security" },
  { icon: Cloud, title: "Cloud & DevOps" },
  { icon: Palette, title: "UI / UX Design" },
];

const courses = [
  { icon: Globe, title: "Web Development" },
  { icon: Smartphone, title: "Mobile App Development" },
  { icon: BrainCircuit, title: "AI Solutions" },
  { icon: Cloud, title: "Cloud Services" },
  { icon: BarChart3, title: "Digital Marketing" },
  { icon: Briefcase, title: "IT Consulting" },
  { icon: GraduationCap, title: "Corporate Training" },
];

const MegaMenu = () => {
  return (
    <div className="absolute left-0 top-full mt-5 w-[760px] rounded-2xl border border-slate-200 bg-white shadow-2xl p-8">

      <div className="grid grid-cols-2 gap-10">

        {/* Training */}

        <div>

          <h3 className="text-lg font-bold text-slate-800 mb-5">
            🎓 Professional Training
          </h3>

          <div className="space-y-3">

            {training.map(({ icon: Icon, title }) => (
              <a
                key={title}
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100 transition"
              >
                <Icon size={22} className="text-blue-600" />

                <span>{title}</span>
              </a>
            ))}

          </div>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-lg font-bold text-slate-800 mb-5">
                🚀 Popular Courses

          </h3>

          <div className="space-y-3">

            {courses.map(({ icon: Icon, title }) => (
              <a
                key={title}
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100 transition"
              >
                <Icon size={22} className="text-green-600" />

                <span>{title}</span>
              </a>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default MegaMenu;