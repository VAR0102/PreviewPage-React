import AmericanFlag from "@/public/assets/icon/AmericanFlag";
import PortuguesFlag from "@/public/assets/icon/PortuguesFlag";
import { ReactNode } from "react";

type LangCode = "en" | "pt";

interface LangSwitcherProps {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}

interface LanguageConfig {
  label: string;
  flag: ReactNode;
  value: LangCode;
}
const languages: LanguageConfig[] = [
  { value: "pt", label: "Português", flag: <PortuguesFlag /> },
  { value: "en", label: "English", flag: <AmericanFlag /> },
];

const styles = {
  container:
    "flex p-2 gap-2 rounded-full border border-white bg-white/65 shrink-0 cursor-pointer font-[18px]",
  button:
    "px-4 py-2 rounded-full text-lg transition-all flex items-center gap-2 cursor-pointer",
  gradient: {
    background:
      "linear-gradient(93deg, #a59fc3 -82.63%, #542b81 -36.76%, #dc379f 27.24%, #f3a199 73.1%, #faf6e8 113.63%)",
  },
};

export const LangSwitcher = ({ lang, setLang }: LangSwitcherProps) => {
  return (
    <div className={styles.container}>
      {languages.map(({ value, label, flag }) => {
        const isActive = lang === value;

        return (
          <button
            key={value}
            onClick={() => setLang(value)}
            className={`${styles.button} ${isActive ? "text-white" : "text-[#3d3d3d]"}`}
            style={isActive ? styles.gradient : undefined}
            aria-label={`Switch to ${label}`}
            aria-pressed={isActive}
          >
            {label} {flag}
          </button>
        );
      })}
    </div>
  );
};
