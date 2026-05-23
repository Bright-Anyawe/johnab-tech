"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "5+", label: "Years" },
];

const academyFeatures = [
  { title: "Practical Training", description: "Hands-on projects" },
  { title: "Expert Mentors", description: "Industry professionals" },
  { title: "Lifetime Access", description: "Learn at your pace" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />

      <section id="home" className="circuit-surface relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto flex min-h-[560px] max-w-[1120px] flex-col items-center px-4 pb-14 pt-3 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-black text-gold shadow-glow"
          >
            <Sparkles size={16} aria-hidden />
            Empowering Businesses with AI
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="mt-9"
          >
            <h1 className="mx-auto max-w-5xl text-balance text-[42px] font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[70px]">
              <span className="block">Innovative Digital & AI</span>
              <span className="block">
                Solutions for <span className="gold-text">Modern</span>
              </span>
              <span className="gold-text block">Businesses</span>
            </h1>
            <p className="mt-8 text-xl font-semibold text-muted sm:text-2xl">
              We Build. We Automate. We Grow Brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="mt-12 flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="gold-button inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-8 text-base font-black text-black transition"
            >
              Book Appointment <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-gold bg-black/30 px-8 text-base font-black text-gold transition hover:bg-gold hover:text-black"
            >
              View Services
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.24 } },
            }}
            className="mt-20 grid w-full max-w-xl grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="text-4xl font-black text-gold">{stat.value}</p>
                <p className="mt-2 text-base text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-ink py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-black uppercase tracking-widest text-gold">What We Offer</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Our <span className="gold-text">Services</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Comprehensive digital and AI solutions to transform your business and accelerate
              growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                transition={{ duration: 0.42, ease: "easeOut" }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="gold-button inline-flex min-h-14 items-center justify-center rounded-xl px-12 text-base font-black text-black transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="relative overflow-hidden border-b border-white/10 bg-panel py-20"
      >
        <span id="appointment" className="absolute -top-24" aria-hidden />
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
