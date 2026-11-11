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
      : raw === "coding" || raw === "engineering" || raw === "developer"
      ? "coding"
      : null;

  const sub = searchParams.get("sub");

  return (
    <main id="main-content" className="w-full min-h-screen md:h-screen md:max-h-screen md:overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] text-left transition-colors duration-300 relative z-10 flex flex-col justify-between selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
      {/* Top Navigation Bar: Aligned precisely with folder ends and lowered to match home button position */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-7 lg:pt-8 shrink-0">
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex items-center justify-between">
        {(() => {
          const handleBack = () => {
            if (activeCategory === "coding" && sub) {
              navigate("/projects?category=developer");
            } else if (activeCategory) {
              navigate("/projects");
            } else {
              navigate("/");
            }
          };

          const backLabel =
            activeCategory === "coding" && sub
              ? "Back to Developer"
              : activeCategory
              ? "Back to All Work"
              : "Back to Home";

          return (
            <button
              onClick={handleBack}
              aria-label={backLabel}
              title={backLabel}
              className="relative w-9 h-9 group flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] shrink-0"
            >
              <svg
                viewBox="0 0 36 36"
                className="absolute inset-0 w-full h-full fill-[var(--bg-card)] stroke-[var(--border-color)] group-hover:fill-[var(--text-primary)] group-hover:stroke-[var(--text-primary)]"
                style={{ overflow: "visible" }}
              >
                <polygon
                  points="0.75,9.5 9.5,0.75 35.25,0.75 35.25,35.25 0.75,35.25"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <ArrowLeft
                className="relative z-10 w-4 h-4 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)]"
                strokeWidth={2.5}
              />
            </button>
          );
        })()}

        <ThemeToggle />
        </div>
      </div>

      {/* Main Center Area: Fills available space, vertically centered, zero scrolling */}
      <div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-0 py-1 sm:py-2">
        {/* Header Title */}
        <div className="text-center pb-3 sm:pb-4 shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight uppercase text-[var(--text-primary)]">
            {activeCategory === "uiux"
              ? "Explore UI/UX Design"
              : activeCategory === "coding"
              ? sub === "data-analytics"
                ? "Data & Analytics"
                : sub === "automation-tools"
                ? "Automation & Tools"
                : sub === "fullstack-ai"
                ? "Full Stack & AI"
                : "Explore Developer Work"
              : "Explore My Work"}
          </h1>
        </div>

        {/* Content Showcase (Non-scrollable, fits inside screen) */}
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex-1 flex items-center justify-center min-h-0">
          <Showcase
            category={activeCategory}
            subCategory={sub}
            onSelectCategory={(cat) => navigate(`/projects?category=${cat === "coding" ? "developer" : cat}`)}
            onSelectSubCategory={(subCat) => {
              if (subCat) {
                navigate(`/projects?category=developer&sub=${subCat}`);
              } else {
                navigate("/projects?category=developer");
              }
            }}
          />
        </div>
      </div>

      {/* High-Impact Modern Footer locked to bottom */}
      <Footer compact />
    </main>
  );
}
