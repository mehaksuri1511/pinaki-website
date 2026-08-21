import { Link } from "react-router-dom";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2">

      <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
        {course.category}
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        {course.title}
      </h3>

      <p className="mt-4 text-slate-600">
        {course.overview}
      </p>

      <div className="mt-6 space-y-2">

        <p>
          <strong>Duration:</strong> {course.duration}
        </p>

        <p>
          <strong>Level:</strong> {course.level}
        </p>

      </div>

      <div className="mt-8 flex gap-3">

        <Link
          to={`/courses/${course.slug}`}
          className="rounded-xl bg-slate-900 px-5 py-3 text-white"
        >
          Details
        </Link>

        <button
          onClick={() => onEnroll(course.title)}
          className="rounded-xl bg-emerald-600 px-5 py-3 text-white"
        >
          Enroll Now
        </button>

      </div>

    </div>
  );
};

export default CourseCard;