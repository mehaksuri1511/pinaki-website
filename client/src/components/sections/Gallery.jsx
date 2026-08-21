import GalleryCard from "../cards/GalleryCard";
import { galleryImages } from "../../data/gallery";

const Gallery = () => {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Divider */}
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-12" />

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-slate-900">
              Capturing Our{" "}
            </span>

            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">
              Journey
            </span>

            <span className="ml-2 text-green-500">✦</span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Workshops, hackathons, placements, industry visits and the
            unforgettable moments that define life at{" "}
            <span className="font-semibold text-emerald-600">
              Pinaki IT
            </span>.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;