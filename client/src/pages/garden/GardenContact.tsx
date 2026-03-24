import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { gardenLinks } from "@/data/garden";
import { gardenRoutePairs } from "@shared/siteRoutes";

interface GardenContactPageProps {
  routeLanguage: "nl" | "en";
}

export default function GardenContactPage({ routeLanguage }: GardenContactPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.contact.nl,
    en: gardenRoutePairs.contact.en,
    "x-default": gardenRoutePairs.contact.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={nl ? "Contact voor tuinonderhoud | Roan Ros" : "Contact for garden maintenance | Roan Ros"}
        description={
          nl
            ? "Vraag een vrijblijvende offerte aan voor tuinonderhoud, snoeiwerken of een opfrisbeurt in Edegem, Kontich, Lint of Hove."
            : "Request a no-obligation quote for garden maintenance, trimming, or refresh work in Edegem, Kontich, Lint, or Hove."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: "Contact", path: alternates[routeLanguage] },
          ]),
        ]}
      />
      <Navbar />

      <main className="garden-main">
        <section className="garden-hero pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: nl ? "Tuinonderhoud" : "Garden maintenance", href: links.landing },
                { label: "Contact" },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="garden-card garden-card-muted p-8"
              >
                <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">Contact</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {nl
                    ? "Heeft u een vraag, wilt u een offerte aanvragen of een eerste afspraak plannen? Laat weten wat uw tuin nodig heeft en we nemen snel contact op."
                    : "Have a question, want to request a quote, or schedule a first visit? Let us know what your garden needs and we will get back to you quickly."}
                </p>

                <div className="space-y-4">
                  {[
                    nl ? "Duidelijke intake en haalbare planning" : "Clear intake and realistic scheduling",
                    nl ? "Particuliere klanten in Edegem, Kontich, Lint en Hove" : "Private clients in Edegem, Kontich, Lint and Hove",
                    nl ? "Ook geschikt voor eenmalige opkuis of opfriswerk" : "Also suitable for one-off clean-ups or refresh work",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="garden-icon-wrap h-10 w-10 rounded-full">
                        <CircleCheckBig className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <QuoteForm preselectedService="garden" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
