import { Quote } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        flex
        h-[500px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-lg

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/30

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-emerald-400
        hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]
      "
    >

      {/* ================= QUOTE ICON ================= */}
      <div className="px-8 pt-8">

        <Quote
          size={46}
          strokeWidth={1.8}
          className="
            text-emerald-400
            dark:text-emerald-400
          "
        />

      </div>

      {/* ================= REVIEW ================= */}
      <div
        className="
          flex-1
          overflow-y-auto
          hide-scrollbar
          px-8
          py-4
        "
      >
        <p
          className="
            text-[17px]
            leading-9
            text-slate-600
            dark:text-slate-300
          "
        >
          {testimonial.review}
        </p>
      </div>

      {/* ================= FOOTER ================= */}
      <div
        className="
          border-t
          border-slate-200
          p-6

          dark:border-slate-700
        "
      >
        <div className="flex items-center justify-between">

          {/* ================= PERSON ================= */}
          <div className="flex items-center gap-4">

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="
                h-16
                w-16
                rounded-full
                border-2
                border-emerald-200
                object-cover
                shadow

                dark:border-emerald-700
              "
            />

            <div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {testimonial.name}
              </h3>

              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {testimonial.designation}
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                {testimonial.company}
              </p>

            </div>

          </div>

          {/* ================= LINKEDIN ================= */}
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${testimonial.name} LinkedIn`}
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full

              bg-emerald-50
              text-emerald-600

              dark:bg-emerald-900/30
              dark:text-emerald-400

              transition-all
              duration-300

              hover:bg-emerald-600
              hover:text-white
              hover:scale-110
            "
          >
            <FaLinkedinIn
              className="
                text-lg
                transition-all
                duration-300

                group-hover:text-white
              "
            />
          </a>

        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;