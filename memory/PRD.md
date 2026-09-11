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

## Aviso por correo (2026-06-09)
- Resend integrado en backend: POST /api/contacto dispara BackgroundTask notify_team → correo HTML al equipo (NOTIFY_EMAILS, remitente SENDER_EMAIL, reply_to cliente). Resultado en Mongo: notificado/email_id o email_error.
- Env: RESEND_API_KEY, SENDER_EMAIL=notificaciones@enlacefintech.com, NOTIFY_EMAILS=contacto@enlacefintech.com. Requiere dominio enlacefintech.com verificado en Resend para entregar. Testing iteration_8.json.

## Sistemas aliados + confirmación al cliente (2026-06-09)
- Página /servicios/sistemas (SISTEMAS en content.js, SistemasAliados.jsx): Más Mesa (masmesa.com.mx), Mastiket, InfoCaja, Callmarket, MisTrámites, Acxor (desarrollo de software; empresa de ingeniería del grupo que construyó FlexPei, MasMesa, FluxiPay, CallMarket, MisTrámites). Strip compacto en /servicios. Acxor añadido al Ecosistema.
- URL de Más Mesa corregida a masmesa.com.mx.
- notify_client: correo de confirmación al cliente ("Recibimos tu solicitud"), flags confirmacion_enviada/confirmacion_id. Testing iteration_9.json.

## Assets locales (2026-06-09)
- Todas las imágenes (26) descargadas, optimizadas (≤1600px, JPEG q82, 58MB→4MB) en frontend/public/img/ con nombres semánticos; URLs en content.js/index.html ahora relativas (/img/...). Script: frontend/scripts/localize_images.py.
- Fuentes auto-hospedadas en public/fonts/ (Manrope OFL, Cabinet Grotesk ITF) vía public/fonts.css (enlazado en index.html; no en src/ porque css-loader intenta resolver /fonts/*).
- Eliminados: Google Fonts, Fontshare, Inter, snippet PostHog (ap.emergent.sh). Queda solo assets.emergent.sh/emergent-main.js (badge de plataforma) — decisión del usuario.
- seo.js: absUrl() convierte rutas /img/ a https://enlacefintech.com/img/ para og:image, JSON-LD y el endpoint /api/share.
- REGLA: nuevas imágenes deben guardarse en public/img/, nunca URLs externas.

## WebP + lazy + Caja bajo Sistemas + sin badge (2026-06-09)
- Imágenes en WebP (public/img/*.webp, 2.2MB total) para <img>; se conservan .jpg para favicon/OG/JSON-LD (absUrl() mapea .webp→.jpg). loading="lazy" decoding="async" en todas las imágenes salvo Hero/Header (eager, fetchPriority high).
- Caja & comanda movida a /servicios/caja-y-comanda (breadcrumb Servicios > Sistemas y tecnología > Caja & comanda); /caja redirige. Quitada del menú/footer (vive dentro de Sistemas).
- Eliminado script assets.emergent.sh (badge). index.html sin dependencias externas. Verificado en 35 rutas: 0 imágenes rotas/externas, 0 errores.

## Copy por sector (2026-06-09)
- Restaurantes, Médicos y Membresías reescritos SIN quitar información: títulos orientados a dolor, bullets/features ampliados, + `pains` (dolor→solución), `faq` (3), `cta`, `note` (médicos), `steps` (membresías: qué recibe / quién paga / cómo se implementa), `desc` por aliado. Componente compartido SectorExtras.jsx. FAQPage JSON-LD en esos sectores.

## Copy Casinos/Cripto/Eventos (2026-06-09)
- Mismo formato SectorExtras (pains, faq, cta, note) + `audience` chips (Cripto) y `timeline` Preventa/Día/Post (Eventos). Énfasis en terminales, banca empresarial (Plataforma de pagos/FlexPei SPEI 24/7) y tarjetas de nómina. FAQPage JSON-LD en los 3.
- Masaldo URL corregida a https://masaldo.com.mx (app real). mastiket.com sigue siendo placeholder GoDaddy (decisión del usuario mantenerlo).

## Sectores genéricos + hero neutral (2026-06-09)
- Hero sin mención a FlexPei ("transferencias SPEI 24/7"). Regla: el hero debe ser neutral, sin marcas de aliados.
- GENERIC_EXTRAS (content.js) fusionado en GENERIC_SECTORS: pains/faq/cta para call-center, farmacias, tiendas, ferreterias, hoteles, agencias-de-viajes; GenericSector renderiza SectorExtras (testid "sector-*"). FAQPage JSON-LD en los 6.

## Interés preseleccionado + WhatsApp por página (2026-06-09)
- data/leads.js: getLeadContext(path) → {interes, mensaje, whatsapp} por sector/servicio/personas; contactHref(path) = /contacto?ref=<path>.
- Contacto.jsx prellena interés y mensaje desde ?ref o pathname (sin sobrescribir lo que el usuario escriba). ContactLink (Primitives) usado en CTAs de sectores/servicios. WhatsAppFab con texto contextual. INTERESES + "Beneficios para colaboradores". Testing iteration_10.json.

## Cripto movido a Servicios (2026-06-09)
- /servicios/cripto (componente Cripto, overline "Servicios · Cripto"); /empresas/cripto redirige. Quitado del grid/menú Empresas; añadido a menú/footer Servicios, chip "Cobros en cripto" del hub, CTA del blog, sitemap, leads (interés "Pagos internacionales"), seo (Service + FAQPage). Empresas ahora tiene 11 sectores.

## Servicios faltantes + Seguros y beneficios a Servicios (2026-06-11)
- Consultoría: capital humano + "Contratación temporal o de planta", "Negociación con sindicatos", outsourcing (REPSE); nueva área "Asesoría contable y administrativa" (6 tabs); bloque "3 frentes" (Soluciones financieras / Capital humano / Asesoría y consultoría) restaurado.
- Sistemas: + Masaldo (cashless RFID). Hub: 8 pilares (grid 4 cols) incl. "Seguros y beneficios para colaboradores" y "Sistemas y tecnología".
- Membresías movida a /servicios/seguros-y-beneficios (componente Membresias); /empresas/membresias redirige; quitada de Empresas (quedan 10 sectores). Menú/footer/leads/seo/sitemap actualizados.
- Hero (texto fijado por el usuario): "…terminales punto de venta con trámites online rápidos…".

## Seguros y beneficios estilo Vitae + Por qué Enlace + Calculadora TPV (2026-06-11)
- /servicios/seguros-y-beneficios rediseñada como producto tipo vitaebeneficios.com (sin crédito/adelanto): hero con highlights (app, Membresía Cero, NOM-035, desde 1 colaborador), 8 categorías (seguros, asistencia médica, banca digital, entretenimiento, asistencias, pago de servicios, deporte, módulo empresarial), 5 planes seleccionables (Básica/Membresía Cero sin costo, Salud $49, Plus $99 destacado, Fitness $449, Black $1,899 — precios de REFERENCIA por colaborador/mes), cotizador rápido por plantilla (1-5 … +500) que lleva a /contacto con mensaje prellenado, banner NOM-035, aliados, FAQ. Componentes: Membresias.jsx + BeneficiosPlanes.jsx. Datos en MEMBRESIAS (content.js).
- El usuario NO confirmó ramos/aseguradoras para una página aparte de seguros empresariales; redirigió a modelo Vitae. No existe /servicios/seguros-empresariales.
- "Por qué Enlace": sección en Home (tras Servicios) y página /por-que-enlace (PorQueEnlace.jsx, Testimonios.jsx, data/porque.js): cifras DE MUESTRA (+350 negocios, +1,200 terminales, $0 asesoría, <24 h) con nota, bloque "¿Cómo ganamos dinero?" (comisión del aliado, mismas condiciones, todo por escrito, lo que no hacemos), 4 razones (solo página), 3 testimonios DE MUESTRA con nota. NAV + footer + seo + sitemap.
- Calculadora TPV (CalculadoraTpv.jsx, data/calculadora.js): en /servicios/terminales-punto-de-venta y página /calculadora-tpv. Tasa Enlace 2.9% (fijada por el usuario), renta $0. Inputs: ventas, ticket, comisión actual, renta actual → ahorro mensual/anual, transacciones; CTA a /contacto con mensaje con cifras. Link en menú Servicios, footer y chip del hub.
- Contacto.jsx acepta ?msg= para prellenar el mensaje (además de ?ref=). leads.js: contextos para /calculadora-tpv y /por-que-enlace.
- Ajuste (2026-06-11): sin app ni "Membresía Cero" (no existen). Quitados highlights "Todo desde una app" y "Membresía Cero", plan Básica eliminado (quedan Salud, Plus, Fitness, Black en grid de 4). Cada una de las 8 categorías tiene ilustración propia (public/img/cat-*.webp).
- Aliados de beneficios (2026-06-11): MEMBRESIAS.aliados ahora agrupado por categoría con los proveedores de vitaebeneficios.com/aliados-y-proveedores (MAPFRE, Chubb, SURA, AsisMed, VRIM, Gayosso, J. García López, Visa, Toka, Billpocket, GBM, Nomilinea, MAS Beneficios, Bwigo, Alquimia Digital, 17 gimnasios). EXCLUIDOS por regla de negocio: CREA, DSF Credit, Findo, Affipay (crédito/adelanto de nómina).
- Reloj checador biométrico (2026-06-11): añadido como servicio en SISTEMAS.items (sin URL externa → badge "Enlace"), en Módulo empresarial y bloque propio MEMBRESIAS.reloj en /servicios/seguros-y-beneficios. Imágenes generadas (IA) y localizadas en public/img: plan-basica/salud/plus/fitness/black.webp (tarjetas de planes), nom035.webp (banner), reloj-checador.webp.

## Backlog / pendientes
- P1: Sustituir cifras y testimonios de muestra en data/porque.js por datos reales (y quitar las notas statsNote/testimonialsNote).
- P1: Confirmar precios reales de planes de beneficios (MEMBRESIAS.plans) y aseguradoras aliadas.
- P1: FAQ global con precio/regulación; página Aliados con descripción por aliado.
- P1: Quitar/corregir aliados Mastiket y Masaldo (dominios rotos).
- P2: Sucursales → "Cobertura" si no hay sucursales reales.
- P2: Logo horizontal final (PNG del usuario).
- P1: Reemplazar datos de contacto placeholder (tel, email, WhatsApp, dirección, redes).
- P2: Páginas de artículos de blog completos (rutas propias).
- P2: Sustituir [RAZÓN SOCIAL]/[DOMICILIO]/[CORREO] en textos legales.
- P2: Versión en inglés.

## Próximos pasos
- Confirmar datos de contacto reales y branding definitivo.
