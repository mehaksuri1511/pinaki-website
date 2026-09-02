import {
  GraduationCap,
  BriefcaseBusiness,
  Laptop2,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Oriented Training",
    description:
      "Practical learning designed to meet real-world industry standards.",
  },
  {
    icon: Laptop2,
    title: "Live Projects",
    description:
      "Gain hands-on experience by working on real development projects.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement Assistance",
    description:
      "Career guidance, resume building and interview preparation support.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description:
      "Learn directly from experienced professionals and industry experts.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Solutions",
    description:
      "Technology consulting and software development for organizations.",
  },
  {
    icon: Sparkles,
    title: "Future Ready",
    description:
      "AI, Cloud, Full Stack, DSA and emerging technologies under one roof.",
  },
];

const WhyChoose = () => {
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
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-300/15 blur-[130px] dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-300/15 blur-[130px] dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-emerald-200
              bg-emerald-50
              px-4 py-2
              text-xs font-bold uppercase tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-400/20
              dark:bg-emerald-400/10
              dark:text-emerald-300
            "
          >
            <Sparkles size={14} />
            Why Choose Pinaki
          </div>

          <h2
            className="
              mt-5
              text-4xl font-black tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Everything You Need
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
              To Succeed
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base leading-7
              text-slate-600
              sm:text-lg sm:leading-8
              dark:text-slate-400
            "
          >
            We combine quality education, practical experience and career
            guidance to help learners confidently step into the professional
            world.
          </p>
        </div>

        {/* ================= FEATURE GRID ================= */}
        <div
          className="
            mt-12
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            /*
              Layout:
              01 → 2 columns
              02 → 2 columns
              03 → 1 column
              04 → 1 column
              05 → 1 column
              06 → 2 columns

              This creates a more editorial / asymmetric layout
              without creating one oversized card.
            */

            const spanClass =
              index === 0 || index === 1 || index === 5
                ? "lg:col-span-2"
                : "lg:col-span-1";

            return (
              <div
                key={item.title}
                className={`
                  ${spanClass}
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-emerald-300
                  hover:bg-white
                  hover:shadow-[0_20px_50px_rgba(16,185,129,0.10)]
                  sm:p-7
                  dark:border-slate-800
                  dark:bg-slate-900/70
                  dark:hover:border-emerald-500/30
                  dark:hover:bg-slate-900
                  dark:hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]
                `}
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-300/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-emerald-300/20
                    dark:bg-emerald-400/5
                    dark:group-hover:bg-emerald-400/10
                  "
                />

                {/* Decorative number */}
                <span
                  className="
                    absolute
                    right-5
                    top-3
                    text-5xl
                    font-black
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-emerald-100
                    dark:text-slate-800
                    dark:group-hover:text-emerald-950
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-13
                      w-13
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-emerald-200
                      bg-emerald-50
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-emerald-600
                      dark:border-emerald-400/20
                      dark:bg-emerald-400/10
                      dark:group-hover:bg-emerald-500
                    "
                  >
                    <Icon
                      size={25}
                      className="
                        text-emerald-600
                        transition-colors
                        duration-300
                        group-hover:text-white
                        dark:text-emerald-400
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-5 max-w-xl">
                    <h3
                      className="
                        text-xl
                        font-extrabold
                        leading-tight
                        text-slate-900
                        sm:text-[22px]
                        dark:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-lg
                        text-sm
                        leading-7
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom action */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-emerald-600
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      dark:text-emerald-400
                    "
                  >
                    <span className="h-px w-6 bg-emerald-500" />

                    {index === 0
                      ? "Learn"
                      : index === 1
                      ? "Build"
                      : index === 2
                      ? "Grow"
                      : index === 3
                      ? "Mentor"
                      : index === 4
                      ? "Partner"
                      : "Future"}

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-emerald-500
                    to-teal-400
                    transition-all
                    duration-500
                    group-hover:w-full
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

export default WhyChoose;