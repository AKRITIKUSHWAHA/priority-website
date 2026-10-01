"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Award, ArrowRight } from "lucide-react";
import {
  SectionHeading,
  Button,
  Container,
  Reveal,
  AnimatedCounter,
  Badge,
} from "@/components/ui";
import { images } from "@/data/images";

export function AboutSection() {
  const checklistItems = [
    "Full SADC cross-border haulage & Beitbridge transit clearances.",
    "Real-time satellite telematics & 24/7 fleet tracking.",
    "Zero-compromise fleet safety & Hazchem compliance.",
    "Customized freight solutions for FMCG, mining, & agriculture.",
  ];

  return (
    <section id="about-section" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none -ml-40" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Slanted Image Mask, Overlapping Thumbnail, Orange Accent Block */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="right" duration={0.7}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Decorative Slanted Orange Accent Block Behind Images */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-accent-500/90 rounded-3xl skew-brand pointer-events-none transform -rotate-1 shadow-lg shadow-accent-500/20" />
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary-600/20 rounded-3xl skew-brand pointer-events-none" />

                {/* Primary Large Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-soft-lg aspect-[4/3] bg-slate-200">
                  <Image
                    src={images.about.operations.src}
                    alt={images.about.operations.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
                </div>

                {/* Secondary Overlapping Image Frame (Bottom Right) */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-200 hidden sm:block">
                  <Image
                    src={images.about.driverInspection.src}
                    alt={images.about.driverInspection.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Floating Badge: 6+ Years Experience */}
                <div className="absolute top-6 left-6 bg-navy-900 text-white p-4 sm:p-5 rounded-2xl border border-navy-700 shadow-2xl flex items-center gap-3.5 z-20">
                  <div className="w-12 h-12 rounded-xl bg-accent-500 text-slate-950 flex items-center justify-center font-extrabold text-xl shrink-0 shadow-md shadow-accent-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 text-2xl font-extrabold font-heading text-white">
                      <AnimatedCounter value={6} suffix="+" />
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Years Experience</p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative Content & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="left" duration={0.7}>
              <SectionHeading
                eyebrow="About Us"
                title="Trusted & Faster Logistic Service Provider"
                align="left"
                className="mb-6"
              />
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Priority Hauliers (Private) Limited is a Zimbabwean road haulage, transportation and logistics company providing dependable and professional transport solutions across Zimbabwe and the SADC region.
              </p>
            </Reveal>

            {/* Checklist Items with Animated Tick Icons */}
            <div className="space-y-3.5 pt-2">
              {checklistItems.map((item, idx) => (
                <Reveal key={idx} direction="left" delay={0.2 + idx * 0.08}>
                  <div className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-500 group-hover:text-slate-950 transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA Button */}
            <Reveal direction="left" delay={0.45}>
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  withArrow
                  href="/about"
                  className="shadow-soft hover:shadow-glow-primary"
                >
                  Learn More About Us
                </Button>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
