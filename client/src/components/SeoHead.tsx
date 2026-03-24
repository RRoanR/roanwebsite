import { useEffect } from "react";

type Language = "nl" | "en";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  language: Language;
  jsonLd?: Record<string, unknown>[];
  alternates?: Partial<Record<Language | "x-default", string>>;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const DEFAULT_BASE_URL = "https://roanr.be";

function buildUrl(path: string, language?: Language) {
  const base =
    typeof window !== "undefined" ? window.location.origin : DEFAULT_BASE_URL;
  const url = new URL(path.startsWith("http") ? path : path.startsWith("/") ? path : `/${path}`, base);
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

function upsertMetaProperty(property: string, content: string) {
  let el = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
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

export function SeoHead({
  title,
  description,
  path,
  language,
  jsonLd = [],
  alternates,
  image = "/og/roanros-site.svg",
  type = "website",
  noindex = false,
}: SeoHeadProps) {
  useEffect(() => {
    const alternatesMap = alternates ?? {
      nl: path,
      en: path,
      "x-default": path,
    };
    const canonicalTarget = alternates ? alternatesMap[language] ?? path : buildUrl(path, language);
    const canonicalHref = alternates ? buildUrl(canonicalTarget) : canonicalTarget;
    const locale = language === "nl" ? "nl_BE" : "en_BE";

    document.title = title;
    document.documentElement.lang = language === "nl" ? "nl-BE" : "en-BE";
    upsertMeta("description", description);
    upsertMeta(
      "robots",
      noindex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    upsertMeta("twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", buildUrl(image));

    upsertMetaProperty("og:type", type);
    upsertMetaProperty("og:url", canonicalHref);
    upsertMetaProperty("og:title", title);
    upsertMetaProperty("og:description", description);
    upsertMetaProperty("og:site_name", "Roan Ros");
    upsertMetaProperty("og:locale", locale);
    upsertMetaProperty("og:image", buildUrl(image));

    upsertLink("canonical", canonicalHref, undefined, "canonical");
    upsertLink(
      "alternate",
      buildUrl(alternates ? alternatesMap.nl ?? path : path, alternates ? undefined : "nl"),
      "nl-BE",
      "alt-nl",
    );
    upsertLink(
      "alternate",
      buildUrl(alternates ? alternatesMap.en ?? path : path, alternates ? undefined : "en"),
      "en-BE",
      "alt-en",
    );
    upsertLink(
      "alternate",
      buildUrl(alternates ? alternatesMap["x-default"] ?? path : path),
      "x-default",
      "alt-default",
    );

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
  }, [title, description, path, language, jsonLd, alternates, image, type, noindex]);

  return null;
}
