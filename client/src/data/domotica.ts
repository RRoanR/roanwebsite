import type { ClusterFaqItem, ClusterSection } from "@/components/ClusterArticlePage";
import { homeAssistantPath } from "@shared/siteRoutes";

type Language = "nl" | "en";

export interface DomoticaTopicData {
  slug: string;
  path: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  intro: Record<Language, string>;
  sections: ClusterSection[];
  faqs?: ClusterFaqItem[];
}

export interface DomoticaFaqCategory {
  title: Record<Language, string>;
  items: Array<ClusterFaqItem & { link: string }>;
}

const homeAssistantBasePath = homeAssistantPath;

const commonFaqs: ClusterFaqItem[] = [
  {
    question: {
      nl: "Kan ik starten met een beperkte scope en later uitbreiden?",
      en: "Can I start with a limited scope and expand later?",
    },
    answer: {
      nl: "Ja. Een gefaseerde aanpak werkt meestal het best: eerst een stabiele basis, daarna uitbreiden per ruimte of scenario.",
      en: "Yes. A phased approach usually works best: stable baseline first, then expand per room or scenario.",
    },
  },
  {
    question: {
      nl: "Moet ik alle bestaande toestellen vervangen?",
      en: "Do I need to replace all existing devices?",
    },
    answer: {
      nl: "Meestal niet. We behouden wat betrouwbaar werkt en vervangen alleen wat instabiel of beperkend is.",
      en: "Usually not. We keep what works reliably and replace only unstable or limiting parts.",
    },
  },
  {
    question: {
      nl: "Kan u een bestaande Home Assistant installatie verbeteren?",
      en: "Can you improve an existing Home Assistant installation?",
    },
    answer: {
      nl: "Ja. Troubleshooting, herstructurering, dashboards, automations en backup-strategie kunnen allemaal stap voor stap verbeterd worden.",
      en: "Yes. Troubleshooting, restructuring, dashboards, automations, and backup strategy can all be improved incrementally.",
    },
  },
];

export const domoticaTopics: DomoticaTopicData[] = [
  {
    slug: "wat-is-home-assistant",
    path: `${homeAssistantBasePath}wat-is-home-assistant/`,
    title: {
      nl: "Wat is Home Assistant?",
      en: "What is Home Assistant?",
    },
    description: {
      nl: "Wat Home Assistant is, welke problemen het oplost en hoe u slim start met lokale controle en integraties.",
      en: "What Home Assistant is, which problems it solves, and how to start with local control and integrations.",
    },
    intro: {
      nl: "Home Assistant bundelt losse smart home systemen in een centrale laag met sterke lokale controle, flexibiliteit en uitbreidbaarheid.",
      en: "Home Assistant unifies fragmented smart home systems into one central layer with strong local control, flexibility, and extensibility.",
    },
    sections: [
      {
        title: { nl: "Welke problemen lost het op?", en: "Which problems does it solve?" },
        body: {
          nl: "Veel woningen hebben losse apps, meerdere accounts en onduidelijke automatisaties. Home Assistant brengt bediening en logica samen in een beheerbaar geheel.",
          en: "Many homes have fragmented apps, multiple accounts, and unclear automations. Home Assistant centralizes control and logic in one manageable system.",
        },
      },
      {
        title: { nl: "Hoe werkt het in mensentaal?", en: "How does it work in plain language?" },
        body: {
          nl: "U koppelt toestellen via integraties, bouwt dashboards, en definieert regels die reageren op tijd, aanwezigheid of sensoren.",
          en: "You connect devices through integrations, build dashboards, and define rules reacting to time, presence, or sensors.",
        },
      },
      {
        title: { nl: "Praktische starttips", en: "Practical starting tips" },
        body: {
          nl: "Start met een beperkte scope, kies betrouwbare protocollen, en bouw eerst duidelijke dashboards voor dagelijks gebruik.",
          en: "Start with limited scope, choose reliable protocols, and build clear dashboards for daily use first.",
        },
      },
      {
        title: { nl: "Wanneer professionele hulp nuttig is", en: "When professional help is useful" },
        body: {
          nl: "Bij complexe integraties, onstabiele netwerken of behoefte aan een onderhoudbare structuur is begeleiding meestal sneller en goedkoper op termijn.",
          en: "For complex integrations, unstable networks, or maintainable architecture needs, guidance is usually faster and cheaper long term.",
        },
      },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "installatie-vs-configuratie",
    path: `${homeAssistantBasePath}installatie-vs-configuratie/`,
    title: { nl: "Installatie vs configuratie", en: "Installation vs configuration" },
    description: {
      nl: "Waarom een installatie nog geen stabiel systeem is en welke configuratiekeuzes echt het verschil maken.",
      en: "Why installation alone is not a stable system and which configuration choices truly matter.",
    },
    intro: {
      nl: "Installatie maakt Home Assistant werkend. Configuratie maakt het betrouwbaar, bruikbaar en beheersbaar op lange termijn.",
      en: "Installation gets Home Assistant running. Configuration makes it reliable, usable, and maintainable long term.",
    },
    sections: [
      {
        title: { nl: "Wat bedoelen we met installatie?", en: "What do we mean by installation?" },
        body: {
          nl: "De technische basis: host, netwerktoegang, eerste integraties en bereikbaarheid van de interface.",
          en: "The technical baseline: host, network access, first integrations, and interface availability.",
        },
      },
      {
        title: { nl: "Wat bedoelen we met configuratie?", en: "What do we mean by configuration?" },
        body: {
          nl: "Naming, zones, dashboards, rechten, automation-logica en onderhoudsafspraken zodat het systeem dagelijks klopt.",
          en: "Naming, zones, dashboards, permissions, automation logic, and maintenance conventions so the system works daily.",
        },
      },
      {
        title: { nl: "Praktische tips om fouten te vermijden", en: "Practical tips to avoid mistakes" },
        body: {
          nl: "Werk in fases, documenteer keuzes, en voorzie altijd manuele fallback in dashboards en cruciale flows.",
          en: "Work in phases, document decisions, and always provide manual fallback in dashboards and critical flows.",
        },
      },
      {
        title: { nl: "Wanneer hulp inschakelen", en: "When to bring in help" },
        body: {
          nl: "Bij herhaalde storingen, trage interface of onduidelijke configuratie levert een gerichte audit snel winst op.",
          en: "With recurring failures, slow UI, or unclear configuration, a focused audit quickly pays off.",
        },
      },
    ],
  },
  {
    slug: "zigbee-zwave-matter-thread",
    path: `${homeAssistantBasePath}zigbee-zwave-matter-thread/`,
    title: { nl: "Zigbee vs Z-Wave vs Matter/Thread", en: "Zigbee vs Z-Wave vs Matter/Thread" },
    description: {
      nl: "Heldere protocolkeuze voor Home Assistant: wanneer Zigbee, Z-Wave of Matter/Thread de beste fit is.",
      en: "Clear protocol guidance for Home Assistant: when Zigbee, Z-Wave, or Matter/Thread is the best fit.",
    },
    intro: {
      nl: "Er is geen universeel beste protocol. De juiste mix hangt af van woningtype, bereik, bestaande toestellen en uitbreidingsplannen.",
      en: "There is no universally best protocol. The right mix depends on home type, range, existing devices, and expansion plans.",
    },
    sections: [
      {
        title: { nl: "De kern in 60 seconden", en: "Core in 60 seconds" },
        body: {
          nl: "Zigbee en Z-Wave zijn mature mesh-protocollen; Matter verbetert interoperabiliteit en loopt vaak over wifi of Thread.",
          en: "Zigbee and Z-Wave are mature mesh protocols; Matter improves interoperability and often runs over Wi-Fi or Thread.",
        },
      },
      {
        title: { nl: "Praktische keuzehulp", en: "Practical decision guide" },
        body: {
          nl: "Kies op basis van concrete use cases en compatibiliteit, niet op basis van hype of een enkel merkecosysteem.",
          en: "Choose based on concrete use cases and compatibility, not hype or a single vendor ecosystem.",
        },
      },
      {
        title: { nl: "Tips voor betrouwbaarheid", en: "Reliability tips" },
        body: {
          nl: "Plan mesh-dekking, vermijd overbrugging zonder validatie, en monitor batterij- en signaalgedrag na uitrol.",
          en: "Plan mesh coverage, avoid bridging without validation, and monitor battery and signal behavior post-deployment.",
        },
      },
      {
        title: { nl: "Wanneer begeleiding loont", en: "When guidance pays off" },
        body: {
          nl: "Bij mixed protocollen of onduidelijke compatibiliteit voorkomt een vooranalyse dure heraankopen.",
          en: "With mixed protocols or unclear compatibility, upfront analysis prevents costly re-purchases.",
        },
      },
    ],
  },
  {
    slug: "dashboards-tablet-wandpaneel",
    path: `${homeAssistantBasePath}dashboards-tablet-wandpaneel/`,
    title: { nl: "Dashboards, tablet en wandpaneel", en: "Dashboards, tablet and wall panel" },
    description: {
      nl: "Dashboards die voor iedereen werken: structuur, rollen, failsafe bediening en onderhoud.",
      en: "Dashboards that work for everyone: structure, roles, failsafe control, and maintenance.",
    },
    intro: {
      nl: "Een dashboard is pas geslaagd als iedereen in huis of op kantoor het snel begrijpt en vertrouwt.",
      en: "A dashboard is only successful when everyone at home or in the office can understand and trust it quickly.",
    },
    sections: [
      {
        title: { nl: "Wat is een dashboard?", en: "What is a dashboard?" },
        body: {
          nl: "Een centrale interface om status, bediening en scenario's overzichtelijk te bundelen over toestellen heen.",
          en: "A central interface that combines status, controls, and scenarios across devices in a clear way.",
        },
      },
      {
        title: { nl: "Praktische ontwerpregels", en: "Practical design rules" },
        body: {
          nl: "Werk met rollen en momenten, houd labels consistent, en maak kritieke acties zichtbaar zonder ruis.",
          en: "Design by roles and moments, keep labels consistent, and make critical actions visible without noise.",
        },
      },
      {
        title: { nl: "Tablet en wandpaneel", en: "Tablet and wall panel" },
        body: {
          nl: "Interessant voor centrale bediening in leefzones of kantoor, mits duidelijke fallback en robuuste stroom/netwerkvoorziening.",
          en: "Useful for central control in living or office zones, provided clear fallback and robust power/network are in place.",
        },
      },
      {
        title: { nl: "Wanneer hulp loont", en: "When help is worth it" },
        body: {
          nl: "Bij complexe huishoudens of multi-user gebruik voorkomt een professioneel dashboard veel dagelijkse frictie.",
          en: "For complex households or multi-user setups, professional dashboard design prevents day-to-day friction.",
        },
      },
    ],
  },
  {
    slug: "energie-monitoring-zonnepanelen-laadpaal",
    path: `${homeAssistantBasePath}energie-monitoring-zonnepanelen-laadpaal/`,
    title: { nl: "Energie monitoring, zonnepanelen en laadpaal", en: "Energy monitoring, solar and EV charger" },
    description: {
      nl: "Praktische aanpak voor energie-inzicht in Home Assistant met zonnepanelen en laadpaal-integraties.",
      en: "Practical approach to Home Assistant energy insights with solar and EV charger integrations.",
    },
    intro: {
      nl: "Betrouwbare meting en duidelijke dashboards zijn de basis voor zinvolle energieautomatisatie.",
      en: "Reliable metering and clear dashboards are the foundation for meaningful energy automation.",
    },
    sections: [
      {
        title: { nl: "Wat is haalbaar?", en: "What is feasible?" },
        body: {
          nl: "Dat hangt af van meter, omvormer, laadoplossing en beschikbare integraties. Eerst valideren, dan bouwen.",
          en: "It depends on meter, inverter, charger setup, and available integrations. Validate first, then build.",
        },
      },
      {
        title: { nl: "Praktische tips", en: "Practical tips" },
        body: {
          nl: "Begin met meten voor u stuurt, maak verbruik zichtbaar per zone, en voeg meldingen toe voor pieken.",
          en: "Measure before controlling, visualize usage per zone, and add alerts for peaks.",
        },
      },
      {
        title: { nl: "Wanneer professionele hulp zinvol is", en: "When professional help is useful" },
        body: {
          nl: "Bij meerdere energiebronnen of onduidelijke datakwaliteit helpt een technische intake om foutieve conclusies te vermijden.",
          en: "With multiple energy sources or unclear data quality, a technical intake avoids wrong conclusions.",
        },
      },
    ],
  },
  {
    slug: "beveiliging-meldingen-aanwezigheid",
    path: `${homeAssistantBasePath}beveiliging-meldingen-aanwezigheid/`,
    title: { nl: "Beveiliging, meldingen en aanwezigheid", en: "Security, notifications and presence" },
    description: {
      nl: "Aanwezigheidslogica en meldingen in Home Assistant met focus op rust, zichtbaarheid en beheerbaarheid.",
      en: "Presence logic and Home Assistant notifications focused on clarity, calm, and maintainability.",
    },
    intro: {
      nl: "Slimme meldingen zijn relevant, contextueel en beheersbaar. Ze vervangen geen gecertificeerd alarmsysteem.",
      en: "Smart notifications are relevant, contextual, and manageable. They do not replace certified alarm systems.",
    },
    sections: [
      {
        title: { nl: "Aanwezigheid als basis", en: "Presence as the foundation" },
        body: {
          nl: "Scenario's zoals thuis, weg, nacht en vakantie werken het best met gecombineerde signalen per zone.",
          en: "Scenarios like home, away, night, and vacation work best with combined zone-based signals.",
        },
      },
      {
        title: { nl: "Meldingen die wel nuttig zijn", en: "Notifications that are actually useful" },
        body: {
          nl: "Prioriteer kritieke meldingen, demp herhalingen, en stem timing af op gebruikssituaties.",
          en: "Prioritize critical alerts, suppress repetition, and tune timing to actual usage patterns.",
        },
      },
      {
        title: { nl: "Betrouwbaarheidstips", en: "Reliability tips" },
        body: {
          nl: "Voorzie fallback bij sensorfouten, test scenario's periodiek, en documenteer uitzonderingen.",
          en: "Add fallback for sensor failures, test scenarios regularly, and document exceptions.",
        },
      },
      {
        title: { nl: "Wanneer hulp zinvol is", en: "When help is useful" },
        body: {
          nl: "Bij veel false positives of complexe presence-logica versnelt expert tuning de stabiliteit aanzienlijk.",
          en: "With many false positives or complex presence logic, expert tuning significantly improves stability.",
        },
      },
    ],
  },
  {
    slug: "onderhoud-back-ups-updates",
    path: `${homeAssistantBasePath}onderhoud-back-ups-updates/`,
    title: { nl: "Onderhoud, back-ups en updates", en: "Maintenance, backups and updates" },
    description: {
      nl: "Zo houdt u Home Assistant stabiel met gecontroleerde updates, herstelopties en periodieke checks.",
      en: "How to keep Home Assistant stable with controlled updates, recovery options, and periodic checks.",
    },
    intro: {
      nl: "Een slimme woning is geen set-and-forget systeem. Onderhoud voorkomt uitval en beperkt herstelkosten.",
      en: "A smart home is not a set-and-forget system. Maintenance prevents downtime and reduces recovery cost.",
    },
    sections: [
      {
        title: { nl: "Waarom onderhoud nodig is", en: "Why maintenance is needed" },
        body: {
          nl: "Integraties evolueren continu. Zonder beheer stapelen kleine fouten zich op tot merkbare instabiliteit.",
          en: "Integrations evolve continuously. Without upkeep, small issues accumulate into visible instability.",
        },
      },
      {
        title: { nl: "Back-ups als basis", en: "Backups as baseline" },
        body: {
          nl: "Werk met lokale en externe back-ups zodat rollback en herstel voorspelbaar blijven.",
          en: "Use both local and offsite backups so rollback and recovery stay predictable.",
        },
      },
      {
        title: { nl: "Updates gecontroleerd uitvoeren", en: "Run updates in a controlled way" },
        body: {
          nl: "Controleer changelogs, test kritieke flows, en update niet blind op productiesystemen.",
          en: "Review changelogs, test critical flows, and avoid blind production updates.",
        },
      },
      {
        title: { nl: "Mini-checklist", en: "Mini checklist" },
        body: {
          nl: "Controleer logs, batterijstatus, netwerkbereik, backupintegriteit en automation-fouten maandelijks of per kwartaal.",
          en: "Review logs, battery health, network reach, backup integrity, and automation errors monthly or quarterly.",
        },
      },
    ],
  },
  {
    slug: "slimme-verlichting-sensoren-scenes",
    path: `${homeAssistantBasePath}slimme-verlichting-sensoren-scenes/`,
    title: { nl: "Slimme verlichting, sensoren en scenes", en: "Smart lighting, sensors and scenes" },
    description: {
      nl: "Lichtautomatisaties die logisch aanvoelen met goede sensorlogica, scenes en manuele overruling.",
      en: "Lighting automations that feel natural with strong sensor logic, scenes, and manual override.",
    },
    intro: {
      nl: "Doel: verlichting die automatisch werkt wanneer gewenst, en direct manueel overneembaar blijft.",
      en: "Goal: lighting that automates when useful and remains instantly controllable manually.",
    },
    sections: [
      {
        title: { nl: "Automatisaties vs scenes", en: "Automations vs scenes" },
        body: {
          nl: "Automatisaties reageren op context. Scenes bieden snelle handmatige presets voor specifieke situaties.",
          en: "Automations react to context. Scenes provide quick manual presets for specific situations.",
        },
      },
      {
        title: { nl: "Praktische tips", en: "Practical tips" },
        body: {
          nl: "Gebruik voorwaarden naast triggers, werk met basisniveaus, en vermijd schokkende overgangen.",
          en: "Use conditions alongside triggers, design base levels, and avoid abrupt transitions.",
        },
      },
      {
        title: { nl: "Wanneer hulp zinvol is", en: "When help is useful" },
        body: {
          nl: "Bij inconsistent gedrag of overlappende regels helpt herstructurering van automations en naming.",
          en: "With inconsistent behavior or overlapping rules, restructuring automations and naming helps.",
        },
      },
    ],
  },
  {
    slug: "antwerpen",
    path: `${homeAssistantBasePath}antwerpen/`,
    title: { nl: "Home Assistant installateur in Antwerpen", en: "Home Assistant specialist in Antwerp" },
    description: {
      nl: "Lokale Home Assistant hulp in Antwerpen voor integraties, dashboards, energie en onderhoud.",
      en: "Local Home Assistant support in Antwerp for integrations, dashboards, energy, and maintenance.",
    },
    intro: {
      nl: "Voor Antwerpen en omgeving: intake, implementatie en opvolging met focus op betrouwbare dagelijkse werking.",
      en: "For Antwerp and nearby areas: intake, implementation, and follow-up focused on reliable daily operation.",
    },
    sections: [
      {
        title: { nl: "Waarmee ik u help", en: "How I can help" },
        body: {
          nl: "Installatie, integraties, dashboards, automatisaties en troubleshooting van bestaande setups.",
          en: "Installation, integrations, dashboards, automations, and troubleshooting of existing setups.",
        },
      },
      {
        title: { nl: "Voor wie", en: "Who this is for" },
        body: {
          nl: "Particulieren, zelfstandigen en kleine teams die minder app-chaos en meer controle willen.",
          en: "Households, freelancers, and small teams wanting less app chaos and more control.",
        },
      },
      {
        title: { nl: "Volgende stap", en: "Next step" },
        body: {
          nl: "Korte intake met prioriteiten, huidige hardware en gewenste timing om een realistisch plan op te stellen.",
          en: "Short intake covering priorities, current hardware, and timeline to build a realistic plan.",
        },
      },
    ],
  },
  {
    slug: "berchem",
    path: `${homeAssistantBasePath}berchem/`,
    title: { nl: "Home Assistant in Berchem", en: "Home Assistant in Berchem" },
    description: {
      nl: "Home Assistant ondersteuning in Berchem met focus op stabiliteit, overzicht en gebruiksgemak.",
      en: "Home Assistant support in Berchem focused on stability, visibility, and ease of use.",
    },
    intro: {
      nl: "In Berchem help ik u van losse automatisaties naar een setup die voor iedereen bruikbaar blijft.",
      en: "In Berchem, I help move from fragmented automations to a setup that stays usable for everyone.",
    },
    sections: [
      {
        title: { nl: "Typische vragen", en: "Typical questions" },
        body: {
          nl: "Waarom is het onstabiel, welke protocollen combineren we best, en hoe maken we dashboards eenvoudiger?",
          en: "Why is it unstable, which protocols should we combine, and how do we simplify dashboards?",
        },
      },
      {
        title: { nl: "Aanpak", en: "Approach" },
        body: {
          nl: "Analyse, plan per fase, implementatie met quick wins, daarna fine-tuning en documentatie.",
          en: "Analysis, phased plan, implementation with quick wins, then fine tuning and documentation.",
        },
      },
      {
        title: { nl: "Offerte of adviesgesprek", en: "Quote or advice call" },
        body: {
          nl: "U ontvangt een duidelijke scope met prioriteiten en realistische volgorde van uitvoering.",
          en: "You receive a clear scope with priorities and a realistic implementation order.",
        },
      },
    ],
  },
  {
    slug: "deurne",
    path: `${homeAssistantBasePath}deurne/`,
    title: { nl: "Home Assistant in Deurne", en: "Home Assistant in Deurne" },
    description: {
      nl: "Ondersteuning in Deurne voor Home Assistant installatie, protocolkeuze, dashboards en onderhoud.",
      en: "Support in Deurne for Home Assistant setup, protocol decisions, dashboards, and maintenance.",
    },
    intro: {
      nl: "De focus in Deurne: een setup die technisch klopt, begrijpelijk blijft en makkelijk uitbreidbaar is.",
      en: "Focus in Deurne: a setup that is technically sound, understandable, and easy to extend.",
    },
    sections: [
      {
        title: { nl: "Mijn focus", en: "My focus" },
        body: {
          nl: "Betrouwbaarheid, duidelijke bediening en scenario's die ook na maanden onderhoudbaar blijven.",
          en: "Reliability, clear control, and scenarios that remain maintainable months later.",
        },
      },
      {
        title: { nl: "Wanneer interessant", en: "When it is relevant" },
        body: {
          nl: "Als u al smart devices heeft maar weinig overzicht, of wanneer nieuwe uitbreidingen gepland zijn.",
          en: "When you already have smart devices but little overview, or when new expansions are planned.",
        },
      },
      {
        title: { nl: "Uw situatie bespreken", en: "Discuss your case" },
        body: {
          nl: "Na intake krijgt u een concrete volgende stap: optimalisatie, migratie of nieuwe opbouw.",
          en: "After intake, you get a concrete next step: optimization, migration, or fresh implementation.",
        },
      },
    ],
  },
];

export const domoticaFaqCategories: DomoticaFaqCategory[] = [
  {
    title: { nl: "Installatie", en: "Installation" },
    items: [
      {
        question: {
          nl: "Installeert u Home Assistant in regio Antwerpen?",
          en: "Do you install Home Assistant in the Antwerp region?",
        },
        answer: {
          nl: "Ja. We starten met intake, bepalen scope en voeren gefaseerd uit met opvolging.",
          en: "Yes. We start with intake, define scope, and execute in phases with follow-up.",
        },
        link: homeAssistantPath,
      },
      {
        question: {
          nl: "Wat is het verschil tussen installatie en configuratie?",
          en: "What is the difference between installation and configuration?",
        },
        answer: {
          nl: "Installatie is de basis. Configuratie maakt het systeem bruikbaar, stabiel en onderhoudbaar.",
          en: "Installation is the baseline. Configuration makes the system usable, stable, and maintainable.",
        },
        link: `${homeAssistantBasePath}installatie-vs-configuratie/`,
      },
    ],
  },
  {
    title: { nl: "Compatibiliteit", en: "Compatibility" },
    items: [
      {
        question: {
          nl: "Werkt Home Assistant met Zigbee, Z-Wave en Matter?",
          en: "Does Home Assistant work with Zigbee, Z-Wave and Matter?",
        },
        answer: {
          nl: "Ja, maar compatibiliteit hangt af van hardware, firmware en integratiemethode.",
          en: "Yes, but compatibility depends on hardware, firmware, and integration method.",
        },
        link: `${homeAssistantBasePath}zigbee-zwave-matter-thread/`,
      },
      {
        question: {
          nl: "Moet ik kiezen voor een enkel protocol?",
          en: "Do I need to choose a single protocol?",
        },
        answer: {
          nl: "Niet altijd. Een doordachte mix is vaak realistischer dan alles vervangen.",
          en: "Not always. A thoughtful mix is often more realistic than replacing everything.",
        },
        link: `${homeAssistantBasePath}zigbee-zwave-matter-thread/`,
      },
    ],
  },
  {
    title: { nl: "Prijs en aanpak", en: "Pricing and approach" },
    items: [
      {
        question: {
          nl: "Wat kost Home Assistant automatisatie op maat?",
          en: "What does custom Home Assistant automation cost?",
        },
        answer: {
          nl: "Dat hangt af van scope, aantal integraties en gewenste complexiteit. U krijgt een duidelijke intake-scope.",
          en: "It depends on scope, number of integrations, and complexity. You receive a clear intake scope.",
        },
        link: homeAssistantPath,
      },
      {
        question: {
          nl: "Werkt u in fases?",
          en: "Do you work in phases?",
        },
        answer: {
          nl: "Ja. Eerst stabiele quick wins, daarna uitbreiden op basis van echte gebruikservaring.",
          en: "Yes. Stable quick wins first, then expansion based on real usage.",
        },
        link: homeAssistantPath,
      },
    ],
  },
  {
    title: { nl: "Privacy en onderhoud", en: "Privacy and maintenance" },
    items: [
      {
        question: {
          nl: "Hoe zit het met privacy?",
          en: "What about privacy?",
        },
        answer: {
          nl: "Home Assistant ondersteunt sterke lokale controle, maar integraties verschillen. We maken dit expliciet per koppeling.",
          en: "Home Assistant supports strong local control, but integrations differ. We make this explicit per integration.",
        },
        link: `${homeAssistantBasePath}wat-is-home-assistant/`,
      },
      {
        question: {
          nl: "Voorziet u onderhoud, updates en back-ups?",
          en: "Do you provide maintenance, updates, and backups?",
        },
        answer: {
          nl: "Ja. Met duidelijke updateflow, checkmomenten en herstelstrategie blijft uitval beperkt.",
          en: "Yes. With a clear update flow, check cadence, and recovery strategy, downtime stays limited.",
        },
        link: `${homeAssistantBasePath}onderhoud-back-ups-updates/`,
      },
    ],
  },
  {
    title: { nl: "Energie en meldingen", en: "Energy and notifications" },
    items: [
      {
        question: {
          nl: "Kan ik energieverbruik, zonnepanelen en laadpaal integreren?",
          en: "Can I integrate consumption, solar, and EV charging?",
        },
        answer: {
          nl: "Vaak wel. De mogelijkheden hangen af van meter, omvormer, laadoplossing en beschikbare integraties.",
          en: "Often yes. Capabilities depend on meter, inverter, charger setup, and available integrations.",
        },
        link: `${homeAssistantBasePath}energie-monitoring-zonnepanelen-laadpaal/`,
      },
      {
        question: {
          nl: "Kan Home Assistant gebruikt worden voor beveiligingsmeldingen?",
          en: "Can Home Assistant be used for security notifications?",
        },
        answer: {
          nl: "Ja, voor slimme meldingen en aanwezigheidsscenario's. Dit vervangt geen gecertificeerd alarmsysteem.",
          en: "Yes, for smart alerts and presence scenarios. This does not replace certified alarm systems.",
        },
        link: `${homeAssistantBasePath}beveiliging-meldingen-aanwezigheid/`,
      },
    ],
  },
];

export const domoticaFaqItems: ClusterFaqItem[] = domoticaFaqCategories.flatMap((category) =>
  category.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
);
