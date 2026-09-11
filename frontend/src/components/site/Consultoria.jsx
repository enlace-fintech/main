import { useState } from "react";
import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { CONSULTORIA } from "../../data/content";
import { Reveal, Overline, ContactLink } from "./Primitives";

export const Consultoria = () => {
  const [active, setActive] = useState(CONSULTORIA.areas[0].id);
  const area = CONSULTORIA.areas.find((a) => a.id === active);
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

          <div data-testid="consultoria-panel" className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
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
        </Reveal>
      </div>
    </section>
  );
};
