"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const getDriveThumbnailUrl = (driveId: string) =>
  `https://drive.google.com/thumbnail?id=${driveId}&sz=w1280`;

const videos = [
  {
    title: "Project Video 1",
    featured: false,
    driveId: "1xa-n9LDR8Ol4rnYLvbT6m7IXiZ60bXZ8",
    thumbnail: "/portfolio-video-1.jpg",
  },
  {
    title: "Project Video 2",
    featured: true,
    driveId: "1oDKZPdrittUZCAzj7P1HEovZQP7-3fZF",
    thumbnail: getDriveThumbnailUrl("1oDKZPdrittUZCAzj7P1HEovZQP7-3fZF"),
  },
  {
    title: "Project Video 3",
    featured: false,
    driveId: "1eMChsRqJdyNV-i9ulCxxLzgWvcZy5omw",
    thumbnail: getDriveThumbnailUrl("1eMChsRqJdyNV-i9ulCxxLzgWvcZy5omw"),
  },
  {
    title: "Project Video 4",
    featured: false,
    driveId: "1RaA9P9YeH21fooQaKbfOMZ9s0RLsWUJ5",
    thumbnail: "/portfolio-video-4.jpg",
  },
  {
    title: "Project Video 5",
    featured: false,
    driveId: "1yApQVmPSQey7UJVBG-aYD9x1q3MZ6tAA",
    thumbnail: "/portfolio-video-5.jpg",
  },
  {
    title: "Project Video 6",
    featured: false,
    driveId: "1OjD1v9UovwbpX290WBSZq5DPLKLLlmgq",
    thumbnail: "/portfolio-video-6.jpg",
  },
];

const aiVideos = [
  {
    title: "AI Video 1",
    driveId: "1Euv5eP9GuWipLEF1-p-kA22gjPP75VUz",
    thumbnail: getDriveThumbnailUrl("1Euv5eP9GuWipLEF1-p-kA22gjPP75VUz"),
  },
  {
    title: "AI Video 2",
    driveId: "1EBFvtHZpz3aHpnBYu-Gms0R377hU4tLj",
    thumbnail: "/portfolio-ai-video-2.jpg",
  },
  {
    title: "AI Video 3",
    driveId: "1tXoZuj7lMje3BRN_-q2QXSRR6Hoqc5q7",
    thumbnail: getDriveThumbnailUrl("1tXoZuj7lMje3BRN_-q2QXSRR6Hoqc5q7"),
  },
  {
    title: "AI Video 4",
    driveId: "1844YyQm4gqahpHY93znL_CLL04qraMrU",
    thumbnail: getDriveThumbnailUrl("1844YyQm4gqahpHY93znL_CLL04qraMrU"),
  },
  {
    title: "AI Video 5",
    driveId: "1Ms5QwulNgb5vTYge7iM5OZMddy2KwGC_",
    thumbnail: getDriveThumbnailUrl("1Ms5QwulNgb5vTYge7iM5OZMddy2KwGC_"),
  },
  {
    title: "AI Video 6",
    driveId: "1xqtJwpePzVFULdV_CcJg2NbLxm11ZOaD",
    thumbnail: getDriveThumbnailUrl("1xqtJwpePzVFULdV_CcJg2NbLxm11ZOaD"),
  },
];

const automationVideos = [
  {
    title: "Automation Workflow",
    driveId: "1dnhtbNMOc1ER0TiI7AosI7zr8C2fRyFz",
    thumbnail: getDriveThumbnailUrl("1dnhtbNMOc1ER0TiI7AosI7zr8C2fRyFz"),
  },
];

const images = [
  {
    title: "Portfolio Image 1",
    featured: false,
    driveId: "12apMoRT-QZbsf8YRqxQIpJnIkHrUAtKA",
    thumbnail: "/portfolio-image-1.png",
  },
  {
    title: "Portfolio Image 2",
    featured: true,
    driveId: "1Mv57vwlfRLgzVIv0uwayfMf0GQIllDyc",
    thumbnail: "/portfolio-image-2.jpg",
  },
  {
    title: "Portfolio Image 3",
    featured: false,
    driveId: "1u_ELOp0T74g9Gw_0w7KKoAnR8mTSxstd",
    thumbnail: "/portfolio-image-3.png",
  },
  {
    title: "Portfolio Image 4",
    featured: false,
    driveId: "1DmxzSjt--1csDIlYJZW0Z3KZFJXnwIcc",
    thumbnail: "/portfolio-image-4.png",
  },
  {
    title: "Portfolio Image 5",
    featured: false,
    driveId: "1pe38lLkJpb2joiZmk2FHY-xit2adpSoR",
    thumbnail: "/portfolio-image-5.jpg",
  },
  {
    title: "Portfolio Image 6",
    featured: false,
    driveId: "1WSRT44CHyjc5dYKFQlKNwOQXwQzVhF8m",
    thumbnail: "/portfolio-image-6.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  const [activeVideo, setActiveVideo] = useState<
    (typeof videos)[number] | (typeof aiVideos)[number] | (typeof automationVideos)[number] | null
  >(null);
  const [activeImage, setActiveImage] = useState<(typeof images)[number] | null>(null);

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
                onClick={() => video.driveId && setActiveVideo(video)}
                disabled={!video.driveId}
                className={`group overflow-hidden rounded-lg border text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 ${
                  video.featured
                    ? "border-gold/70 bg-gold/25"
                    : "border-white/10 bg-[#202020]"
                } ${video.driveId ? "cursor-pointer" : "cursor-default"}`}
                aria-label={`Play ${video.title}`}
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-black">
                  {video.thumbnail ? (
                    <Image
                      src={video.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="grid h-full w-full place-items-center">
                      <ImageIcon size={40} className="text-muted" aria-hidden />
                    </span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold/25 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Play size={34} fill="currentColor" aria-hidden />
                  </span>
                </span>
                <span className="block p-4">
                  <span className="text-base font-medium text-muted">{video.title}</span>
                </span>
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
              <motion.button
                key={image.title}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                onClick={() => image.thumbnail && setActiveImage(image)}
                disabled={!image.thumbnail}
                className={`group overflow-hidden rounded-lg border text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 ${
                  image.featured
                    ? "border-gold/70 bg-gold/25"
                    : "border-white/10 bg-[#202020]"
                } ${image.thumbnail ? "cursor-pointer" : "cursor-default"}`}
                aria-label={`View ${image.title}`}
              >
                <span className="relative block aspect-[16/12] overflow-hidden bg-black">
                  {image.thumbnail ? (
                    <Image
                      src={image.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="grid h-full w-full place-items-center">
                      <ImageIcon size={40} className="text-muted" aria-hidden />
                    </span>
                  )}
                </span>
                <span className="block p-4">
                  <span className="text-base font-medium text-muted">{image.title}</span>
                </span>
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
              AI Video Creation <span className="gold-text">Gallery</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              AI-generated video content and creations.
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
            {aiVideos.map((video) => (
              <motion.button
                key={video.title}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                onClick={() => setActiveVideo(video)}
                className="group overflow-hidden rounded-lg border border-white/10 bg-[#202020] text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/70"
                aria-label={`Play ${video.title}`}
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={video.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold/25 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Play size={34} fill="currentColor" aria-hidden />
                  </span>
                </span>
                <span className="block p-4">
                  <span className="text-base font-medium text-muted">{video.title}</span>
                </span>
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
              Automation <span className="gold-text">Showcase</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              Our business automation workflows in action.
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
            className="mt-12 flex justify-center"
          >
            {automationVideos.map((video) => (
              <motion.button
                key={video.title}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                onClick={() => setActiveVideo(video)}
                className="group w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-[#202020] text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/70"
                aria-label={`Play ${video.title}`}
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={video.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold/25 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Play size={34} fill="currentColor" aria-hidden />
                  </span>
                </span>
                <span className="block p-4">
                  <span className="text-base font-medium text-muted">{video.title}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
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
              Website / App <span className="gold-text">Gallery</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              Showcasing our web and mobile app designs.
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
            {[
              {
                title: "KlassBase",
                type: "Website",
                thumbnail: "/KlassBase-website.png",
                url: "https://www.klassbase.com",
              },
              {
                title: "Johnab Academy",
                type: "Website",
                thumbnail: "/Johnab-Academy-website.png",
                url: "https://johnabacademy.lovable.app/",
              },
              {
                title: "Adwise",
                type: "Website",
                thumbnail: "/Adwise-website.png",
                url: "https://pixel-perfect-capture-925.lovable.app/dashboard",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#202020] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70"
              >
                <Link href={item.url} target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-[16/12] w-full overflow-hidden bg-black">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">{item.type}</p>
                    <p className="mt-1 text-base font-medium text-muted">{item.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-0 backdrop-blur-sm sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex h-full w-full max-w-[92vw] flex-col overflow-hidden bg-ink shadow-2xl sm:h-[80vh] sm:max-h-[85vh] sm:w-[min(92vw,1360px)] sm:rounded-lg sm:border sm:border-white/15"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
                <h2 className="truncate pr-3 text-sm font-semibold text-white sm:text-base">
                  {activeVideo.title}
                </h2>
                <button
                  type="button"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 text-slate-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video modal"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>
              <div className="relative min-h-0 flex-1 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                  title={activeVideo.title}
                  allow="autoplay"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-0 backdrop-blur-sm sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex h-full w-full flex-col overflow-hidden bg-ink shadow-2xl sm:h-auto sm:max-h-[85dvh] sm:w-auto sm:max-w-4xl sm:rounded-lg sm:border sm:border-white/15"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
                <h2 className="truncate pr-3 text-sm font-semibold text-white sm:text-base">
                  {activeImage.title}
                </h2>
                <button
                  type="button"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 text-slate-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setActiveImage(null)}
                  aria-label="Close image modal"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>
              <div className="relative min-h-0 flex-1 bg-black sm:aspect-[16/12] sm:flex-none">
                <Image
                  src={activeImage.thumbnail ?? ""}
                  alt={activeImage.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
            More Service Videos on Our <span className="gold-text">YouTube Channel</span>
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
