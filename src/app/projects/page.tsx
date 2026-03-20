"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Building2, Droplets, MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Siruseri TCS STP RO Plant",
    capacity: "15,000 LPH",
    location: "Siruseri, Chennai",
    year: "2023",
    image: "/images/projects/tcs-stp-ro.png",
    description: "A large-scale Sewage Treatment Plant combined with Reverse Osmosis to provide sustainable recycled water for industrial use. One of our landmark high-capacity installations.",
    category: "Industrial"
  },
  {
    title: "Okkiyam Thoraipakkam GHSS Plant",
    capacity: "500 LPH",
    location: "Thoraipakkam, Chennai",
    year: "2024",
    image: "/images/projects/ghss-ro.png",
    description: "Providing safe, purified drinking water to students at Govt. Higher Secondary School. Stainless steel multi-stage purification with extreme hygiene focus.",
    category: "Hospitals/Schools"
  },
  {
    title: "Sholinganallur GHSS Plant",
    capacity: "250 LPH",
    location: "Sholinganallur, Chennai",
    year: "2023",
    image: "/images/projects/ghss-ro.png",
    description: "Compact yet highly effective RO solution for educational institutions. Designed for low maintenance and high durability under heavy student usage.",
    category: "Hospitals/Schools"
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Success <span className="text-gradient">Stories</span>
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          From high-capacity industrial plants to life-giving school installations, our projects represent our commitment to quality and technical excellence.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group liquid-glass rounded-[2.5rem] overflow-hidden flex flex-col border border-white/10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden">
               <Image 
                 src={project.image} 
                 alt={project.title}
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute top-4 right-4 liquid-glass px-4 py-2 rounded-full text-xs font-bold text-sky-400 uppercase tracking-widest border border-sky-400/20">
                  {project.category}
               </div>
               <div className="absolute bottom-4 left-4 flex gap-4">
                  <div className="liquid-glass p-2 rounded-xl backdrop-blur-xl border border-white/20 text-white flex items-center gap-2 text-xs font-semibold">
                     <Calendar className="h-3 w-3 text-sky-400" />
                     {project.year}
                  </div>
                  <div className="liquid-glass p-2 rounded-xl backdrop-blur-xl border border-white/20 text-white flex items-center gap-2 text-xs font-semibold">
                     <Droplets className="h-3 w-3 text-sky-400" />
                     {project.capacity}
                  </div>
               </div>
            </div>
            
            <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-sky-500 font-bold mb-1">
                  <MapPin size={14} />
                  {project.location}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-sky-500 transition-colors">
                   {project.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                   {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                       <Building2 size={18} />
                    </div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-widest">Valli Certified</span>
                 </div>
                 <button className="flex items-center gap-2 text-sm font-bold text-sky-500 hover:gap-3 transition-all duration-300">
                    Project Details <ArrowRight size={16} />
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="glass-card bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-center !py-16 !px-8 md:!px-16 space-y-8 rounded-[3rem]">
         <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Building Chennai's Water Future</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
               Need a custom-designed water plant for your institution or factory? Our experts are ready for a technical consultation.
            </p>
         </div>
         <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:8428665293" className="px-10 py-5 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-all shadow-xl shadow-black/20">
               Call 8428665293
            </a>
         </div>
      </section>
    </div>
  );
}
