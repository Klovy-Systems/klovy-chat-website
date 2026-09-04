"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

const traits = [
  { key: "openSource", reverse: true, image: "/qualities/open-source.jpg" },
  { key: "privacy", reverse: false, image: "/qualities/privacy.jpg" },
  { key: "security", reverse: true, image: "/qualities/security.jpg" },
  { key: "performance", reverse: false, image: "/qualities/performance.jpg" },
] as const;

export default function Features() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section id="qualities" className="w-full bg-light_bg dark:bg-dark_bg py-32 md:py-40 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text">
            {t("features.section_title")}
          </h2>

          <p className="text-light_text/70 dark:text-dark_text/70 text-base md:text-lg">
            {t("features.section_description")}
          </p>
        </div>

        <div className="space-y-32">
          {traits.map((trait) => {
            const rowClass = trait.reverse
              ? "md:flex-row-reverse"
              : "md:flex-row";

            return (
              <div
                key={trait.key}
                className={`flex flex-col ${rowClass} items-center gap-16`}
              >
                <div className="w-full md:flex-1 max-w-xl relative h-[220px] sm:h-[280px] md:h-[360px]">
                  <Image
                    src={trait.image}
                    alt={t(`features.${trait.key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                  />
                </div>

                <div className="w-full md:flex-1 max-w-xl space-y-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-light_text dark:text-dark_text">
                    {t(`features.${trait.key}.title`)}
                  </h3>

                  <p className="text-light_text/80 dark:text-dark_text/80 text-base leading-relaxed">
                    {t(`features.${trait.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
