import { motion } from "framer-motion";

const SectionWatermark = ({
  className = "",
  intensity = "normal",
  animate = true,
}) => {
  const intensityStyles = {
    soft: {
      main: "opacity-[0.65]",
      secondary: "opacity-[0.55]",
      orb: "opacity-[0.55]",
    },

    normal: {
      main: "opacity-[0.85]",
      secondary: "opacity-[0.70]",
      orb: "opacity-[0.70]",
    },

    strong: {
      main: "opacity-100",
      secondary: "opacity-[0.85]",
      orb: "opacity-[0.85]",
    },
  };

  const current =
    intensityStyles[intensity] || intensityStyles.normal;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* =====================================================
          MAIN LEFT EMERALD WAVE
      ====================================================== */}
      <motion.div
        className={`
          absolute
          -left-[15%]
          top-[8%]
          h-[70%]
          w-[58%]
          rotate-[-14deg]
          rounded-[45%]
          bg-gradient-to-br
          from-emerald-400/40
          via-emerald-300/25
          to-transparent
          blur-[45px]
          dark:from-emerald-500/35
          dark:via-emerald-400/18
          dark:to-transparent
          ${current.main}
        `}
        animate={
          animate
            ? {
                x: [0, 30, 0],
                y: [0, 18, 0],
                rotate: [-14, -10, -14],
                scale: [1, 1.04, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* =====================================================
          MAIN RIGHT TEAL WAVE
      ====================================================== */}
      <motion.div
        className={`
          absolute
          -right-[15%]
          bottom-[8%]
          h-[70%]
          w-[58%]
          rotate-[14deg]
          rounded-[45%]
          bg-gradient-to-bl
          from-teal-400/40
          via-emerald-300/25
          to-transparent
          blur-[45px]
          dark:from-teal-500/35
          dark:via-emerald-400/18
          dark:to-transparent
          ${current.main}
        `}
        animate={
          animate
            ? {
                x: [0, -30, 0],
                y: [0, -18, 0],
                rotate: [14, 10, 14],
                scale: [1, 1.04, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* =====================================================
          CENTER FLOWING GRADIENT
      ====================================================== */}
      <motion.div
        className={`
          absolute
          left-[12%]
          top-[35%]
          h-[30%]
          w-[76%]
          -rotate-[7deg]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-emerald-400/30
          to-transparent
          blur-[35px]
          dark:via-emerald-500/20
          ${current.secondary}
        `}
        animate={
          animate
            ? {
                x: [0, -25, 25, 0],
                scaleX: [1, 1.05, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* =====================================================
          TOP RIGHT ORB
      ====================================================== */}
      <motion.div
        className={`
          absolute
          -right-[4%]
          -top-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-teal-400/35
          blur-[55px]
          dark:bg-teal-500/25
          ${current.orb}
        `}
        animate={
          animate
            ? {
                x: [0, -20, 0],
                y: [0, 20, 0],
                scale: [1, 1.08, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* =====================================================
          BOTTOM LEFT ORB
      ====================================================== */}
      <motion.div
        className={`
          absolute
          -left-[4%]
          -bottom-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-emerald-400/35
          blur-[55px]
          dark:bg-emerald-500/25
          ${current.orb}
        `}
        animate={
          animate
            ? {
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [1, 1.08, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* =====================================================
          TOP / BOTTOM LIGHT BALANCE
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-emerald-50/25
          via-transparent
          to-teal-50/25
          dark:from-emerald-950/15
          dark:via-transparent
          dark:to-teal-950/15
        "
      />

      {/* =====================================================
          CONTENT READABILITY FADE
      ====================================================== */}
      <div
        className="
          absolute
          left-[8%]
          right-[8%]
          top-[12%]
          bottom-[12%]
          rounded-[50%]
          bg-white/15
          blur-[75px]
          dark:bg-slate-950/15
        "
      />
    </div>
  );
};

export default SectionWatermark;