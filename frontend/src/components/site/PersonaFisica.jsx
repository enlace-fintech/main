import { CreditCard, Check } from "lucide-react";
import { PERSONA } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const PersonaFisica = () => (
  <section
    id="persona"
    data-testid="persona-section"
    className="relative py-24 lg:py-32"
  >
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <Overline>{PERSONA.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {PERSONA.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{PERSONA.description}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {PERSONA.points.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" strokeWidth={2} />
              <span className="text-slate-200 leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative">
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-6 rounded-full bg-[#D4AF37]/10 blur-3xl" aria-hidden />
          <div className="relative aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-[#1a2547] to-[#0B132B] border border-[#D4AF37]/25 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="absolute right-6 top-6 h-10 w-14 rounded-md bg-[#D4AF37]/80" />
            <CreditCard className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
            <div className="mt-12 font-display text-xl tracking-[0.18em] text-white">
              5241 •••• •••• 8830
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-[0.6rem] uppercase tracking-widest text-slate-400">Titular</div>
                <div className="text-sm text-white mt-1">ENLACE FINTECH</div>
              </div>
              <div className="font-display text-lg font-black italic text-white/90">VISA</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
