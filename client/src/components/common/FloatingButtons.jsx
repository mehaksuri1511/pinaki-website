import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed left-6 bottom-6 z-50 flex  gap-4">

      <a
        href="https://wa.me/919540855058"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      <a
        href="tel:+919540855058"
        className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-white shadow-xl transition hover:scale-110"
      >
        <FaPhoneAlt size={20} />

        <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-cyan-400 border-2 border-white"></span>
      </a>

    </div>
  );
};

export default FloatingButtons;