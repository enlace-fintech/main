export const CALC = {
  overline: "Calculadora de ahorro",
  title: "¿Cuánto te ahorras en comisiones con Enlace?",
  description:
    "Ingresa tus ventas mensuales con tarjeta y lo que pagas hoy. Te mostramos cuánto ahorrarías al mes y al año con una terminal Enlace sin renta ni mínimos de operación.",
  tasaEnlace: 2.9,
  rentaEnlace: 0,
  defaults: { ventas: 150000, ticket: 450, tasaActual: 3.6, renta: 350 },
  limits: { ventas: [10000, 2000000], ticket: [50, 20000], tasaActual: [1.5, 6], renta: [0, 3000] },
  note: "Tasa de referencia de 2.9% + IVA, sujeta a evaluación por giro, volumen y tipo de tarjeta. El cálculo no incluye IVA ni comisiones por tarjetas internacionales.",
  incluye: ["Sin renta mensual ni costo por terminal", "Sin mínimos de operación", "Liquidación en las fechas de corte que elijas", "Reportes de cada cobro en tiempo real"],
};
