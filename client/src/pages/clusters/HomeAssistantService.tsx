import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useLanguage } from "@/lib/i18n";
import { breadcrumbJsonLd, faqJsonLd, homeAssistantServiceJsonLd } from "@/lib/structuredData";
import { domoticaFaqItems, domoticaTopics } from "@/data/domotica";

export default function HomeAssistantServicePage() {
  const { language } = useLanguage();
  const faqPreview = domoticaFaqItems.slice(0, 3);
  const nl = language === "nl";

  return (
    <div className="min-h-screen bg-background">
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
        path="/domotica/home-assistant/"
        language={language}
        jsonLd={[
          homeAssistantServiceJsonLd(
            "/domotica/home-assistant/",
            language === "nl" ? "Home Assistant automatisatie op maat" : "Custom Home Assistant automation",
          ),
          breadcrumbJsonLd("/domotica/home-assistant/", [
            { name: "Home", path: "/" },
            { name: language === "nl" ? "Domotica" : "Home automation", path: "/domotica/" },
            { name: "Home Assistant", path: "/domotica/home-assistant/" },
          ]),
          faqJsonLd(
            "/domotica/home-assistant/",
            faqPreview.map((item) => ({
              question: item.question[language],
              answer: item.answer[language],
            })),
          ),
        ]}
      />
      <Navbar />

      <main>
        <section className="pt-32 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: language === "nl" ? "Domotica" : "Home automation", href: "/domotica/" },
                { label: "Home Assistant" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
              {nl ? "Home Assistant automatisatie op maat in regio Antwerpen" : "Custom Home Assistant automation in Antwerp region"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {nl
                ? "Van intake tot nazorg: installatie, configuratie, protocollen, dashboards, energie en onderhoud met focus op betrouwbaarheid."
                : "From intake to aftercare: installation, configuration, protocols, dashboards, energy, and maintenance with reliability first."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/domotica/home-assistant/faq/" className="px-5 py-2.5 rounded-full bg-secondary text-sm font-semibold">
                {nl ? "Volgende stap: FAQ" : "Next step: FAQ"}
              </Link>
              <Link href="#offerte" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {nl ? "Vraag offerte of advies" : "Request quote or advice"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/50">
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
              <Link href="/domotica/home-assistant/wat-is-home-assistant/" className="block p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors">
                {nl ? "Eerst begrijpen: wat is Home Assistant?" : "Start here: what is Home Assistant?"}
              </Link>
              {domoticaTopics.slice(1, 6).map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.path}
                  className="block p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors"
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
                "/domotica/home-assistant/installatie-vs-configuratie/",
                "/domotica/home-assistant/zigbee-zwave-matter-thread/",
                "/domotica/home-assistant/dashboards-tablet-wandpaneel/",
                "/domotica/home-assistant/energie-monitoring-zonnepanelen-laadpaal/",
                "/domotica/home-assistant/beveiliging-meldingen-aanwezigheid/",
                "/domotica/home-assistant/onderhoud-back-ups-updates/",
              ].map((href) => {
                const topic = domoticaTopics.find((item) => item.path === href);
                if (!topic) return null;
                return (
                  <Link key={href} href={href} className="p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 transition-colors">
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
                <article key={item.question.nl} className="p-5 rounded-xl border border-border/50 bg-card">
                  <h3 className="font-bold mb-2">{item.question[language]}</h3>
                  <p className="text-muted-foreground">{item.answer[language]}</p>
                </article>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/domotica/home-assistant/faq/"
                className="inline-block px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                {nl ? "Alle FAQ's bekijken" : "View all FAQs"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-4">{nl ? "Regio" : "Coverage area"}</h2>
            <p className="text-muted-foreground mb-4">
              {nl
                ? "Actief in Antwerpen en randgemeenten, met lokale pagina's per zone."
                : "Active in Antwerp and nearby areas, with local pages per zone."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/domotica/home-assistant/antwerpen/" className="px-4 py-2 rounded-lg border border-border/50 bg-card">Antwerpen</Link>
              <Link href="/domotica/home-assistant/berchem/" className="px-4 py-2 rounded-lg border border-border/50 bg-card">Berchem</Link>
              <Link href="/domotica/home-assistant/deurne/" className="px-4 py-2 rounded-lg border border-border/50 bg-card">Deurne</Link>
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
                ? "Het formulier hieronder gebruikt dezelfde leadflow als de rest van de site, met Home Assistant als voorgeselecteerde dienst."
                : "The form below uses the same lead flow as the rest of the site, with Home Assistant preselected."}
            </p>
            <QuoteForm preselectedService="home" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
