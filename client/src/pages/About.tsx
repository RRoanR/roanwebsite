import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
              {t('nav.about')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('features.1.desc')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t('features.3.desc')}
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
                {t('nav.cta')}
              </a>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-muted rounded-3xl overflow-hidden"
          >
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="About us"
                className="w-full h-full object-cover"
              />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
