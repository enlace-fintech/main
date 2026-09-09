import { Hero } from "@/components/site/Hero";
import { AliadosMarquee } from "@/components/site/AliadosMarquee";
import { Empresas } from "@/components/site/Empresas";
import { ServiciosHub } from "@/components/site/ServiciosHub";
import { WalletNegocios } from "@/components/site/WalletNegocios";
import { PersonaFisica } from "@/components/site/PersonaFisica";
import { EcosistemaEnlace } from "@/components/site/EcosistemaEnlace";
import { ComoEmpezar } from "@/components/site/ComoEmpezar";
import { Faq } from "@/components/site/Faq";
import { Contacto } from "@/components/site/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <AliadosMarquee />
      <Empresas />
      <ServiciosHub />
      <WalletNegocios />
      <PersonaFisica />
      <EcosistemaEnlace />
      <ComoEmpezar />
      <Faq />
      <Contacto />
    </>
  );
}
