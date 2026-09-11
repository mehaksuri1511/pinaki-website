import { motion } from "framer-motion";

import { features } from "../../data/features";
import SectionWatermark from "../common/SectionWatermark";

const FeatureStrip = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-12
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      {/* Background effect */}
      <SectionWatermark
        icons={[
          "Sparkles",
          "Code2",
          "ShieldCheck",
          "Rocket",
          "Lightbulb",
          "Cpu",
          "Award",
          "GraduationCap",
          "Target",
        ]}
        intensity="strong"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            rounded-[32px]
            border
            border-emerald-100/80
            bg-emerald-50/40
            shadow-xl
            dark:border-emerald-900/50
            dark:bg-emerald-950/20
            dark:shadow-black/40
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {features.map((item, index) => (
              <FeatureItem
                key={item.id || item.title || index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ item, index }) => {
  return (
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        border-b
        border-emerald-100/70
        bg-emerald-50/30
        text-center
        transition-all
        duration-500
        hover:z-20
        hover:bg-emerald-100/70
        hover:shadow-[inset_0_0_35px_rgba(16,185,129,0.08)]
        dark:border-emerald-900/40
        dark:bg-emerald-950/20
        dark:hover:bg-emerald-900/35
        dark:hover:shadow-[inset_0_0_35px_rgba(16,185,129,0.08)]
        lg:border-b-0
        lg:border-r
        lg:last:border-r-0
      "
    >
      {/* =====================================================
          MAIN FEATURE AREA
      ====================================================== */}

      <div
        className="
          flex
          min-h-[220px]
          flex-col
          items-center
          justify-center
          px-8
          py-10
        "
      >
        {/* Icon */}

        <div
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50
            shadow-sm
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-emerald-200
            group-hover:bg-white
            group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.14)]
            dark:border-emerald-900/50
            dark:bg-emerald-950/40
            dark:group-hover:border-emerald-700
            dark:group-hover:bg-emerald-900/50
            dark:group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]
          "
        >
          <img
            src={item.icon}
            alt={item.title}
            className="
              h-12
              w-12
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-emerald-700
            dark:text-white
            dark:group-hover:text-emerald-400
          "
        >
          {item.title}
        </h3>

        {/* Subtitle */}

        <p
          className="
            mt-2
            text-slate-600
            transition-colors
            duration-300
            group-hover:text-slate-700
            dark:text-slate-400
            dark:group-hover:text-slate-300
          "
        >
          {item.subtitle}
        </p>

        {/* Small hover indicator */}

        <div
          className="
            mt-5
            h-1
            w-8
            origin-center
            scale-x-0
            rounded-full
            bg-gradient-to-r
            from-emerald-500
            to-teal-400
            opacity-0
            transition-all
            duration-500
            group-hover:scale-x-100
            group-hover:opacity-100
          "
        />
      </div>

      {/* =====================================================
          EXPANDING DESCRIPTION
          Grows from bottom of the same box
      ====================================================== */}

      <div
        className="
          grid
          grid-rows-[0fr]
          transition-[grid-template-rows]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:grid-rows-[1fr]
        "
      >
        <div className="overflow-hidden">
          <div
            className="
              mx-6
              border-t
              border-emerald-200/70
              px-2
              pb-7
              pt-5
              dark:border-emerald-800/50
            "
          >
            <p
              className="
                text-sm
                leading-6
                text-slate-600
                opacity-0
                translate-y-[-8px]
                transition-all
                duration-500
                delay-75
                group-hover:translate-y-0
                group-hover:opacity-100
                dark:text-slate-300
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT LINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[3px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-emerald-500
          via-green-400
          to-teal-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
};

export default FeatureStrip;