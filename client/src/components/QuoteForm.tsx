import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Send } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertLeadSchema>;

export function QuoteForm() {
  const { t, language } = useLanguage();
  const createLead = useCreateLead();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      sliderValue: 2,
      message: "",
      language: language,
    },
  });

  // Watch slider value for dynamic labels
  const sliderValue = form.watch("sliderValue");

  const onSubmit = async (data: FormData) => {
    try {
      await createLead.mutateAsync({ ...data, language });
      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (e) {
      // Error is handled by the hook via toast
    }
  };

  return (
    <div className="bg-card rounded-3xl p-6 md:p-10 shadow-xl shadow-black/5 border border-border relative overflow-hidden">
      {/* Decorative gradient blob */}
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
              Submit another request <ChevronRight className="w-4 h-4 ml-1" />
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
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('form.phone')}</label>
                <input
                  {...form.register("phone")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="+32 400 00 00 00"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('form.service')} *</label>
                <div className="relative">
                  <select
                    {...form.register("service")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 appearance-none"
                  >
                    <option value="">{t('form.service.select')}</option>
                    <option value="survey">{t('services.survey.title')}</option>
                    <option value="home">{t('services.home.title')}</option>
                    <option value="it">{t('services.it.title')}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight className="w-4 h-4 text-muted-foreground rotate-90" />
                  </div>
                </div>
                {form.formState.errors.service && (
                  <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
                )}
              </div>
            </div>

            {/* High Conversion Slider Area */}
            <div className="space-y-4 pt-4 pb-2 bg-secondary/30 px-6 py-5 rounded-2xl border border-border/50">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-foreground">{t('form.size')}</label>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t(`form.size.${sliderValue}` as keyof typeof translations.en)}
                </span>
              </div>
              <div className="relative pt-2">
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  {...form.register("sliderValue", { valueAsNumber: true })}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)) ${(sliderValue - 1) * 33.33}%, hsl(var(--border)) ${(sliderValue - 1) * 33.33}%)`
                  }}
                />
                {/* Custom slider thumb styles using a style tag because tailwind limits range input styling slightly */}
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
              <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
                <span>Min</span>
                <span>Max</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">{t('form.message')} *</label>
              <textarea
                {...form.register("message")}
                rows={4}
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
    </div>
  );
}
