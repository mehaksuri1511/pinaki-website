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
} from "lucide-react";

const courses = [
  {
    name: "Generative AI",
    icon: Brain,
    position: "left-[8%] top-[18%]",
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    position: "right-[7%] top-[13%]",
  },
  {
    name: "Machine Learning",
    icon: BarChart3,
    position: "left-[2%] top-[43%]",
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    position: "right-[0%] top-[45%]",
  },
  {
    name: "Full Stack",
    icon: Code2,
    position: "left-[10%] bottom-[10%]",
  },
  {
    name: "Data Science",
    icon: Database,
    position: "right-[9%] bottom-[9%]",
  },
];

const CourseQuizBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[45px] bg-gradient-to-r from-emerald-400/20 via-teal-400/10 to-green-400/20 blur-3xl dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-green-500/10" />

      {/* Main banner */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/30 sm:p-6">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-teal-300/15 blur-3xl dark:bg-teal-500/10" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Floating course chips */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.name}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: 0.6 + index * 0.08,
                  },
                  scale: {
                    duration: 0.7,
                    delay: 0.6 + index * 0.08,
                  },
                  y: {
                    duration: 3 + index * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                }}
                className={`absolute ${course.position} flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-3 py-2 text-[10px] font-bold text-slate-700 shadow-lg shadow-emerald-500/5 backdrop-blur-md dark:border-emerald-400/20 dark:bg-slate-800/90 dark:text-slate-300`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Icon size={12} />
                </span>

                {course.name}
              </motion.div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-[28px] bg-emerald-400/20 blur-xl dark:bg-emerald-500/15"
            />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-[26px] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-xl shadow-emerald-500/10 dark:border-emerald-400/20 dark:from-emerald-400/10 dark:to-teal-400/10">
              <GraduationCap
                size={38}
                strokeWidth={1.8}
                className="text-emerald-600 dark:text-emerald-400"
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-emerald-500 text-white shadow-lg dark:border-slate-900"
              >
                <Sparkles size={13} />
              </motion.div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <Target size={13} />
            Career Finder
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-md text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl dark:text-white"
          >
            Which Course Is
            <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
              Right For You?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.78,
            }}
            className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400"
          >
            Take our quick 10-question assessment and discover the top 3
            courses that match your interests and career goals.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.9,
            }}
            className="mt-6 flex items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-950/70">
              <Sparkles
                size={15}
                className="text-emerald-500"
              />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                10 Questions
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-950/70">
              <Trophy
                size={15}
                className="text-emerald-500"
              />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Top 3 Matches
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.02,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7"
          >
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30"
            >
              Find My Course

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.15,
            }}
            className="mt-3 text-[10px] font-medium text-slate-400 dark:text-slate-600"
          >
            No registration required • Takes less than 2 minutes
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseQuizBanner;