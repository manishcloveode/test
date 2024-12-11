"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import MicroHeading from "@/components/common/micro-heading";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "WABAIS has transformed how we connect with our customers. Our response times have improved significantly, and our customers love being able to reach us on WhatsApp. The setup was easy, and customer support has been fantastic!",
    author: "Arun Mehta",
    role: "Sales Manager at Avancer Labs",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    text: "Integrating WhatsApp with our business through WABAIS has been a game-changer. We've seen a boost in engagement and sales thanks to seamless communication. The platform is intuitive and easy to manage!",
    author: "Rohit Jamwal",
    role: "Business Developer at Avani Paridhi",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    text: "As a travel agency, we needed a reliable and fast way to communicate with our clients. WABAIS has made it so much easier to manage bookings and provide real-time support. It's been a great addition to our operations!",
    author: "Abhi Dogra",
    role: "Social Media Manager at Raftaar Media",
    avatar: "/placeholder.svg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 border-y border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MicroHeading text="Testimonials" />
          <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              What real people using WABAIS say
            </h2>
          </div>
        </div>

        <div className="w-full ">
          <Carousel className="w-full p-4 rounded-3xl bg-[#EBEBEB]">
            <CarouselContent className="-ml-2 md:-ml-4 ">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6">
                      <Quote className="w-10 h-10 text-[#1B4332] mb-4 fill-black rotate-180 font-medium" />
                      <blockquote className="mb-6 font-sofia">
                        {testimonial.text}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        {/* <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar> */}

                        <div>
                          <div className="font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className=" static" />
              <CarouselNext className=" static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
