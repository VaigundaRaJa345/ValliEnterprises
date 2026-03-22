"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 z-[100] w-full transition-all duration-500 px-6 py-4`}>
      <nav
        className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 px-8 py-3 ${isScrolled
          ? "liquid-glass shadow-xl py-3 scale-[0.98]"
          : "bg-white/10 backdrop-blur-sm border border-white/10 py-5"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative h-[62px] w-56 md:w-80 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Image 
                src="/header-logo.png" 
                alt="Valli Enterprises" 
                fill 
                className="object-contain object-left mix-blend-multiply" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-foreground/80 hover:text-primary transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <a href="tel:8428665293" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold shimmer-button shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Phone className="h-4 w-4" />
              8428665293
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}>
            {isMobMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-6 top-32 z-50 p-8 glass-card rounded-[2.5rem] flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobMenuOpen(false)}
                className="text-2xl font-bold text-foreground text-center"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
