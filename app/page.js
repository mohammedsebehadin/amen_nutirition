"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Droplets,
  Flame,
  Link2,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";
import InteractiveBackground from "./InteractiveBackground";

function AmenMiniAppDashboard() {
  const [telegramUser, setTelegramUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | nutrition | workout | coach
  
  // Daily Tracking State
  const [caloriesLogged, setCaloriesLogged] = useState(1740);
  const targetCalories = 2150;
  
  const [waterGlasses, setWaterGlasses] = useState(7);
  const targetWaterGlasses = 10;
  
  const [fastingMinutes, setFastingMinutes] = useState(860); // 14 hours 20 mins
  
  // Interactive Meal Check-offs
  const [completedMeals, setCompletedMeals] = useState({
    meal1: true,
    meal2: true,
    meal3: false,
    snack: false,
  });

  const toggleMeal = (id) => {
    setCompletedMeals((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      // Dynamically adjust calories
      const deltas = { meal1: 460, meal2: 580, meal3: 520, snack: 280 };
      const delta = next[id] ? deltas[id] : -deltas[id];
      setCaloriesLogged((c) => Math.max(0, c + delta));
      return next;
    });
  };

  // Background Telegram WebApp Authentication
  const validateBackendSilent = useCallback(async (dataString) => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/auth/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `tma ${dataString}`,
        },
        body: JSON.stringify({ initData: dataString }),
      });
      const data = await res.json();
      if (res.ok && data.valid && data.user) {
        setTelegramUser(data.user);
      }
    } catch {
      // Offline fallback silent
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.ready();
        tg.expand();
        const rawData = tg.initData || "";

        queueMicrotask(() => {
          if (tg.initDataUnsafe?.user) {
            setTelegramUser(tg.initDataUnsafe.user);
          }
          if (rawData) {
            validateBackendSilent(rawData);
          }
        });
      } catch (e) {
        console.warn("Telegram WebApp init error:", e);
      }
    }
  }, [validateBackendSilent]);

  // Calculate Ring Percentages
  const caloriePercent = Math.min(100, Math.round((caloriesLogged / targetCalories) * 100));
  const proteinLogged = 142;
  const targetProtein = 165;
  const proteinPercent = Math.min(100, Math.round((proteinLogged / targetProtein) * 100));
  const waterPercent = Math.min(100, Math.round((waterGlasses / targetWaterGlasses) * 100));

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-slate-100 bg-[#05070e] flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-200 pb-24 md:pb-8">
      
      {/* Electric Neon Mesh Background */}
      <InteractiveBackground />

      {/* Main App Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-3.5 py-4 sm:px-6 lg:px-8">
        
        {/* ===================== TOP ATHLETIC BAR ===================== */}
        <header className="mb-6 athletic-card rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 border border-slate-800/80 shadow-2xl">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 opacity-70 blur-xs animate-pulse" />
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-400 bg-black flex items-center justify-center shadow-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="Amen Weight & Wellness Crest"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover scale-110"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase italic">
                  AMEN
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 neon-text-green">
                  ATHLETIC & WELLNESS
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wide flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                METABOLIC PROTOCOL • COACH AMEN
              </p>
            </div>
          </div>

          {/* User Status / Streak Badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs shadow-xs">
              <span>🔥</span>
              <span>14-Day Streak</span>
            </div>

            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer"
            >
              <span>Chat Coach</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
          </div>
        </header>

        {/* ===================== TAB CONTROLS (DESKTOP) ===================== */}
        <nav className="hidden md:flex items-center justify-between gap-2 mb-6 athletic-card rounded-2xl p-1.5 border border-slate-800">
          {[
            { id: "dashboard", label: "Today's Dashboard", icon: "⚡" },
            { id: "nutrition", label: "Macro & Meal Plan", icon: "🥗" },
            { id: "workout", label: "Today's Workout", icon: "🏋️‍♂️" },
            { id: "coach", label: "Coach Amen Hotline", icon: "👤" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === t.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-black"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>

        {/* ===================== TAB 1: MAIN ATHLETIC DASHBOARD ===================== */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            
            {/* HERO CORE: Apple Fitness / Whoop Style Calorie & Macro Rings */}
            <div className="athletic-card rounded-3xl p-5 sm:p-7 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: The Calorie & Macro Triple Ring */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                    
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      {/* Background track rings */}
                      <circle cx="100" cy="100" r="82" fill="none" stroke="#131c2e" strokeWidth="11" />
                      <circle cx="100" cy="100" r="66" fill="none" stroke="#131c2e" strokeWidth="11" />
                      <circle cx="100" cy="100" r="50" fill="none" stroke="#131c2e" strokeWidth="11" />

                      {/* Outer Ring: Calories (Electric Neon Green) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="82"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="11"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 82}
                        strokeDashoffset={(2 * Math.PI * 82) * (1 - caloriePercent / 100)}
                        className="transition-all duration-700 ease-out"
                        style={{ filter: "drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))" }}
                      />

                      {/* Middle Ring: Protein (Neon Amber Gold) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="66"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="11"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 66}
                        strokeDashoffset={(2 * Math.PI * 66) * (1 - proteinPercent / 100)}
                        className="transition-all duration-700 ease-out"
                        style={{ filter: "drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))" }}
                      />

                      {/* Inner Ring: Water / Hydration (Electric Teal) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="50"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="11"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 50}
                        strokeDashoffset={(2 * Math.PI * 50) * (1 - waterPercent / 100)}
                        className="transition-all duration-700 ease-out"
                        style={{ filter: "drop-shadow(0 0 6px rgba(20, 184, 166, 0.6))" }}
                      />
                    </svg>

                    {/* Ring Center Metrics */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Remaining
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-white italic tracking-tight">
                        {Math.max(0, targetCalories - caloriesLogged)}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase">
                        kcal to burn
                      </span>
                    </div>

                  </div>

                  {/* Ring Legend */}
                  <div className="flex items-center gap-4 mt-3 text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />
                      Calories
                    </span>
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500" />
                      Protein
                    </span>
                    <span className="flex items-center gap-1.5 text-teal-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-sm shadow-teal-400" />
                      Water
                    </span>
                  </div>
                </div>

                {/* Right: Macro Target Telemetry */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2">
                      ✦ Active Phase: Target Fat Oxidation
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight">
                      Daily Caloric Fuel & Recovery
                    </h2>
                    <p className="text-xs text-slate-400">
                      Client ID: {telegramUser ? `@${telegramUser.username || telegramUser.first_name}` : "Amen VIP Client"} • Program: 12-Week Lean Recomposition
                    </p>
                  </div>

                  {/* Macro Progress Bars */}
                  <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                    
                    {/* Calorie Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-300">Calories ({caloriesLogged} / {targetCalories} kcal)</span>
                        <span className="text-emerald-400 font-mono">{caloriePercent}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                          style={{ width: `${caloriePercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Protein Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-300">Protein ({proteinLogged}g / {targetProtein}g Target)</span>
                        <span className="text-amber-400 font-mono">{proteinPercent}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500"
                          style={{ width: `${proteinPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Hydration Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-300">Cellular Hydration ({waterGlasses * 250} / {targetWaterGlasses * 250} mL)</span>
                        <span className="text-teal-400 font-mono">{waterPercent}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-500"
                          style={{ width: `${waterPercent}%` }}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <button
                      onClick={() => setWaterGlasses((w) => Math.min(15, w + 1))}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/30 text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
                    >
                      <span>💧 +250ml</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("nutrition")}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
                    >
                      <span>🥗 Log Food</span>
                    </button>

                    <button
                      onClick={() => setFastingMinutes((m) => m + 30)}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
                    >
                      <span>⏱ {Math.floor(fastingMinutes / 60)}h Fast</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("coach")}
                      className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-emerald-500/25"
                    >
                      <span>💬 Coach DM</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* COACH AMEN DIRECT HOTLINE CARD */}
            <div className="athletic-card athletic-card-hover rounded-3xl p-5 border border-emerald-500/20 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                
                <div className="md:col-span-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black border border-emerald-500/40">
                    <Image
                      src="/images/coach.jpg"
                      alt="Coach Amen"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 border border-emerald-500/40">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE NOW
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    Direct VIP Personal Coaching
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic">
                    Coach Amen is on duty
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;You crushed your protein target yesterday. Make sure you get in your hydration before your afternoon conditioning session today.&rdquo;
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                    <span>⚡ Daily Check-ins</span>
                    <span>•</span>
                    <span>🥗 Meal Photo Review</span>
                    <span>•</span>
                    <span>📊 Weekly Protocol Recalibration</span>
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-center">
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>Message on Telegram</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            {/* TODAY'S PROTOCOL: Meals & Training Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left: Today's Assigned Meals */}
              <div className="athletic-card rounded-3xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🥗</span>
                    <h3 className="text-base font-black text-white uppercase italic">Today&apos;s Nutrition Schedule</h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    2/4 Completed
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { id: "meal1", time: "09:30 AM", name: "Avocado & Pasture Egg Plate", kcal: 460, protein: "32g Protein" },
                    { id: "meal2", time: "01:30 PM", name: "Herbed Chicken Breast & Quinoa", kcal: 580, protein: "48g Protein" },
                    { id: "meal3", time: "06:30 PM", name: "Wild Salmon & Steamed Greens", kcal: 520, protein: "42g Protein" },
                    { id: "snack", time: "04:00 PM", name: "Greek Yogurt & Organic Berries", kcal: 280, protein: "22g Protein" },
                  ].map((m) => (
                    <div
                      key={m.id}
                      onClick={() => toggleMeal(m.id)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        completedMeals[m.id]
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-6 w-6 rounded-lg flex items-center justify-center text-xs font-black ${
                          completedMeals[m.id] ? "bg-emerald-500 text-black" : "bg-slate-800 text-slate-400"
                        }`}>
                          {completedMeals[m.id] ? "✓" : "○"}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{m.name}</div>
                          <div className="text-[10px] text-slate-400">{m.time} • {m.protein}</div>
                        </div>
                      </div>
                      <span className="text-xs font-black text-emerald-400 font-mono">{m.kcal} kcal</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Today's Assigned Training Session */}
              <div className="athletic-card rounded-3xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏋️‍♂️</span>
                    <h3 className="text-base font-black text-white uppercase italic">Today&apos;s Workout Split</h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Day 3: Hypertrophy
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-white">Upper Body Power & Core</h4>
                    <span className="text-xs font-bold text-amber-400 font-mono">45 mins</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    High metabolic demand circuit designed to optimize insulin sensitivity and EPOC caloric afterburn.
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>1. Incline Dumbbell Bench Press</span>
                      <span className="font-mono text-emerald-400">4 sets × 10 reps</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>2. Weighted Neutral Pull-ups</span>
                      <span className="font-mono text-emerald-400">4 sets × 8 reps</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>3. Standing Dumbbell Lateral Raises</span>
                      <span className="font-mono text-emerald-400">3 sets × 15 reps</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>4. Hanging Leg Raises & Plank Hold</span>
                      <span className="font-mono text-emerald-400">3 sets to failure</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => alert("Workout logged! Great session athlete!")}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  Mark Workout Complete
                </button>
              </div>

            </div>

            {/* NUTRITION & RECIPES BANNER */}
            <div className="athletic-card rounded-3xl overflow-hidden border border-slate-800 relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                <div className="md:col-span-6 p-6 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                    Amen Culinary System
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic">
                    Anti-Inflammatory Meal Library
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed by Coach Amen: fresh whole foods, optimal fiber, and low glycemic load to keep you lean and energized.
                  </p>
                  <button
                    onClick={() => setActiveTab("nutrition")}
                    className="pt-1 text-xs font-black text-emerald-400 hover:text-emerald-300 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore All 24 Custom Recipes</span>
                    <span>→</span>
                  </button>
                </div>

                <div className="md:col-span-6 h-48 sm:h-56 relative overflow-hidden">
                  <Image
                    src="/images/banner.jpg"
                    alt="Amen Weight & Wellness Food Spread"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c111d] via-transparent to-transparent md:block hidden" />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================== TAB 2: NUTRITION & MEAL ARCHITECTURE ===================== */}
        {activeTab === "nutrition" && (
          <div className="space-y-6">
            <div className="athletic-card rounded-3xl p-6 border border-slate-800">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                Precision Nutrition
              </span>
              <h2 className="text-2xl font-black text-white uppercase italic mt-1">
                Bio-Individual Meal Architecture
              </h2>
              <p className="text-xs text-slate-400">
                Calibrated to supply exact amino acids, complex glycogens, and anti-inflammatory lipids.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  timing: "Morning Fuel",
                  title: "Avocado & Pasture Egg Scramble",
                  calories: "460 kcal",
                  protein: "32g Protein",
                  carbs: "12g Carbs",
                  fat: "22g Fats",
                  desc: "Choline-dense pastured yolks, extra virgin olive oil, wild spinach, and pumpkin seeds.",
                },
                {
                  timing: "Metabolic Lunch",
                  title: "Grilled Herb Chicken & Quinoa",
                  calories: "580 kcal",
                  protein: "48g Protein",
                  carbs: "42g Carbs",
                  fat: "14g Fats",
                  desc: "Lean grilled chicken breast, warm tri-color quinoa, roasted root vegetables.",
                },
                {
                  timing: "Recovery Dinner",
                  title: "Wild Alaskan Salmon & Asparagus",
                  calories: "520 kcal",
                  protein: "42g Protein",
                  carbs: "8g Carbs",
                  fat: "24g Fats",
                  desc: "High marine Omega-3 EPA/DHA fatty acids for deep overnight muscle repair.",
                },
              ].map((m, idx) => (
                <div key={idx} className="athletic-card rounded-3xl p-5 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      {m.timing}
                    </span>
                    <h3 className="text-base font-black text-white mt-2 mb-1">{m.title}</h3>
                    <div className="text-sm font-black text-emerald-400 font-mono mb-2">{m.calories}</div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{m.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 grid grid-cols-3 text-center text-[10px] font-black text-slate-400">
                    <div>{m.protein}</div>
                    <div>{m.carbs}</div>
                    <div>{m.fat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 3: WORKOUT SPLIT ===================== */}
        {activeTab === "workout" && (
          <div className="space-y-6">
            <div className="athletic-card rounded-3xl p-6 border border-slate-800">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Athletic Conditioning
              </span>
              <h2 className="text-2xl font-black text-white uppercase italic mt-1">
                Coach Amen&apos;s Training Splits
              </h2>
              <p className="text-xs text-slate-400">
                Progressive overload protocol focused on lean muscle preservation and metabolic rate acceleration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { day: "Monday & Thursday", split: "Upper Body Hypertrophy", exercises: ["Incline DB Press", "Weighted Pull-ups", "Lateral Raises", "Overhead Extensions"] },
                { day: "Tuesday & Friday", split: "Lower Body & Posterior Chain", exercises: ["Barbell Romanian Deadlifts", "Bulgarian Split Squats", "Leg Curls", "Calf Raises"] },
                { day: "Wednesday & Saturday", split: "Metabolic HIIT & Core", exercises: ["Kettlebell Swings", "Rowing Intervals", "Hanging Leg Raises", "Farmer Walks"] },
                { day: "Sunday", split: "Active Mobility & Recovery", exercises: ["30-min Outdoor Zone 2 Walk", "Hip Mobility Drills", "Contrast Shower", "Cold Plunge"] },
              ].map((w, idx) => (
                <div key={idx} className="athletic-card rounded-3xl p-5 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">{w.day}</span>
                    <span className="text-xs font-mono text-emerald-400 font-black">Active</span>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase italic">{w.split}</h3>
                  <div className="space-y-1 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    {w.exercises.map((ex, eIdx) => (
                      <div key={eIdx} className="flex justify-between">
                        <span>• {ex}</span>
                        <span className="text-slate-500 font-mono">3-4 sets</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 4: MEET COACH AMEN ===================== */}
        {activeTab === "coach" && (
          <div className="athletic-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-black border-2 border-emerald-500 shadow-2xl">
                  <Image
                    src="/images/coach.jpg"
                    alt="Coach Amen"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      Head Nutritionist & Founder
                    </span>
                    <h3 className="text-2xl font-black uppercase italic">Coach Amen</h3>
                    <p className="text-xs text-slate-400">Amen Weight & Wellness</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase">
                  ✦ Coaching Philosophy
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic leading-tight">
                  &ldquo;Consistency over intensity. Physiology over willpower.&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I founded <strong>Amen Weight & Wellness</strong> to give individuals a truly personalized, evidence-based approach to permanent fat loss and peak vitality.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When you join our program, you get 24/7 direct access to me on Telegram: daily meal verification, workout programming, and metabolic recalibration.
                </p>

                <div className="pt-2">
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Direct Message Coach Amen</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ===================== FOOTER ===================== */}
      <footer className="relative z-10 border-t border-slate-900 py-6 text-xs text-slate-500 athletic-card mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full overflow-hidden border border-emerald-500 bg-black">
              <Image src="/images/logo.jpg" alt="Logo" width={28} height={28} className="object-cover" />
            </div>
            <span className="font-bold text-slate-300">Amen Weight & Wellness</span>
          </div>
          <div>© 2026 Amen Athletic & Nutrition System • Directed by Coach Amen</div>
        </div>
      </footer>

      {/* ===================== MOBILE BOTTOM APP DOCK (TELEGRAM MINI APP) ===================== */}
      <div className="fixed bottom-2.5 inset-x-3.5 z-50 md:hidden">
        <div className="athletic-card rounded-2xl p-1.5 flex items-center justify-around border border-emerald-500/30 shadow-2xl bg-black/90 backdrop-blur-xl">
          {[
            { id: "dashboard", label: "Dashboard", icon: "⚡" },
            { id: "nutrition", label: "Nutrition", icon: "🥗" },
            { id: "workout", label: "Workout", icon: "🏋️‍♂️" },
            { id: "coach", label: "Coach", icon: "👤" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-1.5 px-3 rounded-xl transition-all cursor-pointer ${
                activeTab === item.id
                  ? "bg-emerald-500 text-black font-black shadow-md shadow-emerald-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

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
      <div aria-hidden="true" className="hero-mesh pointer-events-none absolute inset-x-0 top-0 -z-10 h-[920px]" />

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

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-3 sm:px-6 lg:px-8">
        <article id="workouts" className="scroll-mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
          <Activity size={19} className="text-emerald-300" aria-hidden="true" />
          <h2 className="mt-4 text-sm font-semibold text-white">Workouts that work for you</h2>
          <p className="mt-2 text-xs leading-6 text-white/50">Build strength and consistency with a routine tailored to your goals and your schedule.</p>
        </article>
        <article id="nutrition" className="scroll-mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
          <Utensils size={19} className="text-emerald-300" aria-hidden="true" />
          <h2 className="mt-4 text-sm font-semibold text-white">Nutrition without the guesswork</h2>
          <p className="mt-2 text-xs leading-6 text-white/50">Simple daily guidance helps you make progress without giving up the foods you enjoy.</p>
        </article>
        <article id="referral" className="scroll-mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
          <Link2 size={19} className="text-amber-300" aria-hidden="true" />
          <h2 className="mt-4 text-sm font-semibold text-white">Share progress, earn rewards</h2>
          <p className="mt-2 text-xs leading-6 text-white/50">Invite friends to join your wellness community and celebrate every win together.</p>
        </article>
      </section>

      <section id="mini-app" className="scroll-mt-4 border-t border-white/[0.08] bg-[#05070e]">
        <div className="mx-auto max-w-6xl px-4 pt-14 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <Droplets size={14} aria-hidden="true" />
            Your wellness toolkit
          </div>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Your next good day starts here.</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/50">
            Track your habits, find your next workout, and get support from Coach Amen.
          </p>
        </div>
        <div className="mt-8">
          <AmenMiniAppDashboard />
        </div>
      </section>
    </main>
  );
}
