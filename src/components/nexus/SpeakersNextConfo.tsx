"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const speakers = [
  { name: "Alex Morgan", role: "Keynote", org: "Summit Labs", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Jordan Lee", role: "Panelist", org: "Northwind Ventures", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Sam Rivera", role: "Workshop Lead", org: "Horizon Institute", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Morgan Blake", role: "Speaker", org: "Meridian Group", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

export default function SpeakersNextConfo() {
  return (
    <section id="speakers" className="relative bg-white py-32 text-[#0f172a]">
      <div className="hr-fade-light mx-auto max-w-[1400px] mb-32" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#2563eb]">
              Speakers
            </p>
            <h2 className="heading-section mt-3 text-[#0f172a]">
              Who&apos;s speaking.
            </h2>
          </div>
          <Link
            href="/#speakers"
            className="group flex items-center gap-2 text-[15px] font-medium text-[#64748b] transition-colors duration-300 hover:text-[#2563eb]"
          >
            View all
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-[13px] font-medium uppercase tracking-wider text-white">{s.role}</p>
                </div>
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-[#0f172a]">{s.name}</h3>
              <p className="mt-0.5 text-[14px] text-[#64748b]">{s.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
