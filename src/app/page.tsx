import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section (Cinematic Full Viewport) */}
      <HeroSection />

      {/* 2. About Us Section (2-Column Slanted Mask) */}
      <AboutSection />

      {/* 3. Why Choose Us Section (Navy Feature Cards & Depot Media) */}
      <WhyChooseUsSection />

      {/* 4. Stats Strip (4 Animated Counters on Blue Gradient) */}
      <StatsSection />

      {/* 5. Services Section (4 Premium Orange Cards) */}
      <ServicesSection />

      {/* 6. Process / How It Works Timeline (4 Alternating Timeline Steps) */}
      <ProcessSection />

      {/* 7. CTA Banner (Ready to move your cargo across Southern Africa?) */}
      <CtaSection />
    </div>
  );
}
