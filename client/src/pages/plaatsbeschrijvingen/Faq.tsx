import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  link?: string;
  linkLabel?: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export default function FaqPage() {
  const { language } = useLanguage();

  const readMore = language === 'nl' ? 'Lees meer' : 'Read more';

  const categories: FaqCategory[] = [
    {
      title: language === 'nl' ? 'Algemeen' : 'General',
      items: [
        {
          q: language === 'nl' ? 'Wat is een plaatsbeschrijving?' : 'What is a condition report?',
          a: language === 'nl'
            ? 'Een plaatsbeschrijving is een gedetailleerd rapport dat de staat van een onroerend goed vastlegt op een bepaald moment. Het dient als objectief bewijs bij huur, renovatie of bouwwerken.'
            : 'A condition report is a detailed document that records the state of a property at a specific point in time. It serves as objective evidence for rentals, renovations, or construction works.',
          link: '/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving.html',
        },
        {
          q: language === 'nl' ? 'Wat is het verschil tussen een vaststelling en een plaatsbeschrijving?' : 'What is the difference between an assessment and a condition report?',
          a: language === 'nl'
            ? 'Een plaatsbeschrijving beschrijft de toestand van een pand. Een vaststelling door een deurwaarder heeft een hogere juridische bewijskracht en kan worden gebruikt in rechtszaken.'
            : 'A condition report describes the condition of a property. An assessment by a bailiff has a higher legal evidentiary value and can be used in court proceedings.',
          link: '/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving.html',
        },
        {
          q: language === 'nl' ? 'Welke wetgeving is van toepassing?' : 'Which legislation applies?',
          a: language === 'nl'
            ? 'De wetgeving verschilt per gewest in België. Vlaanderen, Wallonië en Brussel hebben elk hun eigen regels rond plaatsbeschrijvingen bij huur.'
            : 'Legislation differs per region in Belgium. Flanders, Wallonia, and Brussels each have their own rules regarding condition reports for rentals.',
          link: '/plaatsbeschrijvingen/wetgeving-per-gewest.html',
        },
      ],
    },
    {
      title: language === 'nl' ? 'Huur' : 'Rental',
      items: [
        {
          q: language === 'nl' ? 'Is een plaatsbeschrijving verplicht bij huur?' : 'Is a condition report mandatory for rentals?',
          a: language === 'nl'
            ? 'Ja, in alle drie de Belgische gewesten is een plaatsbeschrijving wettelijk verplicht bij de aanvang van een huurovereenkomst.'
            : 'Yes, in all three Belgian regions, a condition report is legally required at the start of a lease agreement.',
          link: '/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur.html',
        },
        {
          q: language === 'nl' ? 'Wat als er geen plaatsbeschrijving werd opgemaakt?' : 'What if no condition report was made?',
          a: language === 'nl'
            ? 'Zonder plaatsbeschrijving wordt vermoed dat de huurder het pand in dezelfde staat heeft ontvangen als bij het einde van de huur. Dit kan nadelig zijn voor beide partijen.'
            : 'Without a condition report, it is presumed that the tenant received the property in the same condition as at the end of the lease. This can be disadvantageous for both parties.',
          link: '/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur.html',
        },
      ],
    },
    {
      title: language === 'nl' ? 'Werken' : 'Construction',
      items: [
        {
          q: language === 'nl' ? 'Wanneer heb ik een plaatsbeschrijving nodig bij werken?' : 'When do I need a condition report for works?',
          a: language === 'nl'
            ? 'Bij elk bouw- of renovatieproject dat trillingen, grondverzet of structurele aanpassingen veroorzaakt, is een plaatsbeschrijving sterk aanbevolen om aanpalende panden te documenteren.'
            : 'For any construction or renovation project causing vibrations, earthworks, or structural modifications, a condition report is strongly recommended to document adjacent properties.',
          link: '/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken.html',
        },
        {
          q: language === 'nl' ? 'Beschermt een plaatsbeschrijving mij als aannemer?' : 'Does a condition report protect me as a contractor?',
          a: language === 'nl'
            ? 'Ja, een voorafgaande plaatsbeschrijving beschermt u tegen valse schadeclaims. Het document bewijst de bestaande toestand voor aanvang van de werken.'
            : 'Yes, a prior condition report protects you against false damage claims. The document proves the existing condition before the start of works.',
          link: '/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken.html',
        },
      ],
    },
    {
      title: language === 'nl' ? 'Kosten' : 'Costs',
      items: [
        {
          q: language === 'nl' ? 'Hoeveel kost een plaatsbeschrijving?' : 'How much does a condition report cost?',
          a: language === 'nl'
            ? 'De kosten variëren van €150 tot €500+ afhankelijk van de grootte en complexiteit van het pand. Vraag een offerte aan voor een exacte prijs.'
            : 'Costs vary from €150 to €500+ depending on the size and complexity of the property. Request a quote for an exact price.',
          link: '/plaatsbeschrijvingen/kosten-en-wie-betaalt.html',
        },
        {
          q: language === 'nl' ? 'Wie betaalt de plaatsbeschrijving?' : 'Who pays for the condition report?',
          a: language === 'nl'
            ? 'Bij huur worden de kosten in principe gelijk verdeeld tussen huurder en verhuurder. Bij werken zijn de kosten meestal ten laste van de bouwheer.'
            : 'For rentals, costs are in principle equally divided between tenant and landlord. For construction works, costs are usually borne by the developer.',
          link: '/plaatsbeschrijvingen/kosten-en-wie-betaalt.html',
        },
        {
          q: language === 'nl' ? 'Hoe kan ik me voorbereiden om kosten te besparen?' : 'How can I prepare to save costs?',
          a: language === 'nl'
            ? 'Zorg dat het pand schoon en toegankelijk is, en heb alle documenten bij de hand. Een vlotte inspectie bespaart tijd en geld.'
            : 'Ensure the property is clean and accessible, and have all documents at hand. A smooth inspection saves time and money.',
          link: '/plaatsbeschrijvingen/voorbereiding-checklist.html',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/plaatsbeschrijvingen/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-plaatsbeschrijvingen">
            <ArrowLeft className="w-4 h-4" />
            {language === 'nl' ? 'Terug naar overzicht' : 'Back to overview'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6"
            data-testid="text-faq-title"
          >
            {language === 'nl' ? 'Veelgestelde vragen' : 'Frequently asked questions'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Vind snel antwoorden op de meest gestelde vragen over plaatsbeschrijvingen in België.'
              : 'Quickly find answers to the most frequently asked questions about condition reports in Belgium.'}
          </motion.p>
        </div>
      </section>

      {categories.map((category, catIndex) => (
        <section key={catIndex} className={catIndex % 2 === 0 ? 'py-16 bg-secondary/50' : 'py-16'}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-card p-5 rounded-2xl border border-border/50">
                    <h3 className="font-bold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.a}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        data-testid={`link-faq-readmore-${catIndex}-${i}`}
                      >
                        {readMore}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">
            {language === 'nl' ? 'Nog vragen?' : 'Still have questions?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Staat uw vraag er niet bij? Neem gerust contact met ons op. Wij helpen u graag verder.'
              : 'Can\'t find your question? Feel free to contact us. We are happy to help.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-faq-cta"
            className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {language === 'nl' ? 'Contacteer ons' : 'Contact us'}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
