import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Send, Phone, Mail, MessageCircle, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { BRAND, INTERESES } from "../../data/content";
import { getLeadContext } from "../../data/leads";
import { Reveal, Overline } from "./Primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { nombre: "", email: "", telefono: "", empresa: "", interes: "", mensaje: "" };

export const Contacto = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const ref = params.get("ref") || pathname;
  const msg = params.get("msg");
  const resolve = () => {
    const ctx = getLeadContext(ref);
    return msg ? { ...ctx, mensaje: msg } : ctx;
  };
  const [form, setForm] = useState(() => {
    const ctx = resolve();
    return { ...initial, interes: ctx.interes, mensaje: ctx.mensaje };
  });
  const [loading, setLoading] = useState(false);
  const prevCtx = useRef(resolve());

  useEffect(() => {
    const ctx = resolve();
    const prev = prevCtx.current;
    prevCtx.current = ctx;
    setForm((f) => ({
      ...f,
      interes: !f.interes || f.interes === prev.interes ? ctx.interes : f.interes,
      mensaje: !f.mensaje || f.mensaje === prev.mensaje ? ctx.mensaje : f.mensaje,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, msg]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contacto`, form);
      toast.success("¡Gracias! Un asesor de Enlace Fintech te contactará pronto.");
      setForm(initial);
    } catch (err) {
      toast.error("No pudimos enviar tu mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 focus:outline-none transition-colors duration-200";

  return (
    <section id="contacto" data-testid="contacto-section" className="relative py-16 lg:py-24 bg-[#0e1836] border-t border-white/5 noise-overlay">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <Overline>Contacto</Overline>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Hablemos de tu próximo paso financiero
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed max-w-md">
            Cada empresa es única. En una breve llamada, nuestro equipo te orienta con la
            solución fintech adecuada para tu presupuesto y necesidades.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${BRAND.phone}`} data-testid="contact-phone" className="flex items-center gap-4 text-slate-200 hover:text-[#D4AF37] transition-colors duration-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]"><Phone size={18} strokeWidth={1.5} /></span>
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} data-testid="contact-email" className="flex items-center gap-4 text-slate-200 hover:text-[#D4AF37] transition-colors duration-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]"><Mail size={18} strokeWidth={1.5} /></span>
              {BRAND.email}
            </a>
            <div className="flex items-center gap-4 text-slate-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]"><MessageCircle size={18} strokeWidth={1.5} /></span>
              WhatsApp {BRAND.whatsapp}
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/12 text-[#D4AF37]"><MapPin size={18} strokeWidth={1.5} /></span>
              {BRAND.address}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="rounded-2xl border border-white/10 bg-[#0B132B]/60 backdrop-blur-md p-7 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input data-testid="input-nombre" required placeholder="Nombre completo" value={form.nombre} onChange={update("nombre")} className={inputCls} />
              <input data-testid="input-email" required type="email" placeholder="Correo electrónico" value={form.email} onChange={update("email")} className={inputCls} />
              <input data-testid="input-telefono" placeholder="Teléfono" value={form.telefono} onChange={update("telefono")} className={inputCls} />
              <input data-testid="input-empresa" placeholder="Empresa" value={form.empresa} onChange={update("empresa")} className={inputCls} />
            </div>
            <select data-testid="input-interes" value={form.interes} onChange={update("interes")} className={`${inputCls} mt-4`}>
              <option value="">¿En qué estás interesado?</option>
              {INTERESES.map((i) => (
                <option key={i} value={i} className="bg-[#0B132B]">{i}</option>
              ))}
            </select>
            <textarea data-testid="input-mensaje" required rows={4} placeholder="Cuéntanos sobre tu negocio..." value={form.mensaje} onChange={update("mensaje")} className={`${inputCls} mt-4 resize-none`} />

            <button
              type="submit"
              data-testid="contact-submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 transition-[transform,background-color] duration-200"
            >
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
