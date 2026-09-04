"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import DocumentsModal from "@/components/Documents/DocumentsModal";
import ContactModal from "@/components/Contact/ContactModal";
import { useState } from "react";
import Image from "next/image";

const socialLinks = [
  { label: "Discord", url: "https://discord.com/invite/rcjCTm9MHS" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/klovy-systems/" },
  { label: "Facebook", url: "https://www.facebook.com/klovysystems" },
  { label: "Instagram", url: "https://www.instagram.com/klovysystems/" },
  { label: "TikTok", url: "https://www.tiktok.com/@klovysystems" },
];

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-light_bg dark:bg-dark_bg border-t border-light_border dark:border-dark_border">
        <div className="max-w-7xl mx-auto px-spacing_lg xl:px-spacing_xl py-10 md:py-12 w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="lg:w-52 shrink-0 space-y-4">
              <a href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/brand/logo_colour.svg"
                  width={36}
                  height={36}
                  alt=""
                  className="h-9 w-9 rounded-full"
                />
                <span className="font-bold text-lg tracking-tight text-light_text dark:text-dark_text">
                  Klovy Chat
                </span>
              </a>
              <p className="text-sm text-light_text dark:text-dark_text">
                © {new Date().getFullYear()} Klovy Chat
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8 flex-1">
              <FooterColumn
                title={t("footer.app")}
                links={[
                  { label: t("footer.openApp"), href: "https://app.klovy.chat", external: true },
                  { label: t("nav.download"), href: "/download" },
                  { label: t("nav.blog"), href: "/blog" },
                  { label: t("nav.about"), href: "/about" },
                ]}
              />
              <FooterColumn
                title={t("footer.support")}
                links={[
                  { label: t("nav.support"), href: "/support" },
                  { label: t("footer.contact"), onClick: () => setIsContactModalOpen(true) },
                ]}
              />
              <FooterColumn
                title={t("footer.developers")}
                links={[
                  { label: t("footer.github"), href: "https://github.com/klovy-chat", external: true },
                  { label: t("footer.frontend"), href: "https://github.com/klovy-chat/frontend", external: true },
                  { label: t("footer.backend"), href: "https://github.com/klovy-chat/backend", external: true },
                ]}
              />
              <FooterColumn
                title={t("footer.team")}
                links={[{ label: t("nav.team"), href: "/team" }]}
              />
              <FooterColumn
                title={t("footer.socials")}
                links={socialLinks.map((item) => ({
                  label: item.label,
                  href: item.url,
                  external: true,
                }))}
              />
              <FooterColumn
                title={t("footer.legal")}
                links={[
                  { label: t("footer.privacy"), href: t("documents.privacyUrl") },
                  { label: t("footer.terms2"), href: t("documents.termsUrl") },
                  { label: t("footer.terms1"), href: t("documents.guidelinesUrl") },
                  { label: t("footer.documents"), onClick: () => setIsDocumentsModalOpen(true) },
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
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
