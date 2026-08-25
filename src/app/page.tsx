import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Showcase Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Design System Showcase" 
            kicker="// PHASE 2 FOUNDATIONS" 
          />
          
          <div className="space-y-16">
            {/* Buttons */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-secondary mb-6">1. Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="primary" disabled>Disabled Primary</Button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-secondary mb-6">2. Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <h4 className="font-heading text-xl font-semibold mb-2">Static Card</h4>
                  <p className="text-text-secondary text-sm">
                    A standard structural card with a 1px border. No hover effect.
                  </p>
                </Card>
                <Card hoverEffect={true}>
                  <h4 className="font-heading text-xl font-semibold mb-2">Interactive Card</h4>
                  <p className="text-text-secondary text-sm">
                    Includes a subtle background shift and border color change on hover.
                  </p>
                </Card>
              </div>
            </div>
            
            {/* Typography */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-secondary mb-6">3. Typography</h3>
              <div className="space-y-4">
                <p className="font-heading text-4xl font-semibold">Heading (Outfit)</p>
                <p className="font-sans text-base">Body text (Inter). The quick brown fox jumps over the lazy dog. Building reliable software.</p>
                <p className="font-mono text-sm">Monospace (JetBrains Mono) for code and data.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
