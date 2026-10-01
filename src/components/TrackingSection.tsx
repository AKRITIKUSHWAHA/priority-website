"use client";

import React, { useState, useEffect } from "react";
import {
  mockTrackingRecords,
  getShipmentByTrackingId,
  ShipmentRecord,
} from "@/data/tracking";
import {
  Search,
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Radio,
  User,
  ShieldCheck,
  RotateCw,
  Share2,
  FileCheck,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

interface TrackingSectionProps {
  initialTrackingId?: string;
}

export function TrackingSection({ initialTrackingId }: TrackingSectionProps) {
  const [searchQuery, setSearchQuery] = useState(initialTrackingId || "PH-8942-ZW");
  const [activeShipment, setActiveShipment] = useState<ShipmentRecord>(
    getShipmentByTrackingId(initialTrackingId || "PH-8942-ZW")
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTrackingId) {
      setSearchQuery(initialTrackingId);
      setActiveShipment(getShipmentByTrackingId(initialTrackingId));
    }
  }, [initialTrackingId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveShipment(getShipmentByTrackingId(searchQuery));
    }
  };

  const handleSelectSample = (id: string) => {
    setSearchQuery(id);
    setActiveShipment(getShipmentByTrackingId(id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "In Transit":
        return "bg-[#FF4800]/20 text-[#FF4800] border-[#FF4800]/30";
      case "Customs Clearance":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Out for Delivery":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-zinc-500/20 text-zinc-300 border-zinc-500/30";
    }
  };

  const generateWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Priority Hauliers Dispatch, I am requesting a real-time status update for Consignment: *${activeShipment.trackingId}* (Route: ${activeShipment.origin} -> ${activeShipment.destination}).`
    );
    return `https://wa.me/264818518120?text=${text}`;
  };

  return (
    <section id="tracking" className="bg-[#181824] py-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>24/7 Satellite Telematics Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Freight & Consignment Tracking
          </h2>
          <p className="text-base text-zinc-300">
            Monitor your cargo position, border clearance stamps, driver telematics, and estimated arrival in real-time across the entire SADC road transit corridor.
          </p>
        </div>

        {/* Tracking Query Box */}
        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Consignment ID (e.g. PH-8942-ZW)"
                className="w-full pl-12 pr-4 py-4 bg-[#252536] border border-white/20 rounded-2xl text-white font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF4800] text-sm sm:text-base shadow-xl"
              />
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-[#FF4800]/25 hover:shadow-[#FF4800]/40 flex items-center justify-center space-x-2 transition-all shrink-0"
            >
              <span>Track Consignment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Quick Click Sample IDs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-zinc-400 font-medium">Quick Live Demo:</span>
            {["PH-8942-ZW", "PH-7721-SA", "PH-5120-MZ"].map((id) => (
              <button
                key={id}
                onClick={() => handleSelectSample(id)}
                className={`px-3 py-1 rounded-full border transition-all font-mono font-semibold ${
                  activeShipment.trackingId === id
                    ? "bg-[#FF4800] text-white border-[#FF4800]"
                    : "bg-white/5 text-zinc-300 border-white/10 hover:border-white/30"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Live Shipment Details Card */}
        {activeShipment && (
          <div className="bg-[#252536] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300 max-w-5xl mx-auto">
            
            {/* Top Bar: ID & Status */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Consignment Waybill / Way ID
                </span>
                <div className="flex items-center space-x-3 mt-0.5">
                  <h3 className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                    {activeShipment.trackingId}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${getStatusColor(
                      activeShipment.status
                    )}`}
                  >
                    {activeShipment.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <a
                  href={generateWhatsAppInquiry()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dispatch WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="inline-flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 px-3 py-2 rounded-xl text-xs font-medium transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? "Link Copied!" : "Share Link"}</span>
                </button>
              </div>
            </div>

            {/* Route & Progress Bar */}
            <div className="py-6 border-b border-white/10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#181824] p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span className="uppercase tracking-wider font-semibold">Origin Point</span>
                  </div>
                  <p className="font-bold text-white text-sm sm:text-base">{activeShipment.origin}</p>
                </div>

                <div className="bg-[#181824] p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF4800]" />
                    <span className="uppercase tracking-wider font-semibold">Destination Facility</span>
                  </div>
                  <p className="font-bold text-white text-sm sm:text-base">{activeShipment.destination}</p>
                </div>
              </div>

              {/* Progress Meter */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-zinc-400">Corridor Transit Progress</span>
                  <span className="text-[#FF4800]">{activeShipment.progressPercent}%</span>
                </div>
                <div className="w-full h-3 bg-[#181824] rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF4800] to-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${activeShipment.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Freight Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10 text-xs sm:text-sm">
              <div>
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Carrier Configuration</span>
                <span className="font-bold text-white mt-1 block">{activeShipment.carrierType}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Payload Description</span>
                <span className="font-bold text-white mt-1 block truncate">{activeShipment.cargoDescription}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Gross Freight Weight</span>
                <span className="font-bold text-[#FF4800] mt-1 block">{activeShipment.weight}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Lead Haulier / Rig</span>
                <span className="font-bold text-white mt-1 block">
                  {activeShipment.driver} ({activeShipment.vehicleReg})
                </span>
              </div>
            </div>

            {/* Milestone Timeline */}
            <div className="pt-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#FF4800]" />
                <span>Checkpoint & Border Milestone History</span>
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
                {activeShipment.milestones.map((milestone, idx) => (
                  <div key={idx} className="relative group">
                    {/* Status node */}
                    <div
                      className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                        milestone.completed
                          ? "bg-emerald-500 border-emerald-400 text-white"
                          : milestone.active
                          ? "bg-[#FF4800] border-amber-300 text-white animate-pulse"
                          : "bg-[#181824] border-zinc-600 text-zinc-500"
                      }`}
                    >
                      {milestone.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>

                    <div className="bg-[#181824] p-4 rounded-xl border border-white/5 hover:border-white/15 transition-all">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-1">
                        <span className="font-bold text-sm text-white">{milestone.status}</span>
                        <span className="text-xs text-zinc-400 font-mono">
                          {milestone.date} • {milestone.time}
                        </span>
                      </div>
                      <p className="text-xs text-[#FF4800] font-semibold mb-1">{milestone.location}</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
