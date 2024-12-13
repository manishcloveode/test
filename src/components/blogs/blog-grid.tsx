import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="text-start mb-12">
          <div className="flex items-start justify-start gap-2 text-sm font-medium">
            <ChevronsLeft />
            <span className="uppercase tracking-wider font-sofia text-lg">
              Blog
            </span>
            <ChevronsRight />
          </div>
          <div className="text-start mb-12 mt-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              Stay Informed with the Latest Insights
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl mb-2 font-vesper text-site-green">
            Subscribe to our news letter
          </h2>
          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white"
            />
            <Button className="w-full bg-green-700 hover:bg-green-800">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="border-none shadow-none">
            <CardHeader className="p-0">
              <Image
                src={`/img/blog.webp`}
                alt="Article thumbnail"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full"
              />
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <div className="flex items-center gap-4 text-xs text-gray-500 font-sofia">
                <span>Published Dec 13, 2023</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2 font-vesper">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut consequat eros
              </h3>
              <p className="text-xl text-gray-600 mb-4 font-sofia">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut consequat eros. Pellentesque felis mi, pharetra ut consequat.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
