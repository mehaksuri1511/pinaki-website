import {
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-white pt-6 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Mission.
            <span className="text-emerald-600">
              {" "}Vision.
            </span>
            {" "}Values.

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">

            Everything we do is driven by a commitment to innovation,
            practical learning and creating opportunities for every learner.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Mission */}

          <div
            className="
            group
            rounded-[36px]
            border
            border-emerald-100
            bg-white
            p-10
            shadow-lg
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <Target
                className="text-emerald-600"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold">

              Mission

            </h3>

            <p className="mt-6 leading-8 text-slate-600">

              To empower students and professionals with
              practical technical knowledge, industry exposure,
              mentorship and career opportunities that prepare
              them for real-world success.

            </p>

          </div>

          {/* Vision */}

          <div
            className="
            group
            rounded-[36px]
            bg-gradient-to-br
            from-emerald-600
            to-green-500
            p-10
            text-white
            shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-3
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

              <Eye
                size={32}
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold">

              Vision

            </h3>

            <p className="mt-6 leading-8 text-white/90">

              To become one of India's most trusted
              technology education and consulting
              organizations, transforming lives through
              innovation, learning and excellence.

            </p>

          </div>

          {/* Values */}

          <div
            className="
            group
            rounded-[36px]
            border
            border-emerald-100
            bg-white
            p-10
            shadow-lg
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <HeartHandshake
                className="text-emerald-600"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold">

              Core Values

            </h3>

            <div className="mt-6 space-y-4">

              <p>✔ Innovation</p>

              <p>✔ Integrity</p>

              <p>✔ Excellence</p>

              <p>✔ Continuous Learning</p>

              <p>✔ Student Success</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;