"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    } else {
      const timestamp = parseInt(consent);
      const now = Date.now();
      const oneMonth = 30 * 24 * 60 * 60 * 1000; 
      if (now - timestamp > oneMonth) {
        setShow(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", Date.now().toString());
    setShow(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", Date.now().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-light_bg dark:bg-dark_bg border border-light_border dark:border-dark_border p-4 rounded-lg shadow-lg max-w-lg w-full sm:w-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-light_text dark:text-dark_text flex-1">
          {t("cookieConsent.message")}
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors text-sm font-medium"
          >
            {t("cookieConsent.accept")}
          </button>
          <button
            onClick={handleClose}
            className="text-light_text dark:text-dark_text hover:text-primary transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}