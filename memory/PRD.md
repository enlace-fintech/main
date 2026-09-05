# PRD · Enlace Fintech (enlacefintech.com)

## Problema original
Crear el sitio web enlacefintech.com con logo, tomando como referencia al competidor
https://vinculacionfinanciera.com y replicando casi todo su contenido/estructura.
Propuesta gráfica + sitio + contenido completo, en español (mercado México).

## Arquitectura
- Frontend: React (CRA/craco) + Tailwind + framer-motion + lucide-react + sonner.
- Backend: FastAPI + MongoDB (motor). Endpoints con prefijo /api.
- Landing de una sola página con anclas por sección.

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

## Backlog / pendientes
- P1: Reemplazar datos de contacto placeholder (tel, email, WhatsApp, dirección, redes).
- P2: Páginas de artículos de blog completos (rutas propias).
- P2: Aviso de privacidad y Términos reales.
- P2: Envío de correo real de notificación al recibir contacto (Resend).
- P2: Versión en inglés.

## Próximos pasos
- Confirmar datos de contacto reales y branding definitivo.
