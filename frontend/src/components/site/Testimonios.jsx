import { Quote } from "lucide-react";
import { POR_QUE } from "../../data/porque";
import { Reveal } from "./Primitives";

export const Testimonios = () => (
  <div className="mt-16">
    <Reveal>
      <h3 className="font-display text-2xl font-bold tracking-tight text-white">Lo que dicen nuestros clientes</h3>
    </Reveal>
    <div className="mt-6 grid gap-5 md:grid-cols-3">
      {POR_QUE.testimonials.map((t, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <figure data-testid={`testimonio-${i}`} className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <Quote size={28} className="absolute right-6 top-6 text-[#D4AF37]/25" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-black text-[#D4AF37]">{t.metric}</span>
              <span className="text-xs text-slate-400">{t.metricLabel}</span>
            </div>
            <blockquote className="mt-4 flex-1 text-sm text-slate-200 leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-5 border-t border-white/10 pt-4">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-xs text-slate-400">{t.role}</div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
    <p className="mt-3 text-xs text-slate-500">* {POR_QUE.testimonialsNote}</p>
  </div>
);
