import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      <a
        href="tel:+919999999999"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-xl transition hover:scale-110"
      >
        <FaPhoneAlt size={20} />

        <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-cyan-400 border-2 border-white"></span>
      </a>

    </div>
  );
};

export default FloatingButtons;