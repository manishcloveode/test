import Image from "next/image";
import { MessageCircle, Zap, CreditCard, Blocks, Users, Lock, BookUser, Weight, BarChart3, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RealEstate() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: " Instant Customer Communication:",
            description:
                "Real estate agents can use the API to engage with clients in real-time. They can answer inquiries, provide property information, and address concerns quickly and efficiently, leading to enhanced customer satisfaction and faster decision-making",
        },
        {
            icon: <Zap className="h-8 w-8 text-green-600" />,
            title: "Personalized Property Listings",
            description:
                "The API enables real estate businesses to send personalized property listings to clients based on their preferences, budget, and location",
        },
        {
            icon: <CreditCard className="h-8 w-8 text-green-600" />,
            title: "Virtual Property Tours",
            description:
                "Real estate agents can use WhatsApp to share virtual property tours with clients. This allows clients to view properties from the comfort of their homes, saving time and effort for both parties",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Property Alerts and Updates:",
            description:
                "The API can be utilized to send property alerts and updates to clients when new listings that match their criteria become available.",
        },
        {
            icon: <Phone className="h-8 w-8 text-green-600" />,
            title: "Schedule Showings and Meetings",
            description:
                " Real estate agents can schedule property showings and meetings with clients through WhatsApp.",
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-green-600" />,
            title: " Customer Support",
            description:
                "The API allows real estate businesses to provide instant customer support to clients. Whether clients have questions about a property or need assistance with paperwork, real estate agents can quickly respond and provide the necessary information.",
        },
        {
            icon: <Lock className="h-8 w-8 text-green-600" />,
            title: "Secure Document Sharing",
            description:
                " WhatsApp's end-to-end encryption ensures secure document sharing, making it a safe platform for exchanging sensitive documents such as agreements, contracts, and property information.",
        },
        {
            icon: <Weight className="h-8 w-8 text-green-600" />,
            title: "Lead Generation",
            description:
                " The API can be integrated with lead generation tools, allowing real estate businesses to capture and manage leads efficiently. This helps in nurturing leads and converting potential clients into buyers or renters.",
        },
        {
            icon: <BookUser className="h-8 w-8 text-green-600" />,
            title: "Personalized Customer Follow-ups",
            description:
                "Real estate agents can use WhatsApp to follow up with clients after property viewings or meetings. Personalized follow-ups show clients that their needs are valued, helping to build trust and loyalty",
        },
        {
            icon: <Blocks className="h-8 w-8 text-green-600" />,
            title: "Integration with CRM",
            description:
                "By integrating the WhatsApp Business API with their Customer Relationship Management (CRM) system, real estate businesses can centralize client data and interactions.",
        }

    ];

    return (
        <section className="relative font-sofia py-20 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
            <div className="absolute inset-0 bg-[url('/img/grid-bg.webp')] bg-contain opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-3xl" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center font-vesper mb-16">

                    <h2 className="text-4xl  lg:text-5xl font-bold text-gray-900 mb-4">
                        WhatsApp Business API
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Revolutionize your real estate business with seamless WhatsApp integration
                    </p>
                </div>

                <div className="flex justify-center items-center mb-20">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
                        <Image
                            src="/img/real.png"
                            alt="Real Estate"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                        WhatsApp Business API offers numerous benefits for real estate businesses, revolutionizing the way they communicate and engage with potential buyers, sellers, and renters.
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
