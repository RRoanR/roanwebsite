import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Leaf, MapPin, Scissors, Sprout } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/structuredData";
import { gardenAreas, gardenFaqs, gardenLinks, gardenServices } from "@/data/garden";
import { gardenRoutePairs } from "@shared/siteRoutes";

interface GardenLandingPageProps {
  routeLanguage: "nl" | "en";
}

const areaServed = ["Edegem", "Kontich", "Lier", "Duffel", "Lint", "Hove"];

export default function GardenLandingPage({ routeLanguage }: GardenLandingPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.landing.nl,
    en: gardenRoutePairs.landing.en,
    "x-default": gardenRoutePairs.landing.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={
          nl
            ? "Tuinonderhoud met zorg in Edegem, Kontich, Lier, Duffel, Lint en Hove | Roan Ros"
            : "Garden maintenance with care in Edegem, Kontich, Lier, Duffel, Lint and Hove | Roan Ros"
        }
        description={
          nl
            ? "Betrouwbaar tuinonderhoud, snoeiwerken, seizoensopkuis en tuinopfrissing voor particulieren in Edegem, Kontich, Lier, Duffel, Lint en Hove."
            : "Reliable garden maintenance, trimming, seasonal clean-ups, and refresh work for private clients in Edegem, Kontich, Lier, Duffel, Lint, and Hove."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: alternates[routeLanguage] },
          ]),
          localBusinessJsonLd(alternates[routeLanguage], {
            description: nl
              ? "Tuinonderhoud, snoeiwerken, seizoensopkuis en opfriswerk voor particulieren in de regio Edegem, Kontich, Lier, Duffel, Lint en Hove."
              : "Garden care, trimming, seasonal clean-ups, and refresh work for private clients in the Edegem, Kontich, Lier, Duffel, Lint, and Hove area.",
            areaServed,
            serviceType: gardenServices.map((service) => service.title[routeLanguage]),
          }),
          serviceJsonLd(alternates[routeLanguage], {
            serviceName: nl ? "Tuinonderhoud op maat" : "Tailored garden maintenance",
            serviceType: nl ? "Tuinonderhoud en snoeiwerken" : "Garden maintenance and trimming",
            description: nl
              ? "Persoonlijke tuinzorg voor particulieren, op aanvraag of volgens schema."
              : "Personal garden care for private clients, on request or by schedule.",
            areaServed,
          }),
          faqJsonLd(
            alternates[routeLanguage],
            gardenFaqs.slice(0, 3).map((faq) => ({
              question: faq.question[routeLanguage],
              answer: faq.answer[routeLanguage],
            })),
          ),
        ]}
      />
      <Navbar />

      <main className="garden-main">
        <section className="garden-hero relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,_rgba(39,120,72,0.16),_transparent_48%),radial-gradient(circle_at_top_right,_rgba(226,185,63,0.2),_transparent_26%)]" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: nl ? "Tuinonderhoud" : "Garden maintenance" },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <div>
                <div className="garden-pill mb-6">
                  <Leaf className="w-4 h-4" />
                  {nl ? "Persoonlijke tuinzorg voor particulieren" : "Personal garden care for private clients"}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6"
                >
                  {nl
                    ? "Tuinonderhoud met zorg en aandacht"
                    : "Garden maintenance with care and attention"}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
                >
                  {nl
                    ? "Voor een verzorgde tuin in Edegem, Kontich, Lier, Duffel, Lint en Hove. Betrouwbaar onderhoud, nette snoeiwerken en een aanpak die afgestemd blijft op uw planning."
                    : "For a well-kept garden in Edegem, Kontich, Lier, Duffel, Lint and Hove. Reliable maintenance, neat trimming, and a service rhythm that fits your schedule."}
                </motion.p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={links.contact}
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                  >
                    {nl ? "Vraag een offerte aan" : "Request a quote"}
                  </Link>
                  <Link href={links.services} className="garden-button-secondary px-6 py-3">
                    {nl ? "Bekijk alle diensten" : "View all services"}
                  </Link>
                </div>
              </div>

              <motion.aside
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="garden-card garden-card-strong p-6 shadow-xl shadow-primary/10"
              >
                <h2 className="text-xl font-bold font-display mb-5">
                  {nl ? "Snel overzicht" : "Quick overview"}
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Scissors,
                      title: nl ? "Snoeiwerken en onderhoud" : "Trimming and upkeep",
                      body: nl
                        ? "Van eenmalige opfrisbeurt tot terugkerende bezoeken."
                        : "From one-off refresh work to recurring visits.",
                    },
                    {
                      icon: CalendarClock,
                      title: nl ? "Op aanvraag of volgens schema" : "On request or by schedule",
                      body: nl
                        ? "U kiest het ritme dat past bij uw tuin en agenda."
                        : "You choose the cadence that fits your garden and your diary.",
                    },
                    {
                      icon: MapPin,
                      title: nl ? "Actief in uw buurt" : "Active in your area",
                      body: nl
                        ? "Edegem, Kontich, Lier, Duffel, Lint en Hove als hoofdregio."
                        : "Edegem, Kontich, Lier, Duffel, Lint and Hove as the core service area.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="garden-icon-wrap w-11 h-11">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? "Waarmee u hulp krijgt" : "Where you can get help"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {nl
                  ? "De aangeleverde HTML-copy is hier omgezet naar een duidelijke, brand-consistente dienstverlening."
                  : "The imported HTML copy is translated here into a clearer, brand-consistent service offer."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {gardenServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href(routeLanguage)}
                  className="garden-card block h-full p-6 hover:border-primary/35"
                >
                  <div className="garden-icon-wrap mb-5 h-12 w-12">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{service.title[routeLanguage]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description[routeLanguage]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="garden-card garden-card-strong p-8">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? "Persoonlijke aanpak" : "A personal approach"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {nl
                  ? "Elke tuin is anders. Daarom starten we eenvoudig: wat is de huidige toestand, wat wilt u verbeteren, en welk ritme is haalbaar?"
                  : "Every garden is different. That is why we start simply: what is the current state, what do you want improved, and what rhythm is realistic?"}
              </p>
              <div className="space-y-4">
                {[
                  nl ? "Eenmalige opkuis of opfrisbeurt" : "One-off clean-up or refresh",
                  nl ? "Onderhoud volgens afgesproken schema" : "Maintenance on an agreed schedule",
                  nl ? "Heldere communicatie over scope, timing en prijs" : "Clear communication on scope, timing, and price",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3 text-sm font-medium">
                    <div className="garden-dot h-2.5 w-2.5" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="garden-card garden-card-muted p-8">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? "Werkgebied" : "Service area"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {nl
                  ? "De kernregio bestaat uit Edegem, Kontich, Lier, Duffel, Lint en Hove, met ruimte om nabije aanvragen te bekijken."
                  : "The core region covers Edegem, Kontich, Lier, Duffel, Lint and Hove, with room to review nearby requests."}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {gardenAreas.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href(routeLanguage)}
                    className="garden-card block rounded-2xl px-4 py-4 font-semibold hover:border-primary/35"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link
                href={links.region}
                className="garden-link-inline mt-6"
              >
                {nl ? "Meer over de regio" : "More about the area"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? "Veelgestelde vragen" : "Frequently asked questions"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {nl
                  ? "Extra context voor zoekopdrachten rond tuinonderhoud, planning en regio."
                  : "Extra context for search intent around maintenance, scheduling, and local availability."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {gardenFaqs.map((faq) => (
                <article key={faq.question[routeLanguage]} className="garden-card p-6">
                  <h3 className="font-bold text-lg mb-3">{faq.question[routeLanguage]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer[routeLanguage]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="offerte">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div className="garden-card garden-card-muted p-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-5">
                  {nl ? "Vraag een vrijblijvende offerte aan" : "Request a no-obligation quote"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {nl
                    ? "Gebruik dezelfde leadflow als de rest van de site, maar met tuinonderhoud als voorgeselecteerde dienst."
                    : "Use the same lead flow as the rest of the site, with garden maintenance preselected."}
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href={links.approach} className="garden-link-inline">
                    {nl ? "Lees eerst de werkwijze" : "Read the approach first"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={links.faq} className="garden-link-inline">
                    {nl ? "Bekijk ook de FAQ" : "View the FAQ too"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <QuoteForm preselectedService="garden" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
