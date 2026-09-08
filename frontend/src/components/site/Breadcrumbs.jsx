import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs = ({ trail = [] }) => (
  <section className="relative pt-28 pb-6 border-b border-white/5" data-testid="breadcrumbs">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <Link to="/" className="hover:text-[#D4AF37] transition-colors duration-200">Inicio</Link>
        {trail.map((t, i) => (
          <span key={i} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-slate-600" />
            {t.href ? (
              <Link to={t.href} className="hover:text-[#D4AF37] transition-colors duration-200">{t.label}</Link>
            ) : (
              <span className="text-[#D4AF37]">{t.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  </section>
);
