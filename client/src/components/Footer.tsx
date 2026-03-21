import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import logoImg from "@assets/roanros_logo_1771933628066.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src={logoImg} alt="Roan Ros logo" className="w-8 h-8 rounded-md object-contain" />
                <span className="font-display font-bold">Roan Ros</span>
              </div>
            </Link>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{t('footer.owner')}</p>
              <p>{t('footer.vat')}</p>
              <p>contact@roanr.be</p>
              <p>+32 468 25 95 03</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
              <Link href="/domotica" className="hover:text-foreground transition-colors">
                {t('nav.services.domotica')}
              </Link>
              <Link href="/it-consultancy" className="hover:text-foreground transition-colors">
                {t('nav.services.it')}
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                {t('nav.contact')}
              </Link>
              <Link href="/privacy-en-bewaring" className="hover:text-foreground transition-colors">
                {t('nav.privacy')}
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Roan Ros. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
