import { useMemo, useState } from "react";
import { BookOpen, Search, Sparkles, ArrowRight } from "lucide-react";

import blogs from "../../data/allBlogs";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs
          .map((blog) => blog.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const matchesSearch =
        !query ||
        String(blog.title || "")
          .toLowerCase()
          .includes(query) ||
        String(blog.description || "")
          .toLowerCase()
          .includes(query) ||
        String(blog.category || "")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

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
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-32
          h-96
          w-96
          rounded-full
          bg-emerald-300/10
          blur-[130px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-teal-300/10
          blur-[130px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-200
                bg-white
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-emerald-700
                shadow-sm
                dark:border-emerald-400/20
                dark:bg-slate-900
                dark:text-emerald-300
              "
            >
              <BookOpen size={14} />
              Knowledge Hub
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
              Explore Our
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
                Latest Thinking.
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
              Stay ahead with practical technology insights, career advice,
              development guides and perspectives from the rapidly evolving
              digital world.
            </p>
          </div>

          {/* Article count */}
          <div
            className="
              flex
              w-fit
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-4
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
                dark:bg-emerald-400/10
                dark:text-emerald-400
              "
            >
              <Sparkles size={19} />
            </div>

            <div>
              <p
                className="
                  text-lg
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                {blogs.length}+
              </p>

              <p
                className="
                  text-xs
                  font-medium
                  text-slate-500
                  dark:text-slate-500
                "
              >
                Insights to explore
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-[26px]
            border
            border-slate-200
            bg-white/80
            p-4
            shadow-sm
            backdrop-blur-sm
            sm:p-5
            lg:flex-row
            lg:items-center
            lg:justify-between
            dark:border-slate-800
            dark:bg-slate-900/70
          "
        >
          {/* Categories */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <Search
              size={17}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles..."
              className="
                w-full
                rounded-full
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                text-sm
                font-medium
                text-slate-800
                outline-none
                transition-all
                placeholder:text-slate-400
                focus:border-emerald-400
                focus:bg-white
                focus:ring-4
                focus:ring-emerald-500/10
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
                dark:focus:border-emerald-500
                dark:focus:bg-slate-800
              "
            />
          </div>
        </div>

        {/* Result info */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <p
            className="
              text-sm
              font-semibold
              text-slate-500
              dark:text-slate-500
            "
          >
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"} found
          </p>

          {(activeCategory !== "All" || search) && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                text-emerald-600
                transition-colors
                hover:text-emerald-700
                dark:text-emerald-400
                dark:hover:text-emerald-300
              "
            >
              Clear filters
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {/* Blog cards */}
        {filteredBlogs.length > 0 ? (
          <div
            className="
              mt-7
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id || blog.slug}
                blog={blog}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              mt-7
              rounded-[30px]
              border
              border-dashed
              border-slate-300
              bg-white
              px-6
              py-20
              text-center
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-emerald-50
                text-emerald-600
                dark:bg-emerald-400/10
                dark:text-emerald-400
              "
            >
              <Search size={23} />
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              No articles found
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Try another keyword or select a different category to discover
              more insights.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;