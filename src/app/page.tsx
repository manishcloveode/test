import type { Metadata } from "next";
// import BlogSection from "@/components/home/blogs";
import { ClientMarquee } from "@/components/home/client-marquee";
import CTASection from "@/components/home/cta";
import FAQSection from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Integrations from "@/components/home/integration";
import PricingSection from "@/components/home/pricing";
import TestimonialsSection from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  title:
    "Exclusive Offers on WhatsApp Business API & Chatbot Solutions – Transform Your Business",
  description:
    "Unlock amazing deals on WhatsApp Business API and intelligent chatbot solutions! Enhance customer engagement, automate interactions, and drive sales with our exclusive offers. Great offers on WhatsApp Business API. Free WhatsApp Business API.",
  keywords:
    "WhatsApp Business API offers, WhatsApp Chatbot deals, exclusive WhatsApp API discounts, WhatsApp Integration promotions, chatbot offers, business automation deals, WhatsApp marketing discounts, AI chatbot solutions, special business offers, WhatsApp customer engagement, Free WhatsApp API, Free WhatsApp Api provider, Best WhatsApp Business API, Best WhatsApp API Provider",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <WhyChooseUs />
      <Integrations />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <BlogSection /> */}
      <CTASection />
    </>
  );
}
