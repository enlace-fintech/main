import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQ } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Faq = () => (
  <section data-testid="faq-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-y border-white/5">
    <div className="max-w-4xl mx-auto px-5 lg:px-8">
      <Reveal className="text-center">
        <Overline>{FAQ.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {FAQ.title}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {FAQ.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 data-[state=open]:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-display text-base font-bold text-white hover:no-underline hover:text-[#D4AF37] py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
