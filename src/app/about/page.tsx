import Header from "@/components/about/header";
import { ImpactSection } from "@/components/about/impact-section";
import { LeaderSection } from "@/components/about/leader-section";
import { ClientMarquee } from "@/components/common/client-marquee";
import CTASection from "@/components/home/cta";
import TestimonialsSection from "@/components/common/testimonial";

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClientMarquee />
      <ImpactSection />
      <LeaderSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
