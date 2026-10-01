"use client";

import React, { useState } from "react";
import {
  Globe,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface Corridor {
  id: string;
  name: string;
  route: string;
  distance: string;
  transitTime: string;
  borderPost: string;
  fleetType: string;
  description: string;
  primaryCargo: string[];
  keyStops: string[];
}

const corridors: Corridor[] = [
  {
    id: "beira",
    name: "The Beira Corridor",
    route: "Beira Port (Mozambique) ➔ Forbes/Machipanda ➔ Mutare ➔ Harare",
    distance: "~550 km",
    transitTime: "24 – 48 Hours",
    borderPost: "Forbes / Machipanda Border Post",
    fleetType: "Superlink Flatdecks & Tautliners (Tri-Axle)",
    description:
      "The fastest maritime access gateway for northern and eastern Zimbabwe. Ideal for bulk fertilizer, containerized commercial imports, and project machinery straight from vessel discharge at Beira Container Terminal.",
    primaryCargo: ["Container FCL/LCL", "Agro Chemicals & Fertilizer", "Steel & Industrial Machinery", "Consumer Fast Goods"],
    keyStops: ["Beira Port", "Chimoio", "Forbes Border Post", "Mutare", "Marlborough Depot (Harare)"],
  },
  {
    id: "north-south",
    name: "The North-South Corridor",
    route: "Durban / City Deep (SA) ➔ Beitbridge Border ➔ Bulawayo & Harare",
    distance: "~1,650 km",
    transitTime: "4 – 6 Days",
    borderPost: "Beitbridge Border Commercial Terminal",
    fleetType: "Tri-Axle Flatdecks, Superlink Tautliners & Lowbeds",
    description:
      "Southern Africa's arterial commercial trade corridor. Priority Hauliers operates dedicated long-haul line-hauls with bonded customs pre-clearance, cutting Beitbridge turnaround times significantly.",
    primaryCargo: ["Heavy Mining Spares", "Structural Steel & Raw Materials", "FMCG Consignments", "Hazardous Chemicals (Hazchem)"],
    keyStops: ["Durban Port / Johannesburg", "Polokwane", "Beitbridge", "Masvingo / Bulawayo", "Harare"],
  },
  {
    id: "copperbelt",
    name: "The Copperbelt & DRC Corridor",
    route: "Harare (ZW) ➔ Chirundu ➔ Lusaka ➔ Ndola ➔ Lubumbashi (DRC)",
    distance: "~1,250 km",
    transitTime: "3 – 5 Days",
    borderPost: "Chirundu One-Stop Border Post / Kasumbalesa",
    fleetType: "Heavy-Duty Flatdecks & Abnormal Lowbeds",
    description:
      "Vital industrial link connecting Zimbabwean manufacturers and international suppliers with the resource-rich Zambian and Congolese mining belts.",
    primaryCargo: ["Mining Consumables & Reagents", "Earthmoving Equipment", "Structural Timber & Cement", "Lubricants & Fuel Spares"],
    keyStops: ["Harare", "Chinhoyi", "Chirundu OSBP", "Lusaka", "Ndola", "Kasumbalesa (DRC)"],
  },
  {
    id: "trans-kalahari",
    name: "Trans-Kalahari & Botswana Corridor",
    route: "Walvis Bay (Namibia) / Gaborone ➔ Plumtree Border ➔ Bulawayo",
    distance: "~1,400 km",
    transitTime: "3 – 4 Days",
    borderPost: "Plumtree / Ramokgwebana Border",
    fleetType: "Superlink Flatdecks & Enclosed Trailers",
    description:
      "Strategic western Atlantic trade route connecting Walvis Bay maritime cargo and Botswana industrial zones directly with Zimbabwean regional markets.",
    primaryCargo: ["Vehicle Shipments", "Agricultural Produce", "Heavy Machinery", "Cross-Border Transit Goods"],
    keyStops: ["Walvis Bay / Gaborone", "Francistown", "Plumtree Border", "Bulawayo Depot"],
  },
];

interface CorridorNetworkSectionProps {
  onOpenQuote: (corridorName?: string) => void;
}

export function CorridorNetworkSection({ onOpenQuote }: CorridorNetworkSectionProps) {
  const [selectedCorridor, setSelectedCorridor] = useState<Corridor>(corridors[0]);

  return (
    <section id="network" className="bg-[#1F1F2E] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF4800]/10 border border-[#FF4800]/20 text-[#FF4800] text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Regional SADC Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Southern African Transit Corridors & Road Networks
          </h2>
          <p className="text-base text-zinc-300">
            Priority Hauliers operates scheduled and dedicated line-hauls across 8 SADC nations, ensuring smooth customs transition, armed security options, and zero port demurrage.
          </p>
        </div>

        {/* Interactive Corridor Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Corridor Selectors Left (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Select Primary Trade Corridor:
            </p>
            {corridors.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCorridor(c)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                  selectedCorridor.id === c.id
                    ? "bg-[#252536] border-[#FF4800] shadow-xl shadow-[#FF4800]/10"
                    : "bg-[#181824] border-white/5 hover:border-white/20 text-zinc-300"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Navigation className={`w-4 h-4 ${selectedCorridor.id === c.id ? "text-[#FF4800]" : "text-zinc-500"}`} />
                    <span className="font-bold text-sm sm:text-base text-white">{c.name}</span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1">{c.route}</p>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-mono font-bold text-[#FF4800] block">{c.distance}</span>
                  <span className="text-[11px] text-zinc-400">{c.transitTime}</span>
                </div>
              </button>
            ))}

            {/* Countries Badge Strip */}
            <div className="bg-[#181824] p-4 rounded-2xl border border-white/5 space-y-2 mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                SADC Countries Directly Serviced:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {companyInfo.regionsCovered.map((reg, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md border border-white/5"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corridor Details Card Right (7 cols) */}
          <div className="lg:col-span-7 bg-[#252536] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-5 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[#FF4800] tracking-wider">
                  Corridor Profile & Routing
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">{selectedCorridor.name}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#181824] px-3 py-1.5 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase block">Distance</span>
                  <span className="font-mono font-bold text-white text-xs sm:text-sm">{selectedCorridor.distance}</span>
                </div>
                <div className="bg-[#181824] px-3 py-1.5 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase block">Road Transit</span>
                  <span className="font-mono font-bold text-emerald-400 text-xs sm:text-sm">{selectedCorridor.transitTime}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {selectedCorridor.description}
            </p>

            {/* Corridor Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-[#181824] p-3.5 rounded-xl border border-white/5">
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider mb-1">Key Border Checkpoint</span>
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{selectedCorridor.borderPost}</span>
                </span>
              </div>
              <div className="bg-[#181824] p-3.5 rounded-xl border border-white/5">
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider mb-1">Recommended Fleet</span>
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <Truck className="w-4 h-4 text-[#FF4800]" />
                  <span>{selectedCorridor.fleetType}</span>
                </span>
              </div>
            </div>

            {/* Key Transit Waypoints */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-zinc-300 tracking-wider block">
                Primary Waypoints & Transit Staging:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {selectedCorridor.keyStops.map((stop, i) => (
                  <React.Fragment key={i}>
                    <span className="bg-[#181824] text-zinc-200 text-xs px-3 py-1.5 rounded-lg border border-white/10 font-medium">
                      {stop}
                    </span>
                    {i < selectedCorridor.keyStops.length - 1 && (
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF4800]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Common Cargo Commodities */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs uppercase font-bold text-zinc-300 tracking-wider block">
                Typical Handled Freight:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCorridor.primaryCargo.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Custom transit schedules & dedicated return-load rates available.
              </span>
              <button
                onClick={() => onOpenQuote(selectedCorridor.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                <span>Book This Corridor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
