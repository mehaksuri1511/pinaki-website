import { ArrowRight, PlayCircle } from "lucide-react";
import founder from "../../assets/images/founder.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

      {/* Background Blur */}
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-emerald-200/40 blur-[120px]" />

      <div className="absolute right-[-150px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-green-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid min-h-[88vh] items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            {/* Small Text */}

            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-md">

              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">

                LEARN • BUILD • GROW

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 md:text-7xl">

              Build

              <br />

              Future-Ready

              <br />

              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">

                IT Careers.

              </span>

            </h1>

            {/* Paragraph */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">

              Learn from industry experts, work on live projects,
              gain practical skills and accelerate your career
              through professional training, internships,
              software development and placement assistance.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                className="
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

              </button>

              <button
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-300
                bg-white
                px-8
                py-4
                font-semibold
                text-slate-700
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

            {/* Floating Card 1 */}

            <div
  className="
  absolute
  -left-12
  top-16
  hidden
  lg:flex
  items-center
  gap-4
  rounded-3xl
  bg-white/80
  backdrop-blur-2xl
  border
  border-white
  px-6
  py-5
  shadow-[0_25px_60px_rgba(16,185,129,.15)]
  animate-float1
"
>

  <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
    🎓
  </div>



</div>

            {/* Floating Card 2 */}

            <div
  className="
  absolute
  -right-10
  bottom-24
  hidden
  lg:flex
  items-center
  gap-4
  rounded-3xl
  bg-white/80
  backdrop-blur-2xl
  border
  border-white
  px-6
  py-5
  shadow-[0_25px_60px_rgba(16,185,129,.15)]
  animate-float2
"
>

  <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
    💼
  </div>

  <div>

    <h3 className="text-3xl font-black text-emerald-600">
      100+
    </h3>

    <p className="text-slate-500">
      Corporate Clients
    </p>

  </div>

</div>
            {/* Founder Card */}

            <div
              className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/70
              bg-white/60
              p-4
              shadow-[0_40px_80px_rgba(16,185,129,.18)]
              backdrop-blur-xl
              "
            >

              <img
  src={founder}
  alt="Founder"
  className="
    founder-image
    h-[680px]
    w-full
    max-w-lg
    rounded-[34px]
    object-cover
    transition-all
    duration-500
    hover:scale-[1.02]
  "

              />

              {/* Founder Name */}

              <div
className="
absolute
left-8
bottom-8
rounded-[26px]
bg-white/85
backdrop-blur-xl
border
border-white
px-7
py-5
shadow-2xl
"
>

<h2 className="text-2xl font-bold">
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