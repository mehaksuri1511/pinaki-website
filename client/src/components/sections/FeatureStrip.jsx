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
      {/* ================= WATERMARKS ================= */}
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= FEATURE CARD ================= */}
        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-emerald-100/80
            bg-emerald-50/40
            shadow-xl
            dark:border-emerald-900/50
            dark:bg-emerald-950/20
            dark:shadow-black/40
            transition-all
            duration-300
          "
        >
          {/* ================= DYNAMIC GRID ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
            "
          >
            {features.map((item, index) => (
              <motion.div
                key={item.id || item.title || index}
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
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  justify-center
                  border-b
                  border-emerald-100/70
                  bg-emerald-50/30
                  px-8
                  py-10
                  text-center
                  transition-all
                  duration-300
                  hover:bg-emerald-100/70
                  hover:shadow-[inset_0_0_35px_rgba(16,185,129,0.08)]
                  dark:border-emerald-900/40
                  dark:bg-emerald-950/20
                  dark:hover:bg-emerald-900/35
                  dark:hover:shadow-[inset_0_0_35px_rgba(16,185,129,0.08)]
                "
              >
                {/* ================= DIVIDER ================= */}
                {index !== features.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-24
                      w-px
                      -translate-y-1/2
                      bg-emerald-200/70
                      dark:bg-emerald-800/50
                      transition-colors
                      duration-300
                      lg:block
                    "
                  />
                )}

                {/* ================= ICON ================= */}
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
                    duration-300
                    group-hover:scale-110
                    group-hover:border-emerald-200
                    group-hover:bg-white
                    group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.12)]
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
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    transition-colors
                    duration-300
                    group-hover:text-emerald-700
                    dark:group-hover:text-emerald-400
                  "
                >
                  {item.title}
                </h3>

                {/* ================= SUBTITLE ================= */}
                <p
                  className="
                    mt-2
                    text-slate-600
                    dark:text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-slate-700
                    dark:group-hover:text-slate-300
                  "
                >
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;