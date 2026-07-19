"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);

  const languages = [
    { code: "pl", label: "Polski" },
    { code: "en", label: "English" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center justify-center text-light hover:text-primary transition-all duration-300 rounded-lg border border-light_border dark:border-dark_border hover:border-primary/50 w-10 h-10"
      >
        <Languages className="w-5 h-5" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-spacing_xs bg-dark border border-light_border dark:border-dark_border rounded-lg overflow-hidden shadow-xl min-w-[140px] animate-fadeIn">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as any);
                setShowMenu(false);
              }}
              className={`w-full px-spacing_sm py-spacing_xs text-left flex items-center gap-spacing_xs hover:bg-primary/10 transition-colors duration-200 ${
                lang === l.code ? "bg-primary/20" : "text-light"
              }`}
            >
              <span className="text-sm">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
