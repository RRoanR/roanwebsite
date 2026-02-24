import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Map, Home, Server } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            {t('nav.services')}
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
            delay={0.1}
          />
          <ServiceCard 
            icon={Home}
            title={t('services.home.title')}
            description={t('services.home.desc')}
            delay={0.2}
          />
          <ServiceCard 
            icon={Server}
            title={t('services.it.title')}
            description={t('services.it.desc')}
            delay={0.3}
          />
        </div>
      </div>
    </div>
  );
}
