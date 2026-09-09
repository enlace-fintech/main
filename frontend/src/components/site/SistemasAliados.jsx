import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SISTEMAS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

const Card = ({ s, i, compact }) => {
  const Icon = Icons[s.icon] || Icons.Boxes;
  return (
    <div data-testid={`sistema-${i}`} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
          <Icon size={20} strokeWidth={1.5} />
        </span>
        <a href={s.url} target="_blank" rel="noopener noreferrer" data-testid={`sistema-link-${i}`} aria-label={`Visitar ${s.name}`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#D4AF37] transition-colors duration-200">
          {s.domain} <ArrowUpRight size={13} />
        </a>
      </div>
      <h3 className="font-display mt-4 text-lg font-bold text-white">{s.name}</h3>
      <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37]">{s.tag}</span>
      {!compact && (
        <>
          <p className="mt-3 flex-1 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
          <p className="mt-3 text-xs text-slate-500">Para: {s.forWhom}</p>
          <Link to={s.internal} data-testid={`sistema-internal-${i}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37]">
            Cómo lo integramos <ArrowRight size={14} />
          </Link>
        </>
      )}
    </div>
  );
};

export const SistemasAliados = ({ compact = false, asHero = false }) => {
  const Title = asHero ? "h1" : "h2";
  return (
    <section data-testid="sistemas-section" className={`relative ${compact ? "pt-4 pb-16 lg:pb-24" : "py-16 lg:py-24"}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {compact ? (
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Overline>{SISTEMAS.overline}</Overline>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold text-white">Sistemas aliados que integramos con tus cobros y pagos</h2>
            </div>
            <Link to="/servicios/sistemas" data-testid="sistemas-ver-todos" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:gap-3 transition-[gap] duration-200">
              Ver todos los sistemas <ArrowRight size={15} />
            </Link>
          </Reveal>
        ) : (
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <Overline>{SISTEMAS.overline}</Overline>
              <Title className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{SISTEMAS.title}</Title>
              <p className="mt-5 text-slate-300 leading-relaxed">{SISTEMAS.description}</p>
              <Link to="/contacto" data-testid="sistemas-cta" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200">
                Quiero integrar un sistema
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
              <img loading="lazy" decoding="async" src={SISTEMAS.image} alt={SISTEMAS.title} className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[420px] object-cover" />
            </Reveal>
          </div>
        )}

        <div className={`${compact ? "mt-8" : "mt-14"} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {SISTEMAS.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <Card s={s} i={i} compact={compact} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
