"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/inquiry", label: "Inquiry" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/40">
            <span className="text-lg font-bold">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              BizStay
            </span>
            <span className="text-[11px] text-slate-400 sm:text-xs">
              Hotel Booking Partner
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-white ${
                  active ? "text-white" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/inquiry" className="btn-primary text-xs">
            Inquiry Now
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="container space-y-1 py-4 text-sm font-medium text-slate-200">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-3 py-2 transition hover:bg-white/5 ${
                    active ? "text-white" : "text-slate-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/inquiry"
              className="btn-primary mt-2 w-full justify-center text-xs"
              onClick={() => setOpen(false)}
            >
              Inquiry Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
