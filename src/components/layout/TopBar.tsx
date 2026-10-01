"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { IconLinkedin, IconFacebook, IconTwitter, IconInstagram } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out font-sans",
        isVisible ? "translate-y-0" : "-translate-y-full"
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
            className="hidden lg:flex items-center gap-1.5 hover:text-accent-400 transition-colors"
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
  );
}
