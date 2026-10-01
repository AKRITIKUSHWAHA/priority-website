"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PageHero,
  Container,
  Reveal,
  Button,
  Badge,
  Card,
  SectionHeading,
} from "@/components/ui";
import { blogPosts, BlogPost } from "@/data/blogs";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Filter,
  Send,
  CheckCircle2,
  AlertCircle,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const categories = [
    "All",
    "Company Advisory",
    "Safety & Compliance",
    "Logistics Insights",
    "Customs & Trade",
  ];

  // Filter logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  const featuredPost = blogPosts.find((p) => p.isImportantAdvisory) || blogPosts[0];
  const recentPosts = blogPosts.slice(0, 3);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrow="News & Advisories"
        title="Priority Hauliers Dispatch & Safety Journal"
        subtitle="Official recruitment guidelines, fleet safety protocols, SADC customs checklists, and trade corridor insights."
        breadcrumbs={[{ label: "Blog & Advisories" }]}
      />

      <Container className="py-16 md:py-24 space-y-16">
        
        {/* Featured Advisory Banner Card */}
        {featuredPost && (
          <Reveal direction="up">
            <Card
              variant="navy"
              glow="accent"
              className="p-0 overflow-hidden rounded-3xl border-navy-700 shadow-2xl relative group bg-navy-950"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Image Side */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-950" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="accent" slanted>
                      ★ Featured Official Advisory
                    </Badge>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 text-white">
                  <div className="flex items-center gap-3 text-xs text-accent-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading leading-snug group-hover:text-accent-400 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <User className="w-3.5 h-3.5 text-accent-500" />
                      <span>{featuredPost.author.name}</span>
                    </div>

                    <Button
                      variant="accent"
                      size="sm"
                      slanted
                      withArrow
                      href={`/blog/${featuredPost.slug}`}
                      className="text-slate-950 font-bold"
                    >
                      Read Advisory
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        )}

        {/* Main Grid & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Filtered Posts Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Search Filter Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                Showing {filteredPosts.length} Articles
              </span>

              {/* Mobile Category Dropdown / Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {currentPosts.map((post) => (
                  <Card
                    key={post.id}
                    variant="default"
                    glow="primary"
                    className="p-0 overflow-hidden group border-slate-200/80 shadow-soft hover:shadow-soft-lg flex flex-col h-full bg-white"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge variant={post.isImportantAdvisory ? "accent" : "primary"} size="sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-accent-500" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold font-heading text-navy-900 group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-500 truncate max-w-[120px]">
                          {post.author.name}
                        </span>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 group-hover:text-accent-600 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                <AlertCircle className="w-8 h-8 text-accent-500 mx-auto" />
                <h3 className="text-lg font-bold text-navy-900">No Articles Found</h3>
                <p className="text-sm text-slate-500">
                  Try adjusting your search keywords or category filters.
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 disabled:opacity-40 hover:bg-slate-100 transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-primary-600 text-white shadow-soft"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 disabled:opacity-40 hover:bg-slate-100 transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Search Widget */}
              <Card variant="default" className="p-6 space-y-3 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
                  Search Advisories
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search keywords, recruitment, safety..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </Card>

              {/* Categories Widget */}
              <Card variant="default" className="p-6 space-y-3 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading border-b border-slate-100 pb-3">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary-50 text-primary-700 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </Card>

              {/* Recent Articles Widget */}
              <Card variant="default" className="p-6 space-y-4 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading border-b border-slate-100 pb-3">
                  Recent Advisories
                </h4>
                <div className="space-y-3">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-0.5 overflow-hidden">
                        <h5 className="text-xs font-bold text-navy-900 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 font-medium">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Newsletter Subscription Card */}
              <Card variant="navy" glow="accent" className="p-6 space-y-4 text-white">
                <div className="space-y-1">
                  <Badge variant="accent" slanted>
                    Dispatch Newsletter
                  </Badge>
                  <h4 className="text-base font-bold font-heading text-white">
                    Subscribe for SADC Transit Alerts
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Get monthly border queue updates, ZIMRA policy shifts, and fleet advisories.
                  </p>
                </div>

                <form onSubmit={handleNewsletter} className="space-y-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your work email..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="sm"
                    slanted
                    className="w-full justify-center text-slate-950 font-bold"
                  >
                    {newsletterSubmitted ? "✓ Subscribed" : "Subscribe Now"}
                  </Button>
                </form>
              </Card>

            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
