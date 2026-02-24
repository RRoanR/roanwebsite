import { useEffect } from "react";

type Language = "nl" | "en";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  language: Language;
  jsonLd?: Record<string, unknown>[];
}

const DEFAULT_BASE_URL = "https://www.roanros.be";

function buildUrl(path: string, language?: Language) {
  const base =
    typeof window !== "undefined" ? window.location.origin : DEFAULT_BASE_URL;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(trimmedPath, base);
  if (language) url.searchParams.set("lang", language);
  return url.toString();
}

function upsertMeta(name: string, content: string) {
  let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string, key?: string) {
  const selector = key ? `link[data-seo-key="${key}"]` : `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  el.setAttribute("rel", rel);
  el.setAttribute("href", href);
  if (hreflang) {
    el.setAttribute("hreflang", hreflang);
  } else {
    el.removeAttribute("hreflang");
  }
  if (key) el.setAttribute("data-seo-key", key);
}

export function SeoHead({ title, description, path, language, jsonLd = [] }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = language === "nl" ? "nl-BE" : "en-BE";
    upsertMeta("description", description);

    upsertLink("canonical", buildUrl(path, language), undefined, "canonical");
    upsertLink("alternate", buildUrl(path, "nl"), "nl-BE", "alt-nl");
    upsertLink("alternate", buildUrl(path, "en"), "en-BE", "alt-en");
    upsertLink("alternate", buildUrl(path), "x-default", "alt-default");

    const existing = document.querySelectorAll('script[data-seo-jsonld="1"]');
    existing.forEach((node) => node.parentNode?.removeChild(node));

    jsonLd.forEach((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "1");
      script.text = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld="1"]');
      scripts.forEach((node) => node.parentNode?.removeChild(node));
    };
  }, [title, description, path, language, jsonLd]);

  return null;
}

