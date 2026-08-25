import React from "react";

interface SectionHeaderProps {
  title: string;
  kicker?: string;
  className?: string;
}

export function SectionHeader({
  title,
  kicker,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {kicker && (
        <span className="block font-mono text-text-secondary text-sm mb-4 uppercase tracking-wider">
          {kicker}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
        {title}
      </h2>
    </div>
  );
}
