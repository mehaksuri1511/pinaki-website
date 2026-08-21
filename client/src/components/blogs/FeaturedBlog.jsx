import { CalendarDays, ArrowRight } from "lucide-react";
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
    slug: "ai-software-development",
  },
  {
    image: featured2,
    category: "Cloud Computing",
    title: "Why Every Developer Should Learn Cloud",
    description:
      "Cloud platforms like AWS, Azure and GCP are shaping modern software engineering.",
    date: "August 2026",
    slug: "cloud-computing",
  },
  {
    image: featured3,
    category: "Career",
    title: "Top Skills Companies Look For in 2026",
    description:
      "Master the technologies recruiters actually expect from software engineers.",
    date: "August 2026",
    slug: "top-skills-2026",
  },
];

const FeaturedBlog = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            FEATURED ARTICLES
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Editor's Picks
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Handpicked articles from our latest technology insights.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {featuredBlogs.map((blog, index) => (

            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
                border
                border-slate-200
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-7">

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                  {blog.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-slate-500">
                  <CalendarDays size={16} />
                  {blog.date}
                </div>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-emerald-600
                    hover:gap-4
                    transition-all
                  "
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedBlog;