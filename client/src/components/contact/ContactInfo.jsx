import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-emerald-300/15 blur-[120px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-300/15 blur-[120px] dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <Sparkles size={14} />
              Visit Our Office
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                Touch
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              Whether you want to discuss training, software development,
              internships or a business collaboration, our team is ready to
              connect.
            </p>

            {/* Contact items */}
            <div className="mt-9 space-y-3">
              {/* Address */}
              <div
                className="
                  group
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-300
                  hover:bg-emerald-50/50
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:border-emerald-500/40
                  dark:hover:bg-emerald-950/20
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Office Address
                  </p>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
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
              <a
                href="tel:+919540855058"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-300
                  hover:bg-emerald-50/50
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:border-emerald-500/40
                  dark:hover:bg-emerald-950/20
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Phone size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    +91 95408 55058
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:info@pinakiit.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-300
                  hover:bg-emerald-50/50
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:border-emerald-500/40
                  dark:hover:bg-emerald-950/20
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Mail size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    info@pinakiit.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500"
                />
              </a>

              {/* Website */}
              <a
                href="https://pinakiithub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-300
                  hover:bg-emerald-50/50
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:border-emerald-500/40
                  dark:hover:bg-emerald-950/20
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Globe size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Website
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    www.pinakiithub.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500"
                />
              </a>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-emerald-400/15 via-transparent to-teal-400/15 blur-2xl dark:from-emerald-500/10 dark:to-teal-500/10" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 p-2 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
              <div className="relative overflow-hidden rounded-[24px]">
                <iframe
                  title="Pinaki IT Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.105491080909!2d77.37562177550053!3d28.626600275667958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzM1LjgiTiA3N8KwMjInNDEuNSJF!5e0!3m2!1sen!2sin!4v1786002645926!5m2!1sen!2sin"
                  className="h-[400px] w-full sm:h-[500px] lg:h-[560px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

                {/* Map overlay */}
                <div className="pointer-events-none absolute inset-x-4 bottom-4">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-slate-950/75 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500">
                        <Navigation size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Find Us
                        </p>
                        <p className="text-sm font-semibold">
                          Sector 63, Noida
                        </p>
                      </div>
                    </div>

                    <MapPin size={18} className="text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;