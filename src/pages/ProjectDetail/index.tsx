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
          className="ca-mono inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--btn-bg)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 transition-all shadow-sm [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] cursor-pointer border border-[var(--border-color)]"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          <span>Back to Projects</span>
        </button>
      </main>
    );
  }

  return <StandardView project={project} />;
}
