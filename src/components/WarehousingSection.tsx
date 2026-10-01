"use client";

import React from "react";
import Image from "next/image";
import {
  Warehouse,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Boxes,
  Truck,
  Eye,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface WarehousingSectionProps {
  onOpenQuote: (service?: string) => void;
}

export function WarehousingSection({ onOpenQuote }: WarehousingSectionProps) {
  const warehouseHighlights = [
    {
      icon: Boxes,
      title: "Certified Forklift & Heavy Rigging",
      desc: "Fleet of 3T to 16T forklifts operated strictly by certified material handlers with zero-damage protocols.",
    },
    {
      icon: Lock,
      title: "24/7 High-Security & Biometrics",
      desc: "Continuous 4K CCTV recording, electric perimeter fencing, biometric access logs, and armed response patrols.",
    },
    {
      icon: Truck,
      title: "Cross-Docking & Transshipment",
      desc: "Fast cargo turnaround from ocean container de-vanning onto regional line-haul superlinks without dwell penalties.",
    },
    {
      icon: Eye,
      title: "Digital WMS & Barcode Tracking",
      desc: "Real-time inventory visibility, batch lot tracking, and automated stock dispatch reporting.",
    },
  ];

  return (
    <section id="warehousing" className="bg-[#181824] py-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF4800]/10 border border-[#FF4800]/20 text-[#FF4800] text-xs font-bold uppercase tracking-wider">
              <Warehouse className="w-3.5 h-3.5" />
              <span>Harare Strategic Logistics Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              State-of-the-Art Marlborough Warehousing & Depots
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Centrally situated at <strong className="text-white">17 Mansfield Road, Marlborough, Harare</strong>, 
              our secure storage and consolidation depot acts as the central staging hub for national Zimbabwean 
              distribution and cross-border SADC transit.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#252536] p-5 rounded-2xl border border-white/10 flex items-center space-x-4">
            <div className="p-3.5 bg-[#FF4800]/15 rounded-xl text-[#FF4800] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-bold text-white block">Depot Location:</span>
              <p className="text-zinc-300">{companyInfo.address}</p>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-medium pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Operating Hours: {companyInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {warehouseHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#252536] rounded-2xl p-6 border border-white/10 hover:border-[#FF4800]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#181824] flex items-center justify-center text-[#FF4800] mb-4 group-hover:bg-[#FF4800] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#252536]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 relative h-64 lg:h-96 w-full">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Priority Hauliers Harare Warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#252536]/40 to-[#252536] hidden lg:block" />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-[#FF4800] tracking-wider">
                  Harare Facility Specs
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Over 8,500 m² of High-Capacity Storage & Staging Yard
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#181824] p-3 rounded-xl border border-white/5">
                  <span className="text-zinc-400 block">Facility Area</span>
                  <span className="font-bold text-white text-sm">8,500+ m² Secured</span>
                </div>
                <div className="bg-[#181824] p-3 rounded-xl border border-white/5">
                  <span className="text-zinc-400 block">Material Handling</span>
                  <span className="font-bold text-[#FF4800] text-sm">3T - 16T Forklifts</span>
                </div>
                <div className="bg-[#181824] p-3 rounded-xl border border-white/5">
                  <span className="text-zinc-400 block">Security Perimeter</span>
                  <span className="font-bold text-emerald-400 text-sm">24/7 Armed Response</span>
                </div>
                <div className="bg-[#181824] p-3 rounded-xl border border-white/5">
                  <span className="text-zinc-400 block">Customs Staging</span>
                  <span className="font-bold text-white text-sm">Bonded Transit Yard</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenQuote("Cargo Storage & Warehousing")}
                  className="inline-flex items-center space-x-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <span>Book Warehouse Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <span>Harare Depot Desk</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
