import {
  Search,
  ClipboardList,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We understand your goals, requirements and business challenges.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "Our experts prepare a roadmap, technology stack and project timeline.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "We build scalable, secure and modern digital solutions using the latest technologies.",
  },
  {
    icon: Bug,
    title: "Testing",
    description:
      "Every project undergoes extensive testing to ensure quality and reliability.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "After successful testing, we deploy and provide continuous support.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            How We Deliver
            <span className="text-emerald-600"> Excellence</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every project follows a proven workflow that ensures quality,
            transparency and timely delivery.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 rounded-full bg-emerald-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {process.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={index}
                  className="relative text-center group"
                >

                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:bg-emerald-600">

                    <Icon
                      size={36}
                      className="text-emerald-600 transition duration-500 group-hover:text-white"
                    />

                  </div>

                  {/* Step Number */}

                  <div className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-600">
                    Step {index + 1}
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;