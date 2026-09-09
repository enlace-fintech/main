import {
  BRAND, BLOG, FAQ, WALLET, TPV, CONSULTORIA, SERVICIOS_HUB, SERVICIOS_DETALLE, GENERIC_SECTORS, SISTEMAS,
  RESTAURANTES, MEDICOS, CASINOS, CRIPTO, EVENTOS, MEMBRESIAS, CAJA, PERSONA, ALIADOS, SUCURSALES,
} from "./content";

export const SITE_URL = `https://${BRAND.domain}`;
export const absUrl = (u) => (u && u.startsWith("/") ? `${SITE_URL}${u.replace(/\.webp$/, ".jpg")}` : u);
const suffix = ` · ${BRAND.name}`;

const STATIC = {
  "/": {
    title: "Enlace Fintech · Tu broker fintech de confianza en México",
    description: "Terminales punto de venta sin trámites bancarios, plataforma de pagos, tarjetas nominativas, pagos con FlexPei y consultoría empresarial para empresas y personas en México.",
    image: BRAND.heroDashboard,
  },
  "/servicios": { title: `Servicios para empresas${suffix}`, description: SERVICIOS_HUB.description, image: SERVICIOS_HUB.image },
  "/personas": { title: `Tarjeta nominativa y pagos para personas${suffix}`, description: PERSONA.description, image: BRAND.heroPerson },
  "/aliados": { title: `Aliados estratégicos${suffix}`, description: ALIADOS.description, image: BRAND.logo },
  "/sucursales": { title: `Sucursales y cobertura${suffix}`, description: SUCURSALES.description, image: SUCURSALES.image },
  "/blog": { title: `Blog · Finanzas y operación para empresas en México${suffix}`, description: "Guías prácticas sobre terminales sin banco, REPSE, pagos cripto, tarjetas nominativas y SPEI 24/7 para empresas mexicanas.", image: BLOG.posts[0].image },
  "/contacto": { title: `Contacto · Agenda un diagnóstico gratuito${suffix}`, description: "Cuéntanos tu negocio y te proponemos la combinación de soluciones financieras y aliados que más te conviene. Respuesta en menos de 24 horas.", image: BRAND.logo },
  "/aviso-de-privacidad": { title: `Aviso de privacidad${suffix}`, description: "Conoce cómo Enlace Fintech trata y protege tus datos personales conforme a la LFPDPPP, y cómo ejercer tus derechos ARCO.", image: BRAND.logo },
  "/terminos-y-condiciones": { title: `Términos y condiciones${suffix}`, description: "Condiciones de uso del sitio enlacefintech.com, naturaleza de intermediario de Enlace Fintech y responsabilidad sobre los servicios de aliados.", image: BRAND.logo },
};

const SECTORES = {
  "restaurantes-y-bares": { title: "Soluciones financieras para restaurantes y bares", description: RESTAURANTES.description, image: RESTAURANTES.image, faq: RESTAURANTES.faq },
  medicos: { title: "Soluciones financieras para médicos y consultorios", description: MEDICOS.description, image: MEDICOS.image, faq: MEDICOS.faq },
  casinos: { title: "Medios de pago y cumplimiento para casinos", description: CASINOS.description, image: CASINOS.image, faq: CASINOS.faq },
  eventos: { title: "Pagos sin fricción para eventos y conciertos", description: EVENTOS.description, image: EVENTOS.image, faq: EVENTOS.faq },
  membresias: { title: "Beneficios y membresías para colaboradores", description: MEMBRESIAS.description, image: MEMBRESIAS.image, faq: MEMBRESIAS.faq },
};

const SERVICIOS = {
  "plataforma-de-pagos": { title: "Plataforma de pagos para empresas", description: WALLET.description, image: SERVICIOS_HUB.image },
  "terminales-punto-de-venta": { title: "Terminales punto de venta sin trámites bancarios", description: TPV.description, image: TPV.image },
  "consultoria-empresarial": { title: "Consultoría empresarial: capital humano, fiscal y laboral", description: CONSULTORIA.description, image: CONSULTORIA.image },
  sistemas: { title: "Sistemas y tecnología para tu negocio: reservaciones, boletos, caja, call center y software", description: SISTEMAS.description, image: SISTEMAS.image },
  "caja-y-comanda": { title: "Caja y comanda para restaurantes con InfoCaja", description: CAJA.description, image: CAJA.image },
  cripto: { title: "Cobros en cripto con liquidación en pesos", description: CRIPTO.description, image: CRIPTO.image, faq: CRIPTO.faq },
};

export const getSeo = (pathname) => {
  const seo = resolveSeo(pathname);
  return { ...seo, image: absUrl(seo.image) };
};

const resolveSeo = (pathname) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  const [, root, slug] = path.split("/");

  if (STATIC[path]) return { ...STATIC[path], path };

  if (root === "empresas" && slug) {
    const s = SECTORES[slug] || (GENERIC_SECTORS[slug] && { title: GENERIC_SECTORS[slug].title, description: GENERIC_SECTORS[slug].description, image: GENERIC_SECTORS[slug].image, faq: GENERIC_SECTORS[slug].faq });
    if (s) return { ...s, title: s.title + suffix, path };
  }
  if (root === "servicios" && slug) {
    const s = SERVICIOS[slug] || (SERVICIOS_DETALLE[slug] && { title: SERVICIOS_DETALLE[slug].title, description: SERVICIOS_DETALLE[slug].description, image: SERVICIOS_DETALLE[slug].image });
    if (s) return { ...s, title: s.title + suffix, path };
  }
  if (root === "blog" && slug) {
    const p = BLOG.posts.find((x) => x.slug === slug);
    if (p) return { title: p.title + suffix, description: p.excerpt, image: p.image, path, type: "article", post: p };
  }
  return { ...STATIC["/"], path };
};

const ORG = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND.name,
  url: SITE_URL,
  logo: absUrl(BRAND.logo),
  email: BRAND.email,
  telephone: BRAND.phone,
  address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressCountry: "MX" },
  areaServed: "MX",
  description: STATIC["/"].description,
};

const SERVICE_NAMES = {
  "plataforma-de-pagos": WALLET.overline,
  "terminales-punto-de-venta": TPV.overline,
  "consultoria-empresarial": CONSULTORIA.overline,
  sistemas: SISTEMAS.overline,
  "caja-y-comanda": CAJA.overline,
  cripto: "Cobros en cripto",
};

const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
});

export const getJsonLd = (pathname, seo) => {
  const path = seo.path;
  const [, root, slug] = path.split("/");
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const graph = [ORG, { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: BRAND.name, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "es-MX" }];

  if (path === "/") {
    graph.push({ "@type": "FAQPage", mainEntity: FAQ.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  } else if (root === "servicios" && slug) {
    graph.push({
      "@type": "Service",
      name: SERVICE_NAMES[slug] || SERVICIOS_DETALLE[slug]?.overline || seo.title,
      description: seo.description,
      url,
      image: seo.image,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "MX",
    });
    if (seo.faq) graph.push({ "@type": "FAQPage", mainEntity: seo.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
    graph.push(breadcrumb([{ name: "Inicio", path: "" }, { name: "Servicios", path: "/servicios" }, { name: SERVICE_NAMES[slug] || SERVICIOS_DETALLE[slug]?.overline || seo.title, path }]));
  } else if (root === "empresas" && slug) {
    graph.push({ "@type": "Service", name: seo.title.replace(suffix, ""), description: seo.description, url, image: seo.image, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: "MX" });
    if (seo.faq) graph.push({ "@type": "FAQPage", mainEntity: seo.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
    graph.push(breadcrumb([{ name: "Inicio", path: "" }, { name: "Empresas", path: "/empresas/restaurantes-y-bares" }, { name: seo.title.replace(suffix, ""), path }]));
  } else if (root === "blog" && seo.post) {
    const p = seo.post;
    graph.push({
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: p.title,
      description: p.excerpt,
      image: absUrl(p.image),
      url,
      mainEntityOfPage: url,
      articleSection: p.category,
      inLanguage: "es-MX",
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: toIso(p.date),
      dateModified: toIso(p.date),
    });
    graph.push(breadcrumb([{ name: "Inicio", path: "" }, { name: "Blog", path: "/blog" }, { name: p.title, path }]));
  } else if (path !== "/") {
    graph.push(breadcrumb([{ name: "Inicio", path: "" }, { name: seo.title.replace(suffix, ""), path }]));
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

const MESES = { enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06", julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12" };
const toIso = (d) => {
  const m = d.match(/^(\d{1,2}) (\w+), (\d{4})$/);
  return m ? `${m[3]}-${MESES[m[2]] || "01"}-${m[1].padStart(2, "0")}` : d;
};
