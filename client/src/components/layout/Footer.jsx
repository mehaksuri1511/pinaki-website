import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Sparkles,
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

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Industrial Training",
    "Live Classes",
    "Placement Assistance",
    "Internship Programs",
    "Software Development",
    "Corporate IT Solutions",
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn size={17} />,
      hover:
        "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_22px_rgba(10,102,194,0.35)]",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram size={18} />,
      hover:
        "hover:bg-pink-600 hover:border-pink-600 hover:shadow-[0_0_22px_rgba(219,39,119,0.35)]",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF size={17} />,
      hover:
        "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_22px_rgba(24,119,242,0.35)]",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: <FaYoutube size={18} />,
      hover:
        "hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_22px_rgba(220,38,38,0.35)]",
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200/70
        bg-slate-50
        text-slate-900
        dark:border-white/[0.06]
        dark:bg-[#020617]
        dark:text-white
        transition-colors
        duration-500
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[360px]
            w-[360px]
            rounded-full
            bg-emerald-400/10
            blur-[100px]
            dark:bg-emerald-500/[0.09]
          "
        />

        {/* Top right glow */}
        <div
          className="
            absolute
            -right-40
            top-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-cyan-400/10
            blur-[110px]
            dark:bg-cyan-500/[0.08]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[360px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-violet-400/10
            blur-[120px]
            dark:bg-violet-500/[0.06]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            dark:opacity-[0.03]
            [background-image:linear-gradient(rgba(100,116,139,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.8)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* COMPACT CTA */}
        {/* ========================================================= */}

        <section className="pt-8 sm:pt-10">
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-emerald-200/60
              bg-gradient-to-br
              from-emerald-50
              via-white
              to-cyan-50
              px-6
              py-6
              shadow-[0_15px_45px_rgba(16,185,129,0.07)]
              dark:border-emerald-500/20
              dark:from-emerald-950/60
              dark:via-slate-900
              dark:to-cyan-950/50
              dark:shadow-[0_15px_50px_rgba(16,185,129,0.08)]
              sm:px-8
              sm:py-7
              lg:px-10
            "
          >
            {/* CTA glow - smaller */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-24
                h-56
                w-56
                rounded-full
                bg-emerald-400/20
                blur-[70px]
                transition-all
                duration-700
                group-hover:bg-emerald-400/30
                dark:bg-emerald-500/15
                dark:group-hover:bg-emerald-500/22
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-16
                h-48
                w-48
                rounded-full
                bg-cyan-400/15
                blur-[70px]
                dark:bg-cyan-500/10
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-start
                justify-between
                gap-6
                lg:flex-row
                lg:items-center
              "
            >
              {/* CTA Content */}
              <div className="max-w-2xl">

                {/* Small badge */}
                <div
                  className="
                    mb-2.5
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-emerald-200
                    bg-emerald-100/60
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-emerald-700
                    dark:border-emerald-500/20
                    dark:bg-emerald-500/10
                    dark:text-emerald-300
                  "
                >
                  <Sparkles size={12} />
                  Build. Learn. Grow.
                </div>

                {/* Heading */}
                <h2
                  className="
                    text-[30px]
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-[34px]
                    dark:text-white
                  "
                >
                  Ready to Shape Your{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-emerald-500
                      via-teal-500
                      to-cyan-500
                      bg-clip-text
                      text-transparent
                      dark:from-emerald-400
                      dark:via-teal-300
                      dark:to-cyan-400
                    "
                  >
                    Future?
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Join students and professionals building industry-ready
                  skills through expert-led training, internships,
                  development programs and placement assistance.
                </p>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => navigate("/courses")}
                className="
                  group/btn
                  relative
                  inline-flex
                  shrink-0
                  items-center
                  gap-2.5
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_25px_rgba(16,185,129,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_32px_rgba(16,185,129,0.32)]
                  dark:from-emerald-500
                  dark:to-cyan-500
                "
              >
                <span className="relative z-10">
                  Explore Programs
                </span>

                <ArrowRight
                  size={17}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover/btn:translate-x-1
                  "
                />

                {/* Shine */}
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-20
                    w-14
                    rotate-12
                    bg-white/25
                    blur-md
                    transition-all
                    duration-700
                    group-hover/btn:left-[120%]
                  "
                />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MAIN FOOTER */}
        {/* ========================================================= */}

        <section className="py-10 sm:py-12 lg:py-14">
          <div
            className="
              grid
              gap-9
              md:grid-cols-2
              lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]
              lg:gap-8
            "
          >

            {/* ===================================================== */}
            {/* BRAND */}
            {/* ===================================================== */}

            <div>
              <div className="flex items-center gap-3.5">

                {/* Logo */}
                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-1.5
                    shadow-md
                    shadow-slate-200/40
                    dark:border-white/10
                    dark:bg-white/[0.06]
                    dark:shadow-black/20
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      bg-gradient-to-br
                      from-emerald-400/20
                      to-cyan-400/20
                      blur-lg
                    "
                  />

                  <img
                    src={logo}
                    alt="Pinaki IT"
                    className="
                      relative
                      h-full
                      w-full
                      rounded-xl
                      object-contain
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-extrabold
                      tracking-tight
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Pinaki IT
                  </h3>

                  <div
                    className="
                      mt-1
                      h-0.5
                      w-10
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-500
                      to-cyan-500
                    "
                  />

                  <p
                    className="
                      mt-1.5
                      text-[11px]
                      font-medium
                      text-emerald-600
                      dark:text-emerald-400
                    "
                  >
                    Learn • Build • Succeed
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Empowering students and businesses through industry-focused
                training, innovative software solutions and placement
                assistance.
              </p>

              {/* Social Icons */}
              <div className="mt-5 flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`
                      group/social
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-600
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:text-white
                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:text-slate-400
                      ${social.hover}
                    `}
                  >
                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover/social:scale-110
                      "
                    >
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ===================================================== */}
            {/* NAVIGATION */}
            {/* ===================================================== */}

            <div>
              <h4
                className="
                  mb-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-900
                  dark:text-white
                "
              >
                Navigation
              </h4>

              <ul className="space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => navigate(item.path)}
                      className="
                        group/link
                        flex
                        items-center
                        gap-1
                        text-sm
                        text-slate-600
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-emerald-600
                        dark:text-slate-400
                        dark:hover:text-emerald-400
                      "
                    >
                      <ChevronRight
                        size={13}
                        className="
                          -ml-1
                          opacity-0
                          transition-all
                          duration-200
                          group-hover/link:ml-0
                          group-hover/link:opacity-100
                        "
                      />

                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===================================================== */}
            {/* SERVICES */}
            {/* ===================================================== */}

            <div>
              <h4
                className="
                  mb-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-900
                  dark:text-white
                "
              >
                What We Offer
              </h4>

              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <div
                      className="
                        group/service
                        flex
                        cursor-default
                        items-center
                        gap-2
                        text-sm
                        text-slate-600
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-emerald-600
                        dark:text-slate-400
                        dark:hover:text-emerald-400
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-gradient-to-r
                          from-emerald-400
                          to-cyan-400
                          opacity-70
                          transition-all
                          duration-200
                          group-hover/service:scale-150
                          group-hover/service:opacity-100
                          group-hover/service:shadow-[0_0_8px_rgba(16,185,129,0.8)]
                        "
                      />

                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===================================================== */}
            {/* CONTACT */}
            {/* ===================================================== */}

            <div>
              <h4
                className="
                  mb-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-900
                  dark:text-white
                "
              >
                Get in Touch
              </h4>

              <div className="space-y-4">

                {/* Address */}
                <div className="group/contact flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-emerald-200
                      bg-emerald-50
                      text-emerald-600
                      transition-all
                      duration-300
                      group-hover/contact:-translate-y-0.5
                      group-hover/contact:shadow-[0_0_18px_rgba(16,185,129,0.15)]
                      dark:border-emerald-500/20
                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    <MapPin size={16} />
                  </div>

                  <p
                    className="
                      pt-0.5
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    H-114, Office no-FF-01,
                    <br />
                    Noida Sector 63, India
                  </p>
                </div>

                {/* Phone */}
                <div className="group/contact flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-cyan-200
                      bg-cyan-50
                      text-cyan-600
                      transition-all
                      duration-300
                      group-hover/contact:-translate-y-0.5
                      group-hover/contact:shadow-[0_0_18px_rgba(6,182,212,0.15)]
                      dark:border-cyan-500/20
                      dark:bg-cyan-500/10
                      dark:text-cyan-400
                    "
                  >
                    <Phone size={16} />
                  </div>

                  <p
                    className="
                      text-sm
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    +91 XXXXX XXXXX
                  </p>
                </div>

                {/* Email */}
                <div className="group/contact flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-violet-200
                      bg-violet-50
                      text-violet-600
                      transition-all
                      duration-300
                      group-hover/contact:-translate-y-0.5
                      group-hover/contact:shadow-[0_0_18px_rgba(139,92,246,0.15)]
                      dark:border-violet-500/20
                      dark:bg-violet-500/10
                      dark:text-violet-400
                    "
                  >
                    <Mail size={16} />
                  </div>

                  <p
                    className="
                      break-all
                      text-sm
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                     info@pinakiithub.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM BAR */}
        {/* ========================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-slate-200/80
            py-5
            text-center
            sm:flex-row
            sm:text-left
            dark:border-white/[0.07]
          "
        >
          <p
            className="
              text-xs
              text-slate-500
              dark:text-slate-500
            "
          >
            © 2026 Pinaki IT Consultant Pvt. Ltd. All Rights Reserved.
          </p>

          <p
            className="
              text-xs
              text-slate-500
              dark:text-slate-500
            "
          >
            Crafted with{" "}
            <span className="inline-block animate-pulse text-rose-500">
              💚
            </span>{" "}
            for Future Innovators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;