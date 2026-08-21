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
      " Completed B.Tech in Mechanical Engineering from Hindustan College of Science & Technology, Mathura, building a strong engineering and analytical foundation.",
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
    icon: GraduationCap,
  },
  {
    year: "2016 – 2017",
    title: "Master's in Data Science & Machine Learning",
    description:
      "Completed Master's studies in Data Science and Machine Learning from Northwestern University School of Professional Studies, Chicago, specializing in AI, ML, and Statistics.",
    icon: Trophy,
  },
  {
    year: "2017 – 2021",
    title: "Job at GOOGLE",
    description:
      "Associated with Google (Bangalore & Gurgaon) and Goa Institute of Management, contributing to technology training, analytics, and industry-academia collaboration.",
    icon: Trophy,
  },
  {
    year: "2016 – 2017",
    title: "Master's in Data Science & Machine Learning",
    description:
      "Completed Master's studies in Data Science and Machine Learning from Northwestern University School of Professional Studies, Chicago, specializing in AI, ML, and Statistics.",
    icon: Trophy,
  },
  {
    year: "2016 – 2017",
    title: "Master's in Data Science & Machine Learning",
    description:
      "Completed Master's studies in Data Science and Machine Learning from Northwestern University School of Professional Studies, Chicago, specializing in AI, ML, and Statistics.",
    icon: Trophy,
  },
];

const Timeline = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Milestones That
            <span className="text-emerald-600"> Matter</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Every milestone reflects our commitment to innovation,
            quality education and empowering future professionals.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-16">

          {/* Center Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-emerald-200 lg:block" />

          <div className="space-y-20">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >

                  {/* Card */}

                  <div className="w-full lg:w-1/2">

                    <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                      <div className="flex items-center gap-4">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                          <Icon
                            className="text-emerald-600"
                            size={30}
                          />
                        </div>

                        <div>

                          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                            {item.year}
                          </span>

                          <h3 className="mt-1 text-2xl font-bold text-slate-900">
                            {item.title}
                          </h3>

                        </div>

                      </div>

                      <p className="mt-6 leading-8 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  {/* Timeline Dot */}

                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 ring-8 ring-emerald-100">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Timeline;