import { useState } from "react";
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-center mb-6">
            Professional Courses
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-600">
            The same programmes from pinakiithub.com — live mentors, projects, and placement support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courseList.map((course) => (
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
