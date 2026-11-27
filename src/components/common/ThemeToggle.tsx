import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  // Sync with saved preference on client mount to prevent SSR hydration mismatch
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme_v2");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("theme-white");
      root.classList.remove("dark");
    } else {
      root.classList.remove("theme-white");
      root.classList.add("dark");
    }
    localStorage.setItem("portfolio_theme_v2", theme);
    window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: theme }));
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] p-0.5 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)]"
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-[var(--text-primary)] transition-transform duration-200 ${
          theme === "light" ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
