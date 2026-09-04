"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-light_text dark:text-dark_text hover:text-primary transition-all duration-300 rounded-full border border-light_border dark:border-white/10 hover:border-primary/50 w-10 h-10"
      aria-label="Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0 rotate-90 scale-0"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
}
