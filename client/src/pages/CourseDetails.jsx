import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import courseData, { courseAliases } from "../data/courseData";
import EnrollmentModal from "../components/courses/EnrollmentModal";

const CourseDetails = () => {
  const { slug } = useParams();
  const aliased = courseAliases[slug];

  if (aliased) {
    return <Navigate to={`/courses/${aliased}`} replace />;
  }

  const course = courseData[slug];
  const [isOpen, setIsOpen] = useState(false);

  if (!course) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-black">Course not found</h1>
        <Link to="/courses" className="mt-6 inline-block font-bold text-emerald-600">
          Back to courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[520px] md:h-[650px]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-8 text-white lg:px-16">
            <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold">
              {course.category}
            </span>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] md:text-7xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
              {course.overview}
            </p>
            <p className="mt-6 text-lg text-slate-300">
              {course.duration} · {course.level}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white hover:bg-emerald-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          {course.intro?.length ? (
            <div className="max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
              {course.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {course.photos?.length ? (
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-52 w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold text-slate-700">
                    {photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}

          {course.highlights?.length ? (
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {course.highlights.map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-50 p-8">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          ) : null}

          {course.modules?.length ? (
            <div className="mt-20">
              <h2 className="text-3xl font-black text-slate-900">Curriculum</h2>
              <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200">
                {course.modules.map((module, index) => (
                  <details key={module.title} className="group bg-white" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-lg font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                      {module.title}
                      <span className="text-slate-400 transition group-open:rotate-45">+</span>
                    </summary>
                    <ul className="space-y-2 px-6 pb-6 text-slate-600">
                      {module.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          ) : null}

          {course.logos?.length ? (
            <div className="mt-20">
              <h2 className="text-3xl font-black text-slate-900">Hiring partners</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Alumni from these programmes have gone on to roles at companies like these.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-8">
                {course.logos.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-9 w-auto object-contain opacity-80 grayscale"
                  />
                ))}
              </div>
            </div>
          ) : null}

          <button
            onClick={() => setIsOpen(true)}
            className="mt-16 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700"
          >
            Enroll in {course.title}
          </button>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCourse={course.title}
      />
    </div>
  );
};

export default CourseDetails;
