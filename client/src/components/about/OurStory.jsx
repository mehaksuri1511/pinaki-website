import {
  CheckCircle2,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import storyImage from "../../assets/images/gallery9.png";


const OurStory = () => {
  return (
    <section className="bg-white pt-16 pb-6">

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

    

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">

            More than a Training Institute.

            <br />

            <span className="text-emerald-600">

              A Career Partner.

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Pinaki IT Consultant Pvt. Ltd. was founded with one
            simple mission — to bridge the gap between academic
            learning and real industry expectations.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            Through practical learning, live projects,
            internships, software development and expert
            mentorship, we prepare students and professionals
            for successful careers in technology.

          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-emerald-600" />

              <span className="text-lg">

                Industry-Oriented Curriculum

              </span>

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-emerald-600" />

              <span className="text-lg">

                Live Projects & Practical Learning

              </span>

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-emerald-600" />

              <span className="text-lg">

                Placement Assistance

              </span>

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-emerald-600" />

              <span className="text-lg">

                Corporate Training Programs

              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        {/* RIGHT */}

<div className="relative">

  {/* Glow */}

  <div className="absolute inset-0 scale-105 rounded-[36px] bg-emerald-300/20 blur-3xl"></div>

  <img
    src={storyImage}
    alt="Pinaki IT"
    className="
      relative
      h-[620px]
      w-full
      rounded-[36px]
      border-8
      border-white
      object-cover
      shadow-2xl
      transition-all
      duration-500
      hover:scale-[1.02]
    "
  />

  


</div>

        </div>

  

    </section>
  );
};

export default OurStory;