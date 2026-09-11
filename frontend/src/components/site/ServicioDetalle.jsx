import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal, Overline, ContactLink } from "./Primitives";

export const ServicioDetalle = ({ data }) => (
  <section data-testid="servicio-detalle" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{data.overline}</Overline>
          <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{data.title}</h1>
          <p className="mt-5 text-slate-300 leading-relaxed">{data.description}</p>
          <ContactLink
            
            data-testid="servicio-cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
          >
            {data.cta}
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </ContactLink>
        </Reveal>
        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async" src={data.image} alt={data.title} className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[420px] object-cover" />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Check;
          return (
            <Reveal key={f.title} delay={i * 0.06}>
              <div data-testid={`servicio-feature-${i}`} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {data.blocks.map((b, i) => {
          const Icon = Icons[b.icon] || Icons.Layers;
          return (
            <Reveal key={b.title} delay={i * 0.08}>
              <div data-testid={`servicio-block-${i}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent">
                {b.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img loading="lazy" decoding="async" src={b.image} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8 pt-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h2 className="font-display mt-5 text-xl font-bold text-white leading-snug">{b.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{b.desc}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {b.bullets.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                      <Check size={16} className="mt-1 shrink-0 text-[#D4AF37]" />
                      {t}
                    </li>
                  ))}
                </ul>
                {b.href && (
                  <Link to={b.href} data-testid={`servicio-block-link-${i}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:gap-3 transition-[gap] duration-200">
                    {b.linkLabel} <ArrowRight size={15} />
                  </Link>
                )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {data.partners && (
        <Reveal className="mt-10 flex flex-wrap gap-3">
          {data.partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" data-testid={`servicio-partner-${p.name.toLowerCase()}`} className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2.5 hover:border-[#D4AF37]/50 transition-colors duration-200">
              <span className="font-display font-bold text-white">{p.name}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-slate-500">{p.tag}</span>
              <ArrowUpRight size={15} className="text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          ))}
        </Reveal>
      )}

      <p data-testid="servicio-note" className="mt-8 text-xs leading-relaxed text-slate-500">{data.note}</p>
    </div>
  </section>
);
