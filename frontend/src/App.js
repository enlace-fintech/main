import "@/App.css";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Restaurantes } from "@/components/site/Restaurantes";
import { WalletNegocios } from "@/components/site/WalletNegocios";
import { PersonaFisica } from "@/components/site/PersonaFisica";
import { Casinos } from "@/components/site/Casinos";
import { Blog } from "@/components/site/Blog";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <Toaster position="top-center" richColors theme="dark" />
      <Header />
      <main>
        <Hero />
        <Restaurantes />
        <WalletNegocios />
        <PersonaFisica />
        <Casinos />
        <Blog />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
