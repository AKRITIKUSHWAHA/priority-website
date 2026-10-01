"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FileText, CalendarCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading, Container, Reveal, Card } from "@/components/ui";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const steps = [
    {
      number: "01",
      title: "Request a Quote",
      description:
        "Submit cargo volume, payload tonnage, origin, and destination specs through our instant portal or WhatsApp dispatch desk.",
      icon: FileText,
      details: ["Instant automated tariff estimate", "Customs clearance advice", "Vehicle availability check"],
    },
    {
      number: "02",
      title: "Plan & Schedule",
      description:
        "Route optimization across SADC corridors, pre-filing Beitbridge border manifests, and dispatching calibrated tri-axles & superlinks.",
      icon: CalendarCheck,
      details: ["Pre-cleared SADC documentation", "Driver fatigue rotation scheduling", "Geo-fenced route mapping"],
    },
    {
      number: "03",
      title: "Safe Loading & Transport",
      description:
        "Certified forklift loading at Harare depot, heavy-duty cargo strapping, and 24/7 continuous satellite telematics monitoring.",
      icon: ShieldCheck,
      details: ["Forklift & rigging certification", "Temperature & speed telemetry", "Hazchem certified handling"],
    },
    {
      number: "04",
      title: "Delivery & Confirmation",
      description:
        "On-time arrival at client premises, de-stuffing inspection, digital proof of delivery (POD), and dispatch handover.",
      icon: CheckCircle2,
      details: ["Digital POD sign-off", "Client arrival notification", "Demurrage-free turnaround"],
    },
  ];

  return (
    <section id="process-section" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            eyebrow="How It Works"
            title="4-Step Execution Framework"
            subtitle="Disciplined operational timeline engineered for zero transit delays, total cargo safety, and seamless border clearances."
          />
        </Reveal>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-16 max-w-5xl mx-auto">
          {/* Central Animated Connecting Line (Desktop) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-slate-100 hidden lg:block rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-600 origin-top"
            />
          </div>

          {/* Left Vertical Line (Mobile/Tablet) */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-slate-100 lg:hidden rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-600 origin-top"
            />
          </div>

          {/* 4 Alternating Timeline Cards */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Step Content Box */}
                  <div className="w-full lg:w-1/2 pl-14 lg:pl-0 lg:px-8">
                    <Reveal direction={isEven ? "left" : "right"} delay={0.15 * idx}>
                      <Card
                        variant="default"
                        glow="accent"
                        className="p-6 sm:p-8 space-y-4 relative overflow-hidden border-slate-200/80 shadow-soft hover:shadow-soft-lg group"
                      >
                        {/* Top Badge & Number */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 font-heading">
                            Step {step.number}
                          </span>
                          <span className="text-2xl font-extrabold font-heading text-slate-200 group-hover:text-primary-500 transition-colors">
                            {step.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-primary-600 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed font-sans">
                            {step.description}
                          </p>
                        </div>

                        {/* Micro Checklist */}
                        <div className="pt-2 border-t border-slate-100 grid grid-cols-1 gap-2">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </Reveal>
                  </div>

                  {/* Central Numbered Circle Marker */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 z-20">
                    <Reveal direction="none" delay={0.1 * idx}>
                      <div className="w-12 h-12 rounded-full bg-navy-900 text-white border-4 border-white shadow-lg flex items-center justify-center font-bold shrink-0 transition-transform duration-300 hover:scale-110">
                        <IconComp className="w-5 h-5 text-accent-500" />
                      </div>
                    </Reveal>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternating Grid */}
                  <div className="w-full lg:w-1/2 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
