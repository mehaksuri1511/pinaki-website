import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  Target,
  Trophy,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Cloud,
  GitBranch,
  Container,
  Bot,
  Brackets,
  Coffee,
  FileCode2,
} from "lucide-react";

const courses = [
  {
    name: "Generative AI",
    icon: Brain,
    position: "left-[4%] top-[12%]",
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    position: "right-[3%] top-[10%]",
  },
  {
    name: "Machine Learning",
    icon: BarChart3,
    position: "left-[0%] top-[34%]",
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    position: "right-[-2%] top-[35%]",
  },
  {
    name: "Full Stack",
    icon: Code2,
    position: "left-[5%] bottom-[14%]",
  },
  {
    name: "Data Science",
    icon: Database,
    position: "right-[4%] bottom-[13%]",
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    position: "left-[20%] top-[3%]",
  },
  {
    name: "DevOps",
    icon: GitBranch,
    position: "right-[21%] top-[3%]",
  },
  {
    name: "Docker",
    icon: Container,
    position: "left-[18%] bottom-[3%]",
  },
  {
    name: "Agentic AI",
    icon: Bot,
    position: "right-[19%] bottom-[3%]",
  },
  {
    name: "DSA",
    icon: Brackets,
    position: "left-[1%] top-[61%]",
  },
  {
    name: "Java",
    icon: Coffee,
    position: "right-[0%] top-[61%]",
  },
  {
    name: "Python",
    icon: FileCode2,
    position: "left-[28%] top-[17%]",
  },
  {
    name: "C++",
    icon: Code2,
    position: "right-[28%] top-[17%]",
  },
];

const CourseQuizBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      {/* =========================================================
          OUTER AMBIENT GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute -inset-10 rounded-[55px] bg-gradient-to-r from-emerald-400/20 via-teal-400/10 to-green-400/20 blur-3xl dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-green-500/10" />

      {/* Secondary glow */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[90px] dark:bg-emerald-500/10"
      />

      {/* =========================================================
          MAIN BANNER
      ========================================================= */}
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/95 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-7">
        {/* =====================================================
            DECORATIVE BACKGROUND
        ===================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top-right glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

          {/* Bottom-left glow */}
          <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-teal-300/15 blur-3xl dark:bg-teal-500/10" />

          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/10 blur-[100px] dark:bg-green-500/5" />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            }}
          />

          {/* Large decorative rings */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-[47%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10 dark:border-emerald-400/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-[47%] h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-500/10 dark:border-teal-400/10"
          />

          {/* Small floating dots */}
          <motion.span
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[38%] top-[15%] h-1.5 w-1.5 rounded-full bg-emerald-500"
          />

          <motion.span
            animate={{
              y: [0, 10, 0],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[18%] right-[38%] h-2 w-2 rounded-full bg-teal-500"
          />
        </div>

        {/* =====================================================
            FLOATING COURSE CHIPS
        ===================================================== */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.name}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -5, 0],
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: 0.35 + index * 0.06,
                  },
                  scale: {
                    duration: 0.7,
                    delay: 0.35 + index * 0.06,
                  },
                  y: {
                    duration: 3 + (index % 4) * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  },
                }}
                className={`absolute ${course.position} flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/90 px-3 py-2 text-[9px] font-bold text-slate-700 shadow-lg shadow-emerald-500/5 backdrop-blur-md transition-colors duration-300 dark:border-emerald-400/15 dark:bg-slate-800/90 dark:text-slate-300`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Icon size={11} strokeWidth={2} />
                </span>

                {course.name}
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="relative z-10 flex min-h-[455px] flex-col items-center justify-center text-center">
          {/* ===================================================
              MAIN ICON
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer pulse */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-7 rounded-[32px] bg-emerald-400/15 blur-2xl dark:bg-emerald-500/15"
            />

            {/* Rotating ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3 rounded-[30px] border border-dashed border-emerald-400/30"
            />

            {/* Icon container */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-2xl shadow-emerald-500/10 dark:border-emerald-400/20 dark:from-emerald-400/10 dark:via-slate-900 dark:to-teal-400/10">
              <GraduationCap
                size={43}
                strokeWidth={1.7}
                className="text-emerald-600 dark:text-emerald-400"
              />

              {/* Sparkle badge */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg dark:border-slate-900"
              >
                <Sparkles size={14} />
              </motion.div>
            </div>
          </motion.div>

          {/* ===================================================
              BADGE
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <Target size={13} />

            AI-Powered Career Finder
          </motion.div>

          {/* ===================================================
              HEADING
          =================================================== */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-lg text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-4xl"
          >
            Not Sure What to Learn?

            <span className="mt-1 block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
              Let Your Answers Decide.
            </span>
          </motion.h2>

          {/* ===================================================
              DESCRIPTION
          =================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.65,
            }}
            className="mt-4 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-[15px]"
          >
            Answer 10 quick questions about your interests, strengths and
            career goals. We'll show you the courses that fit you best.
          </motion.p>

          {/* ===================================================
              STATS
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.78,
            }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          >
            {/* 14 Courses */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-950/70">
              <GraduationCap
                size={15}
                className="text-emerald-500"
              />

              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                14 Courses
              </span>
            </div>

            {/* 10 Questions */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-950/70">
              <Sparkles
                size={15}
                className="text-emerald-500"
              />

              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                10 Questions
              </span>
            </div>

            {/* Top 3 */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-950/70">
              <Trophy
                size={15}
                className="text-emerald-500"
              />

              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Top 3 Matches
              </span>
            </div>
          </motion.div>

          {/* ===================================================
              CTA
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7"
          >
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/35"
            >
              Find My Perfect Course

              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>

          {/* ===================================================
              TRUST TEXT
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 1.05,
            }}
            className="mt-3 flex items-center gap-2 text-[10px] font-medium text-slate-400 dark:text-slate-600"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-500" />

            Free to take

            <span className="text-slate-300 dark:text-slate-700">
              •
            </span>

            Takes less than 2 minutes

            <span className="text-slate-300 dark:text-slate-700">
              •
            </span>

            No registration
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM ACCENT
        ===================================================== */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      </div>
    </motion.div>
  );
};

export default CourseQuizBanner;