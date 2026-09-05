import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";

import courseData, { courseAliases } from "../data/courseData";
import EnrollmentModal from "../components/courses/EnrollmentModal";

const reveal = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CourseDetails = () => {
  const { slug } = useParams();

  const aliased = courseAliases[slug];

  if (aliased) {
    return <Navigate to={`/courses/${aliased}`} replace />;
  }

  const course = courseData[slug];
  const [isOpen, setIsOpen] = useState(false);

  if (!course) {
    return (
      <main
        className="
          flex
          min-h-[70vh]
          items-center
          justify-center
          bg-slate-50
          px-6
          text-center
          dark:bg-slate-950
        "
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            404
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
            Course not found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
            The course you're looking for may have been moved or is no longer
            available.
          </p>

          <Link
            to="/courses"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-500
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-emerald-500/20
              transition-all
              hover:-translate-y-0.5
              hover:bg-emerald-600
            "
          >
            Back to Courses
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const metaItems = [
    {
      icon: <Clock3 size={18} />,
      label: "Duration",
      value: course.duration,
    },
    {
      icon: <BarChart3 size={18} />,
      label: "Level",
      value: course.level,
    },
    {
      icon: <BookOpen size={18} />,
      label: "Curriculum",
      value: `${course.modules?.length || 0} Modules`,
    },
  ];

  return (
    <main
      className="
        overflow-hidden
        bg-slate-50
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative isolate overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-slate-950
            via-slate-950/85
            to-slate-950/45
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-slate-950/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/15
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300"
          >
            <Link
              to="/courses"
              className="transition-colors hover:text-emerald-400"
            >
              Courses
            </Link>

            <span className="text-slate-500">/</span>

            <span className="max-w-[260px] truncate text-slate-400">
              {course.category}
            </span>
          </motion.div>

          <div className="max-w-4xl">
            {/* Category */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/30
                bg-emerald-400/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-emerald-300
                backdrop-blur-md
              "
            >
              <Sparkles size={14} />
              {course.category}
            </motion.div>

            {/* Title */}

            <motion.h1
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                max-w-5xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-7xl
              "
            >
              {course.title}
            </motion.h1>

            {/* Overview */}

            <motion.p
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                max-w-3xl
                text-base
                leading-7
                text-slate-300
                sm:text-lg
                sm:leading-8
              "
            >
              {course.overview}
            </motion.p>

            {/* Meta */}

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {metaItems.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    px-4
                    py-3
                    backdrop-blur-md
                  "
                >
                  <div className="text-emerald-400">{item.icon}</div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.62,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_35px_rgba(16,185,129,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)]
                "
              >
                Enroll Now

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <span className="text-sm text-slate-400">
                Start your learning journey with Pinaki IT
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OVERVIEW */}
      {/* ========================================================= */}

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative py-16 sm:py-20 lg:py-24"
      >
        <div
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-400/10
            blur-[120px]
            dark:bg-emerald-500/[0.06]
          "
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            {/* Intro */}

            <div>
              <div className="mb-8">
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  About the program
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Learn skills that{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-emerald-500
                      to-cyan-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    matter
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl space-y-5">
                {course.intro?.map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(0, 30)}`}
                    className="
                      text-base
                      leading-8
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sticky enrollment card */}

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                  dark:border-white/[0.08]
                  dark:bg-slate-900
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-emerald-400/15
                    blur-3xl
                  "
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-50
                        text-emerald-600
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      "
                    >
                      <Layers3 size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                        Program
                      </p>

                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {course.category}
                      </p>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-slate-200 dark:bg-white/[0.07]" />

                  <div className="space-y-4">
                    {[
                      ["Duration", course.duration],
                      ["Level", course.level],
                      [
                        "Modules",
                        `${course.modules?.length || 0} modules`,
                      ],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {label}
                        </span>

                        <span className="text-right text-sm font-bold text-slate-900 dark:text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="
                      mt-7
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-emerald-500
                      to-teal-500
                      px-5
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-emerald-500/20
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-xl
                    "
                  >
                    Enroll in this course
                    <ArrowRight size={16} />
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                    Limited seats • Industry-focused learning
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* HIGHLIGHTS */}
      {/* ========================================================= */}

      {course.highlights?.length ? (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 1.1,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            border-y
            border-slate-200/70
            bg-gradient-to-b
            from-white
            to-slate-50
            py-16
            sm:py-20
            dark:border-white/[0.05]
            dark:from-slate-900
            dark:to-slate-950
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[-150px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-cyan-400/10
              blur-[130px]
              dark:bg-cyan-500/[0.05]
            "
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                Why learn with us
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:text-4xl
                  dark:text-white
                "
              >
                Built around your{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-emerald-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  learning journey
                </span>
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {course.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-emerald-500/5
                    dark:border-white/[0.07]
                    dark:bg-slate-900/70
                  "
                >
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-28
                      w-28
                      rounded-full
                      bg-emerald-400/5
                      blur-2xl
                      transition-all
                      duration-500
                      group-hover:bg-emerald-400/10
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-50
                        text-emerald-600
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      "
                    >
                      <CheckCircle2 size={21} />
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ) : null}

      {/* ========================================================= */}
      {/* LEARNING EXPERIENCE / PHOTOS */}
      {/* ========================================================= */}

      {course.photos?.length ? (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 1.1,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  Inside the experience
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Learn. Practice. Build.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Get hands-on exposure through practical learning, mentorship,
                projects and industry-focused training.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.photos.map((photo, index) => (
                <motion.figure
                  key={photo.src}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-100
                    dark:border-white/[0.07]
                    dark:bg-slate-900
                  "
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <figcaption
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      bg-white
                      px-5
                      py-4
                      dark:bg-slate-900
                    "
                  >
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {photo.alt}
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-50
                        text-xs
                        font-bold
                        text-emerald-600
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      "
                    >
                      {index + 1}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.section>
      ) : null}

      {/* ========================================================= */}
      {/* CURRICULUM */}
      {/* ========================================================= */}

      {course.modules?.length ? (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 1.1,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            border-y
            border-slate-200/70
            bg-gradient-to-b
            from-slate-50
            to-white
            py-16
            sm:py-20
            lg:py-24
            dark:border-white/[0.05]
            dark:from-slate-900
            dark:to-slate-950
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-[-200px]
              top-1/3
              h-[450px]
              w-[450px]
              rounded-full
              bg-emerald-400/10
              blur-[130px]
              dark:bg-emerald-500/[0.05]
            "
          />

          <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
            <div className="text-center">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                What you'll learn
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:text-4xl
                  dark:text-white
                "
              >
                Course Curriculum
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Explore the complete curriculum and see what you'll work on
                throughout the program.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                dark:border-white/[0.08]
                dark:bg-slate-900
              "
            >
              {course.modules.map((module, index) => (
                <details
                  key={module.title}
                  className="
                    group
                    border-b
                    border-slate-200
                    last:border-b-0
                    dark:border-white/[0.07]
                  "
                  open={index === 0}
                >
                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      gap-4
                      px-5
                      py-5
                      transition-colors
                      hover:bg-slate-50
                      dark:hover:bg-white/[0.025]
                      [&::-webkit-details-marker]:hidden
                      sm:px-7
                    "
                  >
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-50
                        text-sm
                        font-black
                        text-emerald-600
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-left text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                      {module.title}
                    </span>

                    <ChevronDown
                      size={19}
                      className="
                        shrink-0
                        text-slate-400
                        transition-transform
                        duration-300
                        group-open:rotate-180
                      "
                    />
                  </summary>

                  <div className="px-5 pb-6 sm:px-7">
                    <ul className="ml-14 space-y-3">
                      {module.points.map((point) => (
                        <li
                          key={point}
                          className="
                            flex
                            gap-3
                            text-sm
                            leading-6
                            text-slate-600
                            dark:text-slate-400
                          "
                        >
                          <CheckCircle2
                            size={17}
                            className="
                              mt-0.5
                              shrink-0
                              text-emerald-500
                            "
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </motion.section>
      ) : null}

      {/* ========================================================= */}
      {/* HIRING PARTNERS */}
      {/* ========================================================= */}

      {course.logos?.length ? (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 1.1,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <div>
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <BriefcaseBusiness size={22} />
                </div>

                <p
                  className="
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  Career opportunities
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Learn today.
                  <br />
                  Build your career.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Build practical skills and a portfolio that can help you
                  move confidently toward your next career opportunity.
                </p>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  dark:border-white/[0.07]
                  dark:bg-slate-900
                "
              >
                <div className="mb-6 flex items-center gap-3">
                  <Users size={18} className="text-emerald-500" />

                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Companies represented across our programs
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    items-center
                    gap-4
                    sm:grid-cols-3
                    lg:grid-cols-4
                  "
                >
                  {course.logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="
                        flex
                        h-20
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-4
                        transition-all
                        duration-300
                        hover:border-emerald-200
                        hover:bg-white
                        dark:border-white/[0.05]
                        dark:bg-white/[0.025]
                        dark:hover:border-emerald-500/20
                        dark:hover:bg-white/[0.05]
                      "
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="
                          max-h-9
                          max-w-full
                          object-contain
                          grayscale
                          opacity-70
                          transition-all
                          duration-300
                          hover:grayscale-0
                          hover:opacity-100
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.15,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
      >
        <div
          className="
            group
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            border
            border-emerald-200/70
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-cyan-50
            px-6
            py-9
            shadow-[0_20px_70px_rgba(16,185,129,0.08)]
            dark:border-emerald-500/15
            dark:from-emerald-950/50
            dark:via-slate-900
            dark:to-cyan-950/40
            dark:shadow-[0_20px_70px_rgba(16,185,129,0.08)]
            sm:px-10
            sm:py-10
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-emerald-400/20
              blur-[90px]
              transition-all
              duration-700
              group-hover:bg-emerald-400/30
              dark:bg-emerald-500/10
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-200
                  bg-emerald-100/60
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-emerald-700
                  dark:border-emerald-500/20
                  dark:bg-emerald-500/10
                  dark:text-emerald-300
                "
              >
                <Sparkles size={13} />
                Take the next step
              </div>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                Ready to enroll in{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-emerald-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {course.title}
                </span>
                ?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Start building the skills, projects and experience you need
                for the next stage of your career.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
                group/button
                inline-flex
                shrink-0
                items-center
                gap-2.5
                rounded-full
                bg-gradient-to-r
                from-emerald-500
                to-teal-500
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(16,185,129,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(16,185,129,0.35)]
              "
            >
              Enroll Now

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* ENROLLMENT MODAL */}
      {/* ========================================================= */}

      <EnrollmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCourse={course.title}
      />
    </main>
  );
};

export default CourseDetails;