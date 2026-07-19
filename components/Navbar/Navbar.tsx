"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

import MobileMenu from "./MobileMenu";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { lang } = useLanguage();
  const { theme } = useTheme();
  const { t } = useTranslation(lang);

  const navItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.team"), href: "/team" },
    { label: t("nav.support"), href: "/support" },
    { label: t("nav.download"), href: "/download" },
    { label: t("nav.blog"), href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light_bg dark:bg-dark_bg border-b border-light_border dark:border-dark_border animate-slideDown">
      <div className="max-w-7xl mx-auto px-spacing_lg xl:px-spacing_xl">
        <div className="flex items-center justify-between h-24">
          <a href="/" className="flex items-center gap-spacing_sm hover:opacity-80 transition-opacity">
            <Image
              src="/brand/logo_colour.svg"
              width={120}
              height={40}
              alt="Logo"
              className="h-10 w-auto rounded-full"
            />
            <h1 className="xl:hidden font-bold text-xl">Klovy Chat</h1>
          </a>

          <div className="hidden xl:flex items-center gap-spacing_lg absolute left-1/2 -translate-x-1/2">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="text-light hover:text-primary transition-colors text-base"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-spacing_sm">
            <LangToggle />
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-8 h-8 flex items-center justify-center"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current transition-all ${
                  isOpen ? "rotate-45 absolute top-1/2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all ${
                  isOpen ? "-rotate-45 absolute top-1/2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </nav>
  );
}
