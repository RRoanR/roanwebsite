interface Crumb {
  name: string;
  path: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface BusinessOptions {
  name?: string;
  description: string;
  areaServed: string[];
  serviceType?: string[];
}

interface ServiceOptions {
  businessName?: string;
  serviceName: string;
  serviceType: string;
  description: string;
  areaServed: string[];
}

const DEFAULT_BASE_URL = "https://roanr.be";

function baseUrl() {
  return typeof window !== "undefined" ? window.location.origin : DEFAULT_BASE_URL;
}

function abs(path: string) {
  return new URL(path, baseUrl()).toString();
}

export function breadcrumbJsonLd(path: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumbs`,
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqJsonLd(path: string, faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function localBusinessJsonLd(path: string, options: BusinessOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${abs(path)}#localbusiness`,
    name: options.name ?? "Roan Ros",
    url: abs(path),
    description: options.description,
    areaServed: options.areaServed,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
    },
    knowsLanguage: ["nl-BE", "en-BE"],
    serviceType: options.serviceType,
  };
}

export function serviceJsonLd(path: string, options: ServiceOptions) {
  const businessId = `${abs(path)}#localbusiness`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: options.businessName ?? "Roan Ros",
        url: abs(path),
        address: {
          "@type": "PostalAddress",
          addressCountry: "BE",
        },
      },
      {
        "@type": "Service",
        "@id": `${abs(path)}#service`,
        name: options.serviceName,
        serviceType: options.serviceType,
        description: options.description,
        provider: { "@id": businessId },
        areaServed: options.areaServed,
      },
    ],
  };
}

export function websiteJsonLd(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${abs(path)}#website`,
    name: "Roan Ros",
    url: abs(path),
    inLanguage: ["nl-BE", "en-BE"],
  };
}

export function homeAssistantServiceJsonLd(path: string, serviceName: string) {
  const businessId = `${baseUrl()}/#localbusiness`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: "Roan Ros",
        url: abs(path),
        areaServed: ["Antwerpen", "Berchem", "Deurne"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antwerpen",
          addressCountry: "BE",
        },
      },
      {
        "@type": "Service",
        "@id": `${abs(path)}#service`,
        name: serviceName,
        serviceType: "Home Assistant installatie, configuratie en onderhoud",
        provider: { "@id": businessId },
        areaServed: "Regio Antwerpen",
      },
    ],
  };
}
