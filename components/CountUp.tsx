"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string | number;
  duration?: number; // ms for each direction
  hold?: number; // ms to hold at ends
  delay?: number; // ms initial delay before starting
  className?: string;
  /** When true, do not pause when out-of-view or on hover/focus */
  alwaysOn?: boolean;
}

export default function CountUp({ value, duration = 1400, hold = 30000, delay = 0, className, alwaysOn = false }: CountUpProps) {
  const targetStr = String(value);
  const suffix = /\D+$/.exec(targetStr)?.[0] ?? "";
  const numeric = Math.round(parseFloat(targetStr.replace(/[^0-9.]/g, "")) || 0);

  const [display, setDisplay] = useState<string>(suffix ? `0${suffix}` : "0");

  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const accumulatedRef = useRef<number>(0); // ms already elapsed in current animation
  const directionRef = useRef<1 | -1>(1);
  const phaseRef = useRef<"idle" | "animating" | "holding">("idle");
  const pausedRef = useRef<boolean>(false);
  const holdEndRef = useRef<number | null>(null);
  const delayEndRef = useRef<number | null>(null);
  const remainingHoldRef = useRef<number | null>(null);
  const remainingDelayRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const prefersReduced = useReducedMotion();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const stepRef = useRef<(ts: number) => void>(() => {});
  const elRef = useRef<HTMLSpanElement | null>(null);
  const hasStartedRef = useRef<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [cycleState, setCycleState] = useState<string>("idle");

  // core step function (uses refs so safe to call from anywhere)
  stepRef.current = (ts: number) => {
    if (!mountedRef.current) return;
    if (pausedRef.current) {
      // keep RAF alive but do nothing while paused
      rafRef.current = requestAnimationFrame(stepRef.current);
      return;
    }

    if (startTimeRef.current === null) startTimeRef.current = ts;
    const delta = ts - startTimeRef.current;
    const totalElapsed = accumulatedRef.current + delta;
    const progress = Math.min(1, totalElapsed / duration);
    const eased = easeOutCubic(progress);
    const current = directionRef.current === 1 ? Math.round(eased * numeric) : Math.round((1 - eased) * numeric);
    setDisplay(suffix ? `${current}${suffix}` : String(current));

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(stepRef.current);
    } else {
      // finished animation
      setDisplay(suffix ? `${directionRef.current === 1 ? numeric : 0}${suffix}` : String(directionRef.current === 1 ? numeric : 0));
      phaseRef.current = "holding";
      setCycleState("Holding");
      const now = performance.now();
      holdEndRef.current = now + hold;
      timeoutRef.current = window.setTimeout(() => {
        if (!mountedRef.current) return;
        timeoutRef.current = null;
        phaseRef.current = "animating";
        directionRef.current = directionRef.current === 1 ? -1 : 1;
        setCycleState(directionRef.current === 1 ? "Counting up" : "Counting down");
        accumulatedRef.current = 0;
        startTimeRef.current = null;
        rafRef.current = requestAnimationFrame(stepRef.current);
      }, hold);
    }
  };

  const startAnimating = useCallback(() => {
    phaseRef.current = "animating";
    directionRef.current = 1;
    accumulatedRef.current = 0;
    startTimeRef.current = null;
    setCycleState("Counting up");
    rafRef.current = requestAnimationFrame(stepRef.current);
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    if (!alwaysOn && (prefersReduced || numeric <= 0)) {
      setDisplay(suffix ? `${numeric}${suffix}` : String(numeric));
      return () => {
        mountedRef.current = false;
      };
    }

    const clearAll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      rafRef.current = null;
      timeoutRef.current = null;
      startTimeRef.current = null;
      accumulatedRef.current = 0;
      phaseRef.current = "idle";
      holdEndRef.current = null;
      delayEndRef.current = null;
      remainingHoldRef.current = null;
      remainingDelayRef.current = null;
    };

    // Do not auto-start on mount; start is controlled by the IntersectionObserver
    phaseRef.current = "idle";
    hasStartedRef.current = false;

    // If alwaysOn, start animating immediately (respecting initial delay)
    if (alwaysOn && numeric > 0) {
      hasStartedRef.current = true;
      if (delay && delay > 0) {
        delayEndRef.current = performance.now() + delay;
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null;
          delayEndRef.current = null;
          startAnimating();
        }, delay);
      } else {
        startAnimating();
      }
    }

    return () => {
      mountedRef.current = false;
      clearAll();
    };
  }, [numeric, suffix, duration, hold, delay, prefersReduced, startAnimating, alwaysOn]);

  // pause/resume handlers for hover
  const pause = useCallback(() => {
    if (pausedRef.current) return;
    pausedRef.current = true;
    // cancel raf
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    // accumulate elapsed if animating
    if (phaseRef.current === "animating" && startTimeRef.current) {
      accumulatedRef.current += performance.now() - startTimeRef.current;
      startTimeRef.current = null;
    }
    // if holding, compute remainingHold and clear timeout
    if (phaseRef.current === "holding" && timeoutRef.current && holdEndRef.current) {
      const remain = Math.max(0, holdEndRef.current - performance.now());
      remainingHoldRef.current = remain;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      holdEndRef.current = null;
    }
    // if idle and delay pending
    if (phaseRef.current === "idle" && timeoutRef.current && delayEndRef.current) {
      const remain = Math.max(0, delayEndRef.current - performance.now());
      remainingDelayRef.current = remain;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      delayEndRef.current = null;
    }
  }, []);

  const resume = useCallback(() => {
    if (!pausedRef.current) return;
    pausedRef.current = false;
    if (phaseRef.current === "animating") {
      // resume RAF loop
      startTimeRef.current = null;
      rafRef.current = requestAnimationFrame(stepRef.current);
    } else if (phaseRef.current === "holding") {
      const remain = remainingHoldRef.current ?? 0;
      if (remain > 0) {
        holdEndRef.current = performance.now() + remain;
        timeoutRef.current = window.setTimeout(() => {
          if (!mountedRef.current) return;
          timeoutRef.current = null;
          phaseRef.current = "animating";
          directionRef.current = directionRef.current === 1 ? -1 : 1;
          accumulatedRef.current = 0;
          startTimeRef.current = null;
          rafRef.current = requestAnimationFrame(stepRef.current);
        }, remain);
      } else {
        // immediate flip
        phaseRef.current = "animating";
        directionRef.current = directionRef.current === 1 ? -1 : 1;
        accumulatedRef.current = 0;
        startTimeRef.current = null;
        rafRef.current = requestAnimationFrame(stepRef.current);
      }
      remainingHoldRef.current = null;
    } else if (phaseRef.current === "idle") {
      const remain = remainingDelayRef.current ?? 0;
      if (remain > 0) {
        delayEndRef.current = performance.now() + remain;
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null;
          delayEndRef.current = null;
          startAnimating();
        }, remain);
      } else {
        startAnimating();
      }
      remainingDelayRef.current = null;
    }
  }, [startAnimating]);

  // Intersection observer: start when the element enters the viewport
  useEffect(() => {
    if (numeric <= 0 || alwaysOn) return;
    if (prefersReduced) return;
    const el = elRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start or resume
            if (!hasStartedRef.current) {
              hasStartedRef.current = true;
              if (delay && delay > 0) {
                timeoutRef.current = window.setTimeout(() => {
                  timeoutRef.current = null;
                  startAnimating();
                }, delay);
              } else {
                startAnimating();
              }
            } else {
              // resumed
              resume();
            }
          } else {
            // pause when out of view
            pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, numeric, pause, resume, startAnimating, prefersReduced, alwaysOn]);

  // Ensure always-on instances start even if the IntersectionObserver is skipped
  useEffect(() => {
    if (!alwaysOn) return;
    if (numeric <= 0) return;
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    if (delay && delay > 0) {
      delayEndRef.current = performance.now() + delay;
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        delayEndRef.current = null;
        startAnimating();
      }, delay);
    } else {
      startAnimating();
    }
  }, [alwaysOn, numeric, delay, startAnimating]);
  
  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      ref={elRef}
      onPointerEnter={!alwaysOn ? () => { setTooltipVisible(true); pause(); } : undefined}
      onPointerLeave={!alwaysOn ? () => { setTooltipVisible(false); resume(); } : undefined}
      onFocus={!alwaysOn ? () => { setTooltipVisible(true); pause(); } : undefined}
      onBlur={!alwaysOn ? () => { setTooltipVisible(false); resume(); } : undefined}
    >
      {display}
      <span
        role="status"
        aria-hidden={!tooltipVisible}
        className={`countup-tooltip pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-white transition-opacity duration-150 ${tooltipVisible ? "opacity-100" : "opacity-0"}`}
      >
        {cycleState}
      </span>
    </span>
  );
}
