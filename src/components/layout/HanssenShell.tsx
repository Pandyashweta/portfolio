import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import BrandMark from "../common/BrandMark";
import Footer from "../common/Footer";

interface HanssenShellProps {
  leftPanel: ReactNode;
  bottomRightLabel?: string;
  stickyLeft?: boolean;
  fullHeightLeft?: boolean;
  splitScroll?: boolean;
  leftExtra?: ReactNode;
  children: ReactNode;
}

export default function HanssenShell({
  leftPanel,
  bottomRightLabel,
  stickyLeft = true,
  fullHeightLeft = true,
  splitScroll = false,
  leftExtra,
  children,
}: HanssenShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Work", to: "/projects", external: false },
    { label: "About", to: "/#about", external: false },
    { label: "Resume", to: "/resume.pdf", external: true },
    { label: "Contact", to: "mailto:pandyashweta.in@gmail.com", external: true },
  ];

  const isActive = (to: string) => {
    if (to === "/projects") return location.pathname.startsWith("/projects");
    return false;
  };

  return (
    <main
      id="main-content"
      className={`w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-3 transition-colors duration-300 selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] ${
        splitScroll ? "lg:h-screen lg:overflow-hidden" : ""
      }`}
    >
      <div
        className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start ${
          splitScroll ? "lg:h-full" : ""
        }`}
      >
        {/* LEFT 50% MEDIA COLUMN */}
        <div
          className={`w-full flex flex-col gap-3 min-w-0 ${
            splitScroll
              ? "lg:h-full lg:overflow-y-auto"
              : stickyLeft
              ? "lg:sticky lg:top-3"
              : ""
          }`}
        >
          <div
            className={`relative w-full shrink-0 ${
              fullHeightLeft
                ? "h-[64vh] sm:h-[72vh] lg:h-[calc(100vh-24px)]"
                : "aspect-[16/10]"
            }`}
          >
          {/* Desktop Top-Left Inverted Corner Cutout Navbar */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-5 hanssen-cutout-tl absolute top-0 left-0 z-30 pl-2 pr-4 pt-1.5 pb-2.5"
          >
            <BrandMark className="hover:opacity-65 transition-opacity" />

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
                    className={`text-[14px] font-normal text-[var(--text-primary)] hover:opacity-65 transition-opacity ${
                      isActive(item.to) ? "underline underline-offset-4" : ""
                    }`}
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
            <BrandMark />
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

          {/* Main Left Panel Content (clipped to rounded-2xl independently of cutouts) */}
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--bg-card)]">
            {leftPanel}
          </div>

          {/* Optional Bottom-Right Inverted Corner Cutout Label */}
          {bottomRightLabel && (
            <div className="hanssen-cutout-br absolute bottom-0 right-0 z-20 pl-4 pr-2 pt-2 pb-1 text-[14px] font-normal text-[var(--text-primary)]">
              {bottomRightLabel}
            </div>
          )}
          </div>

          {/* Optional Extra Cards Stacked Under the Left Cover */}
          {leftExtra}
        </div>

        {/* RIGHT SCROLLABLE BENTO COLUMN */}
        <div
          className={`w-full flex flex-col gap-3 min-w-0 ${
            splitScroll ? "lg:h-full lg:overflow-y-auto" : ""
          }`}
        >
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
