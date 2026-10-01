"use client";

import React from "react";
import { Truck, Users, Globe2, Award } from "lucide-react";
import { AnimatedCounter, Container, Reveal } from "@/components/ui";

export function StatsSection() {
  const stats = [
    {
      id: "deliveries",
      value: 12500,
      suffix: "+",
      label: "Deliveries Completed",
      description: "Cross-border line-haul shipments delivered safely.",
      icon: Truck,
    },
    {
      id: "clients",
      value: 450,
      suffix: "+",
      label: "Happy Clients",
      description: "Industrial, FMCG & mining corporate partners.",
      icon: Users,
    },
    {
      id: "countries",
      value: 6,
      suffix: " SADC",
      label: "Countries Covered",
      description: "Zimbabwe, South Africa, Mozambique, Zambia & more.",
      icon: Globe2,
    },
    {
      id: "years",
      value: 6,
      suffix: "+",
      label: "Years of Experience",
      description: "Proven regional logistics and fleet management.",
      icon: Award,
    },
  ];

  return (
    <section id="stats-strip" className="relative bg-gradient-to-r from-primary-700 via-primary-500 to-primary-800 text-white py-16 md:py-20 overflow-hidden shadow-soft-lg">
      {/* Decorative Slanted Brand Overlays */}
      <div className="absolute top-0 right-1/4 w-40 h-[140%] bg-white/5 skew-brand pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-20 h-[140%] bg-accent-500/10 skew-brand pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;

            return (
              <Reveal key={stat.id} direction="up" delay={0.1 * idx}>
                <div className="glass-dark bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:border-accent-400/50 transition-all duration-300 hover:-translate-y-1.5 group relative">
                  {/* Slanted Accent Divider on Top Right */}
                  <div className="absolute top-4 right-4 w-8 h-1 bg-accent-500 rounded-sm skew-brand opacity-80 group-hover:w-12 transition-all duration-300" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md shadow-accent-500/30 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight flex items-baseline">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-heading">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
