import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/Home";
import ContactPage from "@/pages/Contact";
import PlaatsbeschrijvingenPage from "@/pages/Plaatsbeschrijvingen";
import FaqPage from "@/pages/plaatsbeschrijvingen/Faq";
import WatIsPage from "@/pages/plaatsbeschrijvingen/WatIs";
import WetgevingPage from "@/pages/plaatsbeschrijvingen/Wetgeving";
import BijHuurPage from "@/pages/plaatsbeschrijvingen/BijHuur";
import BijWerkenPage from "@/pages/plaatsbeschrijvingen/BijWerken";
import KostenPage from "@/pages/plaatsbeschrijvingen/Kosten";
import ChecklistPage from "@/pages/plaatsbeschrijvingen/Checklist";
import VaststellingPage from "@/pages/plaatsbeschrijvingen/Vaststelling";
import DomoticaPage from "@/pages/Domotica";
import ITConsultancyPage from "@/pages/ITConsultancy";
import PrivacyBewaringPage from "@/pages/PrivacyBewaring";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/plaatsbeschrijvingen" component={PlaatsbeschrijvingenPage} />
      <Route path="/plaatsbeschrijvingen/faq.html" component={FaqPage} />
      <Route path="/plaatsbeschrijvingen/wat-is-een-plaatsbeschrijving.html" component={WatIsPage} />
      <Route path="/plaatsbeschrijvingen/wetgeving-per-gewest.html" component={WetgevingPage} />
      <Route path="/plaatsbeschrijvingen/plaatsbeschrijving-bij-huur.html" component={BijHuurPage} />
      <Route path="/plaatsbeschrijvingen/plaatsbeschrijving-bij-werken.html" component={BijWerkenPage} />
      <Route path="/plaatsbeschrijvingen/kosten-en-wie-betaalt.html" component={KostenPage} />
      <Route path="/plaatsbeschrijvingen/voorbereiding-checklist.html" component={ChecklistPage} />
      <Route path="/plaatsbeschrijvingen/vaststelling-vs-plaatsbeschrijving.html" component={VaststellingPage} />
      <Route path="/domotica" component={DomoticaPage} />
      <Route path="/it-consultancy" component={ITConsultancyPage} />
      <Route path="/privacy-en-bewaring" component={PrivacyBewaringPage} />
      <Route path="/contact" component={ContactPage} />
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
