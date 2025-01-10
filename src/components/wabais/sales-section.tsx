import Image from "next/image";
import { MessageCircle, Zap, CreditCard, Users, BarChart3, Phone, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SalesSection() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Improved Customer Communication",
            description:
                "The WhatsApp Business API is a game-changer for sales teams when it comes to customer communication. With real-time engagement, sales reps can swiftly answer inquiries, provide product information, and address concerns.",
        },
        {
            icon: <Zap className="h-8 w-8 text-green-600" />,
            title: "Automated Messaging and Chatbots",
            description:
                "Leverage automation through the API to handle routine inquiries using chatbots. By automating messaging processes, sales representatives can focus on more complex sales tasks, improving productivity.",
        },
        {
            icon: <CreditCard className="h-8 w-8 text-green-600" />,
            title: "Order and Payment Processing",
            description:
                "Streamline the order and payment process with WhatsApp API. Send payment reminders, share payment links, and provide updates directly through the platform for a seamless experience.",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Broadcast Lists and Customer Segmentation",
            description:
                "Create broadcast lists and segment customers to execute targeted messaging and personalized communication, driving higher conversion rates.",
        },
        {
            icon: <Phone className="h-8 w-8 text-green-600" />,
            title: "Integration with CRM and Sales Tools",
            description:
                "The API integrates seamlessly with CRM systems, providing sales teams with a centralized platform to manage customer interactions and track leads.",
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-green-600" />,
            title: "Analytics & Insights",
            description:
                "Gain valuable analytics and insights. Track message delivery, open rates, and responses to refine strategies and achieve higher conversion rates.",
        },
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
            <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

            <div className="relative z-10 font-vesper container mx-auto px-4">
                <div className="text-center mb-16">

                    <h2 className="  text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        WhatsApp Business API
                    </h2>
                    <p className="text-xl  text-gray-600 max-w-2xl mx-auto">
                        Empower your e-commerce with seamless WhatsApp Business API integration
                    </p>
                </div>

                <div className="flex justify-center items-center mb-20">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
                        <Image
                            src="/img/sale.webp"
                            alt="Sales team"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className=" overflow-hidden hover:shadow-2xl hover:shadow-green-200 bg-white/80 backdrop-blur-md transition-all duration-300 border border-[#024430] transform hover:-translate-y-2 font-sofia"
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

                <Card className="border-none overflow-hidden bg-gradient-to-br from-green-500 to-blue-600 text-white font-sofia mt-12">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-4 ">Unlock the Power of WhatsApp for Your Business</h3>
                        <p className="text-lg">
                            The WhatsApp Business API empowers sales teams with effective customer communication,
                            automation capabilities, streamlined order processing, personalized messaging,
                            seamless integration with existing tools, and access to valuable analytics.
                            Harness these benefits to boost efficiency, productivity, and drive more sales
                            and revenue for your business.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
