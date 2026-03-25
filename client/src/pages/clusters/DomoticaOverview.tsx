import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { domoticaTopics } from "@/data/domotica";
import { localizedSitePath, siteRoutePairs } from "@shared/siteRoutes";

export default function DomoticaOverviewPage() {
  const { language } = useLanguage();
  const homeHref = localizedSitePath("home", language);
  const itHref = localizedSitePath("itConsultancy", language);
  const homeAutomationHref = localizedSitePath("homeAutomationOverview", language);
  const homeAssistantHref = localizedSitePath("homeAssistant", language);
  const homeAssistantFaqHref = localizedSitePath("homeAssistantFaq", language);

  return (
    <div className="site-shell min-h-screen bg-background">
      <SeoHead
        title={
          language === "nl"
            ? "Domotica als IT subservice in regio Antwerpen | Roan Ros"
            : "Home automation as an IT specialization in the Antwerp region | Roan Ros"
        }
        description={
          language === "nl"
            ? "Overzicht van domotica diensten binnen IT consultancy: Home Assistant installatie, configuratie, dashboards, energie en onderhoud."
            : "Overview of home automation services inside IT consulting: Home Assistant setup, configuration, dashboards, energy, and maintenance."
        }
        path={siteRoutePairs.homeAutomationOverview[language]}
        language={language}
        alternates={{ ...siteRoutePairs.homeAutomationOverview, "x-default": siteRoutePairs.homeAutomationOverview.nl }}
        jsonLd={[
          breadcrumbJsonLd(siteRoutePairs.homeAutomationOverview[language], [
            { name: "Home", path: homeHref },
            { name: language === "nl" ? "IT Consultancy" : "IT Consulting", path: itHref },
            { name: language === "nl" ? "Domotica" : "Home automation", path: homeAutomationHref },
          ]),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pb-14 pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: homeHref },
                { label: language === "nl" ? "IT Consultancy" : "IT Consulting", href: itHref },
                { label: language === "nl" ? "Domotica" : "Home automation" },
              ]}
            />
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="site-pill mb-5">{language === "nl" ? "IT subservice" : "IT subservice"}</div>
              <h1 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
                {language === "nl" ? "Domotica binnen IT Consultancy" : "Home automation inside IT Consulting"}
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground">
                {language === "nl"
                  ? "Van Home Assistant basisopzet tot geavanceerde integraties, dashboards en onderhoud, als gespecialiseerde laag binnen uw bredere IT-omgeving."
                  : "From Home Assistant baseline setup to advanced integrations, dashboards, and maintenance, as a specialized layer within your broader IT environment."}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="site-band py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="site-card site-card-strong rounded-[2rem] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {language === "nl" ? "Home Assistant cluster" : "Home Assistant cluster"}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {language === "nl"
                      ? "Gebruik deze route voor installatie, protocolkeuze, dashboards, energie, beveiligingsmeldingen en onderhoud."
                      : "Use this route for setup, protocol selection, dashboards, energy, security notifications, and maintenance."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={homeAssistantHref} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                    Home Assistant
                  </Link>
                  <Link href={homeAssistantFaqHref} className="rounded-full bg-card px-5 py-3 text-sm font-semibold shadow-sm">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold">{language === "nl" ? "Onderwerpen en locaties" : "Topics and locations"}</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {domoticaTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.paths[language]}
                  className="site-card block rounded-[1.5rem] p-4 transition-colors hover:bg-secondary/40"
                >
                  {topic.title[language]}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
