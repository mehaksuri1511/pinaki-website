import { Link } from "react-router-dom";

import footerBg from "../../assets/images/footer-bg.png"; // <-- use the SAME image as Footer

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="inline-block rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Let's Work Together
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-white">
          Ready to Build
          <br />
          Something Amazing?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you're a startup, enterprise or student,
          Pinaki IT is here to transform your ideas into
          scalable digital solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/contact"
            className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Contact Us
          </Link>

          <Link
            to="/about"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTASection;