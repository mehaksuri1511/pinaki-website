import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/contact/FAQSection";
import ScrollReveal from "../components/common/ScrollReveal";

const Contact = () => {
  return (
    <main className="overflow-x-hidden">
      <ScrollReveal delay={0.08} duration={1.15}>
      <ContactHero />
      </ScrollReveal>

      <ScrollReveal delay={0.08} duration={1.15}>
        <ContactInfo />
      </ScrollReveal>

      <ScrollReveal delay={0.08} duration={1.15}>
        <ContactForm />
      </ScrollReveal>

      <ScrollReveal delay={0.08} duration={1.15}>
        <FAQSection />
      </ScrollReveal>
    </main>
  );
};

export default Contact;