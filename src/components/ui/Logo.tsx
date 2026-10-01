import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoVariant = "default" | "transparent" | "white" | "icon";

export interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  width?: number;
  height?: number;
  linkHref?: string;
  priority?: boolean;
}

export function Logo({
  variant = "transparent",
  className,
  width,
  height,
  linkHref = "/",
  priority = false,
}: LogoProps) {
  let src = "/logo-transparent.png";
  let defaultWidth = 360;
  let defaultHeight = 110;

  if (variant === "default") {
    src = "/logo-full.png";
    defaultWidth = 360;
    defaultHeight = 110;
  } else if (variant === "white") {
    src = "/logo-white.png";
    defaultWidth = 360;
    defaultHeight = 110;
  } else if (variant === "icon") {
    src = "/logo-icon.png";
    defaultWidth = 72;
    defaultHeight = 40;
  }

  const w = width ?? defaultWidth;
  const h = height ?? defaultHeight;

  const content = (
    <div
      className={cn(
        "relative inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 active:scale-[0.99]",
        className
      )}
    >
      <Image
        src={src}
        alt="Priority Hauliers"
        width={w}
        height={h}
        priority={priority}
        className={cn(
          "object-contain w-auto transition-all duration-200",
          variant === "icon" ? "h-10 sm:h-12" : "h-16 sm:h-20 md:h-24 lg:h-28 max-h-[105px]"
        )}
      />
    </div>
  );

  if (linkHref) {
    return (
      <Link href={linkHref} className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
