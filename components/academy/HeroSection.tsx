"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink py-28">
      <div className="hero-animated-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-black text-gold shadow-glow"
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          JOHNAB Academy — Enrollments Open
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-8 text-[42px] font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[72px]"
        >
          Master{" "}
          <span className="gold-text">High-Income AI Skills</span>
          <br />
          <span className="text-4xl sm:text-5xl lg:text-[56px]">
            No Experience Needed
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-400"
        >
          From zero to earning — learn AI video creation, web development,
          graphics, chatbots, ads, and digital product design. Complete
          step-by-step training with lifetime access.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#pricing"
            className="gold-button inline-flex items-center gap-3 rounded-xl px-10 py-4 text-base font-black text-black shadow-glow ring-1 ring-gold/20 transition hover:brightness-110"
          >
            Enroll Now <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-gold/60 px-10 py-4 text-base font-black text-gold transition hover:bg-gold/10"
          >
            <Play size={18} aria-hidden /> Watch Preview
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> 10+ Modules
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> Lifetime Access
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> Hands-on Projects
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> Certificate
          </span>
        </motion.div>
      </div>
    </section>
  );
}
