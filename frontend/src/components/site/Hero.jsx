import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { BRAND, HERO_STATS } from "../../data/content";

export const Hero = () => (
  <section
    id="inicio"
    data-testid="hero-section"
    className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 noise-overlay"
  >
    <div
      aria-hidden
      className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[130px]"
    />
    <div
      aria-hidden
      className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#1c2a52]/60 blur-[120px]"
    />

    <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200"
        >
          <ShieldCheck size={15} className="text-[#D4AF37]" strokeWidth={1.5} />
          {BRAND.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.02] text-white"
        >
          Te asesoramos para elegir los mejores{" "}
          <span className="gold-text">productos financieros</span> para tu empresa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
        >
          <span className="font-semibold text-white">Cuentas fintech</span>, herramientas para
          cobrar a terceros, herramientas para enviar recursos, seguros de accidentes personales,
          vida, gastos médicos mayores, beneficios para tus colaboradores y más.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            data-testid="hero-cta-primary"
            className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
          >
            Solicitar asesoría
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#wallet"
            data-testid="hero-cta-secondary"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
          >
            Ver soluciones
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.08 }}
            >
              <div className="font-display text-lg lg:text-xl font-bold text-[#D4AF37]">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
        <img
          src={BRAND.heroPerson}
          alt="Asesoría financiera Enlace Fintech"
          data-testid="hero-dashboard-image"
          className="relative rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] w-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);
