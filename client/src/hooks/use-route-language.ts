import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function useRouteLanguage(language: "nl" | "en") {
  useEffect(() => {
    const current = useLanguage.getState().language;
    if (current !== language) {
      window.localStorage.setItem("lang", language);
      useLanguage.setState({ language });
    }
  }, [language]);
}
