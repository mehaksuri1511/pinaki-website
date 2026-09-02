import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "5000+",
    title: "Students Trained",
    description: "Learners equipped with practical industry skills.",
  },
  {
    icon: BriefcaseBusiness,
    number: "200+",
    title: "Projects Delivered",
    description: "Real-world solutions built across diverse domains.",
  },
  {
    icon: Building2,
    number: "100+",
    title: "Corporate Clients",
    description: "Organizations supported through technology solutions.",
  },
  {
    icon: Trophy,
    number: "16+",
    title: "Years of Excellence",
    description: "A journey built on learning, innovation and trust.",
  },
];

const Achievements = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-20
        sm:py-24
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
              tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-500/20
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
                shadow-[0_0_12px_rgba(16,185,129,0.8)]
              "
            />

            OUR IMPACT
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-5xl
              dark:text-white
            "
          >
            Numbers That{" "}
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
              Speak
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            Our journey is reflected in the success stories of our learners,
            partners and projects delivered across industries.
          </p>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:mt-14
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-emerald-300
                  hover:shadow-xl
                  hover:shadow-emerald-500/10
                  dark:border-slate-800
                  dark:bg-slate-900/80
                  dark:hover:border-emerald-500/40
                  dark:hover:shadow-emerald-500/5
                "
              >
                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-emerald-400/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-emerald-400/20
                    dark:bg-emerald-500/5
                    dark:group-hover:bg-emerald-500/10
                  "
                />

                {/* Top Row */}

                <div className="relative flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-emerald-50
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-emerald-600
                      dark:border-emerald-500/20
                      dark:bg-emerald-500/10
                      dark:group-hover:bg-emerald-500
                    "
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      className="
                        text-emerald-600
                        transition-colors
                        duration-500
                        group-hover:text-white
                        dark:text-emerald-400
                        dark:group-hover:text-white
                      "
                    />
                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-400
                      transition-all
                      duration-500
                      group-hover:border-emerald-300
                      group-hover:bg-emerald-50
                      group-hover:text-emerald-600
                      dark:border-slate-700
                      dark:text-slate-500
                      dark:group-hover:border-emerald-500/40
                      dark:group-hover:bg-emerald-500/10
                      dark:group-hover:text-emerald-400
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Number */}

                <div className="relative mt-7">
                  <h3
                    className="
                      text-4xl
                      font-black
                      tracking-tight
                      text-slate-950
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      sm:text-5xl
                      dark:text-white
                    "
                  >
                    {item.number}
                  </h3>
                </div>

                {/* Title */}

                <h4
                  className="
                    relative
                    mt-3
                    text-lg
                    font-bold
                    text-slate-900
                    dark:text-slate-100
                  "
                >
                  {item.title}
                </h4>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-emerald-500
                    to-teal-400
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;