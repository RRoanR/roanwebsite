import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Send, Map, Home, Server } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertLeadSchema>;

const buildingSizes = {
  nl: ['Studio', 'Appartement', 'Huis', 'Villa / Groot'],
  en: ['Studio', 'Apartment', 'House', 'Villa / Large'],
};

const surveyTypes = {
  nl: ['Ingaande', 'Uitgaande', 'In + Uit', 'Aanvang werken', 'Einde werken'],
  en: ['Entry', 'Exit', 'Entry + Exit', 'Pre-construction', 'Post-construction'],
};

interface QuoteFormProps {
  preselectedService?: "survey" | "home" | "it";
}

export function QuoteForm({ preselectedService }: QuoteFormProps) {
  const { t, language } = useLanguage();
  const nl = language === 'nl';
  const createLead = useCreateLead();
  const [isSuccess, setIsSuccess] = useState(false);
  const [surveyTypeIndex, setSurveyTypeIndex] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: preselectedService || "",
      sliderValue: 2,
      message: "",
      language: language,
    },
  });

  const selectedService = form.watch("service");
  const sliderValue = form.watch("sliderValue");
  const isSurvey = selectedService === "survey";

  useEffect(() => {
    if (!preselectedService) return;
    form.setValue("service", preselectedService, { shouldValidate: true });
  }, [form, preselectedService]);

  const services = [
    { value: "survey", icon: Map, label: t('services.survey.title'), color: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800" },
    { value: "home", icon: Home, label: t('services.home.title'), color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800" },
    { value: "it", icon: Server, label: t('services.it.title'), color: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800" },
  ];

  const sizes = isSurvey ? buildingSizes[language] : [
    t('form.size.1'),
    t('form.size.2'),
    t('form.size.3'),
    t('form.size.4'),
  ];

  const onSubmit = async (data: FormData) => {
    try {
      let finalMessage = data.message;
      if (isSurvey) {
        const bSize = buildingSizes[language][data.sliderValue - 1] || '';
        const sType = surveyTypes[language][surveyTypeIndex] || '';
        finalMessage = `[${nl ? 'Gebouw' : 'Building'}: ${bSize}] [Type: ${sType}]\n${data.message}`;
      }
      await createLead.mutateAsync({ ...data, message: finalMessage, language });
      setIsSuccess(true);
      form.reset();
      setSurveyTypeIndex(0);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (e) {
    }
  };

  return (
    <div className="bg-card rounded-3xl p-6 md:p-10 shadow-xl shadow-black/5 border border-border relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{t('form.success')}</h3>
            <p className="text-muted-foreground">{t('form.success.desc')}</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-primary font-medium hover:underline flex items-center"
            >
              {nl ? 'Nog een aanvraag indienen' : 'Submit another request'} <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('form.name')} *</label>
                <input
                  {...form.register("name")}
                  data-testid="input-name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('form.email')} *</label>
                <input
                  {...form.register("email")}
                  type="email"
                  data-testid="input-email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">{t('form.phone')}</label>
              <input
                {...form.register("phone")}
                data-testid="input-phone"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                placeholder="+32 400 00 00 00"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">{t('form.service')} *</label>
              <div className="grid grid-cols-3 gap-3">
                {services.map((svc) => {
                  const isSelected = selectedService === svc.value;
                  return (
                    <button
                      key={svc.value}
                      type="button"
                      data-testid={`button-service-${svc.value}`}
                      onClick={() => {
                        form.setValue("service", svc.value, { shouldValidate: true });
                        if (svc.value === "survey") {
                          form.setValue("sliderValue", 2);
                        }
                      }}
                      className={`relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-center cursor-pointer
                        ${isSelected
                          ? 'border-primary bg-primary/5 shadow-md shadow-primary/10 ring-1 ring-primary/20'
                          : 'border-border/60 bg-background hover:border-primary/30 hover:bg-primary/[0.02]'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                        ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                        <svc.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-medium leading-tight transition-colors
                        ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {svc.label}
                      </span>
                      {isSelected && (
                        <motion.div
                          layoutId="service-check"
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" {...form.register("service")} />
              {form.formState.errors.service && (
                <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
              )}
            </div>

            <AnimatePresence mode="wait">
              {isSurvey ? (
                <motion.div
                  key="survey-options"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  <div className="space-y-4 bg-secondary/30 px-5 py-5 rounded-2xl border border-border/50">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-foreground">
                        {nl ? 'Type gebouw' : 'Building type'}
                      </label>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {sizes[sliderValue - 1]}
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        {...form.register("sliderValue", { valueAsNumber: true })}
                        data-testid="slider-building-size"
                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, hsl(var(--primary)) ${(sliderValue - 1) * 33.33}%, hsl(var(--border)) ${(sliderValue - 1) * 33.33}%)`
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-medium px-0.5">
                      {sizes.map((s, i) => (
                        <span key={i} className={`${sliderValue === i + 1 ? 'text-primary font-semibold' : ''} transition-colors`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 bg-secondary/30 px-5 py-5 rounded-2xl border border-border/50">
                    <label className="text-sm font-semibold text-foreground">
                      {nl ? 'Type plaatsbeschrijving' : 'Type of survey'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {surveyTypes[language].map((type, i) => (
                        <button
                          key={i}
                          type="button"
                          data-testid={`button-survey-type-${i}`}
                          onClick={() => setSurveyTypeIndex(i)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            ${surveyTypeIndex === i
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'bg-background border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="generic-slider"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 bg-secondary/30 px-5 py-5 rounded-2xl border border-border/50">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-foreground">{t('form.size')}</label>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {sizes[sliderValue - 1]}
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        {...form.register("sliderValue", { valueAsNumber: true })}
                        data-testid="slider-project-size"
                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, hsl(var(--primary)) ${(sliderValue - 1) * 33.33}%, hsl(var(--border)) ${(sliderValue - 1) * 33.33}%)`
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
                      <span>Min</span>
                      <span>Max</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">{t('form.message')} *</label>
              <textarea
                {...form.register("message")}
                rows={4}
                data-testid="input-message"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                placeholder={t('form.message.placeholder')}
              />
              {form.formState.errors.message && (
                <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={createLead.isPending}
              data-testid="button-submit"
              className="w-full py-4 rounded-xl font-bold text-lg text-primary-foreground
                bg-gradient-to-r from-accent to-amber-400
                shadow-lg shadow-accent/20
                hover:shadow-xl hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
                disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                transition-all duration-200 flex items-center justify-center group"
            >
              {createLead.isPending ? (
                t('form.submitting')
              ) : (
                <>
                  {t('form.submit')}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: transform 0.1s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
      `}} />
    </div>
  );
}
