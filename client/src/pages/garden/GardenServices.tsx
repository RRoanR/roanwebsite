import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Sprout } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structuredData";
import { gardenLinks, gardenServices } from "@/data/garden";
import { gardenRoutePairs, localizedSitePath } from "@shared/siteRoutes";

interface GardenServicesPageProps {
  routeLanguage: "nl" | "en";
}

export default function GardenServicesPage({ routeLanguage }: GardenServicesPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const homeHref = localizedSitePath("home", routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.services.nl,
    en: gardenRoutePairs.services.en,
    "x-default": gardenRoutePairs.services.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={
          nl
            ? "Diensten voor tuinonderhoud en snoeiwerken | Roan Ros"
            : "Garden maintenance and trimming services | Roan Ros"
        }
        description={
          nl
            ? "Overzicht van tuinonderhoud, snoeiwerken, seizoensopkuis, beplanting en onderhoud volgens schema."
            : "Overview of garden maintenance, trimming, seasonal clean-ups, planting, and scheduled upkeep."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: homeHref },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: gardenRoutePairs.landing[routeLanguage] },
            { name: nl ? "Diensten" : "Services", path: alternates[routeLanguage] },
          ]),
          serviceJsonLd(alternates[routeLanguage], {
            serviceName: nl ? "Tuinonderhoud diensten" : "Garden maintenance services",
            serviceType: nl ? "Tuinonderhoud en verzorging" : "Garden maintenance and care",
            description: nl
              ? "Diensten voor particulieren: onderhoud, snoeiwerken, seizoensopkuis, beplanting en opvolging."
              : "Private-client services including maintenance, trimming, seasonal clean-ups, planting, and follow-up care.",
            areaServed: ["Edegem", "Kontich", "Lier", "Duffel", "Lint", "Hove"],
          }),
        ]}
      />
      <Navbar />

      <main className="garden-main">
        <section className="garden-hero pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: homeHref },
                { label: nl ? "Tuinonderhoud" : "Garden maintenance", href: links.landing },
                { label: nl ? "Diensten" : "Services" },
              ]}
            />
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold font-display mb-5"
            >
              {nl ? "Diensten" : "Services"}
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Een duidelijk overzicht van onderhoud, snoeiwerken, seizoensopkuis en andere tuinzorg die op aanvraag of volgens schema kan gebeuren."
                : "A clear overview of maintenance, trimming, seasonal clean-ups, and other garden care that can be planned on request or by schedule."}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {gardenServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className="garden-card p-7"
              >
                <Link href={service.href(routeLanguage)} className="block hover:text-inherit">
                  <div className="garden-icon-wrap mb-5 h-12 w-12">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold font-display mb-3">{service.title[routeLanguage]}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description[routeLanguage]}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {nl ? "Lees meer" : "Read more"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="garden-card garden-card-strong p-8">
              <div className="garden-icon-wrap mb-5 h-12 w-12">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display mb-4">
                {nl ? "Op aanvraag of volgens schema" : "On request or by schedule"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {nl
                  ? "Niet elke tuin vraagt hetzelfde ritme. Daarom kan u kiezen voor een eenmalige tussenkomst of een terugkerende planning."
                  : "Not every garden needs the same rhythm. That is why you can choose between a one-off intervention and a recurring plan."}
              </p>
            </div>
            <div className="garden-card garden-card-muted p-8">
              <h2 className="text-2xl font-bold font-display mb-4">
                {nl ? "Volgende stap" : "Next step"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {nl
                  ? "Lees de werkwijze of neem meteen contact op voor een vrijblijvende offerte."
                  : "Read the approach page or contact us right away for a no-obligation quote."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={links.approach} className="garden-button-secondary">
                  {nl ? "Werkwijze" : "Approach"}
                </Link>
                <Link href={links.faq} className="garden-button-secondary">
                  FAQ
                </Link>
                <Link href={links.contact} className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  {nl ? "Contact opnemen" : "Get in touch"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={links.contact} className="garden-link-inline">
              {nl ? "Vraag een offerte aan" : "Request a quote"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
