import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "5000+",
    title: "Students Trained",
  },
  {
    icon: BriefcaseBusiness,
    number: "200+",
    title: "Projects Delivered",
  },
  {
    icon: Building2,
    number: "100+",
    title: "Corporate Clients",
  },
  {
    icon: Trophy,
    number: "16+",
    title: "Years of Excellence",
  },
];

const Achievements = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-emerald-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-5 py-2 font-semibold">
            OUR IMPACT
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Numbers That Speak
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Our journey is reflected in the success stories of our learners,
            partners and projects delivered across industries.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                rounded-[30px]
                bg-white
                border
                border-emerald-100
                shadow-lg
                p-10
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100">

                  <Icon
                    size={36}
                    className="text-emerald-600"
                  />

                </div>

                <h2 className="mt-8 text-5xl font-black text-emerald-600">
                  {item.number}
                </h2>

                <p className="mt-4 text-lg text-slate-600">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Achievements;