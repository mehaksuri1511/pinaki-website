import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      {/* ================= BACKGROUND BLUR ================= */}
      <div
        className="
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

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            min-h-screen
            items-center
            gap-20
            pb-24
            lg:grid-cols-2
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Small Text */}
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
                transition-colors
                duration-300
                dark:border-emerald-800
                dark:bg-slate-800/80
                dark:shadow-black/20
              "
            >
              <span
                className="
                  text-sm
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
                transition-colors
                duration-300
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
                IT Careers.
              </span>
            </motion.h1>

            {/* Paragraph */}
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
                text-lg
                leading-9
                text-slate-600
                transition-colors
                duration-300
                dark:text-slate-300
              "
            >
              Learn from industry experts, work on live projects,
              gain practical skills and accelerate your career
              through professional training, internships,
              software development and placement assistance.
            </motion.p>

            {/* ================= BUTTONS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap gap-5"
            >
              {/* Explore Programs */}
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

              {/* Founder */}
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500
                  hover:text-emerald-600
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-100
                  dark:shadow-black/20
                  dark:hover:border-emerald-500
                  dark:hover:bg-slate-700
                  dark:hover:text-emerald-400
                "
              >
                <PlayCircle size={20} />
                Meet Our Founder
              </button>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                h-[520px]
                w-[520px]
                rounded-full
                bg-emerald-300/20
                blur-[120px]
                dark:bg-emerald-500/10
              "
            />

            {/* Founder Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/70
                bg-white/60
                p-4
                shadow-[0_40px_80px_rgba(16,185,129,.18)]
                backdrop-blur-xl
                transition-all
                duration-300
                dark:border-slate-700/70
                dark:bg-slate-900/70
                dark:shadow-[0_40px_80px_rgba(0,0,0,.45)]
              "
            >
              {/* Founder Name */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-[26px]
                  border
                  border-white
                  bg-white/85
                  px-7
                  py-5
                  shadow-2xl
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  dark:border-slate-700
                  dark:bg-slate-800/90
                  dark:shadow-black/40
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Dhruv Govil
                </h2>

                <p
                  className="
                    mt-1
                    font-medium
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  CEO & Founder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;