import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import Link from "next/link";
import { Button } from "../ui/Button";

export function WorkSection() {
  const projects = [
    {
      title: "CBIT Conference Platforms",
      tech: "Next.js / Tailwind",
      year: "2023",
      color: "bg-[#1E3A8A]" // Deep Blue placeholder
    },
    {
      title: "Wallbee Infra",
      tech: "React / Node.js",
      year: "2023",
      color: "bg-[#064E3B]" // Dark Green placeholder
    },
    {
      title: "Rashed Automotives",
      tech: "Hugo / Netlify",
      year: "2022",
      color: "bg-[#7F1D1D]" // Dark Red placeholder
    }
  ];

  return (
    <section className="py-24 border-b border-text-secondary bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Shipped Projects" 
          kicker="// SELECTED WORK" 
        />
        <p className="text-lg text-text-secondary mb-16 max-w-2xl">
          Recent platforms, conference websites, and digital products built by our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card key={index} hoverEffect={true} className="p-0 overflow-hidden flex flex-col group">
              {/* Structural Placeholder Image */}
              <div className={`h-48 w-full ${project.color} border-b border-text-secondary flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                <span className="font-mono text-white/50 text-sm">Image Placeholder</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-text-secondary">
                  <span className="font-mono text-xs text-text-secondary">{project.tech}</span>
                  <span className="font-mono text-xs text-text-secondary">{project.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button variant="secondary">See all projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
