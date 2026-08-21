import { ZoomIn } from "lucide-react";

const GalleryCard = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg">

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

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/20
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        flex
        flex-col
        justify-end
        p-6
        "
      >

        <span className="text-emerald-300 text-sm font-medium">
          {category}
        </span>

        <h3 className="text-white text-2xl font-bold mt-2">
          {title}
        </h3>

        <div className="mt-4">

          <button
            className="
            bg-white
            text-emerald-600
            rounded-full
            w-12
            h-12
            flex
            items-center
            justify-center
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