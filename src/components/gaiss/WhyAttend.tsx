"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  { title: "Keynotes", body: "Hear from researchers and founders defining the next decade of technology." },
  { title: "Workshops", body: "Hands-on sessions across AI, cloud infrastructure, and product design." },
  { title: "Networking", body: "Structured and organic opportunities to connect with 500+ attendees." },
  { title: "Showcase", body: "Early-stage startups present live demos to investors and practitioners." },
];

export default function WhyAttend() {
  return (
    <section className="relative bg-[#f8fafc] py-32 text-[#1e293b] overflow-hidden">
      <div className="hr-fade-light mx-auto max-w-[1400px] mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="Event atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/40 to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#2563eb]">
              Why attend
            </p>
            <h2 className="heading-section mt-3 text-[#1e293b]">
              Four reasons to<br />be there.
            </h2>

            <div className="mt-14 space-y-0">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-6 border-t border-[#e2e8f0] py-8 first:border-t-0"
                >
                  <span className="mt-1 text-[15px] font-semibold tabular-nums text-[#2563eb]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1e293b] group-hover:text-[#2563eb] transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-[#475569]">
                      {r.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
