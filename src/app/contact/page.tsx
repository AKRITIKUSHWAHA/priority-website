import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  Container,
  Reveal,
  Button,
  Badge,
  Card,
  SectionHeading,
} from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { ServiceFaqAccordion } from "../services/[slug]/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us | Priority Hauliers (Pvt) Ltd",
  description:
    "Get in touch with Priority Hauliers at 17 Mansfield Road, Marlborough, Harare, Zimbabwe. Call +263 77 568 2351 or WhatsApp +264 81 851 8120 for instant freight dispatch quotes.",
  openGraph: {
    title: "Contact Us | Priority Hauliers (Pvt) Ltd",
    description:
      "Harare Headquarters: 17 Mansfield Road, Marlborough, Harare. Contact our dispatch control room 24/7.",
  },
};

export default function ContactPage() {
  const contactFaqs = [
    {
      question: "How quickly can I get a freight quote for SADC line-haul?",
      answer:
        "Our Harare control room processes quote requests within 1 hour during business hours. For emergency dispatches, contact our 24/7 WhatsApp desk directly for immediate rates.",
    },
    {
      question: "Can I visit your Harare logistics depot at 17 Mansfield Road?",
      answer:
        "Yes! Our Marlborough depot is open for cargo inspections, staging assessments, and client meetings during operating hours.",
    },
    {
      question: "What details do I need to provide for an accurate freight estimate?",
      answer:
        "Please specify total payload tonnage, cargo category (e.g., FMCG, dry bulk, machinery), origin seaport or facility, and destination warehouse.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrow="Get In Touch"
        title="Harare Headquarters & Regional Dispatch"
        subtitle="We are ready to handle your freight inquiries, line-haul bookings, warehousing demands, and SADC customs clearances."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <Container className="py-16 md:py-24 space-y-16">
        {/* 3 Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal direction="up" delay={0.1}>
            <Card variant="default" glow="primary" className="p-8 space-y-4 bg-white h-full group">
              <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-md shadow-primary-600/20 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-accent-600 uppercase tracking-wider">
                  Harare Office & Depot
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-900">
                  Headquarters Address
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  {siteConfig.address.full}
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <Card variant="default" glow="accent" className="p-8 space-y-4 bg-white h-full group">
              <div className="w-12 h-12 rounded-2xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-accent-500/30 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-accent-600 uppercase tracking-wider">
                  Hotline & WhatsApp
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-900">
                  Phone & Mobile Dispatch
                </h3>
                <div className="text-sm text-slate-600 space-y-1 pt-1 font-sans">
                  <p>
                    <strong className="text-navy-900">Phone:</strong>{" "}
                    <a href={`tel:${siteConfig.phones[0].primary}`} className="hover:text-primary-600">
                      {siteConfig.phones[0].display}
                    </a>
                  </p>
                  <p>
                    <strong className="text-emerald-600">WhatsApp:</strong>{" "}
                    <a href={siteConfig.whatsapp[0].link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 font-semibold text-emerald-600">
                      {siteConfig.whatsapp[0].display}
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <Card variant="default" glow="primary" className="p-8 space-y-4 bg-white h-full group">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-accent-400 flex items-center justify-center font-bold shadow-md shadow-navy-900/30 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-accent-600 uppercase tracking-wider">
                  Electronic Correspondence
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-900">
                  Official Email Desks
                </h3>
                <div className="text-sm text-slate-600 space-y-1 pt-1 font-sans">
                  <p>
                    <strong className="text-navy-900">General:</strong>{" "}
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-600">
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-navy-900">Dispatch:</strong>{" "}
                    <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-primary-600">
                      {siteConfig.supportEmail}
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Contact Form & Google Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Modern Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <ContactForm />
            </Reveal>
          </div>

          {/* Right Column: Google Maps Embed & Business Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Google Maps Embed Card */}
            <Reveal direction="left">
              <Card variant="default" className="p-2 overflow-hidden bg-white border-slate-200/80 shadow-soft">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-200">
                  <iframe
                    title="Priority Hauliers Harare Depot Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.882312675908!2d30.985472!3d-17.755416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a547796d10c1%3A0x8e50b86a02931215!2sMansfield%20Rd%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-navy-900">
                    <MapPin className="w-4 h-4 text-accent-500" />
                    <span>17 Mansfield Rd, Marlborough, Harare</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=17+Mansfield+Road+Marlborough+Harare+Zimbabwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-accent-600 font-bold"
                  >
                    Open in Maps ↗
                  </a>
                </div>
              </Card>
            </Reveal>

            {/* Business Hours & Dispatch Availability Card */}
            <Reveal direction="left" delay={0.15}>
              <Card variant="navy" glow="accent" className="p-8 space-y-6 text-white">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent-500" />
                  <h4 className="text-xl font-bold font-heading text-white">
                    Operating Hours & Dispatch
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 divide-y divide-navy-800">
                  <div className="pt-2 flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <strong className="text-white">{siteConfig.operatingHours.weekdays}</strong>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span>Saturday</span>
                    <strong className="text-white">{siteConfig.operatingHours.saturday}</strong>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span>Sunday</span>
                    <strong className="text-accent-400">{siteConfig.operatingHours.sunday}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Control Room Operational 24/7/365</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Satellite telematics monitoring and driver emergency support operate around the clock.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Short Contact FAQ Accordion */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold font-heading text-navy-900">
              Contact & Dispatch FAQs
            </h3>
          </div>
          <ServiceFaqAccordion faqs={contactFaqs} />
        </div>
      </Container>
    </main>
  );
}
