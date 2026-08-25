import { getAllProjects } from "@/lib/mdx";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Yayin AI Lab",
  description: "Recent platforms, conference websites, and digital products built by Yayin AI Lab.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Portfolio" 
            kicker="// ALL PROJECTS" 
          />
          <p className="text-lg text-text-secondary mb-16 max-w-2xl">
            A selection of software platforms, conference websites, and digital products engineered by our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link href={`/portfolio/${project.slug}`} key={project.slug} className="block group h-full">
                <Card hoverEffect={true} className="p-0 overflow-hidden flex flex-col h-full bg-bg-secondary">
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-xl font-semibold mb-3 text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-3 mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-text-secondary/50">
                      <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                        Read more →
                      </span>
                      {project.date && (
                        <span className="font-mono text-xs text-text-secondary">
                          {new Date(project.date).getFullYear()}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
