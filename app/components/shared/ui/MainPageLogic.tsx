import { translations } from "@/app/_mocks/FirstTranslation";
import { useState, useEffect } from "react";

type Lang = "en" | "pt";

export const MainPageLogic = () => {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("video-lang") as Lang | null;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("video-lang", newLang);
  };

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
    handleSetLang,
    change,
    videoCards,
  };
};