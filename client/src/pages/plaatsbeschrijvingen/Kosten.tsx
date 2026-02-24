import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Euro, Users, Calculator, Info } from "lucide-react";

export default function KostenPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Euro,
      title: language === 'nl' ? 'Typische kosten' : 'Typical costs',
      content: language === 'nl'
        ? 'De kosten van een plaatsbeschrijving variëren afhankelijk van de grootte van het pand, het aantal kamers en de complexiteit van het gebouw. Voor een standaard appartement liggen de prijzen doorgaans tussen €150 en €350. Voor grotere woningen of commerciële panden kunnen de kosten oplopen tot €500 of meer. Een exacte prijs hangt altijd af van de specifieke situatie.'
        : 'The costs of a condition report vary depending on the size of the property, the number of rooms, and the complexity of the building. For a standard apartment, prices typically range between €150 and €350. For larger homes or commercial properties, costs can rise to €500 or more. An exact price always depends on the specific situation.',
    },
    {
      icon: Users,
      title: language === 'nl' ? 'Wie betaalt?' : 'Who pays?',
      content: language === 'nl'
        ? 'Bij huur worden de kosten van de plaatsbeschrijving in principe gelijk verdeeld tussen huurder en verhuurder. Dit is wettelijk vastgelegd in de Belgische huurwetgeving. Bij werken (bouw of renovatie) zijn de kosten meestal ten laste van de bouwheer of aannemer. In sommige gevallen kunnen de kosten ook contractueel anders worden verdeeld tussen partijen.'
        : 'For rentals, the costs of the condition report are in principle equally divided between tenant and landlord. This is legally established in Belgian rental legislation. For works (construction or renovation), the costs are usually borne by the developer or contractor. In some cases, costs can also be contractually divided differently between parties.',
    },
    {
      icon: Calculator,
      title: language === 'nl' ? 'Wat beïnvloedt de prijs?' : 'What influences the price?',
      content: language === 'nl'
        ? 'Verschillende factoren bepalen de uiteindelijke prijs: de oppervlakte van het pand, het aantal te inspecteren ruimtes, de aanwezigheid van bijgebouwen of tuinen, de staat van het pand (meer gebreken = meer documentatie), de verplaatsingskosten van de expert, en of het een intredende, uittredende of vergelijkende plaatsbeschrijving betreft.'
        : 'Several factors determine the final price: the surface area of the property, the number of rooms to inspect, the presence of outbuildings or gardens, the condition of the property (more defects = more documentation), the travel costs of the expert, and whether it is an entry, exit, or comparative condition report.',
    },
    {
      icon: Info,
      title: language === 'nl' ? 'Besparen op kosten' : 'Saving on costs',
      content: language === 'nl'
        ? 'U kunt besparen door het pand goed voor te bereiden voor het bezoek van de expert: zorg dat alle ruimtes toegankelijk zijn, dat het pand schoon is en dat u alle relevante documenten bij de hand heeft. Een vlot verlopende inspectie bespaart tijd en dus geld. Vraag altijd een offerte op maat aan zodat u precies weet wat u kunt verwachten.'
        : 'You can save by preparing the property well for the expert\'s visit: ensure all rooms are accessible, the property is clean, and you have all relevant documents at hand. A smooth inspection saves time and therefore money. Always request a custom quote so you know exactly what to expect.',
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
            data-testid="text-kosten-title"
          >
            {language === 'nl' ? 'Kosten en wie betaalt' : 'Costs and who pays'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Een overzicht van de kosten van een plaatsbeschrijving en wie verantwoordelijk is voor de betaling.'
              : 'An overview of the costs of a condition report and who is responsible for payment.'}
          </motion.p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? 'py-16 bg-secondary/50' : 'py-16'}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">
            {language === 'nl' ? 'Vraag een offerte op maat' : 'Request a custom quote'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Wij bieden transparante prijzen zonder verborgen kosten. Vraag vandaag nog een vrijblijvende offerte aan.'
              : 'We offer transparent pricing with no hidden costs. Request a no-obligation quote today.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-kosten-cta"
            className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {language === 'nl' ? 'Offerte aanvragen' : 'Request a quote'}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
