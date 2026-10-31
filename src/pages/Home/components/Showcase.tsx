import { figmaProjects } from "../../../data/projects";
import ProjectCard from "../../../components/common/ProjectCard";

export default function Showcase() {
  return (
    <div className="space-y-12 text-left">
      {/* UI/UX Design Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="text-xs font-semibold text-[var(--text-secondary)] font-sans uppercase tracking-wider shrink-0 transition-colors duration-300">
            UI/UX Design
          </h3>
          <div className="h-px bg-[var(--border-color)] flex-grow transition-colors duration-300" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {figmaProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              to={`/projects/${proj.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
