import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { EVENTOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Eventos = () => (
  <section id="eventos" data-testid="eventos-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async"
            src={EVENTOS.image}
            alt="Eventos y conciertos"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[460px] object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline>{EVENTOS.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {EVENTOS.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{EVENTOS.description}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {EVENTOS.partners.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div data-testid={`evento-partner-${i}`} className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#D4AF37]/40 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37]">{p.tag}</span>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`evento-partner-link-${i}`}
                  aria-label={`Visitar ${p.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B132B] transition-colors duration-200"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="mt-4 text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {EVENTOS.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Ticket;
          return (
            <Reveal key={f.title} delay={i * 0.05}>
              <div data-testid={`evento-feature-${i}`} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
