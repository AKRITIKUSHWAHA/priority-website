"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, Ship, Truck, Warehouse, ArrowRight, ChevronRight } from "lucide-react";
import { SectionHeading, Container, Reveal, Button, Badge } from "@/components/ui";
import { servicesData } from "@/data/services";
import { images } from "@/data/images";

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Truck: Truck,
    Warehouse: Warehouse,
    Ship: Ship,
    Plane: Plane,
  };

  const imageMap: Record<string, string> = {
    "land-transport": images.services.land.src,
    "cargo-storage": images.services.storage.src,
    "ocean-freight": images.services.ocean.src,
    "air-freight": images.services.air.src,
  };

  return (
    <section id="services-section" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none -mr-32" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Our Services"
            title="Best Logistic Services"
            subtitle="Providing safe, fast, and comprehensive regional road transport, air cargo, ocean forwarding, and bonded storage solutions across SADC."
          />
        </Reveal>

        {/* 4 Premium Service Cards Matching Reference Screenshot 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {servicesData.map((service, idx) => {
            const IconComp = iconMap[service.iconName] || Truck;

            return (
              <Reveal key={service.id} direction="up" delay={0.12 * idx + 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  {/* Top Orange Header with Icon and Title */}
                  <div className="bg-[#FF4800] p-6 text-white flex flex-col items-center text-center justify-center min-h-[140px] transition-colors group-hover:bg-[#E03E00]">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-white line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bottom Content Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4 bg-white">
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-[#FF4800] group-hover:text-[#E03E00] transition-colors border-t border-slate-100">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View All Services Link */}
        <Reveal direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" withArrow href="/services">
              View All Services & Fleet Options
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
