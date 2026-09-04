"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Language = "pl" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Language = "en";

function isLanguage(value: string | null): value is Language {
  return value === "pl" || value === "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const next = isLanguage(saved) ? saved : DEFAULT_LANG;
    setLangState(next);
    document.documentElement.lang = next;
    setReady(true);
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang, ready]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
