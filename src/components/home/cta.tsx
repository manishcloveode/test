import { Button } from "@/components/ui/button";
import MicroHeading from "../common/micro-heading";
import { CornerDownRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-center mb-12">
          <MicroHeading text="Contact us" />
          <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              Ready to unlock seamless Integration?
            </h2>
          </div>
        </div>
        <p className="font-sofia font-lg mb-8">
          Explore a new dimension of customer engagement with WABAIS powerful
          WhatsApp Business API solutions.
        </p>
        <Button
          variant="site-green"
          className="text-xl py-6 px-5 shadow-2xl shadow-[#0C71334F]"
        >
          Contact Us <CornerDownRight />
        </Button>
      </div>
    </section>
  );
}
