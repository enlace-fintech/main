# PRD · Enlace Fintech (enlacefintech.com)

## Problema original
Crear el sitio web enlacefintech.com con logo, tomando como referencia al competidor
https://vinculacionfinanciera.com y replicando casi todo su contenido/estructura.
Propuesta gráfica + sitio + contenido completo, en español (mercado México).

## Arquitectura
- Frontend: React (CRA/craco) + Tailwind + framer-motion + lucide-react + sonner.
- Backend: FastAPI + MongoDB (motor). Endpoints con prefijo /api.
- SPA multipágina con react-router-dom: /, /empresas/:slug (12 sectores), /servicios, /servicios/:slug (consultoria-empresarial, terminales-punto-de-venta), /wallet, /caja, /personas, /aliados, /sucursales, /blog, /contacto.

## Personas
- Dueños de restaurantes/bares y comercios (hostelería).
- Operadores de casinos.
- Empresas (pymes y grandes) que buscan soluciones fintech.
- Personas físicas (crédito personal/grupal, adelanto de nómina).

## Requisitos core (estáticos)
- Broker fintech de confianza; secciones: Restaurantes y bares, Wallet Negocios,
  Persona física / crédito grupal y personal, Casinos, Blog, Contacto.
- Formulario de contacto que guarde solicitudes.

## Diseño
- Tema oscuro premium: azul medianoche #0B132B + acento dorado #D4AF37.
- Tipografía: Cabinet Grotesk (títulos) + Manrope (cuerpo).
- Glassmorphism, bento grid en Wallet, animaciones de entrada, micro-interacciones.

## Implementado (2026-09-05)
- Logo generado (marca dorada de enlace) + dashboard hero generado.
- Header con nav + menú móvil; Hero con stats; Restaurantes; Wallet Negocios (bento:
  AQPay, SPEI, tiendas de autoservicio, TPV y links de pago, transmisión internacional);
  Persona física con tarjeta VISA; Casinos; Blog (3 artículos); Contacto; Footer.
- Backend: POST/GET /api/contacto con validación (422) y persistencia en MongoDB.
- Testing E2E: backend 6/6, frontend 100%.

## Implementado (2026-06-09)
- Nueva sección Servicios (modelo híbrido: Enlace capta, aliados del grupo operan): hub /servicios con 3 pilares,
  /servicios/consultoria-empresarial (5 áreas con tabs: capital humano, corporativa, fiscal, laboral, mercantil; copy adaptado a México: REPSE, STPS, Consejo de Administración) y
  /servicios/terminales-punto-de-venta (10 beneficios, plataforma premium, 3 pasos, requisitos).
- Home acortada (20k px → 8.6k px): Hero, Aliados, Empresas (solo sectores), Servicios, Wallet, Personas, Ecosistema, Así trabajamos, FAQ, Contacto.
- Header: dropdown Servicios con subtítulo propio; menú móvil con submenús exclusivos (bug corregido).
- Footer: columna Servicios + disclaimer legal (LEGAL en content.js).
- ONBOARDING reescrito como "Así trabajamos" (Diagnóstico → Propuesta → Alta → Acompañamiento).
- INTERESES del formulario: + Consultoría empresarial, Terminales punto de venta.
- Padding de secciones reducido (py-16 lg:py-24) y margen de Reveal -40px para evitar huecos.
- Testing: iteration_2.json 100% (backend 8/8, frontend OK).

## Implementado (2026-06-09, 2ª parte)
- "Wallet Negocios" renombrado a **Plataforma de pagos** (/servicios/plataforma-de-pagos; /wallet redirige). Feature nueva: Tarjetas empresariales.
- Hub de Servicios con 6 pilares: Plataforma de pagos, Terminales, Tarjetas empresariales, Nómina y dispersión, Pagos internacionales, Consultoría.
- Nuevas páginas vía componente genérico ServicioDetalle (data en SERVICIOS_DETALLE): /servicios/tarjetas (nominativas colaboradores, nómina, corporativa directivos), /servicios/nomina-y-dispersion, /servicios/pagos-internacionales (FlexPei + FluxiPay).
- NAV/Footer/INTERESES actualizados. Testing: iteration_4.json 100%.

## Regla de negocio (2026-06-09)
- Enlace NO otorga ni promociona créditos en Empresas/Servicios. Oferta: tarjetas nominativas, terminales, pagos con FlexPei y marcas aliadas existentes.
- Eliminado de sectores: "créditos rápidos" (casinos), "meses sin intereses" (médicos, tiendas, ferreterías, agencias), "Crédito y adelanto de nómina" + aliado CREA (membresías), categorías Créditos/Adelanto en Aliados, "adelanto de nómina" en Servicios Nómina/Tarjetas, FAQ.
- Personas reescrita (2026-06-09): tarjeta nominativa + pagos FlexPei, sin crédito. INTERESES: 'Tarjeta para personas'.

## Blog (2026-06-09)
- 6 artículos SEO México con páginas propias /blog/:slug (BlogPost.jsx, data BLOG.posts con sections/cta): TPV sin banco, REPSE 2026, cobrar en cripto, tarjetas nominativas, SPEI 24/7, elegir cuenta fintech.
- document.title y meta description dinámicos por artículo; relacionados; redirect de slug inválido a /blog. Testing iteration_5.json.

## SEO y compartir (2026-06-09)
- RouteSeo (Layout) + data/seo.js: title, description, canonical, og:*, twitter:* por ruta (estáticas, /empresas/:slug, /servicios/:slug, /blog/:slug). Dominio canónico https://enlacefintech.com.
- public/robots.txt y public/sitemap.xml (32 URLs). index.html lang es-MX, og:description sin "créditos".
- ShareButtons en artículos (WhatsApp, LinkedIn, copiar) usando GET /api/share/blog/{slug}?title&desc&image → HTML con OG server-side + redirect al artículo (vista previa real en redes). Testing iteration_6.json.

## Legal + JSON-LD + hero (2026-06-09)
- Hero subtitle reescrito ("Un solo aliado para cobrar, pagar y operar…"); CTA "Ver soluciones por sector".
- Páginas /aviso-de-privacidad y /terminos-y-condiciones (data/legal.js, LegalPages.jsx) enlazadas desde footer. Campos [RAZÓN SOCIAL], [DOMICILIO], [CORREO] pendientes de datos reales.
- JSON-LD por ruta (script#route-jsonld): Organization+WebSite, FAQPage (home), Service+Breadcrumb (servicios/empresas), BlogPosting+Breadcrumb (blog). Sitemap 34 URLs. Testing iteration_7.json.

## Backlog / pendientes
- P1: Reescribir copy débil (Restaurantes, Médicos, Casinos sin "créditos a jugadores", Membresías, Personas en 3 tarjetas, FAQ con precio/regulación, Aliados con descripción por aliado).
- P1: Sección "Por qué Enlace" + espacio para testimonios/cifras reales.
- P1: Quitar/corregir aliados Mastiket y Masaldo (dominios rotos).
- P2: Sucursales → "Cobertura" si no hay sucursales reales.
- P2: Logo horizontal final (PNG del usuario).
- P1: Reemplazar datos de contacto placeholder (tel, email, WhatsApp, dirección, redes).
- P2: Páginas de artículos de blog completos (rutas propias).
- P2: Sustituir [RAZÓN SOCIAL]/[DOMICILIO]/[CORREO] en textos legales.
- P2: Envío de correo real de notificación al recibir contacto (Resend).
- P2: Versión en inglés.

## Próximos pasos
- Confirmar datos de contacto reales y branding definitivo.
