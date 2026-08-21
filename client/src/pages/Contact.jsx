import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/contact/FAQSection";

const Contact = () => {
  return (
    <main className="overflow-x-hidden">
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <FAQSection />
    </main>
  );
};

export default Contact;