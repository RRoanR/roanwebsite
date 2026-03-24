import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { gardenFaqs, gardenLinks } from "@/data/garden";
import { gardenRoutePairs } from "@shared/siteRoutes";

interface GardenFaqPageProps {
  routeLanguage: "nl" | "en";
}

export default function GardenFaqPage({ routeLanguage }: GardenFaqPageProps) {
  useRouteLanguage(routeLanguage);

  const nl = routeLanguage === "nl";
  const links = gardenLinks(routeLanguage);
  const alternates = {
    nl: gardenRoutePairs.faq.nl,
    en: gardenRoutePairs.faq.en,
    "x-default": gardenRoutePairs.faq.nl,
  } as const;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={nl ? "FAQ tuinonderhoud | Roan Ros" : "Garden maintenance FAQ | Roan Ros"}
        description={
          nl
            ? "Veelgestelde vragen over tuinonderhoud, snoeiwerk, seizoensopkuis en lokale beschikbaarheid in de regio Edegem."
            : "Frequently asked questions about garden maintenance, trimming, seasonal clean-ups, and local availability around Edegem."
        }
        path={alternates[routeLanguage]}
        language={routeLanguage}
        alternates={alternates}
        jsonLd={[
          breadcrumbJsonLd(alternates[routeLanguage], [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: "FAQ", path: alternates[routeLanguage] },
          ]),
          faqJsonLd(
            alternates[routeLanguage],
            gardenFaqs.map((faq) => ({
              question: faq.question[routeLanguage],
              answer: faq.answer[routeLanguage],
            })),
          ),
        ]}
      />
      <Navbar />

      <main className="garden-main">
        <section className="garden-hero pt-32 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: nl ? "Tuinonderhoud" : "Garden maintenance", href: links.landing },
                { label: "FAQ" },
              ]}
            />
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5">
              {nl ? "Veelgestelde vragen" : "Frequently asked questions"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Extra context voor lokale zoekopdrachten rond tuinonderhoud, planning en beschikbaarheid."
                : "Extra context for local search intent around garden maintenance, scheduling, and availability."}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {gardenFaqs.map((faq) => (
              <article key={faq.question[routeLanguage]} className="garden-card p-7">
                <h2 className="text-xl font-bold font-display mb-3">{faq.question[routeLanguage]}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.answer[routeLanguage]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
            <Link href={links.services} className="garden-button-secondary px-6 py-3">
              {nl ? "Bekijk diensten" : "View services"}
            </Link>
            <Link href={links.region} className="garden-button-secondary px-6 py-3">
              {nl ? "Bekijk regio's" : "View service areas"}
            </Link>
            <Link href={links.contact} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
              {nl ? "Vraag een offerte aan" : "Request a quote"}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
