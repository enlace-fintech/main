import { Check, ArrowUpRight, ArrowDownToLine, Wallet } from "lucide-react";
import { CRIPTO } from "../../data/content";
import { Reveal, Overline } from "./Primitives";
import { SectorExtras } from "./SectorExtras";

const FlowColumn = ({ icon: Icon, flow, testid }) => (
  <div data-testid={testid} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]">
        <Icon size={20} strokeWidth={1.5} />
      </span>
      <h4 className="font-display text-lg font-bold text-white">{flow.title}</h4>
    </div>
    <ol className="mt-5 space-y-4">
      {flow.steps.map((s, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-[0.7rem] font-bold text-[#0B132B]">
            {i + 1}
          </span>
          <div>
            <p className="font-medium text-white text-sm">{s.title}</p>
            <p className="mt-0.5 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export const Cripto = () => (
  <section id="cripto" data-testid="cripto-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img loading="lazy" decoding="async"
            src={CRIPTO.image}
            alt="Pagos con cripto"
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline>{CRIPTO.overline}</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {CRIPTO.title}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{CRIPTO.description}</p>
        </Reveal>
      </div>

      {/* Aliados */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {CRIPTO.partners.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div data-testid={`cripto-partner-${i}`} className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors duration-300">
              <div className="relative h-48 overflow-hidden">
                <img loading="lazy" decoding="async" src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0e1836] via-transparent to-transparent" />
              </div>
              <div className="p-8 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37]">{p.tag}</span>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`cripto-partner-link-${i}`}
                  aria-label={`Visitar ${p.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B132B] transition-colors duration-200"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="mt-4 text-slate-300 leading-relaxed">{p.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Cómo funciona */}
      <Reveal delay={0.05}>
        <h3 className="font-display mt-16 text-2xl font-bold tracking-tight text-white">¿Cómo funciona?</h3>
        <div className="relative mt-6 h-56 lg:h-72 overflow-hidden rounded-2xl border border-white/10">
          <img loading="lazy" decoding="async" src={CRIPTO.flowImage} alt="Recibe cripto y liquida en pesos" className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0e1836] via-[#0e1836]/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-8">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Cripto → pesos</span>
            <p className="font-display mt-2 text-xl lg:text-2xl font-bold text-white leading-snug">Tu cliente paga en USDT, BTC o ETH; tú recibes pesos en tu cuenta.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FlowColumn icon={Wallet} flow={CRIPTO.flowReceive} testid="cripto-flow-receive" />
          <FlowColumn icon={ArrowDownToLine} flow={CRIPTO.flowSettle} testid="cripto-flow-settle" />
        </div>
      </Reveal>

      {/* ¿Por qué elegirnos? */}
      <Reveal delay={0.1}>
        <h3 className="font-display mt-16 text-2xl font-bold tracking-tight text-white">¿Por qué elegirnos?</h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr] items-stretch">
          <img loading="lazy" decoding="async" src={CRIPTO.whyImage} alt="Cobra a clientes internacionales" className="h-full min-h-[260px] w-full rounded-2xl border border-white/10 object-cover" />
          <div className="grid gap-4 sm:grid-cols-2">
            {CRIPTO.why.map((w, i) => (
              <div key={w.title} data-testid={`cripto-why-${i}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <Check size={18} className="text-[#D4AF37]" strokeWidth={2} />
                <h4 className="font-display mt-3 text-base font-bold text-white">{w.title}</h4>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
    <SectorExtras audience={CRIPTO.audience} pains={CRIPTO.pains} faq={CRIPTO.faq} cta={CRIPTO.cta} note={CRIPTO.note} testid="cripto" />
  </section>
);
