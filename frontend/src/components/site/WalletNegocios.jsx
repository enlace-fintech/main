import * as Icons from "lucide-react";
import { WALLET } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const WalletNegocios = () => (
  <section
    id="wallet"
    data-testid="wallet-section"
    className="relative py-24 lg:py-32 bg-[#0e1836] border-y border-white/5 noise-overlay"
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
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md hover:border-[#D4AF37]/40 hover:bg-white/[0.05] transition-colors duration-300"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
