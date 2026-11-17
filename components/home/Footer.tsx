import Image from "next/image";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { CONTACT, LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/90 bg-white py-12 text-xs text-stone-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-emerald-600 bg-black">
                <Image src="/images/logo.jpg" alt="Amen Logo" width={32} height={32} className="object-cover" />
              </div>
              <span className="text-sm font-extrabold text-stone-900">Amen Weight &amp; Wellness</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-500">Evidence-based metabolic nutrition and 1-on-1 personal coaching with Coach Amen.</p>
          </div>
          <div>
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-wider text-stone-900">Programs</span>
            <ul className="space-y-2">
              <li><a href="#protocol" className="hover:text-emerald-700">Metabolic Fat Loss Protocol</a></li>
              <li><a href="#meals" className="hover:text-emerald-700">Anti-Inflammatory Meal Architecture</a></li>
              <li><a href="#coach" className="hover:text-emerald-700">1-on-1 Coaching with Coach Amen</a></li>
              <li><a href="#plans" className="hover:text-emerald-700">VIP Transformation Packages</a></li>
            </ul>
          </div>
          <div>
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-wider text-stone-900">Direct Contact</span>
            <ul className="space-y-2">
              <li><a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold text-stone-700 hover:text-emerald-700"><Phone size={13} className="text-emerald-600" /><span>WhatsApp: {CONTACT.displayPhone}</span></a></li>
              <li><a href={LINKS.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold text-stone-700 hover:text-emerald-700"><MessageCircle size={13} className="text-emerald-600" /><span>Telegram: {CONTACT.displayPhone}</span></a></li>
              <li><a href={LINKS.tel} className="flex items-center gap-2 text-stone-500 hover:text-emerald-700"><span>Direct Call: {CONTACT.displayPhone}</span></a></li>
            </ul>
          </div>
          <div>
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-wider text-stone-900">Client Platform</span>
            <p className="mb-3 leading-relaxed text-stone-500">Coaching delivered seamlessly via Telegram Mini App and direct WhatsApp consultation.</p>
            <div className="flex items-center gap-2">
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"><span>Launch Telegram</span><ArrowUpRight size={14} /></a>
              <span>•</span>
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"><span>WhatsApp</span><ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-stone-100 pt-6 text-stone-400 sm:flex-row">
          <div>© 2026 Amen Weight &amp; Wellness. All rights reserved. Directed by Coach Amen.</div>
          <div>Direct Line: {CONTACT.displayPhone} (WhatsApp &amp; Telegram)</div>
        </div>
      </div>
    </footer>
  );
}
