"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap, Award, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Installations", value: "5000+" },
  { label: "Happy Clients", value: "4500+" },
  { label: "Chennai Districts", value: "15+" },
  { label: "Expert Engineers", value: "20+" }
];

const values = [
  { title: "Honest Analysis", desc: "No guesswork. No upselling. Just the right solution for your water.", icon: ShieldCheck },
  { title: "Genuine Parts", desc: "We use only tested, certified membranes and spare parts to ensure longevity.", icon: Award },
  { title: "Reliable Support", desc: "Our service team is just a call away, ensuring your system runs forever.", icon: Zap }
];

export default function AboutPage() {
  return (
    <div className="space-y-32 mb-20">
      {/* Hero */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="text-sky-500 font-bold uppercase tracking-[0.3em] text-sm"
        >
           Our Mission & Story
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Committed to <span className="text-gradient">Technical Honesty</span> in Water Purity.
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
           Valli Enterprises was founded on a simple belief: clean water is a fundamental right, and providing it with honesty is a professional duty.
        </p>
      </section>

      {/* Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div className="relative aspect-square rounded-[3rem] overflow-hidden liquid-glass">
            <Image 
              src="/images/hero-bg.png" 
              alt="Dedication" 
              fill 
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
         </div>
         <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">A Different Approach to Water</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
               Unlike many providers who recommend systems based on inventory, Valli Enterprises begins every journey with a **Water Condition Study**. We believe that every borewell and corporation source in Chennai has unique characteristics.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
               Whether it's high TDS, iron contamination, or hardness scaling, we select the specific components and membranes that will perform best for *your* specific water.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
               {stats.map(stat => (
                  <div key={stat.label}>
                     <p className="text-3xl font-extrabold text-sky-500">{stat.value}</p>
                     <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="space-y-16">
         <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">Why We Stand Out</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
               <motion.div 
                 key={value.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="glass-card flex flex-col items-center text-center space-y-4"
               >
                  <div className="p-4 rounded-full bg-sky-500/10 text-sky-500">
                     <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{value.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
