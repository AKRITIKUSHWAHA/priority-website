"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PageHero,
  Container,
  Reveal,
  Button,
  Badge,
  SectionHeading,
} from "@/components/ui";
import { servicesData } from "@/data/services";
import { images } from "@/data/images";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, MessageSquare } from "lucide-react";

export default function ServicesPage() {
  const localImageMap: Record<string, string> = {
    "land-transport": images.services.land.src,
    "cargo-storage": images.services.storage.src,
    "ocean-freight": images.services.ocean.src,
    "air-freight": images.services.air.src,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Page Hero with Slanted Geometry */}
      <PageHero
        eyebrow="Priority Hauliers Services"
        title="Engineered Logistics & Freight Solutions"
        subtitle="End-to-end line-haul haulage, express air freight, intermodal ocean shipping, and high-security Harare warehousing across Zimbabwe and SADC."
        breadcrumbs={[{ label: "Services" }]}
      />

      <Container className="py-16 md:py-24 space-y-24">
        {/* Intro Section Heading */}
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Corridor Capability"
            title="Comprehensive Regional Logistics Portfolio"
            subtitle="Designed for corporate industrial shippers, mining operations, FMCG distributors, and commercial agricultural enterprises."
          />
        </Reveal>

        {/* Alternating Service Feature Rows */}
        <div className="space-y-24">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const heroImg = localImageMap[service.slug] || service.image;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal direction={isEven ? "right" : "left"} duration={0.7}>
                    <div className="relative mx-auto max-w-lg lg:max-w-none">
                      {/* Decorative Slanted Brand Frame */}
                      <div className="absolute -top-4 -left-4 w-full h-full bg-accent-500 rounded-3xl skew-brand pointer-events-none opacity-85" />

                      <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-soft-lg aspect-[4/3] bg-slate-200">
                        <Image
                          src={heroImg}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="accent" slanted>
                            Featured Solution
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Text & Feature Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal direction={isEven ? "left" : "right"}>
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-600 font-heading">
                        Solution 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900">
                        {service.title}
                      </h2>
                    </div>
                  </Reveal>

                  <Reveal direction={isEven ? "left" : "right"} delay={0.1}>
                    <p className="text-base text-slate-600 leading-relaxed font-sans">
                      {service.fullDesc}
                    </p>
                  </Reveal>

                  {/* Bullet Points */}
                  <Reveal direction={isEven ? "left" : "right"} delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  {/* Action Buttons */}
                  <Reveal direction={isEven ? "left" : "right"} delay={0.3}>
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button
                        variant="primary"
                        size="md"
                        withArrow
                        href={`/services/${service.slug}`}
                      >
                        Explore Service Specs
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        href="/track"
                      >
                        Track Freight
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        {/* "Get a Quote" Banner with Animated Gradient Background */}
        <Reveal direction="up" delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden bg-navy-900 text-white p-8 sm:p-12 md:p-16 border border-navy-700 shadow-2xl">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500/20 to-navy-900 opacity-60 animate-pulse pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <Badge variant="accent" slanted>
                Instant Corridor Quotation
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Ready to Accelerate Your Cross-Border Freight?
              </h2>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                Contact our Harare dispatch control room for immediate rates, vehicle availability, and SADC transit advice.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  slanted
                  withArrow
                  href="/contact"
                  className="text-slate-950 font-bold"
                >
                  Request Customized Quote
                </Button>

                <a
                  href="https://wa.me/264818518120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-emerald-400/30 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Control Room</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
