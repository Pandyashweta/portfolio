import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 relative">
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
