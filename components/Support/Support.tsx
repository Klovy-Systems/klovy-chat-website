"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";

export default function Support() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="flex-1 w-full bg-light_bg dark:bg-dark_bg flex items-center justify-center py-20 mt-32">
      <div className="max-w-5xl mx-auto px-spacing_lg md:px-spacing_md w-full flex flex-col items-center text-center gap-8 animate-fadeInUp">
        <div className="space-y-4 max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight mb-6">
            {t("support.title")}
          </h2>

          <div className="space-y-6 text-left">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ node, ...props }) => (
                  <p
                    className="text-light_text/85 dark:text-dark_text/85 text-base md:text-lg leading-relaxed"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li
                    className="text-light_text/85 dark:text-dark_text/85 text-base md:text-lg leading-relaxed"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noreferrer"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-light_text dark:text-dark_text" {...props} />
                ),
              }}
            >
              {t("support.description")}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
