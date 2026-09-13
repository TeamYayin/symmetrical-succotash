import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-primary/95 backdrop-blur border-b border-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Yayin AI Lab Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-heading font-semibold text-xl tracking-tight">
                Yayin AI Lab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-text-primary text-sm font-medium hover:text-accent transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="/portfolio"
              className="text-text-primary text-sm font-medium hover:text-accent transition-colors"
            >
              Shipped Work
            </Link>
            <Link
              href="/about"
              className="text-text-primary text-sm font-medium hover:text-accent transition-colors"
            >
              Inside the Lab
            </Link>
            
            <div className="flex items-center gap-4 border-l border-text-secondary/30 pl-4">
              <ThemeToggle />
              <Link href="/contact">
                <Button variant="primary" className="py-2 px-4 text-xs">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button (Simplified for Phase 2) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="text-text-primary p-2 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
