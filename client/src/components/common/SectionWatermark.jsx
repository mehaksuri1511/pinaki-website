import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Milestone,
  PenLine,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";

const iconMap = {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Milestone,
  PenLine,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRound,
  Users,
};

const defaultIcons = [
  "Sparkles",
  "Code2",
  "Cpu",
  "Rocket",
  "BookOpen",
  "Lightbulb",
  "Target",
  "Award",
];

const positions = [
  {
    className: "left-[2%] top-[7%]",
    size: "h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36",
    rotate: -14,
  },
  {
    className: "left-[22%] top-[3%]",
    size: "h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20",
    rotate: 10,
  },
  {
    className: "right-[5%] top-[8%]",
    size: "h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44",
    rotate: 12,
  },
  {
    className: "right-[28%] top-[30%]",
    size: "h-12 w-12 sm:h-16 sm:w-16 lg:h-24 lg:w-24",
    rotate: -8,
  },
  {
    className: "left-[5%] top-[43%]",
    size: "h-24 w-24 sm:h-32 sm:w-32 lg:h-48 lg:w-48",
    rotate: 8,
  },
  {
    className: "left-[34%] top-[58%]",
    size: "h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28",
    rotate: -12,
  },
  {
    className: "right-[4%] top-[57%]",
    size: "h-20 w-20 sm:h-28 sm:w-28 lg:h-40 lg:w-40",
    rotate: 15,
  },
  {
    className: "right-[25%] bottom-[4%]",
    size: "h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28",
    rotate: -10,
  },
  {
    className: "left-[12%] bottom-[5%]",
    size: "h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32",
    rotate: 16,
  },
];

const SectionWatermark = ({
  icons = defaultIcons,
  className = "",
  intensity = "normal",
  animate = true,
}) => {
  const opacity =
    intensity === "strong"
      ? "opacity-[0.13] dark:opacity-[0.15]"
      : intensity === "soft"
        ? "opacity-[0.07] dark:opacity-[0.08]"
        : "opacity-[0.10] dark:opacity-[0.12]";

  const visibleIcons = positions.map((position, index) => {
    const iconName = icons[index % icons.length];
    const Icon = iconMap[iconName] || Sparkles;

    return {
      ...position,
      Icon,
      key: `${iconName}-${index}`,
      delay: index * 0.18,
      duration: 9 + (index % 4) * 1.5,
    };
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Ambient glow */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />

      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-teal-300/20 blur-[130px] dark:bg-teal-500/10" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      {/* Watermark icons */}
      {visibleIcons.map(
        ({
          Icon,
          key,
          className: positionClass,
          size,
          rotate,
          delay,
          duration,
        }) => (
          <motion.div
            key={key}
            className={`absolute ${positionClass} ${size} ${opacity}`}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: rotate - 8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay,
              },
              scale: {
                duration: 1.2,
                delay,
              },
              rotate: {
                duration: 1.2,
                delay,
              },
            }}
          >
            <motion.div
              className="relative h-full w-full text-emerald-500 dark:text-emerald-400"
              animate={
                animate
                  ? {
                      y: [0, -10, 0, 8, 0],
                      x: [0, 5, 0, -4, 0],
                      rotate: [
                        rotate,
                        rotate + 2,
                        rotate - 1,
                        rotate,
                      ],
                    }
                  : undefined
              }
              transition={
                animate
                  ? {
                      duration,
                      delay: delay + 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : undefined
              }
            >
              {/* Icon glow */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl dark:bg-emerald-400/10" />

              <Icon
                className="relative h-full w-full stroke-[1.15]"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        )
      )}

      {/* Decorative dots */}
      <motion.div
        className="absolute left-[48%] top-[16%] h-2 w-2 rounded-full bg-emerald-500/30 dark:bg-emerald-400/40"
        animate={
          animate
            ? {
                y: [0, -12, 0],
              }
            : undefined
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[18%] left-[55%] h-3 w-3 rounded-full bg-teal-500/25 dark:bg-teal-400/35"
        animate={
          animate
            ? {
                y: [0, 10, 0],
              }
            : undefined
        }
        transition={{
          duration: 7,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SectionWatermark;