import { Quote, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        group
        relative
        flex
        h-[500px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-[0_24px_60px_rgba(16,185,129,0.16)]
        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/30
        dark:hover:border-emerald-500/40
        dark:hover:shadow-[0_24px_60px_rgba(16,185,129,0.10)]
      "
    >
      {/* ================= TOP GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-emerald-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-emerald-400/20
          dark:bg-emerald-500/5
          dark:group-hover:bg-emerald-500/10
        "
      />

      {/* ================= QUOTE ICON ================= */}

      <div className="relative px-8 pt-8">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-emerald-50
            text-emerald-500
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:bg-emerald-100
            dark:bg-emerald-950/60
            dark:text-emerald-400
            dark:group-hover:bg-emerald-900/60
          "
        >
          <Quote
            size={30}
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* ================= REVIEW ================= */}

      <div
        className="
          relative
          flex-1
          overflow-y-auto
          hide-scrollbar
          px-8
          py-6
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
          relative
          border-t
          border-slate-200
          p-6
          dark:border-slate-800
        "
      >
        <div className="flex items-center justify-between gap-4">
          {/* ================= PERSON ================= */}

          <div className="flex min-w-0 items-center gap-4">
            {/* Avatar */}

            <div className="relative shrink-0">
              <div
                className="
                  absolute
                  -inset-1
                  rounded-full
                  bg-emerald-400/20
                  opacity-0
                  blur-md
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="
                  relative
                  h-16
                  w-16
                  rounded-full
                  border-2
                  border-emerald-200
                  object-cover
                  shadow-md
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  dark:border-emerald-700/70
                "
              />
            </div>

            {/* Details */}

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {testimonial.name}
              </h3>

              <p
                className="
                  mt-0.5
                  truncate
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
                  truncate
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
              group/link
              relative
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              text-emerald-600
              transition-all
              duration-300
              hover:scale-110
              hover:border-emerald-600
              hover:bg-emerald-600
              hover:text-white
              dark:border-emerald-800
              dark:bg-emerald-950/50
              dark:text-emerald-400
              dark:hover:border-emerald-500
              dark:hover:bg-emerald-500
              dark:hover:text-white
            "
          >
            <FaLinkedinIn
              className="
                text-lg
                transition-transform
                duration-300
                group-hover/link:scale-110
              "
            />

            {/* Small hover arrow */}

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                scale-0
                items-center
                justify-center
                rounded-full
                bg-slate-900
                text-white
                opacity-0
                transition-all
                duration-300
                group-hover/link:scale-100
                group-hover/link:opacity-100
                dark:bg-white
                dark:text-slate-900
              "
            >
              <ArrowUpRight size={11} />
            </span>
          </a>
        </div>
      </div>

      {/* ================= BOTTOM ACCENT ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-emerald-500
          via-green-400
          to-teal-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

export default TestimonialCard;