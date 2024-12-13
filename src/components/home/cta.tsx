import { buttonVariants } from "@/components/ui/button";
import MicroHeading from "@/components/common/micro-heading";
import { CornerDownRight } from "lucide-react";
import RetroGrid from "@/components/ui/retro-grid";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-4">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-24">
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
          {/* <Button
            variant="site-green"
            className="text-xl py-6 px-5 shadow-2xl shadow-[#0C71334F]"
          >
            Contact Us <CornerDownRight />
          </Button> */}
          <Link
            href="/pricing"
            className={buttonVariants({ variant: "site-green" })}
          >
            Our Pricing <CornerDownRight />
          </Link>
        </div>
        <RetroGrid />
      </div>
    </section>
  );
}
