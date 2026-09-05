import Hero from "../components/sections/Hero";
import FeatureStrip from "../components/sections/FeatureStrip";
import TrustedBy from "../components/sections/TrustedBy";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import GoogleReviews from "../components/sections/GoogleReviews";

import ScrollReveal from "../components/common/ScrollReveal";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <Hero />

      {/* Feature Strip */}
      <ScrollReveal>
        <FeatureStrip />
      </ScrollReveal>

      {/* Trusted By */}
      <ScrollReveal delay={0.05}>
        <TrustedBy />
      </ScrollReveal>

      {/* Gallery */}
      <ScrollReveal delay={0.05}>
        <Gallery />
      </ScrollReveal>

      {/* Google Reviews */}
      <ScrollReveal delay={0.05}>
        <GoogleReviews />
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal delay={0.05}>
        <Testimonials />
      </ScrollReveal>
    </main>
  );
};

export default Home;