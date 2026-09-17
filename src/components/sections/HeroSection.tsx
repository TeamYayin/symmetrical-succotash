import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] py-16 lg:py-24 flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <span className="block font-mono text-secondary text-sm md:text-base mb-6 uppercase tracking-widest">
          {/* Yayin AI Lab */}
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight mb-8">
          Building reliable software. <br />
          <span className="text-text-secondary">Researching language technology.</span>
        </h1>
        <p className="mt-6 text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Yayin AI Lab is a dual-track engineering team. We build scalable platforms for businesses and educational institutions, provide Microsoft IT enablement, and run an open-source lab dedicated to preserving regional languages on the web.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/portfolio">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
              View our work
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg">
              Explore the Lab
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
