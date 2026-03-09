"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SponsorsNextConfo() {
  return (
    <section id="sponsors" className="relative bg-white py-24 lg:py-32 text-[#0f172a]">
      <div className="hr-fade-light mx-auto max-w-[1400px] mb-20 lg:mb-28" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Partners
            </p>
            <h2 className="heading-section mt-2 text-[#0f172a]">
              Our sponsors
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#475569]">
              Organizations that help make GAISS possible. Interested in partnering?
            </p>
          </div>
          <Link
            href="/#sponsors"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center rounded-full border-2 border-[#2563eb] px-6 py-3 text-[14px] font-semibold text-[#2563eb] transition-all duration-300 hover:bg-[#2563eb] hover:text-white"
          >
            Become a partner
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 lg:mt-20 space-y-14"
        >
          <div>
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-wider text-[#64748b]">
              Diamond partner
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex h-24 w-52 items-center justify-center rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc]">
                <span className="text-[14px] font-semibold text-[#94a3b8]">Your logo</span>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-wider text-[#64748b]">
              Platinum partners
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex h-20 items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                  <span className="text-[13px] font-medium text-[#94a3b8]">Logo</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-wider text-[#64748b]">
              Gold partners
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex h-16 items-center justify-center rounded-lg border border-[#e2e8f0] bg-[#f8fafc]">
                  <span className="text-[13px] font-medium text-[#94a3b8]">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
