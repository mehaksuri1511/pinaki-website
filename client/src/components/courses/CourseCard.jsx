import { Link } from "react-router-dom";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/30
        dark:hover:border-emerald-700
        dark:hover:shadow-black/50
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
            h-60
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6">

        {/* Category */}
        <span
          className="
            inline-block
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-emerald-600
            dark:text-emerald-400
          "
        >
          {course.category}
        </span>

        {/* Title */}
        <h3
          className="
            mt-4
            text-2xl
            font-bold
            leading-tight
            text-slate-900
            transition-colors
            duration-300
            dark:text-white
          "
        >
          {course.title}
        </h3>

        {/* Overview */}
        <p
          className="
            mt-4
            line-clamp-3
            leading-7
            text-slate-600
            transition-colors
            duration-300
            dark:text-slate-400
          "
        >
          {course.overview}
        </p>

        {/* Course Info */}
        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            text-sm
            text-slate-500
            dark:text-slate-500
          "
        >
          <span>{course.duration}</span>

          <span className="text-slate-300 dark:text-slate-700">
            •
          </span>

          <span>{course.level}</span>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="mt-6 flex gap-3">

          {/* Read More */}
          <Link
            to={`/courses/${course.slug}`}
            className="
              flex-1
              rounded-xl
              bg-slate-900
              px-4
              py-3
              text-center
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-800

              dark:bg-white
              dark:text-slate-900
              dark:hover:bg-slate-200
            "
          >
            Read More
          </Link>

          {/* Enroll */}
          <button
            type="button"
            onClick={() => onEnroll(course.title)}
            className="
              flex-1
              rounded-xl
              bg-gradient-to-r
              from-emerald-600
              to-green-500
              px-4
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:from-emerald-700
              hover:to-green-600
              hover:shadow-emerald-500/25
            "
          >
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;