import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-8" data-testid="text-contact-title">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Fast response time (24h)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Transparent pricing</span>
                </div>
              </div>

              <div className="mt-10 text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">contact@roanr.be</p>
                <p>+32 468 25 95 03</p>
              </div>
            </motion.div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
