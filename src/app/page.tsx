import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { LabInitiativesSection } from "@/components/sections/LabInitiativesSection";
import { LanguagePreservationSection } from "@/components/sections/LanguagePreservationSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { MakerSection } from "@/components/sections/MakerSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Positioning statement (Visual break) */}
        <section className="py-24 border-b border-text-secondary bg-text-primary text-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold leading-tight text-center max-w-4xl mx-auto">
              A dual mandate: Commercial engineering and community research.
            </h2>
            <p className="mt-8 text-center text-lg text-bg-primary/80 max-w-3xl mx-auto">
              We fund our research by delivering high-quality commercial digital products. When you hire us for web development or IT infrastructure, you get a team with the technical depth of a research lab.
            </p>
          </div>
        </section>

        <CapabilitiesSection />
        <WorkSection />
        <LabInitiativesSection />
        <LanguagePreservationSection />
        <CommunitySection />
        <MakerSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
