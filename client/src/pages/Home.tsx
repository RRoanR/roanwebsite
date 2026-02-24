import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Map, Home, Server, ShieldCheck, Zap, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import logoImg from "@assets/roanros_logo_1771933628066.png";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src={logoImg}
            alt=""
            className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-contain opacity-[0.18] dark:opacity-[0.22]"
          />
        </div>

        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-balance mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                data-testid="button-hero-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href="/plaatsbeschrijvingen"
                data-testid="button-hero-services"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-center text-foreground bg-secondary hover:bg-secondary/80 transition-colors"
              >
                {t('hero.secondary')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">{t('services.badge')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-display">{t('services.title')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Map}
              title={t('services.survey.title')}
              description={t('services.survey.desc')}
              href="/plaatsbeschrijvingen"
              delay={0.1}
            />
            <ServiceCard
              icon={Home}
              title={t('services.home.title')}
              description={t('services.home.desc')}
              href="/domotica"
              delay={0.2}
            />
            <ServiceCard
              icon={Server}
              title={t('services.it.title')}
              description={t('services.it.desc')}
              href="/it-consultancy"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">{t('features.title')}</h2>

              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: t('features.1.title'), desc: t('features.1.desc') },
                  { icon: Zap, title: t('features.2.title'), desc: t('features.2.desc') },
                  { icon: Users, title: t('features.3.title'), desc: t('features.3.desc') },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/service-survey.jpg"
                alt="Professional service detail"
                className="rounded-3xl shadow-2xl object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 left-2 sm:-bottom-8 sm:-left-8 bg-card p-4 sm:p-6 rounded-2xl shadow-xl border border-border max-w-[200px] sm:max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/service-it.jpg')] bg-cover bg-center mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="pt-4 lg:pt-8">
              <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">{t('contact.badge')}</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-white">{t('contact.title')}</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-md">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6 mt-12 hidden lg:block">
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">Fast response time (24h)</span>
                </div>
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">Transparent pricing</span>
                </div>
              </div>
            </div>

            <div className="text-foreground">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
