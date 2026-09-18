import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export function LabInitiativesSection() {
  return (
    <section className="py-24 border-b border-text-secondary bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Inside the Lab" 
              kicker="// R&D AND SAAS" 
              className="mb-8"
            />
            <p className="text-lg text-text-secondary mb-8">
              Beyond client work, we incubate our own technology. We are currently designing open-source SaaS products aimed at streamlining operations for educational institutes.
            </p>
            <a href="https://github.com/teamyayin" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">View our GitHub</Button>
            </a>
          </div>
          
          <div className="relative">
            {/* Structural visual */}
            <div className="aspect-video border border-text-secondary p-1 flex items-center justify-center bg-bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(152,193,188,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(152,193,188,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="z-10 bg-bg-primary border border-text-secondary p-6 w-3/4 max-w-sm shadow-hard">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-text-secondary">
                  <span className="font-mono text-xs text-text-secondary">yayin-edtech-core</span>
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-text-secondary/20"></div>
                  <div className="h-2 w-full bg-text-secondary/20"></div>
                  <div className="h-2 w-5/6 bg-text-secondary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
