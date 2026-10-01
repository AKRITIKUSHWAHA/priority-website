import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  PageHero,
  Container,
  Reveal,
  Button,
  Badge,
  Card,
  SectionHeading,
  AnimatedCounter,
  IconLinkedin,
  IconFacebook,
  IconTwitter,
} from "@/components/ui";
import { images } from "@/data/images";
import { teamData } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Truck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Globe2,
  Radio,
  Boxes,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Priority Hauliers (Pvt) Ltd",
  description:
    "Learn about Priority Hauliers (Private) Limited — Zimbabwe's premier regional road haulage and cross-border logistics company operating across SADC corridors.",
  openGraph: {
    title: "About Us | Priority Hauliers (Pvt) Ltd",
    description:
      "Zimbabwe's premier regional road haulage and cross-border logistics company servicing SADC corridors with satellite-tracked fleet precision.",
    images: [{ url: "/images/about-1.jpg", width: 1280, height: 853, alt: "Priority Hauliers Headquarters" }],
  },
};

export default function AboutPage() {
  const fleetItems = [
    {
      title: "Superlink Flatdecks",
      image: images.fleet.flatbed.src,
      capacity: "Up to 34 Metric Tonnes",
      specs: ["15m & 18m Platform Length", "High-Tensile Steel Lashing Chains", "Intermodal Container Twist Locks"],
      chip: "Dry Bulk & Machinery",
    },
    {
      title: "Tautliners (Curtain-Sides)",
      image: images.fleet.tautliner.src,
      capacity: "Up to 32 Metric Tonnes",
      specs: ["Weather-Sealed PVC Side Curtains", "Palletized FMCG Loading", "Rear Barn Door Access"],
      chip: "FMCG & Palletized Cargo",
    },
    {
      title: "Bulk Fuel & Tankers",
      image: images.fleet.tanker.src,
      capacity: "45,000 Liters Liquid Bulk",
      specs: ["Hazchem & Dangerous Goods Certified", "Multi-Compartment Flow Meters", "Vapor Recovery System"],
      chip: "Petroleum & Liquid Bulk",
    },
    {
      title: "Heavy Haulage Lowbeds",
      image: images.fleet.heavyHaulage.src,
      capacity: "Up to 60+ Metric Tonnes",
      specs: ["Multi-Axle Step-Deck Configuration", "Hydraulic Loading Ramps", "Abnormal Load Escort Permits"],
      chip: "Abnormal Heavy Plant",
    },
  ];

  const coverageLocations = [
    { name: "Zimbabwe", hubs: "Harare HQ, Bulawayo, Beitbridge, Mutare, Chirundu" },
    { name: "South Africa", hubs: "Durban Deepwater Port, Johannesburg / Gauteng" },
    { name: "Mozambique", hubs: "Beira Shipping Port, Maputo Corridor" },
    { name: "Zambia", hubs: "Lusaka, Copperbelt (Ndola & Kitwe)" },
    { name: "Botswana", hubs: "Gaborone, Kazungula Transit Gateway" },
    { name: "Malawi", hubs: "Blantyre, Lilongwe" },
    { name: "DRC", hubs: "Lubumbashi Mining District" },
  ];

  const featuredTeam = teamData.slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Company Overview"
        title="Pioneering SADC Line-Haul Transport & Logistics"
        subtitle="Priority Hauliers (Private) Limited provides high-capacity road haulage, bonded warehousing, and cross-border transport solutions with zero-compromise safety."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="py-16 md:py-24 space-y-28">
        
        {/* 2. Company Story & Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Collage */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative Slanted Accent Frame */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-accent-500 rounded-3xl skew-brand pointer-events-none opacity-85" />

                {/* Primary Large Photo */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-soft-lg aspect-[4/3] bg-slate-200">
                  <Image
                    src={images.about.operations.src}
                    alt="Priority Hauliers Harare Operations"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
                </div>

                {/* Secondary Overlapping Thumbnail */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-200 hidden sm:block">
                  <Image
                    src={images.about.driverInspection.src}
                    alt="Vehicle Safety Pre-Trip Inspection"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Animated Highlight Badge */}
                <div className="absolute top-6 left-6 bg-navy-900 text-white p-4 rounded-2xl border border-navy-700 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold">
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-heading text-white">
                      Harare Dispatch HQ
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">17 Mansfield Rd, Marlborough</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Narrative Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Our Story"
                title="Building SADC's Most Reliable Transport Backbone"
                align="left"
                className="mb-4"
              />
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Priority Hauliers (Private) Limited was established with a singular operational mandate: to bridge Southern African commercial centers through high-capacity, dependable, and satellite-monitored road freight transportation.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.25}>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Headquartered in Harare at 17 Mansfield Road, Marlborough, we operate an engineered fleet of superlink flatdecks, tautliners, fuel tankers, and lowbed transporters. We manage continuous line-haul runs connecting South Africa, Zimbabwe, Mozambique, Zambia, Botswana, and the DRC.
              </p>
            </Reveal>

            {/* Highlights Grid */}
            <Reveal direction="left" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-600">Established</span>
                  <p className="text-lg font-bold font-heading text-navy-900">Harare, Zimbabwe</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-600">Core Focus</span>
                  <p className="text-lg font-bold font-heading text-navy-900">Cross-Border Haulage</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-600">Regional Reach</span>
                  <p className="text-lg font-bold font-heading text-navy-900">7 SADC Nations</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Mission / Vision / Values Cards */}
        <div className="space-y-8">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Corporate Direction"
              title="Mission, Vision & Core Values"
              subtitle="Guiding our drivers, dispatch controllers, and management team every single day."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal direction="up" delay={0.1}>
              <Card variant="default" glow="accent" className="p-8 space-y-4 h-full bg-white group">
                <div className="w-12 h-12 rounded-2xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-accent-500/20 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-accent-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  To provide safe, fast, and continuous cross-border road transport solutions across Zimbabwe and the SADC region, delivering peace of mind through disciplined logistics and real-time tracking.
                </p>
              </Card>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <Card variant="default" glow="primary" className="p-8 space-y-4 h-full bg-white group">
                <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-md shadow-primary-600/20 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-primary-600 transition-colors">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  To be recognized as Southern Africa's premier line-haul logistics partner, celebrated for fleet safety compliance, operational integrity, and technological innovation.
                </p>
              </Card>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <Card variant="default" glow="accent" className="p-8 space-y-4 h-full bg-white group">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-accent-400 flex items-center justify-center font-bold shadow-md shadow-navy-900/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-accent-600 transition-colors">
                  Our Core Values
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <strong>Zero-Compromise Safety:</strong> Driver & load protection first.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <strong>100% Transparency:</strong> Unfiltered telemetry tracking.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <strong>Operational Speed:</strong> Demurrage-free border clearances.
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* 4. Animated Counters Row */}
        <div className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-800 text-white p-8 md:p-12 rounded-3xl shadow-soft-lg relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-32 h-[140%] bg-white/5 skew-brand pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-accent-400">
                <AnimatedCounter value={6} suffix="+" />
              </div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                <AnimatedCounter value={18500} suffix="+" />
              </div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider">Tonnes Transported</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400">
                <AnimatedCounter value={99.8} suffix="%" decimals={1} />
              </div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider">On-Time Dispatch</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-accent-400">
                <AnimatedCounter value={8} suffix=" SADC" />
              </div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider">Trade Destinations</p>
            </div>
          </div>
        </div>

        {/* 5. "Safety First" Section (Matching Screenshot 2 with Stacked Container Image) */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="accent" slanted>
                Zero-Accident Philosophy
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Safety First: Engineered Load Securing & Certified Handling
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                At Priority Hauliers, safety is an unyielding operational culture. Every cargo loading process at our Harare depot is supervised by certified forklift operators, adhering to SADC bridge-formula axle loading and high-tensile lashing protocols.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Forklift & Rigging Certification for all loading crew.",
                  "Grade 80 lashing chains, anti-slip rubber mats & ratchet straps.",
                  "Axle-by-axle weight distribution checks preventing bridge overload.",
                  "Zero-compromise protection for employees, clients, vehicles, & cargo.",
                ].map((check, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-navy-700 shadow-2xl aspect-[4/3] bg-navy-900">
                <Image
                  src="/images/why-choose.jpg"
                  alt="Certified Safe Cargo Container Handling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white/90 text-xs font-semibold">
                  ✓ Priority Hauliers Safety-First Depot & SADC Line-Haul
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. SADC Transit Corridor Network (3 Cards matching Screenshot 2) */}
        <div className="space-y-8">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Regional Reach"
              title="SADC Transit Corridor Network"
              subtitle="Connecting Harare, Durban, Beira, Maputo, Lusaka, and Lubumbashi with seamless road freight transit."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Zimbabwe", hubs: "Harare HQ, Bulawayo, Beitbridge, Mutare, Chirundu" },
              { name: "South Africa", hubs: "Durban Deepwater Port, Johannesburg / Gauteng" },
              { name: "Mozambique", hubs: "Beira Shipping Port, Maputo Corridor" },
            ].map((loc, idx) => (
              <Reveal key={loc.name} direction="up" delay={0.1 * idx}>
                <Card variant="default" className="p-6 space-y-3 bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-navy-900">
                      {loc.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="text-slate-800">Key Gateways:</strong> {loc.hubs}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 7. Final CTA Banner */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 border border-navy-700 shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="accent" slanted>
            SADC Line-Haul Partner
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Ready to Partner with Priority Hauliers?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Get instant tariff quotes, check vehicle positioning, or speak directly with our Harare dispatch control room.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="accent" size="lg" slanted withArrow href="/contact" className="text-slate-950 font-bold">
              Request Freight Quotation
            </Button>
            <a
              href="https://wa.me/264818518120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-emerald-400/30 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Control Room</span>
            </a>
          </div>
        </div>

      </Container>
    </main>
  );
}
