import { translations, Lang } from "./translations";

export function useTranslation(lang: Lang) {
  const t = (path: string): string => {
    const keys = path.split(".");
    let result: any = translations[lang];

    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }

    return result;
  };

  return { t };
}
