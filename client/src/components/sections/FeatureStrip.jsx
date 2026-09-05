import { motion } from "framer-motion";
import { features } from "../../data/features";

const FeatureStrip = () => {
  return (
    <section
      className="
        relative
        px-6
        py-12
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= FEATURE CARD ================= */}
        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-100
            bg-white
            shadow-xl
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/40
            transition-colors
            duration-300
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
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
                  flex-col
                  items-center
                  justify-center
                  px-8
                  py-10
                  text-center
                  transition-all
                  duration-300
                  hover:bg-gradient-to-br
                  hover:from-emerald-50
                  hover:to-blue-50
                  dark:hover:from-emerald-950/40
                  dark:hover:to-blue-950/30
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
                      bg-slate-200
                      dark:bg-slate-700
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
                    bg-slate-50
                    dark:bg-slate-800
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-white
                    dark:group-hover:bg-slate-700
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