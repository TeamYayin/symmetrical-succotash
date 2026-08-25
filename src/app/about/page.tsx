import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Yayin AI Lab",
  description: "A Dynamic Team of Creatives and Engineers.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Prajwal",
      role: "Founder & Full Stack Developer",
      linkedin: "https://linkedin.com/in/prajwalyashasvi",
      image: "/images/team/male-sketch-11.svg"
    },
    {
      name: "Avinash Yadav",
      role: "Advisor",
      linkedin: "https://linkedin.com/in/avinashmadharavena",
      image: "/images/team/male-sketch-55.svg"
    },
    {
      name: "Chetan S Anand",
      role: "Advisor",
      linkedin: "https://linkedin.com/in/csanand",
      image: "/images/team/male-sketch-28.svg"
    },
    {
      name: "M Sai Prashanth",
      role: "Blockchain Developer",
      linkedin: "https://linkedin.com/in/sai-prashanth-mallellu-bab491196",
      image: "/images/team/male-sketch-11.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 border-b border-text-secondary bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="A Dynamic Team of Creatives" 
              kicker="// WHO WE ARE" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  Although we are product-driven, we offer Information Technology Enabled Services (ITES) to optimize business processes. We analyze cyber security risks, hunt, and fix vulnerabilities in organizational infrastructure.
                </p>
                <a href="https://calendly.com/reach-py563/yayin" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Schedule a Meeting</Button>
                </a>
              </div>
              <div className="aspect-video bg-text-secondary/10 border border-text-secondary flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-sm text-text-secondary">Office / Team Image Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision Section */}
        <section className="py-24 border-b border-text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hoverEffect={false} className="bg-bg-secondary">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-accent">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  Our mission is to provide innovative and tailored solutions that enable businesses to thrive in a competitive landscape. We&apos;re committed to driving success through strategic partnerships.
                </p>
              </Card>
              <Card hoverEffect={false} className="bg-bg-secondary">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-accent">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  Our vision is to become a globally recognized consulting firm known for delivering transformative results. We aim to be the go-to choice for businesses seeking growth and optimization.
                </p>
              </Card>
              <Card hoverEffect={false} className="bg-bg-secondary">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-accent">Our Approach</h3>
                <p className="text-text-secondary leading-relaxed">
                  Our approach is rooted in collaboration, innovation, and expertise. We work closely with our clients to understand their unique challenges and develop custom strategies to overcome them.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b border-text-secondary bg-text-primary text-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">10+</div>
                <div className="font-mono text-sm uppercase tracking-wider text-bg-secondary/70">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">25K</div>
                <div className="font-mono text-sm uppercase tracking-wider text-bg-secondary/70">Users Worldwide</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">3</div>
                <div className="font-mono text-sm uppercase tracking-wider text-bg-secondary/70">Available Countries</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">0</div>
                <div className="font-mono text-sm uppercase tracking-wider text-bg-secondary/70">Awards Won</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="A Team of Experts Dedicated to Excellence" 
              kicker="// MEET OUR TEAM" 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {team.map((member) => (
                <Card key={member.name} hoverEffect={true} className="flex flex-col text-center">
                  <div className="w-24 h-24 mx-auto bg-secondary/20 rounded-full border border-text-secondary mb-6 flex items-center justify-center relative overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{member.role}</p>
                  <div className="mt-auto">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4 text-sm">
                      LinkedIn
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <a href="https://yayin-ai-labs.breezy.hr/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Work With Us</Button>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
