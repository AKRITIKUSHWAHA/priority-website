"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  const whatsappUrl = siteConfig.whatsapp[0].link;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden sm:block bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy-700 shadow-soft select-none pointer-events-none"
      >
        <span className="text-emerald-400 font-bold">24/7</span> Dispatch Control
      </motion.div>

      {/* Floating Button with Pulse Aura */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-soft-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contact Priority Hauliers on WhatsApp"
      >
        {/* Pulsing Outer Aura Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40 group-hover:opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 text-white relative z-10 fill-white/20" />
      </a>
    </div>
  );
}
