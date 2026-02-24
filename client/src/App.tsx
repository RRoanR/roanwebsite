import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/Home";
import ContactPage from "@/pages/Contact";
import ITConsultancyPage from "@/pages/ITConsultancy";
import PrivacyBewaringPage from "@/pages/PrivacyBewaring";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import DomoticaOverviewPage from "@/pages/clusters/DomoticaOverview";
import HomeAssistantServicePage from "@/pages/clusters/HomeAssistantService";
import HomeAssistantFaqPage from "@/pages/clusters/HomeAssistantFaq";
import HomeAssistantTopicPage from "@/pages/clusters/HomeAssistantTopic";
import PlaatsOverviewPage from "@/pages/clusters/PlaatsOverview";
import PlaatsFaqPage from "@/pages/clusters/PlaatsFaq";
import PlaatsTopicPage from "@/pages/clusters/PlaatsTopic";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />

      <Route path="/domotica/" component={DomoticaOverviewPage} />
      <Route path="/domotica" component={DomoticaOverviewPage} />
      <Route path="/domotica/home-assistant/" component={HomeAssistantServicePage} />
      <Route path="/domotica/home-assistant" component={HomeAssistantServicePage} />
      <Route path="/domotica/home-assistant/faq/" component={HomeAssistantFaqPage} />
      <Route path="/domotica/home-assistant/faq" component={HomeAssistantFaqPage} />
      <Route path="/domotica/home-assistant/faq.html" component={HomeAssistantFaqPage} />
      <Route path="/domotica/home-assistant/:slug">{(params) => <HomeAssistantTopicPage slug={params.slug} />}</Route>
      <Route path="/domotica/home-assistant/:slug/">{(params) => <HomeAssistantTopicPage slug={params.slug} />}</Route>

      <Route path="/plaatsbeschrijvingen/" component={PlaatsOverviewPage} />
      <Route path="/plaatsbeschrijvingen" component={PlaatsOverviewPage} />
      <Route path="/plaatsbeschrijvingen/faq/" component={PlaatsFaqPage} />
      <Route path="/plaatsbeschrijvingen/faq" component={PlaatsFaqPage} />
      <Route path="/plaatsbeschrijvingen/faq.html" component={PlaatsFaqPage} />
      <Route path="/plaatsbeschrijvingen/:slug">{(params) => <PlaatsTopicPage slug={params.slug} />}</Route>
      <Route path="/plaatsbeschrijvingen/:slug/">{(params) => <PlaatsTopicPage slug={params.slug} />}</Route>

      <Route path="/it-consultancy" component={ITConsultancyPage} />
      <Route path="/privacy-en-bewaring" component={PrivacyBewaringPage} />
      <Route path="/privacy-en-bewaring/" component={PrivacyBewaringPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/contact/" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
