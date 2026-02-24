import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { t } = useLanguage();
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-lg shadow-primary/20">
              V
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Vastgoed & IT
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/services"
              data-testid="link-services"
              className={`transition-colors cursor-pointer ${location === '/services' ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t('nav.services')}
            </Link>
            <Link
              href="/about"
              data-testid="link-about"
              className={`transition-colors cursor-pointer ${location === '/about' ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              data-testid="link-contact"
              className={`transition-colors cursor-pointer ${location === '/contact' ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          <LanguageToggle />

          <Link
            href="/contact"
            data-testid="button-cta"
            className="hidden sm:flex px-5 py-2.5 rounded-full font-semibold text-sm bg-foreground text-background hover:-translate-y-0.5 transition-all"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
