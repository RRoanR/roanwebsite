export type RouteLanguage = "nl" | "en";

export interface LocalizedRoutePair {
  nl: string;
  en: string;
}

export const siteRoutePairs = {
  home: {
    nl: "/",
    en: "/en/",
  },
  contact: {
    nl: "/contact/",
    en: "/en/contact/",
  },
  itConsultancy: {
    nl: "/it-consultancy/",
    en: "/en/it-consulting/",
  },
  privacy: {
    nl: "/privacy-en-bewaring/",
    en: "/en/privacy-data-retention/",
  },
  homeAutomationOverview: {
    nl: "/it-consultancy/domotica/",
    en: "/en/it-consulting/home-automation/",
  },
  homeAssistant: {
    nl: "/it-consultancy/domotica/home-assistant/",
    en: "/en/it-consulting/home-assistant/",
  },
  homeAssistantFaq: {
    nl: "/it-consultancy/domotica/home-assistant/faq/",
    en: "/en/it-consulting/home-assistant/faq/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const homeAssistantTopicRoutePairs = {
  whatIsHomeAssistant: {
    nl: "/it-consultancy/domotica/home-assistant/wat-is-home-assistant/",
    en: "/en/it-consulting/home-assistant/what-is-home-assistant/",
  },
  installationVsConfiguration: {
    nl: "/it-consultancy/domotica/home-assistant/installatie-vs-configuratie/",
    en: "/en/it-consulting/home-assistant/installation-vs-configuration/",
  },
  protocols: {
    nl: "/it-consultancy/domotica/home-assistant/zigbee-zwave-matter-thread/",
    en: "/en/it-consulting/home-assistant/zigbee-vs-z-wave-vs-matter-thread/",
  },
  dashboards: {
    nl: "/it-consultancy/domotica/home-assistant/dashboards-tablet-wandpaneel/",
    en: "/en/it-consulting/home-assistant/dashboards-tablet-wall-panel/",
  },
  energy: {
    nl: "/it-consultancy/domotica/home-assistant/energie-monitoring-zonnepanelen-laadpaal/",
    en: "/en/it-consulting/home-assistant/energy-monitoring-solar-ev-charger/",
  },
  security: {
    nl: "/it-consultancy/domotica/home-assistant/beveiliging-meldingen-aanwezigheid/",
    en: "/en/it-consulting/home-assistant/security-notifications-presence/",
  },
  maintenance: {
    nl: "/it-consultancy/domotica/home-assistant/onderhoud-back-ups-updates/",
    en: "/en/it-consulting/home-assistant/maintenance-backups-updates/",
  },
  lighting: {
    nl: "/it-consultancy/domotica/home-assistant/slimme-verlichting-sensoren-scenes/",
    en: "/en/it-consulting/home-assistant/smart-lighting-sensors-scenes/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const homeAssistantCityRoutePairs = {
  antwerp: {
    nl: "/it-consultancy/domotica/home-assistant/antwerpen/",
    en: "/en/it-consulting/home-assistant/antwerp/",
  },
  berchem: {
    nl: "/it-consultancy/domotica/home-assistant/berchem/",
    en: "/en/it-consulting/home-assistant/berchem/",
  },
  deurne: {
    nl: "/it-consultancy/domotica/home-assistant/deurne/",
    en: "/en/it-consulting/home-assistant/deurne/",
  },
} satisfies Record<string, LocalizedRoutePair>;

export const legacyDomoticaOverviewPath = "/domotica/";
export const legacyHomeAssistantPath = "/domotica/home-assistant/";
export const legacyHomeAssistantFaqPath = "/domotica/home-assistant/faq/";
export const legacyHomeAssistantFaqHtmlPaths = [
  "/domotica/home-assistant/faq.html",
  "/it-consultancy/domotica/home-assistant/faq.html",
] as const;

export const homeAssistantLegacyBasePaths = [
  legacyHomeAssistantPath,
  siteRoutePairs.homeAssistant.nl,
] as const;

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
  ...Object.values(siteRoutePairs),
  ...Object.values(homeAssistantTopicRoutePairs),
  ...Object.values(homeAssistantCityRoutePairs),
  ...Object.values(gardenRoutePairs),
  ...Object.values(gardenServiceRoutePairs),
  ...Object.values(gardenCityRoutePairs),
];

export const itConsultancyPath = siteRoutePairs.itConsultancy.nl;
export const domoticaOverviewPath = siteRoutePairs.homeAutomationOverview.nl;
export const homeAssistantPath = siteRoutePairs.homeAssistant.nl;
export const homeAssistantFaqPath = siteRoutePairs.homeAssistantFaq.nl;

export function normalizePath(path: string) {
  const [pathname] = path.split(/[?#]/, 1);
  if (!pathname) return "/";
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function slugFromPath(path: string) {
  const segments = normalizePath(path).split("/").filter(Boolean);
  return segments.at(-1) ?? "";
}

export function findLocalizedRoute(path: string) {
  const normalized = normalizePath(path);
  return localizedRoutePairs.find(
    (pair) => normalizePath(pair.nl) === normalized || normalizePath(pair.en) === normalized,
  );
}

function findHomeAssistantSlugPair(path: string) {
  const normalized = normalizePath(path);

  for (const basePath of homeAssistantLegacyBasePaths) {
    const normalizedBase = normalizePath(basePath);
    if (!normalized.startsWith(normalizedBase)) continue;

    const slug = normalized.slice(normalizedBase.length).replace(/\/$/, "");
    if (!slug || slug === "faq") continue;

    return [...Object.values(homeAssistantTopicRoutePairs), ...Object.values(homeAssistantCityRoutePairs)].find(
      (pair) => slugFromPath(pair.nl) === slug || slugFromPath(pair.en) === slug,
    );
  }

  return null;
}

export function routeLanguageFromPath(path: string): RouteLanguage | null {
  const normalized = normalizePath(path);
  const pair = findLocalizedRoute(normalized);
  if (pair) {
    return normalizePath(pair.en) === normalized ? "en" : "nl";
  }

  const canonical = resolveCanonicalRoute(normalized);
  if (!canonical) return null;
  return canonical.startsWith("/en/") ? "en" : "nl";
}

export function resolveCanonicalRoute(path: string, preferredLanguage?: RouteLanguage) {
  const normalized = normalizePath(path);
  const pair = findLocalizedRoute(normalized);

  if (pair) {
    if (preferredLanguage && normalizePath(pair[preferredLanguage]) !== normalized) {
      return pair[preferredLanguage];
    }
    return normalizePath(pair.en) === normalized ? pair.en : pair.nl;
  }

  if (normalized === normalizePath(legacyDomoticaOverviewPath)) {
    return siteRoutePairs.homeAutomationOverview[preferredLanguage ?? "nl"];
  }

  if (normalized === normalizePath(legacyHomeAssistantPath)) {
    return siteRoutePairs.homeAssistant[preferredLanguage ?? "nl"];
  }

  if (
    normalized === normalizePath(legacyHomeAssistantFaqPath) ||
    legacyHomeAssistantFaqHtmlPaths.some((legacyPath) => normalizePath(legacyPath) === normalized)
  ) {
    return siteRoutePairs.homeAssistantFaq[preferredLanguage ?? "nl"];
  }

  const slugPair = findHomeAssistantSlugPair(normalized);
  if (slugPair) {
    return slugPair[preferredLanguage ?? "nl"];
  }

  return null;
}

export function localizedSitePath(
  key: keyof typeof siteRoutePairs,
  language: RouteLanguage,
) {
  return siteRoutePairs[key][language];
}

export function localizedHomeAssistantTopicPath(
  key: keyof typeof homeAssistantTopicRoutePairs,
  language: RouteLanguage,
) {
  return homeAssistantTopicRoutePairs[key][language];
}

export function localizedHomeAssistantCityPath(
  key: keyof typeof homeAssistantCityRoutePairs,
  language: RouteLanguage,
) {
  return homeAssistantCityRoutePairs[key][language];
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
  ...Object.values(siteRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(homeAssistantTopicRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(homeAssistantCityRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(gardenRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(gardenServiceRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
  ...Object.values(gardenCityRoutePairs).flatMap((pair) => [pair.nl, pair.en]),
];
