"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ShieldCheck,
  HeartHandshake,
  Utensils,
  Flame,
  Globe2,
  MessageCircle,
} from "lucide-react";

export default function AmenWellnessPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfa] text-stone-900 selection:bg-emerald-600/20 selection:text-emerald-950">
      
      {/* ======================= TOP ANNOUNCEMENT BAR (BrandSurge Style) ======================= */}
      <div className="border-b border-emerald-900/10 bg-[#14532d] px-4 py-2 text-center text-xs font-semibold text-emerald-100">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Now live on Telegram Mini App — Personalized Nutrition &amp; 1-on-1 Coaching with Coach Amen.</span>
          <a
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 font-bold underline decoration-emerald-300 underline-offset-2 hover:text-white sm:inline-flex"
          >
            Launch Mini App
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* ======================= CLEAN NAVBAR (WellBites & BrandSurge Style) ======================= */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3" aria-label="Amen Weight & Wellness Homepage">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-emerald-600 bg-black shadow-xs">
              <Image
                src="/images/logo.jpg"
                alt="Amen Weight & Wellness Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover scale-110"
                priority
              />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-tight text-stone-900 leading-tight">
                AMEN <span className="text-emerald-700 font-bold">WELLNESS</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                Weight &amp; Metabolic Health
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-600 md:flex">
            <a href="#protocol" className="transition-colors hover:text-emerald-700">The Protocol</a>
            <a href="#meals" className="transition-colors hover:text-emerald-700">Nutrition &amp; Meals</a>
            <a href="#coach" className="transition-colors hover:text-emerald-700">Coach Amen</a>
            <a href="#plans" className="transition-colors hover:text-emerald-700">Plans &amp; Pricing</a>
            <a href="#faq" className="transition-colors hover:text-emerald-700">FAQ</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-800 active:scale-95 cursor-pointer"
            >
              <span>Open in Telegram</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ======================= HERO SECTION (WellBites Inspired) ======================= */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            
            {/* Left Big Rounded Green Hero Card (Directly like WellBites) */}
            <div className="wellbites-hero-card rounded-[2.5rem] p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-emerald-100 backdrop-blur-md">
                  <Sparkles size={14} className="text-emerald-300" />
                  Personalized Metabolic Architecture
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Freshly Prepared. <br />
                  <span className="italic font-serif font-normal text-emerald-200">
                    Naturally Nourishing.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-emerald-50 leading-relaxed max-w-lg font-medium opacity-90">
                  From bio-individual whole food meals to daily metabolic habit coaching, every plan is thoughtfully prepared by Coach Amen to help you eat well, lose visceral fat, and sustain lifelong vitality.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#plans"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-xs font-black uppercase tracking-wider text-emerald-950 shadow-lg shadow-black/10 transition hover:bg-emerald-50 active:scale-95 cursor-pointer"
                  >
                    Get Healthy Meals Plan
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle size={15} />
                    <span>Chat on Telegram</span>
                  </a>
                </div>
              </div>

              {/* Culinary Photography Teaser */}
              <div className="mt-8 relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <Image
                  src="/images/banner.jpg"
                  alt="Amen Weight & Wellness Wholesome Fresh Bowls"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right Floating Card: "What's Inside Your Meal/Protocol" (Directly like WellBites) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="floating-nutrition-card rounded-[2.5rem] p-6 sm:p-8 relative">
                
                {/* Yellow Starburst Badge (like WellBites) */}
                <div className="absolute -top-3 -right-2 rotate-6 rounded-xl bg-amber-400 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-stone-900 shadow-md">
                  ★ 100% Whole Foods
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                    Biochemical Calibration
                  </span>
                  <h2 className="text-2xl font-black text-stone-900 mt-0.5">
                    What&apos;s Inside Your Protocol
                  </h2>
                </div>

                {/* Macro & Component Table */}
                <div className="divide-y divide-stone-100 text-xs">
                  <div className="flex justify-between py-2.5">
                    <span className="font-semibold text-stone-700">Organic Vegetables &amp; Fiber</span>
                    <span className="font-black text-stone-900 font-mono">150g - 200g</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="font-semibold text-stone-700">Bioavailable Premium Protein</span>
                    <span className="font-black text-emerald-700 font-mono">130g - 160g</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="font-semibold text-stone-700">Slow-Burning Whole Grain Carbs</span>
                    <span className="font-black text-stone-900 font-mono">Calibrated (Low-GI)</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="font-semibold text-stone-700">Anti-Inflammatory Healthy Fats</span>
                    <span className="font-black text-stone-900 font-mono">55g - 70g</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="font-semibold text-stone-700">Natural Seasoning &amp; Electrolytes</span>
                    <span className="font-black text-stone-900 font-mono">Optimal</span>
                  </div>
                  <div className="flex justify-between py-3 border-t-2 border-stone-200">
                    <span className="font-extrabold uppercase tracking-wider text-stone-900">Total Daily Meal Servings</span>
                    <span className="font-black text-stone-900 font-mono">3 Meals + 1 Fuel Snack</span>
                  </div>
                </div>

                {/* Price / Plan Pills (like WellBites) */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between rounded-2xl bg-emerald-50/80 p-3.5 border border-emerald-200/80">
                    <div>
                      <span className="block text-xs font-extrabold text-emerald-950">Daily Wellness Box Protocol</span>
                      <span className="block text-[11px] text-emerald-700">Custom macro plan &amp; shopping list</span>
                    </div>
                    <span className="text-base font-black text-emerald-900 font-mono">$12/wk</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-stone-50 p-3.5 border border-stone-200">
                    <div>
                      <span className="block text-xs font-extrabold text-stone-900">VIP Coached Nutrition &amp; Habits</span>
                      <span className="block text-[11px] text-stone-500">1-on-1 daily reviews with Coach Amen</span>
                    </div>
                    <span className="text-base font-black text-stone-900 font-mono">$29/wk</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ======================= 4 VALUE PROPOSITIONS STRIP (BrandSurge Style) ======================= */}
        <section id="protocol" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            
            <div className="clean-feature-card rounded-2xl p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Utensils size={20} />
              </div>
              <h3 className="text-sm font-extrabold text-stone-900">100% Bio-Individual</h3>
              <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                Calibrated to your exact basal metabolic rate, body composition, and schedule.
              </p>
            </div>

            <div className="clean-feature-card rounded-2xl p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <HeartHandshake size={20} />
              </div>
              <h3 className="text-sm font-extrabold text-stone-900">Direct Telegram Coach</h3>
              <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                Daily meal photo reviews and 1-on-1 accountability directly with Coach Amen.
              </p>
            </div>

            <div className="clean-feature-card rounded-2xl p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Flame size={20} />
              </div>
              <h3 className="text-sm font-extrabold text-stone-900">Zero Crash Dieting</h3>
              <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                Whole foods and anti-inflammatory meals that keep hunger and cravings away.
              </p>
            </div>

            <div className="clean-feature-card rounded-2xl p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm font-extrabold text-stone-900">Permanent Results</h3>
              <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                Sustainable metabolic resets that keep your ideal body weight off for life.
              </p>
            </div>

          </div>
        </section>

        {/* ======================= MEET COACH AMEN SECTION (GEO & E-E-A-T Spotlight) ======================= */}
        <section id="coach" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="clean-feature-card rounded-[2.5rem] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              
              <div className="lg:col-span-5">
                <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border-2 border-emerald-600 bg-stone-900 shadow-xl">
                  <Image
                    src="/images/coach.jpg"
                    alt="Coach Amen — Head Nutritionist & Athletic Coach"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                      Founder &amp; Head Director
                    </span>
                    <h3 className="text-xl font-black">Coach Amen</h3>
                    <p className="text-xs text-stone-300">Amen Weight &amp; Wellness</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 rounded-full fresh-badge px-3 py-1 text-xs font-bold">
                  ✦ Coached with Empathy &amp; Science
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight">
                  &ldquo;Sustainable fat loss is built on biochemistry, not starving yourself.&rdquo;
                </h2>

                <p className="text-sm text-stone-600 leading-relaxed">
                  I founded <strong>Amen Weight &amp; Wellness</strong> to rescue individuals from restrictive fad diets that cause metabolic slowdown, hormone imbalances, and painful rebound weight gain.
                </p>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Every client who works with me receives a protocol calibrated specifically for their body: balanced proteins, slow-burning glycogens, and anti-inflammatory whole meals. Plus, with our Telegram Mini App, you can send me your meals every day for instant accountability.
                </p>

                <div className="grid grid-cols-3 gap-3 py-2 text-center text-xs">
                  <div className="rounded-xl bg-stone-50 p-3 border border-stone-200">
                    <span className="block text-xl font-black text-emerald-700 font-mono">500+</span>
                    <span className="text-stone-500 text-[11px] font-semibold">Transformations</span>
                  </div>
                  <div className="rounded-xl bg-stone-50 p-3 border border-stone-200">
                    <span className="block text-xl font-black text-emerald-700 font-mono">-8.4kg</span>
                    <span className="text-stone-500 text-[11px] font-semibold">Avg 90-Day Loss</span>
                  </div>
                  <div className="rounded-xl bg-stone-50 p-3 border border-stone-200">
                    <span className="block text-xl font-black text-emerald-700 font-mono">98%</span>
                    <span className="text-stone-500 text-[11px] font-semibold">Habit Retention</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-emerald-800 active:scale-95 cursor-pointer"
                  >
                    <span>Message Coach Amen on Telegram</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================= NUTRITION & MEAL ARCHITECTURE ======================= */}
        <section id="meals" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              The Culinary Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1 mb-3">
              Sample Meals Coached by Amen
            </h2>
            <p className="text-sm text-stone-600">
              Satisfying, delicious whole-food recipes designed to optimize your glycemic load and fuel daily energy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                meal: "Breakfast Fuel",
                title: "Avocado & Pasture Egg Scramble",
                calories: "460 kcal",
                protein: "32g Protein • 22g Fats • 8g Net Carbs",
                desc: "Pastured egg yolks for choline and hormone synthesis, ripe avocado, wild baby spinach, and roasted pumpkin seeds.",
              },
              {
                meal: "Metabolic Lunch",
                title: "Lemon Herb Chicken & Quinoa",
                calories: "580 kcal",
                protein: "48g Protein • 14g Fats • 42g Complex Carbs",
                desc: "Tender grilled chicken breast, warm tri-color quinoa, roasted zucchini, and extra virgin Greek olive oil.",
              },
              {
                meal: "Recovery Dinner",
                title: "Wild Alaskan Salmon & Asparagus",
                calories: "520 kcal",
                protein: "42g Protein • 24g Fats • 8g Net Carbs",
                desc: "Wild-caught salmon packed with Omega-3 EPA/DHA fatty acids for cellular repair and deep overnight metabolic recovery.",
              },
            ].map((m, idx) => (
              <div key={idx} className="clean-feature-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200">
                    {m.meal}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-stone-900">{m.title}</h3>
                  <div className="mt-1 font-mono text-xs font-black text-emerald-700">{m.calories}</div>
                  <p className="mt-3 text-xs text-stone-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-5 border-t border-stone-100 pt-3 text-[11px] font-bold text-stone-500">
                  {m.protein}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================= PLANS & PRICING (BrandSurge Products Style) ======================= */}
        <section id="plans" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Clear &amp; Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1 mb-2">
              Choose Your Transformation Plan
            </h2>
            <p className="text-sm text-stone-600">
              Select the coaching level that matches your commitment. All plans sync directly with Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Plan 1 */}
            <div className="clean-feature-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Self-Paced</span>
                <h3 className="text-xl font-black text-stone-900 mt-1">Metabolic Meal Plan</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-stone-900 font-mono">$12</span>
                  <span className="text-xs font-semibold text-stone-500">/ week</span>
                </div>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  Full custom macro-balanced nutrition plan, recipes, and shopping lists tailored to your body weight.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Bio-individual calorie &amp; macro targets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Full recipe guides &amp; grocery list</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Telegram Mini App access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-stone-300 bg-white py-3 text-center text-xs font-bold text-stone-800 transition hover:bg-stone-50 active:scale-95 cursor-pointer"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Plan 2: Most Popular */}
            <div className="clean-feature-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-emerald-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                Most Popular
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Coached Protocol</span>
                <h3 className="text-xl font-black text-stone-900 mt-1">1-on-1 Nutrition &amp; Habits</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-emerald-800 font-mono">$29</span>
                  <span className="text-xs font-semibold text-stone-500">/ week</span>
                </div>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  Personal coaching with Coach Amen: daily meal photo review, habit accountability, and weekly adjustments.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Everything in Metabolic Meal Plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Daily meal photo reviews with Coach Amen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Weekly progress &amp; macro adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Direct Telegram priority messaging</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full bg-emerald-700 py-3 text-center text-xs font-black uppercase tracking-wider text-white shadow-md shadow-emerald-700/20 transition hover:bg-emerald-800 active:scale-95 cursor-pointer"
                >
                  Start Coached Protocol
                </a>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="clean-feature-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Comprehensive</span>
                <h3 className="text-xl font-black text-stone-900 mt-1">VIP Full Transformation</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-stone-900 font-mono">$49</span>
                  <span className="text-xs font-semibold text-stone-500">/ week</span>
                </div>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  Complete nutrition, custom workout programming, biometric tracking, and direct voice/call consultations.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Everything in Coached Protocol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Personalized workout &amp; gym split</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>Bi-weekly 1-on-1 strategy calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600 shrink-0" />
                    <span>VIP 24/7 direct coach access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-stone-300 bg-white py-3 text-center text-xs font-bold text-stone-800 transition hover:bg-stone-50 active:scale-95 cursor-pointer"
                >
                  Apply for VIP Coaching
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ======================= FAQ SECTION (SEO & Generative Engine Optimization / GEO) ======================= */}
        <section id="faq" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Answers &amp; Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-stone-600">
              Factual, transparent information about Coach Amen&apos;s nutritional methods and the Telegram platform.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How does the Amen Weight & Wellness protocol work?",
                a: "The Amen Protocol begins with a metabolic and lifestyle assessment. Coach Amen designs a 100% bio-individual meal architecture with calibrated proteins, healthy fats, and low-glycemic carbs to accelerate fat oxidation while keeping hunger and cravings under control.",
              },
              {
                q: "How do I access Coach Amen on Telegram?",
                a: "You can open our Telegram Mini App in one tap from your phone or desktop. Inside Telegram, you can review your daily meal schedule, log habits, and send photos of your meals directly to Coach Amen for real-time feedback.",
              },
              {
                q: "Are the nutrition plans restrictive or based on crash diets?",
                a: "No. Coach Amen strictly avoids crash starvation diets that wreck metabolism. Every protocol is built around anti-inflammatory whole foods, satisfying portions, and sustainable nutritional science that you can maintain for life.",
              },
              {
                q: "What results can I typically expect?",
                a: "Clients on the coached protocol typically lose an average of 0.5kg to 1.0kg of fat per week while maintaining lean muscle and seeing significant improvements in digestive health, daily energy, and blood sugar stability.",
              },
              {
                q: "Can I join from outside the United States?",
                a: "Yes! Coach Amen works with clients worldwide through our Telegram Mini App, providing localized grocery shopping lists and international consultation scheduling.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="clean-feature-card rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between p-5 text-left">
                  <h3 className="text-sm sm:text-base font-extrabold text-stone-900 pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={18}
                    className={`text-stone-500 transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-emerald-700" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ======================= DIRECT TELEGRAM CTA BANNER ======================= */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="wellbites-hero-card rounded-[2.5rem] p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
              Ready to Transform Your Health?
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight">
              Start Your Journey with Coach Amen Today.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-emerald-50 leading-relaxed opacity-90">
              Your personalized meal architecture, daily accountability, and metabolic reset are ready in one tap inside Telegram.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-wider text-emerald-950 shadow-xl transition hover:bg-emerald-50 active:scale-95 cursor-pointer"
              >
                <span>Open Amen Wellness in Telegram</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ======================= COMPREHENSIVE FOOTER (GEO & SEO Signals) ======================= */}
      <footer className="border-t border-stone-200/90 bg-white py-12 text-xs text-stone-500">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-emerald-600 bg-black">
                  <Image src="/images/logo.jpg" alt="Amen Logo" width={32} height={32} className="object-cover" />
                </div>
                <span className="font-extrabold text-stone-900 text-sm">Amen Weight &amp; Wellness</span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                Evidence-based metabolic nutrition and 1-on-1 personal coaching with Coach Amen.
              </p>
            </div>

            <div>
              <span className="font-extrabold text-stone-900 uppercase tracking-wider block mb-3 text-[11px]">
                Programs
              </span>
              <ul className="space-y-2">
                <li><a href="#protocol" className="hover:text-emerald-700">Metabolic Fat Loss Protocol</a></li>
                <li><a href="#meals" className="hover:text-emerald-700">Anti-Inflammatory Meal Architecture</a></li>
                <li><a href="#coach" className="hover:text-emerald-700">1-on-1 Coaching with Coach Amen</a></li>
                <li><a href="#plans" className="hover:text-emerald-700">VIP Transformation Packages</a></li>
              </ul>
            </div>

            <div>
              <span className="font-extrabold text-stone-900 uppercase tracking-wider block mb-3 text-[11px]">
                Geographic Coverage (GEO)
              </span>
              <ul className="space-y-1.5 text-stone-500">
                <li className="flex items-center gap-1.5"><Globe2 size={13} className="text-emerald-600" /> Worldwide Online Coaching</li>
                <li>🇺🇸 United States &amp; Canada</li>
                <li>🇬🇧 United Kingdom &amp; Europe</li>
                <li>🇦🇪 UAE &amp; Middle East</li>
              </ul>
            </div>

            <div>
              <span className="font-extrabold text-stone-900 uppercase tracking-wider block mb-3 text-[11px]">
                Telegram Mini App
              </span>
              <p className="text-stone-500 mb-3 leading-relaxed">
                Seamlessly integrated with Telegram WebApp SDK and HMAC cryptographic verification.
              </p>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Launch Bot on Telegram</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          <div className="mt-12 border-t border-stone-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400">
            <div>© 2026 Amen Weight &amp; Wellness. All rights reserved. Directed by Coach Amen.</div>
            <div>Designed for simplicity, speed, and real health transformation.</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
