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

export default function Footer() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const productLinks = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.team"), href: "/team" },
    { label: t("nav.support"), href: "/support" },
    { label: t("nav.download"), href: "/download" },
    { label: t("nav.blog"), href: "/blog" },
  ];

  const linkClass =
    "block text-sm text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-colors py-1";

  return (
    <>
      <div className="w-full px-4 pb-8 pt-6">
        <footer className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-white/90 dark:bg-[#14131c] border border-light_border dark:border-white/10 px-8 py-10 md:px-12 md:py-12 shadow-[0_8px_32px_rgba(11,10,18,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.28)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4 space-y-4">
              <a href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/brand/logo_colour.svg"
                  width={120}
                  height={40}
                  alt="Klovy Chat"
                  className="h-8 w-auto rounded-full"
                />
                <span className="font-bold text-lg text-light_text dark:text-dark_text">
                  Klovy Chat
                </span>
              </a>
              <p className="text-sm text-light_text/70 dark:text-dark_text/70 max-w-xs leading-relaxed">
                {t("footer.tagline")}
              </p>
              <p className="text-sm text-light_text/60 dark:text-dark_text/60">
                © {new Date().getFullYear()} Klovy Chat
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-light_text/50 dark:text-dark_text/50 mb-4">
                {t("footer.product")}
              </h3>
              <nav className="space-y-1">
                {productLinks.map((item) => (
                  <a key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-light_text/50 dark:text-dark_text/50 mb-4">
                {t("footer.legal")}
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setIsDocumentsModalOpen(true)}
                  className={`${linkClass} text-left cursor-pointer`}
                >
                  {t("footer.documents")}
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className={`${linkClass} text-left cursor-pointer`}
                >
                  {t("footer.contact")}
                </button>
              </nav>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-light_text/50 dark:text-dark_text/50 mb-4">
                {t("footer.socials")}
              </h3>
              <nav className="space-y-1">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </div>

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
