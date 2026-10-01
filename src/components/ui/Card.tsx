"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "muted" | "navy" | "glass" | "glassDark";
export type CardGlow = "none" | "primary" | "accent";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  glow?: CardGlow;
  hoverLift?: boolean;
  slantedAccent?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  glow = "none",
  hoverLift = true,
  slantedAccent = false,
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    default:
      "bg-white border border-slate-200/80 text-slate-900 shadow-soft",
    muted:
      "bg-slate-50/80 border border-slate-200/60 text-slate-900 shadow-sm",
    navy:
      "bg-navy-900 border border-navy-700/80 text-white shadow-soft",
    glass:
      "glass text-slate-900 shadow-soft",
    glassDark:
      "glass-dark text-white shadow-soft",
  };

  const glowStyles: Record<CardGlow, string> = {
    none: "",
    primary: "hover:shadow-glow-primary hover:border-primary-400/50",
    accent: "hover:shadow-glow-accent hover:border-accent-400/50",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 transition-all duration-300",
        hoverLift && "hover:-translate-y-1.5 hover:shadow-soft-lg",
        variantStyles[variant],
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {slantedAccent && (
        <div className="absolute top-0 right-8 -mt-1 w-12 h-1.5 bg-accent-500 rounded-sm skew-brand shadow-sm shadow-accent-500/40" />
      )}
      {children}
    </div>
  );
}
