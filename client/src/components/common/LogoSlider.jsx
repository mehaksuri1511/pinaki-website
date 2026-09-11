import miet from "../../assets/logo/miet-logo.png";
import dbsl from "../../assets/logo/dbsl-logo.png";
import gniot from "../../assets/logo/gniot-logo.png";
import mcps from "../../assets/logo/mcps-logo.png";
import mmtf from "../../assets/logo/mmtf-logo.png";
import en from "../../assets/logo/en-logo.png";
import apj from "../../assets/logo/apj-logo.png";
import royalandfield from "../../assets/logo/royalandfield-logo.png";

const logos = [
  {
    src: miet,
    name: "MIET",
  },
  {
    src: dbsl,
    name: "DBSL",
  },
  {
    src: gniot,
    name: "GNIOT",
  },
  {
    src: mcps,
    name: "MCPS",
  },
  {
    src: mmtf,
    name: "MMTF",
  },
  {
    src: en,
    name: "EN",
  },
  {
    src: apj,
    name: "APJ",
  },
  {
    src: royalandfield,
    name: "Royal Enfield",
  },

  // ============================================================
  // NEW PARTNER LOGOS
  // ============================================================

  {
    src: "https://images.seeklogo.com/logo-png/38/1/galgotias-university-logo-png_seeklogo-389692.png",
    name: "Galgotias University",
  },

  {
    src: "https://www.iimtindia.net/images/logo.png",
    name: "IIMT Group of Colleges",
  },

  {
    src: "https://www.abes.ac.in/assets/Logo.webp",
    name: "ABES Engineering College",
  },

  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Delhi%20University%27s%20official%20logo.png",
    name: "University of Delhi",
  },

  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/VIPS%20Logo.png",
    name: "VIPS",
  },

  {
    src: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/01/logo.png",
    name: "IILM University Greater Noida",
  },

  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IMS%20ENGG%20LOGO%20123.jpg",
    name: "IMS Engineering College",
  },
];

const LogoSlider = () => {
  return (
    <section className="mt-28">
      {/* ================= HEADING ================= */}
      <div className="text-center">
        <h3
          className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Our Trusted Partners
        </h3>

        <p
          className="
            mt-4
            text-lg
            text-slate-600
            dark:text-slate-400
          "
        >
          Proud collaborations with businesses and educational institutions.
        </p>
      </div>

      {/* ================= LOGO SLIDER ================= */}
      <div className="relative mt-14 overflow-hidden">
        {/* LEFT GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-r
            from-emerald-50
            to-transparent
            dark:from-slate-950
          "
        />

        {/* RIGHT GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-l
            from-emerald-50
            to-transparent
            dark:from-slate-950
          "
        />

        {/* SLIDER */}
        <div className="logo-slider">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="
                mx-6
                flex
                h-36
                w-36
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                shadow-lg
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-black/30
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-105
                hover:border-emerald-500
                hover:shadow-2xl
              "
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="
                  h-20
                  w-20
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;