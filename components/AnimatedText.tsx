"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  type?: "chars" | "words";
  className?: string;
  /**
   * Applied to each word/character leaf span. Use for gradient text
   * (background-clip) — it cannot work on the outer wrapper when children
   * are animated with transforms/filters (stacking contexts break the clip).
   */
  textClassName?: string;
  delay?: number;
  tag?: string;
  /**
   * When true, the reveal is triggered on scroll-into-view (IntersectionObserver).
   * Defaults to false so the reveal fires on mount — correct for above-the-fold
   * content like the hero headline, where a missed observer callback would leave
   * words stuck at opacity 0.
   */
  inView?: boolean;
}

export default function AnimatedText({ children, type = "chars", className = "", textClassName = "", delay = 0, tag = "span", inView = false }: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag: any = tag;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03, delayChildren: delay } },
  };

  const child = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: shouldReduceMotion ? 0 : 0.56, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  const text = children || "";
  const parts = type === "chars" ? text.split("") : text.split(" ").map((w) => w + " ");

  return (
    <Tag className={className} aria-label={children}>
      <motion.span
        initial="hidden"
        {...(inView
          ? { whileInView: "show" as const, viewport: { once: true, amount: 0.3 } }
          : { animate: "show" as const })}
        variants={container}
        style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
      >
        {parts.map((part, i) => (
          <motion.span key={i} variants={child} style={{ display: "inline-block", overflow: "hidden" }}>
            <span className={textClassName || undefined} style={{ display: "inline-block", transform: "translateZ(0)" }}>{part}</span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
