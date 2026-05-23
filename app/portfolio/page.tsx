"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon, Play } from "lucide-react";
import Link from "next/link";

const videos = [
  { title: "Project Video 1", featured: false },
  { title: "Project Video 2", featured: true },
  { title: "Project Video 3", featured: false },
  { title: "Project Video 4", featured: false },
  { title: "Project Video 5", featured: false },
  { title: "Project Video 6", featured: false },
];

const images = [
  { title: "Portfolio Image 1", featured: false },
  { title: "Portfolio Image 2", featured: true },
  { title: "Portfolio Image 3", featured: false },
  { title: "Portfolio Image 4", featured: false },
  { title: "Portfolio Image 5", featured: false },
  { title: "Portfolio Image 6", featured: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 bg-panel">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto flex min-h-[340px] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">Our Work</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Our <span className="gold-text">Portfolio</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted">
            Explore our recent projects and see how we&apos;ve helped businesses transform their
            digital presence.
          </p>
        </motion.div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1340px] px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-black tracking-tight text-white">
              Video <span className="gold-text">Showcase</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              Watch our latest video projects and productions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {videos.map((video) => (
              <motion.button
                key={video.title}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className={`group flex aspect-[16/9] flex-col justify-end rounded-lg border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 ${
                  video.featured
                    ? "border-gold/70 bg-gold/25"
                    : "border-white/10 bg-[#202020]"
                }`}
                aria-label={`Play ${video.title}`}
              >
                <span className="m-auto grid h-16 w-16 place-items-center rounded-full bg-gold/25 text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Play size={34} fill="currentColor" aria-hidden />
                </span>
                <span className="text-base font-medium text-muted">{video.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-[1340px] px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-black tracking-tight text-white">
              Design <span className="gold-text">Gallery</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              A collection of our design and development work.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((image) => (
              <motion.div
                key={image.title}
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className={`flex aspect-[16/12] flex-col items-center justify-center rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 ${
                  image.featured
                    ? "border-gold/70 bg-gold/25"
                    : "border-white/10 bg-[#202020]"
                }`}
              >
                <ImageIcon size={40} className="text-muted" aria-hidden />
                <p className="mt-3 text-base font-medium text-muted">{image.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl px-4 text-center sm:px-6"
        >
          <h2 className="text-3xl font-black tracking-tight text-white">
            More Videos on Our <span className="gold-text">YouTube Channel</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Subscribe to our channel for tutorials, tips, and more project showcases.
          </p>
          <Link
            href="https://www.youtube.com/channel/UCo8aJFeIlf6k8bYeXOMBq4A"
            target="_blank"
            rel="noreferrer"
            className="gold-button mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-12 text-base font-black text-black transition"
          >
            Visit Our YouTube Channel <ExternalLink size={18} aria-hidden />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
