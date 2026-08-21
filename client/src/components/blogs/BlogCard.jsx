import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <img
        src={blog.image}
        alt={blog.title}
        className="h-60 w-full object-cover"
      />

      {/* Content */}

      <div className="p-6">

        <span className="font-semibold text-emerald-600">
          {blog.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          {blog.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {blog.description}
        </p>

        <div className="mt-4 text-sm text-slate-500">
          {blog.date}
        </div>

        <Link
          to={`/blogs/${blog.slug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-bold
            text-emerald-600
            transition-all
            hover:gap-4
          "
        >
          Read More →
        </Link>

      </div>

    </div>
  );
};

export default BlogCard;