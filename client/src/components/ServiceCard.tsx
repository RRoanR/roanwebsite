import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { localizedSitePath } from "@shared/siteRoutes";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  href,
  className = "",
}: ServiceCardProps) {
  const { t, language } = useLanguage();
  const resolvedHref = href ?? localizedSitePath("contact", language);
  const testId = resolvedHref.replace(/\/+$/, "").split("/").pop() || "service";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`site-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${className}`}
    >
      <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-[100px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent transition-transform duration-500 group-hover:scale-110" />

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-inner transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">
        {title}
      </h3>

      <p className="mb-6 leading-relaxed text-muted-foreground">
        {description}
      </p>

      <Link
        href={resolvedHref}
        className="inline-flex items-center text-sm font-semibold text-primary hover:underline transition-all"
        data-testid={`link-service-${testId}`}
      >
        {t('services.learnMore')} <span className="ml-1">&rarr;</span>
      </Link>
    </motion.div>
  );
}
