import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { MEMBRESIAS } from "../../data/content";
import { Reveal, Overline, ContactLink } from "./Primitives";
import { SectorExtras } from "./SectorExtras";
import { BeneficiosPlanes } from "./BeneficiosPlanes";
import { BeneficiosFaq } from "./BeneficiosFaq";

export const Membresias = () => (
  <section id="membresias" data-testid="membresias-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{MEMBRESIAS.overline}</Overline>
          <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {MEMBRESIAS.title}
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed">{MEMBRESIAS.description}</p>
          <p className="mt-4 text-slate-400 leading-relaxed">{MEMBRESIAS.description2}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {MEMBRESIAS.highlights.map((h, i) => {
              const Icon = Icons[h.icon] || Icons.Check;
              return (
                <li key={i} data-testid={`membresia-highlight-${i}`} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]"><Icon size={17} strokeWidth={1.5} /></span>
                  {h.text}
                </li>
              );
            })}
          </ul>
          <ContactLink data-testid="membresias-hero-cta" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200">
            Inscribir mi empresa
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </ContactLink>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async" src={MEMBRESIAS.image} alt="Seguros y beneficios para colaboradores"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover" />
        </Reveal>
      </div>

      <Reveal className="mt-20 max-w-3xl">
        <Overline>Todo en un solo lugar</Overline>
        <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">Potencializa tu empresa brindando los mejores beneficios a tus colaboradores</h2>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MEMBRESIAS.categories.map((c, i) => {
          const Icon = Icons[c.icon] || Icons.Gift;
          return (
            <Reveal key={c.title} delay={i * 0.05}>
              <div data-testid={`membresia-categoria-${i}`} className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img loading="lazy" decoding="async" src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]"><Icon size={18} strokeWidth={1.5} /></span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-white">{c.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-slate-400"><Check size={14} className="mt-1 shrink-0 text-[#D4AF37]" />{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <BeneficiosPlanes />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {MEMBRESIAS.steps.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Circle;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div data-testid={`membresia-step-${i}`} className="relative h-full rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent p-7">
                <span className="font-display absolute right-6 top-5 text-4xl font-black text-white/5">0{i + 1}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]"><Icon size={20} strokeWidth={1.5} /></span>
                <h3 className="font-display mt-4 text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-14 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e1836]">
        <img loading="lazy" decoding="async" src={MEMBRESIAS.nom035.image} alt="Equipo celebrando sin estrés laboral" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/85 to-transparent" />
        <div className="relative max-w-2xl p-8 lg:p-12" data-testid="membresia-nom035">
          <Overline>{MEMBRESIAS.nom035.kicker}</Overline>
          <h3 className="font-display mt-3 text-2xl sm:text-3xl font-bold text-white leading-snug">{MEMBRESIAS.nom035.title}</h3>
          <p className="mt-4 text-slate-300 leading-relaxed">{MEMBRESIAS.nom035.desc}</p>
        </div>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async" src={MEMBRESIAS.reloj.image} alt={MEMBRESIAS.reloj.title} className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[360px] object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div data-testid="membresia-reloj">
            <Overline>{MEMBRESIAS.reloj.overline}</Overline>
            <h3 className="font-display mt-3 text-2xl sm:text-3xl font-bold text-white leading-snug">{MEMBRESIAS.reloj.title}</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">{MEMBRESIAS.reloj.desc}</p>
            <ul className="mt-5 space-y-2">
              {MEMBRESIAS.reloj.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-200"><Check size={14} className="mt-1 shrink-0 text-[#D4AF37]" />{b}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl font-bold tracking-tight text-white">Aliados y proveedores</h3>
        <p className="mt-2 max-w-2xl text-slate-400 leading-relaxed">Cada beneficio lo opera un proveedor especializado; Enlace integra, negocia y administra el paquete completo por ti.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MEMBRESIAS.aliados.map((g, i) => {
            const Icon = Icons[g.icon] || Icons.Handshake;
            return (
              <div key={g.cat} data-testid={`membresia-aliado-${i}`} className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300 ${g.items.length > 6 ? "md:col-span-2 lg:col-span-3" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300"><Icon size={18} strokeWidth={1.5} /></span>
                  <div>
                    <div className="font-display text-base font-bold text-white">{g.cat}</div>
                    <p className="text-xs text-slate-500">{g.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((n) => (
                    <span key={n} className="rounded-full border border-white/10 bg-[#0B132B]/60 px-3 py-1.5 text-sm text-slate-200">{n}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-500">* Marcas propiedad de sus titulares; disponibilidad sujeta a convenio vigente y a la cobertura de cada plan.</p>
      </div>
      <BeneficiosFaq />
    </div>
    <SectorExtras cta={MEMBRESIAS.cta} testid="membresias" />
  </section>
);
