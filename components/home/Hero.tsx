import Image from "next/image";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { CONTACT, LINKS, whatsappLink } from "@/lib/site";

export function Hero({ onAction }: { onAction?: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="wellbites-hero-card relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:col-span-7">
          <div className="relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-emerald-100 backdrop-blur-md">
              <Sparkles size={14} className="text-emerald-300" />
              Personalized Metabolic Architecture
            </div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Freshly Prepared. <br />
              <span className="font-serif font-normal italic text-emerald-200">Naturally Nourishing.</span>
            </h1>
            <p className="max-w-lg text-sm font-medium leading-relaxed text-emerald-50 opacity-90 sm:text-base">
              From bio-individual whole food meals to daily metabolic habit coaching, every plan is thoughtfully prepared by Coach Amen to help you eat well, lose visceral fat, and sustain lifelong vitality.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappLink("Hi Coach Amen, I would like to get a healthy meals protocol.")}
                target="_blank"
                rel="noreferrer"
                onClick={onAction}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-black uppercase tracking-wider text-emerald-950 shadow-lg shadow-black/10 transition hover:bg-emerald-50 active:scale-95"
              >
                <Phone size={14} className="text-emerald-700" />
                <span>WhatsApp: {CONTACT.displayPhone}</span>
              </a>
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noreferrer"
                onClick={onAction}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <MessageCircle size={15} />
                <span>Telegram Chat</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 h-48 w-full overflow-hidden rounded-2xl border border-white/20 shadow-xl sm:h-56">
            <Image src="/images/banner.jpg" alt="Amen Weight & Wellness Wholesome Fresh Bowls" fill className="object-cover object-center" priority />
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <div className="floating-nutrition-card relative rounded-[2.5rem] p-6 sm:p-8">
            <div className="absolute -right-2 -top-3 rotate-6 rounded-xl bg-amber-400 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-stone-900 shadow-md">
              ★ 100% Whole Foods
            </div>
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">Biochemical Calibration</span>
              <h2 className="mt-0.5 text-2xl font-black text-stone-900">What&apos;s Inside Your Protocol</h2>
            </div>
            <div className="divide-y divide-stone-100 text-xs">
              {[
                ["Organic Vegetables & Fiber", "150g - 200g", false],
                ["Bioavailable Premium Protein", "130g - 160g", true],
                ["Slow-Burning Whole Grain Carbs", "Calibrated (Low-GI)", false],
                ["Anti-Inflammatory Healthy Fats", "55g - 70g", false],
                ["Natural Seasoning & Electrolytes", "Optimal", false],
              ].map(([label, value, accent]) => (
                <div key={label as string} className="flex justify-between py-2.5">
                  <span className="font-semibold text-stone-700">{label}</span>
                  <span className={`font-mono font-black ${accent ? "text-emerald-700" : "text-stone-900"}`}>{value}</span>
                </div>
              ))}
              <div className="flex justify-between border-t-2 border-stone-200 py-3">
                <span className="font-extrabold uppercase tracking-wider text-stone-900">Total Daily Meal Servings</span>
                <span className="font-mono font-black text-stone-900">3 Meals + 1 Fuel Snack</span>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-3.5">
                <div>
                  <span className="block text-xs font-extrabold text-emerald-950">Daily Wellness Box Protocol</span>
                  <span className="block text-[11px] text-emerald-700">Custom macro plan &amp; shopping list</span>
                </div>
                <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-xs font-black text-emerald-800">Tailored Plan</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                <div>
                  <span className="block text-xs font-extrabold text-stone-900">VIP Coached Nutrition &amp; Habits</span>
                  <span className="block text-[11px] text-stone-500">1-on-1 daily reviews with Coach Amen</span>
                </div>
                <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-black text-stone-800">1-on-1 Coached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
