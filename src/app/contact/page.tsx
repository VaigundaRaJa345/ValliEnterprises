"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const interestedProduct = searchParams.get('product') || "";
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="liquid-glass p-12 text-center space-y-6 rounded-[2rem]"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg">
          <Send className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">Inquiry Received!</h2>
        <p className="text-foreground/60 leading-relaxed">
          Thank you for reaching out to Valli Enterprises. <br />
          Our technical experts will study your requirement and contact you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-8 py-3 rounded-xl bg-foreground text-background font-bold hover:scale-105 transition-all"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="liquid-glass p-8 md:p-12 space-y-6 rounded-[2.5rem] border border-white/10"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">Send an Inquiry</h2>
        <p className="text-foreground/50 text-sm">Tell us about your water problem. We're here to help.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Your Name</label>
          <input required placeholder="eg. Karthik Raja" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Phone Number</label>
          <input required type="tel" placeholder="eg. 98400XXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Interested Solution</label>
        <select defaultValue={interestedProduct} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-sky-500 transition-all outline-none appearance-none">
          <option value="" className="bg-slate-900">Select a Service</option>
          <option value="domestic-ro" className="bg-slate-900">Domestic RO</option>
          <option value="commercial-ro" className="bg-slate-900">Commercial RO</option>
          <option value="iron-removal" className="bg-slate-900">Iron Removal</option>
          <option value="water-softener" className="bg-slate-900">Water Softener</option>
          <option value="stp-etp" className="bg-slate-900">STP/ETP Plant</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Describe your water problem</label>
        <textarea required rows={4} placeholder="Tell us about the smell, color, or scaling issues you faces..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-sky-500 transition-all outline-none resize-none" />
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-sky-500 py-4 font-bold text-white transition-all hover:bg-sky-600 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </motion.form>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-20 mb-20">
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Let's Start Your <span className="text-gradient">Purity Journey</span>
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          Whether it's a small home or a multi-million liter industrial plant, we have the honest expertise you need.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info Col */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Corporate Office</h2>
            <div className="flex items-start gap-4">
               <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500">
                  <MapPin className="h-6 w-6" />
               </div>
               <p className="text-lg text-foreground/70 leading-relaxed">
                  Shop: 9C, VGN Stafford road,<br />
                  Newry Sanctum, Thirumalaivasan nagar,<br />
                  Thirumullaivoyal, Chennai.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="tel:8428665293" className="glass-card flex flex-col items-center text-center space-y-3 group">
              <Phone className="h-8 w-8 text-sky-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-foreground">8428665293</span>
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Phone</span>
            </a>
            <a href="mailto:vallienterprises.vi@gmail.com" className="glass-card flex flex-col items-center text-center space-y-3 group">
              <Mail className="h-8 w-8 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-foreground break-all text-sm sm:text-base">vallienterprises.vi@gmail.com</span>
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Email</span>
            </a>
          </div>

          <div className="liquid-glass p-8 rounded-[2rem] space-y-6">
            <h3 className="text-xl font-bold text-foreground">Why talk to us?</h3>
            <ul className="space-y-4">
              {[
                { title: "Direct Engineer Call", desc: "No sales bots. Talk directly to a water expert.", icon: MessageSquare },
                { title: "Same Day Consultation", desc: "We aim to respond within 2-4 business hours.", icon: Clock }
              ].map(item => (
                <li key={item.title} className="flex gap-4">
                   <div className="shrink-0 p-2 rounded-lg bg-sky-500/5 text-sky-500">
                      <item.icon className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Col */}
        <Suspense fallback={<div className="liquid-glass h-[600px] flex items-center justify-center">Loading Form...</div>}>
           <ContactForm />
        </Suspense>
      </div>

      {/* Map Placeholder */}
      <section className="liquid-glass rounded-[3rem] h-[400px] relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-sky-900/10" />
         <div className="relative text-center space-y-4">
            <MapPin className="h-12 w-12 text-sky-500 mx-auto animate-bounce" />
            <p className="text-xl font-bold text-foreground">Google Maps Integration</p>
            <p className="text-foreground/50 max-w-xs mx-auto text-sm">Find us at Newry Sanctum, Thirumullaivoyal, Chennai.</p>
         </div>
      </section>
    </div>
  );
}
