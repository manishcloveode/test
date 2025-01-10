import Image from "next/image";
import { MessageCircle, Zap, BotMessageSquare, ChartArea, Target, ShoppingCart, Users, CircleDollarSign, EthernetPort, BarChart3, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MarketingSection() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Direct and Personalized Communication",
            description:
                "With the WhatsApp Business API, businesses can communicate with customers directly on their WhatsApp accounts.",
        },
        {
            icon: <Zap className="h-8 w-8 text-green-600" />,
            title: "Instant Customer Support",
            description:
                " The API enables businesses to offer instant customer support through WhatsApp. Customers can reach out with questions, inquiries, or issues, and businesses can quickly respond, leading to higher customer satisfaction and brand loyalty.",
        },
        {
            icon: <Target className="h-8 w-8 text-green-600" />,
            title: "Broadcast Lists for Targeted Messaging",
            description:
                "Businesses can create broadcast lists to send messages to specific groups of customers based on preferences or demographics",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Promotional Campaigns",
            description:
                " WhatsApp Business API can be leveraged to run promotional campaigns, sharing exclusive deals, discounts, and limited-time offers with customers.",
        },
        {
            icon: <Phone className="h-8 w-8 text-green-600" />,
            title: "Customer Feedback and Surveys",
            description:
                " Businesses can use WhatsApp to collect customer feedback and conduct surveys, gaining valuable insights into customer preferences, pain points, and satisfaction levels",
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-green-600" />,
            title: "Event and Webinar Invitations",
            description:
                " Businesses can send reminders to customers who abandon their shopping carts, encouraging them to complete the purchase.",
        },
        {
            icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
            title: "Product Recommendations",
            description:
                "By analyzing customer data, businesses can send personalized product recommendations to customers, based on their past purchases or browsing behavior.",
        },
        {
            icon: <BotMessageSquare className="h-8 w-8 text-green-600" />,
            title: "Automated Messaging and Chatbots",
            description:
                "The API allows businesses to automate certain messaging processes and use chatbots to handle routine inquiries.",
        },
        {
            icon: <CircleDollarSign className="h-8 w-8 text-green-600" />,
            title: "Integration with CRM and Marketing Tools",
            description:
                "The WhatsApp Business API can be integrated with Customer Relationship Management (CRM) systems and other marketing tools, streamlining data management and providing a holistic view of customer interactions.",
        },
        {
            icon: <EthernetPort className="h-8 w-8 text-green-600" />,
            title: "Rich Media Messaging",
            description:
                "Businesses can send rich media messages, including images, videos, and documents, to enhance their marketing content and capture the attention of customers.",
        },
        {
            icon: <ChartArea className="h-8 w-8 text-green-600" />,
            title: "Analytics and Insights",
            description:
                "The API provides access to analytics and insights, allowing businesses to measure the effectiveness of their messaging campaigns. Marketers can track message delivery, open rates, response rates, and other key metrics, enabling them to optimize their strategies for better results.",
        }

    ];

    return (
        <>
            <section className="relative font-sofia py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
                <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

                <div className="relative font-vesper z-10 container mx-auto px-4">
                    <div className="text-center mb-16">

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            WhatsApp Business API
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            integration Solution for Marketing
                        </p>
                    </div>

                    <div className="flex justify-center items-center mb-20">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
                            <Image
                                src="/img/marketing.webp"
                                alt="Real Estate"
                                width={500}
                                height={500}
                                className="relative rounded-full border-4 border-white shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                            The WhatsApp Business API provides extensive benefits for marketing efforts, offering a powerful and personalized communication platform to engage with customers.
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
        </>
    );
}
