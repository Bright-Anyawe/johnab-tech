import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bullets, SectionHeading } from "@/components/legal/LegalBlocks";

export const metadata: Metadata = {
  title: "Terms & Conditions | JOHNAB Technologies Limited",
  description:
    "The Terms & Conditions governing services, payments, and use of the JOHNAB Technologies Limited website.",
};

const EFFECTIVE_DATE = "30th July, 2026";

const services = [
  "Website Design & Development",
  "Mobile App Development",
  "Business Automation",
  "Brand Identity Design",
  "AI Video Creation",
  "Website & Social Media Management",
  "Video Editing",
  "Graphic Design",
  "Facebook & Instagram Advertising",
  "AI Consulting",
  "Digital Marketing",
  "Other related technology services",
];

const projectAgreement = [
  "Project scope",
  "Deliverables",
  "Timeline",
  "Pricing",
  "Payment structure",
  "Refund policy",
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <header>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Legal</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-muted">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        <p className="mt-8 text-base leading-8 text-slate-300">
          Welcome to JOHNAB Technologies Limited. By engaging our services, making payments, or using
          our website, you agree to these Terms &amp; Conditions.
        </p>

        <SectionHeading>1. About Us</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          JOHNAB Technologies Limited provides professional digital and technology services, including
          but not limited to:
        </p>
        <Bullets items={services} />

        <SectionHeading>2. Project Agreement</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Before work begins, both parties will agree on:
        </p>
        <Bullets items={projectAgreement} />

        <div className="mt-12 rounded-2xl border border-white/10 bg-panel p-6">
          <p className="text-base leading-8 text-slate-300">
            Payments and cancellations are governed by our{" "}
            <Link href="/refund-policy" className="font-bold text-gold transition hover:underline">
              Refund Policy
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
