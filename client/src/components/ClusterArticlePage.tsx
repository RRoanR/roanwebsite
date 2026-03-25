import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { PageBreadcrumbs, type BreadcrumbEntry } from "@/components/PageBreadcrumbs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { localizedSitePath, type LocalizedRoutePair } from "@shared/siteRoutes";

type Language = "nl" | "en";

export interface ClusterSection {
  title: Record<Language, string>;
  body: Record<Language, string>;
  bullets?: Record<Language, string[]>;
}

export interface ClusterFaqItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

interface ClusterArticlePageProps {
  language: Language;
  seoPaths: LocalizedRoutePair;
  title: Record<Language, string>;
  description: Record<Language, string>;
  intro: Record<Language, string>;
  breadcrumbs: Record<Language, BreadcrumbEntry[]>;
  sections: ClusterSection[];
  faqs?: ClusterFaqItem[];
  relatedLinks?: Array<{
    href: string;
    label: Record<Language, string>;
  }>;
  ctaTitle: Record<Language, string>;
  ctaBody: Record<Language, string>;
  ctaLabel: Record<Language, string>;
  ctaHref?: string;
}

export function ClusterArticlePage({
  language,
  seoPaths,
  title,
  description,
  intro,
  breadcrumbs,
  sections,
  faqs = [],
  relatedLinks = [],
  ctaTitle,
  ctaBody,
  ctaLabel,
  ctaHref,
}: ClusterArticlePageProps) {
  const seoPath = seoPaths[language];
  const resolvedCtaHref = ctaHref ?? localizedSitePath("contact", language);
  const jsonLd: Record<string, unknown>[] = [
    breadcrumbJsonLd(
      seoPath,
      breadcrumbs[language].map((item) => ({
        name: item.label,
        path: item.href || seoPath,
      })),
    ),
  ];

  if (faqs.length > 0) {
    jsonLd.push(
      faqJsonLd(
        seoPath,
        faqs.map((item) => ({
          question: item.question[language],
          answer: item.answer[language],
        })),
      ),
    );
  }

  return (
    <div className="site-shell min-h-screen bg-background">
      <SeoHead
        title={title[language]}
        description={description[language]}
        path={seoPath}
        language={language}
        alternates={{ ...seoPaths, "x-default": seoPaths.nl }}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="site-main">
        <section className="site-hero pt-32 pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs items={breadcrumbs[language]} />
            <div className="site-pill mb-5">{language === "nl" ? "Verdieping" : "Deep dive"}</div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5"
            >
              {title[language]}
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">{intro[language]}</p>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={section.title.nl} className={index % 2 === 0 ? "site-band py-12" : "py-12"}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display mb-4">{section.title[language]}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{section.body[language]}</p>
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {section.bullets[language].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        {faqs.length > 0 && (
          <section className="site-band py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display mb-6">
                {language === "nl" ? "Veelgestelde vragen" : "Frequently asked questions"}
              </h2>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <article key={item.question.nl} className="site-card rounded-[1.5rem] p-5">
                    <h3 className="font-semibold mb-2">{item.question[language]}</h3>
                    <p className="text-sm text-muted-foreground">{item.answer[language]}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedLinks.length > 0 && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display mb-4">
                {language === "nl" ? "Gerelateerde pagina's" : "Related pages"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="site-card rounded-[1.5rem] p-4 transition-colors hover:bg-secondary/40"
                  >
                    {item.label[language]}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="site-card site-card-strong rounded-[2rem] p-8">
              <h2 className="text-2xl font-bold font-display mb-3">{ctaTitle[language]}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-7">{ctaBody[language]}</p>
              <Link
                href={resolvedCtaHref}
                className="inline-block px-8 py-4 rounded-full font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
              >
                {ctaLabel[language]}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
