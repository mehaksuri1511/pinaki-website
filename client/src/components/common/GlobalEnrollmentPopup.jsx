import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getCourses } from "../../API/courseService.js";
import { enrollInCourse } from "../../API/enrollmentService.js";
import { useAuth } from "../../context/AuthContext.jsx";

const FIRST_MIN_DELAY = 5000;
const FIRST_MAX_DELAY = 10000;

const NEXT_MIN_DELAY = 120000;
const NEXT_MAX_DELAY = 180000;

const getRandomDelay = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const GlobalEnrollmentPopup = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const timerRef = useRef(null);

  const isEducationPage =
    window.location.pathname === "/education";

  /*
   * -------------------------------------------------------
   * Load courses from backend
   * -------------------------------------------------------
   */
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setCoursesLoading(true);

        const response = await getCourses();

        if (response.success) {
          /*
           * Backend may return either:
           * response.data
           * or response.data.courses
           */
          const courseData =
            response.data?.courses || response.data || [];

          setCourses(Array.isArray(courseData) ? courseData : []);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.error("Failed to load courses:", error);
        setCourses([]);
      } finally {
        setCoursesLoading(false);
      }
    };

    loadCourses();
  }, []);

  /*
   * -------------------------------------------------------
   * Keep form user information synced with logged-in user
   * -------------------------------------------------------
   */
  useEffect(() => {
    if (!user) return;

    setFormData((previous) => ({
      ...previous,
      name: previous.name || user.name || "",
      email: previous.email || user.email || "",
    }));
  }, [user]);

  /*
   * -------------------------------------------------------
   * Popup scheduling
   * -------------------------------------------------------
   */
  useEffect(() => {
    if (
      sessionStorage.getItem("pinaki_enrollment_submitted") ===
      "true"
    ) {
      setHasSubmitted(true);
      return;
    }

    const popupClosedAt = Number(
      sessionStorage.getItem("pinaki_popup_closed_at") || 0
    );

    const now = Date.now();

    /*
     * If the user recently closed the popup,
     * don't immediately show it again.
     */
    if (popupClosedAt && now - popupClosedAt < 60000) {
      schedulePopup(60000 - (now - popupClosedAt));

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }

    /*
     * First popup:
     * Only /education gets the initial 5–10 second popup.
     */
    if (isEducationPage) {
      schedulePopup(
        getRandomDelay(FIRST_MIN_DELAY, FIRST_MAX_DELAY)
      );
    } else {
      /*
       * Other pages:
       * wait for the global 2–3 minute cycle.
       */
      schedulePopup(
        getRandomDelay(NEXT_MIN_DELAY, NEXT_MAX_DELAY)
      );
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const schedulePopup = (delay) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (
        !sessionStorage.getItem("pinaki_enrollment_submitted")
      ) {
        setIsOpen(true);
      }
    }, delay);
  };

  /*
   * -------------------------------------------------------
   * Close popup
   * -------------------------------------------------------
   */
  const handleClose = () => {
    setIsOpen(false);

    sessionStorage.setItem(
      "pinaki_popup_closed_at",
      Date.now().toString()
    );

    schedulePopup(
      getRandomDelay(NEXT_MIN_DELAY, NEXT_MAX_DELAY)
    );
  };

  /*
   * -------------------------------------------------------
   * Backdrop click
   * -------------------------------------------------------
   */
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  /*
   * -------------------------------------------------------
   * Escape key
   * -------------------------------------------------------
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /*
   * -------------------------------------------------------
   * Prevent background scrolling
   * -------------------------------------------------------
   */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /*
   * -------------------------------------------------------
   * Input change
   * -------------------------------------------------------
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitStatus("");
  };

  /*
   * -------------------------------------------------------
   * Enrollment submit
   * -------------------------------------------------------
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isAuthenticated || !user) {
      /*
       * Save the selected course so we can continue the
       * enrollment flow after authentication.
       */
      sessionStorage.setItem(
        "pinaki_pending_enrollment",
        JSON.stringify({
          courseId: formData.courseId,
          phone: formData.phone,
          name: formData.name,
          email: formData.email,
        })
      );

      setIsOpen(false);

      navigate("/login", {
        state: {
          from: {
            pathname: window.location.pathname,
          },
        },
      });

      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.courseId
    ) {
      setSubmitStatus("Please fill in all the fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus("");

      /*
       * New enrollment API:
       *
       * POST /api/enrollments
       *
       * Body:
       * {
       *   course_id: courseId
       * }
       *
       * User ID comes from the authenticated session.
       */
      const response = await enrollInCourse(
        Number(formData.courseId)
      );

      if (!response.success) {
        setSubmitStatus(
          response.message ||
            "Unable to enroll in this course."
        );

        return;
      }

      /*
       * Enrollment successfully created.
       */
      setSubmitStatus("success");

      sessionStorage.setItem(
        "pinaki_enrollment_submitted",
        "true"
      );

      sessionStorage.removeItem(
        "pinaki_pending_enrollment"
      );

      setHasSubmitted(true);

      /*
       * Automatically close success popup.
       */
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch (error) {
      console.error(
        "Enrollment submission failed:",
        error
      );

      setSubmitStatus(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * -------------------------------------------------------
   * Don't render after successful submission
   * -------------------------------------------------------
   */
  if (hasSubmitted && !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onMouseDown={handleBackdropClick}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-slate-950/60
            px-4
            py-6
            backdrop-blur-md
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-[0_35px_100px_rgba(15,23,42,0.25)]
              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-[0_35px_100px_rgba(0,0,0,0.55)]
            "
          >
            {/* Ambient glows */}
            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-emerald-300/30
                blur-[90px]
                dark:bg-emerald-500/15
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -right-20
                h-72
                w-72
                rounded-full
                bg-teal-300/20
                blur-[100px]
                dark:bg-teal-500/10
              "
            />

            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close enrollment popup"
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white/90
                text-slate-500
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:border-emerald-300
                hover:bg-emerald-50
                hover:text-emerald-600
                dark:border-slate-700
                dark:bg-slate-800/90
                dark:text-slate-400
                dark:hover:border-emerald-500/50
                dark:hover:bg-emerald-950/40
                dark:hover:text-emerald-400
              "
            >
              <X size={19} />
            </button>

            {/* Top accent */}
            <div
              className="
                relative
                h-1.5
                w-full
                bg-gradient-to-r
                from-emerald-500
                via-green-400
                to-teal-500
              "
            />

            <div className="relative p-6 sm:p-9">
              {/* Header */}
              <div className="pr-10">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-3.5
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-emerald-700
                    dark:border-emerald-500/20
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <Sparkles size={14} />
                  Limited Enrollment
                </div>

                <h2
                  className="
                    mt-5
                    max-w-xl
                    text-3xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-slate-950
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Start Building Your{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-emerald-600
                      via-green-500
                      to-teal-500
                      bg-clip-text
                      text-transparent
                      dark:from-emerald-400
                      dark:via-green-400
                      dark:to-teal-400
                    "
                  >
                    Professional IT Career.
                  </span>
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-slate-600
                    sm:text-base
                    dark:text-slate-400
                  "
                >
                  Get industry-focused training, practical
                  experience and career guidance from Pinaki
                  IT experts.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Live Projects",
                  "Expert Mentorship",
                  "Career Support",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-slate-600
                      dark:text-slate-300
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500"
                    />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Form */}
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    mt-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-6
                    py-12
                    text-center
                    dark:border-emerald-500/20
                    dark:bg-emerald-950/30
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500
                      text-white
                      shadow-lg
                      shadow-emerald-500/25
                    "
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Enrollment Successful!
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-md
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    You have successfully enrolled in the
                    selected course. You can continue learning
                    from your Learning Portal.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        disabled={Boolean(user)}
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3.5
                          text-sm
                          text-slate-900
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-400
                          focus:border-emerald-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-emerald-500/10
                          disabled:cursor-not-allowed
                          disabled:opacity-70
                          dark:border-slate-700
                          dark:bg-slate-800/70
                          dark:text-white
                          dark:placeholder:text-slate-500
                          dark:focus:border-emerald-500
                          dark:focus:bg-slate-800
                        "
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={Boolean(user)}
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3.5
                          text-sm
                          text-slate-900
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-400
                          focus:border-emerald-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-emerald-500/10
                          disabled:cursor-not-allowed
                          disabled:opacity-70
                          dark:border-slate-700
                          dark:bg-slate-800/70
                          dark:text-white
                          dark:placeholder:text-slate-500
                          dark:focus:border-emerald-500
                          dark:focus:bg-slate-800
                        "
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3.5
                          text-sm
                          text-slate-900
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-400
                          focus:border-emerald-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-emerald-500/10
                          dark:border-slate-700
                          dark:bg-slate-800/70
                          dark:text-white
                          dark:placeholder:text-slate-500
                          dark:focus:border-emerald-500
                          dark:focus:bg-slate-800
                        "
                      />
                    </div>

                    {/* Course */}
                    <div>
                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Select Course
                      </label>

                      <div className="relative">
                        <GraduationCap
                          size={18}
                          className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-emerald-500
                          "
                        />

                        <select
                          name="courseId"
                          value={formData.courseId}
                          onChange={handleChange}
                          disabled={coursesLoading}
                          className="
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-11
                            py-3.5
                            text-sm
                            text-slate-900
                            outline-none
                            transition-all
                            duration-300
                            focus:border-emerald-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-emerald-500/10
                            disabled:cursor-not-allowed
                            disabled:opacity-70
                            dark:border-slate-700
                            dark:bg-slate-800/70
                            dark:text-white
                            dark:focus:border-emerald-500
                            dark:focus:bg-slate-800
                          "
                        >
                          <option value="">
                            {coursesLoading
                              ? "Loading courses..."
                              : "Choose a course"}
                          </option>

                          {courses.map((course) => (
                            <option
                              key={course.id}
                              value={course.id}
                            >
                              {course.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Login message */}
                  {!isAuthenticated && (
                    <p
                      className="
                        rounded-xl
                        border
                        border-amber-200
                        bg-amber-50
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-amber-700
                        dark:border-amber-500/20
                        dark:bg-amber-950/20
                        dark:text-amber-400
                      "
                    >
                      Please log in or create an account to
                      complete your enrollment.
                    </p>
                  )}

                  {/* Error */}
                  {submitStatus &&
                    submitStatus !== "success" && (
                      <p
                        className="
                          rounded-xl
                          border
                          border-red-200
                          bg-red-50
                          px-4
                          py-3
                          text-sm
                          font-medium
                          text-red-600
                          dark:border-red-500/20
                          dark:bg-red-950/20
                          dark:text-red-400
                        "
                      >
                        {submitStatus}
                      </p>
                    )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || coursesLoading}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-emerald-600
                      via-green-500
                      to-teal-500
                      px-6
                      py-4
                      text-sm
                      font-bold
                      text-white
                      shadow-xl
                      shadow-emerald-500/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-2xl
                      hover:shadow-emerald-500/25
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="
                            h-5
                            w-5
                            animate-spin
                            rounded-full
                            border-2
                            border-white/30
                            border-t-white
                          "
                        />

                        Enrolling...
                      </>
                    ) : !isAuthenticated ? (
                      <>
                        Continue to Login
                        <ArrowRight
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </>
                    ) : (
                      <>
                        Reserve My Spot
                        <ArrowRight
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </>
                    )}
                  </button>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-center
                      text-[11px]
                      font-medium
                      text-slate-400
                      dark:text-slate-500
                    "
                  >
                    <Clock3 size={13} />
                    Takes less than a minute
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalEnrollmentPopup;