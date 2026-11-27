import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../../components/common/ThemeToggle";
import Footer from "../../components/common/Footer";

const ROWS = 7;
const COLS = 9;

export default function NotFoundPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "404";
  }, []);

  const navLinks = [
    { label: "Work", to: "/projects", external: false },
    { label: "About", to: "/#about", external: false },
    { label: "Resume", to: "/resume.pdf", external: true },
    { label: "Contact", to: "mailto:pandyashweta.in@gmail.com", external: true },
  ];

  return (
    <div className="w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      {/* Full-Viewport Kinetic 404 Hero */}
      <main
        id="main-content"
        className="w-full p-3 bg-[var(--bg-primary)]"
      >
        <div className="relative w-full h-[calc(100svh-24px)] flex items-center justify-center bg-[var(--bg-primary)]">
          {/* Desktop Top-Left Inverted Corner Cutout Navbar (Matches Portfolio Design) */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-5 hanssen-cutout-tl absolute top-0 left-0 z-30 pl-2 pr-4 pt-1.5 pb-2.5"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-normal tracking-tight text-[var(--text-primary)] hover:opacity-65 transition-opacity"
            >
              <span className="inline-block w-3.5 h-3.5 rounded-full border-[2.5px] border-[var(--text-primary)] shrink-0" />
              <span>shweta</span>
            </Link>

            <div className="flex items-center gap-4">
              {navLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target={item.to.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.to.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="text-[14px] font-normal text-[var(--text-primary)] hover:opacity-65 transition-opacity"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-[14px] font-normal text-[var(--text-primary)] hover:opacity-65 transition-opacity"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <ThemeToggle />
          </nav>

          {/* Mobile / Tablet Top-Left Brand + Toggle Cutout */}
          <div className="flex lg:hidden items-center gap-3 hanssen-cutout-tl absolute top-0 left-0 z-30 pl-1.5 pr-3.5 pt-1 pb-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-normal tracking-tight text-[var(--text-primary)]"
            >
              <span className="inline-block w-3.5 h-3.5 rounded-full border-[2.5px] border-[var(--text-primary)] shrink-0" />
              <span>shweta</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile / Tablet Top-Right Menu Cutout */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex lg:hidden items-center gap-1.5 hanssen-cutout-tr absolute top-0 right-0 z-50 pl-4 pr-2 pt-1 pb-2 text-[14px] font-normal text-[var(--text-primary)] cursor-pointer"
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>

          {/* Mobile / Tablet Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute inset-x-3 top-14 z-40 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 shadow-xl flex flex-col gap-2">
              {navLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target={item.to.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.to.startsWith("mailto:") ? undefined : "noreferrer"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-[15px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-[15px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="https://www.figma.com/@pandyashweta"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-[15px] font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                Figma
              </a>
            </div>
          )}

          {/* Bottom-Right Cutout Label */}
          <div className="hanssen-cutout-br absolute bottom-0 right-0 z-20 pl-4 pr-2 pt-2 pb-1 text-[14px] font-normal text-[var(--text-primary)]">
            404 • Not Found
          </div>

          {/* Monumental Kinetic 4-0-4 Grid (Explicit Track Widths = Zero Overlap, Zero Edge Gaps) */}
          <div
            aria-hidden="true"
            className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="select-none pointer-events-none grid grid-cols-[repeat(9,32vw)] lg:grid-cols-[repeat(9,28vw)] auto-rows-[24vh] lg:auto-rows-[52vh] w-max shrink-0">
              {Array.from({ length: ROWS }).map((_, rIdx) =>
                Array.from({ length: COLS }).map((__, cIdx) => {
                  // In a 7x9 grid, center row (3) columns (3, 4, 5) read "4 0 4"
                  const digit = (rIdx + cIdx) % 2 === 0 ? "4" : "0";
                  const colClass = cIdx % 2 === 0 ? "animate-col-a" : "animate-col-b";
                  const rowClass = rIdx % 2 === 0 ? "animate-row-a" : "animate-row-b";

                  return (
                    <div key={`${rIdx}-${cIdx}`} className={`w-full h-full ${colClass}`}>
                      <div
                        className={`w-full h-full flex items-center justify-center ${rowClass}`}
                      >
                        <span className="font-sans font-bold leading-[0.82] tracking-[-0.04em] text-[var(--text-primary)] text-[26vw] lg:text-[29vw]">
                          {digit}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <h1 className="sr-only">404 — Page Not Found</h1>
        </div>
      </main>

      {/* Site Footer Below the 404 Wall */}
      <div className="w-full px-3 pb-3 bg-[var(--bg-primary)]">
        <Footer />
      </div>
    </div>
  );
}
