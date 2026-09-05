import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { CRIPTO } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Cripto = () => (
  <section id="cripto" data-testid="cripto-section" className="relative py-24 lg:py-32 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img
            src={CRIPTO.image}
            alt="Pagos con cripto"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline>{CRIPTO.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {CRIPTO.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{CRIPTO.description}</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {CRIPTO.cards.map((c, i) => {
              const Icon = Icons[c.icon] || Icons.Coins;
              return (
                <div key={c.title} data-testid={`cripto-card-${i}`} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <Icon size={22} className="text-[#D4AF37]" strokeWidth={1.5} />
                  <h3 className="font-display mt-3 text-sm font-bold text-white leading-snug">{c.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <h3 className="font-display mt-16 text-2xl font-bold tracking-tight text-white">¿Por qué elegirnos?</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CRIPTO.why.map((w, i) => (
            <div key={w.title} data-testid={`cripto-why-${i}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Check size={18} className="text-[#D4AF37]" strokeWidth={2} />
              <h4 className="font-display mt-3 text-base font-bold text-white">{w.title}</h4>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
