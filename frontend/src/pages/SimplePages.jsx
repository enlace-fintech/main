import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PersonaFisica } from "@/components/site/PersonaFisica";
import { Aliados } from "@/components/site/Aliados";
import { Sucursales } from "@/components/site/Sucursales";
import { Blog } from "@/components/site/Blog";
import { Contacto } from "@/components/site/Contacto";

export function PersonasPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Personas" }]} />
      <PersonaFisica />
      <Contacto />
    </>
  );
}

export function AliadosPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Aliados" }]} />
      <Aliados />
      <Contacto />
    </>
  );
}

export function SucursalesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Sucursales" }]} />
      <Sucursales />
      <Contacto />
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Blog" }]} />
      <Blog />
      <Contacto />
    </>
  );
}

export function ContactoPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Contacto" }]} />
      <Contacto />
    </>
  );
}
