import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

function decodeHtml(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const BlogCard = ({ blog }) => {
  const title = decodeHtml(blog.title);
  const description = decodeHtml(blog.description);

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-sm
        shadow-slate-900/5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-200
        hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]
        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/20
        dark:hover:border-emerald-500/30
        dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.30)]
      "
    >
      {/* Image */}
      <Link
        to={`/blogs/${blog.slug}`}
        className="
          relative
          block
          h-56
          overflow-hidden
          bg-slate-100
          sm:h-60
          dark:bg-slate-800
        "
      >
        <img
          src={blog.image}
          alt={title}
          loading="lazy"
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

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/55
            via-transparent
            to-transparent
            opacity-70
            transition-opacity
            duration-300
            group-hover:opacity-90
          "
        />

        {/* Category */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-slate-950/45
            px-3.5
            py-1.5
            text-[11px]
            font-bold
            uppercase
            tracking-wider
            text-white
            shadow-lg
            backdrop-blur-md
          "
        >
          {blog.category}
        </span>

        {/* Arrow */}
        <span
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/30
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={18} />
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Metadata */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            text-xs
            font-medium
            text-slate-500
            dark:text-slate-500
          "
        >
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            {blog.date}
          </span>

          {blog.read && (
            <>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={14} />
                {blog.read}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <Link to={`/blogs/${blog.slug}`}>
          <h3
            className="
              mt-4
              line-clamp-2
              text-xl
              font-extrabold
              leading-[1.25]
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-emerald-600
              sm:text-[22px]
              dark:text-white
              dark:group-hover:text-emerald-400
            "
          >
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {description}
        </p>

        {/* Bottom action */}
        <div className="mt-auto pt-6">
          <div
            className="
              mb-5
              h-px
              w-full
              bg-slate-100
              dark:bg-slate-800
            "
          />

          <Link
            to={`/blogs/${blog.slug}`}
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-emerald-600
              transition-all
              duration-300
              dark:text-emerald-400
            "
          >
            Read article

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-emerald-500
          via-green-500
          to-teal-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
};

export default BlogCard;