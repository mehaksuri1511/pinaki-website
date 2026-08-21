import { Link } from "react-router-dom";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={course.image}
        alt={course.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <span className="font-semibold text-emerald-600">
          {course.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-slate-600 leading-7">
          {course.overview}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {course.duration} · {course.level}
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            to={`/courses/${course.slug}`}
            className="rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            Read More
          </Link>

          <button
            onClick={() => onEnroll(course.title)}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
