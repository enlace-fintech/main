import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const Layout = () => (
  <div className="App" data-testid="app-root">
    <ScrollToTop />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);
