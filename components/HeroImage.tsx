"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroImageProps {
  src?: string;
  alt?: string;
}

export default function HeroImage({ src = "/Hero 2.mp4", alt = "Hero background" }: HeroImageProps) {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);
  const prefersReduced = useReducedMotion();
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);
  const [hasImage, setHasImage] = useState<boolean | null>(null);

  // Preload media (image or video) to detect missing file and show fallback
  useEffect(() => {
    let cancelled = false;
    if (isVideo) {
      try {
        const tester = document.createElement("video");
        tester.src = src;
        tester.onloadeddata = () => {
          if (!cancelled) setHasImage(true);
        };
        tester.onerror = () => {
          if (!cancelled) setHasImage(false);
        };
      } catch (e) {
        if (!cancelled) setHasImage(false);
      }
    } else {
      try {
        const tester = new window.Image();
        tester.src = src;
        tester.onload = () => {
          if (!cancelled) setHasImage(true);
        };
        tester.onerror = () => {
          if (!cancelled) setHasImage(false);
        };
      } catch (e) {
        if (!cancelled) setHasImage(false);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [src, isVideo]);

  useEffect(() => {
    if (prefersReduced) return;
    const el = parallaxRef.current;
    if (!el) return;

    const parallaxFactor = 0.08;
    let rafId: number | null = null;

    const onTick = () => {
      rafId = null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const raw = -rect.top * parallaxFactor;
      const clamped = Math.max(Math.min(Math.round(raw), 80), -80);

      // read pointer-based offsets set as CSS vars by AppProviders
      const rootStyles = getComputedStyle(document.documentElement);
      const pointerX = parseFloat(rootStyles.getPropertyValue("--pointer-x-px")) || 0;
      const pointerY = parseFloat(rootStyles.getPropertyValue("--pointer-y-px")) || 0;

      // apply a subtle fraction of pointer offset so the effect is gentle
      const px = pointerX * 0.28;
      const py = pointerY * 0.28;

      const combinedX = Math.round(px);
      const combinedY = Math.round(clamped + py);

      el.style.transform = `translate3d(${combinedX}px, ${combinedY}px, 0)`;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      rafId = requestAnimationFrame(onTick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReduced]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div ref={parallaxRef} className="absolute inset-0 hero-parallax">
        <div className="absolute inset-0 hero-image-scale">
          {hasImage === null ? (
            <div className="w-full h-full bg-gradient-to-br from-[#070707] via-[#0b0b0b] to-[#0f0f0f]" />
          ) : hasImage ? (
            isVideo ? (
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
            )
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#080808] via-[#111111] to-[#0b0b0b]" />
          )}
        </div>
      </div>
    </div>
  );
}
