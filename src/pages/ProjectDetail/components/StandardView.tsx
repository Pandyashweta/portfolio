import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectData } from "../../../types";
import type { LayoutContext } from "../../../components/layout/Layout";
import { parseMarkdown } from "../utils/markdown";
import { getImageCaption } from "../utils/captions";

type StandardViewProps = Pick<LayoutContext, "leftColRef" | "rightColRef" | "handleScroll"> & {
  project: ProjectData;
};

export default function StandardView({ project, leftColRef, rightColRef, handleScroll }: StandardViewProps) {
  const navigate = useNavigate();

  // Fallbacks for metadata
  const displayYear = project.year || "2026";
  const displayScope = project.scope || project.category || "Development";
  const displayClient = project.client || "Self Project";
  const displayDuration = project.duration || "Ongoing";
  const displayAbout = project.aboutText || "Detailed description of this project is coming soon.";
  const displayImages = project.images && project.images.length > 0 ? project.images : [project.image];

  // Determine external link button label
  const getButtonLabel = (urlStr: string) => {
    if (urlStr.includes("figma.com")) return "Open Figma File";
    if (urlStr.includes("github.com")) return "View Repository";
    return "Open Live Site";
  };

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-4 items-stretch relative z-10 text-left">
      {/* Left Column: Project Description Sidebar with Sticky Header */}
      <div
        ref={leftColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-left flex flex-col relative"
      >
        {/* Sticky Header: Contains Title and Back Button */}
        <div className="sticky top-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm z-20 pt-5 pb-0 flex flex-col gap-3 transition-colors duration-300">
          <div className="pl-6 pr-3 flex flex-row items-center justify-between gap-3">
            <h1 className="text-3xl sm:text-[38px] font-semibold tracking-wide text-[var(--text-primary)] leading-tight font-mono transition-colors duration-300">
              {project.title}
            </h1>
            <button
              onClick={() => navigate(-1)}
              aria-label="Back"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 active:scale-95 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--bg-primary)]" strokeWidth={2.5} />
            </button>
          </div>
          <div className="h-px bg-[var(--border-color)] ml-6 mr-3 transition-colors duration-300" />
        </div>

        {/* Scrollable Content Container */}
        <div className="pl-6 pr-3 pt-4 pb-6 flex flex-col gap-6">
          {/* Metadata Section */}
          <div className="space-y-4 text-xs font-sans text-[var(--text-secondary)] transition-colors duration-300">
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-[var(--text-muted)] font-sans text-xs tracking-wider uppercase transition-colors duration-300">Year</span>
              <span className="text-[var(--text-primary)] transition-colors duration-300">{displayYear}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-[var(--text-muted)] font-sans text-xs tracking-wider uppercase transition-colors duration-300">Scope</span>
              <span className="text-[var(--text-primary)] leading-relaxed transition-colors duration-300">{displayScope}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-[var(--text-muted)] font-sans text-xs tracking-wider uppercase transition-colors duration-300">Client</span>
              <span className="text-[var(--text-primary)] transition-colors duration-300">{displayClient}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-[var(--text-muted)] font-sans text-xs tracking-wider uppercase transition-colors duration-300">Duration</span>
              <span className="text-[var(--text-primary)] transition-colors duration-300">{displayDuration}</span>
            </div>

            {project.url && project.url.startsWith("http") && (
              <div className="pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] border border-[var(--btn-border)] active:scale-95 font-semibold font-sans text-xs px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  <span>{getButtonLabel(project.url)}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {project.resources && project.resources.length > 0 && (
              <div className="pt-2 flex flex-col gap-3">
                <div className="h-px bg-[var(--border-color)] w-full transition-colors duration-300" />
                <div className="flex flex-col gap-3">
                  {project.resources.map((res, index) => (
                    <div key={index} className="flex flex-col gap-1.5">
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:opacity-80 border-b border-[var(--border-color)] hover:border-[var(--text-primary)] pb-0.5 self-start text-xs font-normal font-sans transition-all duration-300"
                      >
                        <span>{res.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#555] ml-1 shrink-0" />
                      </a>
                      {res.description && (
                        <span className="text-xs text-[var(--text-secondary)] font-sans block leading-relaxed transition-colors duration-300">{res.description}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-[var(--border-color)] w-full -mt-3 -mb-3 transition-colors duration-300" />

          {/* Detailed About Section */}
          <div className="space-y-4">
            {parseMarkdown(displayAbout)}
          </div>


        </div>
      </div>

      {/* Right Column: Project Images Stack */}
      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-right"
      >
        <div className="pt-6 pb-6 pl-3 pr-6 flex flex-col gap-4">
          {displayImages.map((imgSrc, idx) => {
            const caption = getImageCaption(project.id, imgSrc, idx);

            return (
              <div
                key={idx}
                className="relative group w-full rounded-[5px] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] transition-colors duration-300"
              >
                {/* Image */}
                <img
                  src={imgSrc}
                  alt={`${project.title} - ${caption}`}
                  className="w-full h-auto object-cover block"
                  loading="eager"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  {/* Top Black Blur Gradient */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/25 to-transparent" />

                  {/* Content Container */}
                  <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center w-full">
                    {/* Top Left: Clean text caption */}
                    <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                      {caption}
                    </span>

                    {/* Top Right: Clean arrow icon */}
                    <a
                      href={imgSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]"
                      title="Open image in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
