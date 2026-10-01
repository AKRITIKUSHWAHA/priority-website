"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after initial render hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-navy-950 flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning Outer Ring */}
            <div className="w-24 h-24 rounded-full border-2 border-navy-800 border-t-accent-500 border-r-primary-500 animate-spin" />

            {/* P Icon Mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Image
                  src="/logo-icon.png"
                  alt="Priority Hauliers"
                  width={48}
                  height={28}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400 font-heading">
            Priority Hauliers
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
