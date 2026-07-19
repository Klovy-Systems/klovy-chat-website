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
    fixed top-24 left-0 w-full 
    bg-light_bg dark:bg-dark_bg 
    border-t border-light_border dark:border-dark_border
    transition-all duration-300 z-40
    ${isOpen ? "max-h-[calc(100vh-96px)] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
    overflow-y-auto
  `}
    >
      <div className="px-spacing_xl py-spacing_lg space-y-spacing_xl">
        <div className="space-y-spacing_sm">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-light_text dark:text-dark_text hover:text-primary transition-all duration-300 text-lg font-medium py-spacing_xs animate-slideIn"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pt-spacing_xl border-t border-light_border dark:border-dark_border space-y-spacing_xl">
          <div>
            <div className="flex items-center gap-spacing_xs text-light/60 text-sm mb-spacing_xs">
              <Languages className="w-4 h-4 text-primary" />
              <span>{t("mobile.language")}</span>
            </div>

            <div className="flex gap-spacing_xs">
              <button
                onClick={() => setLang("pl")}
                className={`flex-1 px-spacing_sm py-spacing_xs rounded-lg border transition-all duration-300 ${
                  lang === "pl"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-dark_border hover:border-primary/50"
                }`}
              >
                {t("mobile.polish")}
              </button>

              <button
                onClick={() => setLang("en")}
                className={`flex-1 px-spacing_sm py-spacing_xs rounded-lg border transition-all duration-300 ${
                  lang === "en"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-dark_border hover:border-primary/50"
                }`}
              >
                {t("mobile.english")}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-spacing_xs text-light/60 text-sm mb-spacing_xs">
              <SunMoon className="w-5 h-5 text-primary" />
              <span>{t("mobile.theme")}</span>
            </div>

            <div className="flex gap-spacing_xs">
              <button
                onClick={() => setTheme("light")}
                className={`flex-1 px-spacing_sm py-spacing_xs rounded-lg border flex justify-center items-center transition-all duration-300 ${
                  theme === "light"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-dark_border hover:border-primary/50"
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`flex-1 px-spacing_sm py-spacing_xs rounded-lg border flex justify-center items-center transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-primary/10 border-primary"
                    : "border-light_border dark:border-dark_border hover:border-primary/50"
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
