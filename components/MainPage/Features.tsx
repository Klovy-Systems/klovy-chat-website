"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

const traits = ["openSource", "privacy", "security", "performance"] as const;

export default function Features() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section id="cechy" className="w-full bg-light_bg dark:bg-dark_bg py-32 md:py-40 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text">
            {t("features.section_title")}
          </h2>

          <p className="text-light_text/70 dark:text-dark_text/70 text-base md:text-lg">
            {t("features.section_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {traits.map((key) => (
            <div key={key} className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-light_text dark:text-dark_text">
                {t(`features.${key}.title`)}
              </h3>
              <p className="text-light_text/80 dark:text-dark_text/80 text-base leading-relaxed">
                {t(`features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
