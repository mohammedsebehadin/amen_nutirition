import { meals } from "@/lib/content";

export function Meals() {
  return (
    <section id="meals" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">The Culinary Blueprint</span>
        <h2 className="mt-1 mb-3 text-3xl font-black text-stone-900 sm:text-4xl">Sample Meals Coached by Amen</h2>
        <p className="text-sm text-stone-600">Satisfying, delicious whole-food recipes designed to optimize your glycemic load and fuel daily energy.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {meals.map((m) => (
          <div key={m.title} className="clean-feature-card flex flex-col justify-between rounded-2xl p-6">
            <div>
              <span className="inline-block rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800">{m.meal}</span>
              <h3 className="mt-3 text-lg font-extrabold text-stone-900">{m.title}</h3>
              <div className="mt-1 font-mono text-xs font-black text-emerald-700">{m.calories}</div>
              <p className="mt-3 text-xs leading-relaxed text-stone-600">{m.desc}</p>
            </div>
            <div className="mt-5 border-t border-stone-100 pt-3 text-[11px] font-bold text-stone-500">{m.macros}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
