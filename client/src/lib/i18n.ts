import { create } from 'zustand';

type Language = 'en' | 'nl';

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.services.survey': 'Condition Reports',
    'nav.services.domotica': 'Domotics & Home Assistant',
    'nav.services.garden': 'Garden Maintenance',
    'nav.services.it': 'IT Consulting',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy',
    'nav.cta': 'Get a Quote',
    
    'hero.badge': 'Available for new projects',
    'hero.title': 'Green-tech systems for homes, businesses, and outdoor spaces',
    'hero.subtitle': 'IT consulting with embedded home automation expertise, plus reliable garden care for people who want calm, future-ready systems.',
    'hero.cta': 'Request a Free Quote',
    'hero.secondary': 'Our Services',
    
    'services.badge': 'Our Expertise',
    'services.title': 'Specialized Services Tailored for You',
    'services.survey.title': 'Condition Reports',
    'services.survey.desc': 'Accurate, legally compliant condition reports (Plaatsbeschrijvingen) for rental properties, renovations, and construction projects.',
    'services.home.title': 'Domotics & Home Assistant',
    'services.home.desc': 'A specialized IT subservice for Home Assistant, energy insight, dashboards, and reliable local automation.',
    'services.garden.title': 'Garden Maintenance',
    'services.garden.desc': 'Reliable garden care, trimming, seasonal clean-ups, and refresh work for private clients in the Antwerp area.',
    'services.it.title': 'IT Consulting',
    'services.it.desc': 'Infrastructure, automation strategy, and hands-on troubleshooting for small teams, homes, and growing businesses.',
    'services.learnMore': 'Learn More',
    
    'services.survey.hero': 'Topographical Surveying & Condition Reports',
    'services.survey.heroDesc': 'Professional, legally compliant property condition reports (Plaatsbeschrijvingen) for rental properties, renovations, and construction projects across Belgium.',
    'services.survey.what': 'What We Offer',
    'services.survey.whatDesc': 'Our topographical surveying service delivers detailed, court-admissible condition reports. We document the exact state of a property before and after rental periods, renovation works, or construction projects — protecting both landlords and tenants.',
    'services.survey.feature1': 'Detailed Photo Documentation',
    'services.survey.feature1Desc': 'Every room, wall, floor, and fixture is meticulously photographed and described.',
    'services.survey.feature2': 'Legally Compliant Reports',
    'services.survey.feature2Desc': 'Reports that meet Belgian legal standards for use in dispute resolution.',
    'services.survey.feature3': 'Fast Turnaround',
    'services.survey.feature3Desc': 'On-site inspections and digital reports delivered within days, not weeks.',

    'services.home.hero': 'Smart Home Automation',
    'services.home.heroDesc': 'Transform your home with Home Assistant — the leading open-source platform for smart home automation. Private, local, and fully customizable.',
    'services.home.what': 'What We Offer',
    'services.home.whatDesc': 'We design, install, and configure complete Home Assistant ecosystems tailored to your lifestyle. From lighting and climate control to security and energy management — all controlled from a single dashboard.',
    'services.home.feature1': 'Privacy-First Approach',
    'services.home.feature1Desc': 'All automation runs locally — your data never leaves your home.',
    'services.home.feature2': 'Custom Dashboards',
    'services.home.feature2Desc': 'Beautiful, intuitive control panels designed for your specific setup.',
    'services.home.feature3': 'Ongoing Support',
    'services.home.feature3Desc': 'We provide maintenance and updates to keep your smart home running smoothly.',

    'services.it.hero': 'IT Consulting, Infrastructure & Automation',
    'services.it.heroDesc': 'Strategic technology advice, hands-on infrastructure support, and domotics expertise for people who want reliable systems without the chaos.',
    'services.it.what': 'What We Offer',
    'services.it.whatDesc': 'From network setup and cloud migrations to Home Assistant architecture, security reviews, and troubleshooting, we build practical systems that stay understandable over time.',
    'services.it.feature1': 'Infrastructure Setup',
    'services.it.feature1Desc': 'Network design, server configuration, and cloud deployment tailored to your needs.',
    'services.it.feature2': 'Security & Compliance',
    'services.it.feature2Desc': 'Protect your business with proper security practices and data protection.',
    'services.it.feature3': 'Troubleshooting & Support',
    'services.it.feature3Desc': 'Quick diagnosis and resolution of technical issues to minimize downtime.',

    'services.cta': 'Request a Quote for This Service',
    'services.backToServices': 'Back to All Services',
    
    'features.title': 'Why Choose Us?',
    'features.1.title': 'Reliable Automation',
    'features.1.desc': 'Stable Home Assistant setups with clear logic, clean dashboards, and local-first control.',
    'features.2.title': 'Practical IT',
    'features.2.desc': 'Hands-on infrastructure and troubleshooting that solve real problems without overengineering.',
    'features.3.title': 'Personalized Approach',
    'features.3.desc': 'Direct communication and solutions tailored to your home, workflow, and budget.',
    
    'contact.badge': 'Let\'s Talk',
    'contact.title': 'Ready to start your project?',
    'contact.subtitle': 'Fill out the form below with your project details, and we\'ll get back to you within 24 hours with a custom proposal.',
    
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number (Optional)',
    'form.service': 'Interested Service',
    'form.service.select': 'Select a service...',
    'form.size': 'Project Size / Scope',
    'form.size.1': 'Small / Consultation',
    'form.size.2': 'Medium / Standard Setup',
    'form.size.3': 'Large / Complex Project',
    'form.size.4': 'Enterprise / Full Integration',
    'form.message': 'Project Details',
    'form.message.placeholder': 'Tell us a bit about what you need...',
    'form.submit': 'Request Quote',
    'form.submitting': 'Sending...',
    'form.success': 'Quote Request Sent!',
    'form.success.desc': 'Thank you. We will be in touch shortly.',
    
    'footer.rights': 'All rights reserved.',
    'footer.address': 'Belgium',
    'footer.vat': 'BE 1022.177.189',
    'footer.owner': 'Roan Ros',
  },
  nl: {
    'nav.services': 'Diensten',
    'nav.services.survey': 'Plaatsbeschrijvingen',
    'nav.services.domotica': 'Domotica & Home Assistant',
    'nav.services.garden': 'Tuinonderhoud',
    'nav.services.it': 'IT Consultancy',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy',
    'nav.cta': 'Offerte Aanvragen',
    
    'hero.badge': 'Beschikbaar voor nieuwe projecten',
    'hero.title': 'Groene technologie voor woning, zaak en buitenruimte',
    'hero.subtitle': 'IT-consultancy met domotica-expertise ingebouwd, aangevuld met betrouwbaar tuinonderhoud voor wie rust en toekomstgerichte systemen wil.',
    'hero.cta': 'Vraag een Gratis Offerte',
    'hero.secondary': 'Onze Diensten',
    
    'services.badge': 'Onze Expertise',
    'services.title': 'Gespecialiseerde Diensten op Maat',
    'services.survey.title': 'Plaatsbeschrijvingen',
    'services.survey.desc': 'Gedetailleerde en juridisch sluitende plaatsbeschrijvingen voor verhuur, renovatie en bouwwerken.',
    'services.home.title': 'Domotica & Home Assistant',
    'services.home.desc': 'Een gespecialiseerde IT-subdienst voor Home Assistant, energie-inzicht, dashboards en betrouwbare lokale automatisatie.',
    'services.garden.title': 'Tuinonderhoud',
    'services.garden.desc': 'Betrouwbaar tuinonderhoud, snoeiwerken, seizoensopkuis en opfriswerk voor particulieren in de Antwerpse regio.',
    'services.it.title': 'IT Consultancy',
    'services.it.desc': 'Infrastructuur, automatisatiestrategie en hands-on troubleshooting voor woningen, kleine teams en groeiende ondernemingen.',
    'services.learnMore': 'Meer Info',

    'services.survey.hero': 'Plaatsbeschrijvingen & Vastgoedopnames',
    'services.survey.heroDesc': 'Professionele, juridisch sluitende plaatsbeschrijvingen voor huurwoningen, renovaties en bouwprojecten doorheen heel België.',
    'services.survey.what': 'Wat Wij Bieden',
    'services.survey.whatDesc': 'Onze dienst levert gedetailleerde, gerechtelijk aanvaardbare conditierapporten. We documenteren de exacte staat van een pand voor en na huurperiodes, renovatiewerken of bouwprojecten — ter bescherming van zowel verhuurder als huurder.',
    'services.survey.feature1': 'Gedetailleerde Fotodocumentatie',
    'services.survey.feature1Desc': 'Elke kamer, muur, vloer en armatuur wordt nauwkeurig gefotografeerd en beschreven.',
    'services.survey.feature2': 'Juridisch Sluitende Rapporten',
    'services.survey.feature2Desc': 'Rapporten die voldoen aan de Belgische wettelijke normen voor gebruik bij geschillenbeslechting.',
    'services.survey.feature3': 'Snelle Afhandeling',
    'services.survey.feature3Desc': 'Inspecties ter plaatse en digitale rapporten geleverd binnen enkele dagen.',

    'services.home.hero': 'Thuisautomatisering',
    'services.home.heroDesc': 'Transformeer uw woning met Home Assistant — het toonaangevende open-source platform voor slimme thuisautomatisering. Privé, lokaal en volledig aanpasbaar.',
    'services.home.what': 'Wat Wij Bieden',
    'services.home.whatDesc': 'Wij ontwerpen, installeren en configureren complete Home Assistant ecosystemen op maat van uw levensstijl. Van verlichting en klimaatbeheersing tot beveiliging en energiebeheer — alles vanuit één dashboard.',
    'services.home.feature1': 'Privacy-Eerst Aanpak',
    'services.home.feature1Desc': 'Alle automatisering draait lokaal — uw data verlaat nooit uw woning.',
    'services.home.feature2': 'Dashboards op Maat',
    'services.home.feature2Desc': 'Mooie, intuïtieve bedieningspanelen ontworpen voor uw specifieke opstelling.',
    'services.home.feature3': 'Doorlopende Ondersteuning',
    'services.home.feature3Desc': 'Wij voorzien in onderhoud en updates om uw slimme woning soepel te laten draaien.',

    'services.it.hero': 'IT-Consultancy, Infrastructuur & Automatisatie',
    'services.it.heroDesc': 'Strategisch technologisch advies, praktische infrastructuurondersteuning en domotica-expertise voor wie betrouwbare systemen wil zonder ruis.',
    'services.it.what': 'Wat Wij Bieden',
    'services.it.whatDesc': 'Van netwerkconfiguratie en cloudmigraties tot Home Assistant architectuur, security checks en troubleshooting: wij bouwen praktische systemen die op lange termijn begrijpelijk blijven.',
    'services.it.feature1': 'Infrastructuur Setup',
    'services.it.feature1Desc': 'Netwerkontwerp, serverconfiguratie en cloudimplementatie afgestemd op uw noden.',
    'services.it.feature2': 'Beveiliging & Compliance',
    'services.it.feature2Desc': 'Bescherm uw bedrijf met degelijke beveiligingspraktijken en gegevensbescherming.',
    'services.it.feature3': 'Troubleshooting & Support',
    'services.it.feature3Desc': 'Snelle diagnose en oplossing van technische problemen om stilstand te minimaliseren.',

    'services.cta': 'Vraag een Offerte voor Deze Dienst',
    'services.backToServices': 'Terug naar Alle Diensten',
    
    'features.title': 'Waarom voor ons kiezen?',
    'features.1.title': 'Betrouwbare Automatisatie',
    'features.1.desc': 'Stabiele Home Assistant-opstellingen met duidelijke logica, overzichtelijke dashboards en lokale controle.',
    'features.2.title': 'Praktische IT',
    'features.2.desc': 'Hands-on infrastructuur en troubleshooting die echte problemen oplossen zonder overbodige complexiteit.',
    'features.3.title': 'Persoonlijke Aanpak',
    'features.3.desc': 'Directe communicatie en oplossingen op maat van uw woning, workflow en budget.',
    
    'contact.badge': 'Laten we praten',
    'contact.title': 'Klaar om uw project te starten?',
    'contact.subtitle': 'Vul onderstaand formulier in met uw projectdetails, en wij bezorgen u binnen de 24 uur een voorstel op maat.',
    
    'form.name': 'Volledige Naam',
    'form.email': 'E-mailadres',
    'form.phone': 'Telefoonnummer (Optioneel)',
    'form.service': 'Gewenste Dienst',
    'form.service.select': 'Selecteer een dienst...',
    'form.size': 'Omvang Project',
    'form.size.1': 'Klein / Advies',
    'form.size.2': 'Medium / Standaard',
    'form.size.3': 'Groot / Complex',
    'form.size.4': 'Enterprise / Volledig',
    'form.message': 'Project Details',
    'form.message.placeholder': 'Vertel ons wat u nodig heeft...',
    'form.submit': 'Offerte Aanvragen',
    'form.submitting': 'Verzenden...',
    'form.success': 'Offerte Aanvraag Verzonden!',
    'form.success.desc': 'Bedankt. Wij nemen spoedig contact met u op.',
    
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.address': 'België',
    'footer.vat': 'BE 1022.177.189',
    'footer.owner': 'Roan Ros',
  }
};

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'nl';

  const pathname = window.location.pathname.toLowerCase();
  if (pathname.startsWith('/en/garden-maintenance')) return 'en';
  if (pathname.startsWith('/tuinonderhoud')) return 'nl';

  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'nl' || urlLang === 'en') return urlLang;

  const storedLang = window.localStorage.getItem('lang');
  if (storedLang === 'nl' || storedLang === 'en') return storedLang;

  return 'nl';
}

function syncLanguageInUrl(language: Language) {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

export const useLanguage = create<I18nStore>((set, get) => ({
  language: getInitialLanguage(),
  setLanguage: (lang) => {
    window.localStorage.setItem('lang', lang);
    syncLanguageInUrl(lang);
    set({ language: lang });
  },
  t: (key) => translations[get().language][key] || key,
}));
