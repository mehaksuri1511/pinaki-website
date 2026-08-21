import { Quote } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
      h-[500px]
      rounded-[30px]
      bg-white
      border
      border-slate-200
      shadow-lg
      hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]
      hover:-translate-y-2
      transition-all
      duration-500
      flex
      flex-col
      overflow-hidden
      "
    >
      {/* Quote Icon */}
      <div className="px-8 pt-8">
        <Quote
          size={46}
          strokeWidth={1.8}
          className="text-emerald-400"
        />
      </div>

      {/* Review */}
      <div
        className="
        flex-1
        overflow-y-auto
        hide-scrollbar
        px-8
        py-4
        "
      >
        <p className="text-[17px] leading-9 text-slate-600">
          {testimonial.review}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="
              w-16
              h-16
              rounded-full
              object-cover
              border-2
              border-emerald-200
              shadow
              "
            />

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                {testimonial.name}
              </h3>

              <p className="text-slate-500 text-sm">
                {testimonial.designation}
              </p>

              <p className="text-emerald-600 font-semibold text-sm mt-1">
                {testimonial.company}
              </p>

            </div>

          </div>

          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
            w-12
            h-12
            rounded-full
            bg-emerald-50
            flex
            items-center
            justify-center
            hover:bg-emerald-600
            hover:text-white
            transition-all
            duration-300
            group
            "
          >
            <FaLinkedinIn
              className="
              text-emerald-600
              group-hover:text-white
              transition-all
              duration-300
              text-lg
              "
            />
          </a>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;