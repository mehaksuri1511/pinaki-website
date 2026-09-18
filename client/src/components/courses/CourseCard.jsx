import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  BarChart3,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const CourseCard = ({
  course,
  onEnroll,
  enrolling = false,
  enrolled = false,
}) => {
  const imageUrl = course?.image_url || course?.image;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/20
        dark:hover:shadow-black/40
      "
    >
      {/* ================================
          COURSE IMAGE
      ================================= */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-slate-100

          dark:bg-slate-800
        "
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={course?.title || "Course"}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-gradient-to-br
              from-emerald-50
              via-teal-50
              to-cyan-50

              dark:from-emerald-950/40
              dark:via-teal-950/30
              dark:to-cyan-950/30
            "
          >
            <span
              className="
                text-sm
                font-semibold
                text-slate-500

                dark:text-slate-400
              "
            >
              Pinaki IT
            </span>
          </div>
        )}

        {/* Image Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-black/10
            to-transparent
          "
        />

        {/* Category */}

        {course?.category && (
          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/20
              bg-black/50
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              shadow-sm
              backdrop-blur-md
            "
          >
            {course.category}
          </div>
        )}

        {/* Enrolled Badge */}

        {enrolled && (
          <div
            className="
              absolute
              right-4
              top-4
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-500
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              shadow-lg
              shadow-emerald-500/20
            "
          >
            <CheckCircle2 size={14} />

            Enrolled
          </div>
        )}
      </div>

      {/* ================================
          CONTENT
      ================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          bg-white
          p-5

          dark:bg-slate-900

          sm:p-6
        "
      >
        {/* Title */}

        <h3
          className="
            line-clamp-2
            min-h-[3.5rem]
            text-xl
            font-black
            tracking-tight
            text-slate-900
            transition-colors
            duration-200
            group-hover:text-emerald-600

            dark:text-white
            dark:group-hover:text-emerald-400
          "
        >
          {course?.title}
        </h3>

        {/* Overview */}

        {course?.overview ? (
          <p
            className="
              mt-3
              line-clamp-3
              min-h-[4.5rem]
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400
            "
          >
            {course.overview}
          </p>
        ) : (
          <div className="mt-3 min-h-[4.5rem]" />
        )}

        {/* ================================
            COURSE META
        ================================= */}

        <div
          className="
            mt-5
            flex
            min-h-[1.5rem]
            flex-wrap
            items-center
            gap-4
            text-xs
            font-medium
            text-slate-500

            dark:text-slate-400
          "
        >
          {course?.duration && (
            <div className="flex items-center gap-1.5">
              <Clock3
                size={15}
                className="
                  text-emerald-600

                  dark:text-emerald-400
                "
              />

              <span>{course.duration}</span>
            </div>
          )}

          {course?.level && (
            <div className="flex items-center gap-1.5">
              <BarChart3
                size={15}
                className="
                  text-teal-600

                  dark:text-teal-400
                "
              />

              <span>{course.level}</span>
            </div>
          )}
        </div>

        {/* ================================
            ACTIONS
        ================================= */}

        <div className="mt-auto flex items-center gap-3 pt-6">
          {/* Read More */}

          <Link
            to={`/courses/${course.id}`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              text-sm
              font-bold
              text-slate-800
              transition-all
              duration-200

              hover:border-emerald-400
              hover:bg-emerald-50
              hover:text-emerald-700

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-200
              dark:hover:border-emerald-500/50
              dark:hover:bg-emerald-500/10
              dark:hover:text-emerald-400
            "
          >
            Read More

            <ArrowUpRight size={16} />
          </Link>

          {/* Enroll */}

          <button
            type="button"
            disabled={enrolling || enrolled}
            onClick={() => onEnroll?.(course)}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-emerald-500
              to-teal-500
              px-4
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-emerald-500/15
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-emerald-500/20

              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:translate-y-0
            "
          >
            {enrolling ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />

                Enrolling...
              </>
            ) : enrolled ? (
              <>
                <CheckCircle2 size={16} />

                Enrolled
              </>
            ) : (
              <>
                Enroll Now

                <ArrowUpRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;