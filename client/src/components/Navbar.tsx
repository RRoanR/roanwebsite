import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/roanros_logo_1771933628066.png";

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

  const navGroups: NavGroup[] = [
    {
      id: "plaats",
      label: t("nav.services.survey"),
      links: [
        {
          href: "/plaatsbeschrijvingen/",
          label: language === "nl" ? "Overzicht" : "Overview",
        },
        {
          href: "/plaatsbeschrijvingen/faq/",
          label: "FAQ",
        },
        {
          href: "/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving/",
          label: language === "nl" ? "Wat is het?" : "What is it?",
        },
        {
          href: "/plaatsbeschrijvingen/kosten-en-wie-betaalt/",
          label: language === "nl" ? "Kosten" : "Costs",
        },
      ],
    },
    {
      id: "domotica",
      label: t("nav.services.domotica"),
      links: [
        {
          href: "/domotica/",
          label: language === "nl" ? "Overzicht" : "Overview",
        },
        {
          href: "/domotica/home-assistant/",
          label: "Home Assistant",
        },
        {
          href: "/domotica/home-assistant/faq/",
          label: "FAQ",
        },
        {
          href: "/domotica/home-assistant/zigbee-zwave-matter-thread/",
          label: "Zigbee / Z-Wave / Matter",
        },
      ],
    },
  ];

  const simpleLinks: NavLink[] = [
    { href: "/it-consultancy", label: t("nav.services.it") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <img src={logoImg} alt="Roan Ros logo" className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-contain" />
            <span className="font-display font-bold text-lg md:text-xl tracking-tight">Roan Ros</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-5 text-sm font-medium">
            {navGroups.map((group) => {
              const isActive = group.links.some(
                (item) => location === item.href || location.startsWith(item.href),
              );

              return (
                <div key={group.id} className="relative group">
                  <button
                    className={`inline-flex items-center gap-1 transition-colors ${
                      isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {group.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 min-w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
                    <div className="rounded-xl border border-border/50 bg-card p-2 shadow-lg">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 rounded-lg text-sm hover:bg-secondary/70 transition-colors"
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
                  location === link.href || location.startsWith(`${link.href}/`)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
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
            {t("nav.cta")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-3">
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
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navGroups.map((group) => {
              const isOpen = mobileOpenGroup === group.id;
              return (
                <div key={group.id}>
                  <button
                    onClick={() => setMobileOpenGroup(isOpen ? null : group.id)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-foreground bg-secondary/40"
                    aria-expanded={isOpen}
                  >
                    {group.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="mt-1 space-y-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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
                className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 rounded-xl text-base font-bold text-center bg-primary text-primary-foreground shadow-md"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

