import React from "react";
import type { Metadata } from "next";
import { PageHero, Container, Card } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Priority Hauliers (Pvt) Ltd",
  description:
    "Privacy Policy and data protection standards of Priority Hauliers (Private) Limited. Learn how we handle corporate shipper data, tracking telemetry, and communication logs.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      <PageHero
        eyebrow="Corporate Compliance"
        title="Privacy Policy & Data Protection"
        subtitle="Our commitment to safeguarding corporate cargo records, client commercial manifests, and fleet telemetry data across SADC operations."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Container className="py-16 md:py-24 max-w-4xl space-y-12">
        <Card variant="default" className="p-8 sm:p-12 bg-white space-y-8 shadow-soft border-slate-200">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-accent-600 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4 text-accent-500" />
              Effective Date: January 1, 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Priority Hauliers (Private) Limited collects corporate customer information necessary to plan, quote, execute, and monitor regional cross-border freight consignments. This includes:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span>Commercial shipping documentation (Bills of Lading, Consignment Notes, Commercial Invoices, and Hazchem declaration certificates).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span>Contact personnel details (Names, corporate email addresses, phone numbers, and WhatsApp contact numbers).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span>Delivery and origin facility addresses, designated receiving dock contacts, and staging permits.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              2. How We Use Telematics & Tracking Data
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Our fleet is equipped with satellite GPS tracking (SinoTrack telematics). Telemetry data, including real-time vehicle coordinates, speed, border checkpoint timestamps, and geofenced transit progress, is processed solely to provide clients with delivery visibility, ensure cargo safety, and maintain anti-theft monitoring.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              3. Customs & Regulatory Disclosure
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              In compliance with regional SADC cross-border transit regulations, commercial manifest information is submitted to authorized revenue authorities including the Zimbabwe Revenue Authority (ZIMRA), South African Revenue Service (SARS), and Zambia Revenue Authority (ZRA) for legitimate border customs clearance.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              4. Contact Our Compliance Office
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              If you have any questions regarding our data privacy standards or wish to update your authorized corporate dispatch contacts, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 text-sm text-slate-700">
              <p><strong>Entity:</strong> Priority Hauliers (Private) Limited</p>
              <p><strong>Physical Address:</strong> {siteConfig.address.full}</p>
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#FF4800] hover:underline">{siteConfig.email}</a></p>
              <p><strong>Phone:</strong> {siteConfig.phones[0].display}</p>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}
