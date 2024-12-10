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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "WABAIS has completely transformed our sales process. With faster response times and personalized communication, we've been able to close more deals and build stronger relationships with our clients. It's a must-have for any sales team",
    author: "James Tucker",
    role: "Sales Manager at NextGen Solutions",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    text: "WABAIS has completely transformed our sales process. With faster response times and personalized communication, we've been able to close more deals and build stronger relationships with our clients. It's a must-have for any sales team",
    author: "James Tucker",
    role: "Sales Manager at NextGen Solutions",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    text: "WABAIS has completely transformed our sales process. With faster response times and personalized communication, we've been able to close more deals and build stronger relationships with our clients. It's a must-have for any sales team",
    author: "James Tucker",
    role: "Sales Manager at NextGen Solutions",
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
          <Carousel className="w-full p-4 rounded-3xl p-4 bg-[#EBEBEB]">
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
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

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
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
