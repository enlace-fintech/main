import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../../data/content";

const INTERVAL = 6000;

export const HeroSlider = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = HERO_SLIDES.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, n]);

  const s = HERO_SLIDES[i];
  return (
    <div data-testid="hero-slider" className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
        <AnimatePresence mode="sync">
          <motion.img
            key={s.image}
            src={s.image}
            alt={s.title}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            data-testid="hero-slide-image"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div key={s.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]" data-testid="hero-slide-kicker">{s.kicker}</span>
            <p className="font-display mt-2 max-w-md text-lg lg:text-2xl font-bold text-white leading-snug" data-testid="hero-slide-title">{s.title}</p>
            <Link to={s.href} data-testid="hero-slide-cta" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
              {s.cta} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <button type="button" onClick={() => go(-1)} aria-label="Anterior" data-testid="hero-slider-prev" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[#0B132B]/60 p-2 text-white backdrop-blur hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200">
          <ChevronLeft size={18} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Siguiente" data-testid="hero-slider-next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[#0B132B]/60 p-2 text-white backdrop-blur hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="relative mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Diapositivas">
        {HERO_SLIDES.map((sl, k) => (
          <button key={sl.image} type="button" role="tab" aria-selected={k === i} aria-label={sl.kicker} data-testid={`hero-slider-dot-${k}`} onClick={() => setI(k)}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${k === i ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/20 hover:bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};
