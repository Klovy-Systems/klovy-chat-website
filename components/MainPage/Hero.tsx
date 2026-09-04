"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="flex-1 w-full bg-light_bg dark:bg-dark_bg flex items-center justify-center mt-section">
      <div className="max-w-7xl mx-auto px-spacing_lg md:px-spacing_md w-full flex flex-col md:flex-row items-center justify-center xl:justify-center gap-spacing_4xl">
        <div className="max-w-xl md:text-left space-y-spacing_sm animate-fadeInUp xl:mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-light_text/80 dark:text-dark_text/80 text-base">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row md:justify-start gap-spacing_sm pt-spacing_sm">
            <a
              href="https://app.klovy.chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-spacing_xl py-spacing_sm bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              {t("hero.cta_start")}
            </a>

            <a
              href="#qualities"
              className="px-spacing_xl py-spacing_sm border border-light_border dark:border-dark_border rounded-xl text-light_text dark:text-dark_text hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center"
            >
              {t("hero.cta_learn")}
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-xl h-[420px] md:h-[520px] hidden xl:flex justify-center items-center">
          <Image
            src="/mockup/phone.png"
            alt="App preview"
            fill
            className="object-contain animate-floating"
          />
        </div>
      </div>
    </section>
  );
}
