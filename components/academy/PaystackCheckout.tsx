"use client";

import { useState, useEffect, useCallback } from "react";
import { CreditCard, ArrowRight, Loader2, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

interface PaystackCheckoutProps {
  amount?: number;
  usdAmount?: number;
  productName?: string;
  onSuccess?: (reference: string) => void;
}

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

export default function PaystackCheckout({
  amount = 16000,
  usdAmount = 10,
  productName = "AI Mastery Class",
  onSuccess,
}: PaystackCheckoutProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

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

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      ref: generateRef(),
      metadata: { product: productName },
      onSuccess: (transaction) => {
        setStatus("success");
        setLoading(false);
        onSuccess?.(transaction.reference);
      },
      onCancel: () => {
        setLoading(false);
        setErrorMsg("Payment was cancelled");
        setStatus("error");
      },
    });

    handler.openIframe();
  }, [email, amount, productName, onSuccess, scriptLoaded]);

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <CheckCircle size={48} className="mx-auto text-emerald-400" />
        <h3 className="mt-4 text-xl font-black text-white">
          Payment Successful!
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          You now have access to {productName}. Check your email for details.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 p-8 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-black shadow-glow mx-auto">
        <CreditCard size={26} aria-hidden />
      </div>
      <h3 className="mt-4 text-xl font-black text-white">
        Pay with Card (Paystack)
      </h3>
      <p className="mt-1 text-sm text-slate-400">
        Secure online payment via Paystack
      </p>

      <div className="mt-6 space-y-4">
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
          className="gold-button inline-flex w-full items-center justify-center gap-3 rounded-xl px-10 py-4 text-base font-black text-black shadow-glow ring-1 ring-gold/20 transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Pay ₦{amount.toLocaleString()} (${usdAmount}) & Enroll
              <ArrowRight size={18} aria-hidden />
            </>
          )}
        </button>

        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-sm text-red-400">
            <XCircle size={16} />
            {errorMsg}
          </div>
        )}

        <p className="text-xs text-muted">
          Secured by Paystack. Your card details are safe.
        </p>

        <Link
          href="/"
          className="mt-4 inline-block text-xs text-muted underline transition hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
