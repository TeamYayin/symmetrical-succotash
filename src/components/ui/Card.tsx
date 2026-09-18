import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({
  className = "",
  children,
  hoverEffect = false,
  ...props
}: CardProps) {
  const baseStyles = "border border-text-secondary bg-bg-primary p-8";
  const hoverStyles = hoverEffect
    ? "transition-colors duration-150 ease-out hover:border-text-primary hover:bg-bg-secondary cursor-pointer"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
