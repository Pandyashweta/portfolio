import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_theme_v2");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark"; // Default is dark (Pure Black mode)
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("theme-white");
      root.classList.remove("dark");
    } else {
      root.classList.remove("theme-white");
      root.classList.add("dark");
    }
    localStorage.setItem("portfolio_theme_v2", theme);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: theme }));
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] active:scale-95 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden shadow-sm shrink-0"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Moon Icon (Visible in Dark Mode) */}
      <div
        className={`transition-all duration-300 ease-out transform ${
          theme === "light"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <Moon className="w-4 h-4 fill-current text-[var(--text-primary)]" />
      </div>

      {/* Sun Icon (Visible in Light Mode) */}
      <div
        className={`absolute transition-all duration-300 ease-out transform ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        <Sun className="w-4 h-4 fill-current text-[var(--text-primary)]" />
      </div>
    </button>
  );
}
