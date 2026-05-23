"use client";

import type { YouTubeVideo } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface VideoGalleryProps {
  videos: YouTubeVideo[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    if (!selectedVideo) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {videos.map((video) => (
          <motion.button
            key={video.id}
            type="button"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={() => setSelectedVideo(video)}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-circuit/50 hover:shadow-2xl"
            aria-label={`Play video: ${video.title}`}
          >
            <span className="relative block aspect-video overflow-hidden bg-slate-900">
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-circuit text-ink shadow-glow transition group-hover:scale-105">
                <Play size={24} fill="currentColor" aria-hidden />
              </span>
            </span>
            <span className="block p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-circuit">
                {video.category}
              </span>
              <span className="mt-2 block text-lg font-semibold text-white">{video.title}</span>
              <span className="mt-2 block text-sm leading-6 text-slate-400">
                {video.description}
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedVideo ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-ink shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-circuit">
                    {selectedVideo.category}
                  </p>
                  <h2 className="mt-1 text-base font-semibold text-white">
                    {selectedVideo.title}
                  </h2>
                </div>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-slate-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video modal"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
