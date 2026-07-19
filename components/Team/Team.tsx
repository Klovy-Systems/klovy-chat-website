"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import type { TeamMember } from "@/lib/team";

type TeamProps = {
  users: TeamMember[];
};

export default function Team({ users }: TeamProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <section className="w-full flex-1 bg-light_bg dark:bg-dark_bg py-spacing_4xl">
      <div className="max-w-7xl mx-auto px-spacing_lg w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight text-center mb-spacing_md">
          {t("team.title")}
        </h2>

        <p className="text-light_text/80 dark:text-dark_text/80 text-base text-center max-w-3xl mb-spacing_2xl">
          {t("team.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacing_xl w-full max-w-5xl">
          {users.map((user) => (
            <a
              key={user.id}
              href={user.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-spacing_lg rounded-2xl border border-light_border dark:border-dark_border bg-light_bg dark:bg-dark_bg hover:border-primary/40 hover:-translate-y-1 transition"
            >
              <div className="relative w-24 h-24 mb-spacing_md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.avatar}
                  alt={user.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>

              <span className="text-xl font-semibold text-light_text dark:text-dark_text group-hover:text-primary transition">
                {user.name}
              </span>
              <span className="text-sm text-primary mt-1">{user.role}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
