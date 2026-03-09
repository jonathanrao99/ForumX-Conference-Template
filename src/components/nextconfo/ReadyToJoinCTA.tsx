"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function ReadyToJoinCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section data-dark-section className="relative overflow-hidden py-24 lg:py-32">
      {/* Dark background - same as About section */}
      <div className="absolute inset-0 bg-[#000]" aria-hidden />
      <DottedGlowBackground
        className="inset-0"
        gap={16}
        radius={1.5}
        color="rgba(255,255,255,0.15)"
        darkColor="rgba(255,255,255,0.2)"
        glowColor="rgba(37, 99, 235, 0.7)"
        darkGlowColor="rgba(37, 99, 235, 0.8)"
        opacity={0.8}
      />

      <div ref={ref} className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20"
        >
          {/* Left: headline */}
          <h2 className="font-space-grotesk font-bold text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-white leading-[1.05] tracking-tight uppercase shrink-0 lg:max-w-[45%]">
            Ready to join
            <br />
            <span className="inline-block pl-0 lg:pl-12">the future</span>
            <br />of <span>tech?</span>
          </h2>

          {/* Right: description + CTA */}
          <div className="flex flex-col gap-8 lg:max-w-xl">
            <p className="font-inter text-[17px] sm:text-[18px] leading-[1.7] text-white/90">
              Join the biggest gathering of builders and thought leaders in secure AI. Secure your spot before it&apos;s too late.
            </p>
            <Link
              href="/#tickets"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#0f172a] bg-white px-8 py-4 text-[15px] font-semibold text-[#0f172a] uppercase tracking-wide transition-all duration-300 hover:bg-[#0f172a] hover:text-white"
            >
              Get your ticket now
              <span className="flex gap-0.5">
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="h-1 w-1 rounded-full bg-current" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
