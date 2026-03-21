import { ClusterArticlePage } from "@/components/ClusterArticlePage";
import { useLanguage } from "@/lib/i18n";
import { plaatsTopics } from "@/data/plaatsbeschrijvingen";
import NotFound from "@/pages/not-found";

interface PlaatsTopicPageProps {
  slug: string;
}

export default function PlaatsTopicPage({ slug }: PlaatsTopicPageProps) {
  const { language } = useLanguage();
  const page = plaatsTopics.find((item) => item.slug === slug || item.htmlSlug === slug);
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
          { label: "Plaatsbeschrijvingen", href: "/plaatsbeschrijvingen/" },
          { label: page.title.nl },
        ],
        en: [
          { label: "Home", href: "/" },
          { label: "Condition reports", href: "/plaatsbeschrijvingen/" },
          { label: page.title.en },
        ],
      }}
      relatedLinks={plaatsTopics
        .filter((item) => item.slug !== page.slug)
        .slice(0, 4)
        .map((item) => ({
          href: item.path,
          label: item.title,
        }))}
      ctaTitle={{
        nl: "Advies of offerte nodig?",
        en: "Need advice or a quote?",
      }}
      ctaBody={{
        nl: "We bekijken je situatie en geven een duidelijke volgende stap.",
        en: "We review your situation and provide a clear next step.",
      }}
      ctaLabel={{
        nl: "Contacteer ons",
        en: "Contact us",
      }}
    />
  );
}
