import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams, useParams } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import HanssenShell from "../../components/layout/HanssenShell";
import SocialBento from "../../components/common/SocialBento";
import { figmaProjects, codingProjects } from "../../data/projects";
import type { ProjectData } from "../../types";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { category: paramCategory } = useParams();

  const raw = paramCategory || searchParams.get("category");
  const activeCategory: "uiux" | "coding" | null =
    raw === "uiux" || raw === "ui-ux"
      ? "uiux"
      : raw === "coding" || raw === "engineering" || raw === "developer"
      ? "coding"
      : null;

  useEffect(() => {
    document.title = "Work";
  }, []);

  const orderedAllProjects = [...codingProjects, ...figmaProjects];

  const visibleProjects =
    activeCategory === "uiux"
      ? figmaProjects
      : activeCategory === "coding"
      ? codingProjects
      : orderedAllProjects;

  const [activeProject, setActiveProject] = useState<ProjectData>(
    visibleProjects[0] || orderedAllProjects[0]
  );

  useEffect(() => {
    setActiveProject(visibleProjects[0] || orderedAllProjects[0]);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [activeCategory]);

  const leftPanel = (
    <div className="relative w-full h-full bg-[var(--bg-card)] rounded-2xl flex flex-col justify-between gap-5 p-5 sm:p-6 pt-14 sm:pt-16 pb-12">
      {/* Clean 16:10 Image — Edge-to-Edge, No Padding or Extra Shades */}
      <Link
        to={`/projects/${activeProject.id}`}
        className="group relative w-full aspect-[16/10] rounded-xl overflow-hidden block shrink-0"
      >
        <img
          src={activeProject.image}
          alt={activeProject.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </Link>

      {/* Rich Project Text & Details Filling Remaining Space */}
      <div className="flex-1 flex flex-col justify-between gap-4 min-h-0">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2 text-[13px] text-[var(--text-muted)]">
            <span>{activeProject.category}</span>
            <span>{activeProject.year || "2026"}</span>
          </div>

          <h2 className="text-[22px] sm:text-[26px] font-medium tracking-tight text-[var(--text-primary)] leading-tight">
            {activeProject.title}
          </h2>

          {activeProject.description && (
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[var(--text-secondary)]">
              {activeProject.description}
            </p>
          )}

          {activeProject.story?.approach && (
            <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[var(--text-muted)] line-clamp-3">
              {activeProject.story.approach}
            </p>
          )}

          {activeProject.tags && activeProject.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-3.5 gap-y-1 pt-1">
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[13px] text-[var(--text-muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-1 shrink-0">
          <Link
            to={`/projects/${activeProject.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 text-[14px] font-medium hover:opacity-90 transition-opacity"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {activeProject.url && (
            <a
              href={activeProject.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] px-4 py-2 text-[14px] font-normal text-[var(--text-primary)] transition-colors"
            >
              <span>
                {activeProject.url.includes("figma")
                  ? "Figma"
                  : activeProject.url.includes("github")
                  ? "GitHub"
                  : "Live Site"}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            </a>
          )}

          {activeProject.resources?.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] px-4 py-2 text-[14px] font-normal text-[var(--text-primary)] transition-colors"
            >
              <span>{res.label}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const filters = [
    { id: null, label: "All", path: "/projects" },
    { id: "coding", label: "Developer", path: "/projects?category=developer" },
    { id: "uiux", label: "UI/UX", path: "/projects?category=uiux" },
  ] as const;

  const bottomRightLabel =
    activeCategory === "uiux"
      ? "UI/UX"
      : activeCategory === "coding"
      ? "Developer"
      : "All Work";

  const renderRow = (project: ProjectData) => {
    const isSelected = activeProject.id === project.id;
    const subtitle = project.category.includes("•")
      ? project.category.split("•")[1].trim()
      : project.category;

    return (
      <Link
        key={project.id}
        to={`/projects/${project.id}`}
        onMouseEnter={() => setActiveProject(project)}
        onFocus={() => setActiveProject(project)}
        className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors ${
          isSelected ? "bg-[var(--bg-card-hover)]" : "hover:bg-[var(--bg-card-hover)]"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-opacity ${
              isSelected ? "bg-[var(--text-primary)] opacity-100" : "opacity-0"
            }`}
          />
          <div className="min-w-0">
            <h3 className="text-[16px] font-medium text-[var(--text-primary)] truncate">
              {project.title}
            </h3>
            <p className="text-[13px] text-[var(--text-secondary)] truncate">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[13px] text-[var(--text-muted)]">
            {project.year || "2026"}
          </span>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </Link>
    );
  };

  return (
    <HanssenShell
      leftPanel={leftPanel}
      bottomRightLabel={bottomRightLabel}
      fullHeightLeft={true}
    >
      {/* Clean Work Header & Segmented Filter */}
      <div className="rounded-2xl bg-[var(--bg-card)] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[22px] sm:text-[24px] font-medium tracking-tight text-[var(--text-primary)]">
          Work
        </h1>

        <div className="inline-flex items-center gap-1 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] p-1 self-start sm:self-auto">
          {filters.map((f) => {
            const active = activeCategory === f.id;
            return (
              <button
                key={f.label}
                type="button"
                onClick={() => navigate(f.path)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grouped Clean Project Lists (Developer first, then UI/UX) */}
      {(activeCategory === null || activeCategory === "coding") && (
        <div className="flex flex-col gap-2 pt-1">
          <span className="px-2 text-[13px] font-medium text-[var(--text-muted)]">
            Developer • Personal
          </span>
          <div className="rounded-2xl bg-[var(--bg-card)] overflow-hidden divide-y divide-[var(--border-color)]">
            {codingProjects.map(renderRow)}
          </div>
        </div>
      )}

      {(activeCategory === null || activeCategory === "uiux") && (
        <div className="flex flex-col gap-2 pt-1">
          <span className="px-2 text-[13px] font-medium text-[var(--text-muted)]">
            UI/UX
          </span>
          <div className="rounded-2xl bg-[var(--bg-card)] overflow-hidden divide-y divide-[var(--border-color)]">
            {figmaProjects.map(renderRow)}
          </div>
        </div>
      )}

      {/* Bottom Socials & Contact */}
      <div className="pt-2">
        <SocialBento layout="grid" />
      </div>
    </HanssenShell>
  );
}
