"use client";

export default function ConferenceSessionsImage() {
  return (
    <section className="bg-[#f4f4f5] pt-8 pb-8 lg:pt-10 lg:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/conference-sessions.png"
            alt="GAISS conference sessions"
            className="h-auto w-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
