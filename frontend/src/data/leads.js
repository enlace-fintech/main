const SECTOR = {
  "restaurantes-y-bares": ["Restaurantes y bares", "un restaurante/bar", "terminales que no se caigan en hora pico, propinas a tarjeta y tarjeta de nómina para mi equipo"],
  medicos: ["Terminales punto de venta", "un consultorio médico", "una terminal Bluetooth, links de pago para anticipos y depósito directo a mi cuenta"],
  casinos: ["Casinos", "un casino", "medios de pago, tarjetas nominativas para jugadores y cumplimiento PLD"],
  eventos: ["Terminales punto de venta", "eventos y conciertos", "terminales para barras, cashless y liquidación rápida a proveedores"],
  "call-center": ["Terminales punto de venta", "un call center", "links de pago para cobrar por teléfono y dispersión de comisiones a agentes"],
  farmacias: ["Terminales punto de venta", "una farmacia", "terminales con comisión negociada, inventario y facturación QR"],
  tiendas: ["Terminales punto de venta", "una tienda", "cobrar con tarjeta, links de pago por WhatsApp y tarjetas para mi equipo"],
  ferreterias: ["Terminales punto de venta", "una ferretería", "terminales sin límites, SPEI 24/7 a proveedores y tarjetas nominativas para choferes"],
  hoteles: ["Terminales punto de venta", "un hotel", "cobro de anticipos, terminales por punto y aceptación de tarjetas internacionales"],
  "agencias-de-viajes": ["Terminales punto de venta", "una agencia de viajes", "links de pago, pagos internacionales a operadores y tarjetas de viáticos"],
};

const SERVICIO = {
  "plataforma-de-pagos": ["Plataforma de pagos", "la Plataforma de pagos con SPEI 24/7 y control por usuario"],
  "terminales-punto-de-venta": ["Terminales punto de venta", "terminales punto de venta sin trámites bancarios"],
  tarjetas: ["Tarjetas empresariales", "tarjetas nominativas para colaboradores, nómina y directivos"],
  "nomina-y-dispersion": ["Nómina y dispersión", "dispersión de nómina y tarjeta de nómina para mi equipo"],
  "pagos-internacionales": ["Pagos internacionales", "pagos y cobros internacionales"],
  cripto: ["Pagos internacionales", "cobrar en cripto con liquidación en pesos"],
  "consultoria-empresarial": ["Consultoría empresarial", "consultoría en capital humano, fiscal, laboral y contable"],
  "seguros-y-beneficios": ["Beneficios para colaboradores", "seguros y beneficios para mis colaboradores (tarjeta de nómina, gimnasio, asistencias)"],
  sistemas: ["Otro", "integrar un sistema (reservaciones, boletos, caja, call center o software a medida)"],
  "caja-y-comanda": ["Otro", "caja y comanda para mi restaurante con InfoCaja"],
};

const DEFAULT = {
  interes: "",
  mensaje: "",
  whatsapp: "Hola, me interesa conocer las soluciones de Enlace Fintech para mi negocio.",
};

export const getLeadContext = (path = "/") => {
  const [, root, slug] = path.replace(/\/+$/, "").split("/");
  if (root === "empresas" && SECTOR[slug]) {
    const [interes, negocio, tema] = SECTOR[slug];
    return {
      interes,
      mensaje: `Tengo ${negocio} y me interesan ${tema}. ¿Me pueden cotizar?`,
      whatsapp: `Hola, tengo ${negocio} y me interesan ${tema}.`,
    };
  }
  if (root === "servicios" && SERVICIO[slug]) {
    const [interes, tema] = SERVICIO[slug];
    return { interes, mensaje: `Me interesa ${tema}. ¿Me pueden dar más información?`, whatsapp: `Hola, me interesa ${tema}.` };
  }
  if (root === "servicios") return { interes: "", mensaje: "Me interesan sus servicios para empresas. ¿Me pueden asesorar?", whatsapp: "Hola, me interesan sus servicios para empresas." };
  if (root === "personas") return { interes: "Tarjeta para personas", mensaje: "Quiero una tarjeta nominativa y cuenta para recibir mi nómina.", whatsapp: "Hola, quiero una tarjeta nominativa para personas." };
  return DEFAULT;
};

export const contactHref = (path) => `/contacto?ref=${encodeURIComponent(path)}`;
