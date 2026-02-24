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
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Quote',
    
    'hero.badge': 'Available for new projects',
    'hero.title': 'Expert Solutions for Your Property & Tech Needs',
    'hero.subtitle': 'Combining precision topographical surveying, smart home automation, and professional IT consulting to deliver results you can trust.',
    'hero.cta': 'Request a Free Quote',
    'hero.secondary': 'Explore Services',
    
    'services.badge': 'Our Expertise',
    'services.title': 'Specialized Services Tailored for You',
    'services.survey.title': 'Topographical Surveying',
    'services.survey.desc': 'Accurate, legally compliant condition reports (Plaatsbeschrijvingen) for rental properties, renovations, and construction projects.',
    'services.home.title': 'Smart Home Automation',
    'services.home.desc': 'Consulting and installation of Home Assistant ecosystems. Secure, efficient, and seamless automation for modern living.',
    'services.it.title': 'IT Consulting',
    'services.it.desc': 'Strategic IT advice, infrastructure setup, and troubleshooting for small businesses and individuals.',
    
    'features.title': 'Why Choose Us?',
    'features.1.title': 'Belgian Standards',
    'features.1.desc': 'Fully compliant with local regulations and building standards.',
    'features.2.title': 'Tech-Driven',
    'features.2.desc': 'Utilizing the latest software and hardware for unmatched precision.',
    'features.3.title': 'Personalized Approach',
    'features.3.desc': 'Direct communication and customized solutions for every client.',
    
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
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.cta': 'Offerte Aanvragen',
    
    'hero.badge': 'Beschikbaar voor nieuwe projecten',
    'hero.title': 'Expert Oplossingen voor uw Vastgoed & IT Noden',
    'hero.subtitle': 'Nauwkeurige plaatsbeschrijvingen, slimme thuisautomatisering en professionele IT-consultancy, op maat geleverd.',
    'hero.cta': 'Vraag een Gratis Offerte',
    'hero.secondary': 'Bekijk Diensten',
    
    'services.badge': 'Onze Expertise',
    'services.title': 'Gespecialiseerde Diensten op Maat',
    'services.survey.title': 'Plaatsbeschrijvingen',
    'services.survey.desc': 'Gedetailleerde en juridisch sluitende plaatsbeschrijvingen voor verhuur, renovatie en bouwwerken.',
    'services.home.title': 'Thuisautomatisering',
    'services.home.desc': 'Advies en implementatie van Home Assistant ecosystemen. Veilige en naadloze automatisering voor een slimme woning.',
    'services.it.title': 'IT Consultant',
    'services.it.desc': 'Strategisch IT-advies, infrastructuur en probleemoplossing voor zelfstandigen, KMO\'s en particulieren.',
    
    'features.title': 'Waarom voor ons kiezen?',
    'features.1.title': 'Belgische Normen',
    'features.1.desc': 'Volledig in overeenstemming met de lokale wetgeving en bouwnormen.',
    'features.2.title': 'Technologie-Gedreven',
    'features.2.desc': 'Gebruik van de nieuwste software en hardware voor ongeëvenaarde precisie.',
    'features.3.title': 'Persoonlijke Aanpak',
    'features.3.desc': 'Directe communicatie en oplossingen op maat voor elke klant.',
    
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

export const useLanguage = create<I18nStore>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => translations[get().language][key] || key,
}));
