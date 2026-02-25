import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container section-padding grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/40">
              <span className="text-lg font-bold">B</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">BizStay</span>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Corporate and family hotel booking partner across India. From 1 room
            to 500+, we make stays simple, comfortable, and cost-effective.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold text-slate-100">Quick Links</h3>
          <div className="flex flex-col gap-2 text-slate-400">
            <Link href="/about" className="transition hover:text-slate-100">
              About
            </Link>
            <Link href="/services" className="transition hover:text-slate-100">
              Services
            </Link>
            <Link href="/inquiry" className="transition hover:text-slate-100">
              Inquiry
            </Link>
            <Link href="/contact" className="transition hover:text-slate-100">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold text-slate-100">Contact</h3>
          <div className="space-y-2 text-slate-400">
            <p className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4" />
              <span>+91-98765-43210</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              <span>hello@bizstay.in</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span>Mumbai, Maharashtra, India</span>
            </p>
          </div>
          <div className="flex gap-3 pt-1 text-slate-400">
            <Link href="#" aria-label="BizStay on Facebook">
              <Facebook className="h-4 w-4 transition hover:text-slate-100" />
            </Link>
            <Link href="#" aria-label="BizStay on Instagram">
              <Instagram className="h-4 w-4 transition hover:text-slate-100" />
            </Link>
            <Link href="#" aria-label="BizStay on LinkedIn">
              <Linkedin className="h-4 w-4 transition hover:text-slate-100" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BizStay. All rights reserved.
      </div>
    </footer>
  );
}
