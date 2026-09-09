import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ServiciosHub } from "@/components/site/ServiciosHub";
import { Consultoria } from "@/components/site/Consultoria";
import { Tpv } from "@/components/site/Tpv";
import { TpvPasos } from "@/components/site/TpvPasos";
import { EcosistemaEnlace } from "@/components/site/EcosistemaEnlace";
import { ComoEmpezar } from "@/components/site/ComoEmpezar";
import { Contacto } from "@/components/site/Contacto";

const ROOT = { label: "Servicios", href: "/servicios" };

export default function ServiciosPage() {
  const { slug } = useParams();

  if (!slug) {
    return (
      <>
        <Breadcrumbs trail={[{ label: "Servicios" }]} />
        <ServiciosHub asHero />
        <ComoEmpezar />
        <Contacto />
      </>
    );
  }

  if (slug === "consultoria-empresarial") {
    return (
      <>
        <Breadcrumbs trail={[ROOT, { label: "Consultoría empresarial" }]} />
        <Consultoria />
        <EcosistemaEnlace />
        <Contacto />
      </>
    );
  }

  if (slug === "terminales-punto-de-venta") {
    return (
      <>
        <Breadcrumbs trail={[ROOT, { label: "Terminales punto de venta" }]} />
        <Tpv />
        <TpvPasos />
        <Contacto />
      </>
    );
  }

  return <Navigate to="/servicios" replace />;
}
