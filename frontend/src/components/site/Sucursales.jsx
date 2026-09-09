import { MapPin, Phone } from "lucide-react";
import { SUCURSALES } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Sucursales = () => (
  <section id="sucursales" data-testid="sucursales-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{SUCURSALES.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {SUCURSALES.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{SUCURSALES.description}</p>

          <div className="mt-8 space-y-4">
            {SUCURSALES.branches.map((b, i) => (
              <div key={b.city} data-testid={`sucursal-${i}`} className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]">
                  <MapPin size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{b.city}</h3>
                  <p className="mt-1 text-sm text-slate-400">{b.address}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                    <Phone size={14} className="text-[#D4AF37]" strokeWidth={1.5} />
                    {b.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img
            src={SUCURSALES.image}
            alt="Sucursales Enlace Fintech"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[560px] object-cover"
          />
        </Reveal>
      </div>
    </div>
  </section>
);
