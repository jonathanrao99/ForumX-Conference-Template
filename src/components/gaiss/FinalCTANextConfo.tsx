"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
];

export default function FinalCTANextConfo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative bg-[#f8fafc] py-32 text-[#1e293b] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div style={{ y }} className="text-center">
          <h2 className="heading-xl mx-auto max-w-3xl text-[#1e293b]">
            Ready to be<br />part of it?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-[#475569]">
            Join 500+ innovators, researchers, and builders. Secure your spot before tickets sell out.
          </p>
          <Link
            href="/#tickets"
            className="btn-glow mt-10 inline-block rounded-full bg-[#2563eb] px-8 py-4 text-base font-semibold text-white"
          >
            Get your ticket
          </Link>
        </motion.div>

        <div className="mt-20 flex gap-4 overflow-hidden">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-[4/3] w-[240px] shrink-0 overflow-hidden rounded-lg"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="240px" />
              <div className="absolute inset-0 bg-[#1e293b]/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
