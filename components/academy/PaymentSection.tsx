"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  User,
  Hash,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const bankDetails = [
  { icon: Hash, label: "Account Number", value: "1959349693" },
  { icon: User, label: "Account Name", value: "JOHN ABU ANTEYI" },
  { icon: Building2, label: "Bank Name", value: "ACCESS BANK NIGERIA" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function PaymentSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="pricing" className="bg-panel py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">
            Enroll Now
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Secure Your Spot in{" "}
            <span className="gold-text">AI Mastery Class</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Choose your preferred payment method and get instant access.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid gap-8 md:mx-auto md:max-w-3xl"
        >
          {/* Bank Transfer */}
          <motion.div
            variants={fadeUp}
            className="reference-card rounded-2xl border border-gold/30 p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-black shadow-glow">
                <Building2 size={26} aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  Bank Transfer
                </h3>
                <p className="text-sm text-slate-400">
                  Pay directly to our account
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {bankDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-gold/30"
                >
                  <div className="flex items-center gap-3">
                    <detail.icon
                      size={18}
                      className="text-gold shrink-0"
                      aria-hidden
                    />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">
                        {detail.label}
                      </p>
                      <p className="font-bold text-white">{detail.value}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(detail.value, detail.label)}
                    className="rounded-lg p-2 text-sm text-gold transition hover:bg-gold/10"
                  >
                    {copied === detail.label ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-4 text-center text-sm text-slate-300">
              After payment, contact us on WhatsApp for confirmation and
              instant access.
            </div>
          </motion.div>

          {/* Selar Payment */}
          <motion.div
            variants={fadeUp}
            className="reference-card rounded-2xl border border-white/10 p-8 text-center"
          >
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-black shadow-glow mx-auto">
              <CreditCard size={26} aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-black text-white">
              Pay with Card (Selar)
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Secure online payment via Selar
            </p>
            <a
              href="https://selar.com/q5510a1774"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button mt-6 inline-flex items-center gap-3 rounded-xl px-10 py-4 text-base font-black text-black shadow-glow ring-1 ring-gold/20 transition hover:brightness-110"
            >
              <CreditCard size={18} aria-hidden /> Pay Now & Enroll{" "}
              <ArrowRight size={18} aria-hidden />
            </a>
            <p className="mt-4 text-xs text-muted">🔒 Secure payment</p>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          Need help? Contact us on WhatsApp —{" "}
          <a
            href="https://wa.me/8159574995"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Chat now
          </a>
        </motion.p>
      </div>
    </section>
  );
}
