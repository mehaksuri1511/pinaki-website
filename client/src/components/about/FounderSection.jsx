import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Quote,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import founder from "../../assets/images/founder.png";

const FounderSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-emerald-300/20
          blur-[120px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-teal-300/20
          blur-[120px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-400/20
              dark:bg-emerald-400/10
              dark:text-emerald-300
            "
          >
            <Sparkles size={14} />
            OUR FOUNDER
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Meet The Vision Behind{" "}
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
              Pinaki IT
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Building an ecosystem where practical knowledge, technology and
            mentorship come together to shape future professionals.
          </p>
        </div>

        {/* ================= FOUNDER CARD ================= */}

        <div
          className="
            group
            relative
            mt-12
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-white
            shadow-xl
            shadow-slate-900/5
            transition-all
            duration-500
            hover:shadow-2xl
            sm:rounded-[36px]
            dark:border-slate-800
            dark:bg-slate-900/80
            dark:shadow-black/20
          "
        >
          {/* Top accent */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-20
              h-1
              bg-gradient-to-r
              from-emerald-500
              via-green-400
              to-teal-500
            "
          />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* ================= IMAGE ================= */}

            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[620px]">
              {/* Image glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-slate-950/50
                  via-transparent
                  to-emerald-950/10
                "
              />

              <img
                src={founder}
                alt="Founder of Pinaki IT"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

              {/* Image label */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  z-20
                  rounded-2xl
                  border
                  border-white/20
                  bg-black/30
                  px-5
                  py-3
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  sm:bottom-8
                  sm:left-8
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Leadership
                </p>

                <p className="mt-1 font-bold">
                  Innovation • Education • Growth
                </p>
              </div>
            </div>

            {/* ================= CONTENT ================= */}

            <div className="relative p-7 sm:p-10 lg:p-12 xl:p-14">
              {/* Decorative quote */}

              <div
                className="
                  absolute
                  right-8
                  top-8
                  hidden
                  opacity-10
                  sm:block
                  dark:opacity-[0.07]
                "
              >
                <Quote size={100} className="text-emerald-500" />
              </div>

              <div className="relative z-10">
                {/* Quote icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-400/10
                    dark:text-emerald-400
                  "
                >
                  <Quote size={25} />
                </div>

                {/* Name */}

                <h2
                  className="
                    mt-6
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-950
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Dhruv Govil
                </h2>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-wider
                      text-emerald-600
                      dark:text-emerald-400
                    "
                  >
                    CEO & Founder
                  </p>
                </div>

                {/* Main quote */}

                <blockquote
                  className="
                    mt-7
                    border-l-2
                    border-emerald-500
                    pl-5
                    text-lg
                    font-medium
                    leading-8
                    text-slate-700
                    sm:text-xl
                    dark:text-slate-300
                  "
                >
                  "Education should never stop at theory. Real learning begins
                  when knowledge meets practical implementation."
                </blockquote>

                {/* Divider */}

                <div
                  className="
                    my-8
                    h-px
                    w-full
                    bg-slate-200
                    dark:bg-slate-800
                  "
                />

                {/* Read More */}

                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-600
                    to-teal-600
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-emerald-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-emerald-600/30
                  "
                >
                  {expanded
                    ? "Show Less"
                    : "Read More About Our Founder"}

                  {expanded ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {/* ================= EXPANDED CONTENT ================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      expanded
                        ? "mt-8 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="space-y-6">
                      <p
                        className="
                          text-base
                          leading-8
                          text-slate-600
                          dark:text-slate-400
                        "
                      >
                        Dhruv Govil founded Pinaki IT Consultant with the
                        vision of preparing students for the rapidly evolving
                        technology industry. His focus has always been on
                        bridging the gap between academic learning and
                        real-world skills through practical exposure,
                        mentorship and innovation.
                      </p>

                      <p
                        className="
                          text-base
                          leading-8
                          text-slate-600
                          dark:text-slate-400
                        "
                      >
                        Under his leadership, Pinaki IT has trained thousands
                        of students, collaborated with organizations, delivered
                        software solutions and helped aspiring professionals
                        build successful careers.
                      </p>

                      {/* Vision Card */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-emerald-200
                          bg-gradient-to-br
                          from-emerald-50
                          to-teal-50
                          p-6
                          dark:border-emerald-400/20
                          dark:from-emerald-950/40
                          dark:to-teal-950/30
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-8
                            -top-8
                            h-24
                            w-24
                            rounded-full
                            bg-emerald-400/20
                            blur-2xl
                          "
                        />

                        <div className="relative">
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
                            Founder&apos;s Vision
                          </p>

                          <h3
                            className="
                              mt-2
                              text-xl
                              font-bold
                              text-slate-900
                              dark:text-white
                            "
                          >
                            Creating Industry-Ready Professionals
                          </h3>

                          <p
                            className="
                              mt-3
                              leading-7
                              text-slate-600
                              dark:text-slate-400
                            "
                          >
                            To create an ecosystem where every learner gains
                            practical skills, confidence and opportunities to
                            become an industry-ready professional.
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn */}

                      <a
                        href="#"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          px-5
                          py-3
                          text-sm
                          font-bold
                          text-slate-700
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-emerald-500
                          hover:bg-emerald-600
                          hover:text-white
                          dark:border-slate-700
                          dark:bg-slate-900
                          dark:text-slate-300
                          dark:hover:border-emerald-500
                          dark:hover:bg-emerald-600
                          dark:hover:text-white
                        "
                      >
                        <FaLinkedinIn size={17} />

                        Connect on LinkedIn

                        <ArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-0.5
                            group-hover/link:-translate-y-0.5
                          "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;