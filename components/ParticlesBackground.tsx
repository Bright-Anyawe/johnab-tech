"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    let mounted = true;
    const containerId = "tsparticles-hero";
    const scriptId = "tsparticles-cdn-script";

    const loadParticles = () => {
      try {
        // @ts-ignore
        const ts = (window as any).tsParticles;
        if (!ts) return;

        // avoid double-init
        const already = ts.dom && ts.dom.find((d: any) => d?.container?.id === containerId);
        if (already) return;

        const options = {
          fpsLimit: 60,
          fullScreen: { enable: false },
          detectRetina: true,
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: Math.max(12, Math.round(window.innerWidth / 120)), density: { enable: false } },
            color: { value: ["#ffd36b", "#ffc914", "#d79a00"] },
            shape: { type: ["triangle", "circle"] },
            opacity: { value: 0.6, random: { enable: true, minimumValue: 0.18 } },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 0.5, direction: "none", outModes: { default: "out" } },
            links: { enable: true, distance: 140, color: "#d79a00", opacity: 0.06, width: 1 },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.25 },
              push: { quantity: 2 },
            },
          },
        };

        ts.load(containerId, options);
      } catch (err) {
        // silent
      }
    };

    if ((window as any).tsParticles) {
      loadParticles();
    } else if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2.11.1/tsparticles.bundle.min.js";
      script.async = true;
      script.onload = () => {
        if (!mounted) return;
        loadParticles();
      };
      document.body.appendChild(script);
    } else {
      const poll = setInterval(() => {
        if ((window as any).tsParticles) {
          clearInterval(poll);
          loadParticles();
        }
      }, 100);
    }

    return () => {
      mounted = false;
      try {
        const ts = (window as any).tsParticles;
        if (ts?.dom?.length) {
          ts.dom.forEach((d: any) => {
            if (d && d?.container && d.container.id === containerId) {
              d.destroy();
            }
          });
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return <div id="tsparticles-hero" className="absolute inset-0 z-10 pointer-events-none" aria-hidden />;
}
