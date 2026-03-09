"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", alt: "Conference hall", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80", alt: "Workshop", span: "" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", alt: "Networking", span: "" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "Keynote stage", span: "" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80", alt: "Audience", span: "" },
];

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export default function WhereInnovation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { d, h, m, s } = useCountdown(new Date("2026-10-28T09:00:00"));

  return (
    <section id="about" className="relative bg-white py-32 text-[#1e293b] overflow-hidden">
      <div className="hr-fade-light mx-auto max-w-[1400px] mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#2563eb]">
              About the conference
            </p>
            <h2 className="heading-lg mt-4 text-[#1e293b]">
              Where innovation<br />meets action.
            </h2>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-[#475569]">
              From groundbreaking keynotes to hands-on workshops and startup showcases — GAISS is designed to inspire bold ideas and spark meaningful connections between researchers, founders, and builders.
            </p>

            <div className="mt-12 flex gap-3">
              {[
                { v: d, l: "Days" },
                { v: h, l: "Hrs" },
                { v: m, l: "Min" },
                { v: s, l: "Sec" },
              ].map((item) => (
                <div
                  key={item.l}
                  className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 text-center min-w-[72px]"
                >
                  <p className="text-2xl font-semibold tabular-nums text-[#1e293b]">{String(item.v).padStart(2, "0")}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-wider text-[#64748b]">{item.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-[14px] uppercase tracking-[0.15em] text-[#64748b]">
              <span>28–30 October 2026</span>
              <span className="h-3 w-px bg-[#e2e8f0]" />
              <span>The University of Texas at Austin</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-3"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg ${img.span} ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#1e293b]/10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
