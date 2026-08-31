import { ArrowRight, PlayCircle } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Blur */}
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-emerald-200/40 blur-[120px]" />

      <div className="absolute right-[-150px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-green-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid min-h-screen items-center gap-20 lg:grid-cols-2 pb-24 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            {/* Small Text */}

            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white dark:bg-slate-800 px-5 py-2 shadow-md">

              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">

                LEARN • BUILD • GROW

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white md:text-7xl">

              Build

              <br />

              Future-Ready

              <br />

              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">

                IT Careers.

              </span>

            </h1>

            {/* Paragraph */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600 dark:text-slate-300">

              Learn from industry experts, work on live projects,
              gain practical skills and accelerate your career
              through professional training, internships,
              software development and placement assistance.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
  href="#courses"
  className="
    inline-flex
    rounded-full
    bg-gradient-to-r
    from-emerald-600
    to-green-500
    px-8
    py-4
    font-semibold
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
>
  <span className="flex items-center gap-2">
    Explore Programs
    <ArrowRight size={18} />
  </span>
</a>

              <button
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-300 dark:border-slate-700
                bg-white dark:bg-slate-800
                px-8
                py-4
                font-semibold
                text-slate-700 dark:text-white
                transition-all
                duration-300
                hover:border-emerald-500
                hover:text-emerald-600
                "
              >

                <PlayCircle size={20} />

                Meet Our Founder

              </button>

            </div>

            {/* Quick Stats */}

            

          </div>
                    {/* RIGHT SIDE */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Background Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-emerald-300/20 blur-[120px]" />

            {/* Founder Card */}

            <div
              className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/70
              bg-white/60 dark:bg-slate-900/70
              p-4
              shadow-[0_40px_80px_rgba(16,185,129,.18)]
              backdrop-blur-xl
              "
            >
              {/* /> */}

              {/* Founder Name */}

              <div
className="
absolute
left-8
bottom-8
rounded-[26px]
bg-white/85 dark:bg-slate-800/90
backdrop-blur-xl
border
border-white
px-7
py-5
shadow-2xl
"
>

<h2 className="text-2xl font-bold dark:text-white">
Dhruv Govil
</h2>

<p className="mt-1 text-emerald-600 font-medium">
CEO & Founder
</p>

</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;