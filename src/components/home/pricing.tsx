"use client";
import React, { useState, useEffect } from "react";
import { Check, CornerLeftDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import MicroHeading from "../common/micro-heading";

// Types for API response
interface PriceDetail {
  currency: string;
  amount: number;
  _id: string;
}

interface Feature {
  name: string;
  value: number;
  _id: string;
}

interface Offer {
  startDate: string;
  endDate: string;
  type: string;
  value: string;
}

interface SubscriptionPlan {
  _id: string;
  name: string;
  frequency: "Monthly" | "Yearly";
  price: PriceDetail[];
  is_trial: boolean;
  trial_duration: number;
  features: Feature[];
  is_hidden: boolean;
  description: string;
  term_and_condition: string;
  is_featured: boolean;
  feature_lebel: string;
  referral_percentage: number;
  status: string;
  slug: string;
  offers: Offer;
}

interface ApiResponse {
  message: string;
  data: SubscriptionPlan[];
  success: boolean;
}

// Types for component state
type PlanVariant = "basic" | "popular" | "dark";
type BillingFrequency = "monthly" | "yearly";

interface ProcessedPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  variant: PlanVariant;
  buttonVariant: "default";
  popular: boolean;
}

// Plan descriptions based on tier
const planDescriptions: Record<string, string> = {
  Starter:
    "Perfect for small businesses starting their digital journey. Includes essential features for basic business communication.",
  Intermediate:
    "Ideal for growing businesses needing advanced features and higher message limits. Best value for most businesses.",
  Advance:
    "Enterprise-grade solution with maximum capabilities. Perfect for large-scale operations and high-volume messaging.",
};

export default function PricingSection() {
  const [frequency, setFrequency] = useState<BillingFrequency>("monthly");
  const [plans, setPlans] = useState<ProcessedPlan[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlans();
  }, [frequency]);

  const getVariant = (name: string): PlanVariant => {
    switch (name.toLowerCase()) {
      case "starter":
        return "basic";
      case "intermediate":
        return "popular";
      case "advance":
        return "dark";
      default:
        return "basic";
    }
  };

  const fetchPlans = async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://api.wabais.com/api/v1/subscription?frequency=${frequency}`
      );
      const data: ApiResponse = await response.json();

      if (data.success) {
        const processedPlans = data.data.map((plan) => ({
          name: plan.name,
          price: plan.price[0].amount,
          description:
            planDescriptions[plan.name] ||
            plan.description ||
            "Advanced features to supercharge your business communication",
          features: plan.features.map((feature) => feature.name),
          variant: getVariant(plan.name),
          buttonVariant: "default" as const,
          popular: plan.name === "Intermediate",
        }));
        console.log(processedPlans);
        setPlans(processedPlans);
      } else {
        setError("Failed to fetch pricing plans");
      }
    } catch (error) {
      setError("Error connecting to the server");
      console.error("Error fetching plans:", error);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <p className="text-lg">{error}</p>
        <Button onClick={fetchPlans} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <section id="pricing" className="py-16">
      <div className="container px-4 mx-auto">
        <MicroHeading text="Pricing" />
        <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
            We have the best plan for you, Get started now!
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`text-lg font-medium font-sofia${
                frequency === "monthly" ? "text-[#1B4332] " : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={frequency === "yearly"}
              onCheckedChange={() =>
                setFrequency((prev) =>
                  prev === "monthly" ? "yearly" : "monthly"
                )
              }
              className="bg-[#1B4332]"
            />
            <span
              className={`text-lg font-medium font-sofia${
                frequency === "yearly" ? "text-[#1B4332] " : "text-gray-500"
              }`}
            >
              Yearly
              <span className="ml-2 text-sm text-[#00D652] font-sofia">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col min-h-[95%]">
              {plan.popular && (
                <div className="flex justify-center w-full bg-site-green h-[100px] rounded-3xl mb-[-10%]">
                  <div className="text-white flex font-sofia text-xl gap-2 mt-4 justify-center">
                    Popular <CornerLeftDown />
                  </div>
                </div>
              )}
              <Card
                className={`relative rounded-3xl flex-1 ${
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
                      <span className="text-4xl font-medium font-sofia">₹</span>
                      <span className="text-4xl font-medium font-sofia">
                        {plan.price}
                      </span>
                      <span className="ml-1 font-sofia text-lg">
                        /{frequency === "yearly" ? "year" : "month"}
                      </span>
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
                    Get Started
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
                              ? "text-site-green bg-[#FBC02D] p-1 rounded-full h-6 w-6"
                              : "text-white bg-site-green p-1 rounded-full h-6 w-6"
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
