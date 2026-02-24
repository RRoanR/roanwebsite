import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0, href = "/contact" }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />

      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 font-display">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      >
        {t('nav.cta')} <span className="ml-1">&rarr;</span>
      </Link>
    </motion.div>
  );
}
