"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import CountUp from "../components/CountUp";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedText from "../components/AnimatedText";
import HeroImage from "../components/HeroImage";
import Typewriter from "@/components/Typewriter";

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
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />

      <section id="home" className="relative overflow-hidden border-b border-white/10 bg-ink">
        {/* Hero image (next/image) with parallax and slow zoom */}
        <HeroImage />

        {/* Particles background (tsParticles via CDN) - sits above image */}
        <ParticlesBackground />

        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/60 to-ink z-20" />

        <div className="relative z-30 mx-auto flex min-h-[560px] max-w-[1120px] flex-col items-center px-4 pb-14 pt-3 text-center sm:px-6 lg:px-8">
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
              <div className="block">
                <AnimatedText type="words">Innovative Digital & AI</AnimatedText>
              </div>
              <div className="block">
                <AnimatedText type="words">Solutions for</AnimatedText>{" "}
                <AnimatedText type="words" className="gold-text inline-block">
                  Modern
                </AnimatedText>
              </div>
              <div className="gold-text block">
                <AnimatedText type="chars">Businesses</AnimatedText>
              </div>
            </h1>
            <div className="mt-8 text-xl font-semibold text-muted sm:text-2xl">
              <Typewriter texts={["We Build.", "We Automate.", "We Grow Brands."]} loop className="inline-block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="mt-12 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center items-center"
          >
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.995 }} transition={{ type: "spring", stiffness: 350 }}>
              <Link
                href="/book-appointment"
                className="gold-button inline-flex items-center justify-center gap-3 rounded-xl px-10 py-4 text-base font-black text-black transition shadow-glow ring-1 ring-gold/20"
              >
                Book Appointment <ArrowRight size={18} aria-hidden />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.24 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-gold bg-black/30 px-10 py-4 text-base font-black text-gold transition hover:bg-gold hover:text-black shadow-outline"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.24 } },
            }}
            className="mt-20 grid w-full max-w-xl grid-cols-3 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="text-5xl sm:text-6xl font-black text-gold">
                  <CountUp value={stat.value} delay={i * 550} hold={5000} alwaysOn />
                </p>
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
            href="https://johnabtechnologieslimited.lovable.app/"
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
