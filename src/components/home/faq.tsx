"use client";

import {
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is WABAIS?",
    answer:
      "WABAIS is a WhatsApp API service that enables businesses to integrate WhatsApp messaging into their applications. It allows businesses to send and receive messages with customers, manage interactions, and enhance customer support and engagement on WhatsApp.",
  },
  {
    question: "How do I get started with WABAIS?",
    answer:
      "Getting started with WABAIS is easy! Sign up for an account, get your API key, and follow our integration guides to add WhatsApp messaging capabilities to your app. You can use our detailed documentation to set up automated responses, manage conversations, and more.",
  },
  {
    question: "Is WABAIS suitable for small businesses?",
    answer:
      "Yes, WABAIS is perfect for small businesses looking to improve customer communication. With flexible plans and scalable features, you can start small and grow as your needs evolve, all while offering real-time customer support through WhatsApp.",
  },
  {
    question: "How secure is WABAIS?",
    answer:
      "WABAIS is built with security in mind. We use industry-standard encryption to ensure your messages are secure. We also comply with data protection regulations, ensuring that your customers' privacy is always respected.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="text-center mb-12">
              <div className="flex items-start justify-start gap-2 text-sm font-medium">
                <ChevronsLeft />
                <span className="uppercase tracking-wider font-sofia text-lg">
                  FAQs
                </span>
                <ChevronsRight />
              </div>
              <div className="text-start mb-12 mt-6 max-w-2xl ">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
                  Most frequently asked questions
                </h2>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Do you have any questions?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut consequat eros. Sed ut convallis tellus, at semper
                    nulla. Pellentesque tellus odio,
                  </p>
                </div>
              </div>
              <Button className="w-full bg-[#0C7133] hover:bg-[#0C7133]/90 text-white shadow-lg shadow-[#1B4332]/20">
                Contact us
              </Button>
            </div>
          </div>

          <div className="p-4">
            <Accordion
              defaultValue="item-0"
              type="single"
              collapsible
              className="space-y-2"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border px-4"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-semibold text-left text-lg font-sofia">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="font-md font-sofia mb-4">{faq.answer}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Was this helpful?</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ThumbsUp className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ThumbsDown className="h-4 w-4" />
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
