import { ALIADOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Aliados = () => (
  <section id="aliados" data-testid="aliados-section" className="relative py-20 lg:py-24 bg-[#0e1836] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
      <Reveal>
        <Overline>{ALIADOS.overline}</Overline>
        <h2 className="font-display mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto">
          {ALIADOS.title}
        </h2>
        <p className="mt-4 text-slate-400 leading-relaxed max-w-xl mx-auto">{ALIADOS.description}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {ALIADOS.logos.map((l, i) => (
            <div
              key={l}
              data-testid={`aliado-${i}`}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-5 min-w-[130px] hover:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <span className="font-display text-lg font-bold tracking-wide text-slate-200">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
