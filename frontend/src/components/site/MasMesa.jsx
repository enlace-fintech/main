import { CalendarCheck, Check } from "lucide-react";
import { MASMESA } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const MasMesa = () => (
  <section id="masmesa" data-testid="masmesa-section" className="relative py-24 lg:py-32 bg-[#0e1836] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200">
          <CalendarCheck size={15} className="text-[#D4AF37]" strokeWidth={1.5} />
          {MASMESA.overline}
        </span>
        <h2 className="font-display mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {MASMESA.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{MASMESA.description}</p>

        <div className="mt-8 space-y-5">
          {MASMESA.points.map((p, i) => (
            <div key={i} data-testid={`masmesa-point-${i}`} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                <Check size={16} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative">
        <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
        <img
          src={MASMESA.image}
          alt="Más mesa · reservaciones"
          className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[460px] object-cover"
        />
      </Reveal>
    </div>
  </section>
);
