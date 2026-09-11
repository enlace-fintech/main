import { ALIADOS } from "../../data/content";

const ALIADOS_MARCA = ALIADOS.marcas;

export const AliadosMarquee = () => {
  const loop = [...ALIADOS_MARCA, ...ALIADOS_MARCA];
  return (
    <section data-testid="aliados-marquee" className="relative py-10 border-y border-white/5 bg-[#0B132B]">
      <p className="text-center text-xs uppercase tracking-[0.28em] text-slate-500 mb-7">
        Aliados y redes que impulsan Enlace Fintech
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12">
          {loop.map((name, i) => (
            <span
              key={i}
              className="font-display text-xl font-bold tracking-wide text-slate-400/70 hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
