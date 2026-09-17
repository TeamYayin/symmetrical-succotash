import React from "react";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section className="py-32 bg-bg-primary text-text-primary border-t border-text-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
          Start a project with Yayin AI Lab
        </h2>
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Whether you need a robust web platform for your institution, Microsoft 365 enablement, or a custom digital product, our engineering team is ready to build it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:hello@yayinailab.cc">
            <Button variant="primary" className="w-full sm:w-auto">
              Contact us via Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/company/yayinailab/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-wider text-text-secondary hover:text-accent transition-colors">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
