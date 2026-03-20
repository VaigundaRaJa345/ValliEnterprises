import type { Metadata } from "next";
import { Outfit as Font_Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontOutfit = Font_Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valli Enterprises | Water Solution Experts in Chennai",
  description: "Specializing in Domestic, Commercial RO, Iron Removal, Water Softeners, STP & ETP Plants. Honest service, genuine parts, and expert water condition analysis in Chennai.",
  keywords: ["RO Service Chennai", "Water Softener Chennai", "STP ETP Plants", "Iron Removal Filter", "Valli Enterprises"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontOutfit.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="relative flex-1 pt-32 pb-16 overflow-hidden">
          {/* Subtle background glow elements */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[120px]" />
          <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-300/10 blur-[120px]" />
          
          <div className="container relative mx-auto px-4 z-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
