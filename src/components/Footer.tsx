import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="liquid-glass mt-auto rounded-t-[3rem] p-12 shadow-2xl">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg">
              <span className="text-2xl font-bold text-white">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-foreground tracking-tight">Valli Enterprises</span>
              <span className="text-xs font-medium text-sky-500 uppercase tracking-[0.2em]">Purity Guaranteed</span>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Dedicated to providing Chennai with the highest quality water treatment solutions. 
            We study your water first, then provide honest, reliable solutions that last.
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 hover:bg-sky-500/10 hover:text-sky-500 transition-all">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 hover:bg-sky-500/10 hover:text-sky-500 transition-all">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 hover:bg-sky-500/10 hover:text-sky-500 transition-all">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="tel:8428665293" className="flex items-start gap-3 text-foreground/70 hover:text-primary transition-colors group">
                <div className="mt-1 p-2 rounded-lg bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors">
                  <Phone className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p>8428665293</p>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:vallienterprises.vi@gmail.com" className="flex items-start gap-3 text-foreground/70 hover:text-primary transition-colors group">
                <div className="mt-1 p-2 rounded-lg bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                  <Mail className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="break-all">vallienterprises.vi@gmail.com</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground">Visit Us</h3>
          <div className="flex items-start gap-3 text-foreground/70 group">
            <div className="mt-1 p-2 rounded-lg bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors">
              <MapPin className="h-4 w-4 text-indigo-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <address className="not-italic leading-relaxed">
                Shop: 9C, VGN Stafford road,<br />
                Newry Sanctum, Thirumalaivasan nagar,<br />
                Thirumullaivoyal, Chennai.
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-black/5 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} Valli Enterprises. All Rights Reserved. | Purity in Every Drop</p>
      </div>
    </footer>
  );
}
