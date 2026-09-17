import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export function CommunitySection() {
  return (
    <section className="py-24 border-b border-text-secondary bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Credibility / Microsoft Part */}
        <div className="mb-24 flex flex-col md:flex-row items-center justify-between border border-text-secondary p-8 bg-bg-secondary">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
            <h3 className="font-heading text-2xl font-semibold mb-2 text-white">Authorized Microsoft Solutions Partner</h3>
            <p className="text-white/80">
              We provide Microsoft 365 licensing, deployment, and ongoing IT support, tailored specifically for the needs of schools, colleges, and growing businesses.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="border border-text-secondary bg-bg-primary px-6 py-4 font-mono text-sm tracking-wider flex items-center space-x-3">
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <span>SOLUTIONS PARTNER</span>
            </div>
          </div>
        </div>

        {/* Open Source Part */}
        <div>
          <SectionHeader 
            title="TeamYayin Open Source" 
            kicker="// COMMUNITY CONTRIBUTION" 
          />
          <p className="text-lg text-text-secondary mb-16 max-w-2xl">
            We don&apos;t just consume open-source software; we build it. Our tools and libraries are used by developers worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="flex flex-col items-center text-center p-6">
              <span className="font-heading text-4xl font-semibold text-accent mb-2">25K+</span>
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Total Users</span>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <span className="font-heading text-4xl font-semibold text-text-primary mb-2">40+</span>
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Repositories</span>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <span className="font-heading text-4xl font-semibold text-text-primary mb-2">100%</span>
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Open Source</span>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 hoverEffect">
              <a href="https://github.com/teamyayin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-accent hover:text-text-primary transition-colors">
                <span className="font-mono text-sm uppercase tracking-wider">Explore GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
}
