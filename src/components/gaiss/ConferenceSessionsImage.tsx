"use client";

import Image from "next/image";

export default function ConferenceSessionsImage() {
  return (
    <section className="bg-[#f4f4f5] -mt-8 pt-0 pb-4 lg:-mt-8 lg:pt-0 lg:pb-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/conference-sessions.png"
            alt="GAISS conference sessions"
            width={1400}
            height={700}
            className="h-auto w-full object-contain"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
