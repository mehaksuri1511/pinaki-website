import { MapPin, ArrowRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 via-white to-white pt-24 pb-16">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}

        <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Contact Pinaki IT
        </span>

        {/* Heading */}

        <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
          Let's Talk About
          <br />

          <span className="text-emerald-600">
            Your Next Opportunity
          </span>
        </h1>

        {/* Description */}

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
  Have a question, project idea or partnership in mind?
  We're just one conversation away.
</p>

        {/* Button */}

        <div className="mt-10">

          <a
            href="https://maps.google.com/?q=28.626600275667958,77.37820677550053"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
          >
            <MapPin size={20} />

            Get Directions

            <ArrowRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;