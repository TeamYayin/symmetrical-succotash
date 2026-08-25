import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities | Yayin AI Lab",
  description: "Explore our technical capabilities and solutions.",
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "Web & Application Development",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      content: "Custom web platforms, high-performance static sites, and complex conference portals built on modern stacks."
    },
    {
      title: "Education Technology",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      content: "Digital infrastructure for schools and colleges, from institutional portals to upcoming open-source SaaS products."
    },
    {
      title: "IT Enablement",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      content: "Authorized Microsoft Solutions Partner providing M365 licensing, deployment, and ongoing technical support tailored for organizations."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Capabilities Grid Section */}
        <section className="py-24 border-b border-text-secondary bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Technical Capabilities" 
              kicker="// WHAT WE DO" 
            />
            <p className="text-xl text-text-secondary mb-16 max-w-2xl leading-relaxed">
              We focus on practical, scalable solutions for growing businesses and educational organizations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((service, index) => (
                <Card key={index} hoverEffect={true} className="bg-bg-primary h-full flex flex-col">
                  <div className="w-12 h-12 bg-secondary/20 text-accent border border-text-secondary rounded-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                      <path d={service.icon}></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text-secondary flex-grow leading-relaxed">{service.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-text-primary text-bg-primary text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block font-mono text-accent text-sm mb-4 uppercase tracking-wider">
              {/* FOR EVERY BUSINESS TYPE */}
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-12">
              Empower Your Project with Our Expertise
            </h2>
            <Link href="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
