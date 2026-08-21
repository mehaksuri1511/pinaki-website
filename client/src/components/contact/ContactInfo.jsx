import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold tracking-wider uppercase text-emerald-700">
            Visit Our Office
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Get In Touch
          </h2>

          {/* Contact Cards */}

          <div className="mt-12 space-y-8">

            {/* Address */}

            <div className="flex items-start gap-5">

              <div className="rounded-2xl bg-emerald-100 p-3">
                <MapPin className="text-emerald-600" size={24} />
              </div>

              <div>

                <h4 className="text-xl font-bold text-slate-900">
                  Office Address
                </h4>

                <p className="mt-2 leading-7 text-slate-600">
                  Pinaki IT Consultant Pvt. Ltd.
                  <br />
                  H-114, Office No. FF-01,
                  <br />
                  Sector 63,
                  <br />
                  Noida, Uttar Pradesh
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-start gap-5">

              <div className="rounded-2xl bg-emerald-100 p-3">
                <Phone className="text-emerald-600" size={24} />
              </div>

              <div>

                <h4 className="text-xl font-bold text-slate-900">
                  Phone
                </h4>

                <a
                  href="tel:+919540855058"
                  className="mt-2 inline-block text-slate-600 transition hover:text-emerald-600"
                >
                  +91 95408 55058
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-5">

              <div className="rounded-2xl bg-emerald-100 p-3">
                <Mail className="text-emerald-600" size={24} />
              </div>

              <div>

                <h4 className="text-xl font-bold text-slate-900">
                  Email
                </h4>

                <a
                  href="mailto:info@pinakiit.com"
                  className="mt-2 inline-block text-slate-600 transition hover:text-emerald-600"
                >
                  info@pinakiit.com
                </a>

              </div>

            </div>

            {/* Website */}

            <div className="flex items-start gap-5">

              <div className="rounded-2xl bg-emerald-100 p-3">
                <Globe className="text-emerald-600" size={24} />
              </div>

              <div>

                <h4 className="text-xl font-bold text-slate-900">
                  Website
                </h4>

                <a
                  href="https://pinakiithub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-slate-600 transition hover:text-emerald-600"
                >
                  www.pinakiithub.com
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="overflow-hidden rounded-[32px] border border-emerald-100 shadow-2xl">

          <iframe
            title="Pinaki IT Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.105491080909!2d77.37562177550053!3d28.626600275667958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzM1LjgiTiA3N8KwMjInNDEuNSJF!5e0!3m2!1sen!2sin!4v1786002645926!5m2!1sen!2sin"
            className="h-[560px] w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;