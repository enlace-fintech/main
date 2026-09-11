import * as Icons from "lucide-react";
import { WALLET } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const WalletNegocios = () => (
  <section
    id="wallet"
    data-testid="wallet-section"
    className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5 noise-overlay"
  >
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{WALLET.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {WALLET.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{WALLET.description}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {WALLET.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Wallet;
          const wide = i === 0 || i === 3;
          return (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              className={wide ? "lg:col-span-2" : ""}
            >
              <div
                data-testid={`wallet-feature-${i}`}
                className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <img loading="lazy" decoding="async" src={f.image} alt={f.title} className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-[opacity,transform] duration-500" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-[#0B132B]/10" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B132B]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
