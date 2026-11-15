import { Link } from "react-router-dom";
import { CREATIVE_PORTFOLIO_URL } from "../../data/links";

interface FooterProps {
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
            className="font-semibold underline underline-offset-2 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-current text-[var(--open-to-email)] hover:text-[var(--open-to-email-hover)]"
          >
            pandyashweta.in@gmail.com
          </a>
        </p>
      </div>

      {/* High-Contrast Inverted Container (Pure CSS driven, zero hydration mismatch):
          - White theme (White site) -> PURE BLACK FOOTER with White Text
          - Dark theme (Black site)  -> PURE WHITE FOOTER with Black Text */}
      <div
        className={`w-full rounded-t-[2rem] sm:rounded-t-[2.75rem] lg:rounded-t-[3.25rem] border-t relative overflow-hidden px-6 sm:px-12 lg:px-16 transition-colors duration-300 shadow-none bg-[var(--footer-bg)] text-[var(--footer-text-primary)] border-[var(--footer-border)] ${
          compact ? "py-4 sm:py-5" : "py-6 sm:py-8 lg:py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
          {/* Email + Copyright Left | Socials Center | Navigation Right
              Font matches the 'technical • business • analyst' monospace style */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
            {/* Left: Email & Copyright */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 text-[var(--footer-text-muted)]">
              <a
                href="mailto:pandyashweta.in@gmail.com"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                pandyashweta.in@gmail.com
              </a>
              <span className="hidden sm:inline select-none opacity-40">
                •
              </span>
              <span>© {currentYear} Shweta Pandya</span>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center justify-center gap-5 sm:gap-8 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 text-[var(--footer-text-muted)]">
              <a
                href="https://www.linkedin.com/in/pandyashweta/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Pandyashweta"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                Resume
              </a>
            </div>

            {/* Right: Site Navigation */}
            <div className="flex items-center justify-center gap-5 sm:gap-8 font-mono text-xs sm:text-[13px] tracking-wide font-normal transition-colors duration-300 text-[var(--footer-text-muted)]">
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
              >
                Work
              </Link>
              <a
                href={CREATIVE_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
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
