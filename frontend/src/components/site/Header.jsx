import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV } from "../../data/content";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0B132B]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" data-testid="logo-link" className="flex items-center gap-3">
          <img
            src={BRAND.logo}
            alt="Enlace Fintech"
            className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
          />
          <span className="font-display leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-white">
              ENLACE
            </span>
            <span className="block text-[0.62rem] tracking-[0.42em] font-medium text-[#D4AF37]">
              FINTECH
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.slice(0, 6).map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.href.replace("#", "")}`}
              className="text-sm text-slate-300 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          data-testid="header-cta"
          className="hidden lg:inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-2.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] hover:-translate-y-0.5 transition-[transform,background-color] duration-200"
        >
          Contáctanos
        </a>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#0B132B]/97 backdrop-blur-xl border-t border-white/10 px-5 py-6 space-y-1"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
