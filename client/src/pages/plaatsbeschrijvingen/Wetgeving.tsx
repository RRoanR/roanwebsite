import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Scale, MapPin, AlertTriangle } from "lucide-react";

export default function WetgevingPage() {
  const { language } = useLanguage();

  const regions = [
    {
      icon: MapPin,
      title: language === 'nl' ? 'Vlaanderen' : 'Flanders',
      content: language === 'nl'
        ? 'In Vlaanderen is een plaatsbeschrijving wettelijk verplicht bij de aanvang van elke huurovereenkomst. Het Vlaams Woninghuurdecreet bepaalt dat de plaatsbeschrijving moet worden opgesteld tijdens de eerste maand van de huurovereenkomst, op kosten van beide partijen. Als er geen plaatsbeschrijving werd opgemaakt, wordt vermoed dat de huurder het pand heeft ontvangen in de staat waarin het zich bevindt op het einde van de huur.'
        : 'In Flanders, a condition report is legally required at the start of every lease agreement. The Flemish Housing Rental Decree stipulates that the condition report must be drawn up during the first month of the lease, at the expense of both parties. If no condition report was made, it is presumed that the tenant received the property in the condition it is in at the end of the lease.',
    },
    {
      icon: MapPin,
      title: language === 'nl' ? 'Wallonië' : 'Wallonia',
      content: language === 'nl'
        ? 'In Wallonië gelden vergelijkbare maar niet identieke regels. Het Waals Woninghuurdecreet vereist eveneens een verplichte plaatsbeschrijving bij de intrede. De plaatsbeschrijving moet gedetailleerd en tegensprekelijk zijn. Bij afwezigheid van een plaatsbeschrijving geldt het wettelijk vermoeden dat de huurder het goed ontving in de staat zoals vastgesteld bij het einde van de huur.'
        : 'In Wallonia, similar but not identical rules apply. The Walloon Housing Rental Decree also requires a mandatory condition report at move-in. The condition report must be detailed and adversarial. In the absence of a condition report, the legal presumption applies that the tenant received the property in the condition as established at the end of the lease.',
    },
    {
      icon: MapPin,
      title: language === 'nl' ? 'Brussels Hoofdstedelijk Gewest' : 'Brussels Capital Region',
      content: language === 'nl'
        ? 'In het Brussels Hoofdstedelijk Gewest is de plaatsbeschrijving verplicht op basis van de Brusselse Huisvestingscode. De plaatsbeschrijving moet worden opgemaakt voor de intrede of binnen de eerste maand na de ingebruikname. Het document moet gedetailleerd zijn en door beide partijen worden ondertekend. De kosten worden in principe gelijk verdeeld tussen huurder en verhuurder.'
        : 'In the Brussels Capital Region, the condition report is mandatory under the Brussels Housing Code. The condition report must be drawn up before move-in or within the first month after occupancy. The document must be detailed and signed by both parties. The costs are in principle equally divided between tenant and landlord.',
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
            data-testid="text-wetgeving-title"
          >
            {language === 'nl' ? 'Wetgeving per gewest' : 'Legislation per region'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'De regels rond plaatsbeschrijvingen verschillen per gewest in België. Hieronder vindt u een overzicht per regio.'
              : 'The rules regarding condition reports differ per region in Belgium. Below you will find an overview per region.'}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-card p-6 rounded-2xl border border-border/50"
          >
            <div className="w-10 h-10 bg-yellow-500/10 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold mb-1">
                {language === 'nl' ? 'Belangrijk' : 'Important'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {language === 'nl'
                  ? 'De wetgeving verschilt aanzienlijk per gewest. Zorg ervoor dat u de regels van uw specifieke regio kent voordat u een huurovereenkomst aangaat.'
                  : 'Legislation differs significantly per region. Make sure you know the rules of your specific region before entering into a lease agreement.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {regions.map((region, i) => (
        <section key={i} className={i % 2 === 0 ? 'py-16' : 'py-16 bg-secondary/50'}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <region.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">{region.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{region.content}</p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">
            {language === 'nl' ? 'Hulp nodig met de wetgeving?' : 'Need help with legislation?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Onze experts kennen de wetgeving in elk gewest. Neem contact op voor deskundig advies.'
              : 'Our experts know the legislation in every region. Get in touch for expert advice.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-wetgeving-cta"
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
