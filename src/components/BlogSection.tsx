"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, ShieldAlert, ShieldCheck } from "lucide-react";
import { SectionHeading, Container, Reveal, Card, Badge, Button } from "@/components/ui";
import { blogPosts } from "@/data/blogs";
import { images } from "@/data/images";

export function BlogSection() {
  const postsToDisplay = blogPosts.slice(0, 2);

  const localImages = [
    images.blog.driver.src,
    images.blog.forklift.src,
  ];

  return (
    <section id="blog-section" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none -ml-32" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            eyebrow="News & Safety Advisories"
            title="Latest Dispatch Bulletins & Safety News"
            subtitle="Stay informed on official Priority Hauliers advisories, SADC driver recruitment guidelines, and zero-compromise fleet safety practices."
          />
        </Reveal>

        {/* 2 Latest Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {postsToDisplay.map((post, idx) => {
            const coverImg = localImages[idx] || post.coverImage;

            return (
              <Reveal key={post.id} direction="up" delay={0.15 * idx + 0.1}>
                <Card
                  variant="default"
                  glow="primary"
                  className="p-0 overflow-hidden group border-slate-200/80 shadow-soft hover:shadow-soft-lg flex flex-col h-full bg-white"
                >
                  {/* Image Frame with Zoom on Hover */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
                    <Image
                      src={coverImg}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <Badge variant={post.isImportantAdvisory ? "accent" : "primary"} slanted>
                        {post.category}
                      </Badge>

                      <div className="flex items-center gap-1 text-xs text-white bg-navy-900/80 backdrop-blur-md px-3 py-1 rounded-full font-semibold border border-navy-700">
                        <Calendar className="w-3.5 h-3.5 text-accent-500" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-900 group-hover:text-primary-600 transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Read More Action */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 truncate max-w-[150px]">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-accent-600 transition-colors"
                      >
                        <span>Read Full Advisory</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* View All Posts Button */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" withArrow href="/blog">
              View All News & Advisories
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
