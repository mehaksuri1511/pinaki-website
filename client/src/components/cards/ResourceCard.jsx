import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResourceCard = ({
  title,
  description,
  image,
  bg,
  route,
}) => {
  return (
    <div
      className={`${bg} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group`}
    >
      <div className="flex justify-between items-start">

        <h2 className="text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <ArrowRight
          size={32}
          className="group-hover:translate-x-2 transition"
        />

      </div>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        {description}
      </p>

      <img
        src={image}
        alt={title}
        className="mt-10 h-64 mx-auto object-contain transition duration-500 group-hover:scale-105"
      />

      <Link to={route}>
        <button className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700">
          Explore
        </button>
      </Link>

    </div>
  );
};

export default ResourceCard;