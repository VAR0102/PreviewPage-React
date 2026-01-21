import { gradientStyle } from "@/app/components/shared/ui/GradientStyles";

interface LangSwitcherProps {
  lang: "en" | "pt";
  setLang: (lang: "en" | "pt") => void;
}

export const LangSwitcher = ({ lang, setLang }: LangSwitcherProps) => {
  return (
    <div className="flex p-2 gap-2 rounded-full border border-white bg-white/65 shrink-0 shadow-sm">
      <button
        onClick={() => setLang("pt")}
        className={`px-4 py-2 rounded-full text-lg font-light transition-all flex items-center gap-2 cursor-pointer ${
          lang === "pt" ? "text-white" : "text-[#3d3d3d]"
        }`}
        style={lang === "pt" ? gradientStyle : {}}
      >
        Português 🇧🇷
      </button>

      <button
        onClick={() => setLang("en")}
        className={`px-4 py-2 rounded-full text-lg font-light transition-all flex items-center gap-2 cursor-pointer ${
          lang === "en" ? "text-white" : "text-[#3d3d3d]"
        }`}
        style={lang === "en" ? gradientStyle : {}}
      >
        English 🇺🇸
      </button>
    </div>
  );
};
