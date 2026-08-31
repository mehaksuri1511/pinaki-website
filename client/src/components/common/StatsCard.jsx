import React from "react";

const StatsCard = ({
  icon,
  value,
  label,
  bgColor = "bg-white dark:bg-slate-900",
  iconBg = "bg-emerald-100 dark:bg-emerald-900/40",
  iconColor = "text-emerald-600 dark:text-emerald-400",
}) => {
  return (
    <div
      className={`
        group
        rounded-3xl
        ${bgColor}
        border
        border-slate-200
        dark:border-slate-700
        p-8
        text-center
        shadow-md
        dark:shadow-black/20

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-emerald-500
        hover:shadow-2xl
      `}
    >
      {/* ================= ICON ================= */}
      <div
        className={`
          mx-auto
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          ${iconBg}
        `}
      >
        <span className={iconColor}>
          {icon}
        </span>
      </div>

      {/* ================= VALUE ================= */}
      <h3
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        {value}
      </h3>

      {/* ================= LABEL ================= */}
      <p
        className="
          mt-2
          text-slate-600
          dark:text-slate-400
        "
      >
        {label}
      </p>
    </div>
  );
};

export default StatsCard;