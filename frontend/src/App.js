import "@/App.css";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Empresas } from "@/components/site/Empresas";
import { Restaurantes } from "@/components/site/Restaurantes";
import { MasMesa } from "@/components/site/MasMesa";
import { Caja } from "@/components/site/Caja";
import { Medicos } from "@/components/site/Medicos";
import { Cripto } from "@/components/site/Cripto";
import { Membresias } from "@/components/site/Membresias";
import { Eventos } from "@/components/site/Eventos";
import { WalletNegocios } from "@/components/site/WalletNegocios";
import { Beneficios } from "@/components/site/Beneficios";
import { PersonaFisica } from "@/components/site/PersonaFisica";
import { Casinos } from "@/components/site/Casinos";
import { Aliados } from "@/components/site/Aliados";
import { Sucursales } from "@/components/site/Sucursales";
import { Blog } from "@/components/site/Blog";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <Toaster position="top-center" richColors theme="dark" />
      <Header />
      <main>
        <Hero />
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
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
