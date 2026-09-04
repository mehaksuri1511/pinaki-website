import { ArrowRight, MapPin, MessageCircle, Sparkles } from "lucide-react";

const ContactHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        dark:bg-slate-950
      "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-[110px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-300/20 blur-[120px] dark:bg-teal-500/10" />

      {/* Grid texture */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.035]
          dark:opacity-[0.04]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <Sparkles size={14} />
            Contact Pinaki IT
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Let's Talk About
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
              Your Next Opportunity
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
            Have a question, project idea or partnership in mind? We're just
            one conversation away.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://maps.google.com/?q=28.626600275667958,77.37820677550053"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-emerald-600
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-emerald-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-emerald-700
                hover:shadow-xl
                hover:shadow-emerald-600/25
              "
            >
              <MapPin size={18} />

              Get Directions

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact-form"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white/80
                px-7
                py-3.5
                text-sm
                font-bold
                text-slate-700
                shadow-sm
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-300
                hover:text-emerald-700
                dark:border-slate-700
                dark:bg-slate-900/70
                dark:text-slate-300
                dark:hover:border-emerald-500/50
                dark:hover:text-emerald-400
              "
            >
              <MessageCircle size={18} />
              Send a Message
            </a>
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
          Let's build something meaningful
          <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;