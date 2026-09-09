import { Handshake } from "lucide-react";
import { ALIADOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Aliados = () => (
  <section id="aliados" data-testid="aliados-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
      <Reveal>
        <Overline>{ALIADOS.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {ALIADOS.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl mx-auto">{ALIADOS.description}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {ALIADOS.categories.map((c, i) => (
            <div
              key={c}
              data-testid={`aliado-${i}`}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 hover:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                <Handshake size={20} strokeWidth={1.5} />
              </span>
              <span className="font-display text-sm font-bold tracking-wide text-slate-200 text-center">{c}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
