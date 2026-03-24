import { useLanguage } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Home,
  Leaf,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/structuredData";
import {
  domoticaOverviewPath,
  homeAssistantFaqPath,
  homeAssistantPath,
  itConsultancyPath,
  localizedGardenPath,
} from "@shared/siteRoutes";

export default function HomePage() {
  const { t, language } = useLanguage();
  const gardenHref = localizedGardenPath("landing", language);

  const operationalHighlights = [
    language === "nl" ? "Lokale automatisatie zonder cloud-chaos" : "Local automation without cloud chaos",
    language === "nl" ? "Heldere IT-architectuur voor kleine teams" : "Clear IT architecture for small teams",
    language === "nl" ? "Praktisch onderhoud voor woning en tuin" : "Practical care for home and garden",
  ];

  return (
    <div className="site-shell min-h-screen bg-background">
      <SeoHead
        title={language === "nl" ? "Roan Ros | IT, domotica en tuinonderhoud" : "Roan Ros | IT, domotics and garden care"}
        description={
          language === "nl"
            ? "Roan Ros helpt met IT-consultancy, Home Assistant domotica en betrouwbaar tuinonderhoud in België."
            : "Roan Ros helps with IT consulting, Home Assistant domotics, and reliable garden maintenance in Belgium."
        }
        path="/"
        language={language}
        jsonLd={[
          websiteJsonLd("/"),
          localBusinessJsonLd("/", {
            description:
              language === "nl"
                ? "Bilinguale dienstverlening voor IT-consultancy, domotica en tuinonderhoud in België."
                : "Bilingual services for IT consulting, domotics, and garden maintenance in Belgium.",
            areaServed: ["Antwerpen", "Edegem", "Kontich", "Lint", "Hove"],
            serviceType: [
              language === "nl" ? "IT-consultancy" : "IT consulting",
              language === "nl" ? "Domotica & Home Assistant" : "Domotics & Home Assistant",
              language === "nl" ? "Tuinonderhoud" : "Garden maintenance",
            ],
          }),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="site-orb left-[-5rem] top-28 h-40 w-40 bg-primary/30" />
          <div className="site-orb right-[8%] top-24 h-24 w-24 bg-emerald-200/80" style={{ animationDelay: "-5s" }} />
          <div className="site-orb bottom-8 right-[-4rem] h-52 w-52 bg-amber-200/50" style={{ animationDelay: "-9s" }} />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="site-pill mb-7"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12)]" />
                {t("hero.badge")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {t("hero.title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  data-testid="button-hero-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
                >
                  {t("hero.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#services"
                  data-testid="button-hero-services"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-card/70 px-8 py-4 text-center font-semibold text-foreground transition-colors hover:bg-card"
                >
                  {t("hero.secondary")}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-10 grid gap-3 sm:grid-cols-3"
              >
                {operationalHighlights.map((item) => (
                  <div key={item} className="site-card rounded-2xl px-4 py-4 text-sm font-semibold text-foreground/90">
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative"
            >
              <div className="site-card site-card-strong site-grid-panel relative rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                      {language === "nl" ? "Innovatieve flow" : "Innovative flow"}
                    </p>
                    <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                      {language === "nl"
                        ? "IT-consultancy als basis, domotica als slimme laag erbovenop."
                        : "IT consulting as the base, domotics as the smart layer on top."}
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/40 bg-white/55 px-4 py-3 text-right shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {language === "nl" ? "Respons" : "Response"}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-foreground">24h</div>
                  </div>
                </div>

                <div className="relative mt-10 grid gap-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="site-card rounded-[1.5rem] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Server className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {language === "nl" ? "Basislaag" : "Foundation"}
                        </div>
                        <div className="mt-1 text-lg font-bold">
                          {language === "nl" ? "IT-architectuur en support" : "IT architecture and support"}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-secondary">
                      <motion.div
                        animate={{ width: ["42%", "74%", "58%"] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </motion.div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="site-card rounded-[1.5rem] p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Home className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold">
                        {language === "nl" ? "Domotica subservice" : "Domotics subservice"}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {language === "nl"
                          ? "Home Assistant, dashboards, energie, sensoren en onderhoud."
                          : "Home Assistant, dashboards, energy, sensors, and maintenance."}
                      </p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                      className="site-card rounded-[1.5rem] p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Leaf className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold">{t("nav.services.garden")}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {language === "nl"
                          ? "Praktisch tuinonderhoud met dezelfde duidelijke aanpak."
                          : "Practical garden maintenance with the same clear approach."}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ rotate: [0, 6, 0, -6, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -right-10 top-14 hidden h-40 w-40 rounded-full border border-primary/20 lg:block"
                  >
                    <div className="absolute inset-4 rounded-full border border-primary/20" />
                    <div className="absolute inset-10 rounded-full border border-primary/20" />
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_8px_hsl(var(--primary)/0.15)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="site-band py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">{t("services.badge")}</h2>
              <h3 className="text-3xl font-bold md:text-4xl">{t("services.title")}</h3>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <ServiceCard
                icon={Server}
                title={t("services.it.title")}
                description={t("services.it.desc")}
                href={itConsultancyPath}
                delay={0.1}
              />
              <ServiceCard
                icon={Leaf}
                title={t("services.garden.title")}
                description={t("services.garden.desc")}
                href={gardenHref}
                delay={0.15}
              />
            </div>

            <div className="site-card site-card-strong mx-auto mt-8 max-w-5xl rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="site-pill mb-4">{language === "nl" ? "Subservice binnen IT Consultancy" : "Subservice inside IT Consulting"}</div>
                  <h3 className="text-2xl font-bold">
                    {language === "nl"
                      ? "Domotica zit nu onder IT Consultancy, met Home Assistant als gespecialiseerde route."
                      : "Domotics now sits under IT Consulting, with Home Assistant as the specialized path."}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {language === "nl"
                      ? "Gebruik deze ingang voor architectuur, protocolkeuze, dashboards, energie en onderhoud."
                      : "Use this entry for architecture, protocol choices, dashboards, energy visibility, and maintenance."}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={domoticaOverviewPath} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                    {t("nav.services.domotica")}
                  </Link>
                  <Link href={homeAssistantPath} className="rounded-full bg-card px-5 py-3 text-sm font-semibold shadow-sm">
                    Home Assistant
                  </Link>
                  <Link href={homeAssistantFaqPath} className="rounded-full bg-card px-5 py-3 text-sm font-semibold shadow-sm">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <div className="site-pill mb-5">{language === "nl" ? "Waarom deze aanpak werkt" : "Why this approach works"}</div>
              <h2 className="text-3xl font-bold md:text-4xl">{t("features.title")}</h2>

              <div className="mt-10 space-y-6">
                {[
                  { icon: ShieldCheck, title: t("features.1.title"), desc: t("features.1.desc") },
                  { icon: Zap, title: t("features.2.title"), desc: t("features.2.desc") },
                  { icon: Users, title: t("features.3.title"), desc: t("features.3.desc") },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="site-card rounded-[1.5rem] p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="site-card site-card-strong relative rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Workflow,
                    title: language === "nl" ? "Analyse en prioriteiten" : "Analysis and priorities",
                    body: language === "nl" ? "We starten bij wat vandaag wrijving geeft." : "We start with what causes friction today.",
                  },
                  {
                    icon: Cpu,
                    title: language === "nl" ? "Slimme automatisatie" : "Smart automation",
                    body: language === "nl" ? "Robuuste flows, lokale logica en heldere dashboards." : "Robust flows, local logic, and clear dashboards.",
                  },
                  {
                    icon: CheckCircle2,
                    title: language === "nl" ? "Onderhoudbaar resultaat" : "Maintainable result",
                    body: language === "nl" ? "Minder losse tools, meer overzicht en rust." : "Fewer loose tools, more visibility and calm.",
                  },
                  {
                    icon: Leaf,
                    title: language === "nl" ? "Menselijke opvolging" : "Human follow-up",
                    body: language === "nl" ? "Direct contact, duidelijke keuzes, geen overengineering." : "Direct contact, clear decisions, no overengineering.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index }}
                    className="site-card rounded-[1.5rem] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact-section" className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="site-card site-card-strong rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                <div className="pt-2">
                  <div className="site-pill mb-5">{t("contact.badge")}</div>
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{t("contact.title")}</h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{t("contact.subtitle")}</p>

                  <div className="mt-10 space-y-5">
                    <div className="flex items-center gap-4 text-foreground/90">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{language === "nl" ? "Reactie binnen 24 uur" : "Reply within 24 hours"}</span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground/90">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{language === "nl" ? "Duidelijke scope en transparante prijs" : "Clear scope and transparent pricing"}</span>
                    </div>
                  </div>
                </div>

                <div className="text-foreground">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
