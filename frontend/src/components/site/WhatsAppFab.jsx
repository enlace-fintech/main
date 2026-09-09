import { useLocation } from "react-router-dom";
import { BRAND } from "../../data/content";
import { getLeadContext } from "../../data/leads";

export const WhatsAppFab = () => {
  const { pathname } = useLocation();
  const number = BRAND.whatsapp.replace(/[^0-9]/g, "");
  const text = getLeadContext(pathname).whatsapp;
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-200"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.402L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.234 1.59h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.717 12.717 0 0 0 16.004 3.2zm0 23.03h-.004a10.63 10.63 0 0 1-5.417-1.483l-.389-.23-4.028 1.055 1.075-3.926-.253-.403a10.6 10.6 0 0 1-1.626-5.646c0-5.867 4.774-10.64 10.646-10.64 2.843 0 5.514 1.108 7.523 3.12a10.57 10.57 0 0 1 3.117 7.526c0 5.867-4.774 10.64-10.641 10.64zm5.834-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.571-1.587-.95-.848-1.592-1.895-1.779-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.892-.773 2.158-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
};
