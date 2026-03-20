"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap, Award, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const beliefs = [
  "Clean water is essential for good health",
  "Quality products give long life and better performance",
  "Genuine spare parts prevent repeated problems",
  "Proper service is as important as the product itself"
];

const assurances = [
  { title: "Proper system selection", desc: "Scientific TDS & Water condition study", icon: ShieldCheck },
  { title: "Professional installation", desc: "Expert technicians for every plant type", icon: Award },
  { title: "Reliable service support", desc: "Always just a call away for maintenance", icon: Zap },
  { title: "Maintenance options", desc: "Long-term support plans for stability", icon: Heart }
];

export default function AboutPage() {
  return (
    <div className="space-y-32 mb-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="text-sky-500 font-bold uppercase tracking-[0.3em] text-sm"
        >
           About Valli Enterprises
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Helping Chennai get <span className="text-gradient">Clean, Safe, and Healthy</span> water.
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
           Valli Enterprises is a water purification sales and service company based in Chennai, helping families, businesses, and communities for daily water use.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div className="relative aspect-square rounded-[3rem] overflow-hidden liquid-glass">
            <Image 
              src="/images/hero-bg.png" 
              alt="Expert Analysis" 
              fill 
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
         </div>
         <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">Our Scientific Approach</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
               We understand that water quality is not the same everywhere. Some areas have hard water, some have iron, and some have chemical contamination.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
               Because of this, we first study your water condition and then recommend the right purification solution. We do not offer one common solution for everyone.
            </p>
            <div className="space-y-4 pt-4 border-t border-black/5">
               <h3 className="text-xl font-bold text-foreground">What We Believe</h3>
               <div className="grid grid-cols-1 gap-3">
                  {beliefs.map(belief => (
                    <div key={belief} className="flex items-center gap-3">
                       <CheckCircle2 className="h-5 w-5 text-sky-500" />
                       <span className="text-foreground/70 font-medium">{belief}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Our Assurance */}
      <section className="space-y-16">
         <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">Our <span className="text-gradient">Assurance</span></h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {assurances.map((item, idx) => (
               <motion.div 
                 key={item.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="glass-card flex flex-col items-center text-center space-y-4 p-8 rounded-[3rem]"
               >
                  <div className="p-4 rounded-full bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/20">
                     <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Contact Link */}
      <section className="liquid-glass rounded-[4rem] p-12 lg:p-20 text-center space-y-8 max-w-5xl mx-auto shadow-2xl">
         <p className="text-xl font-medium text-foreground/80 leading-relaxed">
            "At Valli Enterprises, we focus on honest service, correct guidance, and long-term support."
         </p>
         <div className="flex justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 text-white font-bold hover:scale-105 transition-all">
               Talk to a Water Expert
            </Link>
         </div>
      </section>
    </div>
  );
}
