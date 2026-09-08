import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { COMMON_SERVICES } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const EcosistemaEnlace = () => (
  <section data-testid="ecosistema-section" className="relative py-24 lg:py-28 bg-[#0e1836] border-y border-white/5 noise-overlay">
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{COMMON_SERVICES.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {COMMON_SERVICES.title}
        </h2>
        <p className="mt-5 text-slate-300 leading-relaxed">{COMMON_SERVICES.description}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {COMMON_SERVICES.items.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Star;
          const Wrapper = s.url ? "a" : "div";
          const wrapperProps = s.url
            ? { href: s.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <Wrapper
                {...wrapperProps}
                data-testid={`ecosistema-item-${i}`}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  {s.url && <ArrowUpRight size={18} className="text-[#D4AF37]" />}
                </div>
                <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{s.desc}</p>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
