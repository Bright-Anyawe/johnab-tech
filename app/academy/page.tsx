import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/academy/HeroSection";
import AboutSection from "@/components/academy/AboutSection";
import ModulesSection from "@/components/academy/ModulesSection";
import BonusesSection from "@/components/academy/BonusesSection";
import InstructorSection from "@/components/academy/InstructorSection";
import PaymentSection from "@/components/academy/PaymentSection";
import FinalCTASection from "@/components/academy/FinalCTASection";

export const metadata: Metadata = {
  title: "AI Mastery Class - Master High-Income AI Skills | JOHNAB Academy",
  description:
    "Learn how to create AI videos, movies, websites, graphics, ads, chatbots, and digital products. Complete AI training for beginners. Enroll in AI Mastery Class today!",
  keywords: [
    "AI training",
    "AI course",
    "AI mastery",
    "learn AI",
    "AI videos",
    "AI graphics",
    "digital skills",
    "JOHNAB Academy",
  ],
  openGraph: {
    title: "AI Mastery Class - Master High-Income AI Skills",
    description:
      "Complete AI training program with 10+ modules. Learn AI videos, graphics, chatbots, and more. Lifetime access included.",
    type: "website",
  },
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ModulesSection />
        <div className="section-divider" />
        <BonusesSection />
        <div className="section-divider" />
        <InstructorSection />
        <div className="section-divider" />
        <PaymentSection />
        <div className="section-divider" />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
