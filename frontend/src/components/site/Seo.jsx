import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeo, SITE_URL } from "../../data/seo";

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const url = `${SITE_URL}${seo.path === "/" ? "" : seo.path}`;
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setCanonical(url);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:image", seo.image);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", seo.type || "website");
    setMeta("property", "og:locale", "es_MX");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.image);
  }, [pathname]);

  return null;
};
