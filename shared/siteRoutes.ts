export type RouteLanguage = "nl" | "en";

export interface LocalizedRoutePair {
  nl: string;
  en: string;
}

export const itConsultancyPath = "/it-consultancy/";
export const domoticaOverviewPath = "/it-consultancy/domotica/";
export const homeAssistantPath = "/it-consultancy/domotica/home-assistant/";
export const homeAssistantFaqPath = "/it-consultancy/domotica/home-assistant/faq/";
export const legacyDomoticaOverviewPath = "/domotica/";
export const legacyHomeAssistantPath = "/domotica/home-assistant/";
export const legacyHomeAssistantFaqPath = "/domotica/home-assistant/faq/";

export const gardenRoutePairs = {
  landing: {
    nl: "/tuinonderhoud/",
    en: "/en/garden-maintenance/",
  },
  services: {
    nl: "/tuinonderhoud/diensten/",
    en: "/en/garden-maintenance/services/",
  },
  approach: {
    nl: "/tuinonderhoud/werkwijze/",
    en: "/en/garden-maintenance/approach/",
  },
  region: {
    nl: "/tuinonderhoud/regio/",
    en: "/en/garden-maintenance/region/",
  },
  contact: {
    nl: "/tuinonderhoud/contact/",
    en: "/en/garden-maintenance/contact/",
  },
  faq: {
    nl: "/tuinonderhoud/faq/",
    en: "/en/garden-maintenance/faq/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const gardenServiceRoutePairs = {
  maintenance: {
    nl: "/tuinonderhoud/diensten/tuinonderhoud/",
    en: "/en/garden-maintenance/services/garden-maintenance/",
  },
  trimming: {
    nl: "/tuinonderhoud/diensten/hagen-en-struiken-snoeien/",
    en: "/en/garden-maintenance/services/hedge-and-shrub-trimming/",
  },
  seasonal: {
    nl: "/tuinonderhoud/diensten/seizoensopkuis/",
    en: "/en/garden-maintenance/services/seasonal-clean-up/",
  },
  refresh: {
    nl: "/tuinonderhoud/diensten/tuin-opfrissen/",
    en: "/en/garden-maintenance/services/garden-refresh/",
  },
  planting: {
    nl: "/tuinonderhoud/diensten/beplanting-en-verzorging/",
    en: "/en/garden-maintenance/services/planting-and-care/",
  },
  schedule: {
    nl: "/tuinonderhoud/diensten/onderhoud-op-aanvraag-of-schema/",
    en: "/en/garden-maintenance/services/on-request-or-by-schedule/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const gardenCityRoutePairs = {
  edegem: {
    nl: "/tuinonderhoud/regio/edegem/",
    en: "/en/garden-maintenance/region/edegem/",
  },
  kontich: {
    nl: "/tuinonderhoud/regio/kontich/",
    en: "/en/garden-maintenance/region/kontich/",
  },
  lier: {
    nl: "/tuinonderhoud/regio/lier/",
    en: "/en/garden-maintenance/region/lier/",
  },
  duffel: {
    nl: "/tuinonderhoud/regio/duffel/",
    en: "/en/garden-maintenance/region/duffel/",
  },
  lint: {
    nl: "/tuinonderhoud/regio/lint/",
    en: "/en/garden-maintenance/region/lint/",
  },
  hove: {
    nl: "/tuinonderhoud/regio/hove/",
    en: "/en/garden-maintenance/region/hove/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const localizedRoutePairs: LocalizedRoutePair[] = [
  ...Object.values(gardenRoutePairs),
  ...Object.values(gardenServiceRoutePairs),
  ...Object.values(gardenCityRoutePairs),
];

export function normalizePath(path: string) {
  const [pathname] = path.split(/[?#]/, 1);
  if (!pathname) return "/";
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function findLocalizedRoute(path: string) {
  const normalized = normalizePath(path);
  return localizedRoutePairs.find(
    (pair) => normalizePath(pair.nl) === normalized || normalizePath(pair.en) === normalized,
  );
}

export function localizedGardenPath(
  key: keyof typeof gardenRoutePairs,
  language: RouteLanguage,
) {
  return gardenRoutePairs[key][language];
}

export function localizedGardenServicePath(
  key: keyof typeof gardenServiceRoutePairs,
  language: RouteLanguage,
) {
  return gardenServiceRoutePairs[key][language];
}

export function localizedGardenCityPath(
  key: keyof typeof gardenCityRoutePairs,
  language: RouteLanguage,
) {
  return gardenCityRoutePairs[key][language];
}

export const seoSitemapPaths = [
  "/",
  "/?lang=en",
  "/contact/",
  "/contact/?lang=en",
  itConsultancyPath,
  `${itConsultancyPath}?lang=en`,
  "/privacy-en-bewaring/",
  "/privacy-en-bewaring/?lang=en",
  domoticaOverviewPath,
  `${domoticaOverviewPath}?lang=en`,
  homeAssistantPath,
  `${homeAssistantPath}?lang=en`,
  homeAssistantFaqPath,
  `${homeAssistantFaqPath}?lang=en`,
  `${homeAssistantPath}wat-is-home-assistant/`,
  `${homeAssistantPath}wat-is-home-assistant/?lang=en`,
  `${homeAssistantPath}installatie-vs-configuratie/`,
  `${homeAssistantPath}installatie-vs-configuratie/?lang=en`,
  `${homeAssistantPath}zigbee-zwave-matter-thread/`,
  `${homeAssistantPath}zigbee-zwave-matter-thread/?lang=en`,
  `${homeAssistantPath}dashboards-tablet-wandpaneel/`,
  `${homeAssistantPath}dashboards-tablet-wandpaneel/?lang=en`,
  `${homeAssistantPath}energie-monitoring-zonnepanelen-laadpaal/`,
  `${homeAssistantPath}energie-monitoring-zonnepanelen-laadpaal/?lang=en`,
  `${homeAssistantPath}beveiliging-meldingen-aanwezigheid/`,
  `${homeAssistantPath}beveiliging-meldingen-aanwezigheid/?lang=en`,
  `${homeAssistantPath}onderhoud-back-ups-updates/`,
  `${homeAssistantPath}onderhoud-back-ups-updates/?lang=en`,
  `${homeAssistantPath}slimme-verlichting-sensoren-scenes/`,
  `${homeAssistantPath}slimme-verlichting-sensoren-scenes/?lang=en`,
  `${homeAssistantPath}antwerpen/`,
  `${homeAssistantPath}antwerpen/?lang=en`,
  `${homeAssistantPath}berchem/`,
  `${homeAssistantPath}berchem/?lang=en`,
  `${homeAssistantPath}deurne/`,
  `${homeAssistantPath}deurne/?lang=en`,
  gardenRoutePairs.landing.nl,
  gardenRoutePairs.landing.en,
  gardenRoutePairs.services.nl,
  gardenRoutePairs.services.en,
  gardenRoutePairs.approach.nl,
  gardenRoutePairs.approach.en,
  gardenRoutePairs.region.nl,
  gardenRoutePairs.region.en,
  gardenRoutePairs.contact.nl,
  gardenRoutePairs.contact.en,
  gardenRoutePairs.faq.nl,
  gardenRoutePairs.faq.en,
  ...Object.values(gardenServiceRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(gardenCityRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
];
