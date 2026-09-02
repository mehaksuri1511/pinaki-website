import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import storyImage from "../../assets/images/gallery9.png";

const highlights = [
  "Industry-Oriented Curriculum",
  "Live Projects & Practical Learning",
  "Placement Assistance",
  "Corporate Training Programs",
];

const OurStory = () => {
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
          top-1/4
          h-80
          w-80
          rounded-full
          bg-emerald-300/15
          blur-[120px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-teal-300/15
          blur-[120px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}

          <div>
            {/* Eyebrow */}

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
              OUR STORY
            </div>

            {/* Heading */}

            <h2
              className="
                mt-6
                max-w-2xl
                text-4xl
                font-black
                leading-[1.08]
                tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-[3.5rem]
                dark:text-white
              "
            >
              More than a Training Institute.
              <br />
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
                A Career Partner.
              </span>
            </h2>

            {/* Intro */}

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
                dark:text-slate-400
              "
            >
              Pinaki IT Consultant Pvt. Ltd. was founded with one simple
              mission — to bridge the gap between academic learning and
              real industry expectations.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
                dark:text-slate-400
              "
            >
              Through practical learning, live projects, internships,
              software development and expert mentorship, we prepare
              students and professionals for successful careers in
              technology.
            </p>

            {/* ================= HIGHLIGHTS ================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/70
                    px-4
                    py-3.5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-300
                    hover:bg-emerald-50
                    dark:border-slate-800
                    dark:bg-slate-900/60
                    dark:hover:border-emerald-500/40
                    dark:hover:bg-emerald-950/30
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="
                      shrink-0
                      text-emerald-600
                      dark:text-emerald-400
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom statement */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-sm
                font-bold
                text-emerald-600
                dark:text-emerald-400
              "
            >
              <span className="h-px w-8 bg-emerald-500" />

              Learn. Build. Grow.

              <ArrowUpRight size={17} />
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative">
            {/* Glow */}

            <div
              className="
                absolute
                -inset-5
                rounded-[36px]
                bg-gradient-to-br
                from-emerald-400/20
                via-transparent
                to-teal-400/20
                blur-2xl
                dark:from-emerald-500/10
                dark:to-teal-500/10
              "
            />

            {/* Image frame */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-slate-100
                p-2
                shadow-2xl
                shadow-slate-900/10
                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-black/30
              "
            >
              <div className="relative overflow-hidden rounded-[24px]">
                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    bg-gradient-to-t
                    from-slate-950/50
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                <img
                  src={storyImage}
                  alt="Pinaki IT"
                  className="
                    h-[440px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                    sm:h-[500px]
                    lg:h-[570px]
                  "
                />

                {/* Image badge */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
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
                    sm:bottom-6
                    sm:left-6
                  "
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Our Approach
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Practical. Industry-Focused. Future-Ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}

            <div
              className="
                absolute
                -bottom-5
                -right-4
                hidden
                rounded-2xl
                border
                border-emerald-200
                bg-white
                px-5
                py-4
                shadow-xl
                sm:block
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                Our Focus
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-bold
                  text-slate-800
                  dark:text-white
                "
              >
                Skills That Matter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;