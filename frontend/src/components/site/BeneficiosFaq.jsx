import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { MEMBRESIAS } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const BeneficiosFaq = () => (
  <div className="mt-16" data-testid="beneficios-faq">
    <Reveal>
      <Overline>Preguntas frecuentes</Overline>
      <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white">Todo lo que tu equipo de RH querrá saber</h3>
    </Reveal>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {MEMBRESIAS.faqGroups.map((g, gi) => (
        <Reveal key={g.title} delay={gi * 0.06}>
          <div data-testid={`beneficios-faq-grupo-${gi}`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="font-display text-base font-bold text-[#D4AF37]">{g.title}</h4>
            <Accordion type="single" collapsible className="mt-2">
              {g.items.map((f, i) => (
                <AccordionItem key={i} value={`${gi}-${i}`} data-testid={`beneficios-faq-${gi}-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-sm font-semibold text-white hover:no-underline hover:text-[#D4AF37] py-3.5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-400 leading-relaxed pb-4">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);
