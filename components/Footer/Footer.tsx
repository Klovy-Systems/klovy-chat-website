"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import DocumentsModal from "@/components/Documents/DocumentsModal";
import { SOCIAL_LINKS } from "@/lib/socials";
import { useState } from "react";

type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  const linkClass =
    "block text-sm text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-colors py-0.5";

  return (
    <div>
      <h3 className="text-sm text-light_text/50 dark:text-dark_text/50 mb-4">
        {title}
      </h3>
      <nav className="space-y-1.5">
        {links.map((item) =>
          item.onClick ? (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`${linkClass} text-left cursor-pointer`}
            >
              {item.label}
            </button>
          ) : (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={linkClass}
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
    </div>
  );
}

export default function Footer() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-light_bg dark:bg-dark_bg border-t border-light_border dark:border-dark_border">
        <div className="max-w-7xl mx-auto px-spacing_lg xl:px-spacing_xl py-10 md:py-12 w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="lg:w-52 shrink-0">
              <p className="text-sm text-light_text dark:text-dark_text">
                © Copyright {new Date().getFullYear()} Klovy Chat
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
              <FooterColumn
                title={t("footer.support")}
                links={[{ label: t("nav.support"), href: "/support" }]}
              />
              <FooterColumn
                title={t("footer.developers")}
                links={[
                  {
                    label: t("footer.sourceCode"),
                    href: "https://github.com/klovy-chat",
                    external: true,
                  },
                  {
                    label: t("footer.documentation"),
                    href: "https://docs.klovy.chat/",
                    external: true,
                  },
                ]}
              />
              <FooterColumn
                title={t("footer.socials")}
                links={SOCIAL_LINKS.map((item) => ({
                  label: item.label,
                  href: item.url,
                  external: true,
                }))}
              />
              <FooterColumn
                title={t("footer.legal")}
                links={[
                  {
                    label: t("footer.documents"),
                    onClick: () => setIsDocumentsModalOpen(true),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </footer>

      <DocumentsModal
        isOpen={isDocumentsModalOpen}
        onClose={() => setIsDocumentsModalOpen(false)}
      />
    </>
  );
}
