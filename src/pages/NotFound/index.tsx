import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../../components/common/ThemeToggle";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 relative overflow-hidden text-center z-10 transition-colors duration-300">
      <div className="fixed top-5 right-5 sm:top-7 sm:right-7 z-30">
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full space-y-6 relative z-10 flex flex-col items-center">
        {/* 404 Header */}
        <div className="relative select-none">
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter text-[var(--text-primary)] font-mono transition-colors duration-300">
            404
          </h1>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)] font-mono transition-colors duration-300">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal max-w-sm mx-auto transition-colors duration-300">
            The link you followed might be broken, or the page may have been removed. Let's get you back.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-2">
          <button
            onClick={() => navigate("/")}
            aria-label="Back to home"
            className="inline-flex items-center justify-center w-10 h-10 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 active:scale-95 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--bg-primary)]" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </main>
  );
}
