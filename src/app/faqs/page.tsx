import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Container, Card, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { ServiceFaqAccordion } from "../services/[slug]/ServiceFaqAccordion";
import { HelpCircle, Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Priority Hauliers (Pvt) Ltd",
  description:
    "Common questions on cross-border road freight, Beitbridge customs clearance, live SinoTrack GPS tracking, and Harare warehousing with Priority Hauliers.",
};

export default function FaqsPage() {
  const allFaqs = [
    {
      question: "Which countries across SADC does Priority Hauliers operate in?",
      answer:
        "Priority Hauliers operates dedicated cross-border road freight corridors connecting Zimbabwe (Harare, Bulawayo, Mutare, Beitbridge), South Africa (Durban port, Johannesburg / Gauteng), Mozambique (Beira, Maputo), Zambia (Lusaka, Copperbelt), Botswana (Gaborone, Francistown), and the Democratic Republic of Congo (Lubumbashi).",
    },
    {
      question: "How does real-time satellite consignment tracking work?",
      answer:
        "Every truck in our fleet is fitted with dual-network SinoTrack GPS telematics with continuous satellite failover. Shippers receive automated checkpoint milestone alerts and can access real-time position updates via our live Track & Trace portal (/track) or WhatsApp dispatch integration.",
    },
    {
      question: "How are Beitbridge and Chirundu customs clearances handled?",
      answer:
        "Our in-house customs liaison team manages pre-clearance documentation (Bills of Entry, CD3/CD1 declarations, SADC certificates of origin, and road transit permits) to ensure commercial rigs transition through border gates with zero demurrage delays.",
    },
    {
      question: "What fleet configurations are available for cargo booking?",
      answer:
        "We operate a diverse fleet including 34-tonne Superlink Flatdecks (15m & 18m), 30-tonne Tautliners (weather-proof curtain-siders), 45,000L Hazchem certified bulk liquid tankers, and 60-tonne multi-axle lowbed transporters for abnormal heavy plant machinery.",
    },
    {
      question: "Can you accommodate temporary or bonded warehousing in Harare?",
      answer:
        "Yes. Our headquarters at 17 Mansfield Road, Marlborough features secure covered and open container staging yards with 24/7 CCTV, armed security, certified forklift handling, and inventory management.",
    },
    {
      question: "How fast can I receive a freight quotation for line-haul transport?",
      answer:
        "Our Harare control room processes quotation requests within 1 hour during business hours. For emergency or spot freight bookings, you can contact our 24/7 WhatsApp dispatch desk directly at +264 81 851 8120 for instant dispatch rates.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      <PageHero
        eyebrow="Help & Knowledge Base"
        title="Frequently Asked Questions"
        subtitle="Clear answers regarding our cross-border logistics capabilities, satellite telematics tracking, customs compliance, and depot operations."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <Container className="py-16 md:py-24 max-w-4xl space-y-16">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="General & Operational Answers"
            title="Everything You Need to Know"
            subtitle="Find instant answers to common freight forwarding and line-haul inquiries."
          />

          <div className="pt-6">
            <ServiceFaqAccordion faqs={allFaqs} />
          </div>
        </div>

        {/* Still Have Questions Card */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 border border-navy-700 shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold mx-auto shadow-lg shadow-accent-500/25">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Still Have Questions About Your Cargo?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed font-sans">
            Our 24/7 Harare dispatch desk is ready to assist with route feasibility, abnormal permits, and tariff calculations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#FF4800]/25 transition-all hover:scale-105"
            >
              <span>Contact Dispatch Control</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.whatsapp[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-emerald-400/30 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
