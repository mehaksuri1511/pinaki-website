import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

import featured1 from "../../assets/images/featured-blog.png";
import featured2 from "../../assets/images/blog3.jpg";
import featured3 from "../../assets/images/blog4.jpg";

const featuredBlogs = [
  {
    image: featured1,
    category: "Artificial Intelligence",
    title: "How AI is Transforming Software Development",
    description:
      "Discover how Artificial Intelligence is changing coding, testing and deployment.",
    date: "August 2026",
    read: "6 min read",
    slug: "ai-software-development",
  },
];

const FeaturedBlog = () => {
  const [mainBlog, ...sideBlogs] = featuredBlogs;

  return (
    <section
      id="featured-blog"
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
      {/* Ambient lights */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-emerald-300/15
          blur-[130px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-teal-300/15
          blur-[130px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
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
                uppercase
                tracking-[0.18em]
                text-emerald-700
                dark:border-emerald-400/20
                dark:bg-emerald-400/10
                dark:text-emerald-300
              "
            >
              <Sparkles size={14} />
              Editor's Picks
            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              Stories Worth
              <span
                className="
                  block
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
                Reading.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
                dark:text-slate-400
              "
            >
              Handpicked insights covering the technologies, skills and ideas
              shaping the next generation of digital professionals.
            </p>
          </div>

          <Link
            to="/blogs"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-5
              py-3
              text-sm
              font-bold
              text-slate-700
              transition-all
              duration-300
              hover:border-emerald-300
              hover:bg-emerald-50
              hover:text-emerald-700
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:border-emerald-500/30
              dark:hover:bg-emerald-950/30
              dark:hover:text-emerald-400
            "
          >
            View all insights

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Editorial layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Main featured article */}
          <article
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-slate-100
              shadow-xl
              shadow-slate-900/5
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
            "
          >
            <div className="relative h-[360px] overflow-hidden sm:h-[430px] lg:h-full lg:min-h-[560px]">
              <img
                src={mainBlog.image}
                alt={mainBlog.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-slate-950/35
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  backdrop-blur-md
                  sm:left-7
                  sm:top-7
                "
              >
                Featured Story
              </div>

              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-emerald-500
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    shadow-emerald-500/20
                  "
                >
                  {mainBlog.category}
                </span>

                <h3
                  className="
                    mt-4
                    max-w-3xl
                    text-3xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {mainBlog.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-6
                    text-slate-200
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {mainBlog.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-medium text-slate-300">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} />
                    {mainBlog.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} />
                    {mainBlog.read}
                  </span>
                </div>

                <Link
                  to={`/blogs/${mainBlog.slug}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-emerald-400
                    hover:text-white
                  "
                >
                  Read Featured Story
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </article>

          {/* Supporting articles */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {sideBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="
                  group
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                  shadow-slate-900/5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-emerald-200
                  hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:shadow-black/20
                  dark:hover:border-emerald-500/30
                "
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/65
                      via-transparent
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-black/35
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3
                    className="
                      text-xl
                      font-extrabold
                      leading-tight
                      text-slate-900
                      transition-colors
                      group-hover:text-emerald-600
                      dark:text-white
                      dark:group-hover:text-emerald-400
                    "
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {blog.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      <CalendarDays size={14} />
                      {blog.date}
                    </div>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        font-bold
                        text-emerald-600
                        transition-all
                        hover:gap-2.5
                        dark:text-emerald-400
                      "
                    >
                      Read
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;