import type { Metadata } from "next";
import BlogSection from "@/components/home/blogs";
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
    "WABAIS - Empower Your Business with WhatsApp Business API & Chatbot Solutions",
  description:
    "Leverage the power of WhatsApp Business API and intelligent chatbots to transform customer engagement. Streamline support, automate interactions, and boost sales with personalized messaging solutions tailored to your needs.",
  keywords:
    "WhatsApp Business API, WhatsApp Chatbot, WhatsApp Integration, Customer Engagement, Business Automation, WhatsApp Marketing, AI Chatbot for WhatsApp, Messaging API, WhatsApp for Business, Chatbot Solutions",
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
      <BlogSection />
      <CTASection />
    </>
  );
}
