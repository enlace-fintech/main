import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICIOS_HUB } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const ServiciosHub = ({ asHero = false }) => {
  const Title = asHero ? "h1" : "h2";
  return (
    <section id="servicios" data-testid="servicios-section" className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Overline>{SERVICIOS_HUB.overline}</Overline>
            <Title className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {SERVICIOS_HUB.title}
            </Title>
            <p className="mt-5 text-slate-300 leading-relaxed">{SERVICIOS_HUB.description}</p>
            <Link
              to="/contacto"
              data-testid="servicios-cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
            >
              Solicitar información
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
            <img
              src={SERVICIOS_HUB.image}
              alt="Soluciones integrales para tu empresa"
              className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[420px] object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICIOS_HUB.pillars.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Briefcase;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link
                  to={p.href}
                  data-testid={`servicio-pillar-${i}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-[transform,border-color] duration-300"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-white leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-slate-400 leading-relaxed">{p.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                    {p.cta}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">También</span>
          {SERVICIOS_HUB.more.map((m) => (
            <Link
              key={m.href}
              to={m.href}
              data-testid={`servicio-more-${m.href.split("/").pop()}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {m.title}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
