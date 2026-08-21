import {
  GraduationCap,
  BriefcaseBusiness,
  Laptop2,
  Users,
  ShieldCheck,
  Sparkles,
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
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-5 py-2 font-semibold">
            WHY CHOOSE PINAKI
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything You Need
            <span className="text-emerald-600"> To Succeed</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            We combine quality education, practical experience and career
            guidance to help learners confidently step into the professional
            world.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                group
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-emerald-500
                hover:shadow-2xl
                "
              >

                <div
                  className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:bg-emerald-600
                  "
                >

                  <Icon
                    size={30}
                    className="text-emerald-600 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;