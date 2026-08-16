"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  UserRound,
  CreditCard,
  Loader2,
  CheckCircle,
  XCircle,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        ref: string;
        metadata?: Record<string, unknown>;
        onSuccess: (transaction: { reference: string }) => void;
        onCancel: () => void;
      }) => { openIframe: () => void };
    };
  }
}

const paths = [
  {
    title: "One-on-One Mentorship",
    description: "Personal live session where I teach you exactly what you want to learn.",
    price: "₦95,000",
    usd: "$70",
    suffix: "",
    cta: "Book Mentorship",
    href: "https://api.whatsapp.com/send?phone=2348159574995&text=Hi%2C%20I%20want%20to%20book%20a%20One-on-One%20Mentorship%20session",
    icon: UserRound,
    popular: false,
    payAmount: 95000,
    usdAmount: 70,
    features: [
      "2 hours call",
      "3-4 times meetings",
      "Personalized curriculum",
      "Screen sharing & demos",
      "Recording Allowed",
      "One month support",
    ],
  },
  {
    title: "Johnab Academy Registration",
    description: "Full access to Johnab Academy training and all course materials.",
    price: "₦16,000",
    usd: "$10",
    suffix: "",
    cta: "Join Academy",
    href: "#pricing",
    icon: GraduationCap,
    popular: true,
    payAmount: 16000,
    usdAmount: 10,
    features: [
      "Full course library access",
      "Step-by-step tutorials",
      "Downloadable resources",
      "Community access",
      "Certificate on completion",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function MentorshipCheckout({
  path,
  onBack,
}: {
  path: (typeof paths)[number] & { payAmount: number; usdAmount: number };
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [reference, setReference] = useState("");

  useEffect(() => {
    if (document.getElementById("paystack-script")) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "paystack-script";
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      const el = document.getElementById("paystack-script");
      if (el) el.remove();
    };
  }, []);

  const generateRef = () =>
    `JA-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

  const handlePayment = useCallback(() => {
    if (!email || !scriptLoaded) return;
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;
    const ref = generateRef();

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: path.payAmount * 100,
      ref,
      metadata: { product: path.title },
      onSuccess: (transaction) => {
        setReference(transaction.reference);
        setStatus("success");
        setLoading(false);
      },
      onCancel: () => {
        setLoading(false);
        setErrorMsg("Payment was cancelled");
        setStatus("error");
      },
    });

    handler.openIframe();
  }, [email, path, scriptLoaded]);

  if (status === "success") {
    const whatsappMsg = encodeURIComponent(
      `Hi, I just paid for ${path.title} (${path.price} / ${path.usd}).\nPayment Reference: ${reference}\nEmail: ${email}\n\nPlease confirm and approve my payment.`
    );

    return (
      <div className="text-center">
        <CheckCircle size={48} className="mx-auto text-emerald-400" />
        <h3 className="mt-4 text-lg font-black text-white">Payment Successful!</h3>
        <p className="mt-2 text-sm text-slate-400">
          Reference: {reference}
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=2348159574995&text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-600"
        >
          <MessageCircle size={18} />
          Confirm Payment on WhatsApp
        </a>
        <button
          type="button"
          onClick={onBack}
          className="mt-3 w-full text-sm text-muted underline transition hover:text-white"
        >
          Back to plans
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-black shadow-glow mx-auto">
        <CreditCard size={26} aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-black text-white">Pay with Card</h3>
      <p className="mt-1 text-sm text-slate-400">
        {path.price} ({path.usd}) — Secure payment via Paystack
      </p>

      <div className="mt-5 space-y-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-gold/50"
          required
        />
        <button
          type="button"
          onClick={handlePayment}
          disabled={loading || !email || !scriptLoaded}
          className="gold-button inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-black text-black transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Pay {path.price} ({path.usd}) & {path.title === "Johnab Academy Registration" ? "Join" : "Book"}
              <ArrowRight size={16} aria-hidden />
            </>
          )}
        </button>
        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-sm text-red-400">
            <XCircle size={16} />
            {errorMsg}
          </div>
        )}
        <button
          type="button"
          onClick={onBack}
          className="w-full text-xs text-muted underline transition hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function PathsSection() {
  const [checkoutPath, setCheckoutPath] = useState<string | null>(null);

  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">Choose Your Path</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Learn With <span className="gold-text">JohnAb</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Pick the option that fits how you want to learn. Prices in Naira, with the USD equivalent in brackets.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-8 md:mx-auto md:max-w-3xl md:grid-cols-2"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            const isCheckout = checkoutPath === path.title && "payAmount" in path;

            return (
              <motion.article
                key={path.title}
                variants={fadeUp}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="reference-card relative overflow-hidden rounded-lg border-gold/70 p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10" />
                {path.popular ? (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-black">
                    Popular
                  </span>
                ) : null}

                {isCheckout ? (
                  <MentorshipCheckout
                    path={path as typeof paths[number] & { payAmount: number; usdAmount: number }}
                    onBack={() => setCheckoutPath(null)}
                  />
                ) : (
                  <>
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold">
                      <Icon size={25} aria-hidden />
                    </span>

                    <h3 className="mt-7 text-xl font-black tracking-tight text-white">{path.title}</h3>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{path.description}</p>

                    <div className="mt-5 flex flex-wrap items-end gap-2">
                      <span className="gold-text text-5xl font-black leading-none">{path.price}</span>
                      <span className="pb-1 text-sm text-muted">
                        ({path.usd}) {path.suffix}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {path.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 size={17} className="shrink-0 text-gold" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setCheckoutPath(path.title)}
                      className="gold-button mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-black text-black transition"
                    >
                      {path.cta} <ArrowRight size={16} aria-hidden />
                    </button>
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
