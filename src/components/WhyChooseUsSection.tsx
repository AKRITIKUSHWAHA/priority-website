"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, Headphones, Truck, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading, Card, Container, Reveal, Badge } from "@/components/ui";
import { images } from "@/data/images";

export function WhyChooseUsSection() {
  const features = [
    {
      id: "best-in-industry",
      title: "Best In Industry",
      description:
        "Modern heavy transport fleet, optimized cross-border line-haul routes, and 99.4% on-time delivery track record across Southern Africa.",
      icon: ShieldCheck,
    },
    {
      id: "emergency-services",
      title: "Emergency Services",
      description:
        "Rapid dispatch response, 24/7 road assistance breakdown recovery, and express priority freight positioning for urgent cargo.",
      icon: Zap,
    },
    {
      id: "support-247",
      title: "24/7 Customer Support",
      description:
        "Dedicated control room, continuous satellite telematics tracking, and instant WhatsApp status updates directly to your logistics desk.",
      icon: Headphones,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none -ml-32 -mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E335C_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Header & Narrative Feature Cards */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Faster, Safe and Trusted Logistics Services"
                subtitle="Engineered for high-capacity freight transportation with zero compromise on fleet safety, transparent tracking, and customer-focused dispatch."
                align="left"
                theme="dark"
                className="mb-0"
              />
            </Reveal>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 gap-5 pt-2">
              {features.map((feat, idx) => {
                const IconComp = feat.icon;

                return (
                  <Reveal key={feat.id} direction="up" delay={0.15 * idx + 0.1}>
                    <Card
                      variant="navy"
                      glow="accent"
                      className="p-6 transition-all duration-300 hover:-translate-y-1.5 group border-navy-700/80 hover:border-accent-500/50"
                    >
                      <div className="flex items-start gap-4">
                        {/* Gradient Icon Circle */}
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-accent-500/20 group-hover:scale-110 transition-transform duration-300">
                          <IconComp className="w-6 h-6" />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-lg font-bold font-heading text-white group-hover:text-accent-400 transition-colors">
                            {feat.title}
                          </h4>
                          <p className="text-sm text-slate-300 leading-relaxed font-sans">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Side: Masked Side Image Frame with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" duration={0.8}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Slanted Accent Border Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-accent-500 rounded-3xl skew-brand pointer-events-none opacity-80" />
                
                {/* Main Feature Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-navy-700 shadow-2xl aspect-[4/5] bg-navy-900">
                  <Image
                    src={images.about.depot.src}
                    alt={images.about.depot.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  
                  {/* Overlay Quote / Dispatch Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-md p-5 rounded-2xl border border-navy-700 space-y-2">
                    <div className="flex items-center gap-2 text-accent-400 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-accent-500" />
                      <span>Harare Dispatch Center</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">
                      "Connecting South Africa, Zimbabwe, Mozambique, and Zambia with satellite-tracked road transport."
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
