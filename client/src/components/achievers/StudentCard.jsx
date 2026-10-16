
import { ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ProfileLinks from "./ProfileLinks";

const StudentCard = ({ student, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index % 2, 1) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-[28px] border border-slate-200/80
        bg-white/90 p-4 shadow-lg shadow-slate-900/[0.04]
        backdrop-blur-xl transition-shadow duration-300
        hover:border-emerald-300 hover:shadow-xl
        hover:shadow-emerald-900/[0.08]
        dark:border-slate-800 dark:bg-slate-900/75
        dark:shadow-black/20 dark:hover:border-emerald-500/40
        dark:hover:shadow-emerald-950/20
        sm:p-5
      "
    >
      <div
        className="
          pointer-events-none absolute -right-12 -top-12
          h-36 w-36 rounded-full bg-emerald-400/10
          blur-3xl transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-start gap-4">
        <div
          className="
            relative h-[100px] w-[86px] shrink-0 overflow-hidden
            rounded-2xl border border-slate-200 bg-slate-100
            shadow-md shadow-slate-900/10
            dark:border-slate-700 dark:bg-slate-800
            sm:h-[116px] sm:w-[100px]
          "
        >
          <img
            src={student.photo}
            alt={`${student.name} portrait`}
            loading="lazy"
            className="
              h-full w-full object-cover object-top
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <div
            className="
              mb-2 inline-flex items-center gap-1.5
              rounded-full border border-emerald-200
              bg-emerald-50 px-2.5 py-1
              text-[10px] font-bold uppercase tracking-wider
              text-emerald-700
              dark:border-emerald-500/20
              dark:bg-emerald-500/10 dark:text-emerald-300
            "
          >
            <Sparkles size={12} />
            Student profile
          </div>

          <h3
            className="
              break-words text-lg font-extrabold tracking-tight
              text-slate-950 dark:text-white sm:text-xl
            "
          >
            {student.name}
          </h3>

          {(student.degree || student.specialization) && (
            <div className="mt-2 flex items-start gap-1.5">
              <GraduationCap
                size={15}
                className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
              />

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                {[student.degree, student.specialization]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          )}
        </div>

        <ArrowUpRight
          size={18}
          className="
            absolute right-0 top-0 shrink-0
            text-slate-400 transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-emerald-600
            dark:group-hover:text-emerald-400
          "
        />
      </div>

      <div
        className="
          my-5 h-px bg-gradient-to-r
          from-emerald-500/30 via-slate-200 to-transparent
          dark:via-slate-700
        "
      />

      <div className="mt-auto">
        <p
          className="
            mb-3 text-xs font-bold uppercase
            tracking-[0.15em] text-slate-500
            dark:text-slate-400
          "
        >
          Explore profiles
        </p>

        <ProfileLinks profiles={student.profiles} />
      </div>
    </motion.article>
  );
};

export default StudentCard;
