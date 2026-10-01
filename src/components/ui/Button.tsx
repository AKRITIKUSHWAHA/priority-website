"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost" | "navy";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  withArrow?: boolean;
  shine?: boolean;
  slanted?: boolean;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      withArrow = false,
      shine = true,
      slanted = false,
      href,
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white shadow-soft hover:shadow-glow-primary border border-primary-400/30",
      accent:
        "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-slate-950 font-semibold shadow-soft hover:shadow-glow-accent border border-accent-300/30",
      outline:
        "bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-primary-600",
      navy:
        "bg-navy-900 hover:bg-navy-800 text-white border border-navy-700 shadow-soft",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "h-9 px-3.5 text-xs font-medium gap-1.5 rounded-lg",
      md: "h-11 px-5 text-sm font-semibold gap-2 rounded-xl",
      lg: "h-13 px-7 text-base font-semibold gap-2.5 rounded-xl",
    };

    const buttonContent = (
      <>
        {isLoading && (
          <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />
        )}
        {!isLoading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span className={cn("inline-flex items-center", slanted && "unskew-brand")}>
          {children}
        </span>
        {!isLoading && iconRight && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            {iconRight}
          </span>
        )}
        {!isLoading && withArrow && !iconRight && (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
        )}
      </>
    );

    const baseClasses = cn(
      "group relative inline-flex items-center justify-center cursor-pointer select-none transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]",
      shine && variant !== "ghost" && "shine-sweep",
      slanted && "skew-brand rounded-md",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href && !disabled && !isLoading) {
      return (
        <Link href={href} className={baseClasses}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";
