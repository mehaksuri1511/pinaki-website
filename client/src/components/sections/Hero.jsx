import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CourseQuizBanner from "./CourseQuizBanner";
import SectionWatermark from "../common/SectionWatermark";

const Hero = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate("/courses");
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-emerald-50
        via-white
        to-white
        text-slate-900
        transition-colors
        duration-300
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        dark:text-white
      "
    >
      {/* Watermarks */}
      <SectionWatermark
        icons={[
          "Sparkles",
          "Cpu",
          "Code2",
          "Rocket",
          "Lightbulb",
          "GraduationCap",
          "Code2",
          "Cpu",
          "Sparkles",
        ]}
        intensity="strong"
      />

      {/* Background Blur */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[-120px]
          h-96
          w-96
          rounded-full
          bg-emerald-200/40
          blur-[120px]
          dark:bg-emerald-900/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          bottom-[-100px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-green-200/30
          blur-[150px]
          dark:bg-green-900/15
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            min-h-screen
            items-center
            gap-16
            pb-24
            pt-20
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-emerald-200
                bg-white
                px-5
                py-2
                shadow-md
                dark:border-emerald-800
                dark:bg-slate-800/80
              "
            >
              <span
                className="
                  text-base
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-emerald-700
                  dark:text-emerald-400
                "
              >
                LEARN • BUILD • GROW
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-slate-900
                dark:text-white
                md:text-7xl
              "
            >
              Build
              <br />
              Future-Ready
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-green-600
                  via-emerald-500
                  to-green-400
                  bg-clip-text
                  text-transparent
                "
              >
                Professional IT Careers.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                max-w-xl
                text-xl
                leading-10
                text-slate-600
                dark:text-slate-300
              "
            >
              Learn from industry experts, work on live projects,
              gain practical skills and accelerate your career
              through professional training, internships,
              software development and placement assistance.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={handleExplorePrograms}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-600
                  to-green-500
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-emerald-500/30
                "
              >
                <span className="flex items-center gap-2">
                  Explore Programs
                  <ArrowRight size={18} />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[520px]
              items-center
              justify-center
              lg:min-h-[600px]
              lg:justify-end
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                h-[520px]
                w-[520px]
                rounded-full
                bg-emerald-300/20
                blur-[120px]
                dark:bg-emerald-500/10
              "
            />

            <div className="relative z-10 w-full max-w-[560px]">
              <CourseQuizBanner />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;