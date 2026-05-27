"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  // Lenis smooth scroll
  useEffect(() => {
    if (shouldReduce) return;
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, [shouldReduce]);

  // Pointer-based parallax variables
  useEffect(() => {
    let rafPending = false;

    const onPointer = (e: PointerEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth; // approx -0.5..0.5
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      const px = x * 40; // max offset px horizontally
      const py = y * 40; // max offset px vertically

      // update CSS vars for components to read
      document.documentElement.style.setProperty("--pointer-x-px", `${px}`);
      document.documentElement.style.setProperty("--pointer-y-px", `${py}`);

      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        const particles = document.getElementById("tsparticles-hero");
        if (particles) {
          particles.style.transform = `translate3d(${px * 0.55}px, ${py * 0.55}px, 0)`;
        }
        rafPending = false;
      });
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer as any);
  }, []);

  const pageMotion = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} initial={pageMotion.initial} animate={pageMotion.animate} exit={pageMotion.exit} transition={pageMotion.transition} className="min-h-screen">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
