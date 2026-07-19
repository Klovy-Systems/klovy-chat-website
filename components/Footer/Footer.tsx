"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import DocumentsModal from "@/components/Documents/DocumentsModal";
import ContactModal from "@/components/Contact/ContactModal";
import { useState } from "react";

export default function Footer() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-light_bg dark:bg-dark_bg border-t border-light_border dark:border-dark_border">
        <div
          className="
            max-w-7xl mx-auto 
            px-spacing_lg xl:px-spacing_xl 
            py-6
            w-full 
            flex flex-col sm:flex-row 
            items-center 
            justify-between
            gap-4
            text-center sm:text-left
          "
        >
          <p className="text-light_text dark:text-dark_text text-sm">
            © {new Date().getFullYear()} Klovy Chat
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm items-center">
            <button
              onClick={() => setIsDocumentsModalOpen(true)}
              className="text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              {t("footer.documents")}
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              {t("footer.contact")}
            </button>
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
