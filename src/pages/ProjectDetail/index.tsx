import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../../data/projects";
import StandardView from "./components/StandardView";
import NotFoundPage from "../NotFound";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [projectId]);

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return <StandardView project={project} />;
}
