import { ArrowDown } from "lucide-react";

import hero from "../../assets/images/blogHero.jpg"; // use any good tech image

const BlogsHero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* Background Image */}

      <img
        src={hero}
        alt="Blogs"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Pinaki Insights
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl">
            Explore The World Of
            <span className="block text-emerald-400">
              Technology
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-300">
            Discover articles on Artificial Intelligence,
            Cloud Computing, Full Stack Development,
            Career Growth, Industry Trends and the latest
            innovations shaping tomorrow.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("featured-blog")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Explore Blogs

            <ArrowDown size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default BlogsHero;