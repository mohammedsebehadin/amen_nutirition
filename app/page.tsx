"use client";

import { useTelegram } from "@/hooks/useTelegram";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { Coach } from "@/components/home/Coach";
import { Meals } from "@/components/home/Meals";
import { Plans } from "@/components/home/Plans";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/home/Footer";

export default function AmenWellnessPage() {
  const { user, triggerHaptic } = useTelegram();
  const tap = () => triggerHaptic("medium");
  const heavy = () => triggerHaptic("heavy");

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfa] text-stone-900 selection:bg-emerald-600/20 selection:text-emerald-950">
      <AnnouncementBar userName={user?.first_name} />
      <Header onAction={tap} />
      <main>
        <Hero onAction={tap} />
        <ValueProps />
        <Coach onAction={tap} />
        <Meals />
        <Plans onAction={tap} heavy={heavy} />
        <FaqSection onToggle={() => triggerHaptic("light")} />
        <CtaBanner onAction={tap} />
      </main>
      <Footer />
    </div>
  );
}
