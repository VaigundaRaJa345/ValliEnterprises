import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "Valli Enterprises | RO Purifier Service & Water Treatment Chennai",
  description: "Valli Enterprises provides expert RO water purifier service, industrial plants, and community water solutions in Chennai with technical honesty.",
  keywords: ["RO Service Chennai", "Water Purifier Service", "Industrial RO Plant", "STP Plant Chennai", "Valli Enterprises"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-24 page-transition">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
