import { motion } from "framer-motion";
import { courseList } from "../../data/courseData";
import CourseCard from "./CourseCard";
import SectionWatermark from "../common/SectionWatermark";

const CoursesGrid = ({ onEnroll }) => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* ================= WATERMARK ================= */}

      <SectionWatermark
        icons={[
          "GraduationCap",
          "Code2",
          "Cpu",
          "BrainCircuit",
          "ShieldCheck",
          "Rocket",
          "BookOpen",
          "Sparkles",
          "Target",
        ]}
        intensity="strong"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-emerald-700
              transition-colors
              duration-300
              dark:border-emerald-800
              dark:bg-emerald-950/40
              dark:text-emerald-400
            "
          >
            Our Courses
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              md:text-5xl
              dark:text-white
            "
          >
            Industry-Focused{" "}
            <span
              className="
                bg-gradient-to-r
                from-green-600
                via-emerald-500
                to-teal-400
                bg-clip-text
                text-transparent
              "
            >
              Training Programs
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
              transition-colors
              duration-300
              dark:text-slate-300
            "
          >
            Learn the most in-demand technologies through practical training,
            live projects, expert mentorship and industry-oriented learning
            designed to make you career-ready.
          </p>
        </motion.div>

        {/* ================= ALL 14 COURSES ================= */}

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {courseList.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 1.05,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <CourseCard
                course={course}
                onEnroll={onEnroll}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;