"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, Container, Reveal, Card, Badge } from "@/components/ui";
import { testimonialsData } from "@/data/testimonials";
import { images } from "@/data/images";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const avatarList = [
    images.avatars.tinashe.src,
    images.avatars.grace.src,
    images.avatars.rutendo.src,
    images.avatars.kudakwashe.src,
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    // Auto-play interval
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials-section" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none -mr-32" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by Leading SADC Shippers"
            subtitle="Read how our cross-border road transport, customs clearance, and Harare warehousing deliver peace of mind for industrial partners."
          />
        </Reveal>

        {/* Embla Carousel Container */}
        <div className="relative mt-12 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {testimonialsData.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0"
                >
                  <Card
                    variant="default"
                    glow="primary"
                    className="p-8 h-full flex flex-col justify-between border-slate-200/80 shadow-soft hover:shadow-soft-lg group relative bg-white"
                  >
                    {/* Top Quote Icon & Star Rating */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Quote className="w-8 h-8 text-accent-500 opacity-80 shrink-0" />
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 leading-relaxed font-sans italic">
                        "{item.comment}"
                      </p>
                    </div>

                    {/* Author Avatar & Details */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#446CB3] shrink-0">
                        <Image
                          src={avatarList[idx % avatarList.length]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 overflow-hidden">
                        <h4 className="text-sm font-bold font-heading text-navy-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 truncate font-medium">
                          {item.role}, {item.company}
                        </p>
                        <p className="text-[11px] text-accent-600 font-bold uppercase tracking-wider">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls: Arrows & Navigation Dots */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-8 bg-accent-500"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
