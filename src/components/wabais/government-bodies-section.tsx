import Image from "next/image";
import { MessageCircle, Ratio, GlobeLock, Users, Languages, Bandage, Share2, UserCheck, ClipboardList, Bell, FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Government() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Citizen Engagement",
            description: "WhatsApp Business API allows government bodies to engage directly with citizens, providing them with a convenient and accessible channel to communicate with various government departments and agencies.",
        },
        {
            icon: <Share2 className="h-8 w-8 text-green-600" />,
            title: "Real-Time Updates",
            description: "Government bodies can use WhatsApp to send real-time updates to citizens regarding important announcements, policy changes, public health advisories, emergency alerts.",
        },
        {
            icon: <UserCheck className="h-8 w-8 text-green-600" />,
            title: "Service Delivery",
            description: "The API can be leveraged to streamline service delivery processes. Citizens can use WhatsApp to request government services, such as applying for permits, renewing licenses.",
        },
        {
            icon: <ClipboardList className="h-8 w-8 text-green-600" />,
            title: "Information Dissemination",
            description: "Government agencies can use WhatsApp to share relevant information with citizens, such as educational materials, public safety tips, voting details, and awareness campaigns.",
        },
        {
            icon: <Bell className="h-8 w-8 text-green-600" />,
            title: "Automated Services",
            description: "WhatsApp Business API allows governments to set up automated responses and chatbots to handle routine inquiries and provide quick answers to frequently asked questions, reducing the burden on human support staff.",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Feedback and Surveys",
            description: "Government bodies can collect feedback from citizens through WhatsApp, allowing them to gauge public opinions, evaluate satisfaction levels, and make data-driven decisions.",
        },
        {
            icon: <FileText className="h-8 w-8 text-green-600" />,
            title: " Public Consultations",
            description: " WhatsApp can be used for public consultations on various issues, allowing citizens to voice their opinions and participate in the decision-making process.",
        },
        {
            icon: <Bandage className="h-8 w-8 text-green-600" />,
            title: "Emergency Response",
            description: "During emergencies or natural disasters, WhatsApp Business API can serve as a vital communication tool to disseminate critical information, coordinate relief efforts, and provide assistance to affected citizens.",
        },
        {
            icon: <Calendar className="h-8 w-8 text-green-600" />,
            title: "Transparency and Accountability",
            description: " By using WhatsApp, government bodies can enhance transparency and accountability by keeping citizens informed about government actions, policies, and initiatives.",
        },
        {
            icon: <Languages className="h-8 w-8 text-green-600" />,
            title: "Language Accessibility",
            description: "WhatsApp's support for multiple languages ensures that government messages and services are accessible to citizens of diverse linguistic backgrounds.",
        },
        {
            icon: <Ratio className="h-8 w-8 text-green-600" />,
            title: "Budget-Friendly Solution",
            description: "WhatsApp Business API offers a cost-effective way for government entities to connect with citizens, as it reduces the need for traditional communication methods .",
        },
        {
            icon: <GlobeLock className="h-8 w-8 text-green-600" />,
            title: "Data Security",
            description: "WhatsApp's end-to-end encryption ensures the security and privacy of citizens' interactions with government agencies, protecting sensitive information and fostering trust.",
        },
    ];

    return (


        <section className="relative font-sofia py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
            <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

            <div className="relative  z-10 container mx-auto px-4">
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
                            src="/img/api.webp"
                            alt="Real Estate"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                        The WhatsApp Business API offers several benefits for government bodies, enabling them to enhance communication, engagement, and service delivery to citizens
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