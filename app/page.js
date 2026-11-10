"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Flame,
  Link2,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";
const glowButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#10b981] font-semibold text-[#062016] shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(16,185,129,0.48)]";

export default function AmenLandingPage() {
  const cardRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.34 };
    const target = { ...current };
    let frame = 0;

    const paint = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      root.style.setProperty("--pointer-x", `${current.x}px`);
      root.style.setProperty("--pointer-y", `${current.y}px`);
      frame = requestAnimationFrame(paint);
    };

    const handlePointerMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;

      const card = cardRef.current;
      if (!card || motionQuery.matches) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const near =
        event.clientX > rect.left - 180 &&
        event.clientX < rect.right + 180 &&
        event.clientY > rect.top - 140 &&
        event.clientY < rect.bottom + 140;
      if (!near) {
        card.style.setProperty("--rx", "7deg");
        card.style.setProperty("--ry", "-9deg");
        return;
      }
      card.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(px * 14).toFixed(2)}deg`);
    };

    if (!motionQuery.matches) frame = requestAnimationFrame(paint);
    else {
      root.style.setProperty("--pointer-x", "50vw");
      root.style.setProperty("--pointer-y", "34vh");
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#062016] text-[#f8fafc] selection:bg-emerald-400/30 selection:text-white">
      <div aria-hidden="true" className="pointer-glow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0b2e21_0%,#062016_46%,#04140e_100%)]"
      />
      <div aria-hidden="true" className="hero-mesh pointer-events-none absolute inset-0 -z-10 h-full" />

      <header className="relative z-30 mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-5 sm:py-3"
        >
          <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="Amen Weight & Wellness home">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={40}
              height={40}
              priority
              className="h-9 w-9 rounded-full border border-emerald-300/40 object-cover sm:h-10 sm:w-10"
            />
            <span className="truncate text-sm font-semibold tracking-tight">
              Amen <span className="text-emerald-300">Wellness</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
            <a className="transition-colors hover:text-white" href="#workouts">Workouts</a>
            <a className="transition-colors hover:text-white" href="#nutrition">Nutrition</a>
            <a className="transition-colors hover:text-white" href="#referral">Referral Program</a>
          </div>

          <a href="#mini-app" className={`${glowButton} shrink-0 px-3.5 py-2.5 text-xs sm:px-4 sm:text-sm`}>
            Launch Mini App
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
          <Sparkles size={14} aria-hidden="true" />
          Telegram Mini App
        </div>

        <h1 className="max-w-4xl font-serif text-[2.65rem] font-medium leading-[1.02] tracking-[-0.04em] text-[#f8fafc] sm:text-6xl lg:text-7xl">
          Daily Nutrition &amp; Fitness
          <span className="mt-2 block italic text-[#10b981]">For a Healthier Life</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          Personal plans, daily workouts, and rewards you can share — coached by Amen,
          right inside Telegram.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#mini-app" className={`${glowButton} group min-h-12 px-6 text-sm`}>
            Start your wellness journey
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#referral"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-[#f8fafc] backdrop-blur-md transition hover:border-amber-300/40 hover:text-amber-100"
          >
            See referral rewards
          </a>
        </div>

        <div className="relative mt-16 w-full max-w-3xl sm:mt-20">
          <div className="amen-float absolute -left-2 top-16 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-md lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981]">
              <Target size={17} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-[#f8fafc]">100% Personalised Plans</span>
          </div>

          <div className="amen-float-delayed absolute -right-1 top-[58%] z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-md lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#f59e0b]">
              <Link2 size={17} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-[#f8fafc]">Earn Rewards via Telegram</span>
          </div>

          <div className="hero-stage mx-auto w-full max-w-[460px]">
            <div
              ref={cardRef}
              className="hero-card relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#071910]/85 p-3 text-left shadow-[0_40px_90px_rgba(0,0,0,0.45),0_0_70px_rgba(16,185,129,0.16)] backdrop-blur-xl sm:p-4"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                  <p className="text-[11px] font-medium tracking-wide text-white/55">Amen Mini App</p>
                </div>
                <p className="text-[11px] text-white/40">Today</p>
              </div>

              <div className="space-y-3">
                <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                      <Flame size={15} className="text-[#f59e0b]" aria-hidden="true" />
                      Workout Streak
                    </div>
                    <span className="rounded-full bg-[#f59e0b]/15 px-2 py-1 text-[10px] font-semibold text-amber-200">12 DAYS</span>
                  </div>
                  <p className="mt-3 font-serif text-4xl leading-none text-white">12</p>
                  <p className="mt-1 text-[11px] text-white/45">days of showing up</p>
                  <div className="mt-4 flex gap-1.5" aria-hidden="true">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <span
                        key={`${day}-${index}`}
                        className={`flex h-8 flex-1 items-center justify-center rounded-lg text-[10px] font-semibold ${
                          index < 5 ? "bg-[#10b981]/20 text-emerald-100" : "bg-white/[0.04] text-white/35"
                        }`}
                      >
                        {index < 5 ? <Check size={13} /> : day}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between text-xs font-medium text-white/70">
                    <span className="flex items-center gap-2">
                      <Utensils size={15} className="text-[#10b981]" aria-hidden="true" />
                      Calorie Tracker
                    </span>
                    <ChevronRight size={15} className="text-white/35" aria-hidden="true" />
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div
                      className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full"
                      style={{ background: "conic-gradient(#10b981 0deg 252deg, rgba(255,255,255,.08) 252deg 360deg)" }}
                    >
                      <div className="flex h-[66px] w-[66px] flex-col items-center justify-center rounded-full bg-[#0c241b]">
                        <span className="text-base font-semibold">70%</span>
                        <span className="text-[9px] text-white/45">TODAY</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white">
                        1,540 <span className="text-xs font-normal text-white/40">kcal</span>
                      </p>
                      <p className="mt-1 text-[11px] text-white/45">of 2,200 daily goal</p>
                      <p className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-200">
                        <Activity size={12} aria-hidden="true" />
                        On track for today
                      </p>
                    </div>
                  </div>
                </article>

                <article className="flex items-center justify-between gap-3 rounded-2xl border border-amber-200/15 bg-gradient-to-r from-[#f59e0b]/15 to-transparent p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b]/15 text-[#f59e0b]">
                      <Link2 size={17} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-white">Referral Link Card</p>
                      <p className="mt-1 truncate text-[11px] text-white/50">t.me/amenwellness?start=you</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-lg border border-[#f59e0b]/30 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                    Copy
                  </span>
                </article>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:hidden">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold backdrop-blur-md">
              <Target size={14} className="text-[#10b981]" aria-hidden="true" />
              100% Personalised Plans
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold backdrop-blur-md">
              <Link2 size={14} className="text-[#f59e0b]" aria-hidden="true" />
              Earn Rewards via Telegram
            </span>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-4 px-4 pb-8 sm:grid-cols-3 sm:px-6">
        <article id="workouts" className="scroll-mt-28 rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981]">
            <Activity size={18} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl text-[#f8fafc]">Workouts</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">Short sessions built around your week, with a streak that keeps the habit visible.</p>
        </article>
        <article id="nutrition" className="scroll-mt-28 rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981]">
            <Utensils size={18} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl text-[#f8fafc]">Nutrition</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">A daily calorie picture you can actually follow, tuned to the way you eat.</p>
        </article>
        <article id="referral" className="scroll-mt-28 rounded-[1.6rem] border border-amber-200/15 bg-gradient-to-br from-[#f59e0b]/12 to-white/5 p-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#f59e0b]">
            <Link2 size={18} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl text-[#f8fafc]">Referral Program</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">Share your Telegram link and earn rewards when friends start their plan.</p>
        </article>
      </section>

      <section id="mini-app" className="relative mx-auto max-w-3xl scroll-mt-28 px-4 pb-20 pt-10 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">Inside Telegram</p>
        <h2 className="mt-3 font-serif text-4xl text-[#f8fafc] sm:text-5xl">Open the mini app and start today.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/60">
          The same plan, streak, and referral card — ready in one tap.
        </p>
        <a href="https://t.me" className={`${glowButton} mx-auto mt-8 min-h-12 px-6 text-sm`}>
          Launch Mini App
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>

      <footer className="relative border-t border-white/10 px-4 py-6 text-center text-xs text-white/45">
        Amen Weight &amp; Wellness
      </footer>
    </main>
  );
}
