import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { domoticaTopics } from "@/data/domotica";

export default function DomoticaOverviewPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={
          language === "nl"
            ? "Domotica in regio Antwerpen | Roan Ros"
            : "Home Automation in Antwerp Region | Roan Ros"
        }
        description={
          language === "nl"
            ? "Overzicht van domotica diensten: Home Assistant installatie, configuratie, dashboards, energie en onderhoud."
            : "Overview of home automation services: Home Assistant setup, configuration, dashboards, energy, and maintenance."
        }
        path="/domotica/"
        language={language}
        jsonLd={[
          breadcrumbJsonLd("/domotica/", [
            { name: language === "nl" ? "Home" : "Home", path: "/" },
            { name: language === "nl" ? "Domotica" : "Home Automation", path: "/domotica/" },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <section className="pt-32 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: language === "nl" ? "Home" : "Home", href: "/" },
                { label: language === "nl" ? "Domotica" : "Home automation" },
              ]}
            />
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5"
            >
              {language === "nl" ? "Domotica in regio Antwerpen" : "Home automation in the Antwerp region"}
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {language === "nl"
                ? "Van Home Assistant basisopzet tot geavanceerde integraties, dashboards en onderhoud."
                : "From Home Assistant baseline setup to advanced integrations, dashboards, and maintenance."}
            </p>
          </div>
        </section>

        <section className="py-12 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-6">
              {language === "nl" ? "Home Assistant cluster" : "Home Assistant cluster"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/domotica/home-assistant/"
                className="p-5 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
              >
                {language === "nl" ? "Home Assistant servicepagina" : "Home Assistant service page"}
              </Link>
              <Link
                href="/domotica/home-assistant/faq/"
                className="p-5 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
              >
                {language === "nl" ? "FAQ Home Assistant" : "Home Assistant FAQ"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-6">
              {language === "nl" ? "Onderwerpen en locaties" : "Topics and locations"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {domoticaTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.path}
                  className="p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
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

