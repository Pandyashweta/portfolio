import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Showcase from "../Home/components/Showcase";
import ThemeToggle from "../../components/common/ThemeToggle";
import Footer from "../../components/common/Footer";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { category: paramCategory } = useParams();

  // Normalize category: "uiux" | "coding" | null
  const raw = paramCategory || searchParams.get("category");
  const activeCategory: "uiux" | "coding" | null =
    raw === "uiux" || raw === "ui-ux"
      ? "uiux"
      : raw === "coding" || raw === "engineering"
      ? "coding"
      : null;

  return (
    <main className="w-full min-h-screen md:h-screen md:max-h-screen md:overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] text-left transition-colors duration-300 relative z-10 flex flex-col justify-between selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
      {/* Top Navigation Bar: Anchored close to corner edges */}
      <div className="w-full px-4 sm:px-6 pt-4 sm:pt-5 flex items-center justify-between shrink-0">
        {activeCategory ? (
          <button
            onClick={() => navigate("/projects")}
            aria-label="Back to all work folders"
            className="ca-mono inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--btn-bg)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 transition-all [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] cursor-pointer border border-[var(--border-color)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>ALL WORK</span>
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            aria-label="Back to home"
            className="ca-mono inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--btn-bg)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 transition-all [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] cursor-pointer border border-[var(--border-color)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>HOME</span>
          </button>
        )}

        <ThemeToggle />
      </div>

      {/* Main Center Area: Fills available space, vertically centered, zero scrolling */}
      <div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-0 py-1 sm:py-2">
        {/* Header Title */}
        <div className="text-center pb-2 sm:pb-3.5 shrink-0">
          <h1 className="ca-hand text-3xl sm:text-4xl lg:text-[42px] text-[var(--text-primary)] font-bold tracking-wide select-none leading-none">
            {activeCategory === "uiux"
              ? "explore ui/ux design!"
              : activeCategory === "coding"
              ? "explore coding projects!"
              : "explore my work!"}
          </h1>
          <svg
            viewBox="0 0 160 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1 h-3 w-28 sm:w-36 text-[var(--text-primary)] opacity-85 mx-auto"
            aria-hidden="true"
          >
            <path d="M4 10c35-7 80-7 152 2" />
            <path d="M15 16c30-5 70-5 130 1" />
          </svg>
        </div>

        {/* Content Showcase (Non-scrollable, fits inside screen) */}
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex-1 flex items-center justify-center min-h-0">
          <Showcase
            category={activeCategory}
            onSelectCategory={(cat) => navigate(`/projects?category=${cat}`)}
          />
        </div>
      </div>

      {/* High-Impact Modern Footer locked to bottom */}
      <Footer compact />
    </main>
  );
}
