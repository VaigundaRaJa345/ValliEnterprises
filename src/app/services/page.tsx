"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Clock, ShieldCheck, Phone, CheckCircle2, ArrowRight, Cog, Hammer, MapPin as MapIcon } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const services = [
  {
    title: "Annual Maintenance Contract (AMC)",
    desc: "Fixed yearly fee covering quarterly check-ups and filter replacements.",
    features: ["4 Routine Visits", "All Filters Replaced", "Emergency Spare Support", "Priority Call Response"],
    icon: ShieldCheck,
    price: "Starts at ₹2,500/yr"
  },
  {
    title: "On-Call Repair Service",
    desc: "Quick repair for any brand of RO, Softener, or Industrial plant.",
    features: ["60-Min TAT in Chennai", "Genuine Spare Parts", "Certified Technicians", "Fault Diagnosis Report"],
    icon: Wrench,
    price: "₹350 Visit Fee"
  },
  {
    title: "New Installation",
    desc: "Scientific installation focused on TDS alignment and water source study.",
    features: ["Pre-Pipe Check", "Water Quality Study", "Drift Test & Safety Check", "2hr Commissioning"],
    icon: Hammer,
    price: "Starts at ₹1,500"
  },
  {
    title: "Media Refilling",
    desc: "Timely refilling of sand, carbon, and resin for Softeners and Plants.",
    features: ["High-Quality Resin used", "Backwash Calibration", "Media Drain Support", "Vessel Cleaning"],
    icon: Cog,
    price: "Check Best Quote"
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-40 pb-40">
      {/* Hero */}
      <section className="text-center space-y-4 max-w-4xl mx-auto pt-16 px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
           Certified Maintenance
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
          Reliable <span className="text-gradient">Service Plans.</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-foreground/60 max-w-2xl mx-auto italic font-medium">
           "Ensuring your plant's performance is as stable as the day it was installed."
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-12 rounded-[4rem] flex flex-col items-start gap-8 group"
          >
             <div className="h-20 w-20 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center ring-4 ring-primary/5 shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white duration-500">
                <service.icon className="h-10 w-10" />
             </div>
             <div className="space-y-4">
                <h2 className="text-4xl font-black text-foreground tracking-tight leading-tight">{service.title}</h2>
                <p className="text-lg text-foreground/60 font-medium italic">"{service.desc}"</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {service.features.map(f => (
                   <div key={f} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 className="h-4 w-4" /></div>
                      <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">{f}</span>
                   </div>
                ))}
             </div>
             <div className="pt-8 mt-auto w-full flex flex-col sm:flex-row items-center justify-between border-t border-primary/5 gap-6">
                <div>
                   <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Pricing Model</p>
                   <p className="text-2xl font-black text-primary">{service.price}</p>
                </div>
                <Link href="/contact" className="px-10 py-5 rounded-2xl bg-primary text-white font-black shimmer-button shadow-2xl shadow-primary/30 flex items-center gap-2 hover:scale-105 transition-all text-sm uppercase">
                   Request Booking <ArrowRight className="h-4 w-4" />
                </Link>
             </div>
          </motion.div>
        ))}
      </section>

      {/* Map Section - We Cover All Chennai */}
      <section className="container mx-auto px-6">
         <div className="liquid-glass rounded-[4rem] p-12 lg:p-24 overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
               <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl"><Clock className="h-8 w-8" /></div>
               <h2 className="text-4xl lg:text-7xl font-black text-foreground tracking-tight leading-[1]">60-Minute <span className="text-gradient">Response.</span></h2>
               <p className="text-xl text-foreground/60 leading-relaxed font-bold italic">"Covering all major localities in Greater Chennai including Siruseri, Tambaram, Anna Nagar, and Ambattur."</p>
               <div className="flex gap-4">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-widest">Borewell Specialist</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-widest">Chennai Local Service</span>
               </div>
            </div>
            <div className="relative h-[400px] w-full bg-slate-200 rounded-[3rem] overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl border border-primary/20">
               {/* Simplified Chennai service Map / Visual */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapIcon className="h-24 w-24 text-primary animate-bounce" />
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center space-y-12 pb-40">
         <h2 className="text-4xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-tight">Need a Technician <span className="text-gradient">Right Now?</span></h2>
         <div className="flex justify-center gap-8">
            <a href="tel:8428665293" className="px-12 py-6 rounded-3xl bg-primary text-white font-black text-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all shimmer-button">
               Call 84286 65293
            </a>
         </div>
      </section>
    </div>
  );
}
