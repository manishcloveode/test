import HeaderBanner from "@/components/common/header-banner";
import ContactForm from "@/components/contact/contact-form";
import CTASection from "@/components/home/cta";
import FAQSection from "@/components/home/faq";

export default function Contact() {
  return (
    <>
      <HeaderBanner
        pageName="Contact Us"
        backgroundImage="/img/contact.webp"
        height="h-96"
      />
      <ContactForm />
      <FAQSection />
      <CTASection />
    </>
  );
}
