import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M6.141 4.163C3.897 5.288 3 7.331 3 9v10l2 2h14l2-2V9c0-1.669-.897-3.712-3.141-4.837C15.618 2.954 13.402 2 12.004 2c-1.398 0-3.618.954-5.863 2.163z" />
              </svg>
              <span className="font-bold text-xl">
                <span className="text-white">WAB</span>
                <span className="text-[#95D5B2]">AIS</span>
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our news letter
            </h3>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 w-2/3 rounded-3xl border border-site-green"
              />
              <Button
                variant="site-green"
                className="text-xl py-6 px-5 shadow-2xl shadow-[#0C71334F] w-fit"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4 font-vesper text-[#CBFFDF]">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-vesper text-[#CBFFDF]">
              Integration
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Native APIs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  ChatBot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  CRM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  PQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  CMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-vesper text-[#CBFFDF]">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#95D5B2] font-sofia">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright@wabais2024
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#95D5B2]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/wabais_" className="hover:text-[#95D5B2]">
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/wabais"
              className="hover:text-[#95D5B2]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/wabais"
              className="hover:text-[#95D5B2]"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
