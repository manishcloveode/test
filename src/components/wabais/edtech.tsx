import Image from "next/image";
import { MessageCircle, Users, Share2, UserCheck, ClipboardList, Bell, FileText, DollarSign, Calendar, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Edtech1() {
    const features = [
        {
            icon: <MessageCircle className="h-8 w-8 text-green-600" />,
            title: "Instant Communication with Students and Parents",
            description: "Educational institutions can use the API to send important announcements, event updates, and reminders directly to students and parents' WhatsApp accounts.",
        },
        {
            icon: <Share2 className="h-8 w-8 text-green-600" />,
            title: "Two-Way Communication",
            description: "The API enables two-way communication, allowing students and parents to reach out to the institution with questions, concerns, or feedback.",
        },
        {
            icon: <UserCheck className="h-8 w-8 text-green-600" />,
            title: "Admission and Enrollment Support",
            description: "Educational institutions can use WhatsApp to provide assistance during the admission and enrollment process.",
        },
        {
            icon: <ClipboardList className="h-8 w-8 text-green-600" />,
            title: "Assignment Reminders and Study Materials",
            description: "Teachers can use the API to send assignment reminders and study materials directly to students. This helps students stay organized and on track with their coursework, leading to improved academic performance.",
        },
        {
            icon: <Bell className="h-8 w-8 text-green-600" />,
            title: "Personalized Notifications",
            description: "Educational institutions can leverage the API to send personalized notifications based on student or parent preferences. This could include subject-specific updates and information tailored to individual needs.",
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: "Parent-Teacher Communication",
            description: "The API facilitates seamless communication between parents and teachers. Parents can use WhatsApp to schedule parent-teacher meetings, discuss student progress, and share updates.",
        },
        {
            icon: <FileText className="h-8 w-8 text-green-600" />,
            title: "Exam Results and Progress Reports",
            description: "Educational institutions can share exam results and progress reports with students and parents via WhatsApp. This timely and direct communication helps students and parents track academic performance and identify areas for improvement.",
        },
        {
            icon: <DollarSign className="h-8 w-8 text-green-600" />,
            title: "Fee Payment and Reminders",
            description: "The API can be used to send fee payment reminders and payment links to parents, simplifying the fee collection process for the institution and ensuring timely payments.",
        },
        {
            icon: <Calendar className="h-8 w-8 text-green-600" />,
            title: "Campus Events and Updates",
            description: "WhatsApp can be utilized to promote campus events, workshops, and seminars. Educational institutions can send event invitations and updates, increasing attendance and engagement.",
        },
        {
            icon: <Layers className="h-8 w-8 text-green-600" />,
            title: "Faculty Collaboration",
            description: "Faculty members can use WhatsApp to collaborate, share resources, and discuss teaching strategies. This fosters a supportive and communicative environment among the teaching staff.",
        },
    ];

    return (




        <section className="relative py-20 font-sofia overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
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
                            src="/img/student.webp"
                            alt="Real Estate"
                            width={500}
                            height={500}
                            className="relative rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                        The WhatsApp Business API offers several benefits for educational institutions, enhancing communication, engagement, and support for students, parents, and faculty members.
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