import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/roanros_logo_1771933628066.png";

export function Navbar() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: t('nav.services'), testId: "link-services" },
    { href: "/about", label: t('nav.about'), testId: "link-about" },
    { href: "/contact", label: t('nav.contact'), testId: "link-contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <img src={logoImg} alt="Roan Ros logo" className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-contain" />
            <span className="font-display font-bold text-lg md:text-xl tracking-tight">
              Roan Ros
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={link.testId}
                className={`transition-colors cursor-pointer ${location === link.href || location.startsWith(link.href + '/') ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <LanguageToggle />

          <Link
            href="/contact"
            data-testid="button-cta"
            className="px-5 py-2.5 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all shadow-md shadow-primary/20"
          >
            {t('nav.cta')}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`mobile-${link.testId}`}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location === link.href || location.startsWith(link.href + '/') ? 'text-foreground bg-secondary font-semibold' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              data-testid="mobile-button-cta"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 rounded-xl text-base font-bold text-center bg-primary text-primary-foreground shadow-md"
            >
              {t('nav.cta')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
