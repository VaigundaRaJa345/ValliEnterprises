"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Factory, Filter, Waves, Building2, ArrowRight, ShieldCheck, Zap, Heart, Phone, Mail } from "lucide-react";

const categories = [
  {
    title: "Domestic RO",
    description: "Pure drinking water for your home. Optimized for borewell and corporation water sources.",
    icon: Droplets,
    color: "sky",
    href: "/products/domestic-ro"
  },
  {
    title: "Commercial RO",
    description: "Custom-built solutions for factories, schools, and hospitals with high-capacity requirements.",
    icon: Factory,
    color: "blue",
    href: "/products/commercial-ro"
  },
  {
    title: "Iron Removal",
    description: "Specialized systems to eliminate unpleasant smell, color, and iron content from borewell water.",
    icon: Filter,
    color: "indigo",
    href: "/products/iron-removal"
  },
  {
    title: "Water Softeners",
    description: "Advanced ion-exchange technology to prevent scaling and handle hard water issues.",
    icon: Waves,
    color: "cyan",
    href: "/products/water-softeners"
  },
  {
    title: "STP & ETP Plants",
    description: "Professional sewage and wastewater treatment plants for apartments and industries.",
    icon: Building2,
    color: "blue",
    href: "/products/stp-etp"
  }
];

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 min-h-[80vh] flex items-center">
        <Image
          src="/images/hero-bg.png"
          alt="Clean Water Background"
          fill
          className="object-cover opacity-60 transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
        
        <div className="relative container mx-auto px-8 md:px-16 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300 backdrop-blur-md border border-sky-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Trusted Water Solution Partners in Chennai
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Purity Redefined by <span className="text-gradient">Liquid Glass</span> Aesthetics.
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              At Valli Enterprises, we don't just sell filters. We study your water condition first to provide the most honest and effective treatment solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products" className="group flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-bold text-white transition-all hover:bg-sky-600 hover:scale-105 shadow-xl shadow-sky-500/20">
                Explore Solutions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="liquid-glass flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:scale-105">
                Get Free Analysis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise / Categories */}
      <section className="space-y-16">
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Expertise</h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            From domestic homes to massive industrial plants, we provide water treatment solutions that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col items-start text-left space-y-4 group"
            >
              <div className={`p-4 rounded-2xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {category.description}
              </p>
              <Link href={category.href} className="flex items-center gap-2 text-sm font-bold text-sky-500 hover:text-sky-600 pt-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="liquid-glass rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Droplets size={400} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Why Valli Enterprises?
            </h2>
            <div className="space-y-6">
              {[
                { title: "Honest Water Study", desc: "We analyze your water's actual condition before recommending any product.", icon: ShieldCheck },
                { title: "Genuine Spare Parts", desc: "We only use original components to ensure the longevity of your systems.", icon: Zap },
                { title: "Commitment to Service", desc: "Professional installation and reliable after-sales support are our promises.", icon: Heart }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
             <Image 
                src="/images/hero-bg.png" 
                alt="Quality Service" 
                fill 
                className="object-cover"
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                <div className="liquid-glass rounded-2xl p-8 text-center max-w-xs scale-110">
                   <p className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Our Mission</p>
                   <p className="text-white text-lg font-medium leading-relaxed italic">
                      "To provide clean, safe water solutions through technical honesty and professional integrity."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="text-center space-y-8 pb-12">
        <h2 className="text-3xl font-bold text-foreground">Have a water problem? Let's fix it together.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:8428665293" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-transform shadow-xl">
            <Phone className="h-5 w-5" />
            Call: 8428665293
          </a>
          <Link href="/contact" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-sky-500 text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-sky-500/20">
            <Mail className="h-5 w-5" />
            Request Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
