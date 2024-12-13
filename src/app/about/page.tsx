import Header from "@/components/about/header";
import { ImpactSection } from "@/components/about/impact-section";
import { LeaderSection } from "@/components/about/leader-section";
import { ClientMarquee } from "@/components/common/client-marquee";
import CTASection from "@/components/home/cta";
import TestimonialsSection from "@/components/common/testimonial";
import HeaderBanner from "@/components/common/header-banner";

export default function About() {
  return (
    <>
      <HeaderBanner
        pageName="About Us"
        backgroundImage="/img/team.webp"
        height="h-96"
      />
      <Header />
      <ClientMarquee />
      <ImpactSection />
      <LeaderSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
