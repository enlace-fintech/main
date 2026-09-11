import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, Star, Sparkles } from "lucide-react";
import { MEMBRESIAS } from "../../data/content";
import { contactHref } from "../../data/leads";
import { Reveal, Overline } from "./Primitives";

const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export const BeneficiosPlanes = () => {
  const { pathname } = useLocation();
  const [plan, setPlan] = useState("plus");
  const [size, setSize] = useState(2);
  const p = MEMBRESIAS.plans.find((x) => x.key === plan);
  const s = MEMBRESIAS.sizes[size];
  const msg = p.contact
    ? `Me interesa el plan Platinum (servicios premium personalizados) con coberturas de seguros ampliadas para ${s.label} colaboradores. ¿Podemos agendar una llamada para diseñar el paquete?`
    : `Quiero cotizar el plan ${p.name} de seguros y beneficios para ${s.label} colaboradores. ¿Me pueden enviar una propuesta?`;
  const href = `${contactHref(pathname)}&msg=${encodeURIComponent(msg)}`;

  return (
    <div className="mt-20">
      <Reveal className="max-w-3xl">
        <Overline>Membresías</Overline>
        <h2 className="font-display mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">Un plan para cada colaborador</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">{MEMBRESIAS.plansNote}</p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {MEMBRESIAS.plans.map((pl, i) => {
          const active = pl.key === plan;
          return (
            <Reveal key={pl.key} delay={i * 0.05}>
              <button type="button" onClick={() => setPlan(pl.key)} data-testid={`plan-${pl.key}`} aria-pressed={active}
                className={`relative flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-[border-color,transform] duration-300 hover:-translate-y-1 ${active ? "border-[#D4AF37] bg-[#D4AF37]/10" : pl.contact ? "border-slate-300/30 bg-gradient-to-b from-slate-200/[0.08] to-transparent hover:border-[#D4AF37]/60" : "border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40"}`}>
                <img loading="lazy" decoding="async" src={pl.image} alt={`Plan ${pl.name}`} className="h-36 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                {pl.featured && (
                  <span className="absolute left-5 top-4 inline-flex items-center gap-1 rounded-full bg-[#D4AF37] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#0B132B]"><Star size={11} /> Más elegido</span>
                )}
                {pl.contact && (
                  <span className="absolute left-5 top-4 inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#0B132B]"><Sparkles size={11} /> Premium</span>
                )}
                {pl.tag && <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#D4AF37]">{pl.tag}</span>}
                <h3 className="font-display text-xl font-bold text-white">{pl.name}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5">
                  <span className={`font-display font-black text-white ${pl.price ? "text-3xl" : "text-2xl"}`}>{pl.price ? mxn.format(pl.price) : pl.priceLabel}</span>
                  <span className="text-xs text-slate-400">{pl.price ? "/ mes" : pl.period}</span>
                </div>
                {pl.yearly && <div className="mt-1 text-xs text-slate-500">{mxn.format(pl.yearly)} al año</div>}
                {pl.contact && <div className="mt-1 text-xs text-[#D4AF37]">Contáctanos para diseñarlo</div>}
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{pl.desc}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {pl.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-200"><Check size={14} className="mt-1 shrink-0 text-[#D4AF37]" />{f}</li>
                  ))}
                </ul>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" data-testid="beneficios-cotizador">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Cotización rápida</p>
            <h3 className="font-display mt-2 text-xl font-bold text-white">¿Cuántos colaboradores tiene tu empresa?</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {MEMBRESIAS.sizes.map((sz, i) => (
                <button key={sz.label} type="button" onClick={() => setSize(i)} data-testid={`plantilla-${sz.label}`} aria-pressed={i === size}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${i === size ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B132B] font-bold" : "border-white/15 text-slate-200 hover:border-[#D4AF37]/60"}`}>
                  {sz.label}
                </button>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-300" data-testid="cotizador-resumen">
              Plan <span className="font-bold text-white">{p.name}</span> para <span className="font-bold text-white">{s.label}</span> colaboradores
              {p.price > 0 && <> · desde <span className="font-bold text-[#D4AF37]">{mxn.format(p.price * s.min)}</span> al mes</>}
              {p.contact && <> · <span className="font-bold text-[#D4AF37]">precio a la medida, te contactamos</span></>}
            </p>
          </div>
          <Link to={href} data-testid="cotizador-cta" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] transition-colors duration-200">
            {p.contact ? "Contactar para plan Platinum" : "Solicitar cotización"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
};
