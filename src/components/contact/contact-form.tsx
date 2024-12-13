"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronsLeft, ChevronsRight, Check } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="text-center mb-12">
              <div className="flex items-start justify-start gap-2 text-sm font-medium">
                <ChevronsLeft />
                <span className="uppercase tracking-wider font-sofia text-lg">
                  FAQs
                </span>
                <ChevronsRight />
              </div>
              <div className="text-start mb-12 mt-6 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
                  Have Questions or Need Assistance?
                </h2>
              </div>
            </div>
            <p className="text-xl font-sofia">
              Whether you&apos;re curious about our pricing plans, want a
              personalized demo, or need to discuss tailored solutions for your
              business, the Wabais team is here to guide you every step of the
              way.
            </p>
            <ul className="space-y-4 font-sofia">
              <li className="flex gap-3">
                <div className="bg-site-green w-6 h-6 p-1 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white shrink-0 mt-1" />
                </div>
                <span>
                  Here questions about how Wabais works or its features?
                  We&apos;re happy to provide answers.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="bg-site-green w-6 h-6 p-1 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white shrink-0 mt-1" />
                </div>
                <span>
                  Schedule a demo to see how our WhatsApp Business API can
                  transform your business communication.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="bg-site-green w-6 h-6 p-1 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white shrink-0 mt-1" />
                </div>
                <span>
                  Learn more about our simple and transparent pricing plans
                  designed to suit your business needs.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="bg-site-green w-6 h-6 p-1 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white shrink-0 mt-1" />
                </div>
                <span>
                  Discuss tailored integrations or features to meet your
                  organization&apos;s unique requirements.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="bg-site-green w-6 h-6 p-1 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white shrink-0 mt-1" />
                </div>
                <span>
                  Reach out for technical support or guidance on getting started
                  with Wabais seamlessly.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <form className="grid gap-6 font-sofia">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-lg font-medium">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Joshua" className="bg-white" required />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-medium">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="James" className="bg-white" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="+91 4563 367 374"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Message</label>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[120px] bg-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0B6623] hover:bg-[#0B6623]/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
