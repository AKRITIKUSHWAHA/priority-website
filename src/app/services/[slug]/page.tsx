import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  FileText,
  ShieldCheck,
  Clock,
  MapPin,
  ChevronRight,
  HelpCircle,
  Truck,
  Plane,
  Ship,
  Warehouse,
} from "lucide-react";
import { ServiceFaqAccordion } from "./ServiceFaqAccordion";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Priority Hauliers`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Priority Hauliers`,
      description: service.shortDesc,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ElementType> = {
    Truck: Truck,
    Warehouse: Warehouse,
    Ship: Ship,
    Plane: Plane,
  };

  const IconComp = iconMap[service.iconName] || Truck;

  const processSteps = [
    {
      step: "01",
      title: "Freight Booking & Quote",
      desc: "Submit cargo volume, weight, and corridor route specifications for instant dispatch quotation.",
    },
    {
      step: "02",
      title: "Pre-Clearance & Inspection",
      desc: "Customs declaration documentation, vehicle pre-trip safety checks, and load securing verification.",
    },
    {
      step: "03",
      title: "Corridor Transit & Telematics",
      desc: "Active satellite GPS tracking, geo-fenced checkpoint alerts, and continuous control room monitoring.",
    },
    {
      step: "04",
      title: "Destuffing & Door Delivery",
      desc: "Final destination arrival, proof of delivery sign-off, and container de-vanning at destination.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrow="Service Specifications"
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column (Left - 8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Service Banner Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-soft-lg bg-navy-900">
              <Image
                src={service.bannerImage || service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge variant="accent" slanted className="mb-2">
                  Verified SADC Capability
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Full Detailed Description */}
            <div className="space-y-4 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-soft">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Service Overview & Operational Scope
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                {service.fullDesc}
              </p>
            </div>

            {/* Features & Capability Checklist */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <Card key={idx} variant="default" className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">
                      {feat}
                    </span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Specifications Card */}
            <div className="bg-navy-900 text-white p-8 rounded-3xl border border-navy-700 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent-500" />
                <h3 className="text-xl font-bold font-heading text-white">
                  Technical Specifications & Capacity
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-navy-700">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="pt-4 sm:pt-0 sm:pl-6 first:pl-0 space-y-1">
                    <span className="text-xs font-bold text-accent-400 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-100">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Mini-Steps (4 Timeline Steps) */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Operational Process Timeline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {processSteps.map((pStep) => (
                  <Card key={pStep.step} variant="default" className="p-6 space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold font-heading text-accent-500">
                        {pStep.step}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-accent-500" />
                    </div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      {pStep.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {pStep.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold font-heading text-navy-900">
                    Frequently Asked Questions
                  </h3>
                </div>
                <ServiceFaqAccordion faqs={service.faqs} />
              </div>
            )}
          </div>

          {/* Sticky Sidebar Column (Right - 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* All Services Navigation List */}
              <Card variant="default" className="p-6 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-heading border-b border-slate-100 pb-3">
                  All Services
                </h4>
                <div className="space-y-2">
                  {servicesData.map((sItem) => {
                    const isActive = sItem.slug === service.slug;
                    return (
                      <Link
                        key={sItem.id}
                        href={`/services/${sItem.slug}`}
                        className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-primary-600 text-white shadow-soft"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-primary-600"
                        }`}
                      >
                        <span>{sItem.title}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-accent-400" : "text-slate-400"}`} />
                      </Link>
                    );
                  })}
                </div>
              </Card>

              {/* Harare Contact Card */}
              <Card variant="navy" glow="accent" className="p-6 space-y-6 text-white">
                <div className="space-y-2">
                  <Badge variant="accent" slanted>
                    Harare Dispatch Office
                  </Badge>
                  <h4 className="text-lg font-bold font-heading">
                    Need Immediate Freight Assistance?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Speak directly with our SADC corridor dispatch specialists for real-time rates and truck availability.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                    <span>{siteConfig.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                    <span>{siteConfig.phones[0].display}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{siteConfig.operatingHours.operations}</span>
                  </div>
                </div>

                {/* Call Now and WhatsApp Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${siteConfig.phones[0].primary}`}
                    className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-md shadow-accent-500/20"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Dispatch Hotline</span>
                  </a>

                  <a
                    href={siteConfig.whatsapp[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors border border-emerald-400/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Instant Chat</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
