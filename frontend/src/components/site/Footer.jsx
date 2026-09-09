import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, NAV, LEGAL } from "../../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-[#070d1e] border-t border-white/10">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Link to="/" className="flex items-center gap-3">
          <img loading="lazy" decoding="async" src={BRAND.logo} alt="Enlace Fintech" className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10" />
          <span className="font-display leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-white">ENLACE</span>
            <span className="block text-[0.62rem] tracking-[0.42em] font-medium text-[#D4AF37]">FINTECH</span>
          </span>
        </Link>
        <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xs">
          Tu broker fintech de confianza en el viaje hacia el éxito empresarial.
        </p>
      </div>

      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Sectores</h4>
        <ul className="mt-5 space-y-3">
          {NAV[0].children.slice(0, 6).map((c) => (
            <li key={c.href}>
              <Link to={c.href} className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Servicios</h4>
        <ul className="mt-5 space-y-3">
          <li><Link to="/servicios/plataforma-de-pagos" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Plataforma de pagos</Link></li>
          <li><Link to="/servicios/terminales-punto-de-venta" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Terminales punto de venta</Link></li>
          <li><Link to="/servicios/tarjetas" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Tarjetas empresariales</Link></li>
          <li><Link to="/servicios/nomina-y-dispersion" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Nómina y dispersión</Link></li>
          <li><Link to="/servicios/pagos-internacionales" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Pagos internacionales</Link></li>
          <li><Link to="/servicios/consultoria-empresarial" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Consultoría empresarial</Link></li>
          <li><Link to="/servicios/sistemas" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Sistemas y tecnología</Link></li>
          <li><Link to="/personas" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Personas</Link></li>
          <li><Link to="/aliados" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Aliados</Link></li>
          <li><Link to="/sucursales" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Sucursales</Link></li>
          <li><Link to="/blog" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Blog</Link></li>
          <li><Link to="/contacto" className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors duration-200">Contacto</Link></li>
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
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6">
        <p data-testid="legal-disclaimer" className="text-xs leading-relaxed text-slate-500">{LEGAL}</p>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Enlace Fintech · {BRAND.domain}. Todos los derechos reservados.</p>
        <p className="text-xs text-slate-500">
          <Link to="/aviso-de-privacidad" data-testid="footer-privacidad" className="hover:text-[#D4AF37] transition-colors duration-200">Aviso de privacidad</Link>
          {" · "}
          <Link to="/terminos-y-condiciones" data-testid="footer-terminos" className="hover:text-[#D4AF37] transition-colors duration-200">Términos y condiciones</Link>
        </p>
      </div>
    </div>
  </footer>
);
