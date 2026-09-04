"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);

  const languages = [
    { code: "en" as const, label: "English" },
    { code: "pl" as const, label: "Polski" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center justify-center text-light_text dark:text-dark_text hover:text-primary transition-all duration-300 rounded-full border border-light_border dark:border-white/10 hover:border-primary/50 w-10 h-10"
        aria-label="Language"
      >
        <Languages className="w-5 h-5" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-[#1a1924] border border-light_border dark:border-white/10 rounded-2xl overflow-hidden shadow-xl min-w-[148px] animate-fadeIn z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setShowMenu(false);
              }}
              className={`w-full px-4 py-2.5 text-left hover:bg-primary/10 transition-colors duration-200 ${
                lang === l.code
                  ? "bg-primary/15 text-primary"
                  : "text-light_text dark:text-dark_text"
              }`}
            >
              <span className="text-sm font-medium">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
