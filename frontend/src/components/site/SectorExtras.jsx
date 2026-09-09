import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Primitives";

export const SectorExtras = ({ pains, faq, cta, note, testid }) => (
  <div className="max-w-7xl mx-auto px-5 lg:px-8">
    {pains && (
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pains.map((p, i) => {
          const Icon = Icons[p.icon] || Icons.Sparkles;
          return (
            <Reveal key={i} delay={i * 0.06}>
              <div data-testid={`${testid}-pain-${i}`} className="group h-full rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <p className="font-display mt-4 text-base font-bold text-white leading-snug">{p.q}</p>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.a}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    )}

    {note && (
      <Reveal className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-slate-300">
        <Icons.Lock size={17} className="mt-0.5 shrink-0 text-[#D4AF37]" />
        <span data-testid={`${testid}-note`}>{note}</span>
      </Reveal>
    )}

    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px] items-start">
      {faq && (
        <div>
          <h3 className="font-display text-xl font-bold text-white">Preguntas frecuentes</h3>
          <dl className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {faq.map((f, i) => (
              <div key={i} data-testid={`${testid}-faq-${i}`} className="px-6 py-5">
                <dt className="font-semibold text-white">{f.q}</dt>
                <dd className="mt-1.5 text-sm text-slate-400 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {cta && (
        <Reveal className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Siguiente paso</p>
          <p className="font-display mt-2 text-lg font-bold text-white leading-snug">Diagnóstico gratuito, respuesta en menos de 24 h</p>
          <Link to={cta.href} data-testid={`${testid}-cta`} className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] transition-colors duration-200">
            {cta.text}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Reveal>
      )}
    </div>
  </div>
);
