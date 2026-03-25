import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { domoticaFaqCategories, domoticaFaqItems } from "@/data/domotica";
import { localizedSitePath, siteRoutePairs } from "@shared/siteRoutes";

export default function HomeAssistantFaqPage() {
  const { language } = useLanguage();
  const homeHref = localizedSitePath("home", language);
  const contactHref = localizedSitePath("contact", language);
  const itHref = localizedSitePath("itConsultancy", language);
  const homeAutomationHref = localizedSitePath("homeAutomationOverview", language);
  const homeAssistantHref = localizedSitePath("homeAssistant", language);
  const homeAssistantFaqHref = localizedSitePath("homeAssistantFaq", language);

  return (
    <div className="site-shell min-h-screen bg-background">
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
        path={siteRoutePairs.homeAssistantFaq[language]}
        language={language}
        alternates={{ ...siteRoutePairs.homeAssistantFaq, "x-default": siteRoutePairs.homeAssistantFaq.nl }}
        jsonLd={[
          breadcrumbJsonLd(siteRoutePairs.homeAssistantFaq[language], [
            { name: "Home", path: homeHref },
            { name: language === "nl" ? "IT Consultancy" : "IT Consulting", path: itHref },
            { name: language === "nl" ? "Domotica" : "Home automation", path: homeAutomationHref },
            { name: "Home Assistant", path: homeAssistantHref },
            { name: "FAQ", path: homeAssistantFaqHref },
          ]),
          faqJsonLd(
            siteRoutePairs.homeAssistantFaq[language],
            domoticaFaqItems.map((item) => ({
              question: item.question[language],
              answer: item.answer[language],
            })),
          ),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pt-32 pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: homeHref },
                { label: language === "nl" ? "IT Consultancy" : "IT Consulting", href: itHref },
                { label: language === "nl" ? "Domotica" : "Home automation", href: homeAutomationHref },
                { label: "Home Assistant", href: homeAssistantHref },
                { label: "FAQ" },
              ]}
            />
            <div className="site-pill mb-5">{language === "nl" ? "Veelgestelde vragen" : "Frequently asked questions"}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">Home Assistant FAQ</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {language === "nl"
                ? "Snel antwoord op de meest gestelde vragen over installatie, protocollen, onderhoud en aanpak."
                : "Quick answers to common questions about setup, protocols, maintenance, and approach."}
            </p>
          </div>
        </section>

        {domoticaFaqCategories.map((category, categoryIndex) => (
          <section key={category.title.nl} className={categoryIndex % 2 === 0 ? "site-band py-12" : "py-12"}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display mb-5">{category.title[language]}</h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <article key={item.question.nl} className="site-card rounded-[1.5rem] p-5">
                    <h3 className="text-lg font-bold mb-2">{item.question[language]}</h3>
                    <p className="text-muted-foreground mb-3">{item.answer[language]}</p>
                    <Link href={item.link[language]} className="text-sm font-semibold text-primary hover:underline">
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
              <Link href={homeAssistantHref} className="px-6 py-3 rounded-full bg-secondary">
                {language === "nl" ? "Naar servicepagina" : "Go to service page"}
              </Link>
              <Link
                href={contactHref}
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
