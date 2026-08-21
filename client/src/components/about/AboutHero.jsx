import { useState } from "react";
import { X } from "lucide-react";

import img1 from "../../assets/images/gallery1.png";
import img2 from "../../assets/images/gallery5.png";
import img3 from "../../assets/images/gallery9.png";
import img4 from "../../assets/images/gallery13.png";

const images = [img1, img2, img3, img4];

const AboutHero = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Collage */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <div className="max-w-5xl text-center">

          <span className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-widest text-emerald-700">
            ABOUT PINAKI
          </span>

          <h2 className="mt-8 text-5xl font-light text-white md:text-7xl">
            Empowering
          </h2>

          <h1 className="mt-2 text-6xl font-black md:text-8xl">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Future Tech Leaders
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-200 md:text-xl">
            Pinaki IT Consultant Pvt. Ltd. empowers students,
            professionals and businesses through practical learning,
            live projects, internships, software development,
            cloud technologies and corporate IT solutions.
          </p>

          <div className="mt-12 flex justify-center gap-5">

            <button className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600">
              Explore Programs
            </button>

            <button className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Contact Us
            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white p-1">
          <div className="scroll-dot h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Fullscreen Image */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6">

          <button
            onClick={() => setSelected(null)}
            className="absolute right-8 top-8 rounded-full bg-white p-3"
          >
            <X />
          </button>

          <img
            src={selected}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-3xl"
          />

        </div>
      )}

    </section>
  );
};

export default AboutHero;