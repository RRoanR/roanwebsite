import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/roanros_logo_1771933628066.png";

export function Navbar() {
  const { t } = useLanguage();
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logoImg} alt="Roan Ros logo" className="w-10 h-10 rounded-lg object-contain" />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Roan Ros
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
            className="hidden sm:flex px-5 py-2.5 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all shadow-md shadow-primary/20"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
