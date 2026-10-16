
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionWatermark from "../common/SectionWatermark";

const AchieversHero = () => {
  const navigate = useNavigate();

  const scrollToStudents = () => {
    document.getElementById("student-directory")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-white pt-[104px] dark:bg-slate-950
        max-lg:pt-[88px]
      "
    >
      <SectionWatermark
        icons={[
          "Code2",
          "GraduationCap",
          "Trophy",
          "Users",
          "Sparkles",
          "Rocket",
          "Target",
          "Award",
        ]}
        intensity="strong"
      />

      <div
        className="
          pointer-events-none absolute -left-32 top-32
          h-96 w-96 rounded-full bg-emerald-400/15
          blur-[120px] dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none absolute -right-32 bottom-0
          h-96 w-96 rounded-full bg-teal-400/15
          blur-[120px] dark:bg-teal-500/10
        "
      />

      <div
        className="
          relative z-10 mx-auto flex min-h-[440px]
          max-w-[1500px] items-center px-6 py-16
          sm:px-8 sm:py-20 lg:px-10 lg:py-24
        "
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
              mb-6 inline-flex items-center gap-3
              rounded-full border border-emerald-200
              bg-emerald-50 px-4 py-2
              text-xs font-bold uppercase tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-500/20
              dark:bg-emerald-500/10 dark:text-emerald-400
            "
          >
            <Sparkles size={15} />
            Our Student Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-5xl font-black leading-[1.04]
              tracking-tight text-slate-950
              sm:text-6xl lg:text-7xl xl:text-[78px]
              dark:text-white
            "
          >
            Meet Our

            <br />

            <span
              className="
                bg-gradient-to-r from-emerald-600
                via-green-500 to-teal-500
                bg-clip-text text-transparent
                dark:from-emerald-400
                dark:via-green-400 dark:to-teal-300
              "
            >
              Student Achievers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="
              mt-6 max-w-2xl text-base leading-7
              text-slate-600 sm:text-lg sm:leading-8
              dark:text-slate-300
            "
          >
            Meet the learners building their technical skills,
            solving problems, and creating their digital footprint.
            Explore their coding profiles and follow their journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={scrollToStudents}
              className="
                group inline-flex items-center gap-2
                rounded-full bg-gradient-to-r
                from-emerald-600 to-teal-500
                px-7 py-3.5 font-semibold text-white
                shadow-lg shadow-emerald-500/20
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                hover:shadow-emerald-500/30
              "
            >
              Explore Profiles

              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="
                inline-flex items-center gap-2
                rounded-full border border-slate-300
                bg-white/70 px-7 py-3.5
                font-semibold text-slate-800
                backdrop-blur-md transition-all duration-300
                hover:-translate-y-1 hover:border-emerald-400
                hover:text-emerald-600
                dark:border-slate-700
                dark:bg-slate-900/60 dark:text-slate-200
                dark:hover:border-emerald-500
                dark:hover:text-emerald-400
              "
            >
              <Code2 size={18} />
              Explore Programs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="
              mt-9 flex flex-wrap items-center gap-x-6
              gap-y-3 border-t border-slate-200 pt-5
              dark:border-slate-800
            "
          >
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Code2 size={17} className="text-emerald-600 dark:text-emerald-400" />
              Coding Profiles
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Sparkles size={17} className="text-emerald-600 dark:text-emerald-400" />
              Continuous Learning
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          right-0 h-16 bg-gradient-to-t
          from-slate-50 to-transparent
          dark:from-slate-950
        "
      />
    </section>
  );
};

export default AchieversHero;
