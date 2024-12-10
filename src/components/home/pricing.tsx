import { Check, CornerLeftDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MicroHeading from "../common/micro-heading";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "49.99",
      description:
        "nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware",
      features: [
        "INR 0.82 Per Marketing Conversation",
        "INR 0.35 Per Service/Utility/Auth Conversation",
        "Email Support",
        "Whatsapp Broadcast",
        "Phone Support",
      ],
      variant: "basic",
      buttonVariant: "default" as const,
    },
    {
      name: "Advanced Plan",
      price: "49.99",
      description:
        "nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware",
      features: [
        "INR 0.82 Per Marketing Conversation",
        "INR 0.35 Per Service/Utility/Auth Conversation",
        "Email Support",
        "Whatsapp Broadcast",
        "Phone Support",
      ],
      variant: "popular",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Starter Plan",
      price: "49.99",
      description:
        "nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware",
      features: [
        "INR 0.82 Per Marketing Conversation",
        "INR 0.35 Per Service/Utility/Auth Conversation",
        "Email Support",
        "Whatsapp Broadcast",
        "Phone Support",
      ],
      variant: "dark",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <MicroHeading text="Pricing" />
        <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
            We have the best plan for you, Get started now!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div key={index}>
              {plan.popular && (
                <div className="flex justify-center w-full bg-site-green h-[100px] rounded-3xl mb-[-10%]">
                  <div className=" text-white flex font-sofia text-xl gap-2 mt-4 justify-center">
                    Popular <CornerLeftDown />
                  </div>
                </div>
              )}
              <Card
                className={`relative rounded-3xl ${
                  plan.variant === "popular"
                    ? "bg-[#1B4332] text-white border-none"
                    : plan.variant === "dark"
                    ? "bg-black text-white"
                    : "bg-[#DEDEDE26]"
                }`}
              >
                <CardHeader className="relative">
                  <Badge
                    className={`w-fit rounded-3xl px-3 py-2 ${
                      plan.variant === "popular"
                        ? "bg-white text-[#1B4332]"
                        : plan.variant === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {plan.name}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-medium font-sofia">$</span>
                      <span className="text-4xl font-medium font-sofia">
                        {plan.price}
                      </span>
                      <span className="ml-1 font-sofia text-lg">permonth</span>
                    </div>
                    <p className="mt-2 text-lg opacity-80 font-sofia">
                      {plan.description}
                    </p>
                  </div>
                  <Button
                    className={`w-full ${
                      plan.variant === "popular"
                        ? "bg-[#00D652] hover:bg-[#00B37E]/90 text-black"
                        : plan.variant === "dark"
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-black text-white hover:bg-black/90"
                    }`}
                  >
                    Buy Plan
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-md font-sofia"
                      >
                        <Check
                          className={
                            plan.variant === "popular"
                              ? "text-site-green bg-[#FBC02D] p-1 rounded-full h-6 w-6 "
                              : plan.variant === "basic"
                              ? "text-white bg-site-green p-1 rounded-full h-6 w-6 "
                              : "text-white bg-site-green p-1 rounded-full h-6 w-6 "
                          }
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
