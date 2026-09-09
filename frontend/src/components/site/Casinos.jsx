import { Check } from "lucide-react";
import { CASINOS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";
import { SectorExtras } from "./SectorExtras";

export const Casinos = () => (
  <section
    id="casinos"
    data-testid="casinos-section"
    className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5"
  >
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <Overline>{CASINOS.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {CASINOS.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{CASINOS.description}</p>

        <ul className="mt-8 space-y-4">
          {CASINOS.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                <Check size={15} strokeWidth={2} />
              </span>
              <span className="text-slate-200 leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12} className="relative">
        <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
        <img loading="lazy" decoding="async"
          src={CASINOS.image}
          alt="Soluciones para casinos"
          className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
        />
      </Reveal>
    </div>
    <SectorExtras pains={CASINOS.pains} faq={CASINOS.faq} cta={CASINOS.cta} note={CASINOS.note} testid="casinos" />
  </section>
);
