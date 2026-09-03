"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import { GITHUB_RELEASES_URL } from "@/lib/downloads";

const releaseLinkProps = {
  href: GITHUB_RELEASES_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

export default function Download() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="flex-1 w-full bg-light_bg dark:bg-dark_bg flex items-center justify-center py-20 mt-16">
      <div className="max-w-5xl mx-auto px-spacing_lg md:px-spacing_md w-full flex flex-col items-center text-center gap-8 animate-fadeInUp">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight">
            {t("download.title")}
          </h2>

          <p className="text-light_text/80 dark:text-dark_text/80 text-base leading-relaxed">
            {t("download.subtitle")}
          </p>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-between p-4 border border-light_border dark:border-dark_border rounded-xl bg-light_bg/40 dark:bg-dark_bg/40">
            <div className="flex items-center gap-3">
              <Image
                src="/os/windows.svg"
                alt="Windows"
                width={26}
                height={26}
              />
              <div className="text-left">
                <h4 className="text-light_text dark:text-dark_text font-semibold">
                  {t("download.windows")}
                </h4>
                <p className="text-light_text/60 dark:text-dark_text/60 text-sm">
                  {t("download.windows_sub")}
                </p>
              </div>
            </div>

            <a
              {...releaseLinkProps}
              className="px-6 py-2 rounded-lg bg-primary text-white font-medium
                         transition-all duration-200 hover:bg-primary/90"
            >
              {t("nav.download")}
            </a>
          </div>

          <div className="flex items-center justify-between p-4 border border-light_border dark:border-dark_border rounded-xl bg-light_bg/40 dark:bg-dark_bg/40">
            <div className="flex items-center gap-3">
              <Image src="/os/linux.svg" alt="Linux" width={26} height={26} />
              <div className="text-left">
                <h4 className="text-light_text dark:text-dark_text font-semibold">
                  {t("download.linux")}
                </h4>
                <p className="text-light_text/60 dark:text-dark_text/60 text-sm">
                  {t("download.linux_sub")}
                </p>
              </div>
            </div>

            <a
              {...releaseLinkProps}
              className="px-6 py-2 rounded-lg bg-primary text-white font-medium
                         transition-all duration-200 hover:bg-primary/90"
            >
              {t("nav.download")}
            </a>
          </div>
        </div>

        <p className="text-light_text/70 dark:text-dark_text/70 text-sm max-w-xl leading-relaxed mt-4">
          {t("download.footer")}{" "}
          <a
            {...releaseLinkProps}
            className="text-primary underline"
          >
            {t("download.releases")}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
