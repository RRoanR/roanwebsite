import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, Users, ClipboardList, Calendar } from "lucide-react";

export default function WatIsPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: language === 'nl' ? 'Definitie' : 'Definition',
      content: language === 'nl'
        ? 'Een plaatsbeschrijving is een gedetailleerd rapport dat de staat van een onroerend goed vastlegt op een bepaald moment. Dit document beschrijft nauwkeurig de toestand van muren, vloeren, plafonds, ramen, deuren, sanitair en alle andere elementen van het pand. Het dient als objectief bewijs van de staat van het gebouw.'
        : 'A condition report is a detailed document that records the state of a property at a specific point in time. This document accurately describes the condition of walls, floors, ceilings, windows, doors, sanitary facilities, and all other elements of the property. It serves as objective evidence of the building\'s condition.',
    },
    {
      icon: Calendar,
      title: language === 'nl' ? 'Wanneer wordt het gebruikt?' : 'When is it used?',
      content: language === 'nl'
        ? 'Een plaatsbeschrijving wordt opgesteld bij de aanvang en het einde van een huurovereenkomst, voor en na renovatie- of bouwwerken, bij de aankoop of verkoop van een pand, en bij geschillen over de staat van een eigendom. Het is wettelijk verplicht bij huurovereenkomsten in België.'
        : 'A condition report is drawn up at the start and end of a lease agreement, before and after renovation or construction works, at the purchase or sale of a property, and in disputes about the condition of a property. It is legally required for lease agreements in Belgium.',
    },
    {
      icon: Users,
      title: language === 'nl' ? 'Wie bestelt het?' : 'Who orders it?',
      content: language === 'nl'
        ? 'Een plaatsbeschrijving kan worden besteld door verhuurders, huurders, eigenaars, aannemers, vastgoedkantoren of syndici. In de praktijk neemt meestal de verhuurder of eigenaar het initiatief, maar beide partijen hebben er baat bij. Een onafhankelijke expert zorgt voor een objectief en onbetwistbaar verslag.'
        : 'A condition report can be ordered by landlords, tenants, owners, contractors, real estate agencies, or property managers. In practice, the landlord or owner usually takes the initiative, but both parties benefit from it. An independent expert ensures an objective and indisputable report.',
    },
    {
      icon: ClipboardList,
      title: language === 'nl' ? 'Wat bevat het?' : 'What does it include?',
      content: language === 'nl'
        ? 'Een volledige plaatsbeschrijving bevat een gedetailleerde beschrijving per ruimte, foto\'s van alle relevante elementen, de staat van muren, vloeren, plafonds en schrijnwerk, de werking van installaties (elektriciteit, verwarming, sanitair), meterstanden, en eventuele gebreken of beschadigingen. Het rapport wordt ondertekend door alle betrokken partijen.'
        : 'A complete condition report contains a detailed description per room, photos of all relevant elements, the condition of walls, floors, ceilings, and woodwork, the operation of installations (electricity, heating, sanitary), meter readings, and any defects or damages. The report is signed by all involved parties.',
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
            data-testid="text-watis-title"
          >
            {language === 'nl' ? 'Wat is een plaatsbeschrijving?' : 'What is a condition report?'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Alles wat u moet weten over plaatsbeschrijvingen: wat ze zijn, wanneer ze nodig zijn en wat erin staat.'
              : 'Everything you need to know about condition reports: what they are, when they are needed, and what they contain.'}
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
            {language === 'nl' ? 'Een plaatsbeschrijving nodig?' : 'Need a condition report?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Neem contact met ons op voor een vrijblijvende offerte. Wij staan klaar om u te helpen.'
              : 'Contact us for a no-obligation quote. We are ready to help you.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-watis-cta"
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
