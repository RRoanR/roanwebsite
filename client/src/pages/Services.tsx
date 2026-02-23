import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            {t('nav.services')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t('services.survey.title')}</h3>
            <p className="text-muted-foreground">{t('services.survey.desc')}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t('services.home.title')}</h3>
            <p className="text-muted-foreground">{t('services.home.desc')}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t('services.it.title')}</h3>
            <p className="text-muted-foreground">{t('services.it.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
