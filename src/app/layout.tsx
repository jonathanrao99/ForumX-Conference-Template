import type { Metadata } from "next";
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavNextConfo from "@/components/gaiss/NavNextConfo";
import FooterNextConfo from "@/components/gaiss/FooterNextConfo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAISS 2026 — IEEE Conference on Generative AI for Secure Systems",
  description:
    "Join researchers and practitioners at GAISS. 28–30 October 2026. The University of Texas at Austin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} antialiased`}>
        <NavNextConfo />
        {children}
        <FooterNextConfo />
      </body>
    </html>
  );
}
