import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { EMPRESAS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Empresas = () => (
  <section id="empresas" data-testid="empresas-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal delay={0.1} className="relative order-2 lg:order-1">
        <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
        <img loading="lazy" decoding="async"
          src={EMPRESAS.image}
          alt="Empresas"
          className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
        />
      </Reveal>

      <Reveal className="order-1 lg:order-2">
        <Overline>{EMPRESAS.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {EMPRESAS.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{EMPRESAS.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {EMPRESAS.sectors.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Building2;
            return (
              <Link
                key={s.name}
                to={s.href}
                data-testid={`empresa-sector-${i}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-medium text-slate-200">{s.name}</span>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </div>
  </section>
);
