import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PinakiAI = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          rounded-full
          bg-emerald-500
          px-5 py-3
          text-white
          shadow-2xl
          hover:bg-emerald-600
          transition
        "
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        Pinaki AI
      </button>

      {/* Chat Window */}

      {open && (
        <div
          className="
            fixed bottom-24 right-6 z-50
            w-[350px]
            rounded-3xl
            border border-emerald-500/20
            bg-[#0B1220]
            p-5
            shadow-2xl
          "
        >
          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Pinaki"
              className="h-10 w-10 rounded-full"
            />

            <div>
              <h3 className="font-bold text-white">
                Pinaki AI
              </h3>

              <p className="text-xs text-emerald-400">
                Online
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-2xl bg-slate-800 p-4">
            <p className="text-sm text-slate-300">
              👋 Hi, I'm Pinaki AI Assistant.
              <br />
              How can I help you today?
            </p>
          </div>

          <div className="mt-4 space-y-2">

            <button className="w-full rounded-xl bg-slate-800 p-3 text-left text-white hover:bg-slate-700">
              🎓 Explore Courses
            </button>

            <button className="w-full rounded-xl bg-slate-800 p-3 text-left text-white hover:bg-slate-700">
              💼 Placement Support
            </button>

            <button className="w-full rounded-xl bg-slate-800 p-3 text-left text-white hover:bg-slate-700">
              ☁️ Development Services
            </button>

            <button className="w-full rounded-xl bg-slate-800 p-3 text-left text-white hover:bg-slate-700">
              📞 Contact Team
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default PinakiAI;