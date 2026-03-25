import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/roanros_logo_1771933628066.png";
import {
  localizedGardenPath,
  localizedSitePath,
  normalizePath,
} from "@shared/siteRoutes";

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  id: string;
  label: string;
  links: NavLink[];
}

export function Navbar() {
  const { t, language } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const normalizedLocation = normalizePath(location);

  const navGroups: NavGroup[] = [
    {
      id: "it",
      label: t("nav.services.it"),
      links: [
        {
          href: localizedSitePath("itConsultancy", language),
          label: language === "nl" ? "Overzicht" : "Overview",
        },
        {
          href: localizedSitePath("homeAutomationOverview", language),
          label: t("nav.services.domotica"),
        },
        {
          href: localizedSitePath("homeAssistant", language),
          label: "Home Assistant",
        },
        {
          href: localizedSitePath("homeAssistantFaq", language),
          label: "FAQ",
        },
      ],
    },
  ];

  const gardenHref = localizedGardenPath("landing", language);

  const simpleLinks: NavLink[] = [
    { href: gardenHref, label: t("nav.services.garden") },
    { href: localizedSitePath("contact", language), label: t("nav.contact") },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/45 bg-background/75 px-4 shadow-[0_20px_60px_-30px_hsl(var(--accent)/0.55)] backdrop-blur-xl sm:px-6 md:h-20">
        <Link href={localizedSitePath("home", language)} data-testid="link-home" onClick={() => setMobileOpen(false)}>
          <div className="flex cursor-pointer items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-lg" />
              <img src={logoImg} alt="Roan Ros logo" className="relative h-9 w-9 rounded-xl object-contain md:h-10 md:w-10" />
            </div>
            <div>
              <span className="block font-display text-lg font-bold tracking-tight md:text-xl">Roan Ros</span>
              <span className="hidden text-xs font-medium text-muted-foreground sm:block">
                {language === "nl" ? "IT, automatisatie en onderhoud" : "IT, automation and care"}
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-5 text-sm font-medium">
            {navGroups.map((group) => {
              const isActive = group.links.some(
                (item) => normalizedLocation === normalizePath(item.href) || normalizedLocation.startsWith(normalizePath(item.href)),
              );

              return (
                <div key={group.id} className="group relative">
                  <button
                    className={`inline-flex items-center gap-1 transition-colors ${
                      isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {group.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full mt-2 min-w-64 opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="rounded-2xl border border-white/40 bg-card/95 p-2 shadow-[0_24px_60px_-32px_hsl(var(--accent)/0.55)] backdrop-blur-xl">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-secondary/70"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  normalizedLocation === normalizePath(link.href) || normalizedLocation.startsWith(normalizePath(link.href))
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <LanguageToggle />

          <Link
            href={localizedSitePath("contact", language)}
            data-testid="button-cta"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-[1.5rem] border border-white/45 bg-background/90 backdrop-blur-xl lg:hidden">
          <div className="space-y-2 px-4 py-4">
            {navGroups.map((group) => {
              const isOpen = mobileOpenGroup === group.id;

              return (
                <div key={group.id}>
                  <button
                    onClick={() => setMobileOpenGroup(isOpen ? null : group.id)}
                    className="flex w-full items-center justify-between rounded-xl bg-secondary/50 px-4 py-3 text-base font-medium text-foreground"
                    aria-expanded={isOpen}
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="mt-1 space-y-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={localizedSitePath("contact", language)}
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-xl bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground shadow-md"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
