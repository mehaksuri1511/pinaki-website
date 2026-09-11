import {
  Rocket,
  GraduationCap,
  Building2,
  Code2,
  Trophy,
  Globe,
  Users,
} from "lucide-react";

import SectionWatermark from "../common/SectionWatermark";

const timeline = [
  {
    year: "2006 - 2010",
    title: "B.Tech Mechanical Engineering",
    description:
      "Completed B.Tech in Mechanical Engineering from Hindustan College of Science & Technology, Mathura.",
    icon: GraduationCap,
  },
  {
    year: "2010 - 2014",
    title: "Tata Steel",
    description:
      "Started professional career with Tata Steel, gaining valuable industrial experience.",
    icon: Building2,
  },
  {
    year: "2014 - 2015",
    title: "GlobalLogic",
    description:
      "Worked as a Data Analyst, developing expertise in analytics and business intelligence.",
    icon: Code2,
  },
  {
    year: "2015",
    title: "Insignia Group",
    description:
      "Served as Manager, leading teams and organizational growth initiatives.",
    icon: Building2,
  },
  {
    year: "2016 - 2017",
    title: "Master's in Data Science & ML",
    description:
      "Completed Master's studies in Data Science & Machine Learning from Northwestern University.",
    icon: Trophy,
  },
  {
    year: "2017 - 2021",
    title: "Google & Goa Institute of Management",
    description:
      "Contributed to analytics, technology training and industry-academia collaboration.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Hindu College Training Program",
    description:
      "Conducted advanced training programs and workshops.",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "IIT Jammu Faculty Training",
    description:
      "Delivered specialized technical training sessions.",
    icon: Trophy,
  },
  {
    year: "2020",
    title: "AKTU & Jamia Millia Islamia",
    description:
      "Conducted AI, Statistics and Data Science workshops.",
    icon: Users,
  },
  {
    year: "2021",
    title: "International Faculty Training",
    description:
      "Trained professors and researchers from USA, Ethiopia and Singapore.",
    icon: Globe,
  },
  {
    year: "2021",
    title: "Founded Pinaki IT Consultant",
    description:
      "Started Pinaki IT Consultant to bridge industry and education.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Cambridge University Recognition",
    description:
      "Expanded international academic collaborations.",
    icon: Trophy,
  },
];

const Timeline = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">

      <SectionWatermark
        icons={[
          "GraduationCap",
          "Building2",
          "Code2",
          "BriefcaseBusiness",
          "Trophy",
          "Rocket",
          "Milestone",
          "Award",
          "Target",
        ]}
        intensity="strong"
      />

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Rocket size={14} />
            Our Journey
          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-900 dark:text-white">
            Milestones That{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Matter
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Every milestone reflects a journey of learning, leadership,
            technology and continuous growth.
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative mt-20">

          {/* Line */}
          <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

          <div className="flex gap-8 overflow-x-auto pb-10 scrollbar">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative min-w-[340px] flex-shrink-0 pt-20"
                >

                  {/* Node */}
                  <div className="absolute left-1/2 top-2 z-20 -translate-x-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,.35)]">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900">

                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-6 text-right">
                      <span className="text-5xl font-black text-slate-100 dark:text-slate-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
          From Engineering → Analytics → AI → Global Impact
        </div>

      </div>
    </section>
  );
};

export default Timeline;