
import Hero from "../components/sections/Hero";
import FeatureStrip from "../components/sections/FeatureStrip";
import StudyResources from "../components/sections/StudyResources";
import TrustedBy from "../components/sections/TrustedBy";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <StudyResources />
      <TrustedBy />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;