import { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Send us a Message
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Let's Start a Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-16 rounded-[32px] bg-white p-10 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
            />

          </div>

          <textarea
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="mt-6 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700"
          >
            <Send size={20} />
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;