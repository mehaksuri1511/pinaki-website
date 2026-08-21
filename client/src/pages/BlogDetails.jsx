import { useParams } from "react-router-dom";
import blogs from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="py-32 text-center text-5xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
    <div>

      {/* HERO SECTION */}

      <section className="relative h-[650px]">

        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto max-w-7xl px-8 lg:px-16 text-white">

            <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold">
              {blog.category}
            </span>

            <h1 className="mt-6 max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05]">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
              {blog.description}
            </p>

            <div className="mt-6 text-lg text-slate-300">
              📅 {blog.date} • ⏱️ {blog.read}
            </div>

          </div>

        </div>

      </section>

      {/* BLOG CONTENT */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          {/* Quote */}

          <div className="mb-16 rounded-3xl border-l-4 border-emerald-600 bg-emerald-50 p-10">

            <p className="text-2xl font-semibold italic text-slate-800">
              "The future belongs to professionals who continuously learn,
              adapt and innovate."
            </p>

          </div>

          {/* Stats */}

          <div className="mb-24 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-4xl font-black text-emerald-600">
                100%
              </h3>
              <p className="mt-2 text-slate-600">
                Industry Focused Learning
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-4xl font-black text-emerald-600">
                AI
              </h3>
              <p className="mt-2 text-slate-600">
                Powered Career Development
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-4xl font-black text-emerald-600">
                1:1
              </h3>
              <p className="mt-2 text-slate-600">
                Personalized Mentorship
              </p>
            </div>

          </div>

          {blog.sections?.map((section, index) => (
            <div key={index} className="mb-24">

              <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
                {section.heading}
              </h2>

              {section.content && (
                <p className="mt-8 max-w-6xl text-xl leading-[2.3rem] text-slate-600">
                  {section.content}
                </p>
              )}

              {section.points && (
                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  {section.points.map((point, i) => (
                    <div
                      key={i}
                      className="
                        rounded-3xl
                        border
                        border-emerald-100
                        bg-gradient-to-br
                        from-emerald-50
                        to-white
                        p-7
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-xl
                      "
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-bold">
                          ✓
                        </div>

                        <span className="text-lg font-semibold text-slate-800">
                          {point}
                        </span>

                      </div>

                    </div>
                  ))}

                </div>
              )}

              {(index + 1) % 3 === 0 && (
                <img
                  src={blog.image}
                  alt={section.heading}
                  className="
                    mt-16
                    h-[550px]
                    w-full
                    rounded-[32px]
                    object-cover
                    shadow-2xl
                  "
                />
              )}

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default BlogDetails;