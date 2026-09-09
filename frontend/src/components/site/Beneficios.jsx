import * as Icons from "lucide-react";
import { BENEFICIOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Beneficios = () => (
  <section id="beneficios" data-testid="beneficios-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{BENEFICIOS.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {BENEFICIOS.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{BENEFICIOS.description}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {BENEFICIOS.items.map((b, i) => {
          const Icon = Icons[b.icon] || Icons.Star;
          return (
            <Reveal key={b.title} delay={i * 0.06}>
              <div
                data-testid={`beneficio-${i}`}
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md hover:border-[#D4AF37]/40 hover:bg-white/[0.05] transition-colors duration-300"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{b.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
