"use client";

import { Languages, Sun, Moon, SunMoon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/i18n/useTranslation";

export type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
};

export default function MobileMenu({
  isOpen,
  setIsOpen,
  navItems,
}: MobileMenuProps) {
  const { lang, setLang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation(lang);

  return (
    <div
      className={`
        xl:hidden
        fixed top-[6rem] left-4 right-4
        rounded-3xl
        bg-white/95 dark:bg-[#14131c]/95
        backdrop-blur-xl
        border border-light_border dark:border-white/10
        shadow-[0_16px_48px_rgba(0,0,0,0.2)]
        transition-all duration-300 z-40
        ${isOpen ? "max-h-[min(80vh,640px)] opacity-100" : "max-h-0 opacity-0 overflow-hidden border-transparent shadow-none pointer-events-none"}
        overflow-y-auto
      `}
    >
      <div className="px-6 py-6 space-y-6">
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-light_text dark:text-dark_text hover:text-primary transition-all duration-300 text-lg font-medium py-2 px-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 animate-slideIn"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pt-4 border-t border-light_border dark:border-white/10 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-light_text/60 dark:text-dark_text/60 text-sm mb-2 px-1">
              <Languages className="w-4 h-4 text-primary" />
              <span>{t("mobile.language")}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={`flex-1 px-3 py-2 rounded-full border transition-all duration-300 ${
                  lang === "en"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-white/10 hover:border-primary/50"
                }`}
              >
                {t("mobile.english")}
              </button>

              <button
                onClick={() => setLang("pl")}
                className={`flex-1 px-3 py-2 rounded-full border transition-all duration-300 ${
                  lang === "pl"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-white/10 hover:border-primary/50"
                }`}
              >
                {t("mobile.polish")}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-light_text/60 dark:text-dark_text/60 text-sm mb-2 px-1">
              <SunMoon className="w-5 h-5 text-primary" />
              <span>{t("mobile.theme")}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`flex-1 px-3 py-2 rounded-full border flex justify-center items-center transition-all duration-300 ${
                  theme === "light"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-white/10 hover:border-primary/50"
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`flex-1 px-3 py-2 rounded-full border flex justify-center items-center transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-white/10 hover:border-primary/50"
                }`}
              >
                <Moon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
