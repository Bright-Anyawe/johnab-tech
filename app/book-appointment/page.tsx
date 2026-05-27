"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";

const bookingOptions = [
  {
    title: "One-on-One Mentorship",
    description: "Personal live session where I teach you exactly what you want to learn.",
    price: "$70",
    suffix: "/ lifetime",
    cta: "Book Mentorship",
    href: "https://api.whatsapp.com/send?phone=2348159574995&text=Hi%2C%20I%20want%20to%20book%20a%20One-on-One%20Mentorship%20session",
    icon: UserRound,
    popular: false,
    features: [
      "2-3 hours call",
      "3 times meetings",
      "Personalized curriculum",
      "Screen sharing & demos",
      "Recording Allowed",
    ],
  },
  {
    title: "Johnab Academy Registration",
    description: "Full access to Johnab Academy training and all course materials.",
    price: "$10",
    suffix: "/ lifetime",
    cta: "Join Academy",
    href: "https://johnabtechnologieslimited.lovable.app/",
    icon: GraduationCap,
    popular: true,
    features: [
      "Full course library access",
      "Step-by-step tutorials",
      "Downloadable resources",
      "Community access",
      "Certificate on completion",
    ],
  },
];

const assurances = ["Secure Payment", "Money Back Guarantee", "Instant Access", "24/7 Support"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 bg-panel">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,8,0.16),transparent_34%)]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto flex min-h-[245px] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">Get Started</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Book a Session With <span className="gold-text">JohnAb</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Choose the perfect option to accelerate your learning and achieve your digital goals.
          </p>
        </motion.div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-8 md:grid-cols-2"
          >
            {bookingOptions.map((option) => {
              const Icon = option.icon;

              return (
                <motion.article
                  key={option.title}
                  variants={fadeUp}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="reference-card relative overflow-hidden rounded-lg border-gold/70 p-6"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10" />
                  {option.popular ? (
                    <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-black">
                      Popular
                    </span>
                  ) : null}

                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold">
                    <Icon size={25} aria-hidden />
                  </span>

                  <h2 className="mt-7 text-xl font-black tracking-tight text-white">{option.title}</h2>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{option.description}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="gold-text text-5xl font-black leading-none">{option.price}</span>
                    <span className="pb-1 text-sm text-muted">{option.suffix}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={17} className="shrink-0 text-gold" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="gold-button mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-black text-black transition"
                  >
                    {option.cta} <ArrowRight size={16} aria-hidden />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="mt-14 text-center"
          >
            <p className="text-sm text-slate-400">Trusted by students and professionals worldwide</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {assurances.map((assurance) => (
                <span
                  key={assurance}
                  className="inline-flex items-center gap-2 text-xs text-slate-400"
                >
                  <ShieldCheck size={14} className="text-gold" aria-hidden />
                  {assurance}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
