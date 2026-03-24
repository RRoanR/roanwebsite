import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { gardenLinks } from "@/data/garden";
import { gardenRoutePairs } from "@shared/siteRoutes";

interface GardenApproachPageProps {
  routeLanguage: "nl" | "en";
}

const steps = {
  nl: [
    {
      title: "Contact opnemen",
      body: "Vertel kort wat u nodig heeft: een eenmalige klus, seizoensopkuis of onderhoud op regelmatige basis.",
    },
    {
      title: "Intake en eerste afspraak",
      body: "We bekijken samen de tuin, de staat ervan en wat voor u haalbaar en wenselijk is.",
    },
    {
      title: "Duidelijke offerte",
      body: "U krijgt een heldere inschatting van scope, timing en prijs, zonder onnodige complexiteit.",
    },
    {
      title: "Uitvoering en opvolging",
      body: "Het werk wordt netjes uitgevoerd, met ruimte om achteraf een terugkerend onderhoudsschema af te spreken.",
    },
  ],
  en: [
    {
      title: "Get in touch",
      body: "Share what you need: a one-off job, seasonal clean-up, or regular maintenance support.",
    },
    {
      title: "Intake and first visit",
      body: "We look at the garden together, its current state, and what is realistic and useful for you.",
    },
    {
      title: "Clear quote",
      body: "You receive a straightforward view of scope, timing, and pricing without unnecessary complexity.",
    },
    {
      title: "Delivery and follow-up",
      body: "The work is carried out neatly, with the option to move into recurring maintenance afterwards.",
    },
  ],
} as const;

export default function GardenApproachPage({ routeLanguage }: GardenApproachPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.approach.nl,
    en: gardenRoutePairs.approach.en,
    "x-default": gardenRoutePairs.approach.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={nl ? "Werkwijze voor tuinonderhoud | Roan Ros" : "Garden maintenance approach | Roan Ros"}
        description={
          nl
            ? "Een persoonlijke aanpak voor tuinonderhoud: intake, duidelijke offerte, nette uitvoering en onderhoud volgens schema."
            : "A personal garden maintenance approach with intake, clear quoting, tidy delivery, and optional recurring upkeep."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: nl ? "Werkwijze" : "Approach", path: alternates[routeLanguage] },
          ]),
        ]}
      />
      <Navbar />

      <main className="garden-main">
        <section className="garden-hero pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: nl ? "Tuinonderhoud" : "Garden maintenance", href: links.landing },
                { label: nl ? "Werkwijze" : "Approach" },
              ]}
            />
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold font-display mb-5"
            >
              {nl ? "Werkwijze" : "Approach"}
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "De aangeleverde werkwijzepagina is hier herschreven naar een duidelijke route van eerste contact tot onderhoud op lange termijn."
                : "The imported approach page is rewritten here into a clearer path from first contact to long-term upkeep."}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {steps[routeLanguage].map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="garden-card p-7"
              >
                <div className="text-sm font-semibold text-primary mb-2">
                  {nl ? `Stap ${index + 1}` : `Step ${index + 1}`}
                </div>
                <h2 className="text-2xl font-bold font-display mb-3">{step.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              nl ? "Persoonlijke en betrokken aanpak" : "Personal and attentive approach",
              nl ? "Betaalbaar en transparant" : "Affordable and transparent",
              nl ? "Nette afwerking en duidelijke afspraken" : "Tidy work and clear expectations",
              nl ? "Flexibel: op aanvraag of volgens schema" : "Flexible: on request or by schedule",
            ].map((item) => (
              <div key={item} className="garden-card garden-card-strong p-6 flex items-start gap-4">
                <div className="garden-icon-wrap h-11 w-11 shrink-0">
                  <CircleCheckBig className="w-5 h-5" />
                </div>
                <div className="font-semibold leading-relaxed">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
            <Link href={links.services} className="garden-button-secondary px-6 py-3">
              {nl ? "Bekijk diensten" : "View services"}
            </Link>
            <Link href={links.contact} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
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
