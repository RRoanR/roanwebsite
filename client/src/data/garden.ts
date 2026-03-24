import {
  gardenCityRoutePairs,
  gardenRoutePairs,
  gardenServiceRoutePairs,
} from "@shared/siteRoutes";

type Language = "nl" | "en";
type DetailSection = {
  title: Record<Language, string>;
  body: Record<Language, string>;
};

export interface GardenFaq {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface GardenServiceDetail {
  key: keyof typeof gardenServiceRoutePairs;
  slug: string;
  route: (language: Language) => string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
  intro: Record<Language, string>;
  sections: DetailSection[];
  faqs: GardenFaq[];
}

export interface GardenCityDetail {
  key: keyof typeof gardenCityRoutePairs;
  name: string;
  route: (language: Language) => string;
  seoTitle: Record<Language, string>;
  seoDescription: Record<Language, string>;
  intro: Record<Language, string>;
  sections: DetailSection[];
  faqs: GardenFaq[];
}

const commonFaqs: GardenFaq[] = [
  {
    question: {
      nl: "Kan ik starten met een eenmalige tussenkomst?",
      en: "Can I start with a one-off visit?",
    },
    answer: {
      nl: "Ja. Veel klanten starten met een opkuis of snoeibeurt en kiezen daarna pas voor onderhoud volgens schema.",
      en: "Yes. Many clients start with a clean-up or trimming visit and only later move to scheduled maintenance.",
    },
  },
  {
    question: {
      nl: "Werkt u enkel voor particulieren?",
      en: "Do you only work for private clients?",
    },
    answer: {
      nl: "De focus ligt op particuliere tuinen waar persoonlijke opvolging en flexibel onderhoud belangrijk zijn.",
      en: "The focus is on private gardens where personal follow-up and flexible maintenance matter most.",
    },
  },
];

export const gardenServiceDetails: GardenServiceDetail[] = [
  {
    key: "maintenance",
    slug: "maintenance",
    route: (language) => gardenServiceRoutePairs.maintenance[language],
    title: { nl: "Tuinonderhoud", en: "Garden maintenance" },
    shortDescription: {
      nl: "Algemeen onderhoud van uw tuin zodat alles netjes, verzorgd en werkbaar blijft.",
      en: "General garden upkeep that keeps everything neat, healthy, and manageable.",
    },
    seoTitle: {
      nl: "Tuinonderhoud voor particulieren in Edegem en omgeving | Roan Ros",
      en: "Garden maintenance for private clients in Edegem and nearby areas | Roan Ros",
    },
    seoDescription: {
      nl: "Betrouwbaar tuinonderhoud voor particulieren in Edegem, Kontich, Lier, Duffel, Lint en Hove. Eenmalig of volgens schema.",
      en: "Reliable garden maintenance for private clients in Edegem, Kontich, Lier, Duffel, Lint and Hove. One-off or scheduled.",
    },
    intro: {
      nl: "Regelmatig tuinonderhoud voorkomt dat kleine taken grote opkuiswerken worden. Ik help u om uw tuin verzorgd en rustig te houden, zonder dat u alles zelf moet blijven opvolgen.",
      en: "Regular maintenance stops small tasks from becoming major clean-up jobs. I help keep your garden tidy and calm without you having to manage everything yourself.",
    },
    sections: [
      {
        title: { nl: "Wat valt onder tuinonderhoud?", en: "What is included in garden maintenance?" },
        body: {
          nl: "Onkruid verwijderen, borders opfrissen, klein snoeiwerk, opruimen en algemene verzorging van de tuin zodat alles ordelijk blijft ogen.",
          en: "Weeding, border refreshes, smaller trimming jobs, tidying, and general care that keeps the garden looking ordered.",
        },
      },
      {
        title: { nl: "Voor wie is dit interessant?", en: "Who is this for?" },
        body: {
          nl: "Voor particulieren die hun tuin verzorgd willen houden, maar niet elke week tijd hebben om alles zelf bij te houden.",
          en: "For private clients who want to keep their garden in shape but do not have time to stay on top of it every week.",
        },
      },
      {
        title: { nl: "Eenmalig of terugkerend", en: "One-off or recurring" },
        body: {
          nl: "U kan starten met een eenmalige onderhoudsbeurt of meteen kiezen voor een onderhoudsritme dat past bij seizoen, tuinoppervlak en budget.",
          en: "You can begin with a one-off visit or move straight into a maintenance rhythm that fits the season, garden size, and budget.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    key: "trimming",
    slug: "trimming",
    route: (language) => gardenServiceRoutePairs.trimming[language],
    title: { nl: "Hagen en struiken snoeien", en: "Hedge and shrub trimming" },
    shortDescription: {
      nl: "Net snoeiwerk met aandacht voor vorm, veiligheid en gezonde groei.",
      en: "Tidy trimming with attention to shape, safety, and healthy growth.",
    },
    seoTitle: {
      nl: "Hagen en struiken snoeien in Edegem, Kontich en Lier | Roan Ros",
      en: "Hedge and shrub trimming in Edegem, Kontich and Lier | Roan Ros",
    },
    seoDescription: {
      nl: "Laat hagen en struiken netjes snoeien in Edegem, Kontich, Lier, Duffel, Lint en Hove. Verzorgd werk met persoonlijke aanpak.",
      en: "Get your hedges and shrubs trimmed in Edegem, Kontich, Lier, Duffel, Lint and Hove with careful, personal service.",
    },
    intro: {
      nl: "Goed snoeiwerk maakt een tuin rustiger, netter en makkelijker te onderhouden. Ik help met snoeien van hagen en struiken op een manier die zowel netjes als verantwoord aanvoelt.",
      en: "Good trimming makes a garden calmer, tidier, and easier to maintain. I help with hedge and shrub trimming in a way that feels both neat and responsible.",
    },
    sections: [
      {
        title: { nl: "Verzorgde vorm en afwerking", en: "Clean shape and finish" },
        body: {
          nl: "Het doel is een nette tuin die niet overgroeid aanvoelt, zonder overdreven hard in te grijpen waar dat niet nodig is.",
          en: "The goal is a tidy garden that does not feel overgrown, without cutting back harder than necessary.",
        },
      },
      {
        title: { nl: "Snoeiwerk als losse opdracht", en: "Trimming as a standalone job" },
        body: {
          nl: "U hoeft niet meteen een volledig onderhoudspakket te kiezen. Een gerichte snoeibeurt kan al veel verschil maken.",
          en: "You do not need to commit to a full maintenance plan. A targeted trimming visit can already make a big difference.",
        },
      },
      {
        title: { nl: "Combinatie met onderhoud", en: "Combined with maintenance" },
        body: {
          nl: "Vaak wordt snoeiwerk gecombineerd met een opkuis of onderhoudsbeurt zodat de tuin er in één keer opnieuw verzorgd bijligt.",
          en: "Trimming is often combined with a clean-up or maintenance visit so the garden feels refreshed in one go.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    key: "refresh",
    slug: "refresh",
    route: (language) => gardenServiceRoutePairs.refresh[language],
    title: { nl: "Tuin opfrissen", en: "Garden refresh" },
    shortDescription: {
      nl: "Uw tuin opnieuw fris, netjes en aangenaam maken zonder grote werken.",
      en: "Bring your garden back to a fresh, tidy state without major works.",
    },
    seoTitle: {
      nl: "Tuin laten opfrissen in Edegem, Duffel of Hove | Roan Ros",
      en: "Garden refresh service in Edegem, Duffel or Hove | Roan Ros",
    },
    seoDescription: {
      nl: "Tuinopfrissing voor particulieren in Edegem, Kontich, Lier, Duffel, Lint en Hove. Praktische hulp zonder grote verbouwingen.",
      en: "Garden refresh service for private clients in Edegem, Kontich, Lier, Duffel, Lint and Hove. Practical help without major works.",
    },
    intro: {
      nl: "Soms heeft een tuin geen totaalproject nodig, maar wel een gerichte opfrisbeurt. Met opruimen, beperkt snoeiwerk en verzorging krijgt uw tuin opnieuw rust en uitstraling.",
      en: "Sometimes a garden does not need a full redesign, just a focused refresh. Tidying, light trimming, and care can restore calm and improve the overall feel.",
    },
    sections: [
      {
        title: { nl: "Geen grote werken nodig", en: "No major works needed" },
        body: {
          nl: "Een opfrissing richt zich op wat al aanwezig is: opruimen, structureren en opnieuw ordelijk maken.",
          en: "A refresh focuses on what is already there: tidying, structuring, and making it feel orderly again.",
        },
      },
      {
        title: { nl: "Snel zichtbaar resultaat", en: "Fast visible result" },
        body: {
          nl: "Met een gerichte aanpak is het verschil vaak meteen merkbaar, zeker bij tuinen die tijdelijk minder aandacht kregen.",
          en: "With a focused approach the difference is often visible right away, especially in gardens that have had less attention for a while.",
        },
      },
      {
        title: { nl: "Goede voorbereiding op onderhoud", en: "A good base for maintenance" },
        body: {
          nl: "Na een opfrisbeurt is het eenvoudiger om later met een onderhoudsritme te werken als u dat wenst.",
          en: "After a refresh, it is easier to move into a maintenance rhythm later if that is useful.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    key: "planting",
    slug: "planting",
    route: (language) => gardenServiceRoutePairs.planting[language],
    title: { nl: "Beplanting en verzorging", en: "Planting and care" },
    shortDescription: {
      nl: "Aanplanten en verzorgen van bloemen, struiken en kleine plantvakken met een natuurlijke uitstraling.",
      en: "Planting and caring for flowers, shrubs, and smaller beds with a natural feel.",
    },
    seoTitle: {
      nl: "Beplanting en tuinverzorging in Edegem en omgeving | Roan Ros",
      en: "Planting and garden care in Edegem and nearby areas | Roan Ros",
    },
    seoDescription: {
      nl: "Hulp bij beplanting en verzorging van uw tuin in Edegem, Kontich, Lier, Duffel, Lint en Hove.",
      en: "Help with planting and ongoing garden care in Edegem, Kontich, Lier, Duffel, Lint and Hove.",
    },
    intro: {
      nl: "Nieuwe planten of een verzorgder plantvak hoeven geen groot project te zijn. Met gerichte beplanting en opvolging krijgt uw tuin een frissere, aangenamere uitstraling.",
      en: "New planting or better care for an existing bed does not need to become a large project. Focused planting and follow-up can already lift the whole garden.",
    },
    sections: [
      {
        title: { nl: "Kleine, haalbare ingrepen", en: "Small, practical improvements" },
        body: {
          nl: "Het gaat vaak om beperkte zones waar met de juiste planten en verzorging snel een mooier resultaat ontstaat.",
          en: "This often concerns smaller zones where the right planting and care create a stronger result quickly.",
        },
      },
      {
        title: { nl: "Combinatie met opfrissing", en: "Combined with a refresh" },
        body: {
          nl: "Beplanting wordt vaak gecombineerd met een opkuis of opfrisbeurt zodat de hele tuin weer meer samenhang krijgt.",
          en: "Planting is often combined with a clean-up or refresh so the whole garden feels more coherent again.",
        },
      },
      {
        title: { nl: "Nazorg belangrijk", en: "Follow-up matters" },
        body: {
          nl: "Nieuwe aanplanting vraagt ook opvolging. Daarom bekijken we samen of een latere onderhoudsbeurt nuttig is.",
          en: "New planting also needs follow-up. That is why we can review together whether a later maintenance visit would help.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    key: "schedule",
    slug: "schedule",
    route: (language) => gardenServiceRoutePairs.schedule[language],
    title: { nl: "Onderhoud op aanvraag of volgens schema", en: "On request or by schedule" },
    shortDescription: {
      nl: "U kiest tussen eenmalige hulp of terugkerende tuinzorg die past bij uw planning.",
      en: "Choose between one-off help and recurring garden care that fits your schedule.",
    },
    seoTitle: {
      nl: "Tuinonderhoud op aanvraag of volgens schema | Roan Ros",
      en: "Garden maintenance on request or by schedule | Roan Ros",
    },
    seoDescription: {
      nl: "Flexibel tuinonderhoud in Edegem, Kontich, Lier, Duffel, Lint en Hove: op aanvraag of volgens een vast schema.",
      en: "Flexible garden maintenance in Edegem, Kontich, Lier, Duffel, Lint and Hove: on request or on a fixed schedule.",
    },
    intro: {
      nl: "Niet iedereen zoekt dezelfde formule. Sommige klanten willen hulp wanneer het nodig is, anderen willen liever een duidelijk onderhoudsritme. Beide zijn mogelijk.",
      en: "Not everyone wants the same setup. Some clients prefer help when needed, while others want a clear maintenance rhythm. Both are possible.",
    },
    sections: [
      {
        title: { nl: "Op aanvraag", en: "On request" },
        body: {
          nl: "Ideaal als u vooral op piekmomenten hulp nodig heeft, bijvoorbeeld voor snoeiwerk, opkuis of een tuin die tijdelijk minder aandacht kreeg.",
          en: "Ideal if you mainly need help at peak moments, for example with trimming, clean-ups, or after a period with less attention.",
        },
      },
      {
        title: { nl: "Volgens schema", en: "By schedule" },
        body: {
          nl: "Geschikt voor klanten die liever rust willen: een vaste opvolging zodat de tuin niet opnieuw achteruitgaat.",
          en: "Suitable for clients who prefer peace of mind: regular follow-up so the garden does not slide backwards again.",
        },
      },
      {
        title: { nl: "Samen bekijken wat past", en: "Choosing what fits" },
        body: {
          nl: "Na een eerste bezoek kunnen we beter inschatten welke formule het meest logisch is voor uw tuin en verwachtingen.",
          en: "After a first visit, it becomes easier to see which option makes the most sense for your garden and expectations.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    key: "seasonal",
    slug: "seasonal",
    route: (language) => gardenServiceRoutePairs.seasonal[language],
    title: { nl: "Seizoensopkuis", en: "Seasonal clean-up" },
    shortDescription: {
      nl: "Voorjaar of najaar: bladeren, borders en algemene opkuis voor een frisse start.",
      en: "Spring or autumn clean-up for leaves, borders, and a fresh seasonal reset.",
    },
    seoTitle: {
      nl: "Seizoensopkuis van uw tuin in Edegem en omgeving | Roan Ros",
      en: "Seasonal garden clean-up in Edegem and nearby areas | Roan Ros",
    },
    seoDescription: {
      nl: "Seizoensopkuis voor tuinen in Edegem, Kontich, Lier, Duffel, Lint en Hove. Voorjaar of najaar, met nette afwerking.",
      en: "Seasonal garden clean-ups in Edegem, Kontich, Lier, Duffel, Lint and Hove. Spring or autumn, with tidy delivery.",
    },
    intro: {
      nl: "Voorjaar en najaar zijn vaak de momenten waarop een tuin extra aandacht vraagt. Met een gerichte seizoensopkuis ligt uw tuin er opnieuw verzorgd en werkbaar bij.",
      en: "Spring and autumn are often the moments when a garden needs extra attention. A focused seasonal clean-up gets everything back into shape.",
    },
    sections: [
      {
        title: { nl: "Voorjaar", en: "Spring" },
        body: {
          nl: "Opruimen, licht snoeiwerk, borders voorbereiden en alles opnieuw klaar maken voor groei en gebruik.",
          en: "Tidying, light trimming, preparing borders, and getting everything ready for growth and use.",
        },
      },
      {
        title: { nl: "Najaar", en: "Autumn" },
        body: {
          nl: "Bladeren opruimen, tuin proper achterlaten en overgroeide delen weer overzichtelijk maken voor de winterperiode.",
          en: "Leaf clearing, tidying the garden, and bringing overgrown areas back under control before winter.",
        },
      },
      {
        title: { nl: "Ideaal startpunt", en: "A strong starting point" },
        body: {
          nl: "Veel klanten gebruiken een seizoensopkuis als eerste kennismaking om daarna te bekijken of terugkerend onderhoud zinvol is.",
          en: "Many clients use a seasonal clean-up as a first step before deciding whether recurring maintenance makes sense.",
        },
      },
    ],
    faqs: commonFaqs,
  },
];

function cityFaqs(city: string): GardenFaq[] {
  return [
    {
      question: {
        nl: `Werkt u ook in ${city}?`,
        en: `Do you work in ${city}?`,
      },
      answer: {
        nl: `Ja. ${city} behoort tot de regio waar ik tuinonderhoud, snoeiwerk en opfriswerk aanbied voor particulieren.`,
        en: `Yes. ${city} is part of the area where I offer garden maintenance, trimming, and refresh work for private clients.`,
      },
    },
    {
      question: {
        nl: `Kan ik in ${city} starten met een eenmalige opkuis?`,
        en: `Can I start with a one-off clean-up in ${city}?`,
      },
      answer: {
        nl: `Ja. Een eenmalige tussenkomst in ${city} is perfect mogelijk, waarna we indien gewenst later een onderhoudsritme kunnen afspreken.`,
        en: `Yes. A one-off visit in ${city} is absolutely possible, and we can always discuss recurring maintenance later if needed.`,
      },
    },
  ];
}

export const gardenCityDetails: GardenCityDetail[] = [
  {
    key: "edegem",
    name: "Edegem",
    route: (language) => gardenCityRoutePairs.edegem[language],
    seoTitle: {
      nl: "Tuinier in Edegem voor onderhoud en snoeiwerk | Roan Ros",
      en: "Gardener in Edegem for maintenance and trimming | Roan Ros",
    },
    seoDescription: {
      nl: "Tuinonderhoud, snoeiwerk en seizoensopkuis in Edegem voor particulieren. Persoonlijke aanpak en flexibele planning.",
      en: "Garden maintenance, trimming, and seasonal clean-ups in Edegem for private clients. Personal service and flexible planning.",
    },
    intro: {
      nl: "In Edegem help ik particulieren die hun tuin verzorgd willen houden zonder alles zelf te moeten blijven plannen en opvolgen.",
      en: "In Edegem, I help private clients keep their gardens in shape without having to plan and manage every task themselves.",
    },
    sections: [
      {
        title: { nl: "Tuinonderhoud in Edegem", en: "Garden maintenance in Edegem" },
        body: {
          nl: "Van basisonderhoud en opkuis tot gerichte snoeibeurten: het doel is een tuin die er verzorgd blijft uitzien en werkbaar aanvoelt.",
          en: "From regular upkeep and clean-ups to focused trimming visits, the goal is a garden that stays neat and easy to manage.",
        },
      },
      {
        title: { nl: "Voor rustige tuinen zonder zorgen", en: "For calm, manageable gardens" },
        body: {
          nl: "Veel klanten in Edegem zoeken vooral rust: iemand die zorgt dat de tuin niet achteruitgaat en dat piekmomenten worden opgevangen.",
          en: "Many clients in Edegem are mainly looking for peace of mind: someone who keeps the garden from slipping backwards and handles peak moments.",
        },
      },
      {
        title: { nl: "Eenmalig of volgens ritme", en: "One-off or recurring" },
        body: {
          nl: "Een eerste tussenkomst in Edegem kan perfect een kennismaking zijn waarna we bekijken of terugkerend onderhoud nuttig is.",
          en: "A first visit in Edegem can be a simple introduction before deciding whether recurring maintenance would be useful.",
        },
      },
    ],
    faqs: cityFaqs("Edegem"),
  },
  {
    key: "kontich",
    name: "Kontich",
    route: (language) => gardenCityRoutePairs.kontich[language],
    seoTitle: {
      nl: "Tuinonderhoud in Kontich voor particulieren | Roan Ros",
      en: "Garden maintenance in Kontich for private clients | Roan Ros",
    },
    seoDescription: {
      nl: "Betrouwbare tuinier in Kontich voor tuinonderhoud, snoeiwerk, seizoensopkuis en tuinopfrissing.",
      en: "Reliable gardener in Kontich for garden maintenance, trimming, seasonal clean-ups, and refresh work.",
    },
    intro: {
      nl: "In Kontich help ik particulieren met onderhoud en opfrissing van tuinen die netjes en verzorgd moeten blijven, zonder grote verbouwingen.",
      en: "In Kontich, I help private clients maintain and refresh gardens that need to stay neat without turning into major projects.",
    },
    sections: [
      {
        title: { nl: "Praktische hulp in Kontich", en: "Practical help in Kontich" },
        body: {
          nl: "Denk aan onderhoud, hagen snoeien, seizoensopkuis en opfriswerk op momenten dat uw tuin extra aandacht vraagt.",
          en: "Think maintenance, hedge trimming, seasonal clean-ups, and refresh work when your garden needs extra attention.",
        },
      },
      {
        title: { nl: "Persoonlijke opvolging", en: "Personal follow-up" },
        body: {
          nl: "Het gaat niet om anoniem massawerk, maar om een overzichtelijke samenwerking met duidelijke afspraken en verzorgd resultaat.",
          en: "This is not anonymous volume work, but a more personal collaboration with clear agreements and tidy results.",
        },
      },
      {
        title: { nl: "Flexibele formule", en: "Flexible setup" },
        body: {
          nl: "Ook in Kontich kan u kiezen tussen eenmalige hulp en een onderhoudsschema dat past bij uw tuin.",
          en: "In Kontich too, you can choose between one-off help and a maintenance schedule that fits your garden.",
        },
      },
    ],
    faqs: cityFaqs("Kontich"),
  },
  {
    key: "lier",
    name: "Lier",
    route: (language) => gardenCityRoutePairs.lier[language],
    seoTitle: {
      nl: "Tuinier in Lier voor onderhoud en opkuis | Roan Ros",
      en: "Gardener in Lier for maintenance and clean-up | Roan Ros",
    },
    seoDescription: {
      nl: "Tuinonderhoud, opkuis en snoeiwerk in Lier voor particulieren. Flexibel inzetbaar, eenmalig of volgens schema.",
      en: "Garden maintenance, clean-ups, and trimming in Lier for private clients. Flexible service, one-off or scheduled.",
    },
    intro: {
      nl: "Voor klanten in Lier bied ik praktische hulp om tuinen netjes, bruikbaar en onderhoudbaar te houden doorheen de seizoenen.",
      en: "For clients in Lier, I provide practical help to keep gardens tidy, usable, and manageable throughout the seasons.",
    },
    sections: [
      {
        title: { nl: "Onderhoud in Lier", en: "Maintenance in Lier" },
        body: {
          nl: "Een tuin vraagt regelmatige aandacht. In Lier help ik met opkuis, basisonderhoud en gericht snoeiwerk zodat alles ordelijk blijft.",
          en: "A garden needs regular attention. In Lier, I help with clean-ups, baseline upkeep, and targeted trimming to keep things orderly.",
        },
      },
      {
        title: { nl: "Seizoensgebonden hulp", en: "Seasonal support" },
        body: {
          nl: "Voorjaar en najaar zijn vaak de beste momenten om een tuin opnieuw in evenwicht te brengen met een grondige tussenkomst.",
          en: "Spring and autumn are often the best moments to rebalance a garden with a more thorough visit.",
        },
      },
      {
        title: { nl: "Ook voor drukke agenda's", en: "Also for busy schedules" },
        body: {
          nl: "Veel klanten in Lier zoeken vooral ontzorging. Daarom kan de samenwerking volledig worden afgestemd op uw beschikbare tijd.",
          en: "Many clients in Lier mainly want less to worry about. That is why the collaboration can be fully adapted to your schedule.",
        },
      },
    ],
    faqs: cityFaqs("Lier"),
  },
  {
    key: "duffel",
    name: "Duffel",
    route: (language) => gardenCityRoutePairs.duffel[language],
    seoTitle: {
      nl: "Tuinonderhoud in Duffel met persoonlijke aanpak | Roan Ros",
      en: "Garden maintenance in Duffel with a personal approach | Roan Ros",
    },
    seoDescription: {
      nl: "Persoonlijk tuinonderhoud in Duffel voor particulieren: snoeiwerk, seizoensopkuis, opfriswerk en regelmatig onderhoud.",
      en: "Personal garden maintenance in Duffel for private clients: trimming, seasonal clean-ups, refresh work, and regular upkeep.",
    },
    intro: {
      nl: "In Duffel help ik bij het onderhouden van particuliere tuinen die verzorging nodig hebben, maar geen zwaar totaalproject vragen.",
      en: "In Duffel, I help maintain private gardens that need care without requiring a major full-scale project.",
    },
    sections: [
      {
        title: { nl: "Van opkuis tot onderhoud", en: "From clean-ups to regular care" },
        body: {
          nl: "Een tuin kan in Duffel perfect starten met een opfrisbeurt of opkuis en later evolueren naar een onderhoudsformule.",
          en: "In Duffel, a garden can easily start with a refresh or clean-up and later evolve into a more regular maintenance setup.",
        },
      },
      {
        title: { nl: "Verzorgde afwerking", en: "Tidy finish" },
        body: {
          nl: "Ik werk met aandacht voor netheid, zodat uw tuin na de tussenkomst niet alleen onderhouden is maar ook echt opgeruimd aanvoelt.",
          en: "I work with care for tidiness, so your garden feels not only maintained but also genuinely cleaned up afterwards.",
        },
      },
      {
        title: { nl: "Geschikt voor particuliere tuinen", en: "Built around private gardens" },
        body: {
          nl: "De aanpak in Duffel is afgestemd op particuliere tuinen waar overzicht, flexibiliteit en persoonlijke afstemming belangrijk zijn.",
          en: "The approach in Duffel is built around private gardens where clarity, flexibility, and personal coordination matter.",
        },
      },
    ],
    faqs: cityFaqs("Duffel"),
  },
  {
    key: "lint",
    name: "Lint",
    route: (language) => gardenCityRoutePairs.lint[language],
    seoTitle: {
      nl: "Tuinier in Lint voor onderhoud en snoeiwerk | Roan Ros",
      en: "Gardener in Lint for maintenance and trimming | Roan Ros",
    },
    seoDescription: {
      nl: "Tuinonderhoud in Lint voor particulieren. Hulp bij onderhoud, snoeiwerk, opkuis en tuinopfrissing.",
      en: "Garden maintenance in Lint for private clients. Help with upkeep, trimming, clean-ups, and garden refresh work.",
    },
    intro: {
      nl: "In Lint zorg ik voor onderhoud dat praktisch, haalbaar en afgestemd is op wat uw tuin echt nodig heeft.",
      en: "In Lint, I provide maintenance that is practical, realistic, and aligned with what your garden actually needs.",
    },
    sections: [
      {
        title: { nl: "Nette tuinen in Lint", en: "Tidy gardens in Lint" },
        body: {
          nl: "Het doel is geen ingewikkeld plan, maar een tuin die ordelijk en verzorgd aanvoelt door regelmatige of gerichte tussenkomsten.",
          en: "The goal is not an overly complicated plan, but a garden that feels orderly and well cared for through regular or focused visits.",
        },
      },
      {
        title: { nl: "Snoeien en opkuisen", en: "Trimming and clean-up work" },
        body: {
          nl: "Ook als de basis nog goed zit maar uw tuin tijdelijk wat achterstand heeft, kan gericht snoei- en opkuiswerk veel oplossen.",
          en: "Even when the base is still good, focused trimming and clean-up work can solve a lot if the garden has fallen behind a little.",
        },
      },
      {
        title: { nl: "Onderhoud volgens uw ritme", en: "Maintenance at your rhythm" },
        body: {
          nl: "Voor klanten in Lint bekijken we samen of eenmalige hulp volstaat of dat een onderhoudsritme zinvoller is.",
          en: "For clients in Lint, we can review together whether one-off help is enough or a maintenance rhythm makes more sense.",
        },
      },
    ],
    faqs: cityFaqs("Lint"),
  },
  {
    key: "hove",
    name: "Hove",
    route: (language) => gardenCityRoutePairs.hove[language],
    seoTitle: {
      nl: "Tuinonderhoud in Hove voor particulieren | Roan Ros",
      en: "Garden maintenance in Hove for private clients | Roan Ros",
    },
    seoDescription: {
      nl: "Betrouwbare tuinier in Hove voor onderhoud, beplanting, opfriswerk en seizoensopkuis.",
      en: "Reliable gardener in Hove for maintenance, planting, refresh work, and seasonal clean-ups.",
    },
    intro: {
      nl: "In Hove help ik om particuliere tuinen opnieuw rust en structuur te geven via onderhoud, opfriswerk en verzorgde opvolging.",
      en: "In Hove, I help bring calm and structure back to private gardens through maintenance, refresh work, and careful follow-up.",
    },
    sections: [
      {
        title: { nl: "Onderhoud en opfrissing in Hove", en: "Maintenance and refresh work in Hove" },
        body: {
          nl: "Van onderhoud en snoeiwerk tot beplanting en seizoensopkuis: de dienstverlening in Hove blijft praktisch en helder.",
          en: "From maintenance and trimming to planting and seasonal clean-ups, the service in Hove stays practical and straightforward.",
        },
      },
      {
        title: { nl: "Voor tuinen die meer aandacht vragen", en: "For gardens that need more attention" },
        body: {
          nl: "Wanneer een tuin wat minder werd opgevolgd, kan een gerichte tussenkomst veel verschil maken zonder dat u meteen groot moet denken.",
          en: "When a garden has had less attention, a focused visit can make a real difference without turning into a major project.",
        },
      },
      {
        title: { nl: "Heldere samenwerking", en: "Clear collaboration" },
        body: {
          nl: "Ook in Hove staat duidelijke communicatie centraal: wat doen we, wanneer doen we het en welke volgende stap is logisch?",
          en: "In Hove too, clear communication matters: what gets done, when it happens, and what the logical next step is.",
        },
      },
    ],
    faqs: cityFaqs("Hove"),
  },
];

export const gardenServices = gardenServiceDetails.map((service) => ({
  slug: service.slug,
  key: service.key,
  title: service.title,
  description: service.shortDescription,
  href: service.route,
}));

export const gardenAreas = gardenCityDetails.map((city) => ({
  key: city.key,
  name: city.name,
  body: {
    nl: city.intro.nl,
    en: city.intro.en,
  },
  href: city.route,
}));

export const gardenFaqs: GardenFaq[] = [
  ...commonFaqs,
  {
    question: {
      nl: "In welke gemeenten werkt u als tuinier?",
      en: "Which municipalities do you serve as a gardener?",
    },
    answer: {
      nl: "De kernregio bestaat uit Edegem, Kontich, Lier, Duffel, Lint en Hove.",
      en: "The core service area covers Edegem, Kontich, Lier, Duffel, Lint and Hove.",
    },
  },
  {
    question: {
      nl: "Kan ik een offerte aanvragen voor onderhoud op regelmatige basis?",
      en: "Can I request a quote for recurring maintenance?",
    },
    answer: {
      nl: "Ja. Na een eerste intake bekijken we welk onderhoudsritme het best past bij uw tuin.",
      en: "Yes. After an initial intake we can review which maintenance rhythm suits your garden best.",
    },
  },
];

export function gardenLinks(language: Language) {
  return {
    landing: gardenRoutePairs.landing[language],
    services: gardenRoutePairs.services[language],
    approach: gardenRoutePairs.approach[language],
    region: gardenRoutePairs.region[language],
    contact: gardenRoutePairs.contact[language],
    faq: gardenRoutePairs.faq[language],
  };
}

export function getGardenServiceByKey(key: keyof typeof gardenServiceRoutePairs) {
  return gardenServiceDetails.find((service) => service.key === key) ?? null;
}

export function getGardenCityByKey(key: keyof typeof gardenCityRoutePairs) {
  return gardenCityDetails.find((city) => city.key === key) ?? null;
}
