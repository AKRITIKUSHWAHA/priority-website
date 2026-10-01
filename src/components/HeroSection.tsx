"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Radio,
  Award,
  ChevronDown,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button, Badge, Container } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

interface HeroSectionProps {
  onTrackSearch?: (id: string) => void;
}

export function HeroSection({ onTrackSearch }: HeroSectionProps) {
  const [trackInput, setTrackInput] = useState("");
  const [trackStatus, setTrackStatus] = useState<string | null>(null);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const textY = useTransform(scrollY, [0, 500], [0, 60]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackInput.trim()) return;

    if (onTrackSearch) {
      onTrackSearch(trackInput.trim());
    } else {
      setTrackStatus(`Tracking ID ${trackInput.trim()} located: In-Transit (Beitbridge Border Facility)`);
    }
  };

  const words = ["Safe", "&", "Faster", "Logistics", "Services"];

  return (
    <section className="relative min-h-screen w-full bg-navy-950 text-white flex items-center justify-center overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* 1. Cinematic Background Image with Ken-Burns Zoom & Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-truck.jpg"
            alt="Priority Hauliers heavy transport line-haul truck on corridor highway"
            fill
            priority
            quality={95}
            className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          />
        </motion.div>

        {/* Soft readable gradient over text on left, clear truck view on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/50 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-navy-950/20" />
      </motion.div>

      {/* 2. Soft Glowing Ambient Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-accent-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Decorative Animated Dashed Route Line Across Hero */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 hidden md:block"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M -100 650 C 300 600, 500 200, 900 350 C 1200 450, 1400 150, 1600 200"
          stroke="url(#hero-route-gradient)"
          strokeWidth="3"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="hero-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#446CB3" />
            <stop offset="50%" stopColor="#F89D21" />
            <stop offset="100%" stopColor="#446CB3" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Decorative Slanted Logo Parallelogram Motifs */}
      <div className="absolute top-20 right-1/4 w-36 h-[140%] bg-white/[0.02] skew-brand pointer-events-none hidden lg:block" />
      <div className="absolute top-10 right-1/3 w-16 h-[140%] bg-accent-500/[0.04] skew-brand pointer-events-none hidden lg:block" />

      {/* 5. Main Hero Container */}
      <Container className="relative z-10">
        <motion.div style={{ y: textY }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Words Headline & Narrative CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-900/90 border border-navy-700/80 backdrop-blur-md shadow-soft">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-heading">
                  Trusted Logistics Across Zimbabwe & SADC
                </span>
              </div>
            </motion.div>

            {/* Staggered Word Reveal H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] text-white">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={word === "Faster" ? "inline-block gradient-text pr-3" : "inline-block pr-3"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans"
            >
              Premier cross-border freight forwarding and line-haul haulage operator connecting South Africa, Zimbabwe, Zambia, and regional SADC trade corridors with 24/7 satellite-tracked precision.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="accent"
                size="lg"
                slanted
                withArrow
                href="/track"
                className="text-slate-950 font-bold shadow-lg shadow-accent-500/25"
              >
                Track & Trace
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/services"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                Our Services
              </Button>
            </motion.div>

            {/* 3 Floating Stat Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="grid grid-cols-3 gap-3 pt-6 max-w-lg"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-navy-900/80 backdrop-blur-md p-3 rounded-xl border border-navy-700/80 text-center space-y-1 shadow-soft"
              >
                <div className="text-lg sm:text-xl font-extrabold text-accent-400 font-heading">
                  6+ Years
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  Experience
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.3 }}
                className="bg-navy-900/80 backdrop-blur-md p-3 rounded-xl border border-navy-700/80 text-center space-y-1 shadow-soft"
              >
                <div className="text-lg sm:text-xl font-extrabold text-primary-400 font-heading">
                  24/7/365
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  Dispatch Support
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.6 }}
                className="bg-navy-900/80 backdrop-blur-md p-3 rounded-xl border border-navy-700/80 text-center space-y-1 shadow-soft"
              >
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-heading">
                  SADC Wide
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  Corridor Coverage
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Glassmorphism Quick Track Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-dark p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden space-y-6">
              {/* Top Card Label */}
              <div className="flex items-center justify-between border-b border-navy-700/80 pb-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-heading">
                    Quick Track & Trace
                  </span>
                </div>
                <Badge variant="subtle" size="sm">
                  Live Satellite GPS
                </Badge>
              </div>

              {/* Form Input */}
              <form onSubmit={handleTrackSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Enter Consignment ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={trackInput}
                      onChange={(e) => setTrackInput(e.target.value)}
                      placeholder="e.g. PH-8942-ZW"
                      className="w-full pl-11 pr-4 py-3.5 bg-navy-950/90 border border-navy-700 rounded-xl text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    />
                    <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="md"
                  slanted
                  withArrow
                  className="w-full justify-center text-slate-950 font-bold"
                >
                  Track Consignment
                </Button>
              </form>

              {/* Immediate Feedback Notification */}
              {trackStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 font-medium"
                >
                  {trackStatus}
                </motion.div>
              )}

              {/* Quick Sample Waybills */}
              <div className="pt-2 border-t border-navy-800 space-y-2">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Sample Consignments:
                </p>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {[
                    { code: "PH-8942-ZW", route: "Beira Port ➔ Harare Depot" },
                    { code: "PH-7721-SA", route: "Johannesburg ➔ Bulawayo" },
                  ].map((sample) => (
                    <button
                      key={sample.code}
                      type="button"
                      onClick={() => {
                        setTrackInput(sample.code);
                        setTrackStatus(`Tracking ID ${sample.code} located: In-Transit (${sample.route})`);
                      }}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-navy-900/60 hover:bg-navy-800 border border-navy-700/60 text-slate-300 transition-colors text-left"
                    >
                      <span className="font-mono font-bold text-accent-400">
                        {sample.code}
                      </span>
                      <span className="text-[11px] text-slate-400">{sample.route}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges under Card */}
              <div className="pt-2 border-t border-navy-800 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-300 font-medium">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-accent-500" />
                  <span>SADC Licensed</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Telematics</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span>Hazchem Certified</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>

      {/* 6. Scroll-Down Indicator */}
      <motion.div
        style={{ opacity: opacityFade as any }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-400 text-xs font-semibold select-none cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-accent-500" />
      </motion.div>

      {/* 7. Bottom Slanted Edge Transitioning Into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-slate-50 [clip-path:polygon(0_100%,100%_100%,100%_0)] pointer-events-none z-10" />
    </section>
  );
}
