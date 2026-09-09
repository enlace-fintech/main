import * as Icons from "lucide-react";
import { MEMBRESIAS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Membresias = () => (
  <section id="membresias" data-testid="membresias-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{MEMBRESIAS.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {MEMBRESIAS.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{MEMBRESIAS.description}</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Brinda a tus colaboradores los mejores beneficios del mercado. Aumenta su motivación
            y productividad con un paquete completo de ventajas, todo en un solo lugar y 100% digital.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img
            src={MEMBRESIAS.image}
            alt="Membresías y beneficios"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
          />
        </Reveal>
      </div>

      <h3 className="font-display mt-16 text-2xl font-bold tracking-tight text-white">¿Qué ofrecemos?</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {MEMBRESIAS.offers.map((o, i) => {
          const Icon = Icons[o.icon] || Icons.Gift;
          return (
            <Reveal key={o.title} delay={i * 0.05}>
              <div data-testid={`membresia-offer-${i}`} className="group h-full flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-white">{o.title}</h4>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl font-bold tracking-tight text-white">Nuestros aliados</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {MEMBRESIAS.aliados.map((a, i) => (
            <div
              key={a.name}
              data-testid={`membresia-aliado-${i}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 hover:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <div className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-200">{a.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">{a.cat}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">* Logotipos de aliados sujetos a convenio vigente.</p>
      </div>
    </div>
  </section>
);
