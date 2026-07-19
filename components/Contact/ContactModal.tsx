"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import { X, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscordIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.39-.398-.875-.609-1.25a.077.077 0 0 0-.079-.036 19.736 19.736 0 0 0-4.884 1.515.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.352.699.763 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.056c.5-4.566-.838-8.529-3.549-12.047a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.26 0 .52.03.77.09V9.83a6 6 0 0 0-.77-.05A6 6 0 0 0 1 15.62a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.5a7.83 7.83 0 0 0 4.59 1.5V8.5a4.83 4.83 0 0 1-3.59-1.81z" />
  </svg>
);

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const socialLinks = [
    {
      icon: DiscordIcon,
      label: "Discord",
      url: "https://discord.com/invite/rcjCTm9MHS",
      color: "hover:text-[#5865F2]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/klovy-systems/",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/klovysystems",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/klovysystems/",
      color: "hover:text-[#E4405F]",
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      url: "https://www.tiktok.com/@klovysystems",
      color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-light_bg/80 dark:bg-dark_bg/80 backdrop-blur rounded-xl shadow-2xl w-full max-w-md flex flex-col border border-light_border dark:border-dark_border pointer-events-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-light_border dark:border-dark_border">
                <h2 className="text-2xl font-bold text-light_text dark:text-dark_text">
                  {t("contact.title")}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-light_border dark:hover:bg-dark_border rounded-lg transition-colors text-light_text dark:text-dark_text"
                  aria-label={t("contact.close")}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-light_text/70 dark:text-dark_text/70 mb-1">
                      {t("contact.emailLabel")}
                    </p>
                    <a
                      href="mailto:kontakt@klovy.systems"
                      className="text-light_text dark:text-dark_text hover:text-primary transition-colors font-medium"
                    >
                      kontakt@klovy.systems
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-light_text/70 dark:text-dark_text/70 mb-4">
                    {t("contact.followUs")}
                  </p>
                  <div className="grid grid-cols-5 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center p-3 rounded-lg border border-light_border dark:border-dark_border hover:bg-light_border/50 dark:hover:bg-dark_border/50 transition-all duration-200 ${social.color} text-light_text dark:text-dark_text`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
