"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Droplets, Building2, ShieldCheck, Zap, Heart, Search, Phone, ArrowRight, Zap as ZapIcon, Droplets as WaterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getDynamicIntent } from "@/lib/seo";

const productCategories = [
  {
    id: "domestic-ro",
    title: "Domestic RO",
    desc: "We provide sales and service for all brands of home water purifiers.",
    bullets: [
      "RO water purifiers for drinking and cooking",
      "Suitable for borewell, corporation, and mixed water",
      "Regular service, filter change, and repairs",
      "Use of genuine spare parts only"
    ],
    idealFor: "Individual houses, flats, and apartments",
    icon: Droplets
  },
  {
    id: "commercial-ro",
    title: "Commercial RO",
    desc: "High-capacity reverse osmosis systems designed for large water requirements.",
    bullets: [
      "Custom-built RO plants for factories and commercial units",
      "Designed based on water quality and daily usage",
      "Continuous operation with stable performance",
      "Proper installation and testing"
    ],
    idealFor: "Factories, schools, hospitals, offices",
    icon: Building2
  },
  {
    id: "iron-removal",
    title: "Iron Removal",
    desc: "Specialized systems to remove excess iron from water.",
    bullets: [
      "Eliminates iron smell, color, and stains",
      "Prevents damage to pipes and fittings",
      "Improves water taste and clarity",
      "Helps protect RO membranes and equipment"
    ],
    idealFor: "Borewell water users",
    icon: Search
  },
  {
    id: "water-softener",
    title: "Water Softener",
    desc: "Advanced ion-exchange softeners to reduce water hardness.",
    bullets: [
      "Removes calcium and magnesium from hard water",
      "Prevents scaling in pipes, heaters, and boilers",
      "Improves soap efficiency and cleaning results",
      "Increases life of appliances"
    ],
    idealFor: "Homes, apartments, hotels, industries",
    icon: ZapIcon
  },
  {
    id: "stp-etp",
    title: "STP & ETP Plant",
    desc: "Complete Sewage and Effluent Treatment Plants for wastewater management.",
    bullets: [
      "Treats sewage and industrial wastewater",
      "Helps reuse treated water for gardening or flushing",
      "Designed to meet environmental standards",
      "Supports pollution control compliance"
    ],
    idealFor: "Apartments, industries, institutions",
    icon: WaterIcon
  }
];

function ProductContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || searchParams.get('intent') || "";
  const dynamicIntent = getDynamicIntent(query);

  return (
    <div className="space-y-24">
      {/* Dynamic Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          {dynamicIntent.pageTitle || "Expert Water Purification Solutions"}
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto italic">
          "{dynamicIntent.pageDescription || "Providing honest advice and quality products for every customer."}"
        </p>
      </section>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-16">
        {productCategories.map((category, idx) => (
          <motion.section 
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            id={category.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
               <div className="inline-flex items-center gap-3 px-3 py-1 bg-sky-500/10 text-sky-500 rounded-lg text-xs font-bold uppercase tracking-[0.2em] border border-sky-500/20 shadow-sm">
                  <category.icon className="h-4 w-4" />
                  {category.title}
               </div>
               <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">{category.title}</h2>
               <p className="text-xl text-foreground/60 leading-relaxed">{category.desc}</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.bullets.map(bullet => (
                    <div key={bullet} className="flex gap-4 p-4 rounded-2xl glass-card border-none bg-sky-500/5 group hover:bg-sky-500/10 transition-colors">
                       <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-foreground/80 font-semibold leading-snug">{bullet}</span>
                    </div>
                  ))}
               </div>
               <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-black/5">
                  <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest bg-black/5 px-4 py-2 rounded-full">
                     Ideal for: <span className="text-foreground">{category.idealFor}</span>
                  </div>
                  <Link href={`/contact?product=${category.id}`} className="group flex items-center gap-3 rounded-2xl bg-sky-500 px-8 py-4 font-bold text-white transition-all hover:bg-sky-600 shadow-xl shadow-sky-500/20 active:scale-95">
                    Request Quote 
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
            
            <div className={`relative aspect-square lg:aspect-auto h-full min-h-[400px] w-full ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
               <div className="absolute inset-4 rounded-[4rem] overflow-hidden liquid-glass border border-white/10 shadow-2xl">
                  <Image 
                    src="/images/hero-bg.png" 
                    alt={category.title} 
                    fill 
                    className="object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                     <p className="text-3xl font-extrabold text-white leading-tight">{category.title} Installation & Support</p>
                  </div>
               </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Auxiliary Note */}
      <section className="liquid-glass rounded-[4rem] p-12 lg:p-24 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
         <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-500 mb-8 border border-indigo-500/20 animate-pulse">
            <Zap className="h-8 w-8" />
         </div>
         <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Service Commitment</h2>
         <p className="text-xl text-foreground/60 max-w-2xl mx-auto italic">
            "Professional installation, reliable service support, and long-term maintenance options for all water solutions."
         </p>
         <div className="pt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
               <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500"><ShieldCheck className="h-6 w-6" /></span>
               <span className="font-bold text-foreground">Honest Guidance</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500"><ZapIcon className="h-6 w-6" /></span>
               <span className="font-bold text-foreground">Reliable Support</span>
            </div>
         </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Products...</div>}>
      <ProductContent />
    </Suspense>
  );
}
