import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import AnimatedEyes from "./AnimatedEyes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full rounded-2xl bg-[var(--footer-bg)] text-[var(--footer-text-primary)] border border-[var(--footer-border)] p-6 sm:p-8 transition-colors duration-300">
      {/* Top Row: Identity + Resume CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-7 border-b border-current/10">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center overflow-hidden p-1.5 shrink-0">
            <AnimatedEyes className="w-full" />
          </div>
          <div>
            <p className="text-[16px] font-medium leading-tight text-[var(--footer-text-primary)]">
              Shweta Pandya
            </p>
            <p className="text-[13px] text-[var(--footer-text-muted)] mt-0.5">
              technical • business • analyst
            </p>
          </div>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[var(--footer-pill-bg)] text-[var(--footer-pill-text)] px-4 py-2.5 text-[14px] font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
        >
          <span>View Resume</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Middle Row: Availability + 3 Uniform Left-Aligned Link Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 text-[14px]">
        <div className="md:col-span-5 flex flex-col justify-between gap-3">
          <p className="text-[14px] leading-[1.6] text-[var(--footer-text-muted)] max-w-xs">
            Open to new roles, collaborations, and opportunities.
          </p>
          <a
            href="mailto:pandyashweta.in@gmail.com"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--footer-text-primary)] hover:opacity-75 transition-opacity self-start"
          >
            <span>pandyashweta.in@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="md:col-span-7 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-start gap-2.5">
            <p className="font-medium text-[var(--footer-text-primary)] mb-0.5">Pages</p>
            <Link
              to="/"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              Work
            </Link>
            <Link
              to="/#about"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <p className="font-medium text-[var(--footer-text-primary)] mb-0.5">Projects</p>
            <Link
              to="/projects"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              All Work
            </Link>
            <Link
              to="/projects?category=developer"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              Developer
            </Link>
            <Link
              to="/projects?category=uiux"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              UI/UX
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <p className="font-medium text-[var(--footer-text-primary)] mb-0.5">Socials</p>
            <a
              href="https://www.linkedin.com/in/pandyashweta/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pandyashweta"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.figma.com/@pandyashweta"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--footer-text-muted)] hover:text-[var(--footer-link-hover)] transition-colors"
            >
              Figma
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-5 border-t border-current/10 flex items-center justify-between gap-4 text-[13px] text-[var(--footer-text-muted)]">
        <p>© {currentYear} Shweta Pandya</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 hover:text-[var(--footer-link-hover)] transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
