import { useState } from "react";
import axios from "axios";
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus({
        type: "",
        message: "",
      });

      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setStatus({
        type: "success",
        message: res.data.message || "Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full
    rounded-2xl
    border
    border-slate-200
    bg-slate-50/70
    px-5
    py-4
    text-sm
    font-medium
    text-slate-900
    outline-none
    placeholder:text-slate-400
    transition-all
    duration-300
    focus:border-emerald-500
    focus:bg-white
    focus:ring-4
    focus:ring-emerald-500/10
    dark:border-slate-700
    dark:bg-slate-950/60
    dark:text-white
    dark:placeholder:text-slate-500
    dark:focus:border-emerald-400
    dark:focus:bg-slate-950
    dark:focus:ring-emerald-400/10
  `;

  return (
    <section
      id="contact-form"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-900
      "
    >
      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-300/15 blur-[120px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-teal-300/15 blur-[120px] dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <Sparkles size={14} />
            Send us a Message
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              Conversation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Tell us what you're looking for and our team will get back to you
            as soon as possible.
          </p>
        </div>

        {/* Form card */}
        <div className="relative mt-12">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-emerald-400/10 via-transparent to-teal-400/10 blur-2xl dark:from-emerald-500/10 dark:to-teal-500/10" />

          <form
            onSubmit={handleSubmit}
            className="
              relative
              rounded-[30px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-xl
              shadow-slate-900/5
              sm:p-8
              lg:p-10
              dark:border-slate-800
              dark:bg-slate-950
              dark:shadow-black/20
            "
          >
            {/* Form header */}
            <div className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-7 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Tell us how we can help
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                  All fields are required.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 sm:flex dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                <CheckCircle2 size={15} />
                Quick Response
              </div>
            </div>

            {/* Inputs */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Subject
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Message
              </label>

              <textarea
                rows="7"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status */}
            {status.message && (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                    : "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500 dark:text-slate-500">
                Your information will only be used to respond to your
                enquiry.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
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
                  hover:-translate-y-0.5
                  hover:bg-emerald-700
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  dark:bg-emerald-500
                  dark:hover:bg-emerald-400
                  dark:dark:text-slate-950
                "
              >
                <Send
                  size={18}
                  className={loading ? "animate-pulse" : ""}
                />

                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;