import { ZoomIn } from "lucide-react";

const GalleryCard = ({ image, title, category }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/30

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-emerald-400
        hover:shadow-2xl
      "
    >
      {/* ================= IMAGE ================= */}
      <img
        src={image}
        alt={title}
        className="
          h-72
          w-full
          object-cover

          transition-all
          duration-700

          group-hover:scale-110
        "
      />

      {/* ================= OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-end
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          p-6

          opacity-0
          transition
          duration-500

          group-hover:opacity-100
        "
      >
        {/* CATEGORY */}
        <span
          className="
            text-sm
            font-medium
            text-emerald-300
          "
        >
          {category}
        </span>

        {/* TITLE */}
        <h3
          className="
            mt-2
            text-2xl
            font-bold
            text-white
          "
        >
          {title}
        </h3>

        {/* ZOOM BUTTON */}
        <div className="mt-4">

          <button
            type="button"
            aria-label={`View ${title}`}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-emerald-600
              shadow-lg

              transition-all
              duration-300

              hover:scale-110
              hover:bg-emerald-500
              hover:text-white
            "
          >
            <ZoomIn size={20} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default GalleryCard;