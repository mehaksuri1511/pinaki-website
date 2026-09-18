import { useEffect, useState } from "react";

import {
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";

import CourseCard from "./CourseCard";

import { getCourses } from "../../API/courseService.js";
import { getMyEnrollments } from "../../API/enrollmentService.js";
import { useAuth } from "../../context/AuthContext.jsx";

const CoursesGrid = ({ onEnroll }) => {
  const { user } = useAuth();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getCourses();

      if (!response?.success) {
        throw new Error(
          response?.message || "Unable to load courses."
        );
      }

      setCourses(response.data || []);
    } catch (err) {
      console.error("Courses loading error:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load courses. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const loadEnrollments = async () => {
    if (!user) {
      setEnrolledCourseIds([]);
      return;
    }

    try {
      const response = await getMyEnrollments();

      if (!response?.success) {
        return;
      }

      const enrollments = response.data || [];

      const ids = enrollments
        .filter(
          (enrollment) =>
            enrollment.status !== "cancelled" &&
            enrollment.course_id !== undefined &&
            enrollment.course_id !== null
        )
        .map((enrollment) => Number(enrollment.course_id));

      setEnrolledCourseIds(ids);
    } catch (err) {
      console.error("Enrollment loading error:", err);

      setEnrolledCourseIds([]);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    loadEnrollments();
  }, [user]);

  /*
   * ========================================
   * LOADING
   * ========================================
   */

  if (loading) {
    return (
      <section
        className="
          bg-white
          px-4
          py-16
          transition-colors
          duration-300

          dark:bg-slate-950

          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-center
            py-20
          "
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-emerald-200
                bg-emerald-50

                dark:border-emerald-500/20
                dark:bg-emerald-500/10
              "
            >
              <Loader2
                size={30}
                className="
                  animate-spin
                  text-emerald-600

                  dark:text-emerald-400
                "
              />
            </div>

            <div className="text-center">
              <p
                className="
                  text-sm
                  font-bold
                  text-slate-900

                  dark:text-white
                "
              >
                Loading courses...
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Please wait while we fetch the latest courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * ========================================
   * ERROR
   * ========================================
   */

  if (error) {
    return (
      <section
        className="
          bg-white
          px-4
          py-16
          transition-colors
          duration-300

          dark:bg-slate-950

          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-xl
            flex-col
            items-center
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            text-center
            shadow-sm

            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/20
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-red-200
              bg-red-50
              text-red-600

              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <AlertCircle size={26} />
          </div>

          <h3
            className="
              mt-5
              text-lg
              font-black
              text-slate-900

              dark:text-white
            "
          >
            Unable to load courses
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400
            "
          >
            {error}
          </p>

          <button
            type="button"
            onClick={loadCourses}
            className="
              mt-6
              flex
              items-center
              gap-2
              rounded-xl
              bg-emerald-600
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-emerald-700
              hover:shadow-lg
              hover:shadow-emerald-500/20

              dark:bg-emerald-500
              dark:hover:bg-emerald-600
            "
          >
            <RefreshCw size={16} />

            Try Again
          </button>
        </div>
      </section>
    );
  }

  /*
   * ========================================
   * EMPTY
   * ========================================
   */

  if (!courses.length) {
    return (
      <section
        className="
          bg-white
          px-4
          py-16
          transition-colors
          duration-300

          dark:bg-slate-950

          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            py-16
            text-center
          "
        >
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-slate-50

              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <AlertCircle
              size={26}
              className="
                text-slate-400

                dark:text-slate-500
              "
            />
          </div>

          <h3
            className="
              mt-5
              text-xl
              font-black
              text-slate-900

              dark:text-white
            "
          >
            No courses available
          </h3>

          <p
            className="
              mx-auto
              mt-2
              max-w-md
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400
            "
          >
            Please check back later for available courses.
          </p>
        </div>
      </section>
    );
  }

  /*
   * ========================================
   * COURSES
   * ========================================
   */

  return (
    <section
      id="courses"
      className="
        bg-white
        px-4
        py-16
        transition-colors
        duration-300

        dark:bg-slate-950

        sm:px-6
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}

        <div className="mb-10">
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.18em]
              text-emerald-600

              dark:text-emerald-400
            "
          >
            Explore Learning
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-black
              tracking-tight
              text-slate-900

              dark:text-white

              sm:text-4xl
            "
          >
            Our Courses
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400

              sm:text-base
            "
          >
            Choose a course, explore the curriculum, and start
            building your skills with Pinaki IT.
          </p>
        </div>

        {/* Course Grid */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={onEnroll}
              enrolled={enrolledCourseIds.includes(
                Number(course.id)
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;