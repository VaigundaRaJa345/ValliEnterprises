import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div className="bg-primary/90 py-1 text-white shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex flex-wrap justify-between px-4 text-[10px] items-center sm:text-xs">
          <div className="flex gap-4">
            <a href="tel:8428665293" className="flex items-center gap-1 hover:text-sky-200 transition-colors">
              <Phone className="h-3 w-3" />
              <span>8428665293</span>
            </a>
            <a href="mailto:vallienterprises.vi@gmail.com" className="hidden items-center gap-1 hover:text-sky-200 transition-colors sm:flex">
              <Mail className="h-3 w-3" />
              <span>vallienterprises.vi@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>
      <nav className="liquid-glass mx-4 mt-2 rounded-2xl sm:mx-8">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 group-hover:scale-110 transition-transform">
              <Image 
                src="/logo.png" 
                alt="Valli Enterprises Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-none tracking-tight text-foreground sm:text-2xl">
                Valli <span className="text-gradient">Enterprises</span>
              </span>
              <span className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em]">
                Purity Redefined
              </span>
            </div>
          </Link>

          <div className="hidden gap-8 text-sm font-medium text-foreground/80 md:flex">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-semibold">Contact</Link>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
