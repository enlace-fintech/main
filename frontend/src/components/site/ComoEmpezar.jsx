import * as Icons from "lucide-react";
import { ONBOARDING } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const ComoEmpezar = () => (
  <section data-testid="onboarding-section" className="relative py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{ONBOARDING.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {ONBOARDING.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ONBOARDING.steps.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Circle;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div data-testid={`onboarding-step-${i}`} className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="font-display absolute right-6 top-5 text-4xl font-black text-white/5 group-hover:text-[#D4AF37]/20 transition-colors duration-300">
                  0{i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
