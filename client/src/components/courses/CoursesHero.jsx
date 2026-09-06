import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionWatermark from "../common/SectionWatermark";

const CoursesHero = () => {
  const tags = [
    "Software Development",
    "Web Development",
    "Cloud Computing",
    "AI & ML",
    "Corporate Training",
    "Internships",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-emerald-100
        bg-gradient-to-br
        from-white
        via-emerald-50
        to-teal-50
        transition-colors
        duration-500
        dark:border-slate-800
        dark:from-slate-950
        dark:via-slate-900
        dark:to-emerald-950
      "
    >
      {/* ================= BACKGROUND LIGHTING ================= */}

      {/* Emerald glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-300/25
          blur-[160px]
          dark:bg-emerald-500/10
        "
      />

      {/* Teal glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-teal-300/25
          blur-[180px]
          dark:bg-teal-500/10
        "
      />

      {/* Center soft light */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-200/20
          blur-[150px]
          dark:bg-emerald-500/5
        "
      />

      {/* ================= GRID ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          transition-opacity
          duration-500
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* ================= WATERMARK ================= */}
      <SectionWatermark
        icons={[
          "Code2",
          "Cloud",
          "Sparkles",
          "Rocket",
          "GraduationCap",
          "BriefcaseBusiness",
          "Cpu",
          "Building2",
          "Target",
        ]}
        intensity="strong"
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[85vh]
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          pb-24
          pt-32
          text-center
          md:pt-36
        "
      >
        {/* ================= BADGE ================= */}
        <motion.span
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-emerald-200
            bg-white/80
            px-6
            py-3
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-emerald-700
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            dark:border-emerald-800
            dark:bg-emerald-950/40
            dark:text-emerald-400
          "
        >
          Our Services
        </motion.span>

        {/* ================= HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.15,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-5xl
            text-5xl
            font-black
            leading-[1.08]
            tracking-tight
            text-slate-900
            transition-colors
            duration-300
            sm:text-6xl
            md:text-7xl
            dark:text-white
          "
        >
          Building Digital
          <br />
          <span
            className="
              bg-gradient-to-r
              from-green-600
              via-emerald-500
              to-teal-500
              bg-clip-text
              text-transparent
              dark:from-green-400
              dark:via-emerald-400
              dark:to-teal-300
            "
          >
            Solutions That Matter
          </span>
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            transition-colors
            duration-300
            sm:text-xl
            dark:text-slate-300
          "
        >
          From software development and cloud solutions to AI, corporate
          training and internships, Pinaki IT empowers businesses and students
          with cutting-edge technology.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.05,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {/* Explore */}
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-emerald-600
              to-teal-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-emerald-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-emerald-500/30
              dark:from-emerald-500
              dark:to-teal-400
              dark:shadow-emerald-500/10
            "
          >
            Explore Services

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

          {/* Contact */}
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              rounded-full
              border
              border-emerald-200
              bg-white/70
              px-8
              py-4
              font-semibold
              text-emerald-700
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-emerald-300
              hover:bg-emerald-50
              hover:shadow-md
              dark:border-emerald-800
              dark:bg-slate-900/60
              dark:text-emerald-400
              dark:hover:border-emerald-600
              dark:hover:bg-emerald-950/50
            "
          >
            Contact Us
          </button>
        </motion.div>

        {/* ================= FLOATING TAGS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.15,
            delay: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            flex
            max-w-4xl
            flex-wrap
            justify-center
            gap-3
            md:mt-20
          "
        >
          {tags.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.45 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                rounded-full
                border
                border-emerald-200/80
                bg-white/70
                px-5
                py-3
                text-sm
                font-medium
                text-slate-700
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400
                hover:bg-emerald-50
                hover:text-emerald-700
                dark:border-emerald-800/80
                dark:bg-slate-900/60
                dark:text-slate-300
                dark:hover:border-emerald-600
                dark:hover:bg-emerald-950/50
                dark:hover:text-emerald-300
              "
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM LIGHT ================= */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-2/3
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-emerald-400/40
            to-transparent
            dark:via-emerald-500/30
          "
        />
      </div>
    </section>
  );
};

export default CoursesHero;