import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Cpu, HeadphonesIcon, Home, Network, ShieldCheck } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structuredData";
import { domoticaOverviewPath, homeAssistantPath, itConsultancyPath } from "@shared/siteRoutes";

export default function ITConsultancyPage() {
  const { t, language } = useLanguage();

  const features = [
    { icon: Network, title: t("services.it.feature1"), desc: t("services.it.feature1Desc") },
    { icon: ShieldCheck, title: t("services.it.feature2"), desc: t("services.it.feature2Desc") },
    { icon: HeadphonesIcon, title: t("services.it.feature3"), desc: t("services.it.feature3Desc") },
  ];

  return (
    <div className="site-shell min-h-screen bg-background">
      <SeoHead
        title={language === "nl" ? "IT-consultancy, infrastructuur en domotica | Roan Ros" : "IT consulting, infrastructure and domotics | Roan Ros"}
        description={
          language === "nl"
            ? "Strategische IT-consultancy, infrastructuur, Home Assistant domotica en troubleshooting voor zelfstandigen en kleine teams."
            : "Strategic IT consulting, infrastructure, Home Assistant domotics, and troubleshooting for freelancers and small teams."
        }
        path={itConsultancyPath}
        language={language}
        jsonLd={[
          breadcrumbJsonLd(itConsultancyPath, [
            { name: "Home", path: "/" },
            { name: language === "nl" ? "IT Consultancy" : "IT Consulting", path: itConsultancyPath },
          ]),
          serviceJsonLd(itConsultancyPath, {
            serviceName: language === "nl" ? "IT-consultancy en domotica" : "IT consulting and domotics",
            serviceType: language === "nl" ? "IT infrastructuur, support en Home Assistant" : "IT infrastructure, support, and Home Assistant",
            description:
              language === "nl"
                ? "Praktische IT-oplossingen voor infrastructuur, Home Assistant, beveiliging en troubleshooting."
                : "Practical IT solutions for infrastructure, Home Assistant, security, and troubleshooting.",
            areaServed: ["Belgium"],
          }),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pb-16 pt-32 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-back-home">
              <ArrowLeft className="h-4 w-4" />
              {language === "nl" ? "Terug naar Home" : "Back to Home"}
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-2xl">
                <div className="site-pill mb-5">{language === "nl" ? "Hoofdservice" : "Core service"}</div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold md:text-5xl"
                  data-testid="text-it-consultancy-title"
                >
                  {t("services.it.hero")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-6 text-xl text-muted-foreground"
                >
                  {t("services.it.heroDesc")}
                </motion.p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={domoticaOverviewPath} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                    {language === "nl" ? "Bekijk domotica als subservice" : "View domotics subservice"}
                  </Link>
                  <Link href="/contact" className="rounded-full bg-card px-6 py-3 text-sm font-semibold shadow-sm">
                    {language === "nl" ? "Plan adviesgesprek" : "Plan an advice call"}
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="site-card site-card-strong rounded-[2rem] p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="site-card rounded-[1.5rem] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Network className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-bold">{language === "nl" ? "Infrastructuur" : "Infrastructure"}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {language === "nl"
                        ? "Netwerk, servers, cloud en structuur die op lange termijn logisch blijven."
                        : "Networks, servers, cloud, and structure that still make sense long term."}
                    </p>
                  </div>

                  <div className="site-card rounded-[1.5rem] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Home className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-bold">{language === "nl" ? "Domotica subservice" : "Domotics subservice"}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {language === "nl"
                        ? "Home Assistant, protocolkeuze, energie-inzicht en onderhoud als gespecialiseerde laag binnen IT."
                        : "Home Assistant, protocol selection, energy insight, and maintenance as a specialized layer within IT."}
                    </p>
                  </div>
                </div>

                <div className="site-card mt-4 rounded-[1.5rem] p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {language === "nl" ? "Slimme integratie" : "Smart integration"}
                      </p>
                      <p className="mt-1 text-lg font-bold">
                        {language === "nl"
                          ? "We verbinden infrastructuur, automatisatie en support in één duidelijke flow."
                          : "We connect infrastructure, automation, and support in one clear flow."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t("services.it.what")}</h2>
                <p className="leading-relaxed text-muted-foreground">{t("services.it.whatDesc")}</p>
              </div>

              <div className="site-card site-card-strong rounded-[2rem] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="site-pill">{language === "nl" ? "Subservice spotlight" : "Subservice spotlight"}</div>
                </div>
                <h3 className="text-2xl font-bold">{language === "nl" ? "Domotica en Home Assistant" : "Domotics and Home Assistant"}</h3>
                <p className="mt-3 text-muted-foreground">
                  {language === "nl"
                    ? "Domotica is hier geen los eiland meer, maar een gespecialiseerde uitbreiding van uw IT-omgeving. Daardoor blijven netwerk, beveiliging, dashboards en onderhoud op elkaar afgestemd."
                    : "Domotics is no longer a disconnected island here, but a specialized extension of your IT environment. That keeps networking, security, dashboards, and maintenance aligned."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={domoticaOverviewPath} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                    {language === "nl" ? "Naar domotica-overzicht" : "Go to domotics overview"}
                  </Link>
                  <Link href={homeAssistantPath} className="rounded-full bg-card px-5 py-3 text-sm font-semibold shadow-sm">
                    Home Assistant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-band py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="site-card rounded-[1.75rem] p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="site-card site-card-strong rounded-[2rem] p-8">
              <h2 className="text-2xl font-bold">
                {language === "nl" ? "Een vraag rond IT of Home Assistant?" : "Need help with IT or Home Assistant?"}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                {language === "nl"
                  ? "We bekijken eerst de structuur en prioriteiten, zodat u niet eindigt met nog meer losse tools."
                  : "We look at structure and priorities first, so you do not end up with even more disconnected tools."}
              </p>
              <Link
                href="/contact"
                data-testid="button-it-consultancy-cta"
                className="mt-7 inline-block rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                {t("services.cta")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
