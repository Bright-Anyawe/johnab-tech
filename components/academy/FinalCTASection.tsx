"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, MessageCircle } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,189,8,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 mb-8">
            <Clock size={16} aria-hidden />
            Limited Time Offer
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Don&apos;t Let This{" "}
            <span className="gold-text">Opportunity</span> Pass You By
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-400">
            The AI revolution is happening right now. Those who master these
            skills today will dominate tomorrow&apos;s job market. Start earning
            with AI today!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
            <TrendingUp size={16} className="text-gold" aria-hidden />
            10+ Comprehensive Modules
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
            <Clock size={16} className="text-gold" aria-hidden />
            Lifetime Access
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
            <MessageCircle size={16} className="text-gold" aria-hidden />
            Private Support
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://selar.com/q5510a1774"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center gap-3 rounded-xl px-12 py-5 text-lg font-black text-black shadow-glow ring-1 ring-gold/20 transition hover:brightness-110"
          >
            Enroll Now — Limited Spots <ArrowRight size={20} aria-hidden />
          </a>
          <a
            href="https://wa.me/8159574995"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-gold/60 px-12 py-5 text-lg font-black text-gold transition hover:bg-gold/10"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
