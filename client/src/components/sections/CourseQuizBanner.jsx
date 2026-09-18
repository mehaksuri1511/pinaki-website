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
} from "lucide-react";

const courses = [
  {
    name: "Generative AI",
    icon: Brain,
    position: "left-[5%] top-[16%]",
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    position: "right-[5%] top-[16%]",
  },
  {
    name: "Full Stack",
    icon: Code2,
    position: "left-[7%] bottom-[18%]",
  },
  {
    name: "Data Science",
    icon: Database,
    position: "right-[7%] bottom-[18%]",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    position: "left-[17%] top-[8%]",
  },
  {
    name: "DSA",
    icon: Code2,
    position: "right-[17%] top-[8%]",
  },
];

const CourseQuizBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[45px] bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />

      {/* Main Banner */}
      <div
        className="
          relative overflow-hidden rounded-[30px]
          border border-slate-200
          bg-white
          shadow-[0_20px_70px_rgba(15,23,42,0.10)]
          transition-colors duration-300
          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-[0_20px_70px_rgba(0,0,0,0.28)]
          p-6 sm:p-8
        "
      >
        {/* Minimal background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/5" />

          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl dark:bg-teal-500/5" />

          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating course chips */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.name}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.08,
                }}
                className={`
                  absolute ${course.position}
                  flex items-center gap-1.5
                  rounded-full
                  border border-emerald-200/70
                  bg-white/85
                  px-2.5 py-1.5
                  text-[9px] font-semibold
                  text-slate-600
                  shadow-sm
                  backdrop-blur-sm
                  dark:border-emerald-400/15
                  dark:bg-slate-800/80
                  dark:text-slate-400
                `}
              >
                <span
                  className="
                    flex h-4 w-4 items-center justify-center
                    rounded-full
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-400/10
                    dark:text-emerald-400
                  "
                >
                  <Icon size={9} />
                </span>

                {course.name}
              </motion.div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex min-h-[390px] flex-col items-center justify-center text-center">
          
          {/* Main icon */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
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
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[25px] bg-emerald-400/10 blur-xl dark:bg-emerald-500/10" />

            <div
              className="
                relative flex h-20 w-20 items-center justify-center
                rounded-[24px]
                border border-emerald-200
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-teal-50
                shadow-lg
                shadow-emerald-500/10
                dark:border-emerald-400/20
                dark:from-emerald-400/10
                dark:via-slate-900
                dark:to-teal-400/10
              "
            >
              <GraduationCap
                size={36}
                strokeWidth={1.7}
                className="text-emerald-600 dark:text-emerald-400"
              />

              <div
                className="
                  absolute -right-2 -top-2
                  flex h-7 w-7 items-center justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-emerald-500
                  to-teal-500
                  text-white
                  shadow-md
                "
              >
                <Sparkles size={12} />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="
              mt-5 inline-flex items-center gap-2
              rounded-full
              border border-emerald-200
              bg-emerald-50
              px-3.5 py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-400/20
              dark:bg-emerald-400/10
              dark:text-emerald-300
            "
          >
            <Target size={11} />

            AI-Powered Career Finder
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="
              mt-4
              max-w-md
              text-2xl
              font-black
              leading-tight
              tracking-tight
              text-slate-950
              sm:text-3xl
              dark:text-white
            "
          >
            Not Sure What to Learn?

            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-emerald-600
                via-green-500
                to-teal-500
                bg-clip-text
                text-transparent
                dark:from-emerald-400
                dark:via-green-400
                dark:to-teal-400
              "
            >
              Let Your Answers Decide.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="
              mt-3
              max-w-md
              text-xs
              leading-5
              text-slate-500
              dark:text-slate-400
              sm:text-sm
            "
          >
            Answer 10 quick questions about your interests,
            strengths and goals. We'll suggest the courses
            that fit you best.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 flex items-center justify-center gap-2"
          >
            <div
              className="
                flex items-center gap-1.5
                rounded-lg
                border border-slate-200
                bg-slate-50
                px-2.5 py-1.5
                dark:border-slate-800
                dark:bg-slate-950/60
              "
            >
              <GraduationCap
                size={13}
                className="text-emerald-500"
              />

              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                14 Courses
              </span>
            </div>

            <div
              className="
                flex items-center gap-1.5
                rounded-lg
                border border-slate-200
                bg-slate-50
                px-2.5 py-1.5
                dark:border-slate-800
                dark:bg-slate-950/60
              "
            >
              <Sparkles
                size={13}
                className="text-emerald-500"
              />

              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                10 Questions
              </span>
            </div>

            <div
              className="
                flex items-center gap-1.5
                rounded-lg
                border border-slate-200
                bg-slate-50
                px-2.5 py-1.5
                dark:border-slate-800
                dark:bg-slate-950/60
              "
            >
              <Trophy
                size={13}
                className="text-emerald-500"
              />

              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                Top 3 Matches
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-5"
          >
            <Link
              to="/quiz"
              className="
                group inline-flex items-center gap-2.5
                rounded-xl
                bg-gradient-to-r
                from-emerald-500
                via-green-500
                to-teal-500
                px-5 py-3
                text-xs
                font-black
                text-white
                shadow-lg
                shadow-emerald-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-emerald-500/30
                sm:px-6 sm:py-3.5
                sm:text-sm
              "
            >
              Find My Perfect Course

              <span
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-lg
                  bg-white/15
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-1/2
            h-px w-1/2
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-emerald-500/50
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
};

export default CourseQuizBanner;