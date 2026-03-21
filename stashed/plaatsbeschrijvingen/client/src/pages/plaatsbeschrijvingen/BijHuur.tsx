import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home, Shield, FileCheck, HandshakeIcon } from "lucide-react";

export default function BijHuurPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: language === 'nl' ? 'Waarom is het verplicht?' : 'Why is it mandatory?',
      content: language === 'nl'
        ? 'Bij het huren van een woning is een plaatsbeschrijving wettelijk verplicht in alle drie de Belgische gewesten. Dit document beschermt zowel de huurder als de verhuurder. Zonder plaatsbeschrijving wordt bij het einde van de huur vermoed dat de huurder het pand in goede staat heeft ontvangen, wat nadelig kan zijn voor de huurder.'
        : 'When renting a property, a condition report is legally required in all three Belgian regions. This document protects both the tenant and the landlord. Without a condition report, it is presumed at the end of the lease that the tenant received the property in good condition, which can be disadvantageous for the tenant.',
    },
    {
      icon: FileCheck,
      title: language === 'nl' ? 'Intredende plaatsbeschrijving' : 'Entry condition report',
      content: language === 'nl'
        ? 'De intredende plaatsbeschrijving wordt opgemaakt bij de aanvang van de huurovereenkomst, idealiter voor de sleuteloverdracht. Hierin wordt de exacte staat van elke ruimte vastgelegd: muren, vloeren, plafonds, ramen, deuren, keuken, badkamer en alle installaties. Foto\'s maken integraal deel uit van het rapport.'
        : 'The entry condition report is drawn up at the start of the lease agreement, ideally before the key handover. It records the exact condition of each room: walls, floors, ceilings, windows, doors, kitchen, bathroom, and all installations. Photos are an integral part of the report.',
    },
    {
      icon: HandshakeIcon,
      title: language === 'nl' ? 'Uittredende plaatsbeschrijving' : 'Exit condition report',
      content: language === 'nl'
        ? 'Bij het einde van de huurovereenkomst wordt een uittredende plaatsbeschrijving opgemaakt. Deze wordt vergeleken met de intredende versie om eventuele schade of slijtage vast te stellen. Normale slijtage (vetusteit) valt niet ten laste van de huurder. Schade die het gevolg is van nalatigheid of verkeerd gebruik kan wel worden verhaald.'
        : 'At the end of the lease agreement, an exit condition report is drawn up. This is compared with the entry version to identify any damage or wear. Normal wear and tear (vetustity) is not the tenant\'s responsibility. Damage resulting from negligence or improper use can be recovered.',
    },
    {
      icon: Home,
      title: language === 'nl' ? 'Wat als er geen plaatsbeschrijving is?' : 'What if there is no condition report?',
      content: language === 'nl'
        ? 'Als er geen plaatsbeschrijving werd opgemaakt bij de intrede, wordt wettelijk vermoed dat de huurder het goed in dezelfde staat heeft ontvangen als bij het einde van de huur. Dit betekent dat de verhuurder moeilijk schade kan bewijzen en de huurder het risico loopt om aansprakelijk te worden gesteld voor bestaande gebreken. Het is dus in het belang van beide partijen.'
        : 'If no condition report was drawn up at entry, it is legally presumed that the tenant received the property in the same condition as at the end of the lease. This means the landlord has difficulty proving damage and the tenant risks being held liable for existing defects. It is therefore in the interest of both parties.',
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
            data-testid="text-bijhuur-title"
          >
            {language === 'nl' ? 'Plaatsbeschrijving bij huur' : 'Condition report for rentals'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Ontdek wanneer en waarom een plaatsbeschrijving nodig is bij het huren van een woning in België.'
              : 'Discover when and why a condition report is needed when renting a property in Belgium.'}
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
            {language === 'nl' ? 'Plaatsbeschrijving voor uw huurpand?' : 'Condition report for your rental property?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Wij maken professionele plaatsbeschrijvingen op voor zowel huurders als verhuurders. Vraag vandaag nog een offerte aan.'
              : 'We create professional condition reports for both tenants and landlords. Request a quote today.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-bijhuur-cta"
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
