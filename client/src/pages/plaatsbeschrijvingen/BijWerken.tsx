import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, HardHat, Camera, ShieldCheck, Building } from "lucide-react";

export default function BijWerkenPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: HardHat,
      title: language === 'nl' ? 'Waarom bij bouw- of renovatiewerken?' : 'Why for construction or renovation works?',
      content: language === 'nl'
        ? 'Bij bouw- of renovatiewerken in de buurt van uw eigendom bestaat het risico op schade aan aanpalende panden. Een plaatsbeschrijving voor de aanvang van de werken documenteert de bestaande toestand van nabijgelegen gebouwen. Na afloop van de werken kan een vergelijking worden gemaakt om eventuele schade objectief vast te stellen.'
        : 'During construction or renovation works near your property, there is a risk of damage to adjacent buildings. A condition report before the start of works documents the existing condition of nearby buildings. After completion of works, a comparison can be made to objectively determine any damage.',
    },
    {
      icon: Camera,
      title: language === 'nl' ? 'Wat wordt vastgelegd?' : 'What is recorded?',
      content: language === 'nl'
        ? 'Bij een plaatsbeschrijving voor werken worden alle zichtbare elementen van het gebouw gedetailleerd beschreven en gefotografeerd: gevels, funderingen, scheuren, voegen, ramen, deuren, en de binnenafwerking. Bestaande gebreken worden nauwkeurig gedocumenteerd zodat nieuwe schade duidelijk onderscheiden kan worden van vooraf bestaande problemen.'
        : 'In a condition report for works, all visible elements of the building are described and photographed in detail: facades, foundations, cracks, joints, windows, doors, and interior finishes. Existing defects are carefully documented so that new damage can be clearly distinguished from pre-existing problems.',
    },
    {
      icon: ShieldCheck,
      title: language === 'nl' ? 'Bescherming voor alle partijen' : 'Protection for all parties',
      content: language === 'nl'
        ? 'Een plaatsbeschrijving bij werken beschermt zowel de bouwheer als de eigenaars van aanpalende panden. De aannemer wordt beschermd tegen valse schadeclaims, terwijl buren een objectief bewijs hebben als er effectief schade optreedt. Verzekeringsmaatschappijen vereisen vaak een voorafgaande plaatsbeschrijving bij grote bouwprojecten.'
        : 'A condition report for works protects both the developer and the owners of adjacent properties. The contractor is protected against false damage claims, while neighbors have objective evidence if damage actually occurs. Insurance companies often require a prior condition report for large construction projects.',
    },
    {
      icon: Building,
      title: language === 'nl' ? 'Wanneer is het verplicht?' : 'When is it mandatory?',
      content: language === 'nl'
        ? 'Hoewel een plaatsbeschrijving bij werken niet altijd wettelijk verplicht is, wordt het sterk aanbevolen bij elk project dat trillingen, grondverzet of structurele aanpassingen met zich meebrengt. Sommige gemeenten en stedenbouwkundige vergunningen vereisen een voorafgaande plaatsbeschrijving. Het is ook een standaardvereiste bij veel verzekeringspolissen.'
        : 'Although a condition report for works is not always legally required, it is strongly recommended for any project involving vibrations, earthworks, or structural modifications. Some municipalities and building permits require a prior condition report. It is also a standard requirement in many insurance policies.',
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
            data-testid="text-bijwerken-title"
          >
            {language === 'nl' ? 'Plaatsbeschrijving bij werken' : 'Condition report for construction'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Bescherm uw eigendom bij bouw- en renovatiewerken met een professionele plaatsbeschrijving.'
              : 'Protect your property during construction and renovation works with a professional condition report.'}
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
            {language === 'nl' ? 'Werken gepland?' : 'Planning construction works?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'nl'
              ? 'Laat een plaatsbeschrijving opmaken voor de start van uw project. Zo bent u beschermd tegen onterechte schadeclaims.'
              : 'Have a condition report drawn up before the start of your project. This protects you against unjustified damage claims.'}
          </p>
          <Link
            href="/contact"
            data-testid="button-bijwerken-cta"
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
