import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { CONSULTORIA } from "../../data/content";
import { Reveal, Overline, ContactLink } from "./Primitives";
import { SectorExtras } from "./SectorExtras";

export const Consultoria = () => {
  const [active, setActive] = useState(CONSULTORIA.areas[0].id);
  const area = CONSULTORIA.areas.find((a) => a.id === active);
  const goTo = (id) => {
    setActive(id);
    document.getElementById("consultoria-areas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const ActiveIcon = Icons[area.icon] || Icons.Briefcase;

  return (
    <section data-testid="consultoria-section" className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Overline>{CONSULTORIA.overline}</Overline>
            <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {CONSULTORIA.title}
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed">{CONSULTORIA.description}</p>
            <p className="mt-4 text-sm text-slate-500">{CONSULTORIA.operator}</p>
            <ContactLink
              
              data-testid="consultoria-cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
            >
              Agenda un diagnóstico gratuito
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </ContactLink>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
            <img loading="lazy" decoding="async"
              src={CONSULTORIA.image}
              alt="Consultoría empresarial"
              className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[420px] object-cover"
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3">
          {CONSULTORIA.frentes.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Circle;
            return (
              <div key={f.title} data-testid={`consultoria-frente-${i}`} className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h2 className="font-display mt-4 text-lg font-bold text-white">{f.title}</h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-20 max-w-2xl">
          <Overline>¿Cuál es tu situación?</Overline>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">Elige la que se parece a la tuya y te decimos cómo la resolvemos</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONSULTORIA.situaciones.map((c, i) => {
            const Icon = Icons[c.icon] || Icons.HelpCircle;
            const target = CONSULTORIA.areas.find((a) => a.id === c.area);
            return (
              <Reveal key={i} delay={i * 0.05}>
                <button type="button" onClick={() => goTo(c.area)} data-testid={`consultoria-situacion-${i}`} className="group flex h-full w-full flex-col rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent p-6 text-left hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]"><Icon size={18} strokeWidth={1.5} /></span>
                  <p className="font-display mt-4 text-base font-bold text-white leading-snug">{c.q}</p>
                  <p className="mt-2 flex-1 text-sm text-slate-300 leading-relaxed">{c.a}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">{target?.title} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" /></span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <div id="consultoria-areas" className="scroll-mt-28">
        <Reveal className="mt-16 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist">
            {CONSULTORIA.areas.map((a) => {
              const Icon = Icons[a.icon] || Icons.Briefcase;
              const on = a.id === active;
              return (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={on}
                  data-testid={`consultoria-tab-${a.id}`}
                  onClick={() => setActive(a.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 ${
                    on
                      ? "border-[#D4AF37]/60 bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  {a.title}
                </button>
              );
            })}
          </div>

          <div data-testid="consultoria-panel" className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="relative h-56 lg:h-64">
              <AnimatePresence mode="wait">
                <motion.img key={area.id} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} loading="lazy" decoding="async" src={area.image} alt={area.title} data-testid="consultoria-area-image" className="absolute inset-0 h-full w-full object-cover" />
              </AnimatePresence>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent" />
            </div>
            <div className="p-8 lg:p-10 pt-2 lg:pt-4">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]">
                <ActiveIcon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">{area.title}</h2>
                <p className="text-sm text-slate-400">{area.desc}</p>
              </div>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {area.items.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-slate-200 leading-relaxed">
                  <Check size={16} className="mt-1 shrink-0 text-[#D4AF37]" />
                  {it}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </Reveal>
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <Overline>Así trabajamos un proyecto</Overline>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">Del diagnóstico al acompañamiento mensual</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CONSULTORIA.proceso.map((st, i) => {
            const Icon = Icons[st.icon] || Icons.Circle;
            return (
              <Reveal key={st.title} delay={i * 0.08}>
                <div data-testid={`consultoria-proceso-${i}`} className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300">
                  <span className="font-display absolute right-6 top-5 text-4xl font-black text-white/5 group-hover:text-[#D4AF37]/20 transition-colors duration-300">0{i + 1}</span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300"><Icon size={22} strokeWidth={1.5} /></span>
                  <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{st.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <SectorExtras audience={CONSULTORIA.audience} faq={CONSULTORIA.faq} cta={CONSULTORIA.cta} testid="consultoria" />
    </section>
  );
};
