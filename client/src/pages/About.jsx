import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import FounderSection from "../components/about/FounderSection";
import Timeline from "../components/about/Timeline";
import WhyChoose from "../components/about/WhyChoose";

import ScrollReveal from "../components/common/ScrollReveal";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO ================= */}

      <AboutHero />

      {/* ================= OUR STORY ================= */}

      <ScrollReveal>
        <OurStory />
      </ScrollReveal>

      {/* ================= MISSION & VISION ================= */}

      <ScrollReveal delay={0.05}>
        <MissionVision />
      </ScrollReveal>

      {/* ================= FOUNDER ================= */}

      <ScrollReveal delay={0.05}>
        <FounderSection />
      </ScrollReveal>

      {/* ================= TIMELINE ================= */}

      <ScrollReveal delay={0.05}>
        <Timeline />
      </ScrollReveal>

      {/* ================= WHY CHOOSE US ================= */}

      <ScrollReveal delay={0.05}>
        <WhyChoose />
      </ScrollReveal>
    </main>
  );
};

export default About;