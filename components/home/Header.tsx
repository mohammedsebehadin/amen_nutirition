import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { LINKS, whatsappLink } from "@/lib/site";

export function Header({ onAction }: { onAction?: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="Amen Weight & Wellness Homepage">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-emerald-600 bg-black shadow-xs">
            <Image src="/images/logo.jpg" alt="Amen Weight & Wellness Logo" width={40} height={40} className="h-full w-full scale-110 object-cover" priority />
          </div>
          <div>
            <span className="block text-base font-extrabold leading-tight tracking-tight text-stone-900">
              AMEN <span className="font-bold text-emerald-700">WELLNESS</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500">
              Weight &amp; Metabolic Health
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-600 md:flex">
          <a href="#protocol" className="transition-colors hover:text-emerald-700">The Protocol</a>
          <a href="#meals" className="transition-colors hover:text-emerald-700">Nutrition &amp; Meals</a>
          <a href="#coach" className="transition-colors hover:text-emerald-700">Coach Amen</a>
          <a href="#plans" className="transition-colors hover:text-emerald-700">Protocols &amp; Programs</a>
          <a href="#faq" className="transition-colors hover:text-emerald-700">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Hi Coach Amen, I would like to consult with you.")}
            target="_blank"
            rel="noreferrer"
            onClick={onAction}
            className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-emerald-600 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-900 transition hover:bg-emerald-100 active:scale-95 sm:inline-flex"
          >
            <Phone size={12} className="text-emerald-700" />
            <span>WhatsApp</span>
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noreferrer"
            onClick={onAction}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-800 active:scale-95"
          >
            <MessageCircle size={14} />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
