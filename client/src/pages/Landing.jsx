import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import logo from "../assets/images/pinaki_logo.png";
import PinakiAI from "../components/common/PinakiAI";

const CardMascot = ({ variant }) => (
  <div className={`card-mascot card-mascot-${variant}`} aria-hidden="true">
    <div className="card-mascot-face">
        {variant === "lavender" && <span className="card-mascot-cap" />}
      <span className="card-mascot-eye card-mascot-eye-left" />
      <span className="card-mascot-eye card-mascot-eye-right" />
      <span className="card-mascot-smile" />
    </div>
    <div className="card-mascot-body">
      <span />
      <span />
    </div>
    {variant === "sky" && (
      <>
        <div className="card-mascot-keyboard">
          <div className="card-mascot-keyboard-row"><span /><span /><span /><span /><span /><span /></div>
          <div className="card-mascot-keyboard-row"><span /><span /><span /><span /><span /></div>
          <div className="card-mascot-keyboard-row card-mascot-keyboard-row-bottom"><span /><span /><span /></div>
        </div>
        <div className="card-mascot-typing-hands"><span /><span /></div>
      </>
    )}
    {variant === "lavender" && (
      <div className="card-mascot-item">
        <span className="card-mascot-book-page card-mascot-book-page-left" />
        <span className="card-mascot-book-page card-mascot-book-page-right" />
        <span className="card-mascot-book-spine" />
        <span className="card-mascot-book-line card-mascot-book-line-one" />
        <span className="card-mascot-book-line card-mascot-book-line-two" />
      </div>
    )}
  </div>
);

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[160px]" />
      </div>

      <div className="relative z-10">

        {/* Hero Section */}
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center lg:px-10">

          <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row">
            <img src={logo} alt="Pinaki IT" className="h-[4.5rem] w-auto md:h-20" />
            <span className="inline-flex items-center gap-3 rounded-md bg-emerald-400 px-5 py-2.5 font-mono text-lg font-black uppercase tracking-[0.22em] text-[#050816] md:px-6 md:py-3 md:text-xl">
              Pinaki IT
              <span className="h-1.5 w-1.5 rounded-full bg-[#050816]" />
              Consultant Pvt. Ltd.
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Education &amp; Technology,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
              built with AI
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Empowering education, building intelligent software, and delivering
            AI-driven solutions for the future.
          </p>

          {/* Portal Cards */}
          <div className="mt-16 grid w-full gap-8 text-left md:grid-cols-2">

            {/* Education */}
            <Link
              to="/education"
              className="
                group
                relative
                overflow-hidden
                min-h-[300px]
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-emerald-500/50
                hover:bg-white/[0.05]
                hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]
              "
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

              <CardMascot variant="lavender" />

              <h3 className="mt-8 text-3xl font-black md:text-4xl">
                Education
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Professional Certifications, AI Programs,
                Placement Preparation, Industry-Oriented
                Training and Career Development.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                Enter Education Portal
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

            </Link>

            {/* Development */}
            <Link
              to="/development"
              className="
                group
                relative
                overflow-hidden
                min-h-[300px]
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-blue-500/50
                hover:bg-white/[0.05]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]
              "
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

              <CardMascot variant="sky" />

              <h3 className="mt-8 text-3xl font-black md:text-4xl">
                Development
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Custom Software Development,
                AI Solutions, Cloud Services,
                Automation Systems and Enterprise Applications.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                Explore Development Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

            </Link>

          </div>

        </section>

        <PinakiAI />

        <div className="mt-20 pb-20 text-center">
          <p className="mt-4 text-lg text-slate-400">
            Learn Future Skills or Build Future Technology
          </p>
        </div>
      </div>

    </div>
  );
};

export default Landing;
