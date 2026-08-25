import React from "react";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section className="py-32 bg-text-primary text-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
          Start a project with Yayin AI Lab
        </h2>
        <p className="text-xl text-bg-primary/80 mb-12 max-w-2xl mx-auto">
          Whether you need a robust web platform for your institution, Microsoft 365 enablement, or a custom digital product, our engineering team is ready to build it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:hello@yayinailab.com">
            <Button variant="primary" className="!bg-accent !text-bg-primary !border-accent hover:!bg-bg-primary hover:!text-text-primary w-full sm:w-auto">
              Contact us via Email
            </Button>
          </a>
          <a href="https://linkedin.com/company/teamyayin" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-wider text-bg-primary/80 hover:text-accent transition-colors">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
