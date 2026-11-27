import { Link } from "react-router-dom";

interface BrandMarkProps {
  className?: string;
}

/** Navbar brand mark pairing the site favicon with the shweta wordmark. */
export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 text-[14px] font-normal tracking-tight text-[var(--text-primary)] ${className}`}
    >
      <img
        src="/favicon_io/android-chrome-192x192.png?v=2"
        alt=""
        aria-hidden="true"
        className="brand-favicon-mark w-3.5 h-3.5 object-contain shrink-0"
      />
      <span>shweta</span>
    </Link>
  );
}
