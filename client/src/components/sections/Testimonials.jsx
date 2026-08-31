import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section
      className="
        bg-gradient-to-b
        from-emerald-50
        via-white
        to-white
        pt-8
        pb-24

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}
        <div className="mt-2 text-center">

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            What Professionals Say
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-slate-600
              dark:text-slate-300
            "
          >
            Hear from professionals, mentors and learners who have experienced
            Pinaki's training and technical expertise.
          </p>

        </div>

        {/* ================= HORIZONTAL SLIDER ================= */}
        <div className="relative mt-20 overflow-hidden">

          <div className="animate-testimonial flex w-max gap-8">

            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="w-[320px] flex-shrink-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;