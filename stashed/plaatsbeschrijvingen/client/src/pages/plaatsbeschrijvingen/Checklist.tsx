import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ChecklistPage() {
  const { language } = useLanguage();

  const checklistItems = [
    {
      title: language === 'nl' ? 'Alle ruimtes toegankelijk maken' : 'Make all rooms accessible',
      desc: language === 'nl'
        ? 'Zorg dat alle kamers, kelders, zolders en bijgebouwen vrij toegankelijk zijn voor de expert. Verwijder obstakels die de inspectie kunnen bemoeilijken.'
        : 'Ensure all rooms, basements, attics, and outbuildings are freely accessible to the expert. Remove obstacles that could hinder the inspection.',
    },
    {
      title: language === 'nl' ? 'Het pand grondig schoonmaken' : 'Thoroughly clean the property',
      desc: language === 'nl'
        ? 'Een schoon pand maakt het gemakkelijker om de werkelijke staat te beoordelen. Vuil kan gebreken verbergen en de inspectie vertragen.'
        : 'A clean property makes it easier to assess the actual condition. Dirt can hide defects and slow down the inspection.',
    },
    {
      title: language === 'nl' ? 'Meterstanden noteren' : 'Note meter readings',
      desc: language === 'nl'
        ? 'Noteer de meterstanden van water, gas en elektriciteit voor het bezoek. Deze worden opgenomen in de plaatsbeschrijving.'
        : 'Note the meter readings for water, gas, and electricity before the visit. These are included in the condition report.',
    },
    {
      title: language === 'nl' ? 'Sleutels en afstandsbedieningen klaarleggen' : 'Prepare keys and remote controls',
      desc: language === 'nl'
        ? 'Leg alle sleutels, afstandsbedieningen voor garagepoorten, badges voor de gemeenschappelijke delen en andere toegangsmiddelen klaar.'
        : 'Prepare all keys, remote controls for garage doors, badges for common areas, and other access devices.',
    },
    {
      title: language === 'nl' ? 'Relevante documenten verzamelen' : 'Gather relevant documents',
      desc: language === 'nl'
        ? 'Houd de huurovereenkomst, de vorige plaatsbeschrijving (indien beschikbaar), en eventuele onderhoudsrapporten bij de hand.'
        : 'Have the lease agreement, the previous condition report (if available), and any maintenance reports at hand.',
    },
    {
      title: language === 'nl' ? 'Alle installaties testen' : 'Test all installations',
      desc: language === 'nl'
        ? 'Controleer of alle installaties werken: verwarming, airconditioning, keukenapparatuur, sanitair, elektrische stopcontacten en schakelaars.'
        : 'Check that all installations are working: heating, air conditioning, kitchen appliances, sanitary facilities, electrical outlets, and switches.',
    },
    {
      title: language === 'nl' ? 'Bestaande schade documenteren' : 'Document existing damage',
      desc: language === 'nl'
        ? 'Maak zelf foto\'s van eventuele bestaande schade of gebreken die u al hebt opgemerkt. Dit kan dienen als extra referentie naast het officiële rapport.'
        : 'Take your own photos of any existing damage or defects you have already noticed. This can serve as an additional reference alongside the official report.',
    },
    {
      title: language === 'nl' ? 'Afspraak bevestigen' : 'Confirm the appointment',
      desc: language === 'nl'
        ? 'Bevestig de afspraak met de expert en zorg dat alle betrokken partijen (huurder, verhuurder of hun vertegenwoordigers) aanwezig kunnen zijn.'
        : 'Confirm the appointment with the expert and ensure all involved parties (tenant, landlord, or their representatives) can be present.',
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
            data-testid="text-checklist-title"
          >
            {language === 'nl' ? 'Voorbereiding checklist' : 'Preparation checklist'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Bereid u optimaal voor op het bezoek van de expert. Volg deze checklist voor een vlotte en volledige plaatsbeschrijving.'
              : 'Prepare optimally for the expert\'s visit. Follow this checklist for a smooth and complete condition report.'}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {checklistItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 bg-card p-5 rounded-2xl border border-border/50"
              >
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">
            {language === 'nl' ? 'Klaar voor uw plaatsbeschrijving?' : 'Ready for your condition report?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Neem contact op om een afspraak te maken. Wij zorgen voor een professioneel en volledig rapport.'
              : 'Get in touch to schedule an appointment. We provide a professional and complete report.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-checklist-cta"
            className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {language === 'nl' ? 'Afspraak maken' : 'Schedule appointment'}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
