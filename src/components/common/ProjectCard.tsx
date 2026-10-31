import type { Key } from "react";
import { Link } from "react-router-dom";
import type { ProjectData } from "../../types";

interface ProjectCardProps {
  key?: Key;
  project: ProjectData;
  onClick?: () => void;
  to?: string;
  paddingClass?: string;
  categorySizeClass?: string;
  titleSizeClass?: string;
  gradientClass?: string;
}

export default function ProjectCard({
  project,
  onClick,
  to,
  paddingClass,
  categorySizeClass,
  titleSizeClass,
  gradientClass
}: ProjectCardProps) {
  const isLink = !!project.url || !!to;

  const resolvedPadding = paddingClass || (isLink ? "p-5" : "p-6");
  const resolvedTitleSize = titleSizeClass || (isLink ? "text-base sm:text-lg leading-snug" : "text-xl sm:text-2xl");
  const resolvedGradient = gradientClass || (isLink ? "from-black/90 via-black/35" : "from-black/85 via-black/20");

  const displayTitle = project.title.replace(/^\d+[\s/.]+\s*/, "");

  const content = (
    <>
      <div className={`relative w-full overflow-hidden flex-grow ${project.aspectClass}`}>
        <img
          src={project.image}
          alt={displayTitle}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] will-change-transform"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col items-start gap-2 text-left">
          {project.category && (
            <span className="text-[10px] font-sans font-medium tracking-wide text-zinc-200 uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              {project.category}
            </span>
          )}
          <h4 className={`${resolvedTitleSize} font-semibold text-white font-mono tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]`}>
            {displayTitle}
          </h4>
        </div>
      </div>
    </>
  );

  const containerClasses = `relative rounded-[5px] overflow-hidden group border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col h-full w-full transition-[transform,border-color,background-color] duration-500 ease-out hover:scale-[1.008] hover:border-[var(--border-hover)] will-change-transform ${project.spanClass || ""} ${(isLink || onClick) ? "cursor-pointer" : ""}`;

  if (to) {
    return (
      <Link
        to={to}
        className={containerClasses}
      >
        {content}
      </Link>
    );
  }

  if (project.url && !onClick) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={containerClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      className={containerClasses}
    >
      {content}
    </div>
  );
}
