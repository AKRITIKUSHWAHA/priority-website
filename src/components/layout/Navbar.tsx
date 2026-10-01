"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  Logo,
  IconLinkedin,
  IconFacebook,
  IconTwitter,
  IconInstagram,
} from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans">
        {/* Top Information Strip - Collapses cleanly when scrolled */}
        <div
          className={cn(
            "bg-navy-950 text-slate-300 text-xs px-4 border-b border-navy-800/80 transition-all duration-300 ease-in-out overflow-hidden",
            isScrolled
              ? "max-h-0 py-0 opacity-0 pointer-events-none border-b-0"
              : "max-h-16 py-2 opacity-100"
          )}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Contact Info & Location */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                <span className="hidden md:inline">{siteConfig.address.full}</span>
                <span className="md:hidden">Harare, Zimbabwe</span>
              </div>

              <div className="h-3 w-px bg-slate-800 hidden sm:block" />

              <a
                href={`tel:${siteConfig.phones[0].primary}`}
                className="flex items-center gap-1.5 hover:text-accent-400 transition-colors font-medium text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                <span>{siteConfig.phones[0].display}</span>
              </a>

              <div className="h-3 w-px bg-slate-800 hidden md:block" />

              <a
                href={siteConfig.whatsapp[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsapp[0].display}</span>
              </a>
            </div>

            {/* Email & Social Links */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hidden lg:flex items-center gap-1.5 hover:text-accent-400 transition-colors text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>

              <div className="h-3 w-px bg-slate-800 hidden lg:block" />

              <div className="flex items-center gap-3 text-slate-400">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors p-0.5"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors p-0.5"
                  aria-label="Facebook"
                >
                  <IconFacebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors p-0.5"
                  aria-label="Twitter"
                >
                  <IconTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors p-0.5"
                  aria-label="Instagram"
                >
                  <IconInstagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar - Consistently white matching live screenshots */}
        <div
          className={cn(
            "w-full bg-white border-b border-slate-200 shadow-sm text-slate-900 transition-all duration-300 ease-in-out",
            isScrolled ? "py-2.5 shadow-md" : "py-3.5"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo System - Full Color Logo on Clean White Navbar */}
            <Logo
              variant="default"
              width={360}
              height={110}
              priority
            />

            {/* Desktop Navigation Links with Exact Orange Active Pill */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg",
                      isActive
                        ? "bg-[#FF4800] text-white shadow-md shadow-[#FF4800]/25"
                        : "text-slate-900 hover:text-[#FF4800] hover:bg-slate-100"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action Area */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/track"
                className="inline-flex items-center gap-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md shadow-[#FF4800]/20 hover:shadow-[#FF4800]/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Track & Trace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Controls (Menu Toggle & Direct CTA) */}
            <div className="flex items-center space-x-2 md:hidden">
              <Link
                href="/track"
                className="bg-[#FF4800] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm"
              >
                Track
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4800]",
                  isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in Full Height Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-navy-900 text-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-navy-700/80 md:hidden"
            >
              {/* Drawer Top Row */}
              <div className="space-y-8">
                <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                  <Logo variant="white" width={170} height={50} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                            isActive
                              ? "bg-primary-600 text-white shadow-soft"
                              : "text-slate-200 hover:bg-navy-800 hover:text-white"
                          )}
                        >
                          <span>{link.name}</span>
                          <span
                            className={cn(
                              "w-2 h-2 rounded-full",
                              isActive ? "bg-accent-500" : "bg-slate-700"
                            )}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer Contact & Actions */}
              <div className="pt-8 space-y-4 border-t border-navy-800">
                <Link
                  href="/track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#FF4800]/25 transition-all w-full"
                >
                  <span>Track Consignment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <a
                    href={`tel:${siteConfig.phones[0].primary}`}
                    className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-slate-200 py-2.5 px-4 rounded-xl text-xs font-semibold border border-navy-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent-500" />
                    <span>Call Hotline: {siteConfig.phones[0].display}</span>
                  </a>

                  <a
                    href={siteConfig.whatsapp[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 py-2.5 px-4 rounded-xl text-xs font-semibold border border-emerald-500/30 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Dispatch</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
