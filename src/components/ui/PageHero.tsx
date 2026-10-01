"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  actions,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-950 text-white pt-36 pb-20 md:pt-44 md:pb-28 border-b border-navy-800",
        className
      )}
    >
      {/* Cinematic Truck Convoy Background Image - Bright, Vivid & Clearly Visible */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/images/hero-2.jpg"
          alt="Priority Hauliers SADC Logistics Fleet"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
        />
        {/* Soft gradient to keep text readable while letting trucks shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/50 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/30" />
      </div>

      {/* Decorative Brand Slant */}
      <div className="absolute top-0 right-1/4 w-32 h-[120%] bg-white/[0.02] skew-brand pointer-events-none z-0" />
      <div className="absolute top-0 right-1/3 w-16 h-[120%] bg-accent-500/[0.05] skew-brand pointer-events-none z-0" />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Reveal direction="down" delay={0.1}>
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 select-none">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-accent-500" />
                <span>Home</span>
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.label + i}>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </Reveal>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal direction="up" delay={0.15}>
              <Badge variant="accent" slanted className="mb-4">
                {eyebrow}
              </Badge>
            </Reveal>
          )}

          <Reveal direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.12] text-white drop-shadow-md">
              {title}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal direction="up" delay={0.25}>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed font-medium drop-shadow-sm">
                {subtitle}
              </p>
            </Reveal>
          )}

          {actions && (
            <Reveal direction="up" delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
}
