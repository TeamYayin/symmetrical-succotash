import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden border-b border-text-secondary">
      {/* Abstract structural background element (Grid pattern) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-text-primary mb-8">
            Building reliable software.<br/>
            Researching language technology.
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
            Yayin AI Lab is a technology engineering team. We build web applications for businesses and educational institutions, provide Microsoft 365 IT enablement, and run an open-source lab focused on preserving Indo-Aryan and Dravidian languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio">
              <Button variant="primary" className="w-full sm:w-auto">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
