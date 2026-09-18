import { useState } from "react";

import CoursesHero from "../components/courses/CoursesHero";
import CoursesGrid from "../components/courses/CoursesGrid";
import EnrollmentModal from "../components/courses/EnrollmentModal";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <CoursesHero />

      <CoursesGrid onEnroll={handleEnroll} />

      <EnrollmentModal
        isOpen={isOpen}
        onClose={handleClose}
        selectedCourse={selectedCourse}
      />
    </>
  );
};

export default Courses;