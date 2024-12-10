"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfffc]">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-sofia">
          <Link href="/" className="text-xl hover:text-site-green font-medium">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xl hover:text-site-green font-medium">
              Company <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Careers</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xl hover:text-site-green font-medium">
              WABAIS For <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Enterprise</DropdownMenuItem>
              <DropdownMenuItem>Small Business</DropdownMenuItem>
              <DropdownMenuItem>Startups</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xl hover:text-site-green font-medium">
              Integration <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
              <DropdownMenuItem>SDKs</DropdownMenuItem>
              <DropdownMenuItem>Plugins</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/pricing"
            className="text-xl hover:text-site-green font-medium"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-16 bg-black text-white text-md px-4 rounded-lg"
              >
                INR <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>EUR</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="site-green">
            Get Started <CornerDownRight />
          </Button>

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
                <Link href="#" className="text-sm font-medium">
                  Company
                </Link>
                <Link href="#" className="text-sm font-medium">
                  WABAIS For
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Integration
                </Link>
                <Link href="/pricing" className="text-sm font-medium">
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
