import { useState } from "react";

import CoursesHero from "../components/courses/CoursesHero";
import CoursesGrid from "../components/courses/CoursesGrid";
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
      {/* ================= COURSES HERO ================= */}
      <CoursesHero />

      {/* ================= ALL COURSES ================= */}
      <CoursesGrid onEnroll={handleEnroll} />

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