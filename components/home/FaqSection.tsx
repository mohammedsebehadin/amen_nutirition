"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export function FaqSection({ onToggle }: { onToggle?: () => void }) {
  const [open, setOpen] = useState(0);
  const toggle = (i: number) => {
    onToggle?.();
    setOpen(open === i ? -1 : i);
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Answers &amp; Verification</span>
        <h2 className="mt-1 mb-2 text-3xl font-black text-stone-900 sm:text-4xl">Frequently Asked Questions</h2>
        <p className="text-sm text-stone-600">Factual information about Coach Amen&apos;s nutritional methods, coaching delivery, and direct contact.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={faq.q} className="clean-feature-card cursor-pointer overflow-hidden rounded-2xl" onClick={() => toggle(idx)}>
            <div className="flex items-center justify-between p-5 text-left">
              <h3 className="pr-4 text-sm font-extrabold text-stone-900 sm:text-base">{faq.q}</h3>
              <ChevronDown size={18} className={`shrink-0 text-stone-500 transition-transform duration-200 ${open === idx ? "rotate-180 text-emerald-700" : ""}`} />
            </div>
            {open === idx && (
              <div className="border-t border-stone-100 px-5 pb-5 pt-1 text-xs leading-relaxed text-stone-600 sm:text-sm">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
