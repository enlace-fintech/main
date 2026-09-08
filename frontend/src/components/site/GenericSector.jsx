import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, Overline } from "./Primitives";

export const GenericSector = ({ data }) => (
  <section data-testid="generic-sector" className="relative py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Overline>{data.overline}</Overline>
          <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {data.title}
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed">{data.description}</p>
          <Link
            to="/contacto"
            data-testid="generic-cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
          >
            Solicitar información
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
          <img
            src={data.image}
            alt={data.title}
            className="relative rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full h-[440px] object-cover"
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
        {data.features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Star;
          return (
            <Reveal key={f.title} delay={i * 0.06}>
              <div data-testid={`generic-feature-${i}`} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#D4AF37]/40 transition-colors duration-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
