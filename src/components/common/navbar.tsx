"use client";

import * as React from "react";
import Link from "next/link";
import { CornerDownRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfffc] shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-sofia">
          <Link href="/" className="text-xl hover:text-site-green font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-xl hover:text-site-green font-medium"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-xl hover:text-site-green font-medium"
          >
            Pricing
          </Link>

          <div className="relative group">
            <button className="text-xl font-medium hover:text-site-green focus:outline-none">
              WABAIS For
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
              <ul className="py-2">
                {[
                  { href: "/e-commerce", label: "E-Commerce" },
                  { href: "/health-care", label: "Healthcare" },
                  { href: "/education-tech", label: "Edtech" },
                  { href: "/government-bodies", label: "Government Bodies" },
                  { href: "/real-estate", label: "Real Estate" },
                  { href: "/marketing", label: "Marketing" },
                  { href: "/customer-support", label: "Customer Support" },
                  { href: "/sales", label: "Sales Team" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-site-green hover:text-white rounded-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-xl hover:text-site-green font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/pricing"
            className={buttonVariants({ variant: "site-green" })}
          >
            Get Started <CornerDownRight />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium">
                  About
                </Link>
                <Link href="/pricing" className="text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="text-sm font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}