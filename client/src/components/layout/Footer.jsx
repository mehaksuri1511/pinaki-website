import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/pinaki-logo.jpeg.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-slate-50
        text-slate-900

        dark:bg-[#020617]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      {/* ================= CTA SECTION ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-14">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]

            bg-gradient-to-r
            from-emerald-500
            via-green-500
            to-teal-500

            dark:from-emerald-700
            dark:via-emerald-800
            dark:to-teal-800

            p-10
            shadow-2xl

            dark:shadow-[0_25px_70px_rgba(16,185,129,0.20)]

            transition-all
            duration-300

            md:p-14
          "
        >
          {/* Decorative Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-between
              gap-10
              lg:flex-row
            "
          >
            {/* CTA TEXT */}
            <div>
              <h2
                className="
                  text-4xl
                  font-extrabold
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                Ready to Shape Your Future?
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                Join thousands of students building industry-ready skills
                through expert-led training, internships and placement
                assistance.
              </p>
            </div>

            {/* CTA BUTTON */}
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full

                bg-white
                px-8
                py-4

                font-semibold
                text-emerald-700

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:bg-emerald-50
                hover:shadow-xl

                dark:bg-slate-950
                dark:text-emerald-400
                dark:hover:bg-slate-900
                dark:hover:text-emerald-300
              "
            >
              Explore Programs
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* ================= COMPANY ================= */}
          <div>
            {/* LOGO */}
            <img
              src={logo}
              alt="Pinaki IT"
              className="
                h-14
                rounded-xl
                bg-white
                p-2
                shadow-sm

                dark:bg-white
                dark:shadow-black/30
              "
            />

            {/* COMPANY NAME */}
            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Pinaki IT Consultant Pvt. Ltd.
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-xl
                leading-8
                text-slate-600
                dark:text-slate-400
              "
            >
              Empowering students and businesses through industry-focused
              training, innovative software solutions and placement assistance.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-4">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full

                  bg-slate-200
                  text-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-[#0A66C2]
                  hover:text-white

                  dark:bg-white/10
                  dark:text-slate-200
                  dark:hover:bg-[#0A66C2]
                "
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full

                  bg-slate-200
                  text-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-pink-600
                  hover:text-white

                  dark:bg-white/10
                  dark:text-slate-200
                  dark:hover:bg-pink-600
                "
              >
                <FaInstagram size={18} />
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full

                  bg-slate-200
                  text-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-[#1877F2]
                  hover:text-white

                  dark:bg-white/10
                  dark:text-slate-200
                  dark:hover:bg-[#1877F2]
                "
              >
                <FaFacebookF size={18} />
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full

                  bg-slate-200
                  text-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-red-600
                  hover:text-white

                  dark:bg-white/10
                  dark:text-slate-200
                  dark:hover:bg-red-600
                "
              >
                <FaYoutube size={18} />
              </a>

            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              What We Offer
            </h3>

            <ul
              className="
                space-y-4
                text-slate-600
                dark:text-slate-400
              "
            >
              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Industrial Training
              </li>

              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Live Classes
              </li>

              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Placement Assistance
              </li>

              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Internship Programs
              </li>

              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Software Development
              </li>

              <li className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                ✔ Corporate IT Solutions
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Get in Touch
            </h3>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <MapPin
                  className="
                    mt-1
                    shrink-0
                    text-emerald-600
                    dark:text-emerald-400
                  "
                  size={22}
                />

                <p
                  className="
                    leading-7
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  H-114, Office no-FF-01,
                  <br />
                  Noida Sector 63, India
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <Phone
                  className="
                    shrink-0
                    text-emerald-600
                    dark:text-emerald-400
                  "
                  size={22}
                />

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  +91 XXXXX XXXXX
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <Mail
                  className="
                    shrink-0
                    text-emerald-600
                    dark:text-emerald-400
                  "
                  size={22}
                />

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  hello@pinakiit.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-4

            border-t
            border-slate-200

            pt-8

            md:flex-row

            dark:border-white/10
          "
        >
          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-500
            "
          >
            © 2026 Pinaki IT Consultant Pvt. Ltd. All Rights Reserved.
          </p>

          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-500
            "
          >
            Crafted with 💚 for Future Innovators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;