import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { ProjectData } from "../../../types";
import { allProjects } from "../../../data/projects";
import { getImageCaption } from "../utils/captions";
import ThemeToggle from "../../../components/common/ThemeToggle";

interface StandardViewProps {
  project: ProjectData;
  leftColRef?: any;
  rightColRef?: any;
  handleScroll?: () => void;
}

export default function StandardView({ project }: StandardViewProps) {
  const navigate = useNavigate();

  const tags = project.tags || [
    project.category.split("•")[1]?.trim() || "UI/UX Design",
    "Figma",
  ];

  const facts = project.facts || [
    { label: "Role", value: project.role || "Product Designer", color: "#b7c6ef", rotation: "-rotate-2", tapeSide: "left" as const },
    { label: "Timeline", value: project.duration || "4 Weeks", color: "#f3e2ad", rotation: "rotate-2", tapeSide: "right" as const },
    { label: "Client", value: project.client || "Self Project", color: "#cfbbf5", rotation: "rotate-1", tapeSide: "left" as const },
    { label: "Scope", value: project.year || "2026", color: "#ffc6da", rotation: "-rotate-1", tapeSide: "right" as const },
  ];

  const challengeText = project.story?.challenge || project.aboutText?.split("---")[0]?.replace(/## Project Overview\n*/, "").trim() || project.description;
  const resultsText = project.story?.results || project.aboutText?.split("---")[1]?.replace(/## Outcome\n*/, "").trim() || "Successfully executed with positive user feedback and comprehensive documentation.";
  const approachText = project.story?.approach || "Conducted thorough discovery and wireframing, established cohesive typography, color palette, and component design tokens in Figma, followed by interactive prototyping and multi-round usability tests.";

  // Images for the visual gallery (all screens excluding the main thumbnail if already used as hero)
  const galleryImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  // Other projects for the "more projects" section
  const otherProjects = allProjects.filter((p) => p.id !== project.id);
  const isFigma = project.category?.toLowerCase().includes("figma") || project.category?.toLowerCase().includes("ui/ux");
  const backCategoryUrl = isFigma ? "/projects?category=uiux" : "/projects?category=coding";
  const backCategoryLabel = isFigma ? "UI/UX WORK" : "CODING WORK";

  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] text-left transition-colors duration-300 relative z-10 px-4 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-12 xl:px-16 selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
      {/* Top Navigation Bar perfectly aligned with the max-w-7xl content grid */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-8 sm:pb-10">
        <button
          onClick={() => navigate(backCategoryUrl)}
          aria-label={`Back to ${backCategoryLabel}`}
          className="ca-mono inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--btn-bg)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 transition-all shadow-sm [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] cursor-pointer border border-[var(--border-color)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
          <span>{backCategoryLabel}</span>
        </button>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] hover:opacity-75 transition-opacity"
          >
            Home
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Case Study Header Lockup: Title, Metadata & 4 Torn Post-It Notes aligned horizontally & vertically */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 pt-2">
        {/* Left Column: Title, Description, and Badges */}
        <div className="flex flex-col justify-center">
          <span className="ca-mono inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]">
            <span className="h-3.5 w-3.5 rounded-full bg-[var(--ca-ink)] shrink-0" />
            {project.year || "2026"}
          </span>

          <h1 className="ca-display mt-3 sm:mt-4 uppercase leading-[0.92] tracking-tight text-[var(--ca-ink)] [font-size:clamp(2.75rem,6.5vw,6.5rem)] font-black">
            {project.title}
          </h1>

          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--ca-ink)]/80 font-sans">
            {project.description}
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="ca-mono bg-[var(--ca-chrome)] px-4 pb-2 pt-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-[var(--ca-ink)] [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] sm:px-5 sm:pb-2.5 sm:pt-3 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: 4 Torn Post-It Notes Facts Cards (Centered & flush with right grid line) */}
        <div className="grid max-w-lg grid-cols-2 gap-4 sm:gap-5 lg:w-[30rem] shrink-0">
          {facts.map((fact, idx) => {
            const isRightTape = fact.tapeSide === "right";
            return (
              <div key={idx} className={`relative ${fact.rotation}`}>
                {/* Washi Tape Holding the Card */}
                <span
                  aria-hidden="true"
                  className={`ca-tape-strip absolute -top-2.5 z-10 h-5 w-14 bg-white/70 shadow-[0_1px_3px_rgba(17,18,18,0.2)] pointer-events-none ${
                    isRightTape ? "-right-3 rotate-[36deg]" : "-left-3 -rotate-[36deg]"
                  }`}
                />

                {/* Torn Paper Sticky Note */}
                <div
                  className="px-5 py-4 sm:px-6 sm:py-5 [filter:drop-shadow(2px_4px_5px_rgba(17,18,18,0.16))] transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: fact.color,
                    clipPath:
                      "polygon(2% 6%, 12% 0%, 25% 4%, 40% 1%, 55% 5%, 70% 0%, 85% 4%, 98% 1%, 96% 15%, 100% 30%, 97% 45%, 100% 60%, 96% 75%, 99% 90%, 97% 98%, 85% 96%, 70% 100%, 55% 96%, 40% 100%, 25% 95%, 12% 100%, 3% 97%, 1% 85%, 4% 70%, 0% 55%, 3% 40%, 0% 25%, 2% 12%)",
                  }}
                >
                  <p className="ca-mono text-xs font-bold uppercase tracking-widest text-[#191510]">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-[#191510]/90">
                    {fact.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Featured Hero Image Showcase (Cleanly aligned with max-w-7xl grid, no shadow) */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14">
        <div
          className="relative overflow-hidden border-4 bg-[var(--ca-surface)] h-[45vh] sm:h-[65vh] lg:h-[75vh] w-full"
          style={{ borderColor: "var(--ca-ink)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Narrative Breakdown: 3 Pillars Aligned Across max-w-7xl */}
      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 border-t-2 border-[var(--ca-ink)]/15 pt-12 sm:pt-16">
        {/* Pillar 1: The Challenge */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/60">01</span>
            <p className="ca-hand text-3xl sm:text-4xl text-[var(--ca-ink)]">
              the challenge
            </p>
          </div>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="mt-1 h-3 w-24 text-[var(--ca-ink)] opacity-80" aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="mt-5 text-base leading-relaxed text-[var(--ca-ink)]/85 font-sans">
            {challengeText}
          </p>
        </div>

        {/* Pillar 2: My Approach & Resources */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/60">02</span>
            <p className="ca-hand text-3xl sm:text-4xl text-[var(--ca-ink)]">
              my approach
            </p>
          </div>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="mt-1 h-3 w-24 text-[var(--ca-ink)] opacity-80" aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="mt-5 text-base leading-relaxed text-[var(--ca-ink)]/85 font-sans">
            {approachText}
          </p>

          {/* Action Links & Resources (Figma, UX Reports, Personas) */}
          {(project.url || (project.resources && project.resources.length > 0)) && (
            <div className="mt-6 flex flex-wrap gap-3 pt-1">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ca-mono inline-flex items-center gap-2 bg-[var(--ca-ink)] text-[var(--ca-surface)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] shadow-md"
                >
                  <span>{project.url.includes("figma") ? "Figma File" : "Live Site"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.resources?.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ca-mono inline-flex items-center gap-2 bg-[var(--ca-chrome)] text-[var(--ca-ink)] border border-[var(--ca-ink)]/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[var(--ca-ink)] hover:text-[var(--ca-surface)] active:scale-95 transition-all [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] shadow-sm"
                >
                  <span>{res.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Pillar 3: The Results */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/60">03</span>
            <p className="ca-hand text-3xl sm:text-4xl text-[var(--ca-ink)]">
              the results
            </p>
          </div>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="mt-1 h-3 w-24 text-[var(--ca-ink)] opacity-80" aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="mt-5 text-base leading-relaxed text-[var(--ca-ink)]/85 font-sans">
            {resultsText}
          </p>
        </div>
      </div>

      {/* Visual Screens & High-Fidelity Mockups Gallery (Aligned with max-w-7xl) */}
      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 border-t-2 border-[var(--ca-ink)]/15 pt-12 sm:pt-16">
        <div className="mb-10 text-left">
          <p className="ca-hand text-3xl sm:text-4xl text-[var(--ca-ink)]">
            visual screens & key flows
          </p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="mt-1 h-3.5 w-28 text-[var(--ca-ink)] inline-block"
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full">
          {galleryImages.map((imgSrc, imgIdx) => {
            const caption = getImageCaption(project.id, imgSrc, imgIdx);
            return (
              <div key={imgIdx} className="relative group flex flex-col">
                <div
                  className="relative overflow-hidden border-4 bg-[var(--ca-surface)] aspect-[16/10] w-full"
                  style={{ borderColor: "var(--ca-ink)" }}
                >
                  <img
                    src={imgSrc}
                    alt={caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between px-1">
                  <p className="ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                    {caption}
                  </p>
                  <span className="ca-mono text-[11px] font-semibold text-[var(--ca-ink)]/60 uppercase">
                    0{imgIdx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* More Projects Section (Compact Folders - Shows only 2 projects + explore more arrow) */}
      {otherProjects.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24 border-t-2 border-[var(--ca-ink)]/15 pt-12 sm:pt-16">
          {/* Section Header with Direct Arrow to Main Projects Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="ca-hand text-3xl sm:text-4xl text-[var(--ca-ink)]">
                more projects
              </p>
              <svg
                viewBox="0 0 64 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="mt-1 h-3.5 w-28 text-[var(--ca-ink)] inline-block"
                aria-hidden="true"
              >
                <path d="M3 4c18-3 40-3 58 0" />
                <path d="M9 9c14-2.5 32-2.5 46 0" />
              </svg>
            </div>

            <Link
              to="/projects"
              aria-label="Explore all projects in the main project section"
              className="ca-mono inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:text-[var(--scar-color)] transition-colors group cursor-pointer"
            >
              <span className="border-b-2 border-current pb-0.5">ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Compact 2-Project Folder Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
            {otherProjects.slice(0, 2).map((other, oIdx) => {
              const otherTheme = other.theme || {
                bg: "#18181b",
                text: "#ffffff",
                dotColor: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.2)",
              };

              return (
                <Link
                  key={other.id}
                  to={`/projects/${other.id}`}
                  className="group flex flex-col text-left cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Compact Folder Tab with Project Brand Theme Color */}
                  <div className="flex">
                    <span
                      className="ca-mono inline-flex items-center gap-2.5 py-2 pl-4 sm:pl-5 pr-10 sm:pr-12 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] transition-all [clip-path:polygon(0_0,calc(100%-32px)_0,100%_100%,0_100%)] shadow-sm group-hover:brightness-95"
                      style={{
                        backgroundColor: otherTheme.bg,
                        color: otherTheme.text,
                      }}
                    >
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{
                          backgroundColor: otherTheme.dotColor || otherTheme.text,
                        }}
                      />
                      <span>PROJECT 0{oIdx + 1}</span>
                    </span>
                  </div>

                  {/* Compact Folder Card Container with Project Brand Theme Color (Square Corners, No Shadow) */}
                  <div
                    className="p-3 sm:p-3.5 rounded-none transition-all duration-300 group-hover:brightness-105 border"
                    style={{
                      backgroundColor: otherTheme.bg,
                      color: otherTheme.text,
                      borderColor:
                        otherTheme.text === "#ffffff"
                          ? "rgba(255, 255, 255, 0.16)"
                          : "rgba(15, 23, 42, 0.14)",
                    }}
                  >
                    <div className="relative overflow-hidden aspect-[16/10] w-full border border-black/20 bg-black/10 rounded-none">
                      <img
                        src={other.image}
                        alt={other.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Hover "SEE" badge */}
                      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/95 text-[#191510] font-bold ca-mono text-[11px] uppercase tracking-widest shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        SEE
                      </span>
                    </div>
                  </div>

                  {/* Compact Title and Description */}
                  <div className="pt-3 text-left">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--ca-ink)] font-sans group-hover:text-[var(--scar-color)] transition-colors">
                      {other.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--ca-ink)]/75 line-clamp-2">
                      {other.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Explore More Arrow Button linking directly to main project section */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              to="/projects"
              aria-label="Go to main projects section"
              className="ca-mono inline-flex items-center gap-3 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-primary)] bg-[var(--btn-bg)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] border border-[var(--border-color)] shadow-sm [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>EXPLORE ALL WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
