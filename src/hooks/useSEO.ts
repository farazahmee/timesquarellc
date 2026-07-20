import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  /** Absolute URL to a social share image. Falls back to the site default. */
  image?: string;
}

const SITE_ORIGIN = "https://timesquarellc.com";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps per-page SEO tags in sync on this client-rendered SPA: title, meta
 * description, canonical, and the Open Graph / Twitter tags that social
 * scrapers read. Creates any tag that is missing rather than only updating.
 */
export function useSEO({ title, description, canonical, image }: SEOProps) {
  useEffect(() => {
    const url = canonical || SITE_ORIGIN;
    const shareImage = image || `${SITE_ORIGIN}/og-image-1200x630.png`;

    document.title = title;
    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", shareImage);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", shareImage);

    setCanonical(url);
  }, [title, description, canonical, image]);
}
