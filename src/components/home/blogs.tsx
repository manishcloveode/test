import Image from "next/image";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MicroHeading from "../common/micro-heading";

export default function BlogSection() {
  return (
    <section className="py-16 bg-[#EBEBEB]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <MicroHeading text="Blog" />
          <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              Latest blogs and Articles
            </h2>
          </div>
        </div>

        <div className="flex gap-6">
          <Card className="overflow-hidden">
            <Image
              src="/img/blog.webp"
              alt="Featured blog post"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span>Published on Dec 10, 2024</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 3 min read
                </span>
              </div>
              <h3 className="text-3xl font-semibold font-vesper text-site-green  mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec ut
                consequat eros. Sed ut convallis tellus, at semper nulla.
                Pellentesque tellus odio.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between items-center">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="flex gap-4 p-4 min-h-[30%]">
                <Image
                  src="/img/blog.webp"
                  alt={`Blog post ${post}`}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>Published on Dec 10, 2024</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> 3 min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold font-vesper text-site-green">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut consequat eros
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
