import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers | IEEE ICAIC",
  description: "Meet our conference speakers.",
};

export default function SpeakersPage() {
  return (
    <main className="min-h-[60vh] bg-[#0a0a0f] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Speakers</h1>
        <p className="mt-4 text-[#94a3b8]">Speaker lineup will be announced soon.</p>
      </div>
    </main>
  );
}
