import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, BarChart3 } from "lucide-react";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-[0_24px_60px_rgba(16,185,129,0.14)]
        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/30
        dark:hover:border-emerald-500/40
        dark:hover:shadow-[0_24px_60px_rgba(16,185,129,0.10)]
      "
    >
      {/* ================= AMBIENT GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          z-0
          h-40
          w-40
          rounded-full
          bg-emerald-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-emerald-400/20
          dark:bg-emerald-500/5
          dark:group-hover:bg-emerald-500/10
        "
      />

      {/* ================= IMAGE ================= */}

      <div className="relative z-10 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
            h-60
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
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
            from-slate-950/50
            via-transparent
            to-transparent
            opacity-60
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {/* Category Badge */}

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-black/30
            px-3.5
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-white
            shadow-lg
            backdrop-blur-md
          "
        >
          {course.category}
        </div>

        {/* Image Hover Arrow */}

        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            h-10
            w-10
            translate-y-3
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-slate-900
            opacity-0
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
            dark:bg-slate-900/90
            dark:text-white
          "
        >
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 p-6">
        {/* Category */}

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-emerald-600
            dark:text-emerald-400
          "
        >
          {course.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-3
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

        {/* ================= COURSE INFO ================= */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-4
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          <div className="flex items-center gap-2">
            <Clock3
              size={16}
              className="text-emerald-500"
            />
            <span>{course.duration}</span>
          </div>

          <span
            className="
              hidden
              h-4
              w-px
              bg-slate-200
              sm:block
              dark:bg-slate-700
            "
          />

          <div className="flex items-center gap-2">
            <BarChart3
              size={16}
              className="text-emerald-500"
            />
            <span>{course.level}</span>
          </div>
        </div>

        {/* ================= ACTIONS ================= */}

        <div className="mt-7 flex gap-3">
          {/* Read More */}

          <Link
            to={`/courses/${course.slug}`}
            className="
              group/read
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-900
              px-4
              py-3.5
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

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover/read:translate-x-0.5
                group-hover/read:-translate-y-0.5
              "
            />
          </Link>

          {/* Enroll */}

          <button
            type="button"
            onClick={() => onEnroll(course.title)}
            className="
              group/enroll
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-emerald-600
              to-green-500
              px-4
              py-3.5
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:from-emerald-700
              hover:to-green-600
              hover:shadow-[0_10px_30px_rgba(16,185,129,0.25)]
            "
          >
            Enroll Now

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover/enroll:translate-x-0.5
                group-hover/enroll:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>

      {/* ================= BOTTOM ACCENT ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-emerald-500
          via-green-400
          to-teal-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

export default CourseCard;