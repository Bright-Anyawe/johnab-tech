import { Globe, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/book-appointment" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "Business Automation",
  "AI Solutions",
  "Brand Design",
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-panel">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-lg font-black text-black">
              J
            </span>
            <span>
              <span className="block text-lg font-black uppercase leading-none text-white">
                Johnab
              </span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-muted">
                Technologies Limited
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-base leading-7 text-slate-400">
            Innovative Digital & AI Solutions for Modern Businesses. We Build. We Automate. We Grow
            Brands.
          </p>
        </div>

        <div>
          <h2 className="text-base font-black text-white">Quick Links</h2>
          <ul className="mt-6 space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-base text-slate-400 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-black text-white">Services</h2>
          <ul className="mt-6 space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link href="/services" className="text-base text-slate-400 transition hover:text-gold">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-black text-white">Contact Us</h2>
          <ul className="mt-6 space-y-4 text-base text-slate-400">
            <li>
              <a href="tel:+2348159574995" className="inline-flex items-center gap-3 transition hover:text-gold">
                <Phone size={17} className="text-gold" aria-hidden /> +234 815 957 4995
              </a>
            </li>
            <li>
              <a
                href="mailto:Johnabtechnologieslimited@gmail.com"
                className="inline-flex items-center gap-3 transition hover:text-gold"
              >
                <Mail size={17} className="text-gold" aria-hidden /> Johnabtechnologieslimited@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.Johnabtechnologieslimited.com"
                className="inline-flex items-center gap-3 transition hover:text-gold"
              >
                <Globe size={17} className="text-gold" aria-hidden /> www.Johnabtechnologieslimited.com
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCo8aJFeIlf6k8bYeXOMBq4A"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition hover:text-gold"
              >
                <Youtube size={17} className="text-gold" aria-hidden /> YouTube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
