import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useLanguage } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { QuoteForm } from "@/components/QuoteForm";
import { plaatsFaqCategories, plaatsTopics } from "@/data/plaatsbeschrijvingen";

export default function PlaatsOverviewPage() {
  const { language } = useLanguage();
  const nl = language === "nl";

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={
          language === "nl"
            ? "Plaatsbeschrijvingen in België | Roan Ros"
            : "Condition Reports in Belgium | Roan Ros"
        }
        description={
          language === "nl"
            ? "Professionele plaatsbeschrijvingen voor huur, werken en vaststellingen met duidelijke rapportage."
            : "Professional condition reports for rental, construction works, and findings with clear reporting."
        }
        path="/plaatsbeschrijvingen/"
        language={language}
        jsonLd={[
          breadcrumbJsonLd("/plaatsbeschrijvingen/", [
            { name: "Home", path: "/" },
            {
              name: language === "nl" ? "Plaatsbeschrijvingen" : "Condition reports",
              path: "/plaatsbeschrijvingen/",
            },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <section className="pt-32 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: language === "nl" ? "Plaatsbeschrijvingen" : "Condition reports" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
              {nl ? "Plaatsbeschrijvingen" : "Condition reports"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Overzicht van huur, werken, wetgeving, kosten, voorbereiding en FAQ met duidelijke volgende stappen."
                : "Overview of rental, works, legislation, costs, preparation, and FAQ with clear next steps."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/plaatsbeschrijvingen/faq/" className="px-5 py-2.5 rounded-full bg-secondary text-sm font-semibold">
                {nl ? "Volgende stap: FAQ" : "Next step: FAQ"}
              </Link>
              <Link href="#offerte" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {nl ? "Offerte aanvragen" : "Request quote"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-5">
              {nl ? "Kernpagina's" : "Core pages"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plaatsTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.path}
                  className="p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
                >
                  {topic.title[language]}
                </Link>
              ))}
              <Link
                href="/plaatsbeschrijvingen/faq/"
                className="p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
              >
                {nl ? "FAQ Plaatsbeschrijvingen" : "Condition reports FAQ"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-5">{nl ? "Veelgestelde vragen" : "Frequently asked questions"}</h2>
            <div className="space-y-4">
              {plaatsFaqCategories.slice(0, 2).flatMap((category) =>
                category.items.slice(0, 2).map((item) => (
                  <article key={item.question.nl} className="p-5 rounded-xl border border-border/50 bg-card">
                    <h3 className="font-bold mb-2">{item.question[language]}</h3>
                    <p className="text-muted-foreground mb-3">{item.answer[language]}</p>
                    <Link href={item.link} className="text-sm font-semibold text-primary hover:underline">
                      {nl ? "Lees meer" : "Read more"}
                    </Link>
                  </article>
                )),
              )}
            </div>
            <div className="mt-5">
              <Link href="/plaatsbeschrijvingen/faq/" className="inline-block px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                {nl ? "Alle FAQ's bekijken" : "View all FAQs"}
              </Link>
            </div>
          </div>
        </section>

        <section id="offerte" className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-3">
              {nl ? "Vraag een offerte aan" : "Request a quote"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {nl
                ? "Gebruik dezelfde sitebrede leadflow, met plaatsbeschrijvingen als voorgeselecteerde dienst."
                : "Use the same site-wide lead flow, preselected for condition reports."}
            </p>
            <QuoteForm preselectedService="survey" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
