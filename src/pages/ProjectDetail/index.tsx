import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "../../data/projects";
import StandardView from "./components/StandardView";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Reset scroll to top cleanly whenever the active project changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [projectId]);

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="w-full h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4 ca-mono">Project not found</h1>
        <button
          onClick={() => navigate("/projects")}
          aria-label="Back to projects"
          title="Back to projects"
          className="relative w-9 h-9 group flex items-center justify-center cursor-pointer focus:outline-none shrink-0"
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
      </main>
    );
  }

  return <StandardView project={project} />;
}
