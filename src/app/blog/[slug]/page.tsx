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
  IconLinkedin,
} from "@/components/ui";
import { blogPosts } from "@/data/blogs";
import { siteConfig } from "@/data/siteConfig";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Tag,
  Phone,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { ShareBar } from "./ShareBar";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Priority Hauliers`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Priority Hauliers`,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Convert markdown body text into clean paragraph blocks
  const contentParagraphs = post.content
    .trim()
    .split("\n\n")
    .filter((p) => p.length > 0);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title.substring(0, 30) + "..." },
        ]}
      />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Main Content (Left - 8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Main Cover Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-soft-lg bg-navy-900">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Author Meta Bar & Share Bar */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#446CB3] shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-navy-900">
                      {post.author.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{post.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Share Bar */}
              <ShareBar title={post.title} slug={post.slug} />
            </div>

            {/* Formatted Article Body Content */}
            <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-soft space-y-6 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
              {contentParagraphs.map((para, i) => {
                if (para.startsWith("### ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 pt-4 pb-2 border-b border-slate-100"
                    >
                      {para.replace("### ", "")}
                    </h2>
                  );
                }

                if (para.startsWith("#### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-bold font-heading text-navy-900 pt-3 pb-1 text-primary-700"
                    >
                      {para.replace("#### ", "")}
                    </h3>
                  );
                }

                if (para.includes("- **")) {
                  const items = para.split("\n- ").filter((item) => item.length > 0);
                  return (
                    <ul key={i} className="space-y-2.5 my-4 text-sm sm:text-base">
                      {items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: it
                                .replace(/^- /, "")
                                .replace(/\*\*(.*?)\*\*/g, "<strong class='text-navy-900 font-bold'>$1</strong>"),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, "<strong class='text-navy-900 font-bold'>$1</strong>")
                        .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-primary-600 underline font-bold hover:text-accent-600'>$1</a>"),
                    }}
                  />
                );
              })}

              {/* Tags Row */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="subtle" size="sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </article>

            {/* Prev / Next Article Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-primary-400 transition-all group space-y-1 text-left"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5 text-accent-500 group-hover:-translate-x-1 transition-transform" />
                    Previous Article
                  </span>
                  <p className="text-sm font-bold text-navy-900 line-clamp-1 group-hover:text-primary-600">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-primary-400 transition-all group space-y-1 text-right sm:col-start-2"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1">
                    Next Article
                    <ArrowRight className="w-3.5 h-3.5 text-accent-500 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <p className="text-sm font-bold text-navy-900 line-clamp-1 group-hover:text-primary-600">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>

            {/* Related Posts */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Related Advisories & Insights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Card key={rPost.id} variant="default" className="p-5 space-y-3 bg-white">
                    <span className="text-[11px] font-bold text-accent-600 uppercase tracking-wider">
                      {rPost.category}
                    </span>
                    <h4 className="text-base font-bold font-heading text-navy-900 hover:text-primary-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{rPost.excerpt}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (Right - 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Author Information Card */}
              <Card variant="default" className="p-6 space-y-4 bg-white text-center">
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#446CB3] shadow-md">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-heading text-navy-900">
                    {post.author.name}
                  </h4>
                  <p className="text-xs font-bold text-accent-600 uppercase tracking-wider">
                    {post.author.role}
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Authoritative dispatch guidelines and safety advisory published by Priority Hauliers Management.
                </p>
              </Card>

              {/* Recruitment / Safety Fast Action */}
              <Card variant="navy" glow="accent" className="p-6 space-y-4 text-white">
                <Badge variant="accent" slanted>
                  Official Contact Channel
                </Badge>
                <h4 className="text-base font-bold font-heading text-white">
                  Driver Applications & Inquiries
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Remember: all driver recruitment applications across Zimbabwe and SADC must be sent directly to:
                </p>
                <a
                  href="mailto:hello@priorityhauliers.com"
                  className="block p-3 rounded-xl bg-navy-950 text-accent-400 font-bold text-xs font-mono text-center hover:bg-navy-900 border border-navy-700 transition-colors"
                >
                  hello@priorityhauliers.com
                </a>

                <div className="pt-2 space-y-2">
                  <a
                    href="https://wa.me/264818518120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Operations</span>
                  </a>
                </div>
              </Card>

              {/* Back to Blog Hub */}
              <Button
                variant="outline"
                size="md"
                href="/blog"
                className="w-full justify-center"
              >
                ← Back to All Articles
              </Button>

            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
