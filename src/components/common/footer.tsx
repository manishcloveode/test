// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container px-4 mx-auto">
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" />
            </div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our news letter
            </h3>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 w-2/3 rounded-2xl border border-site-green py-6 text-white"
              />
              <Button
                variant="site-green"
                className="text-xl py-6 px-10 shadow-2xl shadow-[#0C71334F] w-fit"
              >
                Submit
              </Button>
            </div>
          </div>

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
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 font-sofia">
            Copyright@wabais2024
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/wabais"
              target="_blank"
              className="hover:text-[#95D5B2]"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/wabais_"
              target="_blank"
              className="hover:text-[#95D5B2]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/wabais"
              target="_blank"
              className="hover:text-[#95D5B2]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/wabais"
              target="_blank"
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
