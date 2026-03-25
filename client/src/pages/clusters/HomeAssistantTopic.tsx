import { ClusterArticlePage } from "@/components/ClusterArticlePage";
import { useLanguage } from "@/lib/i18n";
import { domoticaTopics, getDomoticaTopicBySlug } from "@/data/domotica";
import NotFound from "@/pages/not-found";
import { localizedSitePath } from "@shared/siteRoutes";

interface HomeAssistantTopicPageProps {
  slug: string;
}

export default function HomeAssistantTopicPage({ slug }: HomeAssistantTopicPageProps) {
  const { language } = useLanguage();
  const normalizedSlug = slug.endsWith(".html") ? slug.replace(".html", "") : slug;
  const page = getDomoticaTopicBySlug(normalizedSlug);
  const homeHref = localizedSitePath("home", language);
  const itHref = localizedSitePath("itConsultancy", language);
  const homeAutomationHref = localizedSitePath("homeAutomationOverview", language);
  const homeAssistantHref = localizedSitePath("homeAssistant", language);
  const contactHref = localizedSitePath("contact", language);

  if (!page) return <NotFound />;

  return (
    <ClusterArticlePage
      language={language}
      seoPaths={page.paths}
      title={page.title}
      description={page.description}
      intro={page.intro}
      sections={page.sections}
      faqs={page.faqs}
      breadcrumbs={{
        nl: [
          { label: "Home", href: homeHref },
          { label: "IT Consultancy", href: itHref },
          { label: "Domotica", href: homeAutomationHref },
          { label: "Home Assistant", href: homeAssistantHref },
          { label: page.title.nl },
        ],
        en: [
          { label: "Home", href: homeHref },
          { label: "IT Consulting", href: itHref },
          { label: "Home automation", href: homeAutomationHref },
          { label: "Home Assistant", href: homeAssistantHref },
          { label: page.title.en },
        ],
      }}
      relatedLinks={domoticaTopics
        .filter((item) => item.slug !== page.slug)
        .slice(0, 4)
        .map((item) => ({
          href: item.paths[language],
          label: item.title,
        }))}
      ctaTitle={{
        nl: "Uw situatie bespreken?",
        en: "Discuss your setup?",
      }}
      ctaBody={{
        nl: "Plan een kort adviesgesprek voor een concrete volgende stap.",
        en: "Book a short advice call for a concrete next step.",
      }}
      ctaLabel={{
        nl: "Vraag advies aan",
        en: "Request advice",
      }}
      ctaHref={contactHref}
    />
  );
}
