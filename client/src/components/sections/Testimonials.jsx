import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="pt-8 pb-24 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mt-2">

          <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            What Professionals Say
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Hear from professionals, mentors and learners who have experienced
            Pinaki's training and technical expertise.
          </p>

        </div>

        {/* Horizontal Slider */}
        <div className="relative mt-20 overflow-hidden">

          <div className="animate-testimonial flex gap-8 w-max">

            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[320px] flex-shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;