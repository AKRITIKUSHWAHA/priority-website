"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";
import { Button, Container, Reveal, Badge } from "@/components/ui";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export function CtaSection() {
  return (
    <section id="cta-section" className="relative py-24 md:py-32 bg-navy-950 text-white overflow-hidden border-t border-navy-800">
      {/* Background Hero Image Overlay with Ken-Burns */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={images.cta.highway.src}
          alt={images.cta.highway.alt}
          fill
          quality={85}
          className="object-cover object-center opacity-20"
        />
        {/* Animated Gradient Background (Blue to Navy with Warm Orange Glow) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-primary-950/85 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(#F89D21_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      {/* Radial Gradient Glow Blobs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-accent-500/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      {/* Signature Slanted Accent Line on Top */}
      <div className="absolute top-0 right-12 w-32 h-1 bg-accent-500 skew-brand shadow-sm shadow-accent-500/50" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <Reveal direction="up">
          <Badge variant="accent" slanted className="mb-4">
            Instant SADC Line-Haul Dispatch
          </Badge>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
            Ready to Move Your Cargo Across Southern Africa?
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Connect directly with our Harare dispatch control room for immediate rates, fleet positioning, customs pre-clearance, and 24/7 telematics tracking.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="accent"
              size="lg"
              slanted
              withArrow
              href="/contact"
              className="text-slate-950 font-bold shadow-xl shadow-accent-500/30"
            >
              Get a Quote
            </Button>

            <a
              href={siteConfig.whatsapp[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-7 py-3.5 rounded-xl border border-emerald-400/30 shadow-xl transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </Reveal>

        {/* Small Assurance Badges */}
        <Reveal direction="up" delay={0.45}>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span>Harare HQ: 17 Mansfield Rd, Marlborough</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-primary-400" />
              <span>Hotline: {siteConfig.phones[0].display}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
