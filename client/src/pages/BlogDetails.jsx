import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Sparkles,
} from "lucide-react";

import blogs from "../data/allBlogs";

const decodeHtml = (text) => {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 pb-20 pt-32 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
            <Sparkles size={26} />
          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-950 dark:text-white">
            Blog Not Found
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            The article you're looking for doesn't exist or may have been
            moved.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <ArrowLeft size={17} />
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden bg-white transition-colors duration-500 dark:bg-slate-950">
      {/* =========================================================
          ARTICLE HERO
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-slate-50
          pt-24
          transition-colors
          duration-500
          dark:bg-slate-950
        "
      >
        {/* Background image */}
        <img
          src={blog.image}
          alt={decodeHtml(blog.title)}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-20
            transition-opacity
            duration-500
            dark:opacity-40
          "
        />

        {/* Main overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-white/95
            via-white/90
            to-slate-50
            dark:from-slate-950/95
            dark:via-slate-950/80
            dark:to-slate-950
          "
        />

        {/* Side gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white
            via-transparent
            to-white/90
            dark:from-slate-950
            dark:via-transparent
            dark:to-slate-950/80
          "
        />

        {/* Emerald glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-1/4
            h-[420px]
            w-[420px]
            rounded-full
            bg-emerald-400/15
            blur-[130px]
            dark:bg-emerald-500/15
          "
        />

        {/* Teal glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-teal-300/20
            blur-[130px]
            dark:bg-teal-500/10
          "
        />

        {/* Grid texture */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)]
            [background-size:70px_70px]
            dark:[background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          {/* Back */}
          <Link
            to="/blogs"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/70
              px-4
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-emerald-300
              hover:bg-emerald-50
              hover:text-emerald-700
              dark:border-white/10
              dark:bg-white/5
              dark:text-slate-300
              dark:hover:border-emerald-400/30
              dark:hover:bg-emerald-400/10
              dark:hover:text-white
            "
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Insights
          </Link>

          {/* Content */}
          <div className="mt-12 max-w-5xl">
            {/* Category */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-200
                bg-emerald-50/80
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-emerald-700
                backdrop-blur-md
                dark:border-emerald-400/20
                dark:bg-emerald-400/10
                dark:text-emerald-300
              "
            >
              <Sparkles size={14} />
              {blog.category}
            </div>

            {/* Title */}
            <h1
              className="
                mt-7
                max-w-5xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-950
                transition-colors
                duration-500
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[5rem]
                dark:text-white
              "
            >
              {decodeHtml(blog.title)}
            </h1>

            {/* Description */}
            {blog.description && (
              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  transition-colors
                  duration-500
                  sm:text-lg
                  sm:leading-8
                  lg:text-xl
                  dark:text-slate-300
                "
              >
                {decodeHtml(blog.description)}
              </p>
            )}

            {/* Meta */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-sm
                text-slate-600
                dark:text-slate-300
              "
            >
              {blog.date && (
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  <span>{blog.date}</span>
                </div>
              )}

              {blog.date && blog.read && (
                <span
                  className="
                    hidden
                    h-1
                    w-1
                    rounded-full
                    bg-slate-400
                    dark:bg-slate-500
                    sm:block
                  "
                />
              )}

              {blog.read && (
                <div className="flex items-center gap-2">
                  <Clock3
                    size={17}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  <span>{blog.read}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-20
            bg-gradient-to-t
            from-slate-50
            to-transparent
            dark:from-slate-950
          "
        />
      </section>

      {/* =========================================================
          FEATURE IMAGE
      ========================================================= */}
      <section className="relative -mt-8 px-5 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 blur-2xl" />

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-slate-100
              p-2
              shadow-2xl
              shadow-slate-900/10
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/30
            "
          >
            <img
              src={blog.image}
              alt={decodeHtml(blog.title)}
              className="
                h-[280px]
                w-full
                rounded-[22px]
                object-cover
                sm:h-[400px]
                lg:h-[520px]
              "
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
      ========================================================= */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-[120px] dark:bg-emerald-500/5" />

        <div className="relative mx-auto max-w-6xl">
          {blog.htmlContent ? (
            <article
              className="
                wp-content
                mx-auto
                max-w-4xl
                text-[17px]
                leading-8
                text-slate-700
                dark:text-slate-300

                [&_h1]:mb-8
                [&_h1]:mt-14
                [&_h1]:text-4xl
                [&_h1]:font-black
                [&_h1]:leading-tight
                [&_h1]:text-slate-950
                dark:[&_h1]:text-white

                [&_h2]:mb-5
                [&_h2]:mt-14
                [&_h2]:text-3xl
                [&_h2]:font-black
                [&_h2]:leading-tight
                [&_h2]:text-slate-950
                dark:[&_h2]:text-white

                [&_h3]:mb-4
                [&_h3]:mt-10
                [&_h3]:text-2xl
                [&_h3]:font-extrabold
                [&_h3]:text-slate-900
                dark:[&_h3]:text-slate-100

                [&_h4]:mb-3
                [&_h4]:mt-8
                [&_h4]:text-xl
                [&_h4]:font-bold
                [&_h4]:text-slate-900
                dark:[&_h4]:text-slate-100

                [&_p]:mb-6
                [&_p]:leading-[1.95]

                [&_strong]:font-bold
                [&_strong]:text-slate-900
                dark:[&_strong]:text-white

                [&_ul]:my-7
                [&_ul]:space-y-3
                [&_ul]:pl-6
                [&_ul]:list-disc

                [&_ol]:my-7
                [&_ol]:space-y-3
                [&_ol]:pl-6
                [&_ol]:list-decimal

                [&_li]:pl-2
                [&_li]:leading-8

                [&_a]:font-semibold
                [&_a]:text-emerald-600
                [&_a]:underline
                [&_a]:underline-offset-4
                [&_a]:transition-colors
                hover:[&_a]:text-teal-500
                dark:[&_a]:text-emerald-400

                [&_blockquote]:my-10
                [&_blockquote]:rounded-3xl
                [&_blockquote]:border-l-4
                [&_blockquote]:border-emerald-500
                [&_blockquote]:bg-emerald-50
                [&_blockquote]:px-7
                [&_blockquote]:py-6
                [&_blockquote]:text-xl
                [&_blockquote]:font-semibold
                [&_blockquote]:italic
                [&_blockquote]:text-slate-800
                dark:[&_blockquote]:bg-emerald-950/30
                dark:[&_blockquote]:text-slate-200

                [&_img]:my-10
                [&_img]:max-h-[600px]
                [&_img]:w-full
                [&_img]:rounded-3xl
                [&_img]:object-cover
                [&_img]:shadow-xl

                [&_table]:my-10
                [&_table]:w-full
                [&_table]:overflow-hidden
                [&_table]:rounded-2xl
                [&_table]:border
                [&_table]:border-slate-200
                dark:[&_table]:border-slate-800

                [&_th]:bg-slate-100
                [&_th]:px-4
                [&_th]:py-3
                [&_th]:text-left
                [&_th]:font-bold
                [&_th]:text-slate-900
                dark:[&_th]:bg-slate-900
                dark:[&_th]:text-white

                [&_td]:border-t
                [&_td]:border-slate-200
                [&_td]:px-4
                [&_td]:py-3
                dark:[&_td]:border-slate-800
              "
              dangerouslySetInnerHTML={{ __html: blog.htmlContent }}
            />
          ) : (
            <article className="mx-auto max-w-5xl">
              {/* =====================================================
                  FALLBACK QUOTE
              ===================================================== */}
              <div
                className="
                  relative
                  mb-16
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-emerald-200
                  bg-gradient-to-br
                  from-emerald-50
                  via-white
                  to-teal-50
                  p-8
                  shadow-sm
                  dark:border-emerald-500/20
                  dark:from-emerald-950/40
                  dark:via-slate-900
                  dark:to-teal-950/20
                "
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                    <Sparkles size={20} />
                  </div>

                  <p className="max-w-4xl text-xl font-semibold leading-8 text-slate-800 dark:text-slate-200 sm:text-2xl sm:leading-9">
                    "The future belongs to professionals who continuously
                    learn, adapt and innovate."
                  </p>
                </div>
              </div>

              {/* =====================================================
                  STATS
              ===================================================== */}
              <div className="mb-20 grid gap-4 sm:grid-cols-3">
                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-300
                    dark:border-slate-800
                    dark:bg-slate-900/70
                    dark:hover:border-emerald-500/30
                  "
                >
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    100%
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Industry Focused Learning
                  </p>
                </div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-300
                    dark:border-slate-800
                    dark:bg-slate-900/70
                    dark:hover:border-emerald-500/30
                  "
                >
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    AI
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Powered Career Development
                  </p>
                </div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-300
                    dark:border-slate-800
                    dark:bg-slate-900/70
                    dark:hover:border-emerald-500/30
                  "
                >
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    1:1
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Personalized Mentorship
                  </p>
                </div>
              </div>

              {/* =====================================================
                  SECTIONS
              ===================================================== */}
              <div>
                {blog.sections?.map((section, index) => (
                  <div key={index} className="mb-20">
                    <div className="mb-7 flex items-start gap-4">
                      <span
                        className="
                          mt-1
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-emerald-50
                          text-sm
                          font-black
                          text-emerald-600
                          dark:bg-emerald-400/10
                          dark:text-emerald-400
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
                        {section.heading}
                      </h2>
                    </div>

                    {section.content && (
                      <p className="max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl sm:leading-9">
                        {section.content}
                      </p>
                    )}

                    {section.points && (
                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {section.points.map((point, i) => (
                          <div
                            key={i}
                            className="
                              group
                              rounded-2xl
                              border
                              border-slate-200
                              bg-slate-50/80
                              p-5
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:border-emerald-300
                              hover:bg-emerald-50
                              hover:shadow-lg
                              dark:border-slate-800
                              dark:bg-slate-900/60
                              dark:hover:border-emerald-500/30
                              dark:hover:bg-emerald-950/20
                            "
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-emerald-600
                                  text-white
                                  shadow-md
                                  shadow-emerald-600/20
                                "
                              >
                                <Check size={18} strokeWidth={3} />
                              </div>

                              <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                                {point}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section image */}
                    {(index + 1) % 3 === 0 && (
                      <div className="relative mt-12">
                        <div className="absolute -inset-3 rounded-[32px] bg-emerald-400/10 blur-2xl" />

                        <img
                          src={blog.image}
                          alt={section.heading}
                          className="
                            relative
                            h-[280px]
                            w-full
                            rounded-[28px]
                            border
                            border-slate-200
                            object-cover
                            shadow-xl
                            dark:border-slate-800
                            sm:h-[420px]
                            lg:h-[500px]
                          "
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[30px]
            border
            border-emerald-200
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-teal-50
            px-7
            py-10
            sm:px-10
            sm:py-12
            dark:border-emerald-500/20
            dark:from-emerald-950/40
            dark:via-slate-900
            dark:to-teal-950/30
          "
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/15 blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <Sparkles size={14} />
                Pinaki Insights
              </div>

              <h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                Explore more technology insights.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Discover more articles on technology, careers, innovation and
                the future of IT.
              </p>
            </div>

            <Link
              to="/blogs"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-emerald-600
                to-teal-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-emerald-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              All Insights

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;