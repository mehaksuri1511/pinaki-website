import {
  Target,
  Eye,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import SectionWatermark from "../common/SectionWatermark";

const values = [
  "Innovation",
  "Integrity",
  "Excellence",
  "Continuous Learning",
  "Student Success",
];

const MissionVision = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      {/* ================= WATERMARK ================= */}

      <SectionWatermark
        icons={[
          "Target",
          "Eye",
          "HeartHandshake",
          "Lightbulb",
          "GraduationCap",
          "Award",
          "Rocket",
          "Sparkles",
          "Users",
        ]}
        intensity="strong"
      />

      {/* ================= BACKGROUND GLOWS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
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
          bottom-10
          h-80
          w-80
          rounded-full
          bg-teal-300/15
          blur-[120px]
          dark:bg-teal-500/10
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
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
            WHAT DRIVES US
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
            Mission.
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
              {" "}
              Vision.
            </span>{" "}
            Values.
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
            Everything we do is driven by a commitment to innovation,
            practical learning and creating meaningful opportunities for
            every learner.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* ================================================= */}
          {/* ================= MISSION ======================= */}
          {/* ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              shadow-slate-900/5
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-emerald-300
              hover:shadow-2xl
              hover:shadow-emerald-500/10
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-emerald-500/40
              dark:hover:shadow-emerald-500/10
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-emerald-400
                via-green-500
                to-teal-400
              "
            />

            {/* Decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                -right-4
                -top-8
                text-[130px]
                font-black
                leading-none
                text-emerald-500/[0.045]
                transition-all
                duration-500
                group-hover:text-emerald-500/[0.09]
                group-hover:scale-110
                dark:text-emerald-400/[0.05]
              "
            >
              01
            </div>

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-emerald-400/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-emerald-400/20
                group-hover:scale-125
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-emerald-100
                  bg-emerald-50
                  text-emerald-600
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:bg-emerald-600
                  group-hover:text-white
                  group-hover:shadow-lg
                  group-hover:shadow-emerald-500/25
                  dark:border-emerald-900/50
                  dark:bg-emerald-400/10
                  dark:text-emerald-400
                  dark:group-hover:bg-emerald-500
                  dark:group-hover:text-white
                "
              >
                <Target size={30} strokeWidth={1.8} />
              </div>

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                Our Purpose
              </p>

              <div className="mt-2 flex items-center justify-between">
                <h3
                  className="
                    text-2xl
                    font-black
                    text-slate-950
                    dark:text-white
                  "
                >
                  Mission
                </h3>

                <span
                  className="
                    text-xs
                    font-bold
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-emerald-500
                  "
                >
                  01
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                To empower students and professionals with practical
                technical knowledge, industry exposure, mentorship and
                career opportunities that prepare them for real-world
                success.
              </p>

              {/* Bottom interaction */}

              <div className="mt-7 flex items-center gap-3">
                <div
                  className="
                    h-1
                    w-10
                    rounded-full
                    bg-emerald-500
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-400
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  Empower
                </span>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= VISION ======================== */}
          {/* ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-emerald-500/20
              bg-gradient-to-br
              from-emerald-600
              via-green-600
              to-teal-600
              p-7
              text-white
              shadow-xl
              shadow-emerald-900/10
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:shadow-emerald-500/25
              sm:p-8
              dark:from-emerald-700
              dark:via-green-700
              dark:to-teal-700
              dark:shadow-emerald-950/30
            "
          >
            {/* Decorative rings */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                border
                border-white/10
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                top-0
                h-32
                w-32
                rounded-full
                border
                border-white/10
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            {/* Decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                -right-2
                text-[130px]
                font-black
                leading-none
                text-white/[0.08]
                transition-transform
                duration-700
                group-hover:scale-110
              "
            >
              02
            </div>

            {/* Glows */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -bottom-20
                h-48
                w-48
                rounded-full
                bg-teal-300/20
                blur-3xl
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/15
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:-rotate-6
                  group-hover:scale-110
                  group-hover:bg-white/25
                "
              >
                <Eye size={30} strokeWidth={1.8} />
              </div>

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-emerald-100
                "
              >
                Where We&apos;re Going
              </p>

              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-2xl font-black">
                  Vision
                </h3>

                <span className="text-xs font-bold text-white/50">
                  02
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-white/85">
                To become one of India&apos;s most trusted technology
                education and consulting organizations, transforming lives
                through innovation, learning and excellence.
              </p>

              {/* Interactive footer */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/15
                  pt-5
                "
              >
                <span className="text-sm font-bold text-white">
                  Building the future
                </span>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:bg-white/20
                  "
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= VALUES ======================== */}
          {/* ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              shadow-slate-900/5
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-teal-300
              hover:shadow-2xl
              hover:shadow-teal-500/10
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-teal-500/40
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-teal-400
                via-emerald-500
                to-green-400
              "
            />

            {/* Decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                -right-2
                text-[130px]
                font-black
                leading-none
                text-teal-500/[0.045]
                transition-all
                duration-500
                group-hover:text-teal-500/[0.09]
                group-hover:scale-110
                dark:text-teal-400/[0.05]
              "
            >
              03
            </div>

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-48
                w-48
                rounded-full
                bg-teal-400/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-teal-400/20
                group-hover:scale-125
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-teal-100
                  bg-teal-50
                  text-teal-600
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:-rotate-6
                  group-hover:scale-110
                  group-hover:bg-teal-600
                  group-hover:text-white
                  group-hover:shadow-lg
                  group-hover:shadow-teal-500/25
                  dark:border-teal-900/50
                  dark:bg-teal-400/10
                  dark:text-teal-400
                  dark:group-hover:bg-teal-500
                  dark:group-hover:text-white
                "
              >
                <HeartHandshake size={30} strokeWidth={1.8} />
              </div>

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-teal-600
                  dark:text-teal-400
                "
              >
                What We Believe
              </p>

              <div className="mt-2 flex items-center justify-between">
                <h3
                  className="
                    text-2xl
                    font-black
                    text-slate-950
                    dark:text-white
                  "
                >
                  Core Values
                </h3>

                <span
                  className="
                    text-xs
                    font-bold
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-teal-500
                  "
                >
                  03
                </span>
              </div>

              {/* Values */}

              <div className="mt-6 space-y-3">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className="
                      group/value
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-transparent
                      px-2
                      py-1.5
                      text-sm
                      font-medium
                      text-slate-600
                      transition-all
                      duration-300
                      hover:border-emerald-100
                      hover:bg-emerald-50/70
                      hover:translate-x-1
                      dark:text-slate-400
                      dark:hover:border-emerald-900/40
                      dark:hover:bg-emerald-950/30
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-50
                        text-xs
                        font-bold
                        text-emerald-600
                        transition-all
                        duration-300
                        group-hover/value:bg-emerald-500
                        group-hover/value:text-white
                        dark:bg-emerald-400/10
                        dark:text-emerald-400
                        dark:group-hover/value:bg-emerald-500
                        dark:group-hover/value:text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-medium
              leading-6
              text-slate-500
              dark:text-slate-500
            "
          >
            Learn with purpose. Build with confidence. Grow with
            opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;