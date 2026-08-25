import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Yayin AI Lab",
  description: "Explore our creative and technical services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web development",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      content: "Elevate your online presence with innovative web solutions. We build fast, accessible, and scalable web platforms."
    },
    {
      title: "App development",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      content: "Transforming ideas into intuitive and user-friendly mobile apps for both iOS and Android platforms."
    },
    {
      title: "Product Design",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      content: "Creating visually appealing and user-centric product designs with strict adherence to modern typography and layout standards."
    },
    {
      title: "Education Consulting",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      content: "Navigating the complexities of educational strategy and growth. We are trusted partners for numerous education clients."
    },
    {
      title: "Makers Services",
      icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
      content: "Unlocking creativity through hands-on maker services. E-commerce platforms like A Washed Up Nerd for custom mechanical keyboards."
    },
    {
      title: "Training",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
      content: "Empowering teams with specialized training programs in modern tech stacks, AI integration, and development workflows."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Services Grid Section */}
        <section className="py-24 border-b border-text-secondary bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Unlock the Potential with Our Creative Services" 
              kicker="// EXPLORE OUR SERVICES" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} hoverEffect={true} className="bg-bg-primary h-full flex flex-col">
                  <div className="w-12 h-12 bg-secondary/20 text-accent border border-text-secondary rounded-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                      <path d={service.icon}></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text-secondary flex-grow">{service.content}</p>
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
