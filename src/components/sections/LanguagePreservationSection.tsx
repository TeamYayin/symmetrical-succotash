import React from "react";

export function LanguagePreservationSection() {
  return (
    <section className="py-24 border-b border-text-secondary bg-text-primary text-bg-primary overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {/* Custom dark header override */}
            <div className="mb-12">
              <span className="block font-mono text-accent text-sm mb-4 uppercase tracking-wider">
                {"// CULTURAL ENGINEERING"}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-bg-primary tracking-tight">
                Engineering for Indo-Aryan & Dravidian languages.
              </h2>
            </div>
            
            <p className="text-lg text-text-secondary mb-8">
              The internet defaults to English. We are actively researching and building tools to ensure regional languages remain functional, accessible, and preserved in modern web environments.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="border border-text-secondary/30 p-6 bg-text-primary">
              <span className="font-mono text-xs text-text-secondary block mb-2">TARGET: HINDI (DEVANAGARI)</span>
              <span className="text-3xl font-sans tracking-wide">वेब विकास</span>
            </div>
            <div className="border border-text-secondary/30 p-6 bg-text-primary ml-12">
              <span className="font-mono text-xs text-text-secondary block mb-2">TARGET: TELUGU (DRAVIDIAN)</span>
              <span className="text-3xl font-telugu tracking-wide">వెబ్ వ్యవస్థల రూపకల్పన</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
