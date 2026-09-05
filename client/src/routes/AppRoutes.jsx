import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";
import Landing from "../pages/Landing";
import DevelopmentHome from "../pages/DevelopmentHome";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import BooksPage from "../pages/BooksPage";
import NotesPage from "../pages/NotesPage";
import TestPapersPage from "../pages/TestPapersPage";
import CourseQuiz from "../pages/CourseQuiz";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Development Portal */}
        <Route
          path="/development"
          element={<DevelopmentHome />}
        />

        {/* Education Website */}
        <Route element={<MainLayout />}>

          <Route
            path="/education"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          <Route
            path="/courses/:slug"
            element={<CourseDetails />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/blogs/:slug"
            element={<BlogDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/resources/books"
            element={<BooksPage />}
          />

          <Route
            path="/resources/notes"
            element={<NotesPage />}
          />

          <Route
            path="/resources/tests"
            element={<TestPapersPage />}
          />

          <Route path="/quiz" element={<CourseQuiz />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;