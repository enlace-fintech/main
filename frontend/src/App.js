import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Layout } from "@/components/site/Layout";
import Home from "@/pages/Home";
import EmpresaPage from "@/pages/EmpresaPage";
import ServiciosPage from "@/pages/ServiciosPage";
import {
  WalletPage,
  CajaPage,
  PersonasPage,
  AliadosPage,
  SucursalesPage,
  BlogPage,
  ContactoPage,
} from "@/pages/SimplePages";

function App() {
  return (
    <>
      <Toaster position="top-center" richColors theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/empresas/:slug" element={<EmpresaPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/servicios/:slug" element={<ServiciosPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/caja" element={<CajaPage />} />
            <Route path="/personas" element={<PersonasPage />} />
            <Route path="/aliados" element={<AliadosPage />} />
            <Route path="/sucursales" element={<SucursalesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
