import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import logoImg from "@assets/roanros_logo_1771933628066.png";
import { localizedGardenPath, localizedSitePath } from "@shared/siteRoutes";

export function Footer() {
  const { t, language } = useLanguage();
  const gardenHref = localizedGardenPath("landing", language);

  return (
    <footer className="border-t border-white/35 bg-background/80 py-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Link href={localizedSitePath("home", language)}>
              <div className="flex cursor-pointer items-center gap-3">
                <img src={logoImg} alt="Roan Ros logo" className="h-8 w-8 rounded-md object-contain" />
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
              <Link href={gardenHref} className="hover:text-foreground transition-colors">
                {t('nav.services.garden')}
              </Link>
              <Link href={localizedSitePath("itConsultancy", language)} className="hover:text-foreground transition-colors">
                {t('nav.services.it')}
              </Link>
              <Link href={localizedSitePath("homeAutomationOverview", language)} className="hover:text-foreground transition-colors">
                {t('nav.services.domotica')}
              </Link>
              <Link href={localizedSitePath("contact", language)} className="hover:text-foreground transition-colors">
                {t('nav.contact')}
              </Link>
              <Link href={localizedSitePath("privacy", language)} className="hover:text-foreground transition-colors">
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
