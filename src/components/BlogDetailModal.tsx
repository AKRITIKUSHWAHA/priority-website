"use client";

import React from "react";
import { BlogPost } from "@/data/blogs";
import {
  X,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export function BlogDetailModal({ post, onClose }: BlogDetailModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#1F1F2E] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white shadow-2xl">
        
        {/* Banner Image */}
        <div className="relative h-60 sm:h-80 w-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-[#1F1F2E]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#181824]/80 hover:bg-[#FF4800] text-white p-2 rounded-full border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#FF4800] text-white font-bold uppercase tracking-wider">
                {post.category}
              </span>
              {post.isImportantAdvisory && (
                <span className="text-xs px-3 py-1 rounded-full bg-amber-500 text-black font-bold uppercase tracking-wider flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Important Notice</span>
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs text-zinc-400">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full border border-white/20 object-cover"
              />
              <div>
                <span className="font-bold text-white block">{post.author.name}</span>
                <span className="text-[11px] text-zinc-400">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#FF4800]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#FF4800]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Text */}
          <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h2 key={index} className="text-xl font-bold text-white mt-6 mb-2">
                    {paragraph.replace("### ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("#### ")) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-[#FF4800] mt-5 mb-2">
                    {paragraph.replace("#### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n- ");
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1.5 text-zinc-300">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#181824] text-zinc-300 px-3 py-1 rounded-full border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Close button */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-[#FF4800] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
