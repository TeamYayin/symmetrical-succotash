import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";

  const variants = {
    primary:
      "bg-accent text-black hover:opacity-90 border border-accent",
    secondary:
      "bg-transparent text-text-primary border border-text-secondary hover:border-text-primary hover:bg-bg-secondary hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
