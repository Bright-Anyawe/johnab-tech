"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

const academyFeatures = [
  { title: "Practical Training", description: "Hands-on projects" },
  { title: "Expert Mentors", description: "Industry professionals" },
  { title: "Lifetime Access", description: "Learn at your pace" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 bg-panel">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto flex min-h-[340px] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">What We Do</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Our <span className="gold-text">Services</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted">
            Comprehensive digital and AI solutions designed to elevate your business and drive
            measurable results.
          </p>
        </motion.div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1340px] px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                <ServiceCard service={service} featured={service.id === "ai-video-creation"} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="appointment"
        className="relative overflow-hidden border-y border-white/10 bg-panel py-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_96px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,8,0.20),transparent_38%)]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-gold/40 bg-gold/10 text-gold shadow-glow">
            <GraduationCap size={38} aria-hidden />
          </div>
          <p className="gold-text mt-9 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Johnab Academy
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Learn High-Income Digital & AI Skills
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-muted">
            Practical, step-by-step training to help beginners and professionals earn with digital
            and AI skills. Transform your career with hands-on learning from industry experts.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {academyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="reference-card rounded-lg px-6 py-7 text-center"
              >
                <h3 className="text-base font-black text-white">{feature.title}</h3>
                <p className="mt-3 text-base text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="gold-button mt-14 inline-flex min-h-16 items-center justify-center gap-3 rounded-xl px-12 text-lg font-black text-black transition"
          >
            Visit Academy Landing Page <ArrowRight size={20} aria-hidden />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
