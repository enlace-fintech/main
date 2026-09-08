import { Hero } from "@/components/site/Hero";
import { AliadosMarquee } from "@/components/site/AliadosMarquee";
import { Empresas } from "@/components/site/Empresas";
import { Restaurantes } from "@/components/site/Restaurantes";
import { MasMesa } from "@/components/site/MasMesa";
import { Caja } from "@/components/site/Caja";
import { Medicos } from "@/components/site/Medicos";
import { Cripto } from "@/components/site/Cripto";
import { Eventos } from "@/components/site/Eventos";
import { Membresias } from "@/components/site/Membresias";
import { WalletNegocios } from "@/components/site/WalletNegocios";
import { Beneficios } from "@/components/site/Beneficios";
import { PersonaFisica } from "@/components/site/PersonaFisica";
import { Casinos } from "@/components/site/Casinos";
import { Aliados } from "@/components/site/Aliados";
import { Sucursales } from "@/components/site/Sucursales";
import { Blog } from "@/components/site/Blog";
import { Contacto } from "@/components/site/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <AliadosMarquee />
      <Empresas />
      <Restaurantes />
      <MasMesa />
      <Caja />
      <Medicos />
      <Cripto />
      <Eventos />
      <Membresias />
      <WalletNegocios />
      <Beneficios />
      <PersonaFisica />
      <Casinos />
      <Aliados />
      <Sucursales />
      <Blog />
      <Contacto />
    </>
  );
}
