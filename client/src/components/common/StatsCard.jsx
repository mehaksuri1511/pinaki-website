import React from "react";

const StatsCard = ({
  icon,
  value,
  label,
  bgColor = "bg-white",
  iconBg = "bg-emerald-100",
  iconColor = "text-emerald-600",
}) => {
  return (
    <div
className={`group rounded-3xl ${bgColor} border border-slate-200 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl`}    >
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${iconBg}`}
      >
        <span className={`${iconColor}`}>{icon}</span>
      </div>

      <h3 className="text-4xl font-bold text-slate-900">{value}</h3>

      <p className="mt-2 text-slate-600">{label}</p>
    </div>
  );
};

export default StatsCard;