import { Users, Rocket, Facebook } from "lucide-react";
import { ImpactCard } from "./impact-card";
import MicroHeading from "../common/micro-heading";

export function ImpactSection() {
  return (
    <section className="py-24 px-4 border-y">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <MicroHeading text="STATISTICS" />
          <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              The impact of our solution
            </h2>
            <p className="my-2 text-lg font-sofia">
              See how WABAIS transforms communication, streamlines operations,
              and drives growth for businesses using our WhatsApp Business AP
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard
            icon={Users}
            title="Customer Reach"
            description="Over 2,000 businesses worldwide trust our customer communication on WhatsApp"
          />
          <ImpactCard
            icon={Rocket}
            title="Efficiency Boost"
            description="Save up to 60% of customer support time with our AI-powered WhatsApp Business API solutions"
          />
          <ImpactCard
            icon={Facebook}
            title="Engagement Rate"
            description="Businesses using WhatsApp saw up to 170% increase in their customer base within the first month"
          />
        </div>
      </div>
    </section>
  );
}
