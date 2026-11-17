import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, LINKS, whatsappLink } from "@/lib/site";

export function Coach({ onAction }: { onAction?: () => void }) {
  return (
    <section id="coach" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="clean-feature-card rounded-[2.5rem] p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border-2 border-emerald-600 bg-stone-900 shadow-xl">
              <Image src="/images/coach.jpg" alt="Coach Amen — Head Nutritionist & Athletic Coach" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Founder &amp; Head Director</span>
                <h3 className="text-xl font-black">Coach Amen</h3>
                <p className="text-xs text-stone-300">Amen Weight &amp; Wellness</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-left lg:col-span-7">
            <div className="fresh-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold">✦ Coached with Empathy &amp; Science</div>
            <h2 className="text-3xl font-black leading-tight text-stone-900 sm:text-4xl">&ldquo;Sustainable fat loss is built on biochemistry, not starving yourself.&rdquo;</h2>
            <p className="text-sm leading-relaxed text-stone-600">I founded <strong>Amen Weight &amp; Wellness</strong> to rescue individuals from restrictive fad diets that cause metabolic slowdown, hormone imbalances, and painful rebound weight gain.</p>
            <p className="text-sm leading-relaxed text-stone-600">Every client who works with me receives a protocol calibrated specifically for their body: balanced proteins, slow-burning glycogens, and anti-inflammatory whole meals. Plus, you can send me your meals every day on WhatsApp and Telegram for instant personal accountability.</p>
            <div className="grid grid-cols-3 gap-3 py-2 text-center text-xs">
              {[["500+", "Transformations"], ["-8.4kg", "Avg 90-Day Loss"], ["98%", "Habit Retention"]].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                  <span className="block font-mono text-xl font-black text-emerald-700">{n}</span>
                  <span className="text-[11px] font-semibold text-stone-500">{l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={whatsappLink("Hi Coach Amen, I would like to learn more about your nutrition coaching.")} target="_blank" rel="noreferrer" onClick={onAction} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#16a34a] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#15803d] active:scale-95">
                <Phone size={14} /><span>WhatsApp: {CONTACT.displayPhone}</span>
              </a>
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" onClick={onAction} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0284c7] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#0369a1] active:scale-95">
                <MessageCircle size={15} /><span>Telegram Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
