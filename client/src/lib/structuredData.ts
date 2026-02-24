interface Crumb {
  name: string;
  path: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const DEFAULT_BASE_URL = "https://www.roanros.be";

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

