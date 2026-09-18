import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Yayin AI Lab",
  description: "Join TeamYayin and help us build tools that work.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 border-b border-text-secondary/20 bg-gradient-to-br from-[#0a1536] via-[#0A1128] to-[#040814]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Join TeamYayin" 
              kicker="// CAREERS" 
              titleClassName="text-white"
              kickerClassName="text-accent"
            />
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              We are an experimental lab tackling overlooked technical challenges and building scalable tools for the future.
            </p>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-24 bg-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card hoverEffect={false} className="!bg-[#F8FAFC] border-[#E2E8F0] p-8 md:p-12">
              <h3 className="font-heading text-2xl font-semibold mb-8 text-secondary">Open Positions</h3>
              
              <style dangerouslySetInnerHTML={{__html: `
                #bzOpeningsContainer:not(:empty) + #fallback-message {
                  display: none;
                }
                
                /* Container and basic reset */
                #bzOpeningsContainer > ul { list-style: none; padding: 0; margin: 0; }
                
                /* The Single Job Card (Breezy wraps the whole job in an 'a' tag) */
                #bzOpeningsContainer > ul > li > a { 
                  display: flex; 
                  flex-direction: column; 
                  background-color: #FFFFFF;
                  border: 1px solid #E2E8F0;
                  padding: 2.5rem;
                  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                  text-decoration: none;
                  color: inherit;
                  transition: all 0.2s;
                }
                #bzOpeningsContainer > ul > li > a:hover {
                  border-color: #0055FF;
                }
                
                /* Job Title (Force to Top) */
                #bzOpeningsContainer h2 { 
                  order: 1;
                  font-size: 2.5rem; 
                  font-weight: 700; 
                  margin: 0 0 1.5rem 0; 
                  font-family: var(--font-heading);
                  line-height: 1.2;
                  color: #000;
                  transition: color 0.2s;
                }
                #bzOpeningsContainer > ul > li > a:hover h2 { color: #0055FF; }
                
                /* Metadata Badges (Force to Middle) */
                #bzOpeningsContainer > ul > li > a > ul { 
                  order: 2;
                  display: flex; 
                  flex-wrap: wrap; 
                  gap: 0.75rem; 
                  padding: 0; 
                  margin: 0 0 2rem 0; 
                  list-style: none; 
                }
                #bzOpeningsContainer > ul > li > a > ul > li {
                  background-color: #F1F5F9;
                  color: #52525B;
                  padding: 0.5rem 1rem;
                  font-family: var(--font-mono);
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  font-weight: 600;
                  border: 1px solid #E2E8F0;
                  border-radius: 9999px;
                }
                
                /* Apply Button (Target whatever is NOT the h2 or ul, and force to bottom) */
                #bzOpeningsContainer > ul > li > a > *:not(h2):not(ul) { 
                  order: 3;
                  align-self: flex-start;
                  display: inline-flex;
                  justify-content: center;
                  background-color: #20C997; 
                  color: #000; 
                  padding: 1rem 2.5rem; 
                  text-transform: uppercase; 
                  font-size: 0.875rem; 
                  font-weight: 600; 
                  font-family: var(--font-mono);
                  letter-spacing: 0.05em;
                  transition: all 0.2s;
                  border: 1px solid #20C997;
                }
                #bzOpeningsContainer > ul > li > a:hover > *:not(h2):not(ul) { 
                  background-color: #000;
                  color: #20C997;
                  border-color: #000;
                }
              `}} />

              {/* Breezy HR Widget Container */}
              <div id="bzOpeningsContainer"></div>
              
              {/* Fallback Message */}
              <p id="fallback-message" className="text-text-secondary text-lg mt-4">
                There are currently no open positions available. Please check back later!
              </p>
              
              {/* Load Breezy Script */}
              <Script 
                src="https://yayin-ai-lab.breezy.hr/embed/js?inline=true&group_by=none" 
                strategy="lazyOnload"
              />
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
