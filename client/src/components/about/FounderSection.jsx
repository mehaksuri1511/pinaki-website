import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Quote,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import founder from "../../assets/images/founder.png";

const FounderSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
            OUR FOUNDER
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Meet The Vision Behind
            <span className="text-emerald-600"> Pinaki IT</span>
          </h2>

        </div>

        {/* Card */}

        <div className="mt-12 overflow-hidden rounded-[40px] bg-white shadow-2xl">

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative">

              <img
                src={founder}
                alt="Founder"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Content */}

            <div className="p-12">

              <Quote
                className="text-emerald-400"
                size={52}
              />

              <h2 className="mt-6 text-4xl font-black">

                Dhruv Govil

              </h2>

              <p className="mt-2 text-lg text-emerald-600 font-semibold">

                CEO & Founder

              </p>

              <p className="mt-8 text-lg leading-9 text-slate-600">

                "Education should never stop at theory.
                Real learning begins when knowledge meets
                practical implementation."

              </p>

              {/* Button */}

              <button
                onClick={() => setExpanded(!expanded)}
                className="
                mt-10
                flex
                items-center
                gap-3
                rounded-full
                bg-emerald-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-emerald-700
                "
              >

                {expanded
                  ? "Show Less"
                  : "Read More About Our Founder"}

                {expanded
                  ? <ChevronUp size={20} />
                  : <ChevronDown size={20} />}

              </button>

              {/* Expand */}

              <div
                className={`
                overflow-hidden
                transition-all
                duration-700
                ${
                  expanded
                    ? "max-h-[1000px] opacity-100 mt-10"
                    : "max-h-0 opacity-0"
                }
                `}
              >

                <div className="space-y-8">

                  <p className="leading-8 text-slate-600">

                    Dhruv Govil founded Pinaki IT Consultant
                    with the vision of preparing students
                    for the rapidly evolving technology
                    industry. His focus has always been on
                    bridging the gap between academic
                    learning and real-world skills through
                    practical exposure, mentorship and
                    innovation.

                  </p>

                  <p className="leading-8 text-slate-600">

                    Under his leadership, Pinaki IT has
                    trained thousands of students,
                    collaborated with organizations,
                    delivered software solutions and
                    helped aspiring professionals build
                    successful careers.

                  </p>

                  {/* Vision */}

                  <div className="rounded-3xl bg-emerald-50 p-8">

                    <h3 className="text-2xl font-bold">

                      Vision

                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">

                      To create an ecosystem where every
                      learner gains practical skills,
                      confidence and opportunities to
                      become an industry-ready
                      professional.

                    </p>

                  </div>

                  {/* LinkedIn */}

                  <a
                    href="#"
                    className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-emerald-200
                    px-6
                    py-3
                    font-semibold
                    hover:bg-emerald-600
                    hover:text-white
                    transition
                    "
                  >

                    <FaLinkedinIn size={20} />

                    Connect on LinkedIn

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FounderSection;