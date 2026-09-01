"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type TeamMember } from "@/lib/team";
import TeamAvatar from "./TeamAvatar";

type TeamCarouselProps = {
  members: TeamMember[];
};

export default function TeamCarousel({ members }: TeamCarouselProps) {
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

  const pages = Math.max(1, Math.ceil(members.length / perPage));
  const visible = members.slice(page * perPage, page * perPage + perPage);

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((current) => {
      const next = current + dir;
      if (next < 0) return pages - 1;
      if (next >= pages) return 0;
      return next;
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-12 md:px-16">
      <button
        type="button"
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex p-3 rounded-full border border-light_border dark:border-dark_border hover:bg-primary/10 hover:border-primary/40 transition bg-light_bg dark:bg-dark_bg shadow-sm"
        aria-label="Poprzednia strona"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="overflow-hidden min-h-[220px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {visible.map((member) => (
              <a
                key={member.id}
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center w-full max-w-xs p-6 rounded-2xl hover:-translate-y-1 transition"
              >
                <div className="mb-5">
                  <TeamAvatar
                    userId={member.id}
                    name={member.name}
                    avatarHash={member.avatarHash}
                  />
                </div>

                <h3 className="text-lg font-semibold text-light_text dark:text-dark_text group-hover:text-primary transition">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mt-1.5">{member.role}</p>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex p-3 rounded-full border border-light_border dark:border-dark_border hover:bg-primary/10 hover:border-primary/40 transition bg-light_bg dark:bg-dark_bg shadow-sm"
        aria-label="Następna strona"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {pages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > page ? 1 : -1);
                setPage(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === page
                  ? "w-8 bg-primary"
                  : "w-2 bg-light_border dark:bg-dark_border hover:bg-primary/50"
              }`}
              aria-label={`Strona ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
