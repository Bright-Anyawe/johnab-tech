"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactMethods = [
  {
    title: "Phone",
    value: "+234 815 957 4995",
    href: "tel:+2348159574995",
    icon: Phone,
  },
  {
    title: "Email",
    value: "Johnabtechnologieslimited@gmail.com",
    href: "mailto:Johnabtechnologieslimited@gmail.com",
    icon: Mail,
  },
  {
    title: "Website",
    value: "www.Johnabtechnologieslimited.com",
    href: "https://www.Johnabtechnologieslimited.com",
    icon: Globe,
  },
  {
    title: "Location",
    value: "Nigeria, Worldwide",
    href: "https://www.google.com/maps/search/?api=1&query=Nigeria",
    icon: MapPin,
  },
];

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(10, "Tell us a little about your project."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.info("Contact form submission", values);
    reset();
  };

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
          className="relative mx-auto flex min-h-[310px] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
        >
          <p className="text-sm font-black uppercase tracking-widest text-gold">Reach Out</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-muted">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </motion.div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-black uppercase tracking-widest text-gold">Get In Touch</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Contact <span className="gold-text">Us</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Ready to start your project? Reach out to us and let&apos;s discuss how we can help.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onSubmit={handleSubmit(onSubmit)}
              className="reference-card rounded-lg p-8 shadow-glow/20"
              noValidate
            >
              <label className="block">
                <span className="text-sm font-black text-white">Your Name</span>
                <input
                  {...register("name")}
                  className="mt-3 w-full rounded-lg border border-white/10 bg-[#202020] px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-gold focus:ring-4 focus:ring-gold/10"
                  placeholder="John Doe"
                />
                {errors.name ? (
                  <span className="mt-2 block text-sm text-red-400">{errors.name.message}</span>
                ) : null}
              </label>

              <label className="mt-7 block">
                <span className="text-sm font-black text-white">Email Address</span>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-3 w-full rounded-lg border border-white/10 bg-[#202020] px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-gold focus:ring-4 focus:ring-gold/10"
                  placeholder="john@example.com"
                />
                {errors.email ? (
                  <span className="mt-2 block text-sm text-red-400">{errors.email.message}</span>
                ) : null}
              </label>

              <label className="mt-7 block">
                <span className="text-sm font-black text-white">Your Message</span>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="mt-3 w-full resize-none rounded-lg border border-white/10 bg-[#202020] px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-gold focus:ring-4 focus:ring-gold/10"
                  placeholder="Tell us about your project..."
                />
                {errors.message ? (
                  <span className="mt-2 block text-sm text-red-400">{errors.message.message}</span>
                ) : null}
              </label>

              <button
                type="submit"
                className="gold-button mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl text-base font-black text-black transition"
              >
                Send Message <Send size={19} aria-hidden />
              </button>

              {isSubmitSuccessful ? (
                <p className="mt-4 text-center text-sm font-semibold text-gold">
                  Message captured. Backend delivery can be connected next.
                </p>
              ) : null}
            </motion.form>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      variants={fadeUp}
                      transition={{ duration: 0.38, ease: "easeOut" }}
                      className="reference-card flex min-h-28 items-center gap-4 rounded-lg p-6 transition hover:border-gold/70"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                        <Icon size={24} aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-black text-white">{method.title}</span>
                        <span className="mt-2 block break-words text-base leading-6 text-slate-400">
                          {method.value}
                        </span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="reference-card overflow-hidden rounded-lg"
              >
                <iframe
                  title="Nigeria map"
                  src="https://www.google.com/maps?q=Nigeria&output=embed"
                  className="h-[255px] w-full grayscale invert"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
