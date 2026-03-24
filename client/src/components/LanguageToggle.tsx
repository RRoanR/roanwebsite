import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { findLocalizedRoute } from "@shared/siteRoutes";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [location, setLocation] = useLocation();
  const localizedRoute = findLocalizedRoute(location);

  const switchLanguage = (lang: "nl" | "en") => {
    if (localizedRoute) {
      window.localStorage.setItem("lang", lang);
      useLanguage.setState({ language: lang });
      setLocation(localizedRoute[lang]);
      return;
    }
    setLanguage(lang);
  };

  return (
    <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border/50 shadow-sm backdrop-blur-sm">
      <button
        onClick={() => switchLanguage('nl')}
        aria-label="Switch language to Dutch"
        aria-pressed={language === 'nl'}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'nl' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {language === 'nl' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-background rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">NL</span>
      </button>
      <button
        onClick={() => switchLanguage('en')}
        aria-label="Switch language to English"
        aria-pressed={language === 'en'}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-background rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
}
