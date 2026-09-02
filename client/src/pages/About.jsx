import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import FounderSection from "../components/about/FounderSection";
import Timeline from "../components/about/Timeline";
import WhyChoose from "../components/about/WhyChoose";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <FounderSection />
      <Timeline />
      <WhyChoose />
    </main>
  );
};

export default About;