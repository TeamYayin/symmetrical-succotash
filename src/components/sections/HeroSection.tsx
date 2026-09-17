import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] py-16 lg:py-24 flex items-center bg-gradient-to-br from-bg-secondary via-[#0a1536] to-[#040814] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8 lg:mt-0">
          
          {/* Content Left Column */}
          <div className="text-left">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Building reliable software. <br />
              <span className="text-white/70 text-4xl md:text-5xl lg:text-6xl">Researching language tech.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              Yayin AI Lab is a dual-track engineering team. We build scalable platforms for businesses and educational institutions, provide Microsoft IT enablement, and run an open-source lab dedicated to preserving regional languages on the web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
                  View our work
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg !text-white !border-white/30 hover:!border-white hover:!bg-white/10">
                  Explore the Lab
                </Button>
              </Link>
            </div>
          </div>

          {/* Media Right Column */}
          <div className="relative aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="object-cover w-full h-full opacity-90"
            >
              <source src="/hero-full-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
        </div>
      </div>
    </section>
  );
}
