import * as Icons from "lucide-react";
import { PERSONA } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const PersonaFisica = () => (
  <section
    id="persona"
    data-testid="persona-section"
    className="relative py-16 lg:py-24"
  >
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{PERSONA.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {PERSONA.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{PERSONA.description}</p>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-6 rounded-full bg-[#D4AF37]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-md">
            <img
              loading="lazy"
              decoding="async"
              src={PERSONA.image}
              alt="Persona con su tarjeta nominativa Enlace Fintech"
              className="relative h-[440px] w-full rounded-2xl border border-white/10 object-cover shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PERSONA.points.map((p, i) => {
          const Icon = Icons[p.icon] || Icons.Check;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div
                data-testid={`persona-point-${i}`}
                className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <img loading="lazy" decoding="async" src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-[opacity,transform] duration-500" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-[#0B132B]/10" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37] text-[#0B132B]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{p.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
