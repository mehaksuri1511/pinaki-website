import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "lucide-react";

import logo from "../assets/images/pinaki_logo.png";
import PinakiAI from "../components/common/PinakiAI";

const RobotCharacter = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [winkSide, setWinkSide] = useState(null);

  useEffect(() => {
    const updatePointer = (event) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useEffect(() => {
    let nextSide = "left";
    let blinkTimeout;

    const blink = () => {
      setWinkSide(nextSide);
      blinkTimeout = window.setTimeout(() => setWinkSide(null), 240);
      nextSide = nextSide === "left" ? "right" : "left";
    };

    const blinkInterval = window.setInterval(blink, 2600);
    return () => {
      window.clearInterval(blinkInterval);
      window.clearTimeout(blinkTimeout);
    };
  }, []);

  const eyeStyle = {
    transform: `translate(${pointer.x * 11}px, ${pointer.y * 9}px)`,
  };

  return (
    <div className="landing-robot-wrap">
      <div
        className="landing-robot"
        style={{ transform: `translate(${pointer.x * 5}px, ${pointer.y * 3}px)` }}
      >
        <div className="landing-robot-antenna" />
        <div
          className="landing-robot-head"
          style={{
            transform: `translateX(-50%) translate(${pointer.x * 4}px, ${pointer.y * 4}px) rotate(${pointer.x * 6}deg)`,
          }}
        >
          <div className="landing-robot-ear landing-robot-ear-left" />
          <div className="landing-robot-ear landing-robot-ear-right" />
          <div
            className={`landing-robot-eye landing-robot-eye-left ${winkSide === "left" ? "is-winking" : ""}`}
          >
            <span style={eyeStyle} />
          </div>
          <div
            className={`landing-robot-eye landing-robot-eye-right ${winkSide === "right" ? "is-winking" : ""}`}
          >
            <span style={eyeStyle} />
          </div>
          <div className="landing-robot-blush landing-robot-blush-left" />
          <div className="landing-robot-blush landing-robot-blush-right" />
          <div className="landing-robot-smile" />
        </div>
        <div className="landing-robot-neck" />
        <div className="landing-robot-body">
          <div className="landing-robot-panel">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="landing-robot-arm landing-robot-arm-left" />
        <div className="landing-robot-arm landing-robot-arm-right landing-robot-wave" />
        <div className="landing-robot-foot landing-robot-foot-left" />
        <div className="landing-robot-foot landing-robot-foot-right" />
      </div>
      <div className="landing-robot-shadow" />
    </div>
  );
};

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

        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10">

        {/* Hero Section */}

        <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">

          {/* Logo + Company Name */}

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">

            <RobotCharacter />

            <div className="flex flex-col items-center lg:items-start">

            <div className="landing-brand-mark flex items-center gap-6">

              <img
                src={logo}
                alt="Pinaki IT"
                className="h-32 w-auto md:h-40"
              />

              <div className="landing-brand-copy">

                <h1 className="landing-brand-title text-5xl font-black leading-tight md:text-7xl">
                  <span className="landing-brand-line landing-brand-line-welcome text-white">Welcome to</span>
                  <span className="landing-brand-line landing-brand-line-name">
                    <span className="text-white">Pinaki</span>{" "}
                    <span className="text-emerald-400">IT !!</span>
                  </span>
                </h1>

                <p className="landing-brand-subtitle mt-2 text-lg uppercase tracking-[0.3em] text-slate-400 md:text-2xl">
                  Consultant Pvt. Ltd.
                </p>

              </div>

            </div>

            <p className="landing-brand-description mt-10 max-w-4xl text-center text-lg leading-8 text-slate-400 md:text-xl lg:text-left">
              Empowering Education, Building Intelligent Software,
              and Delivering AI-Driven Solutions for the Future.
            </p>

          </div>

          </div>

         

         

          {/* Portal Cards */}

          <div className="mt-14 grid w-full gap-8 md:grid-cols-2">

            {/* Education */}

            <Link
              to="/education"
              className="
                group
                min-h-[320px]
                rounded-[40px]
                border
                border-emerald-500/20
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-500
                hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]
              "
            >

              <CardMascot variant="lavender" />

              <h3 className="mt-8 text-4xl font-black">
                Education
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Professional Certifications, AI Programs,
                Placement Preparation, Industry-Oriented
                Training and Career Development.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-emerald-400">
                Enter Education Portal
                <ArrowRight size={18} />
              </div>

            </Link>

            {/* Development */}

            <Link
              to="/development"
              className="
                group
                min-h-[320px]
                rounded-[40px]
                border
                border-blue-500/20
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
              "
            >

              <CardMascot variant="sky" />

              <h3 className="mt-8 text-4xl font-black">
                Development
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Custom Software Development,
                AI Solutions, Cloud Services,
                Automation Systems and Enterprise Applications.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-blue-400">
                Explore Development Services
                <ArrowRight size={18} />
              </div>

            </Link>

          </div>

        </section>
 {/* Heading */}
 <PinakiAI />

          <div className="mt-20 text-center">

            
            <p className="mt-4 text-lg text-slate-400">
              Learn Future Skills or Build Future Technology
            </p>

          </div>
      </div>

    </div>
  );
};

export default Landing;