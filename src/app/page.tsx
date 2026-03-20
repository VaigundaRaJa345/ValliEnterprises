"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, PenTool as Tool, Heart, Phone, ArrowRight, CheckCircle2, Award, Zap, Building2, UserCheck, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32 mb-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 lg:pt-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20 text-sm font-bold tracking-wide uppercase">
              <Droplets className="h-4 w-4" />
              Your Trusted Partner for Clean & Safe Water
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Water That <span className="text-gradient">Makes You Smile.</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
              Pure, Mineral-rich Water that protects your family's future in every drop. Safe. Healthy. Essential.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-bold hover:bg-sky-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2">
                Request Water Study <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/products" className="glass-card px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                View Solutions
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-black/5">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-slate-200 overflow-hidden relative">
                       <Image src={`/images/hero-bg.png`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
               </div>
               <p className="text-sm font-medium text-foreground/50">
                  <span className="text-foreground font-bold">5000+</span> Families Trust Valli Enterprises
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full"
          >
             <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full" />
             <div className="relative h-full w-full rounded-[4rem] overflow-hidden liquid-glass border border-white/20 shadow-2xl">
                <Image 
                  src="/images/hero-bg.png" 
                  alt="Crystal Clear Water" 
                  fill 
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl space-y-2">
                   <p className="text-sm text-sky-400 font-bold uppercase tracking-widest">Our Promise</p>
                   <p className="text-2xl font-bold text-white leading-tight">Expert Service for All Brands of Purifiers</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our <span className="text-gradient">Commitment</span></h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto italic">
            "Choosing the right water purification service is important for your health and daily life."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Safe & Clean", desc: "Drinking water", icon: CheckCircle2 },
            { title: "Proper Installation", desc: "And Reliable Service", icon: Tool },
            { title: "Genuine Spares", desc: "High-quality materials", icon: ShieldCheck },
            { title: "Trust & Transparency", desc: "Full support guaranteed", icon: Heart }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col items-center text-center p-8 space-y-4 rounded-[2.5rem]"
            >
              <div className="p-4 rounded-full bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/20">
                 <item.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-foreground/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Summary */}
      <section className="liquid-glass mx-6 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500/5 blur-[120px] rounded-full -translate-y-1/2" />
          <div className="max-w-4xl mx-auto space-y-12">
             <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">We study your <span className="text-gradient">actual water condition</span> before suggesting a system.</h2>
                <p className="text-xl text-foreground/60 leading-relaxed">
                  We understand that each home and industry has different water problems. Instead of offering one common solution for everyone, we suggest the right system based on scientific study of your water quality.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                   <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-sky-500">
                      <Search className="h-6 w-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground">Water Condition Study</h3>
                   <p className="text-foreground/60">Borewell or Corporation - every source has unique TDS and chemical levels.</p>
                </div>
                <div className="space-y-4">
                   <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-indigo-500">
                      <Building2 className="h-6 w-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground">Custom-Built Plants</h3>
                   <p className="text-foreground/60">Designed for factories, schools, and apartment communities in Chennai.</p>
                </div>
             </div>
          </div>
      </section>

      {/* Small Projects Preview - Catalog Highlights */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
           <Zap className="h-8 w-8 text-yellow-500" />
           Some of our Recent Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { name: "Siruseri TCS STP RO Plant", cap: "15000 LPH" },
             { name: "Okkiyam Thuraipakkam GHSS", cap: "500 LPH" },
             { name: "Smart Water ATM", cap: "Community Service" }
           ].map((p, i) => (
             <div key={i} className="glass-card overflow-hidden group rounded-3xl">
                <div className="h-48 relative">
                   <Image src="/images/hero-bg.png" alt={p.name} fill className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                      <p className="font-bold text-white text-lg">{p.name}</p>
                      <p className="text-sky-400 text-sm font-bold uppercase tracking-widest">{p.cap}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Quick CTA */}
      <section className="text-center space-y-8">
         <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Start Your Journey to <span className="text-gradient">Pure Water</span> Today.</h2>
         <div className="flex justify-center gap-6">
            <a href="tel:8428665293" className="px-10 py-5 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-all text-xl shadow-2xl">
              Call 84286 65293
            </a>
         </div>
         <p className="text-foreground/40 font-medium">Free Water TDS Testing & Consultation in Chennai.</p>
      </section>
    </div>
  );
}
