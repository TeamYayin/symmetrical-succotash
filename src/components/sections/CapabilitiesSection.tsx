import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import Link from "next/link";

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Web & Application Development",
      description: "Custom web platforms, high-performance static sites, and complex conference portals built on modern stacks."
    },
    {
      title: "Education Technology",
      description: "Digital infrastructure for schools and colleges, from institutional portals to upcoming open-source SaaS products."
    },
    {
      title: "IT Enablement",
      description: "Authorized Microsoft Solutions Partner providing M365 licensing, deployment, and ongoing technical support tailored for organizations."
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-text-secondary bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Sticky Heading */}
          <div className="lg:sticky lg:top-32 self-start">
            <SectionHeader 
              title="Commercial engineering meets community research." 
              kicker="// CAPABILITIES" 
            />
            <p className="mt-6 text-xl text-text-secondary max-w-lg leading-relaxed">
              We fund our research by delivering high-quality commercial digital products. When you hire us for web development or IT infrastructure, you get a team with the technical rigor of a research lab.
            </p>
            <div className="mt-8">
              <Link href="/capabilities" className="inline-flex items-center text-accent hover:text-text-primary font-medium transition-colors">
                View all capabilities
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        
          {/* Right Column - Cards */}
          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <Card key={index} hoverEffect={true} className="bg-bg-primary">
                <div className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-heading text-2xl font-semibold mb-3 text-text-primary">{cap.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
