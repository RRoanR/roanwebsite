import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { plaatsFaqCategories, plaatsFaqItems } from "@/data/plaatsbeschrijvingen";

export default function PlaatsFaqPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={
          language === "nl"
            ? "FAQ Plaatsbeschrijvingen | Roan Ros"
            : "Condition Reports FAQ | Roan Ros"
        }
        description={
          language === "nl"
            ? "Veelgestelde vragen over plaatsbeschrijvingen bij huur, werken, kosten, privacy en voorbereiding."
            : "Frequently asked questions about condition reports for rental, works, cost, privacy, and preparation."
        }
        path="/plaatsbeschrijvingen/faq/"
        language={language}
        jsonLd={[
          breadcrumbJsonLd("/plaatsbeschrijvingen/faq/", [
            { name: "Home", path: "/" },
            {
              name: language === "nl" ? "Plaatsbeschrijvingen" : "Condition reports",
              path: "/plaatsbeschrijvingen/",
            },
            { name: "FAQ", path: "/plaatsbeschrijvingen/faq/" },
          ]),
          faqJsonLd(
            "/plaatsbeschrijvingen/faq/",
            plaatsFaqItems.map((item) => ({
              question: item.question[language],
              answer: item.answer[language],
            })),
          ),
        ]}
      />
      <Navbar />

      <main>
        <section className="pt-32 pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: language === "nl" ? "Plaatsbeschrijvingen" : "Condition reports", href: "/plaatsbeschrijvingen/" },
                { label: "FAQ" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
              {language === "nl" ? "FAQ: Plaatsbeschrijvingen" : "FAQ: Condition reports"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "nl"
                ? "Snel naar de meest gevraagde antwoorden, met doorklik naar verdiepende pagina's."
                : "Quick access to common answers, with links to in-depth pages."}
            </p>
          </div>
        </section>

        {plaatsFaqCategories.map((category, categoryIndex) => (
          <section key={category.title.nl} className={categoryIndex % 2 === 0 ? "py-12 bg-secondary/50" : "py-12"}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display mb-5">{category.title[language]}</h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <article key={item.question.nl} className="p-5 rounded-xl border border-border/50 bg-card">
                    <h3 className="text-lg font-bold mb-2">{item.question[language]}</h3>
                    <p className="text-muted-foreground mb-3">{item.answer[language]}</p>
                    <Link href={item.link} className="text-sm font-semibold text-primary hover:underline">
                      {language === "nl" ? "Lees meer" : "Read more"}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold font-display mb-3">
              {language === "nl" ? "Volgende stap" : "Next step"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/plaatsbeschrijvingen/" className="px-6 py-3 rounded-full bg-secondary">
                {language === "nl" ? "Naar overzicht" : "Back to overview"}
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
                {language === "nl" ? "Contact opnemen" : "Contact us"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
