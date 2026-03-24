import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/structuredData";
import { gardenAreas, gardenLinks, getGardenCityByKey } from "@/data/garden";

interface GardenCityDetailPageProps {
  routeLanguage: "nl" | "en";
  cityKey: Parameters<typeof getGardenCityByKey>[0];
}

export default function GardenCityDetailPage({
  routeLanguage,
  cityKey,
}: GardenCityDetailPageProps) {
  useRouteLanguage(routeLanguage);

  const city = getGardenCityByKey(cityKey);
  const links = gardenLinks(routeLanguage);
  const nl = routeLanguage === "nl";

  if (!city) return null;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={city.seoTitle[routeLanguage]}
        description={city.seoDescription[routeLanguage]}
        path={city.route(routeLanguage)}
        language={routeLanguage}
        alternates={{
          nl: city.route("nl"),
          en: city.route("en"),
          "x-default": city.route("nl"),
        }}
        jsonLd={[
          breadcrumbJsonLd(city.route(routeLanguage), [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: nl ? "Regio" : "Region", path: links.region },
            { name: city.name, path: city.route(routeLanguage) },
          ]),
          localBusinessJsonLd(city.route(routeLanguage), {
            description: city.seoDescription[routeLanguage],
            areaServed: [city.name],
          }),
          serviceJsonLd(city.route(routeLanguage), {
            serviceName: `${nl ? "Tuinonderhoud in" : "Garden maintenance in"} ${city.name}`,
            serviceType: nl ? "Tuinonderhoud, snoeiwerk en opkuis" : "Garden maintenance, trimming, and clean-ups",
            description: city.seoDescription[routeLanguage],
            areaServed: [city.name],
          }),
          faqJsonLd(
            city.route(routeLanguage),
            city.faqs.map((faq) => ({
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
                { label: nl ? "Regio" : "Region", href: links.region },
                { label: city.name },
              ]}
            />
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5">
              {nl ? `Tuinier in ${city.name}` : `Gardener in ${city.name}`}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {city.intro[routeLanguage]}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {city.sections.map((section) => (
              <article key={section.title[routeLanguage]} className="garden-card p-7">
                <h2 className="text-2xl font-bold font-display mb-3">{section.title[routeLanguage]}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body[routeLanguage]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="garden-band py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display mb-6">
              {nl ? "Andere gemeenten in de regio" : "Other municipalities in the area"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gardenAreas
                .filter((item) => item.key !== city.key)
                .map((item) => (
                  <Link key={item.key} href={item.href(routeLanguage)} className="garden-card block rounded-2xl p-5 font-semibold hover:border-primary/35">
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="garden-card garden-card-muted p-8">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? `Offerte aanvragen voor ${city.name}` : `Request a quote in ${city.name}`}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {nl
                  ? `Laat weten welke hulp u zoekt in ${city.name}. Ik bekijk graag wat haalbaar en logisch is voor uw tuin.`
                  : `Let me know what kind of help you need in ${city.name}. I will gladly review the most practical next step for your garden.`}
              </p>
            </div>
            <QuoteForm preselectedService="garden" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
