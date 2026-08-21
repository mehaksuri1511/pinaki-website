import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {




  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/pinaki-logo.jpeg.png";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 -translate-y-14">

        <div className="rounded-[32px] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-10 md:p-14 shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Ready to Shape Your Future?
              </h2>

              <p className="mt-4 text-lg text-white/90 max-w-xl">
                Join thousands of students building industry-ready skills
                through expert-led training, internships and placement
                assistance.
              </p>
            </div>

            <button
              className="
                bg-white
                text-emerald-700
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-lg
                hover:shadow-emerald-300/40
                hover:-translate-y-1
                hover:scale-105
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              Explore Programs
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Company */}
          <div>

            <img
              src={logo}
              alt="Pinaki IT"
              className="h-14 rounded-xl bg-white p-2"
            />

            <h3 className="mt-6 text-2xl font-bold">
              Pinaki IT Consultant Pvt. Ltd.
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Empowering students and businesses through
              industry-focused training, innovative software
              solutions and placement assistance.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              What We Offer
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>✔ Industrial Training</li>

              <li>✔ Live Classes</li>

              <li>✔ Placement Assistance</li>

              <li>✔ Internship Programs</li>

              <li>✔ Software Development</li>

              <li>✔ Corporate IT Solutions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="text-emerald-400 mt-1" />
                <p className="text-slate-400">
                  H-114, Office no-FF-01,
                  <br />
                  Noida sector 63, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-emerald-400" />
                <p className="text-slate-400">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-emerald-400" />
                <p className="text-slate-400">
                  hello@pinakiit.com
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500">
            © 2026 Pinaki IT Consultant Pvt. Ltd. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Crafted with 💚 for Future Innovators
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;