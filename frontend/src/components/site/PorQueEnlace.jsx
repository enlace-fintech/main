import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { POR_QUE } from "../../data/porque";
import { Reveal, Overline, ContactLink } from "./Primitives";
import { Testimonios } from "./Testimonios";

export const PorQueEnlace = ({ asHero = false }) => {
  const Title = asHero ? "h1" : "h2";
  return (
    <section id="por-que-enlace" data-testid="porque-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal>
            <Overline>{POR_QUE.overline}</Overline>
            <Title className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{POR_QUE.title}</Title>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">{POR_QUE.description}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {POR_QUE.stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div data-testid={`porque-stat-${i}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-display text-3xl lg:text-4xl font-black text-[#D4AF37]">{s.value}</div>
                  <div className="mt-2 text-sm text-slate-400 leading-snug">{s.label}</div>
                </div>
              </Reveal>
            ))}
            <p className="col-span-2 text-xs text-slate-500">* {POR_QUE.statsNote}</p>
          </div>
        </div>

        <Reveal className="mt-16 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 lg:p-12">
          <div data-testid="porque-modelo">
          <Overline>{POR_QUE.model.overline}</Overline>
          <h3 className="font-display mt-3 text-2xl sm:text-3xl font-bold text-white">{POR_QUE.model.title}</h3>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">{POR_QUE.model.intro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {POR_QUE.model.points.map((p, i) => {
              const Icon = Icons[p.icon] || Icons.Check;
              return (
                <div key={i} data-testid={`porque-modelo-${i}`} className="rounded-2xl border border-white/10 bg-[#0B132B]/60 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]"><Icon size={18} strokeWidth={1.5} /></span>
                  <h4 className="font-display mt-4 text-base font-bold text-white">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
          </div>
        </Reveal>

        {asHero && (
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {POR_QUE.reasons.map((r, i) => {
              const Icon = Icons[r.icon] || Icons.Check;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div data-testid={`porque-razon-${i}`} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300"><Icon size={20} strokeWidth={1.5} /></span>
                    <h4 className="font-display mt-4 text-lg font-bold text-white">{r.title}</h4>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        <Testimonios />

        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <ContactLink data-testid="porque-cta" className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200">
            {POR_QUE.cta.text}
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </ContactLink>
          {!asHero && (
            <Link to="/por-que-enlace" data-testid="porque-link" className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200">
              Conoce más sobre Enlace
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
};
