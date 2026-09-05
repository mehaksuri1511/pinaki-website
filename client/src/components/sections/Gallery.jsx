import { motion } from "framer-motion";

import GalleryCard from "../cards/GalleryCard";
import { galleryImages } from "../../data/gallery";

const Gallery = () => {
  return (
    <section
      className="
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-emerald-50
        pt-12
        pb-24
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= DIVIDER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            h-px
            max-w-5xl
            origin-center
            bg-gradient-to-r
            from-transparent
            via-emerald-200
            to-transparent
            dark:via-emerald-800
          "
        />

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 text-center"
        >
          <h2
            className="
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight
              md:text-5xl
              lg:text-6xl
            "
          >
            <span className="text-slate-900 dark:text-white">
              Capturing Our{" "}
            </span>

            <span
              className="
                bg-gradient-to-r
                from-green-600
                via-emerald-500
                to-green-400
                bg-clip-text
                text-transparent
              "
            >
              Journey
            </span>

            <span className="ml-2 text-green-500">✦</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-relaxed
              text-slate-500
              md:text-xl
              dark:text-slate-400
            "
          >
            Workshops, hackathons, placements, industry visits and the
            unforgettable moments that define life at{" "}
            <span
              className="
                font-semibold
                text-emerald-600
                dark:text-emerald-400
              "
            >
              Pinaki IT
            </span>
            .
          </p>
        </motion.div>

        {/* ================= GALLERY ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GalleryCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;