"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import type { TeamMember } from "@/lib/team";

type TeamProps = {
  users: TeamMember[];
};

export default function Team({ users }: TeamProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(2);
      } else {
        setPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = Math.max(1, Math.ceil(users.length / perPage));
  const visible = users.slice(page * perPage, page * perPage + perPage);

  const paginate = (dir: number) => {
    if (!users.length) return;

    setDirection(dir);
    setPage((p) => {
      const newPage = p + dir;
      if (newPage < 0) return pages - 1;
      if (newPage >= pages) return 0;
      return newPage;
    });
  };

  return (
    <section className="w-full flex-1 bg-light_bg dark:bg-dark_bg py-spacing_4xl flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-spacing_lg w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-light_text dark:text-dark_text leading-tight text-center mb-spacing_md">
          {t("team.title")}
        </h2>

        <p className="text-light_text/80 dark:text-dark_text/80 text-base text-center max-w-3xl mb-spacing_2xl">
          {t("team.description")}
        </p>

        {users.length === 0 ? (
          <p className="text-light_text/80 dark:text-dark_text/80 text-center">
            Team data is currently unavailable.
          </p>
        ) : (
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 md:-left-8 flex p-2 rounded-full border border-light_border dark:border-dark_border hover:bg-primary/10 transition z-10 bg-light_bg dark:bg-dark_bg"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>

            <div className="w-full overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={page}
                  initial={{
                    x: direction > 0 ? 120 : -120,
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{
                    x: direction > 0 ? -120 : 120,
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-spacing_xl w-full justify-items-center"
                >
                  {visible.map((user) => (
                    <a
                      key={user.id}
                      href={user.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      group
                      w-full max-w-sm
                      flex flex-col
                      items-center
                      cursor-pointer
                      transition
                      hover:-translate-y-1
                    "
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={user.avatar}
                            alt={user.username}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-lg font-semibold text-light_text dark:text-dark_text">
                            {user.username}
                          </span>
                          <span className="text-sm text-primary">{user.role}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="absolute right-0 md:-right-8 flex p-2 rounded-full border border-light_border dark:border-dark_border hover:bg-primary/10 transition z-10 bg-light_bg dark:bg-dark_bg"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        )}

        {users.length > 0 && pages > 1 && (
          <div className="flex gap-2 mt-8">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  i === page
                    ? "bg-primary w-6"
                    : "bg-light_border dark:bg-dark_border"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
