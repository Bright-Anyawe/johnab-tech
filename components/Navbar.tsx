"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Enroll Now", href: "https://johnabtechnologieslimited.lovable.app/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/services") {
      return pathname === "/services";
    }

    if (href === "/portfolio") {
      return pathname === "/portfolio";
    }

    if (href === "/contact") {
      return pathname === "/contact";
    }

    if (href === "/book-appointment") {
      return pathname === "/book-appointment";
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-lg font-black text-black shadow-glow">
            J
          </span>
          <span className="leading-none">
            <span className="block text-base font-black uppercase tracking-tight text-white">Johnab</span>
            <span className="mt-1 block text-xs uppercase tracking-wide text-muted">Technologies</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-extrabold transition-colors ${
                isActive(item.href) ? "text-gold" : "text-muted hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://johnabtechnologieslimited.lovable.app/"
            className="rounded-lg border-2 border-gold px-5 py-2.5 text-sm font-black text-gold transition hover:bg-gold hover:text-black"
          >
            Join Johnab Academy
          </Link>
          <Link
            href="https://calendly.com/johnabtechnologieslimited/30min"
            className="gold-button rounded-lg px-5 py-3 text-sm font-black text-black transition"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-white/10 bg-ink px-4 pb-5 pt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-bold text-slate-100 transition hover:bg-white/10 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link
                href="https://johnabtechnologieslimited.lovable.app/"
                className="rounded-lg border-2 border-gold px-5 py-3 text-center text-sm font-black text-gold"
                onClick={() => setIsOpen(false)}
              >
                Join Johnab Academy
              </Link>
              <Link
                href="https://calendly.com/johnabtechnologieslimited/30min"
                className="rounded-lg bg-gold px-5 py-3 text-center text-sm font-black text-black"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
