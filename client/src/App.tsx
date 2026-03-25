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
import GardenLandingPage from "@/pages/garden/GardenLanding";
import GardenServicesPage from "@/pages/garden/GardenServices";
import GardenApproachPage from "@/pages/garden/GardenApproach";
import GardenRegionPage from "@/pages/garden/GardenRegion";
import GardenContactPage from "@/pages/garden/GardenContact";
import GardenFaqPage from "@/pages/garden/GardenFaq";
import GardenServiceDetailPage from "@/pages/garden/GardenServiceDetail";
import GardenCityDetailPage from "@/pages/garden/GardenCityDetail";
import {
  gardenCityRoutePairs,
  gardenServiceRoutePairs,
  legacyDomoticaOverviewPath,
  legacyHomeAssistantFaqPath,
  legacyHomeAssistantFaqHtmlPaths,
  legacyHomeAssistantPath,
  siteRoutePairs,
} from "@shared/siteRoutes";

function Router() {
  const gardenServiceRoutes = Object.entries(gardenServiceRoutePairs);
  const gardenCityRoutes = Object.entries(gardenCityRoutePairs);
  const withoutTrailingSlash = (path: string) => (path.endsWith("/") ? path.slice(0, -1) : path);

  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/en/"><HomePage /></Route>
      <Route path="/en"><HomePage /></Route>

      <Route path="/tuinonderhoud/">{() => <GardenLandingPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud">{() => <GardenLandingPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/">{() => <GardenLandingPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance">{() => <GardenLandingPage routeLanguage="en" />}</Route>
      <Route path="/tuinonderhoud/diensten/">{() => <GardenServicesPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud/diensten">{() => <GardenServicesPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/services/">{() => <GardenServicesPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance/services">{() => <GardenServicesPage routeLanguage="en" />}</Route>
      <Route path="/tuinonderhoud/werkwijze/">{() => <GardenApproachPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud/werkwijze">{() => <GardenApproachPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/approach/">{() => <GardenApproachPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance/approach">{() => <GardenApproachPage routeLanguage="en" />}</Route>
      <Route path="/tuinonderhoud/regio/">{() => <GardenRegionPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud/regio">{() => <GardenRegionPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/region/">{() => <GardenRegionPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance/region">{() => <GardenRegionPage routeLanguage="en" />}</Route>
      <Route path="/tuinonderhoud/contact/">{() => <GardenContactPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud/contact">{() => <GardenContactPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/contact/">{() => <GardenContactPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance/contact">{() => <GardenContactPage routeLanguage="en" />}</Route>
      <Route path="/tuinonderhoud/faq/">{() => <GardenFaqPage routeLanguage="nl" />}</Route>
      <Route path="/tuinonderhoud/faq">{() => <GardenFaqPage routeLanguage="nl" />}</Route>
      <Route path="/en/garden-maintenance/faq/">{() => <GardenFaqPage routeLanguage="en" />}</Route>
      <Route path="/en/garden-maintenance/faq">{() => <GardenFaqPage routeLanguage="en" />}</Route>
      {gardenServiceRoutes.flatMap(([key, pair]) => [
        <Route key={`${key}-nl`} path={pair.nl}>
          {() => <GardenServiceDetailPage routeLanguage="nl" serviceKey={key as keyof typeof gardenServiceRoutePairs} />}
        </Route>,
        <Route key={`${key}-nl-noslash`} path={withoutTrailingSlash(pair.nl)}>
          {() => <GardenServiceDetailPage routeLanguage="nl" serviceKey={key as keyof typeof gardenServiceRoutePairs} />}
        </Route>,
        <Route key={`${key}-en`} path={pair.en}>
          {() => <GardenServiceDetailPage routeLanguage="en" serviceKey={key as keyof typeof gardenServiceRoutePairs} />}
        </Route>,
        <Route key={`${key}-en-noslash`} path={withoutTrailingSlash(pair.en)}>
          {() => <GardenServiceDetailPage routeLanguage="en" serviceKey={key as keyof typeof gardenServiceRoutePairs} />}
        </Route>,
      ])}
      {gardenCityRoutes.flatMap(([key, pair]) => [
        <Route key={`${key}-city-nl`} path={pair.nl}>
          {() => <GardenCityDetailPage routeLanguage="nl" cityKey={key as keyof typeof gardenCityRoutePairs} />}
        </Route>,
        <Route key={`${key}-city-nl-noslash`} path={withoutTrailingSlash(pair.nl)}>
          {() => <GardenCityDetailPage routeLanguage="nl" cityKey={key as keyof typeof gardenCityRoutePairs} />}
        </Route>,
        <Route key={`${key}-city-en`} path={pair.en}>
          {() => <GardenCityDetailPage routeLanguage="en" cityKey={key as keyof typeof gardenCityRoutePairs} />}
        </Route>,
        <Route key={`${key}-city-en-noslash`} path={withoutTrailingSlash(pair.en)}>
          {() => <GardenCityDetailPage routeLanguage="en" cityKey={key as keyof typeof gardenCityRoutePairs} />}
        </Route>,
      ])}

      <Route path={siteRoutePairs.homeAutomationOverview.nl} component={DomoticaOverviewPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAutomationOverview.nl)} component={DomoticaOverviewPage} />
      <Route path={siteRoutePairs.homeAutomationOverview.en} component={DomoticaOverviewPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAutomationOverview.en)} component={DomoticaOverviewPage} />
      <Route path={siteRoutePairs.homeAssistant.nl} component={HomeAssistantServicePage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAssistant.nl)} component={HomeAssistantServicePage} />
      <Route path={siteRoutePairs.homeAssistant.en} component={HomeAssistantServicePage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAssistant.en)} component={HomeAssistantServicePage} />
      <Route path={siteRoutePairs.homeAssistantFaq.nl} component={HomeAssistantFaqPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAssistantFaq.nl)} component={HomeAssistantFaqPage} />
      <Route path={siteRoutePairs.homeAssistantFaq.en} component={HomeAssistantFaqPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.homeAssistantFaq.en)} component={HomeAssistantFaqPage} />
      <Route path={legacyDomoticaOverviewPath} component={DomoticaOverviewPage} />
      <Route path={withoutTrailingSlash(legacyDomoticaOverviewPath)} component={DomoticaOverviewPage} />
      <Route path={legacyHomeAssistantPath} component={HomeAssistantServicePage} />
      <Route path={withoutTrailingSlash(legacyHomeAssistantPath)} component={HomeAssistantServicePage} />
      <Route path={legacyHomeAssistantFaqPath} component={HomeAssistantFaqPage} />
      <Route path={withoutTrailingSlash(legacyHomeAssistantFaqPath)} component={HomeAssistantFaqPage} />
      {legacyHomeAssistantFaqHtmlPaths.map((path) => (
        <Route key={path} path={path} component={HomeAssistantFaqPage} />
      ))}
      <Route path={`${withoutTrailingSlash(legacyHomeAssistantPath)}/:slug`}>{(params) => <HomeAssistantTopicPage slug={params.slug} />}</Route>
      <Route path={`${withoutTrailingSlash(siteRoutePairs.homeAssistant.nl)}/:slug`}>{(params) => <HomeAssistantTopicPage slug={params.slug} />}</Route>
      <Route path={`${withoutTrailingSlash(siteRoutePairs.homeAssistant.en)}/:slug`}>{(params) => <HomeAssistantTopicPage slug={params.slug} />}</Route>

      <Route path={siteRoutePairs.itConsultancy.nl} component={ITConsultancyPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.itConsultancy.nl)} component={ITConsultancyPage} />
      <Route path={siteRoutePairs.itConsultancy.en} component={ITConsultancyPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.itConsultancy.en)} component={ITConsultancyPage} />
      <Route path={siteRoutePairs.privacy.nl} component={PrivacyBewaringPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.privacy.nl)} component={PrivacyBewaringPage} />
      <Route path={siteRoutePairs.privacy.en} component={PrivacyBewaringPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.privacy.en)} component={PrivacyBewaringPage} />
      <Route path={siteRoutePairs.contact.nl} component={ContactPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.contact.nl)} component={ContactPage} />
      <Route path={siteRoutePairs.contact.en} component={ContactPage} />
      <Route path={withoutTrailingSlash(siteRoutePairs.contact.en)} component={ContactPage} />
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
