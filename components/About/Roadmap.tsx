"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

export default function Roadmap() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="w-full bg-light_bg dark:bg-dark_bg py-0">
      <div className="max-w-6xl mx-auto px-spacing_lg py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto mt-24 md:mt-28 lg:mt-32 animate-fadeInUp">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-light_text dark:text-dark_text mb-6">
            {t("roadmap.title")}
          </h2>

          <div className="space-y-4 text-center text-light_text/80 dark:text-dark_text/80">
            <p className="text-base leading-relaxed">
              {t("roadmap.about.paragraph_1")}
            </p>
            <p className="text-base leading-relaxed">
              {t("roadmap.about.paragraph_2")}
            </p>
            <p className="text-base leading-relaxed">
              {t("roadmap.about.paragraph_3")}
            </p>
            <p className="text-base leading-relaxed">
              {t("roadmap.about.paragraph_4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
