import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          bg-gradient-to-r
          from-emerald-600
          via-green-500
          to-teal-500
          p-16
          text-center
          text-white
          shadow-2xl
          "
        >

          <h2 className="text-5xl font-black leading-tight">

            Ready to Build
            <br />

            Your Future?

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-white/90">

            Join thousands of learners who are transforming
            their careers through practical training,
            industry mentorship and placement assistance.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button
              className="
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-emerald-700
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              "
            >

              Explore Programs

            </button>

            <button
              className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-emerald-700
              "
            >

              Contact Us

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;