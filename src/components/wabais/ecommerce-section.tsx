

import Image from "next/image";
import {
    MessageCircle,
    Zap,
    CreditCard,
    Users,
    ShoppingCart,
    Tv,
    MessagesSquare,
    PackageSearch,
    Database,
    Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ECommerce() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Personalized Customer Interaction",
            description:
                "With the API, e-commerce businesses can provide personalized communication to customers. They can send order updates, delivery notifications, and respond to customer inquiries in real-time, creating a more engaging and personalized shopping experience.",
        },
        {
            icon: <Zap className="h-8 w-8 text-green-600" />,
            title: "Instant Customer Support",
            description:
                "The API enables e-commerce businesses to offer instant customer support through WhatsApp. Customers can reach out with questions or concerns, and the sales team can quickly provide assistance, leading to higher customer satisfaction and loyalty.",
        },
        {
            icon: <CreditCard className="h-8 w-8 text-green-600" />,
            title: "Automated Order and Payment Processing",
            description:
                "E-commerce businesses can automate order and payment processing through WhatsApp. They can send payment links, order confirmations, and delivery updates automatically, making the purchasing process smoother and more efficient for customers.",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Personalized Product Recommendations",
            description:
                "By integrating customer data with the API, e-commerce businesses can send personalized product recommendations to customers based on their past purchases or browsing behavior.",
        },
        {
            icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
            title: "Abandoned Cart Recovery",
            description:
                "The API can be used to send reminders to customers who abandoned their shopping carts, encouraging them to complete their purchases.",
        },
        {
            icon: <Tv className="h-8 w-8 text-green-600" />,
            title: "Broadcast Lists for Promotions",
            description:
                "E-commerce businesses can create broadcast lists to send promotional messages to a targeted audience.",
        },
        {
            icon: <MessagesSquare className="h-8 w-8 text-green-600" />,
            title: "Customer Feedback and Reviews",
            description:
                "The API facilitates collecting customer feedback and reviews through WhatsApp. E-commerce businesses can send surveys or request feedback after a purchase.",
        },
        {
            icon: <PackageSearch className="h-8 w-8 text-green-600" />,
            title: "Order Tracking and Returns",
            description:
                "Customers can easily track their orders or initiate returns through WhatsApp with the API's assistance.",
        },
        {
            icon: <Database className="h-8 w-8 text-green-600" />,
            title: "Seamless Integration with CRM",
            description:
                "By integrating the WhatsApp Business API with their Customer Relationship Management (CRM) system, e-commerce businesses can centralize customer data and interactions.",
        },
        {
            icon: <Globe className="h-8 w-8 text-green-600" />,
            title: "Global Reach and Accessibility",
            description:
                "WhatsApp has a vast global user base, making it an ideal platform for e-commerce businesses to reach customers worldwide.",
        },
    ];

    return (

        <section className="relative font-sofia py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
            <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center font-sofia mb-16">

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        WhatsApp Business API
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Integration For E-commerce - Wabais
                    </p>
                </div>

                <div className="flex justify-center items-center mb-20">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
                        <Image
                            src="/img/e-comm.png"
                            alt="Real Estate"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                        The WhatsApp Business API offers numerous benefits for e-commerce businesses, enhancing their customer engagement, sales, and overall success.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className=" overflow-hidden hover:shadow-2xl hover:shadow-green-200 bg-white/80 backdrop-blur-md transition-all duration-300 border border-[#024430] transform hover:-translate-y-2"
                        >
                            <CardContent className="p-6">
                                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-green-100 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
