import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ServiciosHub } from "@/components/site/ServiciosHub";
import { ServicioDetalle } from "@/components/site/ServicioDetalle";
import { WalletNegocios } from "@/components/site/WalletNegocios";
import { Beneficios } from "@/components/site/Beneficios";
import { Consultoria } from "@/components/site/Consultoria";
import { Tpv } from "@/components/site/Tpv";
import { TpvPasos } from "@/components/site/TpvPasos";
import { EcosistemaEnlace } from "@/components/site/EcosistemaEnlace";
import { ComoEmpezar } from "@/components/site/ComoEmpezar";
import { SistemasAliados } from "@/components/site/SistemasAliados";
import { Contacto } from "@/components/site/Contacto";
import { SERVICIOS_DETALLE } from "@/data/content";

const ROOT = { label: "Servicios", href: "/servicios" };

const LABELS = {
  "plataforma-de-pagos": "Plataforma de pagos",
  "terminales-punto-de-venta": "Terminales punto de venta",
  tarjetas: "Tarjetas empresariales",
  "nomina-y-dispersion": "Nómina y dispersión",
  "pagos-internacionales": "Pagos internacionales",
  "consultoria-empresarial": "Consultoría empresarial",
  sistemas: "Sistemas y tecnología",
};

const DEDICATED = {
  "plataforma-de-pagos": () => (
    <>
      <WalletNegocios />
      <Beneficios />
      <EcosistemaEnlace />
    </>
  ),
  "terminales-punto-de-venta": () => (
    <>
      <Tpv />
      <TpvPasos />
    </>
  ),
  "consultoria-empresarial": () => (
    <>
      <Consultoria />
      <EcosistemaEnlace />
    </>
  ),
  sistemas: () => <SistemasAliados asHero />,
};

export default function ServiciosPage() {
  const { slug } = useParams();

  if (!slug) {
    return (
      <>
        <Breadcrumbs trail={[{ label: "Servicios" }]} />
        <ServiciosHub asHero />
        <SistemasAliados compact />
        <ComoEmpezar />
        <Contacto />
      </>
    );
  }

  const label = LABELS[slug];
  if (!label) return <Navigate to="/servicios" replace />;

  const dedicated = DEDICATED[slug];
  const detalle = SERVICIOS_DETALLE[slug];

  return (
    <>
      <Breadcrumbs trail={[ROOT, { label }]} />
      {dedicated ? dedicated() : <ServicioDetalle data={detalle} />}
      <Contacto />
    </>
  );
}
