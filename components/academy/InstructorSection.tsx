"use client";

import { motion } from "framer-motion";
import { Quote, Star, Award, Users, Video, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Video, value: "200+", label: "AI Projects Delivered" },
  { icon: Globe, value: "5+", label: "Years in Tech" },
  { icon: Award, value: "10+", label: "Industry Certifications" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function InstructorSection() {
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
            Your Instructor
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Learn From an Industry Expert
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
            <div className="reference-card mx-auto max-w-sm rounded-2xl p-8 text-center">
              <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border-4 border-gold/40 bg-gradient-to-br from-gold/20 to-gold/5 text-6xl font-black text-gold shadow-glow">
                JA
              </div>
              <h3 className="mt-6 text-2xl font-black text-white">
                John Abu
              </h3>
              <p className="mt-1 text-base font-semibold text-gold">
                Founder & Lead Instructor, JOHNAB Academy
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">
                Rated 4.9/5 by 500+ students
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-black/30 p-3"
                  >
                    <stat.icon
                      size={20}
                      className="mx-auto text-gold"
                      aria-hidden
                    />
                    <p className="mt-1 text-lg font-black text-white">
                      {stat.value}
                    </p>
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
            <div className="relative">
              <Quote
                size={48}
                className="absolute -left-2 -top-2 text-gold/20"
                aria-hidden
              />
              <blockquote className="pl-6 text-xl leading-relaxed text-slate-300 italic">
                &ldquo;I started my tech journey with no coding background. After
                years of hands-on experience building AI solutions for
                businesses across various industries, I created this course to
                help you skip the struggle and go straight to building
                income-generating AI skills. No fluff, no theory — just
                practical, actionable training.&rdquo;
              </blockquote>
            </div>

            <div className="mt-10 space-y-5 text-base leading-8 text-slate-400">
              <p>
                John is the founder of JOHNAB Technologies Limited, a digital
                solutions company specializing in AI-powered web development,
                business automation, and brand design. He has trained hundreds
                of students across Africa and helped numerous businesses
                integrate AI into their operations.
              </p>
              <p>
                His teaching philosophy is simple: break down complex concepts
                into simple, actionable steps that anyone can follow —
                regardless of their technical background.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AI Specialist",
                "Web Developer",
                "Business Automation",
                "Digital Strategist",
                "Tech Educator",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-semibold text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
