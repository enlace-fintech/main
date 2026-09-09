// Contenido central de Enlace Fintech (adaptado y reescrito para la marca)

export const BRAND = {
  name: "Enlace Fintech",
  domain: "enlacefintech.com",
  logo: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/1ea1d960844b7f00d1a57231eaa1ae463eb4c7dd2c8a3f1e933228b6d74bbd6c.jpeg",
  heroDashboard: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/c0ac1b3c30a83e57504f71798d31da8a22152c935c6a41ab5875736fdea65feb.jpeg",
  heroPerson: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/9c987f5737fe95ef3b10c59483debca893627796096c34548ea35effeba1ee01.jpeg",
  tagline: "Tu broker fintech de confianza",
  phone: "+52 55 0000 0000",
  email: "contacto@enlacefintech.com",
  whatsapp: "+52 55 0000 0000",
  address: "Ciudad de México, México",
};

export const NAV = [
  {
    label: "Empresas",
    children: [
      { label: "Restaurantes y bares", href: "/empresas/restaurantes-y-bares" },
      { label: "Médicos", href: "/empresas/medicos" },
      { label: "Casinos", href: "/empresas/casinos" },
      { label: "Cripto", href: "/empresas/cripto" },
      { label: "Eventos & Conciertos", href: "/empresas/eventos" },
      { label: "Membresías", href: "/empresas/membresias" },
      { label: "Call center", href: "/empresas/call-center" },
      { label: "Farmacias", href: "/empresas/farmacias" },
      { label: "Tiendas", href: "/empresas/tiendas" },
      { label: "Ferreterías", href: "/empresas/ferreterias" },
      { label: "Hoteles", href: "/empresas/hoteles" },
      { label: "Agencias de viajes", href: "/empresas/agencias-de-viajes" },
    ],
  },
  {
    label: "Servicios",
    subtitle: "Soluciones integrales",
    children: [
      { label: "Todos los servicios", href: "/servicios" },
      { label: "Plataforma de pagos", href: "/servicios/plataforma-de-pagos" },
      { label: "Terminales punto de venta", href: "/servicios/terminales-punto-de-venta" },
      { label: "Tarjetas empresariales", href: "/servicios/tarjetas" },
      { label: "Nómina y dispersión", href: "/servicios/nomina-y-dispersion" },
      { label: "Pagos internacionales", href: "/servicios/pagos-internacionales" },
      { label: "Consultoría empresarial", href: "/servicios/consultoria-empresarial" },
      { label: "Sistemas y tecnología", href: "/servicios/sistemas" },
      { label: "Caja & comanda (InfoCaja)", href: "/caja" },
    ],
  },
  { label: "Personas", href: "/personas" },
  { label: "Aliados", href: "/aliados" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const HERO_STATS = [
  { value: "24/7/365", label: "Operación continua" },
  { value: "5 min", label: "Onboarding" },
  { value: "Nacional e internacional", label: "Cobertura" },
];

export const RESTAURANTES = {
  overline: "Restaurantes y bares",
  title: "Simplifica la gestión financiera de tu negocio",
  description:
    "Con Enlace Fintech como tu broker fintech, la operación de tu restaurante o bar se simplifica para que te concentres en lo que realmente importa: hacer crecer tu empresa. En el mundo de la hostelería y el comercio, la gestión financiera es clave.",
  bullets: [
    "Gestiona todos los fondos de tu empresa y de tu personal desde un solo lugar.",
    "Acepta más tarjetas de crédito y débito.",
    "Aumenta la lealtad de tus colaboradores con múltiples servicios añadidos.",
  ],
  image:
    "https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcGF5bWVudCUyMHRlcm1pbmFsfGVufDB8fHx8MTc4ODU4MjE5NHww&ixlib=rb-4.1.0&q=85",
};

export const WALLET = {
  overline: "Plataforma de pagos",
  title: "Mueve, cobra y administra el dinero de tu empresa desde una sola plataforma",
  description:
    "La Plataforma de pagos de Enlace Fintech concentra cuentas, transferencias, cobros y tarjetas de tu negocio en un solo lugar, con visibilidad en tiempo real y control por usuario.",
  features: [
    { icon: "ArrowLeftRight", title: "Transferencias FlexPei", desc: "Envía y recibe fondos al instante dentro del ecosistema fintech." },
    { icon: "Landmark", title: "Transferencias SPEI", desc: "Dispersa y recibe pagos interbancarios en segundos, 24/7." },
    { icon: "Store", title: "Pagos en tiendas de autoservicio", desc: "Deposita y paga en miles de puntos a nivel nacional." },
    { icon: "CreditCard", title: "Terminales punto de venta y Links de Pago", desc: "Cobra presencial o a distancia con TPV y links de pago." },
    { icon: "WalletCards", title: "Tarjetas empresariales", desc: "Tarjetas nominativas físicas y virtuales para tu equipo, con límites y control de gastos." },
    { icon: "Globe", title: "Pagos internacionales", desc: "Mueve capital más allá de las fronteras con seguridad y trazabilidad." },
  ],
};

export const PERSONA = {
  overline: "Personas · Tarjeta nominativa y pagos",
  title: "Tu tarjeta y tus pagos, sin filas ni banco tradicional",
  description:
    "Con Enlace Fintech, como persona física tienes una tarjeta nominativa a tu nombre y una cuenta para recibir tu nómina, pagar servicios y mover tu dinero con SPEI 24/7 a través de FlexPei. Sin anualidad, sin trámites en sucursal y con control total desde tu celular.",
  points: [
    "Tarjeta nominativa física y virtual, sin anualidad.",
    "Recibe tu nómina y transferencias SPEI 24/7 con FlexPei.",
    "Paga servicios, suscripciones y compras en línea.",
    "Retira en cajeros y deposita en tiendas de autoservicio.",
    "Chip, banda magnética y contactless con aceptación nacional e internacional.",
    "Accede a beneficios: seguros, gimnasios, asistencias y descuentos.",
  ],
};

export const CASINOS = {
  overline: "Casinos",
  title: "Lleva tu experiencia de juego a otro nivel",
  description:
    "En Enlace Fintech potenciamos tu casino con medios de pago y soluciones personalizadas. Garantizamos seguridad y transparencia mediante contratos de origen de recursos, protegiendo contra actividades inusuales con alertas automáticas.",
  bullets: [
    "Ofrece a tus clientes tarjetas nominativas y planes de lealtad sin efectivo.",
    "Amplía tu alcance al aceptar más tarjetas de crédito y débito.",
    "Coordina los fondos de toda tu actividad comercial desde un solo lugar.",
    "Redención y bonificación de premios 24/7/365, apertura de cuenta para persona física y onboarding en 5 minutos.",
  ],
  image:
    "https://images.pexels.com/photos/7594128/pexels-photo-7594128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const BLOG = {
  overline: "Blog",
  title: "Todo sobre el mundo empresarial y financiero en un solo lugar",
  posts: [
    {
      slug: "terminal-punto-de-venta-sin-banco",
      category: "Terminales",
      title: "Terminal punto de venta sin banco: cómo funciona y qué necesitas en 2026",
      date: "3 junio, 2026",
      readTime: "6 min",
      image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/921cd02d61f74010f9808d4bd8f633a0b1e0712cef43cbc0336c8a8e2f022ebc.jpeg",
      excerpt: "Cada vez más negocios en México cobran con terminal sin abrir una cuenta en un banco tradicional. Te explicamos cómo funciona el modelo, qué es un contrato de administración de tesorería y qué requisitos reales necesitas.",
      sections: [
        { h: "¿Por qué tantos negocios ya no piden su terminal al banco?", p: ["Obtener una terminal bancaria en México sigue implicando antigüedad de cuenta, estados de cuenta, montos mínimos de facturación y semanas de espera. Para un restaurante, una farmacia o un consultorio que necesita cobrar hoy, ese proceso es un freno.", "Desde la Ley Fintech y la figura de los agregadores de pago, existen alternativas que permiten a cualquier negocio aceptar tarjetas sin depender de un banco tradicional, con requisitos mucho más simples y activación en días."] },
        { h: "Cómo funciona el modelo de Enlace Fintech", p: ["Tu negocio recibe una o varias terminales y cobra con ellas todas las marcas de tarjetas. Los cobros se concentran en una empresa aliada del grupo y se te liquidan en las fechas de corte que tú eliges, a la cuenta que definas.", "La relación se formaliza con un contrato de administración de tesorería, que da certeza jurídica a ambas partes: define comisiones, fechas de corte, forma de liquidación y responsabilidades."], bullets: ["Sin mínimos de operación mensual", "Reportes de cada cobro en tiempo real", "Terminales adicionales según crezca tu negocio", "Fechas de corte personalizadas"] },
        { h: "Requisitos reales para empezar", p: ["A diferencia del banco, no necesitas antigüedad ni historial. Lo básico es:"], bullets: ["Identificación oficial del representante y acta constitutiva (o RFC si eres persona física con actividad empresarial)", "Comprobante de domicilio del negocio", "Cuenta bancaria o cuenta FlexPei donde recibir tus liquidaciones", "WiFi o plan de datos en una tablet o smartphone para conectar la terminal vía Bluetooth"] },
        { h: "¿Qué comisión es razonable?", p: ["En México, las comisiones por cobro con tarjeta suelen ubicarse entre 2.5% y 3.6% más IVA dependiendo del giro, el volumen y el tipo de tarjeta. Lo importante no es solo el porcentaje: revisa si hay renta mensual, costo por terminal, penalizaciones por bajo volumen o plazos de liquidación largos.", "En Enlace Fintech negociamos estas condiciones con nuestros aliados según tu sector y volumen, y te las presentamos en una sola propuesta transparente."] },
        { h: "En 3 pasos tienes tu terminal", p: ["Aceptas condiciones y firmas el contrato de administración de tesorería; eliges tus fechas de corte y forma de liquidación; recibes tu KIT TPV en 48 horas, lo configuras y empiezas a cobrar."] },
      ],
      cta: { text: "Quiero mi terminal sin trámites bancarios", href: "/servicios/terminales-punto-de-venta" },
    },
    {
      slug: "repse-2026-que-cambia",
      category: "Capital humano",
      title: "REPSE 2026: qué cambia para tu empresa y cómo cumplir sin riesgos",
      date: "20 mayo, 2026",
      readTime: "7 min",
      image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/fb301f7f8a4e3e9f6ea47e2ecc962ed91c4363919704d77f6457f3106da6cdc2.jpeg",
      excerpt: "Desde la reforma de 2021, subcontratar personal solo es legal bajo el esquema de servicios especializados registrados en el REPSE. Te explicamos qué debes revisar en 2026, las renovaciones y los reportes que no puedes olvidar.",
      sections: [
        { h: "Qué es el REPSE y por qué te afecta", p: ["El Registro de Prestadoras de Servicios Especializados u Obras Especializadas (REPSE) es el padrón de la Secretaría del Trabajo y Previsión Social (STPS) en el que deben inscribirse las empresas que ponen personal a disposición de otra para servicios que no forman parte de su objeto social ni de su actividad económica preponderante.", "Si contratas limpieza, seguridad, mantenimiento, sistemas o cualquier servicio con personal externo dentro de tu empresa, tu proveedor debe estar en el REPSE. Si no lo está, tú pierdes la deducción del gasto y el acreditamiento del IVA, además de asumir responsabilidad solidaria."] },
        { h: "Lo que debes revisar en 2026", bullets: ["Vigencia del registro: el REPSE se renueva cada tres años; muchas empresas registradas en 2023 renuevan este año", "Que la actividad registrada coincida exactamente con el servicio que te facturan", "Informes cuatrimestrales ICSOE (IMSS) y SISUB (Infonavit) presentados por tu proveedor", "Copia de CFDI de nómina, pagos de cuotas IMSS e Infonavit y declaraciones de ISR e IVA del personal asignado", "Contrato de prestación de servicios especializados con objeto y número aproximado de trabajadores"] },
        { h: "Errores frecuentes que detectamos en auditorías", p: ["Los más comunes: proveedores con REPSE vencido, servicios que en realidad son parte del objeto social del cliente (lo que se considera subcontratación prohibida), facturas sin los datos del registro, y ausencia de expediente de cumplimiento por cada proveedor."] },
        { h: "Cómo te ayuda Enlace Fintech", p: ["Nuestro equipo de consultoría en capital humano audita a tus proveedores, arma el expediente de cumplimiento, gestiona tu propio registro REPSE si prestas servicios especializados y administra la nómina y las altas y bajas ante el IMSS de tu personal."] },
      ],
      cta: { text: "Solicita una auditoría REPSE", href: "/servicios/consultoria-empresarial" },
    },
    {
      slug: "cobrar-en-cripto-en-mexico",
      category: "Cripto",
      title: "Cómo cobrar en cripto en México y recibir pesos en tu banco",
      date: "8 mayo, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHBheW1lbnQlMjBkaWdpdGFsJTIwZmluYW5jZXxlbnwwfHx8fDE3ODg1ODQ1Nzh8MA&ixlib=rb-4.1.0&q=85",
      excerpt: "Aceptar USDT, BTC o ETH en tu e-commerce no significa quedarte con cripto. Con una pasarela con liquidación en fiat recibes pesos en tu cuenta. Te contamos el marco legal, fiscal y operativo en México.",
      sections: [
        { h: "¿Es legal aceptar cripto en México?", p: ["Sí. Las criptomonedas no son moneda de curso legal, pero nada impide que una empresa acepte activos virtuales como medio de pago en una operación privada. La Ley Fintech (2018) regula a las plataformas que operan con ellos y Banxico limita su uso dentro del sistema financiero, pero el comercio entre particulares es libre.", "Lo que sí debes cuidar es el cumplimiento en prevención de lavado de dinero: el intercambio de activos virtuales es una actividad vulnerable bajo la LFPIORPI, por eso conviene operar con una pasarela que ya cumpla KYC/AML por ti."] },
        { h: "Cómo funciona la liquidación en pesos", bullets: ["Tu sistema genera una orden de cobro con monto en MXN o USD", "El cliente paga con USDT, BTC o ETH desde cualquier wallet", "La pasarela detecta el pago en la blockchain en segundos", "Se convierte a pesos al tipo de cambio del momento y se deposita en tu cuenta en 24–48 horas"], p: ["Tú nunca custodias cripto ni asumes el riesgo de volatilidad: cobras en tu moneda y recibes pesos."] },
        { h: "Aspectos fiscales que debes considerar", p: ["Para efectos fiscales, la venta de un bien o servicio pagado con cripto se factura igual que cualquier venta: emites CFDI por el importe en pesos. Si conservas activos virtuales y los vendes después, la utilidad se considera ingreso acumulable. Recomendamos siempre revisar con tu contador el tratamiento específico de tu régimen."] },
        { h: "¿Para quién tiene sentido?", bullets: ["E-commerce con clientes en Estados Unidos, Latinoamérica o Europa", "Freelancers y agencias que cobran a clientes extranjeros", "Empresas que pagan a proveedores fuera de México y quieren evitar comisiones de SWIFT", "Negocios que quieren diferenciarse ofreciendo más medios de pago"] },
        { h: "Con quién lo hacemos", p: ["En Enlace Fintech integramos FluxiPay para cobros cripto con liquidación en fiat y FlexPei para intercambio de activos digitales, cuentas en USD y pagos internacionales, con cumplimiento regulatorio en cada paso."] },
      ],
      cta: { text: "Quiero aceptar cripto en mi negocio", href: "/empresas/cripto" },
    },
    {
      slug: "tarjetas-nominativas-colaboradores",
      category: "Tarjetas",
      title: "Tarjetas nominativas para colaboradores: controla gastos sin exponer tu cuenta",
      date: "22 abril, 2026",
      readTime: "5 min",
      image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/48964a43321b6c2a1dd2487b81b0b27453e33a0aff43c84c549044ff0db8997e.jpeg",
      excerpt: "Prestar la tarjeta del dueño, repartir efectivo para viáticos o pedir reembolsos con tickets arrugados cuesta tiempo y dinero. Así resuelven las empresas modernas los gastos de su equipo.",
      sections: [
        { h: "El problema del efectivo y la tarjeta compartida", p: ["En muchas pymes mexicanas los gastos operativos se manejan con efectivo o con la tarjeta personal del dueño. El resultado: falta de comprobantes, gastos no deducibles, riesgo de fraude y horas de conciliación cada cierre de mes."] },
        { h: "Qué es una tarjeta nominativa empresarial", p: ["Es una tarjeta a nombre de cada colaborador, ligada a la cuenta de la empresa pero con saldo y límites propios. El colaborador paga gasolina, viáticos, compras de campo o herramientas, y tú ves cada movimiento al instante."], bullets: ["Límites por tarjeta, por día o por categoría de comercio", "Bloqueo y reposición desde la app en segundos", "Foto del ticket adjunta a cada cargo", "Reportes por área o centro de costo listos para contabilidad"] },
        { h: "Física o virtual: cuál conviene", p: ["Las virtuales se emiten al momento y son ideales para suscripciones, publicidad digital y compras en línea de cada área. Las físicas sirven para el equipo en campo: choferes, vendedores, técnicos. La mayoría de las empresas combina ambas."] },
        { h: "Beneficios fiscales y de control", p: ["Todo gasto pagado con tarjeta queda con trazabilidad bancaria, lo que facilita su deducción y elimina el manejo de efectivo. Además, al no exponer la cuenta principal, reduces el riesgo de fraude y clonación."] },
      ],
      cta: { text: "Quiero tarjetas para mi equipo", href: "/servicios/tarjetas" },
    },
    {
      slug: "spei-24-7-para-empresas",
      category: "Pagos",
      title: "SPEI 24/7 para empresas: dispersa nómina y paga proveedores en segundos",
      date: "9 abril, 2026",
      readTime: "5 min",
      image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/666a60391eea9a32868e5111c68cdc10de55abc74affd04b4d703f551d71a0f4.jpeg",
      excerpt: "Pagar la nómina el viernes por la noche o a un proveedor en domingo ya no depende del horario del banco. Así aprovechan las empresas la Plataforma de pagos con SPEI 24/7.",
      sections: [
        { h: "Qué cambió con SPEI 24/7", p: ["Desde que Banxico habilitó la operación continua del SPEI, las transferencias interbancarias se liquidan en segundos cualquier día y hora. Sin embargo, muchas bancas empresariales siguen limitando horarios, montos o número de operaciones por lote."] },
        { h: "Dispersión de nómina sin capturar cuenta por cuenta", bullets: ["Carga un layout desde Excel o tu sistema de nómina", "Aprobaciones por niveles antes de dispersar", "Pago a cualquier banco o a la tarjeta de nómina Enlace", "Comprobante automático para cada colaborador"] },
        { h: "Pagos a proveedores con control", p: ["Programa pagos, define quién autoriza y concilia automáticamente contra tus facturas. Con la Plataforma de pagos de Enlace Fintech, operada con FlexPei, tienes SPEI 24/7, pagos internacionales y tarjetas en un mismo lugar."] },
        { h: "Seguridad", p: ["Autenticación de dos factores, límites por usuario, alertas de movimientos inusuales y cumplimiento KYC/AML por parte del aliado regulado que opera las cuentas."] },
      ],
      cta: { text: "Conoce la Plataforma de pagos", href: "/servicios/plataforma-de-pagos" },
    },
    {
      slug: "como-elegir-cuenta-fintech-empresa",
      category: "Plataforma de pagos",
      title: "Cómo elegir la mejor cuenta fintech para tu empresa en México",
      date: "18 marzo, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwbW9kZXJufGVufDB8fHx8MTc4ODU4MjIxM3ww&ixlib=rb-4.1.0&q=85",
      excerpt: "Comisiones, límites, integraciones, tarjetas y soporte: la lista de cosas a revisar antes de mover la operación de tu empresa a una cuenta fintech, y las preguntas que debes hacer a cualquier proveedor.",
      sections: [
        { h: "Empieza por tus necesidades reales", bullets: ["¿Cuántas transferencias haces al mes y de qué montos?", "¿Pagas a proveedores en el extranjero?", "¿Necesitas tarjetas para tu equipo?", "¿Cobras con terminal, link de pago o en línea?", "¿Tu contador necesita integración con tu sistema contable?"] },
        { h: "Qué revisar en el proveedor", p: ["Que la entidad que custodia los fondos esté regulada (IFPE, banco o SOFIPO) y que tu proveedor lo diga con claridad. Revisa comisiones por transferencia, límites diarios, tiempos de liquidación, costo de tarjetas y si hay renta mensual."] },
        { h: "Señales de alerta", bullets: ["No te dicen quién custodia el dinero", "Comisiones 'a consultar' que nunca llegan por escrito", "Sin soporte humano ni ejecutivo asignado", "Promesas de rendimientos garantizados"] },
        { h: "El valor de un broker", p: ["En Enlace Fintech comparamos las opciones del mercado según tu sector y volumen, negociamos condiciones y te acompañamos en el alta. Tú tienes un solo interlocutor para cuentas, terminales, tarjetas y pagos internacionales."] },
      ],
      cta: { text: "Agenda un diagnóstico gratuito", href: "/contacto" },
    },
  ],
};

export const EMPRESAS = {
  overline: "Empresas",
  title: "Soluciones a la medida de tu sector",
  description:
    "Diseñamos estrategias financieras para pymes y grandes empresas de múltiples industrias. Estos son algunos de los sectores que impulsamos con Enlace Fintech.",
  image:
    "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwb2ZmaWNlfGVufDB8fHx8MTc4ODU4MzIxMnww&ixlib=rb-4.1.0&q=85",
  sectors: [
    { icon: "UtensilsCrossed", name: "Restaurantes y bares", href: "/empresas/restaurantes-y-bares" },
    { icon: "Stethoscope", name: "Médicos", href: "/empresas/medicos" },
    { icon: "Dice5", name: "Casinos", href: "/empresas/casinos" },
    { icon: "Bitcoin", name: "Cripto", href: "/empresas/cripto" },
    { icon: "Ticket", name: "Eventos & Conciertos", href: "/empresas/eventos" },
    { icon: "BadgeCheck", name: "Membresías", href: "/empresas/membresias" },
    { icon: "Headset", name: "Call center", href: "/empresas/call-center" },
    { icon: "Pill", name: "Farmacias", href: "/empresas/farmacias" },
    { icon: "ShoppingBag", name: "Tiendas", href: "/empresas/tiendas" },
    { icon: "Hammer", name: "Ferreterías", href: "/empresas/ferreterias" },
    { icon: "Hotel", name: "Hoteles", href: "/empresas/hoteles" },
    { icon: "Plane", name: "Agencias de viajes", href: "/empresas/agencias-de-viajes" },
  ],
};

export const BENEFICIOS = {
  overline: "Beneficios",
  title: "Todo el control de tu dinero, en una sola app",
  description:
    "La Plataforma de pagos pone a tu alcance herramientas inteligentes para operar con eficiencia y tomar mejores decisiones.",
  items: [
    { icon: "LineChart", title: "Visualiza tus ingresos al instante", desc: "Mantente al día con tus ganancias en tiempo real y toma decisiones informadas sobre la marcha." },
    { icon: "Banknote", title: "Retira efectivo fácilmente", desc: "Accede a tus fondos de forma rápida y segura, sin complicaciones." },
    { icon: "Receipt", title: "Realiza pagos de servicios", desc: "Simplifica el pago de tus facturas y servicios directamente desde nuestra app." },
    { icon: "Smartphone", title: "Administra tu TPV eficientemente", desc: "Controla tu terminal punto de venta desde la plataforma, mejorando la eficiencia y precisión en cada transacción." },
    { icon: "Sparkles", title: "Herramientas inteligentes de gestión", desc: "Optimiza el uso de tus recursos con múltiples herramientas diseñadas para maximizar la eficiencia." },
  ],
};

export const MASMESA = {
  overline: "Más mesa",
  title: "Gestión eficiente de reservaciones",
  description:
    "Acepta reservaciones de manera virtual y facilita a tus clientes reservar mesas en línea, priorizando su comodidad y mejorando la gestión del flujo de personas.",
  partner: { name: "Más Mesa", url: "https://masmesa.com.mx" },
  image:
    "https://images.unsplash.com/photo-1728044849280-10a1a75cff83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcmVzZXJ2YXRpb24lMjBob3N0JTIwdGFibGV0fGVufDB8fHx8MTc4ODU4MzIxMnww&ixlib=rb-4.1.0&q=85",
  points: [
    { title: "Reservaciones en línea", desc: "Facilita a tus clientes reservar mesas de forma virtual, priorizando su comodidad." },
    { title: "Feedback en tiempo real", desc: "Valora la satisfacción de tus clientes para ajustar y mejorar continuamente tu servicio." },
    { title: "Organiza tiempos y recursos", desc: "Garantiza una circulación fluida de clientes y optimiza el uso de mesas y personal." },
    { title: "Asegura la circulación de ingresos", desc: "Mantén un flujo constante de ingresos para la sostenibilidad y el crecimiento de tu negocio." },
  ],
};

export const CAJA = {
  overline: "Caja",
  title: "Una solución integral",
  description:
    "Digitaliza tu punto de venta y automatiza la operación diaria de tu negocio con una caja pensada para la hostelería y el comercio, de la mano de nuestro aliado InfoCaja.",
  partner: { name: "InfoCaja", url: "https://infocaja.mx/" },
  image:
    "https://images.unsplash.com/photo-1778795317873-10b4d6973e05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9pbnQlMjBvZiUyMHNhbGUlMjBjYXNoaWVyJTIwdGVybWluYWx8ZW58MHx8fHwxNzg4NTgzMjEyfDA&ixlib=rb-4.1.0&q=85",
  features: [
    { icon: "ClipboardList", title: "Acceso a comanda en TPV", bullets: ["Toma pedidos rápidamente, incrementando la rapidez del servicio y la satisfacción del cliente.", "Atiende a más clientes en menor tiempo, aumentando tus ventas y la rotación de mesas."] },
    { icon: "Boxes", title: "Módulo de inventario", bullets: ["Supervisa la entrada y salida de tu inventario, evitando pérdidas y desabastecimientos.", "Minimiza los procedimientos de registro automatizando el proceso para ahorrar tiempo."] },
    { icon: "Workflow", title: "Automatización de procesos", bullets: ["Reduce tiempos, recursos y energía al automatizar tareas repetitivas.", "Adapta tu negocio de manera eficiente a las demandas del mercado."] },
    { icon: "QrCode", title: "Facturas QR", bullets: ["Disminuye los errores de facturación asegurando que cada transacción sea precisa.", "Mejora la experiencia del cliente con una forma rápida y sencilla de recibir sus facturas."] },
  ],
};

export const MEDICOS = {
  overline: "Sectores · Médicos",
  title: "Expande tu consultorio con soluciones financieras inteligentes",
  subtitle: "Aumenta tus pacientes y optimiza la gestión de tu consultorio",
  description:
    "Con soluciones financieras diseñadas específicamente para médicos, llegas a más pacientes y administras mejor tu práctica.",
  image:
    "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwb2ZmaWNlJTIwcGF5bWVudCUyMGNhcmR8ZW58MHx8fHwxNzg4NTg0NTc4fDA&ixlib=rb-4.1.0&q=85",
  tpv: [
    "Recibe pagos con todas las tarjetas de chip y banda.",
    "Recibe tus ventas en tu cuenta FlexPei con SPEI 24/7.",
    "Cuando pagan con tarjeta, tú tienes el pago garantizado.",
  ],
  features: [
    { icon: "MapPin", title: "Cobra desde cualquier lugar", desc: "Acepta efectivo, transferencias, tarjetas de crédito o débito, sin importar dónde estén tus pacientes." },
    { icon: "TrendingUp", title: "Incrementa tu alcance", desc: "Amplía tu base de pacientes y atiende a más personas desde tu consultorio." },
    { icon: "ShieldCheck", title: "Control total de tus finanzas", desc: "Gestiona tus recursos con eficiencia y transparencia." },
    { icon: "QrCode", title: "Pagos con código QR", desc: "Consolida cada transacción mediante procesos 100% digitales." },
  ],
};

export const CRIPTO = {
  overline: "Sectores · Cripto",
  title: "Más que un crypto exchange",
  description:
    "Acepta pagos en criptomonedas en tu e-commerce y recibe el dinero en pesos directamente en tu cuenta bancaria. Junto a nuestros aliados FlexPei y FluxiPay ofrecemos intercambio de activos digitales y cobros cripto con liquidación en fiat, de forma rápida y segura.",
  image:
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHBheW1lbnQlMjBkaWdpdGFsJTIwZmluYW5jZXxlbnwwfHx8fDE3ODg1ODQ1Nzh8MA&ixlib=rb-4.1.0&q=85",
  partners: [
    {
      name: "FlexPei",
      url: "https://flexpei.com",
      tag: "Exchange & activos digitales",
      desc: "Gestiona todos tus pagos empresariales desde una sola plataforma: intercambio de activos digitales, transferencias SPEI 24/7 y pagos internacionales.",
      bullets: [
        "Intercambio de activos digitales",
        "Transferencias SPEI instantáneas 24/7",
        "Pagos internacionales Wire y SWIFT",
        "Tarjetas corporativas y cumplimiento KYC/AML",
      ],
    },
    {
      name: "FluxiPay",
      url: "https://fluxipay.com",
      tag: "Cobros cripto para e-commerce",
      desc: "Pasarela para aceptar USDT, BTC y ETH en tu e-commerce y recibir el pago en tu moneda local, con liquidación a tu banco.",
      bullets: [
        "Acepta USDT, BTC y ETH en tu tienda en línea",
        "Liquidación en fiat (MXN, USD, EUR) a tu banco",
        "Wallets temporales por pago y detección on-chain",
        "Auto-forwarding sin custodia + webhooks y API",
      ],
    },
  ],
  flowReceive: {
    title: "Recibe cripto",
    steps: [
      { title: "Crea la orden", desc: "Tu sistema llama a la API con el monto y la moneda; se genera una wallet temporal única." },
      { title: "El cliente envía cripto", desc: "Se muestra un QR + dirección y el cliente paga con USDT, BTC o ETH desde cualquier wallet." },
      { title: "Detección automática", desc: "Monitoreo de la blockchain 24/7; el pago se detecta en segundos y se verifica el monto." },
      { title: "Reenvío instantáneo", desc: "Los fondos se envían a tu wallet concentradora y recibes un webhook de confirmación." },
    ],
  },
  flowSettle: {
    title: "Liquida a fiat",
    steps: [
      { title: "Validación KYC y país", desc: "Verificamos identidad y país del receptor con cumplimiento regulatorio automatizado." },
      { title: "Registra tu cuenta bancaria", desc: "Das de alta tu cuenta y la validamos con verificación en tiempo real." },
      { title: "Conversión cripto → fiat", desc: "Convertimos USDT, BTC o ETH a tu moneda local con tipos de cambio competitivos." },
      { title: "Depósito en tu banco", desc: "Transferimos el importe a tu cuenta (instantáneo o 24-48 h según país y plan)." },
    ],
  },
  why: [
    { title: "Altos límites transaccionales", desc: "Maneja grandes volúmenes de transacciones con total libertad." },
    { title: "Conversión en tiempo real", desc: "Realiza conversiones al instante, disponible las 24 horas del día." },
    { title: "Confianza y seguridad", desc: "Sin custodia de fondos ni riesgo de contraparte; monitoreo continuo." },
    { title: "Soporte 24/7", desc: "Nuestro equipo experto está listo para asistirte en todo momento." },
  ],
};

export const MEMBRESIAS = {
  overline: "Sectores · Membresías",
  title: "Integrando bienestar, potenciando tu empresa",
  description:
    "Mejoramos la calidad de vida de las personas y potenciamos el crecimiento de las empresas con una amplia gama de servicios integrados en una sola app.",
  image:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHdlbGxuZXNzJTIwYmVuZWZpdHMlMjBtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzg4NTg0NTc4fDA&ixlib=rb-4.1.0&q=85",
  offers: [
    { icon: "ShieldCheck", title: "Seguros", desc: "Protege lo que más importa con seguros personalizados." },
    { icon: "Stethoscope", title: "Asistencias médicas", desc: "Accede a una red de profesionales de la salud para ti y tu familia." },
    { icon: "Tags", title: "Redes de descuentos", desc: "Ahorra en tus compras con ofertas y descuentos exclusivos." },
    { icon: "Dumbbell", title: "Gimnasios", desc: "Mantente en forma con acceso a los mejores gimnasios." },
    { icon: "Home", title: "Asistencias mascota, hogar y vial", desc: "Tranquilidad total para tu mascota, hogar y en carretera." },
    { icon: "WalletCards", title: "Tarjeta nominativa de beneficios", desc: "Una tarjeta para recibir nómina, beneficios y descuentos, con aceptación nacional." },
    { icon: "PiggyBank", title: "Caja y fondo de ahorro", desc: "Facilita el ahorro y la gestión financiera de tus empleados." },
  ],
  aliados: [
    { name: "MAPFRE", cat: "Seguros" },
    { name: "CHUBB", cat: "Seguros" },
    { name: "SURA", cat: "Seguros" },
    { name: "AsisMed", cat: "Asistencias médicas" },
    { name: "Hermes Assist", cat: "Asistencias vial y hogar" },
    { name: "TotalPass", cat: "Gimnasios" },
    { name: "Smart Fit", cat: "Gimnasios" },
    { name: "Gayosso", cat: "Servicios funerarios" },
  ],
};

export const ALIADOS = {
  overline: "Aliados",
  title: "El broker fintech con los mejores aliados estratégicos",
  description:
    "Trabajamos con un ecosistema de aliados para empresarios y personas físicas que buscan una gestión financiera moderna y eficiente. Nuestra experiencia nos permite ofrecer orientación personalizada y herramientas adaptadas a cada cliente.",
  categories: [
    "Banca & plataforma de pagos",
    "Tarjetas nominativas",
    "Terminales de pago",
    "Beneficios & bienestar",
    "Pagos cripto",
    "Facturación",
    "Nómina y dispersión",
    "Seguros",
  ],
};

export const EVENTOS = {
  overline: "Sectores · Eventos & Conciertos",
  title: "Impulsa tus eventos y conciertos con pagos sin fricción",
  description:
    "Optimiza la operación de tus eventos con soluciones de cobro ágiles, seguras y sin efectivo. Vende más, agiliza filas y controla cada peso en tiempo real.",
  partners: [
    {
      name: "Mastiket",
      url: "https://mastiket.com",
      tag: "Boletera",
      desc: "Venta y gestión de boletos y accesos para tus eventos y conciertos, con control de aforo y validación en puerta.",
    },
    {
      name: "Masaldo",
      url: "https://masaldo.com",
      tag: "Recargas de saldo RFID",
      desc: "Sistema cashless RFID: recarga saldo en brazaletes o monederos digitales para pagos sin efectivo dentro del recinto.",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBzdGFnZSUyMGxpZ2h0cyUyMGV2ZW50fGVufDB8fHx8MTc4ODg0NDgzNnww&ixlib=rb-4.1.0&q=85",
  features: [
    { icon: "Ticket", title: "Venta de boletos y accesos", desc: "Cobra entradas en línea y en taquilla con links de pago y terminales." },
    { icon: "Wallet", title: "Recarga cashless", desc: "Brazaletes y monederos digitales para pagos sin efectivo dentro del recinto." },
    { icon: "CreditCard", title: "TPV para barras y stands", desc: "Acelera las filas aceptando tarjetas, contactless y QR en cada punto de venta." },
    { icon: "LineChart", title: "Control en tiempo real", desc: "Visualiza ventas por punto, artículo y horario durante todo el evento." },
    { icon: "Users", title: "Gestión de proveedores", desc: "Dispersa pagos a personal y proveedores de forma rápida y trazable." },
    { icon: "ShieldCheck", title: "Seguridad y trazabilidad", desc: "Protege cada transacción con alertas automáticas y conciliación al instante." },
  ],
};

export const GENERIC_SECTORS = {
  "call-center": {
    icon: "Headset",
    overline: "Sectores · Call center",
    title: "Cobros y dispersión para tu call center",
    description:
      "Gestiona pagos telefónicos, links de pago y dispersión de comisiones a tus agentes desde una sola plataforma, con control total en tiempo real.",
    image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwaGVhZHNldCUyMGFnZW50c3xlbnwwfHx8fDE3ODg4NDU4MjR8MA&ixlib=rb-4.1.0&q=85",
    partners: [
      {
        name: "Callmarket",
        url: "https://callmarket.cc",
        tag: "Procesadores de pago & sistemas de call center",
        desc: "Aliado en sistemas de call center e integración con procesadores de pago para tus operaciones de cobro telefónico.",
      },
    ],
    features: [
      { icon: "Link", title: "Links de pago", desc: "Cierra ventas por teléfono enviando un link de cobro seguro al instante." },
      { icon: "Users", title: "Dispersión a agentes", desc: "Paga comisiones y nómina de forma rápida y trazable." },
      { icon: "LineChart", title: "Control en tiempo real", desc: "Monitorea cobros y conversiones por campaña y agente." },
      { icon: "ShieldCheck", title: "Seguridad antifraude", desc: "Alertas automáticas y protección en cada transacción." },
    ],
  },
  farmacias: {
    icon: "Pill",
    overline: "Sectores · Farmacias",
    title: "Soluciones de pago para farmacias",
    description:
      "Agiliza el mostrador con terminales, pagos contactless y control de inventario, mejorando la experiencia de tus clientes.",
    image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/90162db7c4608eeef7e21df13168f2962965d0e0dd9059bfb2c05f0fb1093cc8.jpeg",
    partners: undefined,
    features: [
      { icon: "CreditCard", title: "Terminales punto de venta", desc: "Acepta tarjetas de crédito, débito, contactless y QR." },
      { icon: "Boxes", title: "Módulo de inventario", desc: "Controla entradas y salidas para evitar desabastos." },
      { icon: "QrCode", title: "Facturas QR", desc: "Facturación rápida y sin errores para tus clientes." },
      { icon: "LineChart", title: "Reportes de ventas", desc: "Visualiza tus ingresos por sucursal en tiempo real." },
    ],
  },
  tiendas: {
    icon: "ShoppingBag",
    overline: "Sectores · Tiendas",
    title: "Impulsa las ventas de tu tienda",
    description:
      "Cobra como quieras: presencial, a distancia o en línea. Acelera filas y fideliza a tus clientes con múltiples formas de pago.",
    image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGNoZWNrb3V0JTIwY291bnRlcnxlbnwwfHx8fDE3ODg4NDU4MjR8MA&ixlib=rb-4.1.0&q=85",
    features: [
      { icon: "CreditCard", title: "TPV y contactless", desc: "Acepta todas las tarjetas de chip, banda y sin contacto." },
      { icon: "WalletCards", title: "Tarjetas nominativas", desc: "Tarjetas para tu equipo con límites y control de gastos." },
      { icon: "Link", title: "Links de pago", desc: "Cobra a distancia por WhatsApp o redes sociales." },
      { icon: "Boxes", title: "Inventario y caja", desc: "Administra productos, ventas y arqueo desde la app." },
    ],
  },
  ferreterias: {
    icon: "Hammer",
    overline: "Sectores · Ferreterías",
    title: "Pagos y control para ferreterías",
    description:
      "Cobra con terminal, paga a proveedores con FlexPei y controla los gastos de tu equipo con tarjetas nominativas, todo desde una sola plataforma.",
    image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/d4ebd5bf68f564aab15cd3ac2150c3ab49fcf7c63a53a3f5448928d78f207923.jpeg",
    features: [
      { icon: "CreditCard", title: "Terminales punto de venta", desc: "Cobra con tarjeta y garantiza tu pago." },
      { icon: "Landmark", title: "Pagos con FlexPei", desc: "SPEI 24/7 y pagos a proveedores desde una sola plataforma." },
      { icon: "Boxes", title: "Control de inventario", desc: "Supervisa existencias y evita pérdidas." },
      { icon: "Wallet", title: "Plataforma de pagos", desc: "Administra todos los fondos de tu negocio en un lugar." },
    ],
  },
  hoteles: {
    icon: "Hotel",
    overline: "Sectores · Hoteles",
    title: "Soluciones financieras para hoteles",
    description:
      "Cobra reservaciones, consumos y servicios con múltiples métodos de pago, y administra los ingresos de todo tu hotel en tiempo real.",
    image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGxvYmJ5JTIwbW9kZXJufGVufDB8fHx8MTc4ODg0NTgyNHww&ixlib=rb-4.1.0&q=85",
    features: [
      { icon: "Link", title: "Cobro de reservaciones", desc: "Recibe anticipos y pagos en línea con links seguros." },
      { icon: "CreditCard", title: "TPV en recepción y consumo", desc: "Cobra habitaciones, restaurante y servicios en un solo sistema." },
      { icon: "Globe", title: "Pagos internacionales", desc: "Acepta a huéspedes nacionales y extranjeros." },
      { icon: "LineChart", title: "Ingresos consolidados", desc: "Visualiza todos los ingresos de tu hotel al instante." },
    ],
  },
  "agencias-de-viajes": {
    icon: "Plane",
    overline: "Sectores · Agencias de viajes",
    title: "Cobros y pagos para agencias de viajes",
    description:
      "Vende paquetes y boletos, cobra a distancia y dispersa pagos a proveedores con total seguridad.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBhaXJwbGFuZSUyMGJvb2tpbmd8ZW58MHx8fHwxNzg4ODQ1ODI0fDA&ixlib=rb-4.1.0&q=85",
    partners: [
      {
        name: "Callmarket",
        url: "https://callmarket.cc",
        tag: "Terminales, procesadores de pago & call center",
        desc: "Aliado en terminales, procesadores de pago y sistemas de call center para gestionar reservas y cobros de tu agencia.",
      },
    ],
    features: [
      { icon: "WalletCards", title: "Tarjetas nominativas", desc: "Tarjetas para agentes y viáticos con control de gastos." },
      { icon: "Link", title: "Cobro a distancia", desc: "Envía links de pago a tus clientes donde estén." },
      { icon: "Globe", title: "Pagos internacionales", desc: "Paga a proveedores y hoteles en el extranjero." },
      { icon: "ShieldCheck", title: "Seguridad y trazabilidad", desc: "Protege cada operación con alertas automáticas." },
    ],
  },
};

export const COMMON_SERVICES = {
  overline: "Ecosistema Enlace",
  title: "Todo lo que tu negocio necesita, en un solo aliado",
  description:
    "Sin importar tu sector, en Enlace Fintech integramos las herramientas clave para cobrar, pagar y crecer, junto a nuestros aliados estratégicos.",
  items: [
    { icon: "CreditCard", title: "Terminales TPV", desc: "Cobra con tarjeta, contactless y QR en cualquier punto de venta." },
    { icon: "WalletCards", title: "Tarjetas nominativas", desc: "Tarjetas físicas y virtuales respaldadas para tu equipo y control de gastos." },
    { icon: "Network", title: "Procesadores de pago", desc: "Integración con los mejores procesadores para maximizar la aprobación." },
    { icon: "Landmark", title: "Pagos de nómina", desc: "Dispersa nómina a tus colaboradores en segundos." },
    { icon: "Building2", title: "Banca · FlexPei", desc: "SPEI 24/7, pagos internacionales y activos digitales.", url: "https://flexpei.com" },
    { icon: "Bitcoin", title: "Procesadores crypto · FluxiPay", desc: "Cobra USDT, BTC y ETH con liquidación en fiat a tu banco.", url: "https://fluxipay.com" },
    { icon: "FileCheck", title: "Gestoría de trámites · MisTrámites", desc: "Constitución de empresas, RFC, firma electrónica, IMSS y más.", url: "https://mistramites.mx" },
    { icon: "Code2", title: "Desarrollo de software · Acxor", desc: "Apps, integraciones con bancos y procesadores, automatización y soporte 24/7.", url: "https://acxor.com" },
  ],
};

export const ONBOARDING = {
  overline: "Así trabajamos",
  title: "De la primera llamada a operar, en 4 pasos",
  steps: [
    { icon: "MessageSquare", title: "Diagnóstico gratuito", desc: "Nos cuentas tu negocio y analizamos cómo cobras, pagas y administras hoy." },
    { icon: "FileText", title: "Propuesta con aliados", desc: "Te presentamos la combinación de soluciones y aliados que más te conviene, con costos claros." },
    { icon: "BadgeCheck", title: "Alta y contratos", desc: "Gestionamos la documentación y validación con cada aliado por ti." },
    { icon: "Rocket", title: "Acompañamiento", desc: "Activas tus servicios y seguimos contigo: un solo ejecutivo para todo tu ecosistema." },
  ],
};

export const FAQ = {
  overline: "Preguntas frecuentes",
  title: "Resolvemos tus dudas",
  items: [
    { q: "¿Qué es un broker fintech?", a: "Somos el aliado que te conecta con las mejores soluciones financieras del mercado (cuentas, terminales, tarjetas nominativas, pagos cripto y más), negociando condiciones a tu favor y acompañándote en la operación diaria." },
    { q: "¿Cuánto tarda el onboarding?", a: "El alta puede completarse en tan solo 5 minutos y la activación de servicios se realiza tras una validación exprés de tu documentación." },
    { q: "¿Para qué tipo de empresas es?", a: "Trabajamos con pymes y grandes empresas de múltiples sectores: restaurantes, médicos, casinos, cripto, eventos, hoteles, comercios y más, así como con personas físicas." },
    { q: "¿Qué métodos de cobro puedo aceptar?", a: "Terminales punto de venta, links de pago, contactless y QR, transferencias SPEI, pagos internacionales y cobros en cripto con liquidación en pesos." },
    { q: "¿Cómo recibo mi dinero?", a: "Tus fondos se liquidan directamente en tu cuenta bancaria en pesos, con trazabilidad completa y conciliación automática." },
    { q: "¿Tienen cobertura en todo México?", a: "Sí, operamos a nivel nacional e internacional, con sucursales de atención en las principales ciudades del país." },
  ],
};

export const SUCURSALES = {
  overline: "Sucursales",
  title: "Estamos cerca de ti",
  description:
    "Atendemos a empresas y personas físicas en todo México. Visítanos o agenda una asesoría en la sucursal más cercana.",
  image:
    "https://images.unsplash.com/photo-1674681512510-e06db64f53fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZXhpY28lMjBjaXR5JTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzg4NTg0NTc4fDA&ixlib=rb-4.1.0&q=85",
  branches: [
    { city: "Ciudad de México", address: "Av. Reforma 000, Col. Centro, CDMX", phone: "+52 55 0000 0000" },
    { city: "Guadalajara", address: "Av. Chapultepec 000, Col. Americana, Jalisco", phone: "+52 33 0000 0000" },
    { city: "Monterrey", address: "Av. Constitución 000, Centro, Nuevo León", phone: "+52 81 0000 0000" },
  ],
};

export const INTERESES = [
  "Restaurantes y bares",
  "Plataforma de pagos",
  "Terminales punto de venta",
  "Tarjetas empresariales",
  "Nómina y dispersión",
  "Pagos internacionales",
  "Consultoría empresarial",
  "Tarjeta para personas",
  "Casinos",
  "Otro",
];

export const LEGAL =
  "Enlace Fintech es un intermediario (broker) de soluciones financieras y corporativas; no es una institución financiera ni una entidad regulada por la CNBV. Los productos y servicios financieros, de consultoría y de terminales punto de venta son prestados por aliados y empresas del grupo debidamente constituidos, bajo sus propios contratos, términos y condiciones. La información de este sitio es informativa y no constituye una oferta vinculante.";

export const SERVICIOS_HUB = {
  overline: "Servicios",
  title: "Soluciones integrales para tu empresa",
  description:
    "Además de conectarte con los mejores productos financieros, en Enlace Fintech resolvemos la operación de tu empresa con herramientas que generan beneficios financieros, reducen costos y mejoran tu control administrativo. Cuéntanos qué necesitas y te decimos todo lo que podemos hacer por las finanzas de tu negocio.",
  image:
    "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/b74f2bcf6984fdc46effb5e99391ab66bd8bc5543c5dd572bc2f00a14c4913cf.jpeg",
  pillars: [
    {
      icon: "LayoutDashboard",
      title: "Plataforma de pagos",
      desc: "Cuentas, SPEI 24/7, cobros, tarjetas y pagos internacionales de tu empresa en una sola plataforma con control en tiempo real.",
      href: "/servicios/plataforma-de-pagos",
      cta: "Ver plataforma de pagos",
    },
    {
      icon: "CreditCard",
      title: "Terminales punto de venta",
      desc: "Terminales sin trámites bancarios ni mínimos de operación, con reportes en tiempo real y contrato de administración de tesorería.",
      href: "/servicios/terminales-punto-de-venta",
      cta: "Ver terminales",
    },
    {
      icon: "WalletCards",
      title: "Tarjetas empresariales",
      desc: "Tarjetas nominativas físicas y virtuales para colaboradores, tarjeta de nómina y tarjeta corporativa para directivos.",
      href: "/servicios/tarjetas",
      cta: "Ver tarjetas",
    },
    {
      icon: "Landmark",
      title: "Nómina y dispersión",
      desc: "Dispersa nómina, comisiones y viáticos en segundos con tarjeta de nómina para tu equipo y conciliación automática.",
      href: "/servicios/nomina-y-dispersion",
      cta: "Ver nómina y dispersión",
    },
    {
      icon: "Globe",
      title: "Pagos internacionales",
      desc: "Wire, SWIFT, cuentas en USD y cobros cripto liquidados en pesos para vender y comprar fuera de México.",
      href: "/servicios/pagos-internacionales",
      cta: "Ver pagos internacionales",
    },
    {
      icon: "Scale",
      title: "Consultoría empresarial",
      desc: "Capital humano, asesoría corporativa, fiscal, laboral y mercantil con especialistas que analizan y optimizan tu operación.",
      href: "/servicios/consultoria-empresarial",
      cta: "Ver consultoría",
    },
  ],
  more: [
    { title: "Beneficios para colaboradores", href: "/empresas/membresias" },
    { title: "Cobros en cripto", href: "/empresas/cripto" },
  ],
};

export const SISTEMAS = {
  overline: "Sistemas y tecnología",
  title: "Los sistemas que hacen funcionar tu negocio, con un solo aliado",
  description:
    "Además de las soluciones financieras, en Enlace Fintech te conectamos con las plataformas tecnológicas de nuestro grupo y aliados: reservaciones, boletos, caja, call center, gestoría de trámites y desarrollo de software a medida. Un solo interlocutor para integrarlo todo con tus cobros y pagos.",
  image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/c0ac1b3c30a83e57504f71798d31da8a22152c935c6a41ab5875736fdea65feb.jpeg",
  items: [
    { icon: "CalendarCheck", name: "Más Mesa", domain: "masmesa.com.mx", url: "https://masmesa.com.mx", tag: "Reservaciones para restaurantes", desc: "Reservaciones en línea con mapa interactivo de mesas, disponibilidad en tiempo real y feedback de tus clientes.", forWhom: "Restaurantes, bares y cafeterías", internal: "/empresas/restaurantes-y-bares" },
    { icon: "Ticket", name: "Mastiket", domain: "mastiket.com", url: "https://mastiket.com", tag: "Venta de boletos", desc: "Venta y gestión de boletos y accesos en línea, control de aforo y validación en puerta.", forWhom: "Eventos, conciertos, festivales y recintos", internal: "/empresas/eventos" },
    { icon: "Store", name: "InfoCaja", domain: "infocaja.mx", url: "https://infocaja.mx", tag: "Caja y comanda", desc: "Punto de venta con comanda, inventario, automatización de procesos y facturación con QR.", forWhom: "Restaurantes y comercios", internal: "/caja" },
    { icon: "Headset", name: "Callmarket", domain: "callmarket.cc", url: "https://callmarket.cc", tag: "Sistema de call center", desc: "Campañas automatizadas, IVR, encuestas telefónicas y cobro por teléfono integrado con procesadores de pago.", forWhom: "Call centers, agencias de viajes y ventas telefónicas", internal: "/empresas/call-center" },
    { icon: "FileCheck", name: "MisTrámites", domain: "mistramites.mx", url: "https://mistramites.mx", tag: "Gestoría de trámites", desc: "Más de 60 trámites mexicanos con seguimiento 24/7: constitución de empresas, RFC, e.firma, IMSS y más.", forWhom: "Empresas nuevas y en crecimiento", internal: "/servicios/consultoria-empresarial" },
    { icon: "Code2", name: "Acxor", domain: "acxor.com", url: "https://acxor.com", tag: "Desarrollo de software", desc: "Ingeniería de software a medida: apps web y móviles, integraciones con bancos y procesadores de pago, automatización, seguridad y soporte 24/7.", forWhom: "Empresas que necesitan tecnología propia en producción", internal: "/contacto" },
  ],
};

export const SERVICIOS_DETALLE = {
  tarjetas: {
    overline: "Tarjetas empresariales",
    title: "Tarjetas para tu empresa y tus colaboradores",
    description:
      "Tarjetas nominativas físicas y virtuales con aceptación nacional e internacional para pagar nómina, controlar gastos operativos y darle a tus directivos una tarjeta corporativa. Todo administrado desde la Plataforma de pagos de Enlace Fintech.",
    image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/48964a43321b6c2a1dd2487b81b0b27453e33a0aff43c84c549044ff0db8997e.jpeg",
    cta: "Quiero tarjetas para mi empresa",
    features: [
      { icon: "Eye", title: "Control en tiempo real", desc: "Cada cargo se refleja al instante con comercio, monto y responsable." },
      { icon: "Smartphone", title: "Físicas y virtuales", desc: "Emite tarjetas virtuales en segundos y físicas en días, sin sucursal." },
      { icon: "Globe", title: "Aceptación global", desc: "Chip, banda y contactless en México y el extranjero." },
      { icon: "SlidersHorizontal", title: "Límites y bloqueo", desc: "Define topes por tarjeta o categoría y bloquea desde la app." },
    ],
    blocks: [
      {
        icon: "Users",
        title: "Tarjetas nominativas para colaboradores",
        desc: "Para viáticos, gasolina, compras operativas y gastos de campo.",
        bullets: ["Límites por tarjeta, comercio o categoría", "Comprobación de gastos con foto del ticket", "Sin exponer la cuenta principal de la empresa", "Reportes por área o centro de costo"],
      },
      {
        icon: "Landmark",
        title: "Tarjeta de nómina y dispersión",
        desc: "Paga a tu equipo en segundos y dales una tarjeta sin costo.",
        bullets: ["Dispersión masiva de nómina 24/7", "Tarjeta nominativa sin costo para el colaborador", "Retiros en cajeros y compras en comercios", "Acceso a beneficios y membresías"],
      },
      {
        icon: "Crown",
        title: "Tarjeta corporativa para dueños y directivos",
        desc: "Una tarjeta con límites altos para la operación estratégica.",
        bullets: ["Pagos a proveedores nacionales e internacionales", "Suscripciones, software y publicidad digital", "Estados de cuenta por centro de costo", "Seguros y asistencias en viajes"],
      },
    ],
    note: "Tarjetas emitidas por aliados regulados con respaldo de redes internacionales de pago. Sujetas a aprobación y a los términos del emisor.",
  },
  "nomina-y-dispersion": {
    overline: "Nómina y dispersión",
    title: "Paga a tu equipo en segundos, con control total",
    description:
      "Dispersa nómina, comisiones, viáticos y pagos a proveedores desde una sola plataforma, entrega a tus colaboradores una tarjeta de nómina sin costo y, si lo necesitas, delega el cálculo y cumplimiento de nómina a nuestro equipo de capital humano.",
    image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/666a60391eea9a32868e5111c68cdc10de55abc74affd04b4d703f551d71a0f4.jpeg",
    cta: "Quiero dispersar mi nómina",
    features: [
      { icon: "Zap", title: "Dispersión masiva SPEI 24/7", desc: "Carga tu layout y paga a cualquier banco en segundos, incluso fines de semana." },
      { icon: "WalletCards", title: "Tarjeta de nómina", desc: "Tarjeta nominativa sin costo para cada colaborador, con aceptación nacional." },
      { icon: "Users", title: "Comisiones y proveedores", desc: "Paga vendedores, repartidores y proveedores con la misma herramienta." },
      { icon: "FileCheck", title: "Conciliación automática", desc: "Comprobantes y reportes listos para contabilidad." },
    ],
    blocks: [
      {
        icon: "Landmark",
        title: "Dispersión de nómina",
        desc: "Olvídate de capturar cuenta por cuenta en el banco.",
        bullets: ["Carga de layout desde Excel o tu sistema de nómina", "Pagos a cualquier banco o a la tarjeta de nómina Enlace", "Programación de pagos y aprobaciones por niveles", "Comprobantes de pago automáticos para cada colaborador"],
      },
      {
        icon: "WalletCards",
        title: "Tarjeta de nómina Enlace",
        desc: "Un beneficio que retiene talento sin costo para la empresa.",
        bullets: ["Tarjeta nominativa sin costo de apertura ni anualidad", "Retiros en cajeros y compras en comercios", "Acceso a descuentos, seguros y membresías", "Control de saldos y movimientos desde la app"],
      },
      {
        icon: "ClipboardList",
        title: "Administración integral de nómina",
        desc: "Con nuestro equipo de capital humano.",
        bullets: ["Cálculo de IMSS, ISR e incidencias", "Timbrado de CFDI de nómina", "Altas, bajas y modificaciones ante el IMSS", "Finiquitos y liquidaciones"],
        href: "/servicios/consultoria-empresarial",
        linkLabel: "Ver consultoría en capital humano",
      },
    ],
    note: "La dispersión se realiza a través de la Plataforma de pagos; el cálculo y cumplimiento de nómina lo presta el despacho aliado del grupo Enlace Fintech.",
  },
  "pagos-internacionales": {
    overline: "Pagos internacionales",
    title: "Cobra y paga en el extranjero sin fricción",
    description:
      "Transferencias Wire y SWIFT, cuentas en dólares y cobros en cripto liquidados en pesos, para que tu empresa compre a proveedores y venda a clientes fuera de México con tipo de cambio competitivo y cumplimiento total.",
    image: "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/b39bf14407fb60f04ffd14b3d89d9aa2c86dc64bdaa03fcb138b7cf8607e920c.jpeg",
    cta: "Quiero operar internacionalmente",
    features: [
      { icon: "Globe", title: "Wire y SWIFT", desc: "Envía y recibe pagos internacionales con trazabilidad completa." },
      { icon: "Bitcoin", title: "Cobros cripto en pesos", desc: "Acepta USDT, BTC y ETH y recibe MXN en tu banco." },
      { icon: "TrendingUp", title: "Tipo de cambio competitivo", desc: "Conversión en tiempo real, sin sorpresas en la comisión." },
      { icon: "ShieldCheck", title: "Cumplimiento KYC/AML", desc: "Operaciones validadas bajo normativa nacional e internacional." },
    ],
    blocks: [
      {
        icon: "Truck",
        title: "Paga a proveedores internacionales",
        desc: "Importa insumos, software o servicios sin trabas.",
        bullets: ["Transferencias Wire y SWIFT a más de 100 países", "Cuenta en USD para concentrar pagos", "Aprobaciones por niveles y comprobantes", "Conversión al momento del pago"],
      },
      {
        icon: "Store",
        title: "Cobra a clientes en el extranjero",
        desc: "Vende fuera de México y recibe en pesos.",
        bullets: ["Links de pago en USD para tus clientes", "Cobros en cripto con liquidación en MXN", "Liquidación a tu cuenta bancaria en 24-48 h", "Sin custodia de fondos ni riesgo de contraparte"],
      },
      {
        icon: "Coins",
        title: "Tesorería multimoneda",
        desc: "Administra pesos, dólares y activos digitales en un lugar.",
        bullets: ["Saldos en MXN y USD", "Intercambio de activos digitales", "Reportes consolidados para contabilidad", "Alertas de movimientos inusuales"],
      },
    ],
    partners: [
      { name: "FlexPei", url: "https://flexpei.com", tag: "Banca internacional & activos digitales" },
      { name: "FluxiPay", url: "https://fluxipay.com", tag: "Cobros cripto con liquidación en fiat" },
    ],
    note: "Servicios prestados por FlexPei y FluxiPay, aliados de Enlace Fintech. Los tiempos de liquidación dependen del país y el plan contratado.",
  },
};

export const CONSULTORIA = {
  overline: "Consultoría empresarial",
  title: "Asesoría y soluciones corporativas para tu empresa en México",
  description:
    "Cada empresa tiene necesidades distintas. Por eso, antes de presentarte una propuesta, analizamos tu operación para tener una visión completa y clara de lo que necesitas, y diseñamos una estrategia integral que optimice tus recursos: nómina, personal, fiscal, laboral y corporativo, con un solo interlocutor.",
  operator:
    "Servicio prestado por el despacho de consultoría aliado del grupo Enlace Fintech, con especialistas titulados en materia fiscal, laboral y corporativa.",
  image:
    "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/fb301f7f8a4e3e9f6ea47e2ecc962ed91c4363919704d77f6457f3106da6cdc2.jpeg",
  areas: [
    {
      id: "capital-humano",
      icon: "Users",
      title: "Administración de capital humano",
      desc: "Nómina, personal y recursos humanos operados con control, cumplimiento y ahorro.",
      items: [
        "Administración de nómina",
        "Servicios especializados de personal (REPSE)",
        "Soluciones en recursos humanos",
        "Manejo de contratos laborales",
        "Auditorías en nómina",
        "Desarrollo de perfiles de puesto",
        "Programas de capacitación",
        "Estudios socioeconómicos",
        "Altas y bajas ante el IMSS y cálculo de incidencias",
        "Dispersión de pagos, finiquitos y liquidaciones",
      ],
    },
    {
      id: "corporativa",
      icon: "Building2",
      title: "Asesoría corporativa",
      desc: "Estructura societaria y decisiones financieras con respaldo legal.",
      items: [
        "Estudios de precios de transferencia",
        "Constitución de sociedades y modelos corporativos",
        "Asesoría financiera a socios y accionistas",
        "Asesoría y elaboración de contratos",
        "Arrendamiento de bienes inmuebles",
        "Gestión de honorarios del Consejo de Administración",
        "Gestión de regalías (royalties) y franquicias",
      ],
    },
    {
      id: "fiscal",
      icon: "Receipt",
      title: "Asesoría fiscal",
      desc: "Cumplimiento y defensa frente a las obligaciones fiscales de su empresa.",
      items: [
        "Planificación integral de obligaciones fiscales",
        "Defensa administrativa fiscal",
        "Gestión de gastos no deducibles",
      ],
    },
    {
      id: "laboral",
      icon: "Scale",
      title: "Asesoría laboral",
      desc: "Relaciones laborales sanas y protegidas ante cualquier contingencia.",
      items: [
        "Auditorías laborales",
        "Elaboración y celebración de contratos individuales de trabajo",
        "Elaboración y trámite del reglamento interior de trabajo",
        "Asesoría en negociación y registro de contratos colectivos",
        "Representación en trámites ante la STPS y Centros de Conciliación Laboral",
        "Asesoramiento en procesos de conciliación",
        "Representación del empleador en juicios laborales",
        "Asesoría y elaboración de convenios de confidencialidad",
        "Asesoría en finiquitos y liquidaciones",
        "Asesoría en seguridad e higiene en el trabajo (NOM-STPS)",
      ],
    },
    {
      id: "mercantil",
      icon: "Handshake",
      title: "Asesoría mercantil",
      desc: "Acompañamiento en operaciones de compra y venta con certeza jurídica.",
      items: ["Asesoría en compraventa de activos", "Revisión y negociación de contratos mercantiles", "Due diligence de operaciones"],
    },
  ],
};

export const TPV = {
  overline: "Terminales punto de venta",
  title: "Cobra con terminal, sin trámites bancarios",
  description:
    "Tu negocio cobra con nuestras terminales y el importe de cada venta te lo entregamos a través de distintas opciones seguras de liquidación, con fechas de corte que tú eliges.",
  description2:
    "La asignación de las terminales se formaliza con un contrato de administración de tesorería que protege jurídicamente la operación entre tu empresa y la empresa concentradora de cobros, aliada del grupo Enlace Fintech.",
  image:
    "https://static.prod-images.emergentagent.com/jobs/bdaa62fe-1c2e-4ec8-9169-06c51ec1a552/images/921cd02d61f74010f9808d4bd8f633a0b1e0712cef43cbc0336c8a8e2f022ebc.jpeg",
  benefitsTitle: "Beneficios de nuestro servicio integral de terminales",
  benefits: [
    "Reportes de cobros por terminal, en tiempo real, desde una plataforma en línea.",
    "Sin trámites bancarios ni requisitos complejos para obtener tus terminales.",
    "Sin mínimos de operación para otorgarte la terminal.",
    "No pierdes ventas por fallas de una sola terminal.",
    "Blindamos tu operación.",
    "Asignamos la cantidad de terminales que tu negocio necesita.",
    "Certeza legal y tranquilidad financiera con un contrato de administración de tesorería.",
    "Opciones variadas de liquidación de tus cobros.",
    "Fechas de corte personalizadas para tu negocio.",
    "Úsalas como terminales únicas o alternas en tu negocio.",
  ],
  premium: {
    title: "Plataforma premium de pago con tarjeta",
    subtitle: "Acepta todas las marcas de tarjetas.",
    bullets: [
      { icon: "Zap", text: "Pagos con tarjeta en segundos." },
      { icon: "Bluetooth", text: "Se conecta a tu smartphone o tableta vía Bluetooth." },
      { icon: "KeyRound", text: "Acepta tarjetas que solicitan PIN." },
      { icon: "ShieldCheck", text: "Aprobada por EMV (Europay, MasterCard y Visa) y cumple la norma PCI DSS de seguridad de datos." },
      { icon: "Lock", text: "Garantiza tu protección y la de tus clientes." },
    ],
  },
  stepsTitle: "En 3 sencillos pasos tienes tu terminal punto de venta",
  steps: [
    { icon: "FileSignature", title: "Firma del contrato", desc: "Aceptas las condiciones de servicio y comisión, y firmamos el contrato de administración de tesorería entre tu empresa y la empresa concentradora de cobros." },
    { icon: "CalendarClock", title: "Elige cortes y liquidación", desc: "Defines tus fechas de corte y la opción de liquidación de cobros que mejor cubra tus necesidades." },
    { icon: "PackageCheck", title: "Recibe tu KIT TPV", desc: "En 48 horas recibes tu KIT de TPV; configuras la terminal y empiezas a cobrar." },
  ],
  requisitos: "Requisitos básicos: WiFi o plan de datos en una tablet o smartphone.",
};
