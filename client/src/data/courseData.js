import wpCourses from "./wpCourses";

const courseData = Object.fromEntries(wpCourses.map((course) => [course.slug, course]));

export const courseList = wpCourses;

export const courseAliases = {
  "generative-ai": "introduction-to-generative-ai",
  "cyber-security": "cyber-security-and-ethical-hacking",
  "data-science": "machine-learning",
  "cloud-computing": "machine-learning",
};

export default courseData;
