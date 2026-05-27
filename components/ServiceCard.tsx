import type { Service } from "@/types";
import {
  Film,
  Globe,
  Megaphone,
  Palette,
  PenTool,
  Settings,
  Share2,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  globe: Globe,
  phone: Smartphone,
  settings: Settings,
  palette: Palette,
  video: Video,
  share: Share2,
  film: Film,
  pen: PenTool,
  megaphone: Megaphone,
  sparkles: Sparkles,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <article
      className={`reference-card group flex min-h-[288px] flex-col items-start rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-2xl hover:shadow-gold/10 ${
        featured ? "border-gold/70" : ""
      }`}
    >
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
        <Icon size={27} aria-hidden />
      </span>
      <h3 className="mt-7 text-xl font-black tracking-tight text-white transition-transform duration-300 group-hover:translate-y-2">{service.title}</h3>
      <p className="mt-7 max-w-sm text-lg leading-7 text-muted transition-transform duration-300 group-hover:translate-y-2">{service.description}</p>
      <Link
        href="/contact"
        className="mt-auto inline-flex rounded-lg border-2 border-amberline px-4 py-2 text-sm font-black text-gold transition hover:bg-gold hover:text-black"
      >
        {service.ctaLabel}
      </Link>
    </article>
  );
}
