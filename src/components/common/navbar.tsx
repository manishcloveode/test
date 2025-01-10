"use client";

import * as React from "react";
import Link from "next/link";
import { CornerDownRight, Menu, ChevronDown } from 'lucide-react';
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const wabaisForOptions = [
    { href: "/e-commerce", label: "E-Commerce" },
    { href: "/health-care", label: "Healthcare" },
    { href: "/education-tech", label: "Edtech" },
    { href: "/government-bodies", label: "Government Bodies" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/marketing", label: "Marketing" },
    { href: "/customer-support", label: "Customer Support" },
    { href: "/sales", label: "Sales Team" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfffc] shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" />
        </Link>

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

          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              className="text-xl font-medium hover:text-site-green focus:outline-none"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              WABAIS For <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {wabaisForOptions.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-site-green hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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

                <div className="text-sm font-medium">WABAIS For</div>
                {wabaisForOptions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium pl-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

