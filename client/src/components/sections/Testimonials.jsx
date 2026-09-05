import { motion } from "framer-motion";

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

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-2 text-center"
        >
          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
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
              leading-8
              text-slate-600
              dark:text-slate-300
            "
          >
            Hear from professionals, mentors and learners who have
            experienced Pinaki's training and technical expertise.
          </p>
        </motion.div>

        {/* ================= HORIZONTAL SLIDER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 overflow-hidden"
        >
          <div className="animate-testimonial flex w-max gap-8">
            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: (index % testimonials.length) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    w-[320px]
                    flex-shrink-0
                  "
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;