import miet from "../../assets/logo/miet-logo.png";
import dbsl from "../../assets/logo/dbsl-logo.png";
import gniot from "../../assets/logo/gniot-logo.png";
import mcps from "../../assets/logo/mcps-logo.png";
import mmtf from "../../assets/logo/mmtf-logo.png";
import en from "../../assets/logo/en-logo.png";
import apj from "../../assets/logo/apj-logo.png";
import royalandfield from "../../assets/logo/royalandfield-logo.png";

const logos = [
  miet,
  dbsl,
  gniot,
  mcps,
  mmtf,
  en,
  apj,
  royalandfield,
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
              key={index}
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
                src={logo}
                alt="Trusted partner"
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