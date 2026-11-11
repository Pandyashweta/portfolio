import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CREATIVE_PORTFOLIO_URL } from "../../data/links";

interface FooterProps {
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Reactive theme tracking:
  // When theme is 'light' (white site) -> isWhiteTheme is true -> Footer is Pure Black with White Text
  // When theme is 'dark' (black site)  -> isWhiteTheme is false -> Footer is Pure White with Black Text
  const [isWhiteTheme, setIsWhiteTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.classList.contains("theme-white") ||
        localStorage.getItem("portfolio_theme_v2") === "light"
      );
    }
    return false;
  });

  useEffect(() => {
    const checkTheme = () => {
      const isWhite =
        document.documentElement.classList.contains("theme-white") ||
        localStorage.getItem("portfolio_theme_v2") === "light";
      setIsWhiteTheme(isWhite);
    };

    checkTheme();

    window.addEventListener("portfolio-theme-change", checkTheme);

    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("portfolio-theme-change", checkTheme);
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="w-full text-left relative z-20 shrink-0 flex flex-col items-center">
      {/* Clean text line above footer (no green dot, no box, no shadow) */}
      <div
        className={`w-full flex justify-center text-center px-4 ${
          compact ? "pb-3 sm:pb-3.5" : "pb-5 sm:pb-6"
        }`}
      >
        <p className="font-mono text-xs sm:text-[13px] text-[var(--text-secondary)] tracking-wide transition-colors duration-300">
          I'm open to{" "}
          <strong className="font-semibold text-[var(--text-primary)] transition-colors duration-300">
            new roles, collaborations, and opportunities
          </strong>
          . Feel free to explore my work or reach out at{" "}
          <a
            href="mailto:pandyashweta.in@gmail.com"
            className={`font-semibold underline underline-offset-2 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-current ${
              isWhiteTheme
                ? "text-[#800020] hover:text-[#990022]"
                : "text-[#f08b9e] hover:text-[#f8a5b5]"
            }`}
          >
            pandyashweta.in@gmail.com
          </a>
        </p>
      </div>

      {/* High-Contrast Inverted Container (Zero shadow / under-shadow removed):
          - White theme (White site) -> PURE BLACK FOOTER with White Text
          - Dark theme (Black site)  -> PURE WHITE FOOTER with Black Text */}
      <div
        className={`w-full rounded-t-[2rem] sm:rounded-t-[2.75rem] lg:rounded-t-[3.25rem] border-t relative overflow-hidden px-6 sm:px-12 lg:px-16 transition-colors duration-300 shadow-none ${
          isWhiteTheme
            ? "bg-black text-white border-white/10"
            : "bg-white text-black border-black/10"
        } ${compact ? "py-4 sm:py-5" : "py-6 sm:py-8 lg:py-10"}`}
        style={{
          backgroundColor: isWhiteTheme ? "#000000" : "#ffffff",
          color: isWhiteTheme ? "#ffffff" : "#000000",
          borderColor: isWhiteTheme ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
          boxShadow: "none",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
          {/* Email + Copyright Left | Socials Center | Navigation Right
              Font matches the 'technical • business • analyst' monospace style */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
            {/* Left: Email & Copyright */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 ${
                isWhiteTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              <a
                href="mailto:pandyashweta.in@gmail.com"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                pandyashweta.in@gmail.com
              </a>
              <span
                className={`hidden sm:inline select-none ${
                  isWhiteTheme ? "text-neutral-600" : "text-neutral-300"
                }`}
              >
                •
              </span>
              <span>© {currentYear} Shweta Pandya</span>
            </div>

            {/* Center: Social Links */}
            <div
              className={`flex items-center justify-center gap-5 sm:gap-8 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 ${
                isWhiteTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/pandyashweta/"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Pandyashweta"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                Resume
              </a>
            </div>

            {/* Right: Site Navigation */}
            <div
              className={`flex items-center justify-center gap-5 sm:gap-8 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 ${
                isWhiteTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              <Link
                to="/"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                Work
              </Link>
              <a
                href={CREATIVE_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors duration-200 ${
                  isWhiteTheme ? "hover:text-white" : "hover:text-black"
                }`}
              >
                Creative
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
