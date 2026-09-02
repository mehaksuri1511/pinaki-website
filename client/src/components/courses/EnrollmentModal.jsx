import { useEffect, useState } from "react";
import axios from "axios";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Sparkles,
  User,
  X,
} from "lucide-react";

const EnrollmentModal = ({
  isOpen,
  onClose,
  selectedCourse,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse,
      }));
    }
  }, [selectedCourse]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const API_BASE_URL =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

      const response = await axios.post(
        `${API_BASE_URL}/api/enrollment`,
        formData
      );

      alert(
        response.data.message ||
          "Enrollment submitted successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });

      onClose();
    } catch (error) {
      console.error("Enrollment submission error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to submit enrollment. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-slate-950/70
        p-4
        backdrop-blur-md
        sm:p-6
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* ======================================================= */}
      {/* MODAL */}
      {/* ======================================================= */}

      <div
        className="
          relative
          my-auto
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200
          bg-white
          shadow-[0_30px_100px_rgba(15,23,42,0.25)]
          dark:border-white/[0.08]
          dark:bg-slate-900
          dark:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        "
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* ===================================================== */}
        {/* DECORATIVE GLOW */}
        {/* ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-emerald-400/20
            blur-[100px]
            dark:bg-emerald-500/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-cyan-400/10
            blur-[100px]
            dark:bg-cyan-500/[0.07]
          "
        />

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div
          className="
            relative
            border-b
            border-slate-200
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-cyan-50
            px-6
            pb-6
            pt-7
            dark:border-white/[0.07]
            dark:from-emerald-950/40
            dark:via-slate-900
            dark:to-cyan-950/30
            sm:px-8
            sm:pb-7
            sm:pt-8
          "
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enrollment modal"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white/80
              text-slate-500
              transition-all
              hover:border-slate-300
              hover:bg-white
              hover:text-slate-900
              dark:border-white/[0.08]
              dark:bg-white/[0.05]
              dark:text-slate-400
              dark:hover:bg-white/[0.1]
              dark:hover:text-white
              sm:right-7
              sm:top-7
            "
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-4 pr-10">
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-emerald-500
                to-teal-500
                text-white
                shadow-lg
                shadow-emerald-500/20
              "
            >
              <Sparkles size={22} />
            </div>

            {/* Heading */}
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                Start your journey
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                Enroll Now
              </h2>

              <p
                className="
                  mt-1.5
                  max-w-lg
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Fill in your details and our team will get in touch
                with you.
              </p>
            </div>
          </div>

          {/* Selected Course */}
          {selectedCourse && (
            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-emerald-200/70
                bg-white/70
                px-4
                py-3
                backdrop-blur-sm
                dark:border-emerald-500/15
                dark:bg-white/[0.04]
              "
            >
              <BookOpen
                size={18}
                className="shrink-0 text-emerald-500"
              />

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Selected course
                </p>

                <p
                  className="
                    truncate
                    text-sm
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {selectedCourse}
                </p>
              </div>

              <CheckCircle2
                size={17}
                className="ml-auto shrink-0 text-emerald-500"
              />
            </div>
          )}
        </div>

        {/* ===================================================== */}
        {/* FORM */}
        {/* ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="relative px-6 py-7 sm:px-8 sm:py-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Full Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="enrollment-name"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-slate-800
                  dark:text-slate-200
                "
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  id="enrollment-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-emerald-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-emerald-500/10
                    dark:border-white/[0.08]
                    dark:bg-white/[0.04]
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-emerald-500
                    dark:focus:bg-white/[0.06]
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="enrollment-email"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-slate-800
                  dark:text-slate-200
                "
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  id="enrollment-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-emerald-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-emerald-500/10
                    dark:border-white/[0.08]
                    dark:bg-white/[0.04]
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-emerald-500
                    dark:focus:bg-white/[0.06]
                  "
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="enrollment-phone"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-slate-800
                  dark:text-slate-200
                "
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  id="enrollment-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-emerald-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-emerald-500/10
                    dark:border-white/[0.08]
                    dark:bg-white/[0.04]
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-emerald-500
                    dark:focus:bg-white/[0.06]
                  "
                />
              </div>
            </div>
          </div>

          {/* Information */}
          <div
            className="
              mt-6
              rounded-2xl
              border
              border-slate-200/80
              bg-slate-50
              px-4
              py-3
              dark:border-white/[0.06]
              dark:bg-white/[0.025]
            "
          >
            <p
              className="
                text-xs
                leading-5
                text-slate-500
                dark:text-slate-400
              "
            >
              By submitting this form, you agree to be contacted by
              the Pinaki IT team regarding your selected course and
              enrollment.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              group
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-2xl
              bg-gradient-to-r
              from-emerald-500
              to-teal-500
              px-6
              py-4
              text-sm
              font-bold
              text-white
              shadow-[0_10px_35px_rgba(16,185,129,0.2)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_15px_45px_rgba(16,185,129,0.3)]
              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:translate-y-0
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Submitting...
              </>
            ) : (
              <>
                Submit Enrollment

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

          <p
            className="
              mt-4
              text-center
              text-xs
              text-slate-400
              dark:text-slate-500
            "
          >
            Our team will contact you shortly after submission.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModal;