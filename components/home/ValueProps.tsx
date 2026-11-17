import { Flame, HeartHandshake, ShieldCheck, Utensils } from "lucide-react";

const items = [
  { icon: Utensils, title: "100% Bio-Individual", desc: "Calibrated to your exact basal metabolic rate, body composition, and schedule." },
  { icon: HeartHandshake, title: "Direct WhatsApp & Telegram", desc: "Daily meal photo reviews and 1-on-1 accountability directly with Coach Amen." },
  { icon: Flame, title: "Zero Crash Dieting", desc: "Whole foods and anti-inflammatory meals that keep hunger and cravings away." },
  { icon: ShieldCheck, title: "Permanent Results", desc: "Sustainable metabolic resets that keep your ideal body weight off for life." },
];

export function ValueProps() {
  return (
    <section id="protocol" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="clean-feature-card rounded-2xl p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon size={20} /></div>
            <h3 className="text-sm font-extrabold text-stone-900">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
