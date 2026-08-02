"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, Award, Users, Video, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "1000s", label: "Students Trained" },
  { icon: Video, value: "200+", label: "AI Projects Delivered" },
  { icon: Globe, value: "5+", label: "Years in Tech" },
  { icon: Award, value: "10+", label: "Industry Certifications" },
];

const roles = [
  "Founder & CEO, JOHNAB Technologies",
  "Founder, KlassBase Technologies",
  "Petroleum Engineering (Final Year)",
  "AI Specialist",
  "Tech Educator",
];

// Facilitator photo lives at public/ceo.png; monogram shows if it's missing.
const PHOTO_SRC = "/ceo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

function Portrait() {
  // Probe the file directly (bypassing the image optimizer) so the monogram
  // shows until public/john-abu.jpg exists, then swap to the optimized photo.
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const tester = new window.Image();
    tester.src = PHOTO_SRC;
    tester.onload = () => {
      if (!cancelled) setHasPhoto(true);
    };
    tester.onerror = () => {
      if (!cancelled) setHasPhoto(false);
    };
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border-4 border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 shadow-glow">
      {hasPhoto ? (
        <Image
          src={PHOTO_SRC}
          alt="Engr. John Abu, Founder & CEO of JOHNAB Technologies Limited"
          fill
          sizes="(max-width: 1024px) 90vw, 384px"
          className="object-cover object-top"
        />
      ) : (
        <div className="grid h-full w-full place-items-center text-7xl font-black text-gold">
          JA
        </div>
      )}
    </div>
  );
}

export default function FacilitatorSection() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">
            Meet Your Facilitator
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Engr. John Abu
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <Portrait />

            <div className="mx-auto mt-6 max-w-sm text-center">
              <h3 className="text-2xl font-black text-white">John Abu</h3>
              <p className="mt-1 text-base font-semibold text-gold">
                Founder &amp; CEO, JOHNAB Technologies Limited
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">Rated 4.9/5 by 500+ students</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-black/30 p-3"
                  >
                    <stat.icon size={20} className="mx-auto text-gold" aria-hidden />
                    <p className="mt-1 text-lg font-black text-white">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3 lg:self-center"
          >
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Engr. John Abu is the Founder and CEO of JOHNAB Technologies Limited, a digital
                technology company helping businesses grow through AI-powered solutions, software
                development, automation, branding, and digital transformation. He is also the Founder
                of KlassBase Technologies Limited, the company behind KlassBase, an innovative
                learning and creator platform built to empower educators, entrepreneurs, and digital
                creators across Africa.
              </p>
              <p>
                Alongside his entrepreneurial journey, John is a final-year Petroleum Engineering
                student, combining engineering principles with modern technology to solve real-world
                business challenges. His unique blend of technical knowledge, creativity, and
                innovation has enabled him to build practical digital solutions while training
                thousands of individuals in high-income digital skills.
              </p>
              <p>
                Through JOHNAB Academy, John has trained aspiring professionals in AI, web
                development, business automation, graphic design, content creation, video production,
                and digital marketing. His mission is to equip Africans with practical,
                income-generating digital skills that prepare them for the future of work.
              </p>
              <p>
                Whether you&apos;re learning to build websites with AI, create professional content,
                automate business processes, or launch your own digital business, you&apos;ll gain
                practical knowledge from someone actively building technology products and businesses.
              </p>
            </div>

            <div className="relative mt-8">
              <Quote size={40} className="absolute -left-2 -top-3 text-gold/20" aria-hidden />
              <blockquote className="pl-6 text-2xl font-black italic leading-snug text-white">
                &ldquo;Learn Today. Build Tomorrow. Earn Forever.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-semibold text-gold"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
