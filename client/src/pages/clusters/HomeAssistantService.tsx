import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useLanguage } from "@/lib/i18n";
import { breadcrumbJsonLd, faqJsonLd, homeAssistantServiceJsonLd } from "@/lib/structuredData";
import { domoticaFaqItems, domoticaTopics } from "@/data/domotica";
import { localizedSitePath, siteRoutePairs } from "@shared/siteRoutes";

export default function HomeAssistantServicePage() {
  const { language } = useLanguage();
  const faqPreview = domoticaFaqItems.slice(0, 3);
  const nl = language === "nl";
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
            ? "Home Assistant automatisatie op maat | Roan Ros"
            : "Custom Home Assistant automation | Roan Ros"
        }
        description={
          language === "nl"
            ? "Home Assistant installatie, configuratie, dashboards, integraties, energie monitoring en onderhoud in regio Antwerpen."
            : "Home Assistant installation, configuration, dashboards, integrations, energy monitoring, and maintenance in Antwerp region."
        }
        path={siteRoutePairs.homeAssistant[language]}
        language={language}
        alternates={{ ...siteRoutePairs.homeAssistant, "x-default": siteRoutePairs.homeAssistant.nl }}
        jsonLd={[
          homeAssistantServiceJsonLd(
            siteRoutePairs.homeAssistant[language],
            language === "nl" ? "Home Assistant automatisatie op maat" : "Custom Home Assistant automation",
          ),
          breadcrumbJsonLd(siteRoutePairs.homeAssistant[language], [
            { name: "Home", path: homeHref },
            { name: language === "nl" ? "IT Consultancy" : "IT Consulting", path: itHref },
            { name: language === "nl" ? "Domotica" : "Home automation", path: homeAutomationHref },
            { name: "Home Assistant", path: homeAssistantHref },
          ]),
          faqJsonLd(
            siteRoutePairs.homeAssistant[language],
            faqPreview.map((item) => ({
              question: item.question[language],
              answer: item.answer[language],
            })),
          ),
        ]}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pt-32 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: homeHref },
                { label: language === "nl" ? "IT Consultancy" : "IT Consulting", href: itHref },
                { label: language === "nl" ? "Domotica" : "Home automation", href: homeAutomationHref },
                { label: "Home Assistant" },
              ]}
            />
            <div className="site-pill mb-5">{language === "nl" ? "Gespecialiseerde subservice" : "Specialized subservice"}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
              {nl ? "Home Assistant automatisatie op maat in regio Antwerpen" : "Custom Home Assistant automation in Antwerp region"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Van intake tot nazorg: installatie, configuratie, protocollen, dashboards, energie en onderhoud met focus op betrouwbaarheid."
                : "From intake to aftercare: installation, configuration, protocols, dashboards, energy, and maintenance with reliability first."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={homeAssistantFaqHref} className="px-5 py-2.5 rounded-full bg-secondary text-sm font-semibold">
                {nl ? "Volgende stap: FAQ" : "Next step: FAQ"}
              </Link>
              <Link href="#offerte" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {nl ? "Vraag offerte of advies" : "Request quote or advice"}
              </Link>
            </div>
          </div>
        </section>

        <section className="site-band py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold font-display mb-4">
                {nl ? "Wat u mag verwachten" : "What you can expect"}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  {nl
                    ? "Centraal systeem voor verlichting, sensoren, energie en meldingen"
                    : "One central system for lighting, sensors, energy, and alerts"}
                </li>
                <li>
                  {nl
                    ? "Praktische dashboards voor smartphone, tablet en wandpaneel"
                    : "Practical dashboards for smartphone, tablet, and wall panel"}
                </li>
                <li>
                  {nl
                    ? "Gefaseerde aanpak met duidelijke volgende stappen"
                    : "Phased implementation with clear next steps"}
                </li>
                <li>
                  {nl
                    ? "Nazorg via updates, back-ups en stabiliteitschecks"
                    : "Aftercare through updates, backups, and stability checks"}
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <Link href={domoticaTopics[0].paths[language]} className="site-card block rounded-[1.5rem] p-4 transition-colors hover:bg-secondary/40">
                {nl ? "Eerst begrijpen: wat is Home Assistant?" : "Start here: what is Home Assistant?"}
              </Link>
              {domoticaTopics.slice(1, 6).map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.paths[language]}
                  className="site-card block rounded-[1.5rem] p-4 transition-colors hover:bg-secondary/40"
                >
                  {topic.title[language]}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-4">
              {nl ? "Van losse gadgets naar een setup die werkt" : "From fragmented gadgets to a setup that works"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {nl
                ? "Typische problemen zijn app-chaos, onbetrouwbare automatisaties en weinig energie-inzicht. De oplossing is een duidelijke structuur met robuuste integraties en begrijpelijke bediening."
                : "Common issues are app chaos, unreliable automations, and poor energy visibility. The solution is clear architecture with robust integrations and understandable control."}
            </p>
            <h3 className="text-xl font-bold font-display mb-3">{nl ? "Home Assistant diensten" : "Home Assistant services"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                domoticaTopics[1].paths[language],
                domoticaTopics[2].paths[language],
                domoticaTopics[3].paths[language],
                domoticaTopics[4].paths[language],
                domoticaTopics[5].paths[language],
                domoticaTopics[6].paths[language],
              ].map((href) => {
                const topic = domoticaTopics.find((item) => item.paths[language] === href);
                if (!topic) return null;
                return (
                  <Link key={href} href={href} className="site-card rounded-[1.5rem] p-4 transition-colors hover:bg-secondary/40">
                    {topic.title[language]}
                  </Link>
                );
              })}
            </div>

            <h2 className="text-2xl font-bold font-display mb-5">
              {nl ? "Veelgestelde vragen" : "Frequently asked questions"}
            </h2>
            <div className="space-y-4">
              {faqPreview.map((item) => (
                <article key={item.question.nl} className="site-card rounded-[1.5rem] p-5">
                  <h3 className="font-bold mb-2">{item.question[language]}</h3>
                  <p className="text-muted-foreground">{item.answer[language]}</p>
                </article>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href={homeAssistantFaqHref}
                className="inline-block px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                {nl ? "Alle FAQ's bekijken" : "View all FAQs"}
              </Link>
            </div>
          </div>
        </section>

        <section className="site-band py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-4">{nl ? "Regio" : "Coverage area"}</h2>
            <p className="text-muted-foreground mb-4">
              {nl
                ? "Actief in Antwerpen en randgemeenten, met lokale pagina's per zone."
                : "Active in Antwerp and nearby areas, with local pages per zone."}
            </p>
            <div className="flex flex-wrap gap-3">
              {domoticaTopics.slice(-3).map((topic) => (
                <Link key={topic.slug} href={topic.paths[language]} className="site-card rounded-lg px-4 py-2">
                  {topic.title[language]}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="offerte" className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-4">
              {nl ? "Vraag offerte of adviesgesprek aan" : "Request a quote or advice call"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {nl
                ? "Gebruik het formulier hieronder om een offerte of adviesgesprek aan te vragen, met Home Assistant al als gekozen dienst."
                : "The form below lets you request a quote or advice call with Home Assistant already selected."}
            </p>
            <QuoteForm preselectedService="home" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
