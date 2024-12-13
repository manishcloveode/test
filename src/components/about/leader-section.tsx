import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MicroHeading from "../common/micro-heading";

export function LeaderSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <MicroHeading text="Leadership" />
          <div className="text-center mb-12 mt-6  mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
              Meet Our Visionary Leader
            </h2>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mx-auto ">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full flex items-center">
              <div className="relative w-full  md:h-[500px]">
                <img
                  src="/img/leader.png"
                  alt="Leader"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="font-sofia bg-white p-6 rounded-lg h-full flex flex-col gap-6 justify-center">
              <div>
                <h3 className="text-2xl font-semibold mb-1">Ashish Jaiswal</h3>
                <p className="text-gray-600 mb-4">
                  Chairman of the Board, Wabais
                </p>
              </div>
              <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                Ashish is a visionary leader with a passion for transforming
                business communication. With extensive experience in technology
                and innovation, Ashish has been instrumental in guiding Wabais
                to become a trusted provider of WhatsApp Business API solutions.
                His strategic insights and commitment to excellence continue to
                drive the company's growth and success in empowering businesses
                worldwide.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="rounded-md" size="icon">
                  <Facebook className="w-8 h-8" />
                </Button>
                <Button variant="outline" className="rounded-md" size="icon">
                  <Twitter className="w-8 h-8" />
                </Button>
                <Button variant="outline" className="rounded-md" size="icon">
                  <Linkedin className="w-8 h-8" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaderSection;
