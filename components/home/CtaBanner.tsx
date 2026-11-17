import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, LINKS, whatsappLink } from "@/lib/site";

export function CtaBanner({ onAction }: { onAction?: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="wellbites-hero-card relative overflow-hidden rounded-[2.5rem] p-8 text-center text-white sm:p-12">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-300">Ready to Transform Your Health?</span>
        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Start Your Journey with Coach Amen Today.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-emerald-50 opacity-90">
          Your personalized meal architecture, daily accountability, and metabolic reset are ready. Contact Coach Amen on WhatsApp or Telegram at <span className="font-bold text-white underline">{CONTACT.displayPhone}</span>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink("Hi Coach Amen, I am ready to start my wellness transformation.")} target="_blank" rel="noreferrer" onClick={onAction} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-emerald-950 shadow-xl transition hover:bg-emerald-50 active:scale-95">
            <Phone size={15} className="text-emerald-700" /><span>WhatsApp: {CONTACT.displayPhone}</span>
          </a>
          <a href={LINKS.telegram} target="_blank" rel="noreferrer" onClick={onAction} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
            <MessageCircle size={15} /><span>Telegram Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
