import { translations } from "@/app/_mocks/FirstTranslation";
import { useState } from "react";

export const MainPageLogic = () => {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const change = translations[lang];
  const videoCards = [
    { id: "autopilot", label: change.autopilot },
    { id: "synergy", label: change.synergy },
    { id: "ask", label: change.ask },
    { id: "crm", label: change.crm },
  ];

  return {
    lang,
    setLang,
    change,
    videoCards,
    
  };
};
