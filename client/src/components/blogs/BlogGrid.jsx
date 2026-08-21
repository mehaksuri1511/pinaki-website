import blogs from "../../data/blogData";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-16">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogGrid;