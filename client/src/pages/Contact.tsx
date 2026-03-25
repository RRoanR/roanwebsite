import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { localizedSitePath, siteRoutePairs } from "@shared/siteRoutes";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const homeHref = localizedSitePath("home", language);

  return (
    <div className="site-shell min-h-screen bg-background">
      <SeoHead
        title={language === "nl" ? "Contact | Roan Ros" : "Contact | Roan Ros"}
        description={
          language === "nl"
            ? "Neem contact op met Roan Ros voor domotica, IT consulting of tuinonderhoud in België."
            : "Contact Roan Ros for home automation, IT consulting, or garden maintenance in Belgium."
        }
        path={siteRoutePairs.contact[language]}
        language={language}
        alternates={{ ...siteRoutePairs.contact, "x-default": siteRoutePairs.contact.nl }}
        jsonLd={[
          breadcrumbJsonLd(siteRoutePairs.contact[language], [
            { name: "Home", path: homeHref },
            { name: "Contact", path: siteRoutePairs.contact[language] },
          ]),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 site-card site-card-strong rounded-[2rem] p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="site-pill mb-5">{t('contact.badge')}</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 md:mb-8" data-testid="text-contact-title">
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
                    <span className="font-medium">
                      {language === "nl" ? "Snelle reactie binnen 24 uur" : "Fast response within 24 hours"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">
                      {language === "nl" ? "Transparante prijs en duidelijke scope" : "Transparent pricing and clear scope"}
                    </span>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
