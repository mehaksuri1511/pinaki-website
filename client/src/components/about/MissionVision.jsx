import {
  Target,
  Eye,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
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
          {/* ================= MISSION ================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              shadow-slate-900/5
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-emerald-300
              hover:shadow-2xl
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-emerald-500/40
            "
          >
            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-emerald-400/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-emerald-400/20
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-50
                  text-emerald-600
                  transition-all
                  duration-500
                  group-hover:bg-emerald-600
                  group-hover:text-white
                  dark:bg-emerald-400/10
                  dark:text-emerald-400
                  dark:group-hover:bg-emerald-500
                  dark:group-hover:text-white
                "
              >
                <Target size={28} />
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

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                Mission
              </h3>

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

              <div
                className="
                  mt-7
                  h-1
                  w-12
                  rounded-full
                  bg-emerald-500
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />
            </div>
          </div>

          {/* ================= VISION ================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
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
              hover:-translate-y-2
              hover:shadow-2xl
              sm:p-8
              dark:from-emerald-700
              dark:via-green-700
              dark:to-teal-700
              dark:shadow-emerald-950/30
            "
          >
            {/* Decorative glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-white/15
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
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
                bg-teal-300/20
                blur-3xl
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/15
                  text-white
                  backdrop-blur-md
                "
              >
                <Eye size={28} />
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

              <h3 className="mt-2 text-2xl font-black">
                Vision
              </h3>

              <p className="mt-4 text-base leading-7 text-white/85">
                To become one of India&apos;s most trusted technology
                education and consulting organizations, transforming lives
                through innovation, learning and excellence.
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm font-bold text-white">
                <span>Building the future</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>

          {/* ================= VALUES ================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              shadow-slate-900/5
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-emerald-300
              hover:shadow-2xl
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-emerald-500/40
            "
          >
            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-16
                -right-16
                h-40
                w-40
                rounded-full
                bg-teal-400/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-teal-400/20
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-50
                  text-emerald-600
                  transition-all
                  duration-500
                  group-hover:bg-emerald-600
                  group-hover:text-white
                  dark:bg-emerald-400/10
                  dark:text-emerald-400
                  dark:group-hover:bg-emerald-500
                  dark:group-hover:text-white
                "
              >
                <HeartHandshake size={28} />
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
                What We Believe
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                Core Values
              </h3>

              <div className="mt-5 space-y-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-50
                        text-xs
                        font-bold
                        text-emerald-600
                        dark:bg-emerald-400/10
                        dark:text-emerald-400
                      "
                    >
                      ✓
                    </span>

                    {value}
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