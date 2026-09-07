import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import SectionWatermark from "../common/SectionWatermark";

const ServiceDetails = ({ service }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <section
      key={service.id}
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-20
        transition-colors
        duration-500
        dark:bg-slate-950
      "
    >
      <SectionWatermark
        icons={[
          "Sparkles",
          "Code2",
          "BriefcaseBusiness",
          "GraduationCap",
          "Users",
          "Building2",
          "Rocket",
          "Target",
          "Award",
        ]}
        intensity="soft"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =====================================================
                INTRO
            ===================================================== */}
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-200
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-emerald-700
                    shadow-sm
                    dark:border-emerald-400/20
                    dark:bg-slate-900
                    dark:text-emerald-300
                  "
                >
                  <Icon size={14} />
                  {service.shortTitle}
                </div>

                <h2
                  className="
                    mt-6
                    max-w-3xl
                    text-4xl
                    font-black
                    leading-[1.05]
                    tracking-tight
                    text-slate-950
                    sm:text-5xl
                    lg:text-6xl
                    dark:text-white
                  "
                >
                  {service.title}
                </h2>

                <p
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    leading-8
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  {service.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>

              {/* Highlights card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-xl
                  shadow-slate-900/5
                  dark:border-slate-800
                  dark:bg-slate-900/80
                  dark:shadow-black/20
                "
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                      <Sparkles size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                        Key Focus
                      </p>

                      <h3 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                        What you can achieve
                      </h3>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-slate-100
                          bg-slate-50
                          px-4
                          py-3
                          dark:border-slate-800
                          dark:bg-slate-950/60
                        "
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                          <Check size={14} strokeWidth={3} />
                        </span>

                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                OFFERINGS
            ===================================================== */}
            <div className="mt-24">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  What We Do
                </span>

                <h3 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
                  {service.offeringsTitle}
                </h3>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {service.offerings.map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: Math.min(index * 0.04, 0.24),
                      }}
                      className="
                        group
                        rounded-[25px]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1.5
                        hover:border-emerald-300
                        hover:shadow-xl
                        hover:shadow-emerald-900/5
                        dark:border-slate-800
                        dark:bg-slate-900/70
                        dark:hover:border-emerald-500/30
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-emerald-50
                            text-emerald-600
                            transition-all
                            duration-300
                            group-hover:bg-emerald-600
                            group-hover:text-white
                            dark:bg-emerald-400/10
                            dark:text-emerald-400
                            dark:group-hover:bg-emerald-500
                            dark:group-hover:text-white
                          "
                        >
                          <ItemIcon size={21} />
                        </div>

                        <span className="text-xs font-black text-slate-300 dark:text-slate-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h4 className="mt-6 text-lg font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-1 text-xs font-bold text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-emerald-400">
                        Explore capability
                        <ChevronRight size={14} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                PROCESS
            ===================================================== */}
            <div className="mt-24">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  Our Approach
                </span>

                <h3 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
                  From strategy to execution
                </h3>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-4">
                {service.process.map((step, index) => (
                  <div
                    key={step}
                    className="
                      relative
                      rounded-[24px]
                      border
                      border-slate-200
                      bg-white
                      p-6
                      dark:border-slate-800
                      dark:bg-slate-900/70
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-emerald-500/30 dark:text-emerald-400/20">
                        0{index + 1}
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-emerald-500"
                      />
                    </div>

                    <h4 className="mt-7 text-lg font-black text-slate-900 dark:text-white">
                      {step}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}
            <div
              className="
                relative
                mt-24
                overflow-hidden
                rounded-[30px]
                border
                border-emerald-200
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-teal-50
                p-8
                sm:p-10
                lg:p-12
                dark:border-emerald-500/20
                dark:from-emerald-950/40
                dark:via-slate-900
                dark:to-teal-950/30
              "
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/15 blur-[100px]" />

              <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    <Sparkles size={14} />
                    Let's Work Together
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                    {service.ctaTitle}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {service.ctaText}
                  </p>
                </div>

                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    shrink-0
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
                  "
                >
                  Get Started
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceDetails;