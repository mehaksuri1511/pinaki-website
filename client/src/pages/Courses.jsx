import { useState } from "react";
import { motion } from "framer-motion";

import { courseList } from "../data/courseData";
import CourseCard from "../components/courses/CourseCard";
import EnrollmentModal from "../components/courses/EnrollmentModal";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnroll = (courseName) => {
    setSelectedCourse(courseName);
    setIsOpen(true);
  };

  return (
    <>
      <section
        className="
          min-h-screen
          bg-gradient-to-b
          from-emerald-50
          via-white
          to-slate-50
          py-20
          text-slate-900
          transition-colors
          duration-300
          dark:from-slate-950
          dark:via-slate-900
          dark:to-slate-950
          dark:text-white
        "
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* ================= HEADER ================= */}

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
                inline-flex
                items-center
                rounded-full
                border
                border-emerald-200
                bg-white
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-emerald-700
                shadow-sm
                transition-colors
                duration-300
                dark:border-emerald-800
                dark:bg-slate-900
                dark:text-emerald-400
              "
            >
              Learn • Build • Grow
            </span>

            <h1
              className="
                mt-7
                text-4xl
                font-black
                tracking-tight
                text-slate-900
                md:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              Professional{" "}

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
                Courses
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
                transition-colors
                duration-300
                dark:text-slate-300
              "
            >
              Build industry-ready skills through mentor-led learning,
              practical projects, real-world experience and placement support.
            </p>
          </motion.div>

          {/* ================= COURSES ================= */}

          <div
            className="
              mt-16
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
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CourseCard
                  course={course}
                  onEnroll={handleEnroll}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENROLLMENT MODAL ================= */}

      <EnrollmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCourse={selectedCourse}
      />
    </>
  );
};

export default Courses;