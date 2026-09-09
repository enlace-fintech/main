import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal, Overline } from "@/components/site/Primitives";
import { PRIVACIDAD, TERMINOS } from "@/data/legal";

const Bullets = ({ items }) =>
  items ? (
    <ul className="mt-4 space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3 text-slate-200 leading-relaxed">
          <Check size={16} className="mt-1 shrink-0 text-[#D4AF37]" />
          {b}
        </li>
      ))}
    </ul>
  ) : null;

const Legal = ({ doc, other }) => (
  <>
    <Breadcrumbs trail={[{ label: doc.title }]} />
    <section data-testid={`legal-${doc.slug}`} className="relative py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <Reveal>
          <Overline>Legal</Overline>
          <h1 data-testid="legal-title" className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{doc.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Última actualización: {doc.updated}</p>
          <p className="mt-6 text-slate-300 leading-relaxed">{doc.intro}</p>
        </Reveal>
        <div className="mt-12 space-y-10">
          {doc.sections.map((s, i) => (
            <Reveal key={s.h} delay={0.03}>
              <section data-testid={`legal-section-${i}`}>
                <h2 className="font-display text-xl font-bold text-white">{s.h}</h2>
                {s.p?.map((t, j) => <p key={j} className="mt-3 text-slate-300 leading-relaxed">{t}</p>)}
                <Bullets items={s.bullets} />
                {s.p2?.map((t, j) => <p key={j} className="mt-5 text-slate-300 leading-relaxed">{t}</p>)}
                <Bullets items={s.bullets2} />
                {s.note && <p className="mt-4 text-sm text-slate-500 leading-relaxed">{s.note}</p>}
              </section>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-sm text-slate-400">
          Consulta también:{" "}
          <Link to={`/${other.slug}`} data-testid="legal-other-link" className="text-[#D4AF37] hover:underline">{other.title}</Link>
        </p>
      </div>
    </section>
  </>
);

export function PrivacidadPage() {
  return <Legal doc={PRIVACIDAD} other={TERMINOS} />;
}

export function TerminosPage() {
  return <Legal doc={TERMINOS} other={PRIVACIDAD} />;
}
