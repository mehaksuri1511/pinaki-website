import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";
import GlobalEnrollmentPopup from "../components/common/GlobalEnrollmentPopup";

// Public pages
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
import Services from "../pages/Services";

// Authentication
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyEmail from "../pages/VerifyEmail";

// Student portals
import LearningPortal from "../pages/LearningPortal";
import ProjectPortal from "../pages/ProjectPortal";

// Protected route
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* =====================================================
            LANDING
            Standalone page
        ===================================================== */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* =====================================================
            DEVELOPMENT
            Standalone page
        ===================================================== */}
        <Route
          path="/development"
          element={<DevelopmentHome />}
        />

        {/* =====================================================
            MAIN WEBSITE LAYOUT
            Navbar + Page + Footer
        ===================================================== */}
        <Route element={<MainLayout />}>

          {/* ===================================================
              AUTHENTICATION
          =================================================== */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/verify-email"
            element={<VerifyEmail />}
          />

          {/* ===================================================
              EDUCATION WEBSITE
          =================================================== */}

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

          <Route
            path="/quiz"
            element={<CourseQuiz />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          {/* ===================================================
              PROTECTED STUDENT PORTALS

              MainLayout
                  ↓
              ProtectedRoute
                  ↓
              Learning / Projects
          =================================================== */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/learning"
              element={<LearningPortal />}
            />

            <Route
              path="/projects"
              element={<ProjectPortal />}
            />

          </Route>

        </Route>
      </Routes>

      {/* =====================================================
          GLOBAL ENROLLMENT POPUP

          IMPORTANT:
          This is INSIDE BrowserRouter so that
          useNavigate() works inside GlobalEnrollmentPopup.
      ===================================================== */}
      <GlobalEnrollmentPopup />

    </BrowserRouter>
  );
}

export default AppRoutes;