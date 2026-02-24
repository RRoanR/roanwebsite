import type { ClusterFaqItem, ClusterSection } from "@/components/ClusterArticlePage";

type Language = "nl" | "en";

export interface PlaatsTopicData {
  slug: string;
  htmlSlug: string;
  path: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  intro: Record<Language, string>;
  sections: ClusterSection[];
  faqs?: ClusterFaqItem[];
}

export interface PlaatsFaqCategory {
  title: Record<Language, string>;
  items: Array<ClusterFaqItem & { link: string }>;
}

export const plaatsTopics: PlaatsTopicData[] = [
  {
    slug: "wat-is-een-plaatsbeschrijving",
    htmlSlug: "wat-is-een-plaatsbeschrijving.html",
    path: "/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving/",
    title: { nl: "Wat is een plaatsbeschrijving?", en: "What is a condition report?" },
    description: {
      nl: "Wat een plaatsbeschrijving precies is en waarom ze essentieel is bij huur, werken en objectieve vergelijking.",
      en: "What a condition report is and why it is essential for rental, works, and objective comparison.",
    },
    intro: {
      nl: "Een plaatsbeschrijving beschrijft de staat van een pand op een bepaald moment zodat latere vergelijking objectief mogelijk blijft.",
      en: "A condition report documents a property's state at a specific moment so later comparison remains objective.",
    },
    sections: [
      {
        title: { nl: "Waarom is dit belangrijk?", en: "Why is this important?" },
        body: {
          nl: "Het voorkomt discussie over bestaande versus nieuwe schade en creëert een gedeelde referentie voor alle partijen.",
          en: "It prevents disputes about pre-existing versus new damage and creates a shared reference for all parties.",
        },
      },
      {
        title: { nl: "Wat maakt een rapport bruikbaar?", en: "What makes a report usable?" },
        body: {
          nl: "Detail per ruimte, heldere foto's, consistente terminologie en tegensprekelijke opmaak zorgen voor sterke bewijswaarde.",
          en: "Room-level detail, clear photos, consistent terminology, and adversarial setup create strong evidentiary value.",
        },
      },
      {
        title: { nl: "Lees verder", en: "Read further" },
        body: {
          nl: "Bekijk ook wetgeving per gewest, voorbereiding en kosten om meteen de juiste stappen te zetten.",
          en: "Also review regional legislation, preparation, and costs to take the right next steps immediately.",
        },
      },
    ],
    faqs: [
      {
        question: { nl: "Is een plaatsbeschrijving verplicht?", en: "Is a condition report mandatory?" },
        answer: {
          nl: "Bij woninghuur gelden verplichtingen en termijnen per gewest; de exacte toepassing verschilt regionaal.",
          en: "For residential rental, obligations and timelines apply per region; exact implementation differs regionally.",
        },
      },
      {
        question: { nl: "Hoe gedetailleerd moet het zijn?", en: "How detailed should it be?" },
        answer: {
          nl: "Hoe concreter per ruimte en onderdeel, hoe sterker het rapport in vergelijking en afhandeling.",
          en: "The more concrete per room and component, the stronger the report for comparison and settlement.",
        },
      },
    ],
  },
  {
    slug: "wetgeving-per-gewest",
    htmlSlug: "wetgeving-per-gewest.html",
    path: "/plaatsbeschrijvingen/wetgeving-per-gewest/",
    title: { nl: "Wetgeving per gewest", en: "Legislation by region" },
    description: {
      nl: "Overzicht van kernprincipes, termijnen en praktische impact voor Vlaanderen, Brussel en Wallonie.",
      en: "Overview of core principles, timelines, and practical impact for Flanders, Brussels, and Wallonia.",
    },
    intro: {
      nl: "Woninghuur is geregionaliseerd. Dat betekent vergelijkbare principes met eigen procedurele accenten per gewest.",
      en: "Residential tenancy is regionalized. Principles are similar, but procedures differ by region.",
    },
    sections: [
      {
        title: { nl: "Kernprincipes", en: "Core principles" },
        body: {
          nl: "Detail, tegenspraak en tijdigheid zijn in alle gewesten essentieel voor een juridisch bruikbaar dossier.",
          en: "Detail, adversarial process, and timeliness are essential in all regions for a legally useful file.",
        },
      },
      {
        title: { nl: "Vlaanderen", en: "Flanders" },
        body: {
          nl: "Duidelijke termijnen en verplichtingen bij woninghuur, met nadruk op correcte opmaak aan de start.",
          en: "Clear timelines and obligations for rental housing, with focus on proper entry reporting.",
        },
      },
      {
        title: { nl: "Brussels Hoofdstedelijk Gewest", en: "Brussels Capital Region" },
        body: {
          nl: "Vergelijkbare verplichting met eigen procedureaccenten en timing in de praktijk.",
          en: "Comparable obligation with region-specific procedural accents and timing.",
        },
      },
      {
        title: { nl: "Wallonie", en: "Wallonia" },
        body: {
          nl: "Gelijkaardige doelstelling: objectieve starttoestand vastleggen om latere discussie te beperken.",
          en: "Similar objective: record objective initial condition to limit later disputes.",
        },
      },
      {
        title: { nl: "Praktische betekenis", en: "Practical implications" },
        body: {
          nl: "Regio en context bepalen timing en aanpak; start daarom altijd met de juiste regionale checklist.",
          en: "Region and context determine timing and approach; always start with the right regional checklist.",
        },
      },
    ],
  },
  {
    slug: "plaatsbeschrijving-bij-huur",
    htmlSlug: "plaatsbeschrijving-bij-huur.html",
    path: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur/",
    title: { nl: "Plaatsbeschrijving bij huur", en: "Condition report for rental" },
    description: {
      nl: "Intrede en uittrede praktisch uitgelegd: timing, inhoud, valkuilen en checklist voor huurcontext.",
      en: "Entry and exit explained practically: timing, content, pitfalls, and checklist for rental context.",
    },
    intro: {
      nl: "Een intredende en uittredende plaatsbeschrijving vormen samen de basis voor objectieve eindafrekening.",
      en: "Entry and exit reports together form the baseline for objective final settlement.",
    },
    sections: [
      {
        title: { nl: "Ingaande plaatsbeschrijving", en: "Entry report" },
        body: {
          nl: "Idealiter voor ingebruikname: toestand per ruimte, duidelijke foto's, meterstanden en sleuteloverzicht.",
          en: "Ideally before occupancy: room-level condition, clear photos, meter readings, and key inventory.",
        },
      },
      {
        title: { nl: "Uitgaande plaatsbeschrijving", en: "Exit report" },
        body: {
          nl: "Vergelijk systematisch met intrede om slijtage, schade en afspraken correct te onderscheiden.",
          en: "Compare systematically with entry report to distinguish wear, damage, and contractual obligations.",
        },
      },
      {
        title: { nl: "Veelgemaakte fouten", en: "Common mistakes" },
        body: {
          nl: "Te vage beschrijvingen, onvolledige fotoreeks of ontbrekende sleutelmomenten zorgen voor vermijdbare discussies.",
          en: "Overly vague descriptions, incomplete photos, or missing key details create avoidable disputes.",
        },
      },
      {
        title: { nl: "Snelle checklist", en: "Quick checklist" },
        body: {
          nl: "Toegang tot alle ruimtes, zichtbare schade, meters, sleutels en aanwezige partijen vooraf bevestigen.",
          en: "Confirm access, visible defects, meter values, keys, and party attendance before inspection.",
        },
      },
    ],
    faqs: [
      {
        question: { nl: "Moeten huurder en verhuurder aanwezig zijn?", en: "Must tenant and landlord be present?" },
        answer: {
          nl: "Bij voorkeur wel (of vertegenwoordigd) zodat het verslag tegensprekelijk blijft.",
          en: "Preferably yes (or represented) so the report remains adversarial.",
        },
      },
      {
        question: { nl: "Wat bij geen akkoord?", en: "What if there is no agreement?" },
        answer: {
          nl: "Leg verschillen expliciet vast en volg de juiste procedure volgens context en gewest.",
          en: "Record differences explicitly and follow the correct procedure for context and region.",
        },
      },
    ],
  },
  {
    slug: "plaatsbeschrijving-bij-werken",
    htmlSlug: "plaatsbeschrijving-bij-werken.html",
    path: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken/",
    title: { nl: "Plaatsbeschrijving bij werken", en: "Condition report for works" },
    description: {
      nl: "Waarom voor- en na-opname bij werken discussies over schade voorkomt en hoe scope bepaald wordt.",
      en: "Why pre- and post-works reporting prevents damage disputes and how to define scope.",
    },
    intro: {
      nl: "Bij bouw- en renovatiewerken beschermt een voorafgaande opname alle betrokken partijen tegen discussie achteraf.",
      en: "For construction and renovation, a prior report protects all involved parties from later disputes.",
    },
    sections: [
      {
        title: { nl: "Voor aanvang werken", en: "Before works" },
        body: {
          nl: "Leg bestaande scheuren en kwetsbare zones vast om later onderscheid tussen oud en nieuw correct te maken.",
          en: "Record existing cracks and vulnerable zones to distinguish old from new issues later.",
        },
      },
      {
        title: { nl: "Na uitvoering", en: "After execution" },
        body: {
          nl: "Vergelijk met beginsituatie om eventuele impact objectief te duiden met dezelfde structuur.",
          en: "Compare with baseline to objectively assess impact using the same structure.",
        },
      },
      {
        title: { nl: "Wat nemen we mee in scope?", en: "What do we include in scope?" },
        body: {
          nl: "Gevels, gemene muren, trappenhallen en andere risicozones volgens type werken en omgeving.",
          en: "Facades, shared walls, stairwells, and other risk zones depending on work type and surroundings.",
        },
      },
      {
        title: { nl: "Checklist vooraf", en: "Pre-checklist" },
        body: {
          nl: "Afstemming met betrokken partijen, toegang, planning en heldere afbakening van opnamegebied.",
          en: "Align parties, access, schedule, and clear boundaries of inspection area.",
        },
      },
    ],
  },
  {
    slug: "kosten-en-wie-betaalt",
    htmlSlug: "kosten-en-wie-betaalt.html",
    path: "/plaatsbeschrijvingen/kosten-en-wie-betaalt/",
    title: { nl: "Kosten en wie betaalt", en: "Costs and who pays" },
    description: {
      nl: "Kostenlogica bij huur, werken en vaststelling met praktische afspraken om discussie te vermijden.",
      en: "Cost logic for rental, works, and findings with practical agreements to avoid disputes.",
    },
    intro: {
      nl: "Prijs en kostverdeling hangen af van context, scope en regionale regels; duidelijke afspraken vooraf zijn cruciaal.",
      en: "Pricing and cost allocation depend on context, scope, and regional rules; clear upfront agreements are crucial.",
    },
    sections: [
      {
        title: { nl: "Bij huur", en: "For rental" },
        body: {
          nl: "Kosten worden vaak gedeeld, met aandacht voor regionale juridische context en contractuele afspraken.",
          en: "Costs are often shared, considering regional legal context and contractual agreements.",
        },
      },
      {
        title: { nl: "Bij werken", en: "For works" },
        body: {
          nl: "Meestal betaalt de initiatiefnemer van de werken, met duidelijke scope en timingafspraken.",
          en: "Typically paid by the initiating party, with explicit scope and scheduling agreements.",
        },
      },
      {
        title: { nl: "Bij vaststelling", en: "For findings" },
        body: {
          nl: "De context bepaalt de opdrachtvorm en wie de kost initieel draagt.",
          en: "Context determines assignment format and who initially bears the cost.",
        },
      },
      {
        title: { nl: "Discussie vermijden", en: "Avoid disputes" },
        body: {
          nl: "Leg inbegrepen scope, uitzonderingen en rapportagevorm vooraf schriftelijk vast.",
          en: "Document included scope, exceptions, and reporting format in writing upfront.",
        },
      },
    ],
  },
  {
    slug: "voorbereiding-checklist",
    htmlSlug: "voorbereiding-checklist.html",
    path: "/plaatsbeschrijvingen/voorbereiding-checklist/",
    title: { nl: "Voorbereiding en checklist", en: "Preparation and checklist" },
    description: {
      nl: "Praktische checklist om de plaatsbeschrijving vlot, volledig en juridisch bruikbaar te laten verlopen.",
      en: "Practical checklist to keep the condition report smooth, complete, and legally useful.",
    },
    intro: {
      nl: "Goede voorbereiding verlaagt tijdverlies en verhoogt de kwaliteit van observaties en fotodocumentatie.",
      en: "Proper preparation reduces delays and improves the quality of observations and photo documentation.",
    },
    sections: [
      {
        title: { nl: "1) Praktisch vooraf", en: "1) Practical setup" },
        body: {
          nl: "Maak alle ruimtes toegankelijk, zorg voor voldoende licht en vermijd obstakels in kritieke zones.",
          en: "Make all spaces accessible, ensure adequate light, and remove obstacles in critical areas.",
        },
      },
      {
        title: { nl: "2) Meterstanden en sleutels", en: "2) Meter readings and keys" },
        body: {
          nl: "Verzamel meterstanden, sleutelsets en toegangsmiddelen vooraf zodat niets ontbreekt bij opname.",
          en: "Collect meter values, key sets, and access tools beforehand so nothing is missing during inspection.",
        },
      },
      {
        title: { nl: "3) Tijdens de rondgang", en: "3) During walkthrough" },
        body: {
          nl: "Werk systematisch per ruimte en noteer relevante details meteen om interpretatie achteraf te vermijden.",
          en: "Work systematically per room and capture relevant details immediately to avoid later interpretation issues.",
        },
      },
      {
        title: { nl: "4) Foto's", en: "4) Photos" },
        body: {
          nl: "Combineer overzichts- en detailbeelden met consistente standpunten voor sterke vergelijkbaarheid.",
          en: "Combine overview and detail photos with consistent angles for strong comparability.",
        },
      },
    ],
  },
  {
    slug: "vaststelling-vs-plaatsbeschrijving",
    htmlSlug: "vaststelling-vs-plaatsbeschrijving.html",
    path: "/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving/",
    title: { nl: "Vaststelling vs plaatsbeschrijving", en: "Finding vs condition report" },
    description: {
      nl: "Praktische keuzehulp tussen vaststelling en plaatsbeschrijving bij schade, huur en werken.",
      en: "Practical decision guide between legal finding and condition report for damage, rental, and works.",
    },
    intro: {
      nl: "Beide documenten lijken op elkaar, maar verschillen in doel, timing en bewijsfunctie.",
      en: "Both documents look similar but differ in purpose, timing, and evidence role.",
    },
    sections: [
      {
        title: { nl: "Begrippen", en: "Definitions" },
        body: {
          nl: "Een plaatsbeschrijving vergelijkt toestand in de tijd; een vaststelling legt een situatie op een moment objectief vast.",
          en: "A condition report compares state over time; a legal finding records a situation objectively at one moment.",
        },
      },
      {
        title: { nl: "Keuzehulp", en: "Decision guide" },
        body: {
          nl: "Voor intrede/uittrede of voor/na werken is plaatsbeschrijving logisch; bij acute conflictcontext kan vaststelling passender zijn.",
          en: "For entry/exit or before/after works, condition reporting is logical; for acute conflict contexts, legal finding may fit better.",
        },
      },
      {
        title: { nl: "Belangrijke nuance", en: "Important nuance" },
        body: {
          nl: "Kies op basis van doel en bewijsnood, niet op basis van terminologie alleen.",
          en: "Choose based on purpose and evidentiary need, not terminology alone.",
        },
      },
    ],
  },
];

export const plaatsFaqCategories: PlaatsFaqCategory[] = [
  {
    title: { nl: "Algemeen", en: "General" },
    items: [
      {
        question: { nl: "Wat is een plaatsbeschrijving?", en: "What is a condition report?" },
        answer: {
          nl: "Een objectieve beschrijving van de staat van een pand op een bepaald moment, bedoeld voor latere vergelijking.",
          en: "An objective description of a property's condition at a specific moment, meant for later comparison.",
        },
        link: "/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving/",
      },
      {
        question: { nl: "Waarvoor wordt een plaatsbeschrijving gebruikt?", en: "What is a condition report used for?" },
        answer: {
          nl: "Voor huur, werken of objectieve vastlegging van toestand zodat discussie achteraf beperkt blijft.",
          en: "For rental, works, or objective condition capture to reduce disputes later.",
        },
        link: "/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving/",
      },
      {
        question: { nl: "Wat maakt het rapport sterk als bewijs?", en: "What makes the report strong evidence?" },
        answer: {
          nl: "Detailniveau, duidelijke foto's en tegensprekelijke opmaak met beide partijen.",
          en: "Level of detail, clear photos, and adversarial setup involving both parties.",
        },
        link: "/plaatsbeschrijvingen/voorbereiding-checklist/",
      },
    ],
  },
  {
    title: { nl: "Wetgeving en termijnen", en: "Legislation and timelines" },
    items: [
      {
        question: { nl: "Verschillen regels per gewest?", en: "Do rules differ by region?" },
        answer: {
          nl: "Ja. Vlaanderen, Brussel en Wallonie hebben eigen procedureaccenten binnen vergelijkbare principes.",
          en: "Yes. Flanders, Brussels, and Wallonia have their own procedural accents within similar principles.",
        },
        link: "/plaatsbeschrijvingen/wetgeving-per-gewest/",
      },
      {
        question: { nl: "Is het verplicht bij woninghuur?", en: "Is it mandatory for residential rental?" },
        answer: {
          nl: "Er gelden verplichtingen en termijnen; concrete toepassing hangt af van het gewest.",
          en: "Obligations and timelines apply; concrete implementation depends on region.",
        },
        link: "/plaatsbeschrijvingen/wetgeving-per-gewest/",
      },
      {
        question: { nl: "Wat als een partij niet meewerkt?", en: "What if a party does not cooperate?" },
        answer: {
          nl: "Er bestaan procedures afhankelijk van context en gewest om toch tot een geldige opname te komen.",
          en: "Procedures exist by context and region to still obtain a valid report.",
        },
        link: "/plaatsbeschrijvingen/wetgeving-per-gewest/",
      },
    ],
  },
  {
    title: { nl: "Huur", en: "Rental" },
    items: [
      {
        question: { nl: "Wanneer maak je een intredende plaatsbeschrijving?", en: "When should an entry report be made?" },
        answer: {
          nl: "Idealiter voor ingebruikname, met volledige opname van toestand, meters en sleutels.",
          en: "Ideally before occupancy, with full state capture, meter values, and key handover details.",
        },
        link: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur/",
      },
      {
        question: { nl: "Wanneer maak je een uittredende plaatsbeschrijving?", en: "When should an exit report be made?" },
        answer: {
          nl: "Bij einde huur, met vergelijking tegen intredeverslag in dezelfde structuur.",
          en: "At lease end, compared against the entry report using the same structure.",
        },
        link: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur/",
      },
      {
        question: { nl: "Moeten meterstanden en sleutels erin?", en: "Should meter values and keys be included?" },
        answer: {
          nl: "Ja, dat is sterk aanbevolen om discussie bij afhandeling te vermijden.",
          en: "Yes, strongly recommended to avoid settlement disputes.",
        },
        link: "/plaatsbeschrijvingen/voorbereiding-checklist/",
      },
    ],
  },
  {
    title: { nl: "Werken", en: "Works" },
    items: [
      {
        question: { nl: "Waarom opname voor de werken?", en: "Why report before works?" },
        answer: {
          nl: "Om bestaande toestand vast te leggen en discussies over nieuwe schade te beperken.",
          en: "To capture existing condition and reduce disputes over newly caused damage.",
        },
        link: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken/",
      },
      {
        question: { nl: "Is opname na de werken ook nuttig?", en: "Is post-works reporting useful too?" },
        answer: {
          nl: "Ja, voor objectieve vergelijking en sluitende afhandeling.",
          en: "Yes, for objective comparison and clear settlement.",
        },
        link: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken/",
      },
      {
        question: { nl: "Vaststelling of plaatsbeschrijving bij schade?", en: "Finding or condition report for damage?" },
        answer: {
          nl: "Dat hangt af van doel en timing; gebruik de keuzehulp op de vergelijkingspagina.",
          en: "It depends on purpose and timing; use the decision guide on the comparison page.",
        },
        link: "/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving/",
      },
    ],
  },
  {
    title: { nl: "Kosten en afspraken", en: "Costs and agreements" },
    items: [
      {
        question: { nl: "Wie betaalt bij huur?", en: "Who pays for rental reports?" },
        answer: {
          nl: "Vaak gedeeld, afhankelijk van context, gewest en contractuele afspraken.",
          en: "Often shared, depending on context, region, and contractual terms.",
        },
        link: "/plaatsbeschrijvingen/kosten-en-wie-betaalt/",
      },
      {
        question: { nl: "Wie betaalt bij werken?", en: "Who pays for works-related reports?" },
        answer: {
          nl: "Meestal de partij die de werken initieert, tenzij anders overeengekomen.",
          en: "Usually the party initiating the works, unless agreed otherwise.",
        },
        link: "/plaatsbeschrijvingen/kosten-en-wie-betaalt/",
      },
      {
        question: { nl: "Hoe vermijd je discussie over scope?", en: "How do you avoid scope disputes?" },
        answer: {
          nl: "Leg ruimtes, bijgebouwen, timing en rapportvorm vooraf schriftelijk vast.",
          en: "Document rooms, outbuildings, timing, and report format in writing upfront.",
        },
        link: "/plaatsbeschrijvingen/kosten-en-wie-betaalt/",
      },
    ],
  },
  {
    title: { nl: "Privacy en voorbereiding", en: "Privacy and preparation" },
    items: [
      {
        question: { nl: "Waarom extra beeldarchief?", en: "Why keep additional image archive?" },
        answer: {
          nl: "Extra beelden verhogen bewijswaarde en blijven opvraagbaar binnen bewaartermijn.",
          en: "Additional images improve evidentiary strength and remain retrievable within retention period.",
        },
        link: "/privacy-en-bewaring/",
      },
      {
        question: { nl: "Hoe bereid ik me best voor?", en: "How should I prepare best?" },
        answer: {
          nl: "Voorzie toegang, licht, meterstanden, sleutels en relevante documenten voor een vlotte opname.",
          en: "Prepare access, light, meter values, keys, and relevant documents for smooth inspection.",
        },
        link: "/plaatsbeschrijvingen/voorbereiding-checklist/",
      },
      {
        question: { nl: "Wat als ruimtes vol staan of donker zijn?", en: "What if spaces are cluttered or dark?" },
        answer: {
          nl: "Maak kritieke zones vrij en verbeter zichtbaarheid om observaties betrouwbaar te houden.",
          en: "Clear critical zones and improve visibility to keep observations reliable.",
        },
        link: "/plaatsbeschrijvingen/voorbereiding-checklist/",
      },
    ],
  },
];

export const plaatsFaqItems: ClusterFaqItem[] = plaatsFaqCategories.flatMap((category) =>
  category.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
);
