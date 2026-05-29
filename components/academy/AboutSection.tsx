"use client";

import { motion } from "framer-motion";
import {
  Video,
  Globe,
  Image,
  Bot,
  TrendingUp,
  Package,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "AI Video Creation",
    description:
      "Create professional videos, short films, and cinematic content using cutting-edge AI tools. No camera or studio required.",
  },
  {
    icon: Globe,
    title: "AI Websites & Apps",
    description:
      "Build stunning websites, web apps, and mobile interfaces with AI-powered development tools. Launch in hours, not weeks.",
  },
  {
    icon: Image,
    title: "AI Graphics & Design",
    description:
      "Generate logos, brand assets, marketing materials, and digital artwork using AI design platforms.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    description:
      "Build intelligent chatbots, automate customer support, and create AI-powered business workflows.",
  },
  {
    icon: TrendingUp,
    title: "AI Ads & Marketing",
    description:
      "Create high-converting ad campaigns, marketing copy, and sales funnels with AI-powered marketing tools.",
  },
  {
    icon: Package,
    title: "Digital Products",
    description:
      "Learn to create and sell digital products — from templates to online courses — using AI tools to accelerate production.",
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

export default function AboutSection() {
  return (
    <section id="about" className="bg-panel py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">
            What You&apos;ll Learn
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Complete AI Skills Training
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Six core areas designed to take you from complete beginner to
            confident AI professional. Each module includes hands-on projects
            and real-world applications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="reference-card group rounded-xl p-7 transition hover:border-gold/30"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-glow">
                <feature.icon size={26} aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
