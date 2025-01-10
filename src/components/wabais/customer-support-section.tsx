import Image from "next/image";
import {
    MessageCircle,
    Zap,

    Users,
    FileText,
    HelpCircle,
    Globe,
    Lock,
    CheckSquare,
    RefreshCw,
    Languages,
    Smile,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CustomerSection() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Real-Time Communication",
            description:
                "The API enables businesses to interact with customers in real-time, providing instant responses to inquiries and issues.",
        },
        {
            icon: <Zap className="h-8 w-8 text-green-600" />,
            title: "24/7 Availability",
            description:
                "Unlike traditional customer support channels with limited operating hours, WhatsApp Business API allows businesses to offer round-the-clock support.",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Personalized Support",
            description:
                "Businesses can use WhatsApp to provide personalized support to each customer. Agents can address customers by name and tailor their responses based on individual needs.",
        },
        {
            icon: <FileText className="h-8 w-8 text-green-600" />,
            title: "Multimedia Support",
            description:
                "The API supports multimedia messaging, allowing customers to share images, videos, or documents to explain their issues better.",
        },
        {
            icon: <HelpCircle className="h-8 w-8 text-green-600" />,
            title: "Automated Responses",
            description:
                "Businesses can set up automated responses for frequently asked questions or during non-working hours.",
        },
        {
            icon: <RefreshCw className="h-8 w-8 text-green-600" />,
            title: "Seamless Escalation",
            description:
                "If a customer query requires escalation to a higher-level support agent, the API facilitates a seamless transfer of the conversation.",
        },
        {
            icon: <CheckSquare className="h-8 w-8 text-green-600" />,
            title: "Faster Issue Resolution",
            description:
                "WhatsApp Business API allows support agents to address customer issues more efficiently, reducing the time it takes to resolve problems.",
        },
        {
            icon: <Globe className="h-8 w-8 text-green-600" />,
            title: "Multi-Channel Integration",
            description:
                "The API can be integrated with other customer support tools and systems, enabling support agents to manage conversations across various channels from a centralized dashboard.",
        },
        {
            icon: <Languages className="h-8 w-8 text-green-600" />,
            title: "Support in Multiple Languages",
            description:
                "Businesses can provide customer support in multiple languages through WhatsApp, catering to a diverse customer base and enhancing their global reach.",
        },
        {
            icon: <Smile className="h-8 w-8 text-green-600" />,
            title: "Proactive Support",
            description:
                "WhatsApp Business API enables businesses to reach out proactively to customers to follow up on issues or to provide timely updates.",
        },
        {
            icon: <Lock className="h-8 w-8 text-green-600" />,
            title: "Secure Communication",
            description:
                "WhatsApp's end-to-end encryption ensures secure and private customer conversations, providing peace of mind to customers while sharing sensitive information.",
        },
        {
            icon: <Smile className="h-8 w-8 text-green-600" />,
            title: "Feedback Collection",
            description:
                "Businesses can use WhatsApp to collect customer feedback after support interactions, gaining insights into their satisfaction levels and areas for improvement.",
        },
    ];

    return (

        <section className="relative font-sofia py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
            <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center font-vesper mb-16">

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Boost Sales with WhatsApp API
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Drive engagement & conversions with powerful WhatsApp Business solutions.
                    </p>
                </div>



                <div className="flex justify-center items-center mb-20">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
                        <Image
                            src="/customer.webp"
                            alt="Sales team"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>

                </div>
                <div className="text-center mb-16">
                    <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                        The WhatsApp Business API provides significant benefits for customer support, offering a seamless and efficient communication channel between businesses and their customers
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
