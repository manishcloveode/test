import CTASection from "@/components/home/cta";
import PricingSection from "@/components/common/pricing";
import FAQSection from "@/components/home/faq";
import HeaderBanner from "@/components/common/header-banner";

export default function Pricing() {
  return (
    <>
      <HeaderBanner
        pageName="Our Pricing"
        backgroundImage="/img/blog.webp"
        height="h-96"
      />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
