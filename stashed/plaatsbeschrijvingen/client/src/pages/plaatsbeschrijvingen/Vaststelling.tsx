import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileSearch, FileText, ArrowLeftRight } from "lucide-react";

export default function VaststellingPage() {
  const { language } = useLanguage();

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
            data-testid="text-vaststelling-title"
          >
            {language === 'nl' ? 'Vaststelling vs plaatsbeschrijving' : 'Assessment vs condition report'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Twee termen die vaak door elkaar worden gebruikt, maar een belangrijk verschil hebben. Ontdek wat ze betekenen.'
              : 'Two terms that are often used interchangeably, but have an important difference. Discover what they mean.'}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-display mb-3">
                {language === 'nl' ? 'Plaatsbeschrijving' : 'Condition report'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'nl'
                  ? 'Een plaatsbeschrijving is een gedetailleerd rapport dat de toestand van een onroerend goed beschrijft op een bepaald moment. Het wordt typisch opgesteld bij huur of werken en dient als objectief referentiepunt. Het beschrijft de staat van het pand zonder een oordeel te vellen over de oorzaak van eventuele schade.'
                  : 'A condition report is a detailed document describing the state of a property at a specific point in time. It is typically drawn up for rentals or construction works and serves as an objective reference point. It describes the condition of the property without making judgments about the cause of any damage.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-display mb-3">
                {language === 'nl' ? 'Vaststelling' : 'Assessment'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'nl'
                  ? 'Een vaststelling (of proces-verbaal van vaststelling) is een juridisch document dat door een gerechtsdeurwaarder wordt opgemaakt. Het heeft een hogere bewijskracht dan een gewone plaatsbeschrijving en kan worden gebruikt als bewijs in rechtszaken. Een vaststelling kan ook betrekking hebben op andere zaken dan de staat van een gebouw, zoals overlast of contractschendingen.'
                  : 'An assessment (or official report of findings) is a legal document drawn up by a bailiff. It has a higher evidentiary value than a regular condition report and can be used as evidence in court proceedings. An assessment can also relate to matters other than the condition of a building, such as nuisance or contract violations.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">
                {language === 'nl' ? 'De belangrijkste verschillen' : 'The key differences'}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {language === 'nl'
                    ? 'Het belangrijkste verschil zit in de bewijskracht en de opsteller. Een plaatsbeschrijving wordt doorgaans opgemaakt door een vastgoedexpert of landmeter en heeft een beschrijvend karakter. Een vaststelling door een deurwaarder heeft een authentieke bewijskracht en kan niet worden betwist in de rechtbank.'
                    : 'The main difference lies in the evidentiary value and the author. A condition report is usually drawn up by a real estate expert or surveyor and is descriptive in nature. An assessment by a bailiff has authentic evidentiary value and cannot be disputed in court.'}
                </p>
                <p>
                  {language === 'nl'
                    ? 'Qua kosten is een vaststelling door een deurwaarder doorgaans duurder dan een plaatsbeschrijving door een expert. De keuze hangt af van de situatie: bij een standaard huurovereenkomst volstaat een plaatsbeschrijving, maar bij conflicten of juridische procedures kan een vaststelling noodzakelijk zijn.'
                    : 'In terms of costs, an assessment by a bailiff is usually more expensive than a condition report by an expert. The choice depends on the situation: for a standard lease agreement, a condition report suffices, but in conflicts or legal proceedings, an assessment may be necessary.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display mb-4">
              {language === 'nl' ? 'Wanneer welke kiezen?' : 'When to choose which?'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-2xl border border-border/50">
                <h3 className="font-bold mb-2 text-sm">
                  {language === 'nl' ? 'Kies een plaatsbeschrijving bij:' : 'Choose a condition report for:'}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>{language === 'nl' ? '- Aanvang of einde van een huurovereenkomst' : '- Start or end of a lease agreement'}</li>
                  <li>{language === 'nl' ? '- Voor en na bouw- of renovatiewerken' : '- Before and after construction or renovation works'}</li>
                  <li>{language === 'nl' ? '- Preventieve documentatie van een pand' : '- Preventive documentation of a property'}</li>
                </ul>
              </div>
              <div className="bg-card p-5 rounded-2xl border border-border/50">
                <h3 className="font-bold mb-2 text-sm">
                  {language === 'nl' ? 'Kies een vaststelling bij:' : 'Choose an assessment for:'}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>{language === 'nl' ? '- Geschillen of conflicten' : '- Disputes or conflicts'}</li>
                  <li>{language === 'nl' ? '- Juridische procedures' : '- Legal proceedings'}</li>
                  <li>{language === 'nl' ? '- Situaties met hoge bewijslast' : '- Situations with high burden of proof'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">
            {language === 'nl' ? 'Niet zeker welke u nodig heeft?' : 'Not sure which one you need?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Neem contact op en wij adviseren u graag over de beste oplossing voor uw situatie.'
              : 'Get in touch and we will be happy to advise you on the best solution for your situation.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-vaststelling-cta"
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
