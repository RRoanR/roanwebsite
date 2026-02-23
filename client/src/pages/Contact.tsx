import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
              {t('nav.contact')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('contact.subtitle')}
            </p>
          </motion.div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
