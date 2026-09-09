import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { MEDICOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";
import { SectorExtras } from "./SectorExtras";

export const Medicos = () => (
  <section id="medicos" data-testid="medicos-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{MEDICOS.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {MEDICOS.title}
          </h2>
          <p className="mt-3 text-[#D4AF37] font-medium">{MEDICOS.subtitle}</p>
          <p className="mt-5 text-slate-300 leading-relaxed">{MEDICOS.description}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-base font-bold text-white">Terminal Punto de Venta</h3>
            <ul className="mt-4 space-y-3">
              {MEDICOS.tpv.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#D4AF37]" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async"
            src={MEDICOS.image}
            alt="Soluciones para médicos"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[480px] object-cover"
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MEDICOS.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Star;
          return (
            <Reveal key={f.title} delay={i * 0.06}>
              <div data-testid={`medico-feature-${i}`} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
    <SectorExtras pains={MEDICOS.pains} faq={MEDICOS.faq} cta={MEDICOS.cta} note={MEDICOS.note} testid="medicos" />
  </section>
);
