import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Check, CornerDownRight } from "lucide-react";
import MicroHeading from "../common/micro-heading";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[#fbfffc]">
      <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-4  container mx-auto">
        {/* Left Side */}

        <Badge className="animate-wiggle absolute hidden md:flex top-[8%] left-[10%] items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          Seamless Integration
        </Badge>

        <Badge className="animate-wiggle absolute hidden md:flex top-[40%] left-[0%] items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          Chat bot
        </Badge>

        <Badge className="animate-wiggle absolute hidden md:flex bottom-[2%] left-[3%] items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          User-Friendly
        </Badge>

        {/* Right Side */}

        <Badge className="animate-wiggle absolute hidden md:flex top-[8%] right-[3%] items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          Trusted by Leading Businesses
        </Badge>

        <Badge className="animate-wiggle absolute hidden md:flex top-[40%] right-[1%] items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          User-Friendly
        </Badge>

        <Badge className="animate-wiggle absolute hidden md:flex bottom-[2%] right-[1%] md:right-52 items-center gap-2 font-sofia text-lg rounded-3xl py-2 bg-transparent border border-site-green text-site-green hover:bg-transparent">
          <span className="bg-site-green text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </span>
          Efficient Task and Team Management
        </Badge>

        <div className="max-w-4xl mx-auto text-center space-y-6 h-full flex flex-col justify-center items-center">
          <MicroHeading text="WELCOME TO WABAIS" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight font-vesper">
            The Ultimate WhatsApp Business API Solution
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto font-sofia text-lg">
            Streamline collaboration and boost productivity with our WhatsApp
            Business API solutions, tailored for your business needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#pricing"
              className={`${buttonVariants({
                variant: "site-green",
              })} text-xl py-6 px-5 shadow-2xl shadow-[#0C71334F]`}
            >
              Get Started <CornerDownRight />
            </Link>

            <Link
              href="#pricing"
              className={`${buttonVariants({
                variant: "default",
              })} text-xl py-6 px-5 shadow-2xl shadow-black/90`}
            >
              Our Pricing <CornerDownRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
