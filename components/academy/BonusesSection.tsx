"use client";

import { motion } from "framer-motion";
import { Gift, BookOpen, Users, RefreshCw, Award } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "AI Prompt Library",
    description:
      "300+ tested prompts for content creation, coding, design, and marketing. Copy, paste, and get results instantly.",
  },
  {
    icon: Users,
    title: "Private Community Access",
    description:
      "Join our exclusive student community on WhatsApp and Telegram. Network, share work, and get feedback from peers and mentors.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Curriculum Updates",
    description:
      "AI evolves fast — and so does this course. Get all future updates, new modules, and advanced content at no extra cost.",
  },
  {
    icon: Award,
    title: "Completion Certificate",
    description:
      "Receive a verified JOHNAB Academy certificate upon completion to showcase your skills on LinkedIn, your resume, or portfolio.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function BonusesSection() {
  return (
    <section className="bg-panel py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-gold/40 bg-gold/10 text-gold shadow-glow">
            <Gift size={30} aria-hidden />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-widest text-gold">
            Free Bonuses
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Everything You Get When You Enroll
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            These bonuses are included free with every enrollment — valued at
            over $500.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {bonuses.map((bonus) => (
            <motion.div
              key={bonus.title}
              variants={fadeUp}
              className="reference-card group flex gap-5 rounded-xl border border-white/5 p-7 transition hover:border-gold/30"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-glow">
                <bonus.icon size={26} aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  {bonus.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-400">
                  {bonus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
