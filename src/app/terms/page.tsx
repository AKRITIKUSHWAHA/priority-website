import React from "react";
import type { Metadata } from "next";
import { PageHero, Container, Card } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Carriage | Priority Hauliers (Pvt) Ltd",
  description:
    "Standard Trading Conditions and Terms of Carriage governing road freight line-haul, warehousing, and customs operations by Priority Hauliers (Private) Limited.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      <PageHero
        eyebrow="Legal & Commercial Standards"
        title="Terms of Service & Carriage"
        subtitle="Standard conditions of carriage and logistics operational terms governing all road transport, bonded staging, and freight forwarding operations."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <Container className="py-16 md:py-24 max-w-4xl space-y-12">
        <Card variant="default" className="p-8 sm:p-12 bg-white space-y-8 shadow-soft border-slate-200">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-accent-600 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4 text-accent-500" />
              Standard Trading Conditions (SADC Corridors)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              1. Scope of Carriage & Consignment
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              All transportation, line-haul services, warehousing, and customs clearance engagements performed by Priority Hauliers (Private) Limited are subject to these Standard Conditions of Carriage, unless otherwise expressly agreed in a signed Master Transportation Service Agreement (MTSA).
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              2. Shipper Cargo Declarations & Axle Load Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              The consignor/shipper warrants that all cargo weight, dimension, and classification declarations are accurate. In accordance with SADC Road Traffic and Cross-Border Transportation regulations, superlink flatdeck payloads shall not exceed designated axle weight and bridge formula limits.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              3. Demurrage & Border Staging Policy
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Free time for cargo loading at origin and offloading at destination is standardized at 3 hours per vehicle unless otherwise specified. Border customs transit at Beitbridge, Chirundu, or Forbes is managed proactively by our clearing desk to prevent unnecessary demurrage fees.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              4. Goods in Transit (GIT) Insurance
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Priority Hauliers maintains comprehensive Goods in Transit (GIT) coverage for all registered consignments. Shippers requiring enhanced all-risk specialized marine/cargo coverage may request specific declarations prior to dispatch.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
              5. Operational Contact
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 text-sm text-slate-700">
              <p><strong>Priority Hauliers (Private) Limited</strong></p>
              <p>17 Mansfield Road, Marlborough, Harare, Zimbabwe</p>
              <p>Dispatch Desk: <a href="tel:+263775682351" className="text-[#FF4800] hover:underline">+263 77 568 2351</a></p>
              <p>Email: <a href="mailto:hello@priorityhauliers.com" className="text-[#FF4800] hover:underline">hello@priorityhauliers.com</a></p>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}
