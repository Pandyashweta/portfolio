import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { ProjectData } from "../../../types";
import { allProjects } from "../../../data/projects";
import { getImageCaption } from "../utils/captions";
import HanssenShell from "../../../components/layout/HanssenShell";
import SocialBento from "../../../components/common/SocialBento";

interface StandardViewProps {
  project: ProjectData;
}

export default function StandardView({ project }: StandardViewProps) {
  useEffect(() => {
    document.title = project.title;
  }, [project.title]);

  const tags = project.tags || [
    project.category.split("•")[1]?.trim() || "UI/UX Design",
    "Figma",
  ];

  const facts = project.facts || [
    { label: "Role", value: project.role || "Product Designer" },
    { label: "Timeline", value: project.duration || "4 Weeks" },
    { label: "Client", value: project.client || "Self Project" },
    { label: "Year", value: project.year || "2026" },
  ];

  const challengeText = project.story.challenge;
  const resultsText = project.story.results;
  const approachText = project.story.approach;

  const galleryImages =
    project.images.length > 0 ? project.images : [project.image];

  const isFigma =
    project.category.toLowerCase().includes("figma") ||
    project.category.toLowerCase().includes("ui/ux");
  const backCategoryUrl = isFigma
    ? "/projects?category=uiux"
    : "/projects?category=developer";

  const otherProjects = allProjects.filter((p) => p.id !== project.id);
  const nextProject = otherProjects[0];

  // Lightbox Modal State
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedImageIndex((prev) =>
        prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
      );
    },
    [galleryImages.length]
  );

  const handleNextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedImageIndex((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null
      );
    },
    [galleryImages.length]
  );

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, handleCloseModal, handlePrevImage, handleNextImage]);

  const leftPanel = (
    <div className="relative w-full h-full group flex items-center justify-center bg-[var(--bg-card)]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-center"
      />
      <button
        type="button"
        onClick={() => setSelectedImageIndex(0)}
        className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/15 px-3.5 py-2 text-[14px] font-medium text-white transition-colors cursor-pointer"
      >
        <Maximize2 className="w-3.5 h-3.5" />
        <span>Expand</span>
      </button>
    </div>
  );

  const screenImages = galleryImages.slice(1);

  const leftGallery = screenImages.length > 0 && (
    <div className="flex flex-col gap-3">
      {screenImages.map((imgSrc, idx) => {
        const realIdx = idx + 1;
        const caption = getImageCaption(project.id, imgSrc, realIdx);
        return (
          <button
            key={realIdx}
            type="button"
            onClick={() => setSelectedImageIndex(realIdx)}
            className="group relative w-full aspect-[16/10] block cursor-pointer text-left"
          >
            <span className="hanssen-cutout-tl absolute top-0 left-0 z-20 inline-flex items-center gap-1.5 pl-2 pr-4 pt-1 pb-2 text-[14px] font-normal text-[var(--text-primary)]">
              <span>{caption}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </span>

            <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--bg-card)]">
              <img
                src={imgSrc}
                alt={caption}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:blur-[1.5px]"
              />
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <HanssenShell
        leftPanel={leftPanel}
        bottomRightLabel={project.title}
        stickyLeft={false}
        fullHeightLeft={false}
        splitScroll={true}
        leftExtra={leftGallery}
      >
        {/* Title, Description, Tags & Resource Links Card */}
        <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <Link
              to={backCategoryUrl}
              className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Work</span>
            </Link>
            <span className="text-[13px] text-[var(--text-muted)]">
              {project.category}
            </span>
          </div>

          <div>
            <h1 className="text-[26px] sm:text-[32px] font-medium tracking-tight leading-[1.15] text-[var(--text-primary)]">
              {project.title}
            </h1>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[13px] text-[var(--text-secondary)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {(project.url || (project.resources && project.resources.length > 0)) && (
            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2.5 text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  <span>
                    {project.url.includes("figma")
                      ? "Figma File"
                      : project.url.includes("github")
                      ? "GitHub Repo"
                      : "Live Site"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.resources?.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] px-4 py-2.5 text-[14px] font-normal text-[var(--text-primary)] transition-colors"
                >
                  <span>{res.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 4 Stacked Metadata Rows (Hanssen /work/beige style) */}
        <div className="flex flex-col gap-3">
          {facts.slice(0, 4).map((fact, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[var(--bg-card)] px-5 py-3.5 flex items-center justify-between gap-4 text-[15px]"
            >
              <span className="text-[var(--text-secondary)]">{fact.label}</span>
              <span className="font-medium text-[var(--text-primary)] text-right">
                {fact.value}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Bento Cards */}
        <div className="flex flex-col gap-3">
          <section className="rounded-2xl bg-[var(--bg-card)] p-6 space-y-2">
            <h2 className="text-[18px] font-medium text-[var(--text-primary)]">
              The Challenge
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              {challengeText}
            </p>
          </section>

          <section className="rounded-2xl bg-[var(--bg-card)] p-6 space-y-2">
            <h2 className="text-[18px] font-medium text-[var(--text-primary)]">
              My Approach
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              {approachText}
            </p>
          </section>

          <section className="rounded-2xl bg-[var(--bg-card)] p-6 space-y-2">
            <h2 className="text-[18px] font-medium text-[var(--text-primary)]">
              The Results
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              {resultsText}
            </p>
          </section>
        </div>

        {/* Next Project Card */}
        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className="group rounded-2xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-transparent hover:border-[var(--border-color)] p-5 flex items-center justify-between gap-4 transition-all duration-200"
          >
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={nextProject.image}
                alt={nextProject.title}
                loading="lazy"
                className="w-16 h-12 rounded-lg object-cover object-top border border-[var(--border-color)] shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[13px] text-[var(--text-muted)]">Next Project</span>
                <p className="text-[16px] sm:text-[18px] font-medium text-[var(--text-primary)] truncate">
                  {nextProject.title}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] shrink-0">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        )}

        {/* Bottom Socials & Contact */}
        <SocialBento layout="grid" />
      </HanssenShell>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screen image viewer"
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8"
        >
          <div
            className="w-full max-w-7xl mx-auto flex items-center justify-between text-white shrink-0 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm text-white/60">
                0{selectedImageIndex + 1} / 0{galleryImages.length}
              </span>
              <span className="text-white/40">•</span>
              <p className="text-sm font-medium text-white">
                {getImageCaption(
                  project.id,
                  galleryImages[selectedImageIndex],
                  selectedImageIndex
                )}
              </p>
            </div>

            <button
              onClick={handleCloseModal}
              aria-label="Close viewer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div
            className="w-full flex-1 flex items-center justify-center relative min-h-0 py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                aria-label="Previous screen"
                className="absolute left-2 sm:left-4 z-10 p-2.5 sm:p-3 bg-black/75 hover:bg-black text-white border border-white/20 rounded-xl transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <div className="relative max-w-full max-h-full flex items-center justify-center rounded-xl overflow-hidden border border-white/15 bg-black p-1">
              <img
                src={galleryImages[selectedImageIndex]}
                alt={getImageCaption(
                  project.id,
                  galleryImages[selectedImageIndex],
                  selectedImageIndex
                )}
                className="max-w-[92vw] max-h-[78vh] object-contain select-none"
              />
            </div>

            {galleryImages.length > 1 && (
              <button
                onClick={handleNextImage}
                aria-label="Next screen"
                className="absolute right-2 sm:right-4 z-10 p-2.5 sm:p-3 bg-black/75 hover:bg-black text-white border border-white/20 rounded-xl transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          <div
            className="w-full max-w-7xl mx-auto flex items-center justify-center text-white/50 text-xs shrink-0 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              Click outside or press ESC to close
              {galleryImages.length > 1 ? " • Use arrow keys to navigate" : ""}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
