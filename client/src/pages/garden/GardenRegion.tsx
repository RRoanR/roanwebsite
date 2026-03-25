import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/structuredData";
import { gardenAreas, gardenFaqs, gardenLinks } from "@/data/garden";
import { gardenRoutePairs, localizedSitePath } from "@shared/siteRoutes";

interface GardenRegionPageProps {
  routeLanguage: "nl" | "en";
}

export default function GardenRegionPage({ routeLanguage }: GardenRegionPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const homeHref = localizedSitePath("home", routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.region.nl,
    en: gardenRoutePairs.region.en,
    "x-default": gardenRoutePairs.region.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={nl ? "Werkgebied voor tuinonderhoud | Roan Ros" : "Garden maintenance service area | Roan Ros"}
        description={
          nl
            ? "Roan Ros is actief voor tuinonderhoud in Edegem, Kontich, Lier, Duffel, Lint en Hove, met ruimte om nabije aanvragen te bekijken."
            : "Roan Ros provides garden maintenance in Edegem, Kontich, Lier, Duffel, Lint and Hove, with room to review nearby requests."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: homeHref },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: nl ? "Regio" : "Region", path: alternates[routeLanguage] },
          ]),
          localBusinessJsonLd(alternates[routeLanguage], {
            description: nl
              ? "Lokale tuinonderhoudsdienst voor Edegem, Kontich, Lint en Hove."
              : "Local garden maintenance service for Edegem, Kontich, Lint and Hove.",
            areaServed: gardenAreas.map((area) => area.name),
          }),
          faqJsonLd(
            alternates[routeLanguage],
            gardenFaqs.slice(0, 2).map((faq) => ({
              question: faq.question[routeLanguage],
              answer: faq.answer[routeLanguage],
            })),
          ),
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
                { label: nl ? "Regio" : "Region" },
              ]}
            />
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold font-display mb-5"
            >
              {nl ? "Werkgebied" : "Service area"}
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Lokale aanwezigheid zorgt voor korte afstemming, haalbare planning en een persoonlijke opvolging."
                : "Being local makes scheduling simpler, communication clearer, and follow-up more personal."}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {gardenAreas.map((area, index) => (
              <motion.article
                key={area.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className="garden-card p-7"
              >
                <div className="garden-icon-wrap mb-5 h-12 w-12">
                  <MapPin className="w-6 h-6" />
                </div>
                <Link href={area.href(routeLanguage)} className="block">
                  <h2 className="text-2xl font-bold font-display mb-3">{area.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{area.body[routeLanguage]}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {nl ? "Lokale pagina bekijken" : "View local page"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="garden-card garden-card-strong p-8">
              <h2 className="text-2xl font-bold font-display mb-4">
                {nl ? "Buiten de hoofdregio?" : "Outside the core area?"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {nl
                  ? "Woont u in een aangrenzende gemeente? Neem gerust contact op. We bekijken graag of een afspraak mogelijk is."
                  : "Do you live in a neighbouring municipality? Feel free to get in touch and we will gladly review whether a visit is possible."}
              </p>
            </div>
            <div className="garden-card garden-card-muted p-8">
              <h2 className="text-2xl font-bold font-display mb-4">
                {nl ? "Volgende stap" : "Next step"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {nl
                  ? "Vraag een vrijblijvende offerte aan of bekijk eerst de werkwijze."
                  : "Request a no-obligation quote or review the approach first."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={links.approach} className="garden-button-secondary">
                  {nl ? "Werkwijze" : "Approach"}
                </Link>
                <Link href={links.contact} className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  {nl ? "Contact opnemen" : "Get in touch"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
