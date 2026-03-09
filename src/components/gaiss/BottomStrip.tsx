"use client";

import { motion } from "framer-motion";

const items = ["Gallery", "Schedule", "Speakers", "Tickets", "Gallery", "Schedule", "Speakers", "Tickets"];

export default function BottomStrip() {
  return (
    <section className="border-y border-[#e2e8f0] bg-[#f8fafc] py-5 overflow-hidden">
      <motion.div
        className="flex w-max gap-12 pr-12"
        animate={{ x: [0, -(items.length / 2) * 160] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#94a3b8] whitespace-nowrap">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
