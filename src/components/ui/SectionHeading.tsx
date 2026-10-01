import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignClass, className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2.5 mb-3.5",
            align === "center" && "justify-center"
          )}
        >
          {/* Slanted Parallelogram Accent Line from Logo */}
          <span className="w-8 h-1.5 bg-accent-500 rounded-sm skew-brand shrink-0 shadow-sm shadow-accent-500/30" />
          <span
            className={cn(
              "text-xs sm:text-sm font-bold tracking-wider uppercase",
              isDark ? "text-accent-400" : "text-accent-600"
            )}
          >
            {eyebrow}
          </span>
          {align === "center" && (
            <span className="w-8 h-1.5 bg-accent-500 rounded-sm skew-brand shrink-0 shadow-sm shadow-accent-500/30" />
          )}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
