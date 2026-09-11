import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, Calculator } from "lucide-react";
import { CALC } from "../../data/calculadora";
import { contactHref } from "../../data/leads";
import { Reveal, Overline } from "./Primitives";

const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
const clamp = (v, [min, max]) => Math.min(max, Math.max(min, v));

const Field = ({ id, label, value, onChange, limits, step, fmt = mxn.format, suffix = "" }) => (
  <label className="block" htmlFor={`calc-${id}`}>
    <span className="flex items-center justify-between text-sm text-slate-300">
      {label}
      <span className="font-semibold text-white">{fmt(value)}{suffix}</span>
    </span>
    <input id={`calc-${id}`} data-testid={`calc-${id}-range`} type="range" min={limits[0]} max={limits[1]} step={step} value={value}
      onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-[#D4AF37]" />
    <input data-testid={`calc-${id}-input`} type="number" min={limits[0]} max={limits[1]} step={step} value={value}
      onChange={(e) => onChange(clamp(Number(e.target.value) || 0, limits))}
      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30" />
  </label>
);

export const CalculadoraTpv = ({ asHero = false }) => {
  const { pathname } = useLocation();
  const [v, setV] = useState(CALC.defaults);
  const set = (k) => (val) => setV((s) => ({ ...s, [k]: val }));
  const Title = asHero ? "h1" : "h2";

  const txns = Math.round(v.ventas / v.ticket);
  const actual = v.ventas * (v.tasaActual / 100) + v.renta;
  const enlace = v.ventas * (CALC.tasaEnlace / 100) + CALC.rentaEnlace;
  const ahorro = actual - enlace;
  const pct = actual > 0 ? Math.round((ahorro / actual) * 100) : 0;
  const msg = `Vendo ${mxn.format(v.ventas)} al mes con tarjeta (ticket promedio ${mxn.format(v.ticket)}) y hoy pago ${v.tasaActual}% + ${mxn.format(v.renta)} de renta. Según la calculadora ahorraría ${mxn.format(Math.max(ahorro, 0))} al mes. ¿Me pueden cotizar la terminal Enlace?`;

  return (
    <section id="calculadora" data-testid="calculadora-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Overline>{CALC.overline}</Overline>
          <Title className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">{CALC.title}</Title>
          <p className="mt-5 text-slate-300 leading-relaxed">{CALC.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-6 rounded-3xl border border-white/10 bg-[#0B132B]/60 p-7 lg:p-9">
            <Field id="ventas" label="Ventas mensuales con tarjeta" value={v.ventas} onChange={set("ventas")} limits={CALC.limits.ventas} step={5000} />
            <Field id="ticket" label="Ticket promedio" value={v.ticket} onChange={set("ticket")} limits={CALC.limits.ticket} step={10} />
            <Field id="tasaActual" label="Comisión que pagas hoy" value={v.tasaActual} onChange={set("tasaActual")} limits={CALC.limits.tasaActual} step={0.1} fmt={(x) => x} suffix="%" />
            <Field id="renta" label="Renta mensual de tu terminal actual" value={v.renta} onChange={set("renta")} limits={CALC.limits.renta} step={50} />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-7 lg:p-9">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#D4AF37]"><Calculator size={16} /> Tu ahorro estimado</div>
            <div className="mt-4 font-display text-5xl sm:text-6xl font-black text-white" data-testid="calc-ahorro-mes">{mxn.format(Math.max(ahorro, 0))}</div>
            <div className="text-sm text-slate-400">al mes · <span className="font-semibold text-[#D4AF37]" data-testid="calc-ahorro-anual">{mxn.format(Math.max(ahorro, 0) * 12)}</span> al año{ahorro > 0 && <> · {pct}% menos</>}</div>
            {ahorro <= 0 && <p className="mt-3 text-sm text-slate-300" data-testid="calc-sin-ahorro">Tu comisión actual ya es competitiva. Aun así, sin renta ni mínimos, te cotizamos condiciones a tu medida.</p>}

            <dl className="mt-7 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-[#0B132B]/60 p-4"><dt className="text-slate-400">Pagas hoy</dt><dd className="font-display mt-1 text-lg font-bold text-white" data-testid="calc-actual">{mxn.format(actual)}</dd></div>
              <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0B132B]/60 p-4"><dt className="text-slate-400">Con Enlace ({CALC.tasaEnlace}%)</dt><dd className="font-display mt-1 text-lg font-bold text-[#D4AF37]" data-testid="calc-enlace">{mxn.format(enlace)}</dd></div>
              <div className="rounded-xl border border-white/10 bg-[#0B132B]/60 p-4"><dt className="text-slate-400">Transacciones / mes</dt><dd className="font-display mt-1 text-lg font-bold text-white" data-testid="calc-txns">{txns.toLocaleString("es-MX")}</dd></div>
              <div className="rounded-xl border border-white/10 bg-[#0B132B]/60 p-4"><dt className="text-slate-400">Renta con Enlace</dt><dd className="font-display mt-1 text-lg font-bold text-white">{mxn.format(CALC.rentaEnlace)}</dd></div>
            </dl>

            <ul className="mt-6 space-y-2">
              {CALC.incluye.map((t) => <li key={t} className="flex items-start gap-2 text-sm text-slate-200"><Check size={14} className="mt-1 shrink-0 text-[#D4AF37]" />{t}</li>)}
            </ul>

            <Link to={`${contactHref(pathname)}&msg=${encodeURIComponent(msg)}`} data-testid="calc-cta" className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] transition-colors duration-200">
              Quiero esta tasa para mi negocio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="mt-4 text-xs text-slate-500">{CALC.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
