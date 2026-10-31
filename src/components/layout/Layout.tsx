import { useState, useEffect, useRef, type RefObject } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    try {
      const leftScrolled = leftColRef.current ? leftColRef.current.scrollTop > 200 : false;
      const rightScrolled = rightColRef.current ? rightColRef.current.scrollTop > 200 : false;
      const windowScrolled = typeof window !== "undefined" ? window.scrollY > 200 : false;

      setShowScrollTop(leftScrolled || rightScrolled || windowScrolled);
    } catch (e) {}
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } catch (e) {}

    handleScroll();

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll);
      } catch (e) {}
    };
  }, []);

  const scrollToTop = () => {
    try {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      } catch (err) {}
    }

    try {
      if (leftColRef.current) {
        leftColRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        if (leftColRef.current) {
          leftColRef.current.scrollTop = 0;
        }
      } catch (err) {}
    }

    try {
      if (rightColRef.current) {
        rightColRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        if (rightColRef.current) {
          rightColRef.current.scrollTop = 0;
        }
      } catch (err) {}
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 relative">
      <Outlet context={{ leftColRef, rightColRef, handleScroll, scrollToTop }} />
    </div>
  );
}

export interface LayoutContext {
  leftColRef: RefObject<HTMLDivElement | null>;
  rightColRef: RefObject<HTMLDivElement | null>;
  handleScroll: () => void;
  scrollToTop: () => void;
}
