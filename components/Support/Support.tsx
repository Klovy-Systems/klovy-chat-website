"use client";

import type { ComponentType } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import { SOCIAL_LINKS } from "@/lib/socials";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.26 0 .52.03.77.09V9.83a6 6 0 0 0-.77-.05A6 6 0 0 0 1 15.62a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.5a7.83 7.83 0 0 0 4.59 1.5V8.5a4.83 4.83 0 0 1-3.59-1.81z" />
  </svg>
);

const socialIcons: Record<string, ComponentType<{ size?: number }>> = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  TikTok: TikTokIcon,
};

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

          <div className="pt-10 mt-4 border-t border-light_border dark:border-dark_border text-left space-y-6">
            <h3 className="text-2xl font-bold text-light_text dark:text-dark_text">
              {t("contact.title")}
            </h3>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-light_text/70 dark:text-dark_text/70 mb-1">
                  {t("contact.emailLabel")}
                </p>
                <a
                  href="mailto:kontakt@klovy.systems"
                  className="text-light_text dark:text-dark_text hover:text-primary transition-colors font-medium"
                >
                  kontakt@klovy.systems
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm text-light_text/70 dark:text-dark_text/70 mb-4">
                {t("contact.followUs")}
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-lg border border-light_border dark:border-dark_border hover:bg-light_border/50 dark:hover:bg-dark_border/50 hover:text-primary transition-all duration-200 text-light_text dark:text-dark_text"
                      aria-label={social.label}
                    >
                      {Icon ? <Icon size={20} /> : social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
