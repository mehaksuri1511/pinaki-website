import { ArrowRight } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-teal-700">

      {/* Background Glow */}

      <div className="absolute -left-44 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[180px]" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 backdrop-blur-md">
          Our Services
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Building Digital
          <br />

          <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
            Solutions That Matter
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">
          From software development and cloud solutions to
          AI, corporate training and internships,
          Pinaki IT empowers businesses and students
          with cutting-edge technology.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600 hover:-translate-y-1">
            Explore Services
          </button>

          <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            Contact Us
          </button>

        </div>

        {/* Floating Tags */}

        <div className="mt-20 flex flex-wrap justify-center gap-4">

          {[
            "Software Development",
            "Web Development",
            "Cloud Computing",
            "AI & ML",
            "Corporate Training",
            "Internships",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CoursesHero;