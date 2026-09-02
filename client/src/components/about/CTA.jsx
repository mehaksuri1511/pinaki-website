import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        dark:bg-slate-950
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-emerald-400/20
          blur-[110px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-teal-400/20
          blur-[110px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* ================= CTA CARD ================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-emerald-200/70
            bg-gradient-to-br
            from-emerald-600
            via-green-600
            to-teal-600
            px-7
            py-12
            text-center
            shadow-2xl
            shadow-emerald-900/10
            sm:px-12
            sm:py-14
            lg:px-20
            dark:border-emerald-400/20
            dark:from-emerald-700
            dark:via-green-700
            dark:to-teal-700
            dark:shadow-emerald-950/30
          "
        >
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-white/15
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-72
              w-72
              rounded-full
              bg-teal-300/20
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Subtle grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.08]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:36px_36px]
            "
          />

          {/* Content */}

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
              "
            >
              <Sparkles size={14} />

              START YOUR JOURNEY
            </div>

            {/* Heading */}

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Ready to Build
              <br />
              <span className="text-emerald-100">
                Your Future?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-white/85
                sm:text-lg
                sm:leading-8
              "
            >
              Join learners and professionals building real-world skills
              through practical training, industry mentorship and
              career-focused programs.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Explore Programs */}

              <button
                type="button"
                onClick={() => navigate("/courses")}
                className="
                  group/primary
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  font-semibold
                  text-emerald-700
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-50
                  hover:shadow-2xl
                "
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/primary:translate-x-1
                  "
                />
              </button>

              {/* Contact */}

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/40
                  bg-white/5
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-emerald-700
                  hover:shadow-xl
                "
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Bottom decorative line */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-1
              w-32
              -translate-x-1/2
              rounded-full
              bg-white/50
              blur-[1px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;