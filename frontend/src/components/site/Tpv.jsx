import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { TPV } from "../../data/content";
import { Reveal, Overline, ContactLink } from "./Primitives";

export const Tpv = () => (
  <section data-testid="tpv-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{TPV.overline}</Overline>
          <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {TPV.title}
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed">{TPV.description}</p>
          <p className="mt-4 text-slate-300 leading-relaxed">{TPV.description2}</p>
          <ContactLink
            
            data-testid="tpv-cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
          >
            Quiero mi terminal
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </ContactLink>
        </Reveal>
        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async"
            src={TPV.image}
            alt="Terminal punto de venta"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[420px] object-cover"
          />
        </Reveal>
      </div>

      <Reveal className="mt-20 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">{TPV.benefitsTitle}</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {TPV.benefits.map((b, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div data-testid={`tpv-benefit-${i}`} className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img loading="lazy" decoding="async" src={b.image} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent" />
                <span className="absolute left-4 bottom-3 font-display text-2xl font-black text-[#D4AF37]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 lg:p-12">
        <Overline>Plataforma premium</Overline>
        <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold text-white">{TPV.premium.title}</h2>
        <p className="mt-2 text-slate-300">{TPV.premium.subtitle}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TPV.premium.bullets.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Check;
            return (
              <li key={i} data-testid={`tpv-premium-${i}`} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                {b.text}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  </section>
);
