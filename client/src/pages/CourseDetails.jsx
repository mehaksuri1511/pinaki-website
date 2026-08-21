import { useParams } from "react-router-dom";
import courseData from "../data/courseData";

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courseData[slug];

  if (!course) {
    return (
      <div className="py-20 text-center">
        Course Not Found
      </div>
    );
  }

  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-600 to-green-500 py-24 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            {course.category}
          </span>

          <h1 className="mt-6 text-6xl font-black">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-emerald-50">
            {course.overview}
          </p>

          <div className="mt-8 flex gap-4">
            <span className="rounded-lg bg-white/20 px-4 py-2">
              Duration: {course.duration}
            </span>

            <span className="rounded-lg bg-white/20 px-4 py-2">
              Level: {course.level}
            </span>
          </div>

        </div>

      </section>

      {/* OVERVIEW */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black text-slate-900">
            What You'll Learn
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {course.skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl bg-emerald-50 p-5 border border-emerald-100"
              >
                ✓ {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TOOLS */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black">
            Tools Covered
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            {course.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white px-6 py-3 shadow"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CAREERS */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black">
            Career Opportunities
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {course.careers.map((career) => (
              <div
                key={career}
                className="rounded-2xl border p-6 shadow-sm"
              >
                {career}
              </div>
            ))}

          </div>

        </div>

      </section>
      {/* ABOUT */}

{course.detailedContent && (
  <>
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-slate-900 mb-8">
          About This Course
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          {course.detailedContent.about}
        </p>

      </div>
    </section>

    {/* HIGHLIGHTS */}

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black mb-10">
          Course Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {course.detailedContent.highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>
    </section>

    {/* APPLICATIONS */}

    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black mb-10">
          Real World Applications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {course.detailedContent.applications.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>

    {/* OUTCOME */}

    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          What Will You Achieve?
        </h2>

        <p className="text-xl leading-9 text-slate-600">
          {course.detailedContent.outcome}
        </p>

      </div>
    </section>
  </>
  
)}
{/* ABOUT */}

{course.detailedContent && (
  <>
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-slate-900 mb-8">
          About This Course
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          {course.detailedContent.about}
        </p>

      </div>
    </section>

    {/* HIGHLIGHTS */}

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black mb-10">
          Course Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {course.detailedContent.highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>
    </section>

    {/* APPLICATIONS */}

    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black mb-10">
          Real World Applications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {course.detailedContent.applications.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>

    {/* OUTCOME */}

    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          What Will You Achieve?
        </h2>

        <p className="text-xl leading-9 text-slate-600">
          {course.detailedContent.outcome}
        </p>

      </div>
    </section>
  </>
)}

     

    </div>
  );
};

export default CourseDetails;