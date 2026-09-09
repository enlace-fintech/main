import {
  BRAND, BLOG, WALLET, TPV, CONSULTORIA, SERVICIOS_HUB, SERVICIOS_DETALLE, GENERIC_SECTORS,
  RESTAURANTES, MEDICOS, CASINOS, CRIPTO, EVENTOS, MEMBRESIAS, CAJA, PERSONA, ALIADOS, SUCURSALES,
} from "./content";

export const SITE_URL = `https://${BRAND.domain}`;
const suffix = ` · ${BRAND.name}`;

const STATIC = {
  "/": {
    title: "Enlace Fintech · Tu broker fintech de confianza en México",
    description: "Terminales punto de venta sin trámites bancarios, plataforma de pagos, tarjetas nominativas, pagos con FlexPei y consultoría empresarial para empresas y personas en México.",
    image: BRAND.heroDashboard,
  },
  "/servicios": { title: `Servicios para empresas${suffix}`, description: SERVICIOS_HUB.description, image: SERVICIOS_HUB.image },
  "/caja": { title: `Caja y comanda para restaurantes con InfoCaja${suffix}`, description: CAJA.description, image: CAJA.image },
  "/personas": { title: `Tarjeta nominativa y pagos para personas${suffix}`, description: PERSONA.description, image: BRAND.heroPerson },
  "/aliados": { title: `Aliados estratégicos${suffix}`, description: ALIADOS.description, image: BRAND.logo },
  "/sucursales": { title: `Sucursales y cobertura${suffix}`, description: SUCURSALES.description, image: SUCURSALES.image },
  "/blog": { title: `Blog · Finanzas y operación para empresas en México${suffix}`, description: "Guías prácticas sobre terminales sin banco, REPSE, pagos cripto, tarjetas nominativas y SPEI 24/7 para empresas mexicanas.", image: BLOG.posts[0].image },
  "/contacto": { title: `Contacto · Agenda un diagnóstico gratuito${suffix}`, description: "Cuéntanos tu negocio y te proponemos la combinación de soluciones financieras y aliados que más te conviene. Respuesta en menos de 24 horas.", image: BRAND.logo },
};

const SECTORES = {
  "restaurantes-y-bares": { title: "Soluciones financieras para restaurantes y bares", description: RESTAURANTES.description, image: RESTAURANTES.image },
  medicos: { title: "Soluciones financieras para médicos y consultorios", description: MEDICOS.description, image: MEDICOS.image },
  casinos: { title: "Medios de pago y cumplimiento para casinos", description: CASINOS.description, image: CASINOS.image },
  cripto: { title: "Cobros en cripto con liquidación en pesos", description: CRIPTO.description, image: CRIPTO.image },
  eventos: { title: "Pagos sin fricción para eventos y conciertos", description: EVENTOS.description, image: EVENTOS.image },
  membresias: { title: "Beneficios y membresías para colaboradores", description: MEMBRESIAS.description, image: MEMBRESIAS.image },
};

const SERVICIOS = {
  "plataforma-de-pagos": { title: "Plataforma de pagos para empresas", description: WALLET.description, image: SERVICIOS_HUB.image },
  "terminales-punto-de-venta": { title: "Terminales punto de venta sin trámites bancarios", description: TPV.description, image: TPV.image },
  "consultoria-empresarial": { title: "Consultoría empresarial: capital humano, fiscal y laboral", description: CONSULTORIA.description, image: CONSULTORIA.image },
};

export const getSeo = (pathname) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  const [, root, slug] = path.split("/");

  if (STATIC[path]) return { ...STATIC[path], path };

  if (root === "empresas" && slug) {
    const s = SECTORES[slug] || (GENERIC_SECTORS[slug] && { title: GENERIC_SECTORS[slug].title, description: GENERIC_SECTORS[slug].description, image: GENERIC_SECTORS[slug].image });
    if (s) return { ...s, title: s.title + suffix, path };
  }
  if (root === "servicios" && slug) {
    const s = SERVICIOS[slug] || (SERVICIOS_DETALLE[slug] && { title: SERVICIOS_DETALLE[slug].title, description: SERVICIOS_DETALLE[slug].description, image: SERVICIOS_DETALLE[slug].image });
    if (s) return { ...s, title: s.title + suffix, path };
  }
  if (root === "blog" && slug) {
    const p = BLOG.posts.find((x) => x.slug === slug);
    if (p) return { title: p.title + suffix, description: p.excerpt, image: p.image, path, type: "article" };
  }
  return { ...STATIC["/"], path };
};
