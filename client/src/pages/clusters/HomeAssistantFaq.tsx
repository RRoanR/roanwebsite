import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { domoticaFaqCategories, domoticaFaqItems } from "@/data/domotica";

export default function HomeAssistantFaqPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={
          language === "nl"
            ? "FAQ Home Assistant | Roan Ros"
            : "Home Assistant FAQ | Roan Ros"
        }
        description={
          language === "nl"
            ? "Veelgestelde vragen over Home Assistant installatie, compatibiliteit, onderhoud en energie monitoring."
            : "Frequently asked questions about Home Assistant setup, compatibility, maintenance, and energy monitoring."
        }
        path="/domotica/home-assistant/faq/"
        language={language}
        jsonLd={[
          breadcrumbJsonLd("/domotica/home-assistant/faq/", [
            { name: "Home", path: "/" },
            { name: language === "nl" ? "Domotica" : "Home automation", path: "/domotica/" },
            { name: "Home Assistant", path: "/domotica/home-assistant/" },
            { name: "FAQ", path: "/domotica/home-assistant/faq/" },
          ]),
          faqJsonLd(
            "/domotica/home-assistant/faq/",
            domoticaFaqItems.map((item) => ({
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
                { label: language === "nl" ? "Domotica" : "Home automation", href: "/domotica/" },
                { label: "Home Assistant", href: "/domotica/home-assistant/" },
                { label: "FAQ" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">Home Assistant FAQ</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {language === "nl"
                ? "Snel antwoord op de meest gestelde vragen over installatie, protocollen, onderhoud en aanpak."
                : "Quick answers to common questions about setup, protocols, maintenance, and approach."}
            </p>
          </div>
        </section>

        {domoticaFaqCategories.map((category, categoryIndex) => (
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
            <p className="text-muted-foreground mb-6">
              {language === "nl"
                ? "Bekijk de servicepagina of plan meteen een adviesgesprek."
                : "View the service page or book an advice call right away."}
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              <Link href="/domotica/home-assistant/" className="px-6 py-3 rounded-full bg-secondary">
                {language === "nl" ? "Naar servicepagina" : "Go to service page"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              >
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
