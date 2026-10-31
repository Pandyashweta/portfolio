import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Showcase from "../Home/components/Showcase";
import ThemeToggle from "../../components/common/ThemeToggle";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] text-left transition-colors duration-300 relative z-10">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto pt-8 px-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] font-mono transition-colors duration-300">
          Projects
        </h2>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => navigate("/")}
            aria-label="Back"
            className="inline-flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 active:scale-95 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--bg-primary)]" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Main Content Showcase */}
      <div className="max-w-4xl mx-auto pt-6 pb-12 px-6">
        <Showcase />
      </div>
    </main>
  );
}
