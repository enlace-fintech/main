import * as Icons from "lucide-react";
import { CAJA } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Caja = () => (
  <section id="caja" data-testid="caja-section" className="relative py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img
            src={CAJA.image}
            alt="Caja · solución integral"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[460px] object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline>{CAJA.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {CAJA.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{CAJA.description}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {CAJA.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Store;
          return (
            <Reveal key={f.title} delay={i * 0.06}>
              <div
                data-testid={`caja-feature-${i}`}
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
