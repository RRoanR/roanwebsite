import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-display font-bold shadow-md">
                  V
                </div>
                <span className="font-display font-bold">Vastgoed & IT</span>
              </div>
            </Link>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{t('footer.owner')}</p>
              <p>{t('footer.vat')}</p>
              <p>contact@roanr.be</p>
              <p>+32 468 25 95 03</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-foreground transition-colors">
                {t('nav.services')}
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vastgoed & IT. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
