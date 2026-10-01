import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "primary" | "accent" | "navy" | "subtle" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  slanted?: boolean;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  slanted = false,
  icon,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    primary: "bg-primary-500 text-white shadow-sm shadow-primary-500/20",
    accent: "bg-accent-500 text-slate-950 font-semibold shadow-sm shadow-accent-500/25",
    navy: "bg-navy-900 text-white border border-navy-700",
    subtle: "bg-primary-50 text-primary-700 border border-primary-100",
    outline: "bg-transparent text-primary-600 border border-primary-300",
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs sm:text-sm px-3.5 py-1",
  };

  const content = (
    <span className={cn("inline-flex items-center gap-1.5 font-medium", slanted && "unskew-brand")}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors select-none",
        slanted ? "skew-brand rounded-sm" : "rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {content}
    </span>
  );
}
