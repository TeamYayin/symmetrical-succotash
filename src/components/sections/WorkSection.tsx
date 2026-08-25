import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { getAllProjects } from "@/lib/mdx";

export async function WorkSection() {
  // Fetch projects and take the top 3
  const projects = getAllProjects().slice(0, 3);

  return (
    <section className="py-24 border-b border-text-secondary bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Shipped Code" 
          kicker="// SHIPPED WORK" 
        />
        <p className="text-lg text-text-secondary mb-16 max-w-2xl">
          Recent platforms, conference websites, and digital products built by our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => {
            const year = project.date ? new Date(project.date).getFullYear() : null;
            const isArchived = project.archived;
            
            return (
              <Link href={`/portfolio/${project.slug}`} key={project.slug} className="block group">
                <Card hoverEffect={true} className="p-0 overflow-hidden flex flex-col h-full bg-bg-primary relative">
                  {/* Image or Placeholder */}
                  <div className={`h-48 w-full bg-secondary/20 border-b border-text-secondary flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity relative`}>
                    {project.thumbnail ? (
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="font-mono text-text-secondary text-sm z-10">Image Placeholder</span>
                    )}
                  </div>
                  
                  {isArchived && (
                    <div className="absolute top-4 right-4 bg-text-primary text-bg-primary font-mono text-[10px] uppercase px-2 py-1 tracking-widest z-10">
                      Archived
                    </div>
                  )}

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-text-secondary/50">
                      <span className="font-mono text-xs text-text-secondary">{year || "Ongoing"}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
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
