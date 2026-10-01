import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  size?: "default" | "tight" | "wide" | "full";
}

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    tight: "max-w-4xl",
    default: "max-w-7xl", // 1280px container max-width per spec
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
