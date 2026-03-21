import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, Scale, Clock, FileText, MapPin, Euro, ClipboardList, ArrowRight, HelpCircle, Shield } from "lucide-react";

const infoPages = [
  { icon: FileText, href: "/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving.html" },
  { icon: MapPin, href: "/plaatsbeschrijvingen/wetgeving-per-gewest.html" },
  { icon: Scale, href: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur.html" },
  { icon: Camera, href: "/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken.html" },
  { icon: Euro, href: "/plaatsbeschrijvingen/kosten-en-wie-betaalt.html" },
  { icon: ClipboardList, href: "/plaatsbeschrijvingen/voorbereiding-checklist.html" },
  { icon: FileText, href: "/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving.html" },
];

export default function PlaatsbeschrijvingenPage() {
  const { language } = useLanguage();
  const nl = language === 'nl';

  const qnaItems = [
    {
      q: nl ? 'Wat is een plaatsbeschrijving?' : 'What is a condition report?',
      a: nl ? 'Een gedetailleerd rapport dat de staat van een pand documenteert voor en na een huurperiode, renovatie of bouwproject.' : 'A detailed report documenting the condition of a property before and after a rental period, renovation, or construction project.',
      link: '/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving.html',
    },
    {
      q: nl ? 'Wat zegt de wetgeving per gewest?' : 'What does regional legislation say?',
      a: nl ? 'De regels rond plaatsbeschrijvingen verschillen per gewest in België. Vlaanderen, Wallonië en Brussel hebben elk hun eigen vereisten.' : 'Rules around condition reports differ per region in Belgium. Flanders, Wallonia, and Brussels each have their own requirements.',
      link: '/plaatsbeschrijvingen/wetgeving-per-gewest.html',
    },
    {
      q: nl ? 'Wanneer is het verplicht bij huur?' : 'When is it mandatory for rentals?',
      a: nl ? 'Bij woninghuur is een plaatsbeschrijving wettelijk verplicht. Zonder dit document wordt aangenomen dat de huurder het pand in goede staat heeft ontvangen.' : 'For residential rentals, a condition report is legally required. Without this document, it is assumed the tenant received the property in good condition.',
      link: '/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur.html',
    },
    {
      q: nl ? 'Wat kost het en wie betaalt?' : 'What does it cost and who pays?',
      a: nl ? 'De kosten variëren afhankelijk van de grootte en het type pand. Meestal worden de kosten gedeeld tussen verhuurder en huurder.' : 'Costs vary depending on the size and type of property. Typically, costs are shared between landlord and tenant.',
      link: '/plaatsbeschrijvingen/kosten-en-wie-betaalt.html',
    },
    {
      q: nl ? 'Hoe bereid ik mij voor?' : 'How do I prepare?',
      a: nl ? 'Zorg dat het pand toegankelijk en opgeruimd is. Bekijk onze volledige checklist voor een vlotte inspectie.' : 'Make sure the property is accessible and tidy. Check our complete checklist for a smooth inspection.',
      link: '/plaatsbeschrijvingen/voorbereiding-checklist.html',
    },
    {
      q: nl ? 'Verschil vaststelling vs plaatsbeschrijving?' : 'Difference: assessment vs condition report?',
      a: nl ? 'Een vaststelling en een plaatsbeschrijving hebben verschillende juridische betekenissen en toepassingen.' : 'An assessment and a condition report have different legal meanings and applications.',
      link: '/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving.html',
    },
  ];

  const pageInfo = infoPages.map((p, i) => ({
    ...p,
    title: [
      nl ? 'Wat is een plaatsbeschrijving?' : 'What is a condition report?',
      nl ? 'Wetgeving per gewest' : 'Legislation per region',
      nl ? 'Bij huur' : 'For rentals',
      nl ? 'Bij werken' : 'For construction',
      nl ? 'Kosten & wie betaalt' : 'Costs & who pays',
      nl ? 'Voorbereiding checklist' : 'Preparation checklist',
      nl ? 'Vaststelling vs plaatsbeschrijving' : 'Assessment vs condition report',
    ][i],
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service-survey.jpg"
            alt="Plaatsbeschrijvingen"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6"
            data-testid="text-plaatsbeschrijvingen-title"
          >
            {nl ? 'Plaatsbeschrijvingen' : 'Condition Reports'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {nl
              ? 'Professionele, juridisch sluitende plaatsbeschrijvingen voor huurwoningen, renovaties en bouwprojecten doorheen heel België.'
              : 'Professional, legally compliant condition reports for rental properties, renovations, and construction projects across Belgium.'}
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
            {nl ? 'Veelgestelde vragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {qnaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-6 rounded-2xl border border-border/50"
              >
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground mb-3">{item.a}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  data-testid={`link-qna-${i}`}
                >
                  {nl ? 'Lees meer' : 'Read more'} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/plaatsbeschrijvingen/faq.html"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              data-testid="link-faq"
            >
              <HelpCircle className="w-4 h-4" />
              {nl ? 'Bekijk alle FAQ\'s' : 'View all FAQs'}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
            {nl ? 'Meer informatie' : 'More Information'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pageInfo.map((page, i) => (
              <Link
                key={i}
                href={page.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 hover:border-primary/20 transition-all group"
                data-testid={`link-info-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <page.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm">{page.title}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <Link
              href="/privacy-en-bewaring/"
              className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 hover:border-primary/20 transition-all group"
              data-testid="link-privacy"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">{nl ? 'Privacy & bewaring' : 'Privacy & retention'}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="pt-4 lg:pt-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-white">
                {nl ? 'Offerte aanvragen' : 'Request a Quote'}
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
                {nl
                  ? 'Vul het formulier in met uw projectdetails en wij bezorgen u binnen 24 uur een voorstel op maat.'
                  : 'Fill in the form with your project details and we\'ll send you a custom proposal within 24 hours.'}
              </p>
              <div className="space-y-4 hidden lg:block">
                {[
                  nl ? 'Snelle responstijd (24u)' : 'Fast response time (24h)',
                  nl ? 'Transparante prijzen' : 'Transparent pricing',
                  nl ? 'Juridisch sluitend rapport' : 'Legally compliant report',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary-foreground/90">
                    <Camera className="w-4 h-4 text-accent" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-foreground">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
