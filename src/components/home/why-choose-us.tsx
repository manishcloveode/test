import {
  Users,
  Building2,
  Clock,
  Network,
  UserSquare2,
  Globe2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MicroHeading from "../common/micro-heading";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "wcu-icon-1.svg",
      title: "Sales Team",
      description:
        "Empower your sales team to connect with leads faster and close deals more effectively. Our WhatsApp Business API streamlines communication, automates follow-ups, and keeps prospects engaged with personalized messaging.",
    },
    {
      icon: "wcu-icon-2.svg",
      title: "Marketing Team",
      description:
        "Drive impactful marketing campaigns directly to your audience. Use our WhatsApp API to send personalized promotions, announcements, and updates, boosting engagement and brand visibility",
    },
    {
      icon: "wcu-icon-3.svg",
      title: "Support Team",
      description:
        "Deliver exceptional customer service with instant responses and efficient query management. Our API enables your support team to resolve issues quickly, ensuring customer satisfaction and loyalty",
    },
    {
      icon: "wcu-icon-4.svg",
      title: "Real Estate",
      description:
        "Connect with potential buyers and renters instantly. Our API helps your real estate team share property details, schedule viewings, and answer inquiries—all in one seamless platform.",
    },
    {
      icon: "wcu-icon-5.svg",
      title: "Health Care",
      description:
        "Improve patient care with timely appointment reminders, health updates, and direct communication. Our WhatsApp API ensures your healthcare services are accessible and efficient",
    },
    {
      icon: "wcu-icon-6.svg",
      title: "E-commerce",
      description:
        "Enhance your e-commerce operations with real-time order updates, personalized product recommendations, and seamless customer communication. Our API ensures a smooth and satisfying shopping experience",
    },
  ];

  return (
    <section className="relative py-16 min-h-screen">
      <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain" />
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 container mx-auto px-4">
        <MicroHeading text="WHy choose us" />
        <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
            What sets WABAIS apart from others?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-transparent border-site-green"
            >
              <CardContent className="p-6">
                <div className="rounded-lg  mb-4">
                  <img src={`/icons/${feature.icon}`} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-[#338051] mb-3 font-sofia">
                  {feature.title}
                </h3>
                <p className="font-sofia text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
