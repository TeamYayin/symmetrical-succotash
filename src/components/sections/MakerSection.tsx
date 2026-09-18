import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import Image from "next/image";

export function MakerSection() {
  return (
    <section className="py-24 border-b border-text-secondary bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-text-secondary">

          {/* Team / Ethos Half */}
          <div className="p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-text-secondary bg-bg-primary">
            <SectionHeader
              title="Engineers, designers, and makers."
              kicker="// WHO WE ARE"
              className="mb-8"
            />
            <p className="text-lg text-text-secondary mb-12">
              Founded to bridge the gap between high-quality software engineering and cultural impact. We approach every problem with an engineering mindset—whether we&apos;re architecting a cloud platform or designing a physical product.
            </p>
            {/* Team photo */}
            <div className="w-full h-64 sm:h-80 relative border border-text-secondary overflow-hidden">
              <Image 
                src="/images/team-image1.png"
                alt="Yayin AI Lab Team"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Hardware / Keyboard Half */}
          <div className="p-12 lg:p-16 flex flex-col justify-center relative bg-text-primary text-bg-primary overflow-hidden">
            {/* Structural placeholder for keyboard photo */}
            <div className="absolute inset-0 z-0 opacity-20 bg-center bg-cover flex items-center justify-center">
              <span className="font-mono text-xs text-bg-primary uppercase tracking-widest bg-text-primary px-2">Keyboard Image Placeholder</span>
            </div>

            <div className="relative z-10">
              <span className="font-mono text-accent text-sm mb-4 block uppercase tracking-wider">
                {"// HARDWARE LAB"}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                When we aren&apos;t writing code, we build custom mechanical keyboards.
              </h3>
              <p className="text-bg-primary/80 mb-12 max-w-md">
                Our maker services division designs and assembles premium mechanical keyboards for the developer community.
              </p>
              <a href="https://awashedupnerd.in" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  Shop Custom Keyboards
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
