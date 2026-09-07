import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import SectionWatermark from "../common/SectionWatermark";

const ServicesHero = ({ services, activeService, onSelect }) => {
  const activeIndex = services.findIndex(
    (service) => service.id === activeService
  );

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-28
        transition-colors
        duration-500
        dark:bg-slate-950
      "
    >
      <SectionWatermark
        icons={[
          "BriefcaseBusiness",
          "Sparkles",
          "Users",
          "GraduationCap",
          "Code2",
          "Building2",
          "Rocket",
          "Target",
          "Award",
        ]}
        intensity="strong"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-teal-300/20 blur-[130px] dark:bg-teal-500/10" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        {/* Hero heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-emerald-700
              dark:border-emerald-400/20
              dark:bg-emerald-400/10
              dark:text-emerald-300
            "
          >
            <Sparkles size={14} />
            What We Do
          </div>

          <h1
            className="
              mt-7
              text-5xl
              font-black
              leading-[1.02]
              tracking-tight
              text-slate-950
              sm:text-6xl
              lg:text-7xl
              dark:text-white
            "
          >
            Services that turn
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              potential into progress.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
            From digital growth and corporate capability building to
            personality development and industry-focused training, explore how
            Pinaki can help people and organizations move forward.
          </p>
        </motion.div>

        {/* Service selector */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <div
            className="
              relative
              rounded-[28px]
              border
              border-slate-200
              bg-white/80
              p-2
              shadow-xl
              shadow-slate-900/5
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-slate-900/70
              dark:shadow-black/20
            "
          >
            {/* Mobile horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = service.id === activeService;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => onSelect(service.id)}
                    className={`
                      group
                      relative
                      flex
                      min-w-[220px]
                      flex-1
                      items-center
                      gap-3
                      rounded-[21px]
                      px-5
                      py-4
                      text-left
                      transition-all
                      duration-300
                      sm:min-w-0
                      ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/20"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-colors
                        ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                        }
                      `}
                    >
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0">
                      <span
                        className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          ${
                            isActive
                              ? "text-white/70"
                              : "text-slate-400 dark:text-slate-500"
                          }
                        `}
                      >
                        Service 0{index + 1}
                      </span>

                      <span className="mt-0.5 block whitespace-nowrap text-sm font-bold sm:text-base">
                        {service.shortTitle}
                      </span>
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="activeServiceIndicator"
                        className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current selection hint */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500">
            <ArrowDown size={14} />
            <span>
              Explore{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {services[activeIndex]?.shortTitle}
              </span>{" "}
              below
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;