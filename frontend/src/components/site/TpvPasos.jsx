import * as Icons from "lucide-react";
import { Wifi } from "lucide-react";
import { TPV } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const TpvPasos = () => (
  <section data-testid="tpv-steps-section" className="relative py-16 lg:py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>Cómo funciona</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">{TPV.stepsTitle}</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TPV.steps.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Circle;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div data-testid={`tpv-step-${i}`} className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="font-display absolute right-6 top-5 text-4xl font-black text-white/5 group-hover:text-[#D4AF37]/20 transition-colors duration-300">
                  0{i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-slate-300">
        <Wifi size={18} className="shrink-0 text-[#D4AF37]" />
        <span data-testid="tpv-requisitos">{TPV.requisitos}</span>
      </Reveal>
    </div>
  </section>
);
