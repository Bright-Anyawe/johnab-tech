"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  type?: "chars" | "words";
  className?: string;
  delay?: number;
  tag?: string;
}

export default function AnimatedText({ children, type = "chars", className = "", delay = 0, tag = "span" }: AnimatedTextProps) {
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
      <motion.span initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} style={{ display: "inline-block", whiteSpace: "pre-wrap" }}>
        {parts.map((part, i) => (
          <motion.span key={i} variants={child} style={{ display: "inline-block", overflow: "hidden" }}>
            <span style={{ display: "inline-block", transform: "translateZ(0)" }}>{part}</span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
