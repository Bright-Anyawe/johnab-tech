"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Web Design & Development Using AI",
    lessons: [
      "Build responsive websites using AI",
      "Advanced AI website building",
      "AI landing page creation",
    ],
  },
  {
    number: "02",
    title: "Faceless Content Creation",
    subtitle: "(YouTube, Facebook, TikTok & Instagram)",
    lessons: [
      "Nollywood movies (basic & advanced)",
      "Hollywood AI movies",
      "Documentary videos",
      "African folktales",
      "Podcast creation",
      "AI news broadcast",
      "Long AI videos",
      "Multi-character AI videos",
      "Consistent character videos",
      "AI street interviews",
      "Bible stories using AI",
      "Viral AI funny baby videos (basic & advanced)",
      "Image-to-video (basic & advanced)",
      "YouTube channel setup",
      "Video SEO & proper uploading",
      "AI music videos",
    ],
  },
  {
    number: "03",
    title: "Professional Graphic Design Using AI",
    lessons: [
      "Flyers design",
      "Logo creation",
      "Business cards",
      "YouTube thumbnails",
      "Instagram carousels",
    ],
  },
  {
    number: "04",
    title: "Professional Graphic Design Using CorelDRAW",
    lessons: [
      "CorelDRAW introduction",
      "Flyer design (basic & advanced)",
      "Logo design (basic & advanced)",
    ],
  },
  {
    number: "05",
    title: "AI Agents & Chatbots",
    lessons: [
      "WhatsApp chatbot creation",
      "AI agency blueprint",
      "WhatsApp automation",
    ],
  },
  {
    number: "06",
    title: "E-Book Creation",
    lessons: [
      "Create e-books from scratch",
      "E-book cover design",
      "How to sell your e-book",
    ],
  },
  {
    number: "07",
    title: "Prompt Engineering",
    lessons: [
      "Prompt engineering (basic)",
      "Prompt engineering (advanced)",
    ],
  },
  {
    number: "08",
    title: "Search Engine Optimization",
    subtitle: "(Social Media SEO)",
    lessons: [
      "Video optimization",
      "Business optimization",
    ],
  },
  {
    number: "09",
    title: "Commercial & Advert Videos Using AI",
    lessons: [
      "AI advert videos",
      "Advanced advert videos",
      "UGC commercial advert videos",
    ],
  },
  {
    number: "10",
    title: "Facebook & Instagram Ads That Convert",
    lessons: [
      "Introduction to ads",
      "Running effective Facebook & Instagram ads",
    ],
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

export default function ModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="modules" className="bg-ink py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-gold">
            Full Curriculum
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Complete{" "}
            <span className="gold-text">Module Breakdown</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            10 comprehensive modules with 50+ practical lessons to master AI
            skills
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mx-auto mt-16 max-w-4xl space-y-4"
        >
          {modules.map((mod, index) => (
            <motion.div
              key={mod.number}
              variants={fadeUp}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-gold/50 bg-gold/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                <span className="shrink-0 text-xs font-black text-gold">
                  MODULE {mod.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{mod.title}</h3>
                  {mod.subtitle && (
                    <span className="text-sm text-slate-500">
                      {mod.subtitle}
                    </span>
                  )}
                </div>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[800px]" : "max-h-0"
                }`}
              >
                <div className="grid gap-3 px-6 pb-5 sm:grid-cols-2">
                  {mod.lessons.map((lesson) => (
                    <div key={lesson} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-gold"
                        aria-hidden
                      />
                      <span className="text-sm text-slate-400">
                        {lesson}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
