import BlogSection from "@/components/home/blogs";
import { ClientMarquee } from "@/components/home/client-marquee";
import CTASection from "@/components/home/cta";
import FAQSection from "@/components/home/faq";
import Hero from "@/components/home/hero";
import PricingSection from "@/components/home/pricing";
import TestimonialsSection from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <WhyChooseUs />
      {/* <InteractiveIntegrationLayout /> */}
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
