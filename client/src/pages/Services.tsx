import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Map, Home, Server } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6" data-testid="text-services-title">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Map}
              title={t('services.survey.title')}
              description={t('services.survey.desc')}
              href="/services/survey"
              delay={0.1}
            />
            <ServiceCard
              icon={Home}
              title={t('services.home.title')}
              description={t('services.home.desc')}
              href="/services/home-automation"
              delay={0.2}
            />
            <ServiceCard
              icon={Server}
              title={t('services.it.title')}
              description={t('services.it.desc')}
              href="/services/it-consulting"
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              href="/contact"
              data-testid="button-services-cta"
              className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
