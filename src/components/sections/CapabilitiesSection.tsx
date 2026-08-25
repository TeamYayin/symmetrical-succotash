import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import Link from "next/link";

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Web & App Development",
      description: "Custom platforms, informational sites, and conference portals engineered for scale and performance.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Code icon
    },
    {
      title: "Education Technology",
      description: "Institutional software and upcoming open-source SaaS products designed specifically for schools.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" // Academic cap icon
    },
    {
      title: "IT Enablement",
      description: "Microsoft 365 licensing, deployment, and ongoing support for small-to-medium businesses.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" // Server/IT icon
    }
  ];

  return (
    <section className="py-24 border-b border-text-secondary bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Capabilities" 
          kicker="// OUR EXPERTISE" 
        />
        <p className="text-lg text-text-secondary mb-16 max-w-2xl">
          We focus on practical, scalable solutions for small-to-medium businesses and educational organizations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, index) => (
            <Card key={index} className="flex flex-col">
              <svg className="w-8 h-8 text-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d={cap.icon} />
              </svg>
              <h3 className="font-heading text-xl font-semibold mb-4 text-text-primary">{cap.title}</h3>
              <p className="text-sm text-text-secondary flex-grow">{cap.description}</p>
            </Card>
          ))}
        </div>

        <div className="flex">
          <Link href="/contact" className="inline-flex items-center text-sm font-mono uppercase tracking-wider text-accent hover:text-text-primary transition-colors">
            Discuss a project 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
