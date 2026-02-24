import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Network, ShieldCheck, HeadphonesIcon, ArrowLeft } from "lucide-react";

export default function ITConsultancyPage() {
  const { t, language } = useLanguage();

  const features = [
    { icon: Network, title: t('services.it.feature1'), desc: t('services.it.feature1Desc') },
    { icon: ShieldCheck, title: t('services.it.feature2'), desc: t('services.it.feature2Desc') },
    { icon: HeadphonesIcon, title: t('services.it.feature3'), desc: t('services.it.feature3Desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service-it.jpg"
            alt="IT consulting"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            data-testid="text-it-consultancy-title"
          >
            {t('services.it.hero')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            {t('services.it.heroDesc')}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold font-display mb-4">{t('services.it.what')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('services.it.whatDesc')}</p>
            </div>
            <img
              src="/images/service-it.jpg"
              alt="IT infrastructure"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/contact"
            data-testid="button-it-consultancy-cta"
            className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {t('services.cta')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
