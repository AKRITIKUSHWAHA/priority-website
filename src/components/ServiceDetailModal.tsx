"use client";

import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import {
  X,
  CheckCircle2,
  Truck,
  Warehouse,
  Ship,
  Plane,
  Shield,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Cpu,
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceName?: string) => void;
}

export function ServiceDetailModal({ service, onClose, onOpenQuote }: ServiceDetailModalProps) {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Warehouse":
        return <Warehouse className="w-6 h-6 text-[#FF4800]" />;
      case "Ship":
        return <Ship className="w-6 h-6 text-[#FF4800]" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-[#FF4800]" />;
      default:
        return <Truck className="w-6 h-6 text-[#FF4800]" />;
    }
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Priority Hauliers, I am inquiring specifically about: *${service.title}*.\nPlease provide rate card, transit timelines and vehicle availability.`
    );
    return `https://wa.me/264818518120?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#1F1F2E] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white shadow-2xl">
        
        {/* Header Banner Image */}
        <div className="relative h-48 sm:h-64 w-full">
          <img
            src={service.bannerImage || service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-[#1F1F2E]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#181824]/80 hover:bg-[#FF4800] text-white p-2 rounded-full border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center space-x-3">
            <div className="p-3 bg-[#181824] rounded-xl border border-white/15 shadow-lg">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF4800] font-bold">
                Priority Hauliers Service Portfolio
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Service Overview</h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Specifications Matrix */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-[#FF4800]" />
              <span>Technical & Operational Specifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.specs.map((spec, i) => (
                <div key={i} className="bg-[#181824] p-3.5 rounded-xl border border-white/10 flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-zinc-400 font-medium">{spec.label}</span>
                  <span className="text-white font-bold text-right ml-2">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Key Capabilities & Guarantees</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Benefits */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Enterprise Client Advantages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="bg-[#252536] p-4 rounded-xl border border-white/10">
                  <h4 className="font-bold text-sm text-[#FF4800] mb-1">{b.title}</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-[#181824] p-4 rounded-xl border border-white/10">
                    <p className="font-semibold text-sm text-white mb-1.5">{faq.question}</p>
                    <p className="text-xs text-zinc-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer inside modal */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              Need tailored dispatch for this service? Our Harare operations desk is on standby.
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.title);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-[#FF4800]/30 transition-all"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
