import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Database, Clock, Lock } from "lucide-react";

export default function PrivacyBewaringPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: language === 'nl' ? 'Privacybeleid' : 'Privacy Policy',
      content: language === 'nl'
        ? 'Roan Ros hecht groot belang aan de bescherming van uw persoonsgegevens. Wij verwerken enkel gegevens die noodzakelijk zijn voor de uitvoering van onze diensten, zoals plaatsbeschrijvingen, domotica-installaties en IT-consultancy. Uw gegevens worden nooit verkocht aan derden.'
        : 'Roan Ros places great importance on the protection of your personal data. We only process data that is necessary for the execution of our services, such as property surveys, home automation installations, and IT consultancy. Your data is never sold to third parties.',
    },
    {
      icon: Database,
      title: language === 'nl' ? 'Beeldarchief & Bewaring' : 'Image Archive & Retention',
      content: language === 'nl'
        ? 'Alle foto\'s en beelden die wij maken in het kader van plaatsbeschrijvingen worden gedurende 10 jaar bewaard in ons beveiligd digitaal archief. Gedurende deze periode hebben klanten op elk moment toegang tot hun beeldmateriaal via een persoonlijke link. Dit garandeert dat u steeds over bewijsmateriaal beschikt bij eventuele geschillen.'
        : 'All photos and images taken during property surveys are stored for 10 years in our secure digital archive. During this period, clients have access to their image materials at any time via a personal link. This ensures you always have evidence available in case of disputes.',
    },
    {
      icon: Clock,
      title: language === 'nl' ? 'Bewaartermijnen' : 'Retention Periods',
      content: language === 'nl'
        ? 'Persoonsgegevens worden bewaard zolang als nodig voor de doeleinden waarvoor ze zijn verzameld. Beeldmateriaal van plaatsbeschrijvingen wordt 10 jaar bewaard. Contactgegevens en facturatiegegevens worden bewaard conform de wettelijke verplichtingen (7 jaar voor boekhoudkundige documenten). Na afloop van de bewaartermijn worden de gegevens veilig verwijderd.'
        : 'Personal data is retained for as long as necessary for the purposes for which it was collected. Image materials from property surveys are retained for 10 years. Contact and billing information is retained in accordance with legal obligations (7 years for accounting documents). After the retention period expires, data is securely deleted.',
    },
    {
      icon: Lock,
      title: language === 'nl' ? 'GDPR & Uw Rechten' : 'GDPR & Your Rights',
      content: language === 'nl'
        ? 'Roan Ros is volledig conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). U heeft het recht op inzage, correctie, verwijdering en overdraagbaarheid van uw gegevens. U kunt ook bezwaar maken tegen de verwerking van uw gegevens. Voor alle vragen over uw privacy kunt u contact opnemen via contact@roanr.be.'
        : 'Roan Ros is fully compliant with the General Data Protection Regulation (GDPR). You have the right to access, correct, delete, and transfer your data. You can also object to the processing of your data. For all questions regarding your privacy, you can contact us at contact@roanr.be.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            data-testid="text-privacy-title"
          >
            {language === 'nl' ? 'Privacy & Bewaring' : 'Privacy & Data Retention'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            {language === 'nl'
              ? 'Hoe wij omgaan met uw gegevens en beeldmateriaal.'
              : 'How we handle your data and image materials.'}
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-display mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/50 p-6 sm:p-8 rounded-2xl text-center">
            <p className="text-muted-foreground mb-4">
              {language === 'nl'
                ? 'Heeft u vragen over uw privacy of wilt u uw rechten uitoefenen?'
                : 'Do you have questions about your privacy or would you like to exercise your rights?'}
            </p>
            <Link
              href="/contact"
              data-testid="button-privacy-contact"
              className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {language === 'nl' ? 'Neem contact op' : 'Get in Touch'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
