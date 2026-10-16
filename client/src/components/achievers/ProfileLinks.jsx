
import { ArrowUpRight, Code2, Trophy } from "lucide-react";

const PROFILE_CONFIG = {
  leetcode: {
    label: "LeetCode",
    icon: Code2,
    className:
      "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 dark:hover:border-amber-500/40 dark:hover:bg-amber-500/10 dark:hover:text-amber-300",
  },
  hackerrank: {
    label: "HackerRank",
    icon: Trophy,
    className:
      "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300",
  },
  github: {
    label: "GitHub",
    icon: Code2,
    className:
        "hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white",
    },
};

const ProfileLinks = ({ profiles = {} }) => {
  const availableProfiles = Object.entries(PROFILE_CONFIG).filter(
    ([key]) => profiles[key]
  );

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {availableProfiles.map(([key, config]) => {
        const Icon = config.icon;

        return (
          <a
            key={key}
            href={profiles[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${config.label} profile`}
            className={`
              group/link inline-flex min-w-0 items-center justify-center
              gap-2 rounded-xl border border-slate-200 bg-white/80
              px-3 py-2.5 text-sm font-semibold text-slate-600
              transition-all duration-300 hover:-translate-y-0.5
              dark:border-slate-700 dark:bg-slate-900/70
              dark:text-slate-300
              ${config.className}
            `}
          >
            <Icon size={16} className="shrink-0" />

            <span className="truncate">{config.label}</span>

            <ArrowUpRight
              size={14}
              className="shrink-0 opacity-50 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
