import { useState } from "react";
import courseData from "../data/courseData";
import CourseCard from "../components/courses/CourseCard";
import EnrollmentModal from "../components/courses/EnrollmentModal";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = Object.entries(courseData).map(
    ([slug, course]) => ({
      slug,
      ...course,
    })
  );

  const handleEnroll = (courseName) => {
    setSelectedCourse(courseName);
    setIsOpen(true);
  };

  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-black text-center mb-12">
            Our Courses
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                onEnroll={handleEnroll}
              />
            ))}
          </div>

        </div>
      </section>

      <EnrollmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCourse={selectedCourse}
      />
    </>
  );
};

export default Courses;