import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useRouteLanguage } from "@/hooks/use-route-language";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/structuredData";
import { gardenLinks, gardenServiceDetails, getGardenServiceByKey } from "@/data/garden";

interface GardenServiceDetailPageProps {
  routeLanguage: "nl" | "en";
  serviceKey: Parameters<typeof getGardenServiceByKey>[0];
}

export default function GardenServiceDetailPage({
  routeLanguage,
  serviceKey,
}: GardenServiceDetailPageProps) {
  useRouteLanguage(routeLanguage);

  const service = getGardenServiceByKey(serviceKey);
  const links = gardenLinks(routeLanguage);
  const nl = routeLanguage === "nl";

  if (!service) return null;

  return (
    <div className="garden-theme min-h-screen bg-background">
      <SeoHead
        title={service.seoTitle[routeLanguage]}
        description={service.seoDescription[routeLanguage]}
        path={service.route(routeLanguage)}
        language={routeLanguage}
        alternates={{
          nl: service.route("nl"),
          en: service.route("en"),
          "x-default": service.route("nl"),
        }}
        jsonLd={[
          breadcrumbJsonLd(service.route(routeLanguage), [
            { name: "Home", path: "/" },
            { name: nl ? "Tuinonderhoud" : "Garden maintenance", path: links.landing },
            { name: nl ? "Diensten" : "Services", path: links.services },
            { name: service.title[routeLanguage], path: service.route(routeLanguage) },
          ]),
          serviceJsonLd(service.route(routeLanguage), {
            serviceName: service.title[routeLanguage],
            serviceType: service.title[routeLanguage],
            description: service.seoDescription[routeLanguage],
            areaServed: ["Edegem", "Kontich", "Lier", "Duffel", "Lint", "Hove"],
          }),
          faqJsonLd(
            service.route(routeLanguage),
            service.faqs.map((faq) => ({
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
                { label: nl ? "Diensten" : "Services", href: links.services },
                { label: service.title[routeLanguage] },
              ]}
            />
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5">
              {service.title[routeLanguage]}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {service.intro[routeLanguage]}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {service.sections.map((section) => (
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
              {nl ? "Gerelateerde diensten" : "Related services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gardenServiceDetails
                .filter((item) => item.key !== service.key)
                .slice(0, 4)
                .map((item) => (
                  <Link key={item.key} href={item.route(routeLanguage)} className="garden-card block rounded-2xl p-5 font-semibold hover:border-primary/35">
                    {item.title[routeLanguage]}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="garden-card garden-card-muted p-8">
              <h2 className="text-3xl font-bold font-display mb-4">
                {nl ? "Vraag een offerte aan" : "Request a quote"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {nl
                  ? "Vertel kort wat u nodig heeft en in welke gemeente u woont. Zo kan ik snel inschatten wat logisch is."
                  : "Share what you need and which municipality you are in so I can quickly understand the right next step."}
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
