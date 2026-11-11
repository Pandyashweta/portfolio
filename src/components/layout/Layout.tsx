import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--bg-card)] focus:text-[var(--text-primary)] focus:border focus:border-[var(--border-color)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
      >
        Skip to main content
      </a>
      <Outlet />
    </div>
  );
}

export interface LayoutContext {
  leftColRef?: any;
  rightColRef?: any;
  handleScroll?: () => void;
  scrollToTop?: () => void;
}
