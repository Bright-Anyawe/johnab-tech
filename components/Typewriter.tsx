"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  loop?: boolean;
  speed?: number; // ms per char
  pause?: number; // ms between words
  className?: string;
  cursor?: string;
}

export default function Typewriter({
  texts,
  loop = true,
  speed = 60,
  pause = 900,
  className = "",
  cursor = "|",
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (reduce) {
      setDisplay(texts[0] ?? "");
      return;
    }

    const current = texts[index] ?? "";
    let timeout = 0;

    if (!deleting && subIndex <= current.length) {
      setDisplay(current.slice(0, subIndex));
      timeout = window.setTimeout(() => setSubIndex((s) => s + 1), speed);
    } else if (deleting && subIndex >= 0) {
      setDisplay(current.slice(0, subIndex));
      timeout = window.setTimeout(() => setSubIndex((s) => s - 1), speed / 2);
    } else {
      if (!deleting) {
        timeout = window.setTimeout(() => setDeleting(true), pause);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
        timeout = window.setTimeout(() => setSubIndex(0), speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause, reduce]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span aria-hidden className="ml-2 inline-block opacity-90">
        {cursor}
      </span>
    </span>
  );
}
