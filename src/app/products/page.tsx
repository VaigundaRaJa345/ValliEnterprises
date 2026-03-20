"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Droplets, Factory, Filter, Waves, Building2, ArrowRight } from "lucide-react";
import { getDynamicIntent } from "@/lib/seo";

const products = [
  {
    id: "domestic-ro",
    name: "Domestic RO Systems",
    shortDesc: "Pure, safe drinking water for your family. Optimized for typical Chennai water sources.",
    icon: Droplets,
    details: ["Multi-stage Purification", "TDS Controller", "Low Maintenance", "Compact Design"],
    color: "sky"
  },
  {
    id: "commercial-ro",
    name: "Commercial & Industrial RO",
    shortDesc: "High-capacity solutions for schools, hospitals, and factories up to 100,000 LPH.",
    icon: Factory,
    details: ["Custom Built", "Remote Monitoring", "Heavy Duty", "Energy Efficient"],
    color: "blue"
  },
  {
    id: "iron-removal",
    name: "Iron Removal Filters",
    shortDesc: "Get rid of brownish water and metallic odors from your borewell water.",
    icon: Filter,
    details: ["Zero Maintenance", "No Chemicals", "Automatic Backwash", "Odor Elimination"],
    color: "indigo"
  },
  {
    id: "water-softener",
    name: "Advanced Water Softeners",
    shortDesc: "Prevent scaling in pipes and appliances while improving skin and hair quality.",
    icon: Waves,
    details: ["Ion-exchange Technology", "Salt Efficiency", "Scale Prevention", "Fully Automatic"],
    color: "cyan"
  },
  {
    id: "stp-etp",
    name: "STP & ETP Plants",
    shortDesc: "Professional sewage and effluent treatment for apartments and industrial complexes.",
    icon: Building2,
    details: ["MBR/SBR Technology", "Treated Water Reuse", "Eco-friendly", "Compliance Ready"],
    color: "blue"
  }
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || searchParams.get('intent');
  const dynamicTitle = query ? getDynamicIntent(query) : "Our Water Solutions";

  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
           <span className="text-gradient leading-tight block mb-2">{dynamicTitle.split(":")[0]}</span>
           {dynamicTitle.includes(":") ? <span className="text-2xl block text-foreground/60">{dynamicTitle.split(":")[1]}</span> : ""}
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          At Valli Enterprises, we focus on technical honesty. We study your actual water condition before recommending any of our high-quality systems.
        </p>
      </section>

      {/* Product List */}
      <section className="space-y-12">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`liquid-glass rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-12 group hover:bg-white/10 dark:hover:bg-slate-900/40 transition-all duration-500`}
          >
            <div className={`shrink-0 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-500 shadow-inner dark:bg-sky-500/5`}>
              <product.icon className="h-12 w-12 md:h-16 md:w-16" />
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground">{product.name}</h2>
                <p className="text-lg text-foreground/70 leading-relaxed italic">
                  "{product.shortDesc}"
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-sm font-medium text-foreground/60">
                    <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {detail}
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  href={`/products/${product.id}`}
                  className="group flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-bold text-white transition-all hover:bg-sky-600 shadow-lg shadow-sky-500/20"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  href={{ pathname: '/contact', query: { product: product.id } }}
                  className="liquid-glass flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-foreground/80 hover:bg-white/10 transition-all"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Support Services */}
      <section className="glass-card bg-sky-900/5 !p-12 text-center space-y-8">
        <div className="space-y-4">
           <h2 className="text-3xl font-bold text-foreground">Beyond Water: Auxiliary Services</h2>
           <p className="text-foreground/60 max-w-2xl mx-auto">
             Valli Enterprises also provides expert Laptop and CCTV services to keep your office and home and school secured and operational.
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
           <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-foreground/70 font-bold">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Laptop Chip Level Service
           </div>
           <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-foreground/70 font-bold">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              CCTV Camera Installation
           </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sky-500 font-bold">Loading Solutions...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
