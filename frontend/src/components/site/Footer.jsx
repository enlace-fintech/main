import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, NAV } from "../../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-[#070d1e] border-t border-white/10">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-3">
          <img src={BRAND.logo} alt="Enlace Fintech" className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10" />
          <span className="font-display leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-white">ENLACE</span>
            <span className="block text-[0.62rem] tracking-[0.42em] font-medium text-[#D4AF37]">FINTECH</span>
          </span>
        </div>
        <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xs">
          Tu broker fintech de confianza en el viaje hacia el éxito empresarial.
        </p>
      </div>

      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Soluciones</h4>
        <ul className="mt-5 space-y-3">
          {NAV.slice(1, 5).map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Empresa</h4>
        <ul className="mt-5 space-y-3">
          <li><a href="#blog" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Blog</a></li>
          <li><a href="#contacto" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Contacto</a></li>
          <li><a href="#inicio" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Inicio</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Contacto</h4>
        <ul className="mt-5 space-y-3 text-sm text-slate-400">
          <li className="flex items-center gap-3"><Phone size={16} className="text-[#D4AF37]" strokeWidth={1.5} />{BRAND.phone}</li>
          <li className="flex items-center gap-3"><Mail size={16} className="text-[#D4AF37]" strokeWidth={1.5} />{BRAND.email}</li>
          <li className="flex items-center gap-3"><MapPin size={16} className="text-[#D4AF37]" strokeWidth={1.5} />{BRAND.address}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Enlace Fintech · {BRAND.domain}. Todos los derechos reservados.</p>
        <p className="text-xs text-slate-500">Aviso de privacidad · Términos y condiciones</p>
      </div>
    </div>
  </footer>
);
