import {
  Rocket,
  GraduationCap,
  Building2,
  Code2,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    year: "2006 - 2010",
    title: "B.Tech Mechanical Engineering",
    description:
      "Completed B.Tech in Mechanical Engineering from Hindustan College of Science & Technology, Mathura, building a strong engineering and analytical foundation.",
    icon: GraduationCap,
  },
  {
    year: "2010 - 2014",
    title: "Tata Steel",
    description:
      "Started professional career with Tata Steel, gaining valuable industrial experience and exposure to large-scale operations.",
    icon: Building2,
  },
  {
    year: "2014 - 2015",
    title: "GlobalLogic",
    description:
      "Worked as a Data Analyst at GlobalLogic, developing expertise in data analytics, business intelligence, and technology-driven solutions.",
    icon: Code2,
  },
  {
    year: "2015",
    title: "Insignia Group",
    description:
      "Served as Manager at Insignia Group, leading teams and managing projects focused on organizational growth and performance.",
    icon: Building2,
  },
  {
    year: "2016 - 2017",
    title: "Master's in Data Science & Machine Learning",
    description:
      "Completed Master's studies in Data Science and Machine Learning from Northwestern University School of Professional Studies, Chicago, specializing in AI, ML, and Statistics.",
    icon: Trophy,
  },
  {
    year: "2017 - 2021",
    title: "Job at GOOGLE",
    description:
      "Associated with Google (Bangalore & Gurgaon) and Goa Institute of Management, contributing to technology training, analytics, and industry-academia collaboration.",
    icon: Rocket,
  },
];

const Timeline = () => {
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
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-teal-300/20 blur-[130px] dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
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
            <Rocket size={14} />
            Our Journey
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
            Milestones That{" "}
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
              Matter
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
            Every milestone reflects a journey of learning, leadership,
            technology and continuous growth.
          </p>
        </div>

        {/* ================= TREE TIMELINE ================= */}
        <div className="relative mt-14 sm:mt-16">
          {/* Tree trunk */}
          <div
            className="
              absolute
              bottom-6 left-5 top-6
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-emerald-300
              via-emerald-500
              to-teal-500
              shadow-[0_0_18px_rgba(16,185,129,0.25)]
              sm:left-7
              dark:from-emerald-500/60
              dark:via-emerald-400
              dark:to-teal-400/60
            "
          />

          <div className="space-y-7 sm:space-y-9">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="group relative pl-14 sm:pl-20"
                >
                  {/* Branch from tree trunk to card */}
                  <div
                    className="
                      absolute
                      left-5 top-9
                      h-[3px]
                      w-7
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-500
                      to-emerald-300
                      sm:left-7
                      sm:w-9
                      dark:from-emerald-400
                      dark:to-teal-400
                    "
                  />

                  {/* Tree node */}
                  <div
                    className="
                      absolute
                      left-0 top-2
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border-4
                      border-slate-50
                      bg-emerald-600
                      shadow-[0_0_0_5px_rgba(16,185,129,0.10),0_0_25px_rgba(16,185,129,0.25)]
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-emerald-500
                      sm:left-1
                      sm:h-13 sm:w-13
                      dark:border-slate-950
                      dark:bg-emerald-500
                      dark:shadow-[0_0_0_5px_rgba(16,185,129,0.08),0_0_30px_rgba(16,185,129,0.20)]
                    "
                  >
                    <Icon
                      size={20}
                      className="text-white sm:h-[22px] sm:w-[22px]"
                    />
                  </div>

                  {/* Milestone Card */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-emerald-300
                      hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]
                      sm:rounded-[28px]
                      sm:p-7
                      dark:border-slate-800
                      dark:bg-slate-900/80
                      dark:shadow-[0_15px_45px_rgba(0,0,0,0.20)]
                      dark:hover:border-emerald-500/40
                      dark:hover:shadow-[0_20px_55px_rgba(16,185,129,0.10)]
                    "
                  >
                    {/* Card glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-emerald-300/10
                        blur-3xl
                        transition-opacity
                        group-hover:opacity-100
                        dark:bg-emerald-400/10
                      "
                    />

                    {/* Top content */}
                    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span
                          className="
                            inline-flex
                            rounded-full
                            border border-emerald-200
                            bg-emerald-50
                            px-3 py-1
                            text-xs font-bold
                            tracking-wider
                            text-emerald-700
                            dark:border-emerald-400/20
                            dark:bg-emerald-400/10
                            dark:text-emerald-300
                          "
                        >
                          {item.year}
                        </span>

                        <h3
                          className="
                            mt-3
                            text-xl font-extrabold
                            leading-tight
                            text-slate-900
                            sm:text-2xl
                            dark:text-white
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Step number */}
                      <span
                        className="
                          hidden
                          text-4xl font-black
                          text-slate-100
                          sm:block
                          dark:text-slate-800
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p
                      className="
                        relative
                        mt-4
                        max-w-3xl
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        dark:text-slate-400
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className="
                        relative
                        mt-5
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-emerald-500/40
                        via-emerald-300/20
                        to-transparent
                        dark:from-emerald-400/40
                        dark:via-emerald-400/10
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tree ending */}
          <div
            className="
              absolute
              bottom-0 left-[11px]
              h-3 w-3
              rounded-full
              bg-teal-500
              shadow-[0_0_18px_rgba(20,184,166,0.45)]
              sm:left-[23px]
              dark:bg-teal-400
            "
          />
        </div>

        {/* Bottom statement */}
        <div
          className="
            mx-auto mt-12
            flex max-w-xl
            items-center justify-center gap-3
            text-center
            text-sm font-semibold
            text-slate-500
            dark:text-slate-400
          "
        >
          <span className="h-px w-8 bg-emerald-400/60" />
          From engineering to technology
          <span className="h-px w-8 bg-emerald-400/60" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;