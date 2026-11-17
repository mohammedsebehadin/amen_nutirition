import { Check, MessageCircle, Phone } from "lucide-react";
import { LINKS, whatsappLink } from "@/lib/site";

export function Plans({ onAction, heavy }: { onAction?: () => void; heavy?: () => void }) {
  return (
    <section id="plans" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Personalized Coaching</span>
        <h2 className="mt-1 mb-2 text-3xl font-black text-stone-900 sm:text-4xl">Choose Your Transformation Protocol</h2>
        <p className="text-sm text-stone-600">Every body is unique. Contact Coach Amen on WhatsApp or Telegram to get a customized protocol quote.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="clean-feature-card flex flex-col justify-between rounded-3xl p-6 sm:p-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Self-Paced</span>
            <h3 className="mt-1 text-xl font-black text-stone-900">Metabolic Meal Plan</h3>
            <div className="mt-4 flex items-center gap-2"><span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-900">Custom Tailored</span><span className="text-xs font-semibold text-stone-500">Inquire for Details</span></div>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">Full custom macro-balanced nutrition plan, recipes, and shopping lists tailored to your body weight.</p>
            <ul className="mt-6 space-y-2.5 text-xs font-medium text-stone-700">
              {["Bio-individual calorie & macro targets", "Full recipe guides & grocery list", "Telegram & WhatsApp delivery"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-emerald-600" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <a href={whatsappLink("Hi Coach Amen, I am interested in the Metabolic Meal Plan.")} target="_blank" rel="noreferrer" onClick={onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-emerald-600 bg-emerald-50/50 py-2.5 text-xs font-bold text-emerald-900 transition hover:bg-emerald-100 active:scale-95"><Phone size={12} className="text-emerald-700" /><span>WhatsApp</span></a>
            <a href={LINKS.telegram} target="_blank" rel="noreferrer" onClick={onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-emerald-700 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-800 active:scale-95"><MessageCircle size={13} /><span>Telegram</span></a>
          </div>
        </div>

        <div className="clean-feature-card relative flex flex-col justify-between rounded-3xl border-2 border-emerald-600 p-6 shadow-xl sm:p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">Most Popular</div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Coached Protocol</span>
            <h3 className="mt-1 text-xl font-black text-stone-900">1-on-1 Nutrition &amp; Habits</h3>
            <div className="mt-4 flex items-center gap-2"><span className="rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-950">Direct Coaching</span><span className="text-xs font-semibold text-emerald-800">Daily Accountability</span></div>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">Personal coaching with Coach Amen: daily meal photo review, habit accountability, and weekly adjustments.</p>
            <ul className="mt-6 space-y-2.5 text-xs font-medium text-stone-700">
              {["Everything in Metabolic Meal Plan", "Daily meal photo reviews with Coach Amen", "Weekly progress & macro adjustments", "Direct WhatsApp & Telegram access"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-emerald-600" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <a href={whatsappLink("Hi Coach Amen, I would like to apply for 1-on-1 Nutrition & Habits coaching.")} target="_blank" rel="noreferrer" onClick={heavy || onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#16a34a] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#15803d] active:scale-95"><Phone size={13} /><span>WhatsApp</span></a>
            <a href={LINKS.telegram} target="_blank" rel="noreferrer" onClick={heavy || onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#0284c7] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#0369a1] active:scale-95"><MessageCircle size={14} /><span>Telegram</span></a>
          </div>
        </div>

        <div className="clean-feature-card flex flex-col justify-between rounded-3xl p-6 sm:p-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Comprehensive</span>
            <h3 className="mt-1 text-xl font-black text-stone-900">VIP Full Transformation</h3>
            <div className="mt-4 flex items-center gap-2"><span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-900">VIP Bespoke</span><span className="text-xs font-semibold text-stone-500">All-Inclusive</span></div>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">Complete nutrition, custom workout programming, biometric tracking, and direct voice/call consultations.</p>
            <ul className="mt-6 space-y-2.5 text-xs font-medium text-stone-700">
              {["Everything in Coached Protocol", "Personalized workout & gym split", "1-on-1 strategy calls & voice feedback", "VIP priority line direct with Coach Amen"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-emerald-600" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <a href={whatsappLink("Hi Coach Amen, I am interested in the VIP Full Transformation program.")} target="_blank" rel="noreferrer" onClick={onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-emerald-600 bg-emerald-50/50 py-2.5 text-xs font-bold text-emerald-900 transition hover:bg-emerald-100 active:scale-95"><Phone size={12} className="text-emerald-700" /><span>WhatsApp</span></a>
            <a href={LINKS.telegram} target="_blank" rel="noreferrer" onClick={onAction} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-emerald-700 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-800 active:scale-95"><MessageCircle size={13} /><span>Telegram</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
