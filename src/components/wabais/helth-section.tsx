import Image from "next/image";
import { MessageCircle, ClipboardCheck, BookOpen, LifeBuoy, HeartPulse, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Health() {
    const features = [
        {
            icon: <Shield className="h-8 w-8 text-green-600" />,
            title: "Secure and Private Communication",
            description: "With end-to-end encryption, WhatsApp API ensures that patient information and sensitive data are protected at all times, meeting the highest standards of privacy and security.",
        },
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Real-Time Interaction",
            description: "Healthcare providers can engage with patients, colleagues, and staff instantly through real-time messaging, enabling quick responses and improved patient care.",
        },
        {
            icon: <Clock className="h-8 w-8 text-green-600" />,
            title: "Appointment Reminders",
            description: "Reduce no-shows and optimize your schedule by sending automated appointment reminders to patients via WhatsApp, making it convenient for them to remember their upcoming visits.",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-green-600" />,
            title: "Health Education and Alerts",
            description: "Keep patients informed about important health updates, preventive measures, and health campaigns through WhatsApp broadcasts, helping to improve public health awareness.",
        },
        {
            icon: <ClipboardCheck className="h-8 w-8 text-green-600" />,
            title: "Prescription and Test Results Delivery",
            description: "Expedite the delivery of prescriptions and test results directly to patients' mobile devices through secure WhatsApp messaging, ensuring prompt access to crucial information.",
        },
        {
            icon: <LifeBuoy className="h-8 w-8 text-green-600" />,
            title: "Patient Support and Follow-Up",
            description: "Provide continuous support to patients even after their appointments by offering post-care instructions, follow-up reminders, and answering their health-related queries.",
        },
        {
            icon: <HeartPulse className="h-8 w-8 text-green-600" />,
            title: "Health Monitoring and Engagement",
            description: "Implement health monitoring programs using WhatsApp API, where patients can share vital signs, track progress, and receive personalized health recommendations.",
        },
    ];

    return (

        <>
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
                                src="/img/health-care.webp"
                                alt="Sales team"
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
        </>
    );
}