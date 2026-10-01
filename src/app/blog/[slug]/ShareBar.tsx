"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui";

interface ShareBarProps {
  title: string;
  slug: string;
}

export function ShareBar({ title, slug }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://priorityhauliers.com/blog/${slug}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Read: ${title} - ${shareUrl}`
  )}`;

  const mailShareUrl = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(`Check out this article from Priority Hauliers: ${shareUrl}`)}`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-100 border border-slate-200">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
        <Share2 className="w-4 h-4 text-accent-500" />
        <span>Share Article:</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
          title="Copy Article Link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
          title="Share via WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={mailShareUrl}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
          title="Share via Email"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
