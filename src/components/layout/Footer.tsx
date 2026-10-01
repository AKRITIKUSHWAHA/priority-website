"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Send,
} from "lucide-react";
import { Logo, Button, Container, IconLinkedin, IconFacebook, IconTwitter, IconInstagram } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;

    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 5000);
    }, 800);
  };

  return (
    <footer className="relative bg-navy-950 text-white border-t border-navy-800 overflow-hidden font-sans pt-16 pb-8">
      {/* Signature Slanted Accent Line on Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600" />
      <div className="absolute top-0 right-12 w-28 h-1 bg-accent-500 skew-brand shadow-sm shadow-accent-500/50" />

      {/* Decorative Subtle Grid & Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <Container className="relative z-10">
        {/* Newsletter Callout Section */}
        <div className="bg-navy-900 border border-navy-700/80 rounded-2xl p-8 sm:p-10 mb-16 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-accent-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              SADC Dispatch Updates & Trade Insights
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Subscribe to Corridor Dispatch Bulletins
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              Get monthly updates on cross-border transit times, Beitbridge border queue status, customs regulatory shifts, and fleet updates.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleNewsletterSubmit} className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email address..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                size="md"
                slanted
                isLoading={newsletterStatus === "loading"}
                className="text-slate-950 font-bold shrink-0"
              >
                {newsletterStatus === "success" ? (
                  <span className="inline-flex items-center gap-1.5 text-slate-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </Button>
            </form>
            {newsletterStatus === "success" && (
              <p className="text-xs text-emerald-400 mt-2 font-medium">
                ✓ Thank you for subscribing to Priority Hauliers Dispatch.
              </p>
            )}
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Column 1: About & Logo */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="white" width={300} height={92} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Priority Hauliers (Private) Limited is a premier cross-border freight forwarding and heavy line-haul transport operator connecting South Africa, Zimbabwe, Zambia, and regional SADC trade hubs.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-accent-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-navy-700"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-accent-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-navy-700"
                aria-label="Facebook"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-accent-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-navy-700"
                aria-label="Twitter"
              >
                <IconTwitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks[3].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-accent-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-navy-700"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Services & Fleet
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Live Tracking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> News & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-400 transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Logistics Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services/land-transport" className="hover:text-accent-400 transition-colors">
                  Cross-Border Road Line-Haul
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="hover:text-accent-400 transition-colors">
                  Air Cargo Express Freight
                </Link>
              </li>
              <li>
                <Link href="/services/ocean-freight" className="hover:text-accent-400 transition-colors">
                  Ocean Container Intermodal
                </Link>
              </li>
              <li>
                <Link href="/services/cargo-storage" className="hover:text-accent-400 transition-colors">
                  Bonded Warehousing & Storage
                </Link>
              </li>
              <li>
                <Link href="/services/land-transport" className="hover:text-accent-400 transition-colors">
                  SADC Customs Clearing & Border Clearance
                </Link>
              </li>
              <li>
                <Link href="/services/land-transport" className="hover:text-accent-400 transition-colors">
                  Abnormal & Lowbed Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              Harare Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                <span>{siteConfig.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a href={`tel:${siteConfig.phones[0].primary}`} className="hover:text-white transition-colors">
                  {siteConfig.phones[0].display}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={siteConfig.whatsapp[0].link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-emerald-400">
                  {siteConfig.whatsapp[0].display} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{siteConfig.operatingHours.operations}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Priority Hauliers (Pvt) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/faqs" className="hover:text-slate-200 transition-colors">
              FAQs
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-accent-400 font-medium">Engineered for SADC Logistics</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
