"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import DocumentsModal from "@/components/Documents/DocumentsModal";

type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

const linkClass =
  "block text-sm font-medium text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-colors py-1";

function FooterLinks({ links }: { links: FooterLink[] }) {
  return (
    <nav className="space-y-1">
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
  );
}

function FooterLang() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const languages = [
    { code: "en" as const, label: "English" },
    { code: "pl" as const, label: "Polski" },
  ];
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-light_text dark:text-dark_text bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
        aria-label="Language"
      >
        {current.label}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 min-w-[140px] rounded-xl overflow-hidden border border-light_border dark:border-dark_border bg-light_bg dark:bg-[#1a1924] shadow-xl z-20">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-primary/10 ${
                lang === l.code
                  ? "text-primary bg-primary/10"
                  : "text-light_text dark:text-dark_text"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
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
        <div className="max-w-7xl mx-auto px-spacing_lg xl:px-spacing_xl py-10 md:py-14 w-full">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-24 lg:gap-32">
            <div className="shrink-0 space-y-4">
              <a href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/brand/logo_colour.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-bold text-2xl tracking-tight text-light_text dark:text-dark_text">
                  Klovy Chat
                </span>
              </a>
              <FooterLang />
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
              <FooterLinks
                links={[
                  {
                    label: t("footer.documents"),
                    onClick: () => setIsDocumentsModalOpen(true),
                  },
                  { label: t("nav.about"), href: "/about" },
                  {
                    label: t("footer.status"),
                    href: "https://status.klovy.chat",
                    external: true,
                  },
                  { label: t("nav.support"), href: "/support" },
                ]}
              />
              <FooterLinks
                links={[
                  { label: t("footer.download"), href: "/download" },
                  {
                    label: t("footer.documentation"),
                    href: "https://docs.klovy.chat/",
                    external: true,
                  },
                  {
                    label: t("footer.helpTranslate"),
                    href: "https://github.com/klovy-chat",
                    external: true,
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
