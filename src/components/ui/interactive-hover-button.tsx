"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type InteractiveHoverButtonProps = {
  text?: string;
  href?: string;
  variant?: "default" | "premium";
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", href, variant = "default", className, ...props }, ref) => {
  const isPremium = variant === "premium";

  const baseClasses = cn(
    "group relative cursor-pointer overflow-hidden text-center font-semibold text-white transition-all duration-300",
    isPremium
      ? "rounded-full border-2 border-[#0f172a] bg-[#0f172a] px-8 py-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.15)] transition-all duration-300 ease-out hover:border-[#2563eb] hover:bg-[#2563eb] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100"
      : "rounded-full border border-primary bg-foreground px-6 py-3 hover:border-primary/80",
    className,
  );

  const content = isPremium ? (
    <>
      {/* Shimmer sweep on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      {/* Content: text left, arrow right on hover */}
      <span className="relative z-10 flex w-full items-center justify-between tracking-wide uppercase text-[13px]">
        <span className="transition-transform duration-300 group-hover:scale-105">{text}</span>
        <ArrowRight className="h-4 w-4 translate-x-2 opacity-0 transition-all duration-300 ease-out delay-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-75" />
      </span>
    </>
  ) : (
    <>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} className={baseClasses} {...props}>
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
