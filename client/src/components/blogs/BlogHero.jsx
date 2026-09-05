import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import hero from "../../assets/images/blogHero.jpg";

const BlogsHero = () => {
  const scrollToFeatured = () => {
    document
      .getElementById("featured-blog")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const revealUp = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-slate-50
        pt-20
        transition-colors
        duration-500
        sm:min-h-[680px]
        lg:min-h-[720px]
        dark:bg-slate-950
      "
    >
      {/* Background image */}
      <img
        src={hero}
        alt="Pinaki IT technology insights"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-[0.18]
          transition-opacity
          duration-500
          dark:opacity-[0.38]
        "
      />

      {/* Light theme image wash */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/95
          to-white/65
          dark:hidden
        "
      />

      {/* Dark theme image wash */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-slate-950
          via-slate-950/90
          to-slate-950/45
          dark:block
        "
      />

      {/* Light theme ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-300/20
          blur-[130px]
          dark:hidden
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-teal-300/20
          blur-[120px]
          dark:hidden
        "
      />

      {/* Dark theme ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-500/15
          blur-[130px]
          dark:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          bg-teal-500/10
          blur-[120px]
          dark:block
        "
      />

      {/* Decorative grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)]
          [background-size:70px_70px]
          dark:opacity-[0.035]
          dark:[background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[650px]
          max-w-7xl
          items-center
          px-5
          py-20
          sm:min-h-[680px]
          sm:px-8
          lg:min-h-[720px]
        "
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50/80
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-emerald-700
              shadow-sm
              backdrop-blur-md
              dark:border-emerald-400/25
              dark:bg-emerald-400/10
              dark:text-emerald-300
              dark:shadow-none
            "
          >
            <Sparkles size={14} />
            Pinaki Insights
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.05,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-4xl
              text-5xl
              font-black
              leading-[1.02]
              tracking-tight
              text-slate-950
              transition-colors
              duration-500
              sm:text-6xl
              lg:text-7xl
              xl:text-[5.25rem]
              dark:text-white
            "
          >
            Ideas That
            <br />

            <span
              className="
                bg-gradient-to-r
                from-emerald-600
                via-green-500
                to-teal-500
                bg-clip-text
                text-transparent
                dark:from-emerald-300
                dark:via-green-400
                dark:to-teal-300
              "
            >
              Shape Tomorrow.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              transition-colors
              duration-500
              sm:text-lg
              sm:leading-8
              lg:text-xl
              dark:text-slate-300
            "
          >
            Explore practical insights on Artificial Intelligence, Cloud
            Computing, Full Stack Development, career growth, industry trends
            and the technologies shaping the future.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.95,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <button
              type="button"
              onClick={scrollToFeatured}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-emerald-600
                to-teal-500
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-emerald-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-emerald-600/25
                dark:from-emerald-500
                dark:to-teal-500
              "
            >
              Explore Insights

              <ArrowDown
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </button>

            {/* Topic pill */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white/75
                px-5
                py-3.5
                text-sm
                font-semibold
                text-slate-600
                shadow-sm
                backdrop-blur-md
                dark:border-white/10
                dark:bg-white/5
                dark:text-slate-300
                dark:shadow-none
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-500
                  shadow-[0_0_12px_rgba(16,185,129,0.65)]
                  dark:bg-emerald-400
                "
              />

              Technology • Career • Innovation
            </motion.div>
          </motion.div>

          {/* Topic highlights */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.72,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                AI
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Intelligence
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />

            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                Cloud
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Technology
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />

            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                Career
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Growth
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="
                ml-1
                hidden
                text-emerald-600
                sm:block
                dark:text-emerald-400
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom transition */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-slate-50
          to-transparent
          dark:from-slate-950
        "
      />
    </section>
  );
};

export default BlogsHero;