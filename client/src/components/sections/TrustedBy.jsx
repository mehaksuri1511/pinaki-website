import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Award,
} from "lucide-react";

import StatsCard from "../common/StatsCard";
import LogoSlider from "../common/LogoSlider";

const TrustedBy = () => {
  return (
    <section
      className="
        relative

        bg-gradient-to-b
        from-white
        via-emerald-50
        to-white

        dark:from-slate-950
        dark:via-slate-950
        dark:to-slate-900

        pt-24
        pb-10

        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="text-center">

          <h2
            className="
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight

              lg:text-5xl
            "
          >
            <span
              className="
                text-slate-900
                dark:text-white
              "
            >
              Trusted by{" "}
            </span>

            <span
              className="
                bg-gradient-to-r
                from-green-600
                via-emerald-500
                to-green-400
                bg-clip-text
                text-transparent
              "
            >
              Students
            </span>

            <span
              className="
                text-slate-900
                dark:text-white
              "
            >
              , Businesses &
              <br className="hidden md:block" />
              Institutions
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8

              text-slate-600
              dark:text-slate-300

              transition-colors
              duration-300
            "
          >
            Empowering students with future-ready skills while helping
            organizations accelerate digital transformation through innovative
            IT solutions.
          </p>

        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div
          className="
            mt-14
            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <StatsCard
            icon={<GraduationCap size={32} />}
            value="5000+"
            label="Students Trained"
          />

          <StatsCard
            icon={<BriefcaseBusiness size={32} />}
            value="200+"
            label="Projects Delivered"
          />

          <StatsCard
            icon={<Building2 size={32} />}
            value="100+"
            label="Corporate Clients"
          />

          <StatsCard
            icon={<Award size={32} />}
            value="16+"
            label="Years of Excellence"
          />

        </div>

        {/* ================================================= */}
        {/* LOGO SLIDER */}
        {/* ================================================= */}

        <div className="mt-16">
          <LogoSlider />
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;