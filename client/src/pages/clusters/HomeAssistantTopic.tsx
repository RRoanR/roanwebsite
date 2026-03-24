import { ClusterArticlePage } from "@/components/ClusterArticlePage";
import { useLanguage } from "@/lib/i18n";
import { domoticaTopics } from "@/data/domotica";
import NotFound from "@/pages/not-found";
import { domoticaOverviewPath, homeAssistantPath, itConsultancyPath } from "@shared/siteRoutes";

interface HomeAssistantTopicPageProps {
  slug: string;
}

export default function HomeAssistantTopicPage({ slug }: HomeAssistantTopicPageProps) {
  const { language } = useLanguage();
  const normalizedSlug = slug.endsWith(".html") ? slug.replace(".html", "") : slug;
  const page = domoticaTopics.find((item) => item.slug === normalizedSlug);

  if (!page) return <NotFound />;

  return (
    <ClusterArticlePage
      language={language}
      seoPath={page.path}
      title={page.title}
      description={page.description}
      intro={page.intro}
      sections={page.sections}
      faqs={page.faqs}
      breadcrumbs={{
        nl: [
          { label: "Home", href: "/" },
          { label: "IT Consultancy", href: itConsultancyPath },
          { label: "Domotica", href: domoticaOverviewPath },
          { label: "Home Assistant", href: homeAssistantPath },
          { label: page.title.nl },
        ],
        en: [
          { label: "Home", href: "/" },
          { label: "IT Consulting", href: itConsultancyPath },
          { label: "Domotics", href: domoticaOverviewPath },
          { label: "Home Assistant", href: homeAssistantPath },
          { label: page.title.en },
        ],
      }}
      relatedLinks={domoticaTopics
        .filter((item) => item.slug !== slug)
        .slice(0, 4)
        .map((item) => ({
          href: item.path,
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
    />
  );
}
