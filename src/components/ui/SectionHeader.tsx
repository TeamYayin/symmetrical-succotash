import React from "react";

interface SectionHeaderProps {
  title: string;
  kicker?: string;
  className?: string;
  titleClassName?: string;
  kickerClassName?: string;
}

export function SectionHeader({
  title,
  kicker,
  className = "",
  titleClassName = "text-text-primary",
  kickerClassName = "text-secondary",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {kicker && (
        <span className={`block font-mono text-sm mb-4 uppercase tracking-wider ${kickerClassName}`}>
          {kicker}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h2>
    </div>
  );
}
