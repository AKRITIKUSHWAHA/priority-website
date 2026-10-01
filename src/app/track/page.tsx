"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  PageHero,
  Container,
  Reveal,
  Button,
  Badge,
  Card,
  SectionHeading,
} from "@/components/ui";
import { fetchShipmentStatus, ShipmentData } from "@/lib/tracking";
import { siteConfig } from "@/data/siteConfig";
import {
  Search,
  Radio,
  Truck,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  User,
  Package,
  FileText,
  Loader2,
  ChevronRight,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function TrackingPage() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || "PH-8942-ZW";

  const [inputQuery, setInputQuery] = useState(initialId);
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSearch = async (queryId: string) => {
    if (!queryId.trim()) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const data = await fetchShipmentStatus(queryId);
      if (data) {
        setShipment(data);
      } else {
        setShipment(null);
        setErrorMsg(
          `Consignment ID "${queryId}" was not found in our active telematics registry. Please verify the format (e.g. PH-8942-ZW) or call dispatch.`
        );
      }
    } catch (err) {
      setErrorMsg("Failed to connect to tracking server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialId) {
      handleSearch(initialId);
    }
  }, [initialId]);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(inputQuery);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrow="24/7 Satellite Telematics"
        title="Live Cargo Track & Trace Portal"
        subtitle="Monitor consignment location, border customs clearance status, driver telematics, and estimated arrival times in real time."
        breadcrumbs={[{ label: "Live Tracking" }]}
      />

      <Container className="py-16 md:py-24 space-y-12">
        {/* Search Input Card */}
        <Reveal direction="up">
          <Card variant="default" className="p-8 sm:p-10 border-slate-200/80 shadow-soft-lg bg-white max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-accent-600 font-bold text-xs uppercase tracking-wider font-heading">
                <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
                <span>Active GPS Telematics Interface</span>
              </div>
              <Badge variant="subtle" size="sm">
                24/7 Control Room Sync
              </Badge>
            </div>

            <form onSubmit={onSubmitForm} className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Enter Consignment / Waybill ID
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="e.g. PH-8942-ZW"
                    required
                    className="w-full pl-11 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base font-mono font-bold focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all uppercase"
                  />
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  slanted
                  isLoading={loading}
                  className="text-slate-950 font-bold shrink-0"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Searching...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span>Track Shipment</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Quick Sample Waybills Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium mr-1">Sample Active IDs:</span>
              {["AGL1598", "3009296479", "PH-8942-ZW", "PH-7721-SA"].map((sampleId) => (
                <button
                  key={sampleId}
                  type="button"
                  onClick={() => {
                    setInputQuery(sampleId);
                    handleSearch(sampleId);
                  }}
                  className={`px-3 py-1 rounded-lg border font-mono font-bold transition-all ${
                    inputQuery.toUpperCase() === sampleId
                      ? "bg-accent-500 text-slate-950 border-accent-500 shadow-sm"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {sampleId}
                </button>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Error State Banner */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="max-w-4xl mx-auto p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-3"
            >
              <div className="flex items-center gap-2 font-bold font-heading text-rose-800">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Tracking Query Result</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-700 leading-relaxed font-sans">
                {errorMsg}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-rose-900">
                <a href={`tel:${siteConfig.phones[0].primary}`} className="underline">
                  Call Control Room: {siteConfig.phones[0].display}
                </a>
                <a href={siteConfig.whatsapp[0].link} target="_blank" rel="noopener noreferrer" className="underline text-emerald-700">
                  WhatsApp Support
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Shipment Results */}
        {shipment && !loading && (
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Shipment Header Card */}
              <Card variant="navy" glow="accent" className="p-8 text-white space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-700 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-accent-400">
                        {shipment.trackingId}
                      </span>
                      <Badge variant="accent" slanted>
                        {shipment.status}
                      </Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                      {shipment.cargoType}
                    </h2>
                  </div>

                  <div className="text-left sm:text-right space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Estimated Arrival (ETA)
                    </span>
                    <p className="text-xl font-extrabold font-heading text-emerald-400">
                      {shipment.eta}
                    </p>
                  </div>
                </div>

                {/* Metadata Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Origin</span>
                    <p className="font-semibold text-white truncate">{shipment.origin}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Destination</span>
                    <p className="font-semibold text-white truncate">{shipment.destination}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Vehicle Reg</span>
                    <p className="font-mono font-semibold text-accent-400">{shipment.vehicleReg}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Assigned Driver</span>
                    <p className="font-semibold text-white">{shipment.driverName}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                    <span><strong>Current Location:</strong> {shipment.currentLocation}</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-[10px] text-slate-500 font-medium">
                      {shipment.lastUpdated}
                    </span>
                    {shipment.googleMapsUrl && (
                      <a
                        href={shipment.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#FF4800] hover:bg-[#E03E00] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-[#FF4800]/25"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Live Google Maps ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>

              {/* Polished Milestone Timeline Card */}
              <Card variant="default" className="p-8 sm:p-10 border-slate-200/80 shadow-soft-lg bg-white space-y-8">
                <h3 className="text-xl font-bold font-heading text-navy-900 border-b border-slate-100 pb-4 flex items-center justify-between">
                  <span>Shipment Progress Timeline</span>
                  <span className="text-xs text-accent-600 font-mono">
                    Phase {shipment.currentStepIndex + 1} of 5
                  </span>
                </h3>

                {/* Vertical / Horizontal Timeline */}
                <div className="relative space-y-8 pl-6 sm:pl-8">
                  {/* Connecting Vertical Progress Line */}
                  <div className="absolute top-3 bottom-3 left-3 sm:left-4 w-1 bg-slate-100 rounded-full">
                    <div
                      className="w-full bg-accent-500 rounded-full transition-all duration-700"
                      style={{
                        height: `${((shipment.currentStepIndex + 1) / shipment.timeline.length) * 100}%`,
                      }}
                    />
                  </div>

                  {shipment.timeline.map((step, idx) => {
                    const isPassed = idx < shipment.currentStepIndex;
                    const isCurrent = idx === shipment.currentStepIndex;

                    return (
                      <div key={idx} className="relative flex items-start gap-4 group">
                        {/* Step Marker Icon Circle */}
                        <div
                          className={`absolute -left-6 sm:-left-8 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 transition-transform duration-300 ${
                            isPassed
                              ? "bg-primary-600 text-white shadow-sm"
                              : isCurrent
                              ? "bg-accent-500 text-slate-950 shadow-md shadow-accent-500/40 ring-4 ring-accent-100 scale-110"
                              : "bg-slate-100 text-slate-400 border border-slate-200"
                          }`}
                        >
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : isCurrent ? (
                            <Radio className="w-4 h-4 animate-pulse" />
                          ) : (
                            <span>{idx + 1}</span>
                          )}
                        </div>

                        {/* Step Details Box */}
                        <div className="space-y-1 pl-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4
                              className={`text-base font-bold font-heading ${
                                isCurrent
                                  ? "text-primary-600"
                                  : isPassed
                                  ? "text-navy-900"
                                  : "text-slate-400"
                              }`}
                            >
                              {step.label}
                            </h4>
                            {isCurrent && (
                              <Badge variant="accent" size="sm">
                                Current Status
                              </Badge>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                            {step.description}
                          </p>

                          {(step.timestamp || step.location) && (
                            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400 font-medium">
                              {step.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5 text-accent-500" />
                                  {step.location}
                                </span>
                              )}
                              {step.timestamp && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5 text-primary-500" />
                                  {step.timestamp}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Direct Help Callout */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-navy-900 font-heading">
                    Need Direct Updates on this Waybill?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Our Harare control desk can assist with custom clearance releases & gate pass status.
                  </p>
                </div>
                <a
                  href={siteConfig.whatsapp[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-colors shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Control Desk</span>
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </main>
  );
}
