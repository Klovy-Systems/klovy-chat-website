"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

type TeamIntroProps = {
  children: ReactNode;
};

export default function TeamIntro({ children }: TeamIntroProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="w-full flex-1 bg-light_bg dark:bg-dark_bg pt-32 md:pt-40 pb-spacing_4xl">
      <div className="max-w-7xl mx-auto px-spacing_lg w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight text-center mb-spacing_md">
          {t("team.title")}
        </h2>

        <p className="text-light_text/80 dark:text-dark_text/80 text-base text-center max-w-3xl mb-spacing_3xl">
          {t("team.description")}
        </p>

        {children}
      </div>
    </section>
  );
}
