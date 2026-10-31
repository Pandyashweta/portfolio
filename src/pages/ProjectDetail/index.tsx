import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { figmaProjects } from "../../data/projects";
import type { LayoutContext } from "../../components/layout/Layout";
import StandardView from "./components/StandardView";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  // Ensure scroll is reset when landing on a project detail
  if (typeof window !== "undefined") {
    scrollToTop?.();
  }

  // Find project across all project collections
  const allProjects = [
    ...figmaProjects,
  ];

  // Remove duplicates
  const uniqueProjects = allProjects.filter(
    (proj, index, self) => self.findIndex((p) => p.id === proj.id) === index
  );

  const project = uniqueProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center text-center bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-4 font-sans">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          aria-label="Back to home"
          className="inline-flex items-center justify-center w-9 h-9 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 active:scale-95 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[var(--bg-primary)]" strokeWidth={2.5} />
        </button>
      </main>
    );
  }

  return (
    <StandardView
      project={project}
      leftColRef={leftColRef}
      rightColRef={rightColRef}
      handleScroll={handleScroll}
    />
  );
}
