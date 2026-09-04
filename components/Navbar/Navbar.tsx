"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

import MobileMenu from "./MobileMenu";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const navItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.team"), href: "/team" },
    { label: t("nav.support"), href: "/support" },
    { label: t("nav.download"), href: "/download" },
    { label: t("nav.blog"), href: "/blog" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-slideDown">
      <div className="relative w-full max-w-6xl h-16 flex items-center justify-between gap-3 px-4 sm:px-5 rounded-full bg-white/85 dark:bg-[#14131c]/90 backdrop-blur-xl border border-light_border dark:border-white/10 shadow-[0_8px_32px_rgba(11,10,18,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0">
          <Image
            src="/brand/logo_colour.svg"
            width={36}
            height={36}
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <span className="font-bold text-lg tracking-tight text-light_text dark:text-dark_text">
            Klovy Chat
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-light_text dark:text-dark_text hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <LangToggle />
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full border border-light_border dark:border-white/10"
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between relative">
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

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </nav>
  );
}
