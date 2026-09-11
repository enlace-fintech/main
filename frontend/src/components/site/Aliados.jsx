import * as Icons from "lucide-react";
import { ALIADOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Aliados = () => (
  <section id="aliados" data-testid="aliados-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-3xl">
        <Overline>{ALIADOS.overline}</Overline>
        <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {ALIADOS.title}
        </h1>
        <p className="mt-5 text-slate-300 leading-relaxed">{ALIADOS.description}</p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ALIADOS.grupos.map((g, i) => {
          const Icon = Icons[g.icon] || Icons.Handshake;
          return (
            <Reveal key={g.cat} delay={i * 0.05}>
              <div data-testid={`aliado-${i}`} className={`group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300 ${g.items.length > 8 ? "md:col-span-2 lg:col-span-3" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h2 className="font-display text-base font-bold text-white">{g.cat}</h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((n) => (
                    <span key={n} className="rounded-full border border-white/10 bg-[#0B132B]/60 px-3 py-1.5 text-sm text-slate-200">{n}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-slate-500">* Marcas propiedad de sus titulares; disponibilidad sujeta a convenio vigente.</p>
    </div>
  </section>
);
