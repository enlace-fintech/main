import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { GenericSector } from "@/components/site/GenericSector";
import { Restaurantes } from "@/components/site/Restaurantes";
import { MasMesa } from "@/components/site/MasMesa";
import { Caja } from "@/components/site/Caja";
import { Medicos } from "@/components/site/Medicos";
import { Eventos } from "@/components/site/Eventos";
import { Membresias } from "@/components/site/Membresias";
import { Casinos } from "@/components/site/Casinos";
import { EcosistemaEnlace } from "@/components/site/EcosistemaEnlace";
import { Contacto } from "@/components/site/Contacto";
import { GENERIC_SECTORS } from "@/data/content";

const LABELS = {
  "restaurantes-y-bares": "Restaurantes y bares",
  medicos: "Médicos",
  casinos: "Casinos",
  eventos: "Eventos & Conciertos",
  membresias: "Membresías",
  "call-center": "Call center",
  farmacias: "Farmacias",
  tiendas: "Tiendas",
  ferreterias: "Ferreterías",
  hoteles: "Hoteles",
  "agencias-de-viajes": "Agencias de viajes",
};

const DEDICATED = {
  "restaurantes-y-bares": () => (
    <>
      <Restaurantes />
      <MasMesa />
      <Caja />
    </>
  ),
  medicos: () => <Medicos />,
  casinos: () => <Casinos />,
  eventos: () => <Eventos />,
  membresias: () => <Membresias />,
};

export default function EmpresaPage() {
  const { slug } = useParams();
  const label = LABELS[slug];
  if (!label) return <Navigate to="/" replace />;

  const dedicated = DEDICATED[slug];
  const generic = GENERIC_SECTORS[slug];

  return (
    <>
      <Breadcrumbs trail={[{ label: "Empresas" }, { label }]} />
      {dedicated ? dedicated() : generic ? <GenericSector data={generic} /> : null}
      <EcosistemaEnlace />
      <Contacto />
    </>
  );
}
