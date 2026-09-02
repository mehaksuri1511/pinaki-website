import { useState } from "react";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/gallery1.png";
import img2 from "../../assets/images/gallery5.png";
import img3 from "../../assets/images/gallery9.png";
import img4 from "../../assets/images/gallery13.png";

const images = [img1, img2, img3, img4];

const AboutHero = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-white
          pt-[104px]
          dark:bg-slate-950
          lg:pt-[104px]
          max-lg:pt-[88px]
        "
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px] dark:bg-emerald-500/10" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-teal-400/20 blur-[120px] dark:bg-teal-500/10" />

        {/* Hero content area */}
        <div
          className="
            mx-auto
            grid
            min-h-[calc(100vh-104px)]
            max-w-[1500px]
            items-center
            gap-10
            px-6
            py-10
            sm:px-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-10
            lg:py-12
            max-lg:min-h-[calc(100vh-88px)]
          "
        >
          {/* ================= LEFT ================= */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold tracking-[0.18em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              ABOUT PINAKI IT
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                font-black
                leading-[0.98]
                tracking-tight
                text-slate-950
                sm:text-6xl
                lg:text-7xl
                xl:text-[78px]
                dark:text-white
              "
            >
              Building Skills.
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
                  dark:to-teal-300
                "
              >
                Building Careers.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
                dark:text-slate-300
              "
            >
              Pinaki IT Consultant Pvt. Ltd. bridges the gap between academic
              learning and real-world technology through practical training,
              live projects, internships, software development and industry
              mentorship.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/courses")}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-600
                  to-teal-500
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-emerald-500/30
                "
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white/70
                  px-7
                  py-3.5
                  font-semibold
                  text-slate-800
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400
                  hover:text-emerald-600
                  dark:border-slate-700
                  dark:bg-slate-900/60
                  dark:text-slate-200
                  dark:hover:border-emerald-500
                  dark:hover:text-emerald-400
                "
              >
                Talk to Us
              </button>
            </div>

            {/* Stats */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-9
                gap-y-4
                border-t
                border-slate-200
                pt-6
                dark:border-slate-800
              "
            >
              <div>
                <p className="text-xl font-black text-slate-950 dark:text-white">
                  5000+
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Learners
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-slate-950 dark:text-white">
                  200+
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-slate-950 dark:text-white">
                  100+
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Organizations
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            {/* Glow */}
            <div
              className="
                absolute
                -inset-5
                rounded-[40px]
                bg-gradient-to-br
                from-emerald-400/20
                via-transparent
                to-teal-400/20
                blur-2xl
                dark:from-emerald-500/10
                dark:to-teal-500/10
              "
            />

            {/* Image collage */}
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelected(img)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/70
                    bg-slate-100
                    shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-2xl
                    dark:border-slate-700/70
                    dark:bg-slate-900

                    ${
                      index === 0
                        ? "h-[190px] sm:h-[220px] lg:h-[225px]"
                        : index === 1
                        ? "mt-7 h-[190px] sm:h-[220px] lg:h-[225px]"
                        : index === 2
                        ? "-mt-3 h-[190px] sm:h-[220px] lg:h-[225px]"
                        : "h-[190px] sm:h-[220px] lg:h-[225px]"
                    }
                  `}
                >
                  <img
                    src={img}
                    alt="Pinaki IT"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/60
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* Expand icon */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/15
                      text-white
                      opacity-0
                      backdrop-blur-md
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <Maximize2 size={16} />
                  </div>
                </button>
              ))}
            </div>

            {/* Floating badge */}
            <div
              className="
                absolute
                -bottom-4
                left-1/2
                -translate-x-1/2
                rounded-2xl
                border
                border-emerald-200
                bg-white/95
                px-5
                py-3
                shadow-xl
                backdrop-blur-xl
                dark:border-emerald-500/20
                dark:bg-slate-900/95
              "
            >
              <p
                className="
                  whitespace-nowrap
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Learn · Build · Grow
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-slate-50
            to-transparent
            dark:from-slate-950
          "
        />
      </section>

      {/* ================= IMAGE LIGHTBOX ================= */}
      {selected && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-slate-950/95
            p-5
            backdrop-blur-md
          "
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="
              absolute
              right-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <X size={22} />
          </button>

          <img
            src={selected}
            alt="Pinaki IT"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[88vh]
              max-w-[92vw]
              rounded-2xl
              object-contain
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
};

export default AboutHero;