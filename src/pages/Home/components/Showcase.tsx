import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { codingProjects, developerSubfolders } from "../../../data/projects/coding";
import { figmaProjects } from "../../../data/projects/figma";
import uiuxCover from "../../../assets/images/uiux-folder-cover.png";
import codingCover from "../../../assets/images/coding-folder-cover.png";

// Solid 100% opaque folder themes
const defaultThemes = [
  {
    bg: "#18181b", // Solid Obsidian Dark
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.88)",
    badgeBg: "#ffffff",
    badgeText: "#18181b",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#310e4d", // Solid Dark Purple (Eau de Perfume)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.9)",
    badgeBg: "#ffffff",
    badgeText: "#310e4d",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#2d1423", // Solid Wine/Plum (Data-Driven Imaging)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.9)",
    badgeBg: "#ffffff",
    badgeText: "#2d1423",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#18181b", // Solid Obsidian (Workflow Automation Engine)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.88)",
    badgeBg: "#ffffff",
    badgeText: "#18181b",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#0d1b2a", // Solid Deep Sapphire/Navy (Beyond Labs Full Stack & AI)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.88)",
    badgeBg: "#ffffff",
    badgeText: "#0d1b2a",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
];

interface ShowcaseProps {
  category?: "uiux" | "coding" | null;
  subCategory?: string | null;
  onSelectCategory?: (category: "uiux" | "coding") => void;
  onSelectSubCategory?: (sub: string | null) => void;
}

export default function Showcase({
  category = null,
  subCategory = null,
  onSelectCategory,
  onSelectSubCategory,
}: ShowcaseProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Sync tab index when category or subcategory changes
  useEffect(() => {
    setActiveProjectIndex(0);
  }, [category, subCategory]);

  // If NO category is selected, render ONLY the two top-level Manila folder category cards!
  if (!category) {
    return (
      <div className="w-full">
        {/* Two Authentic Manila File Folder Cards Side-by-Side (Expanded to fit screen space) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl xl:max-w-7xl mx-auto w-full items-center">
          {/* Left Category: UI/UX Projects (Manila Folder Shape) */}
          <button
            onClick={() => onSelectCategory && onSelectCategory("uiux")}
            className="group flex flex-col text-left cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-primary)] hover:-translate-y-1.5"
          >
            {/* Manila Folder Graphic Container */}
            <div className="w-full relative">
              {/* Top-Left Manila Folder Tab */}
              <div className="flex">
                <span className="ca-mono inline-flex items-center gap-2.5 py-2 sm:py-2.5 pl-5 sm:pl-6 pr-10 sm:pr-12 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#191510] bg-[#dde1e7] [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)] group-hover:brightness-95 transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#191510] shrink-0" />
                  <span>UI/UX DESIGN</span>
                </span>
              </div>

              {/* Folder Body with Framed Mockup Image (Square Corners, No Shadow) */}
              <div className="w-full p-3 sm:p-4 lg:p-5 bg-[#dde1e7] rounded-none border border-[#191510]/15 transition-all duration-300">
                {/* Framed Image Container */}
                <div className="relative overflow-hidden h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full border-2 border-[#191510] bg-white flex items-center justify-center p-2.5 sm:p-3">
                  <img
                    src={uiuxCover}
                    alt="UI/UX Folder Cover"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Title & Description Below the Folder */}
            <div className="mt-3 sm:mt-4 text-left flex flex-col items-start w-full">
              <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[var(--scar-color)] transition-colors">
                UI/UX DESIGN
              </h2>
              <p className="mt-1.5 text-xs sm:text-[13px] lg:text-sm text-[var(--text-secondary)] leading-relaxed">
                Figma design systems, mobile experiences, and interactive prototypes.
              </p>
            </div>
          </button>

          {/* Right Category: Developer (Manila Folder Shape) */}
          <button
            onClick={() => onSelectCategory && onSelectCategory("coding")}
            className="group flex flex-col text-left cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-primary)] hover:-translate-y-1.5"
          >
            {/* Manila Folder Graphic Container */}
            <div className="w-full relative">
              {/* Top-Left Manila Folder Tab */}
              <div className="flex">
                <span className="ca-mono inline-flex items-center gap-2.5 py-2 sm:py-2.5 pl-5 sm:pl-6 pr-10 sm:pr-12 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#191510] bg-[#dde1e7] [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)] group-hover:brightness-95 transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#191510] shrink-0" />
                  <span>DEVELOPER</span>
                </span>
              </div>

              {/* Folder Body with Framed Mockup Image (Square Corners, No Shadow) */}
              <div className="w-full p-3 sm:p-4 lg:p-5 bg-[#dde1e7] rounded-none border border-[#191510]/15 transition-all duration-300">
                {/* Framed Image Container */}
                <div className="relative overflow-hidden h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full border-2 border-[#191510] bg-white flex items-center justify-center p-2.5 sm:p-3">
                  <img
                    src={codingCover}
                    alt="Developer Folder Cover"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Title & Description Below the Folder */}
            <div className="mt-3 sm:mt-4 text-left flex flex-col items-start w-full">
              <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[var(--scar-color)] transition-colors">
                DEVELOPER
              </h2>
              <p className="mt-1.5 text-xs sm:text-[13px] lg:text-sm text-[var(--text-secondary)] leading-relaxed">
                Workflow automation engines, image pipelines, and full-stack solutions.
              </p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // If in DEVELOPER category and no specific subfolder is active, render the THREE Developer sub-folders!
  if (category === "coding" && !subCategory) {
    return (
      <div className="w-full">
        {/* Three Authentic Manila File Folder Cards Side-by-Side: Data & Analytics | Automation & Tools | Full Stack & AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-6xl xl:max-w-7xl mx-auto w-full items-stretch">
          {developerSubfolders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => onSelectSubCategory && onSelectSubCategory(folder.id)}
              className="group flex flex-col text-left cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-primary)] hover:-translate-y-1.5"
            >
              {/* Manila Folder Graphic Container */}
              <div className="w-full relative">
                {/* Top-Left Manila Folder Tab */}
                <div className="flex">
                  <span className="ca-mono inline-flex items-center gap-2 py-2 sm:py-2.5 pl-4 sm:pl-5 pr-8 sm:pr-10 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#191510] bg-[#dde1e7] [clip-path:polygon(0_0,calc(100%-24px)_0,100%_100%,0_100%)] group-hover:brightness-95 transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#191510] shrink-0" />
                    <span className="truncate">{folder.tabLabel}</span>
                  </span>
                </div>

                {/* Folder Body with Framed Mockup Image (Square Corners, No Shadow) */}
                <div className="w-full p-3 sm:p-4 bg-[#dde1e7] rounded-none border border-[#191510]/15 transition-all duration-300">
                  {/* Framed Image Container */}
                  <div className="relative overflow-hidden h-40 sm:h-48 md:h-52 lg:h-56 xl:h-64 w-full border-2 border-[#191510] bg-white flex items-center justify-center p-2.5 sm:p-3">
                    <img
                      src={folder.image}
                      alt={`${folder.title} Folder Cover`}
                      loading="lazy"
                      className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Title & Description Below the Folder */}
              <div className="mt-3 sm:mt-4 text-left flex flex-col items-start w-full">
                <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[var(--scar-color)] transition-colors">
                  {folder.title}
                </h2>
                <p className="mt-1.5 text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {folder.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // If a category/subfolder IS selected, render interactive project tabs
  let displayedProjects = codingProjects;
  if (category === "uiux") {
    displayedProjects = figmaProjects;
  } else if (category === "coding") {
    if (subCategory) {
      const filtered = codingProjects.filter((p) => p.subfolder === subCategory);
      displayedProjects = filtered.length > 0 ? filtered : codingProjects;
    } else {
      displayedProjects = codingProjects;
    }
  }

  // If no projects in this folder (e.g. Developer subfolders updating soon)
  if (displayedProjects.length === 0) {
    const activeSub = developerSubfolders.find((f) => f.id === subCategory);
    const folderTitle = activeSub ? activeSub.title : "Developer Projects";

    return (
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col justify-center">
        {/* Tab - Matches UI/UX folder tab styling */}
        <div className="flex items-end">
          <span className="ca-mono inline-flex items-center gap-2.5 py-2.5 sm:py-3 pl-5 sm:pl-7 pr-8 sm:pr-12 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] bg-[#18181b] text-white [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 shrink-0 text-[var(--scar-color)]"
              aria-hidden="true"
            >
              <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
            </svg>
            <span>{folderTitle}</span>
          </span>
        </div>

        {/* Main Folder Content Body - Same height & proportions as UI/UX folder (~520px), centered, no image */}
        <div
          className="relative flex flex-col items-center justify-center text-center p-8 sm:p-14 lg:p-20 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] rounded-none border overflow-hidden space-y-6"
          style={{
            backgroundColor: "#18181b",
            color: "#ffffff",
            borderColor: "rgba(255, 255, 255, 0.16)",
          }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase text-white">
            Updating soon
          </h2>

          <div className="pt-2">
            <button
              onClick={() => onSelectSubCategory && onSelectSubCategory(null)}
              className="ca-mono inline-flex items-center gap-2 border-b-2 border-white pb-0.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all hover:text-[var(--scar-color)] hover:border-[var(--scar-color)] cursor-pointer text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <span>← BACK TO DEVELOPER FOLDERS</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Safe bounded index
  const safeIndex = activeProjectIndex % displayedProjects.length;
  const currentProj = displayedProjects[safeIndex];
  const theme = currentProj.theme || defaultThemes[safeIndex % defaultThemes.length];
  const tags = currentProj.tags || [currentProj.category.split("•")[1]?.trim() || "Development"];
  const detailUrl = `/projects/${currentProj.id}`;

  return (
    <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col justify-center">
      {/* Folder Tab Switchers: Click to switch between projects seamlessly */}
      <div className="flex items-end gap-1.5 sm:gap-2.5">
        {displayedProjects.map((proj, idx) => {
          const pTheme = proj.theme || defaultThemes[idx % defaultThemes.length];
          const isSelected = idx === safeIndex;
          const isFirst = idx === 0;

          return (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`ca-mono inline-flex items-center gap-2.5 py-2.5 sm:py-3 pr-8 sm:pr-12 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
                isFirst
                  ? "pl-5 sm:pl-7 [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)]"
                  : "pl-7 sm:pl-9 [clip-path:polygon(28px_0,calc(100%-28px)_0,100%_100%,0_100%)]"
              } ${
                isSelected
                  ? "translate-y-px z-10 brightness-100"
                  : "brightness-75 hover:brightness-95 z-0"
              }`}
              style={{
                backgroundColor: pTheme.bg,
                color: pTheme.text,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                  isSelected ? "rotate-90 text-[var(--scar-color)]" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
              </svg>
              <span className="whitespace-nowrap">
                {displayedProjects.length > 1
                  ? `Project 0${idx + 1} : ${proj.title}`
                  : proj.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Folder Content Body - Expanded to fit empty space, square corners, no shadow */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 sm:gap-8 lg:gap-10 xl:gap-12 p-6 sm:p-8 lg:p-9 xl:p-10 rounded-none border overflow-hidden transition-all duration-500 items-center"
        style={{
          backgroundColor: theme.bg,
          color: theme.text,
          borderColor:
            theme.text === "#ffffff"
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(15, 23, 42, 0.14)",
        }}
      >
        {/* Left Side: Metadata, Title, Description, Tags, Action */}
        <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            {/* Date */}
            <div className="flex items-center">
              <span
                className="ca-mono inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: theme.text }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: theme.dotColor }}
                />
                {currentProj.year || "2026"}
              </span>
            </div>

            {/* Massive Bold Project Title (Static heading - not connected to project detail) */}
            <h2
              className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase leading-[0.94]"
              style={{ color: theme.text }}
            >
              {currentProj.title}
            </h2>

            {/* Description */}
            <p
              className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4 max-w-xl"
              style={{ color: theme.textMuted || theme.text }}
            >
              {currentProj.description}
            </p>

            {/* Action Link: VIEW PROJECT DETAILS (Sole link connected to project detail) */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-6 sm:gap-7">
              <Link
                to={detailUrl}
                className="ca-mono inline-flex items-center gap-2 border-b-2 pb-0.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all hover:translate-x-1 active:scale-95 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2"
                style={{
                  borderColor: theme.borderColor,
                  color: theme.text,
                }}
              >
                <span>VIEW PROJECT DETAILS</span>
                <span className="sr-only"> for {currentProj.title}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="ca-mono px-3.5 py-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wide [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)]"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Mockup Image Frame (Static showcase - not connected to project detail) */}
        <div className="flex items-center justify-center self-center w-full">
          <div className="relative w-full max-w-2xl xl:max-w-3xl">
            {/* Framed Image Container */}
            <div
              className="relative overflow-hidden border bg-[var(--ca-surface)] aspect-[16/10] sm:aspect-[16/11] w-full"
              style={{
                borderColor:
                  theme.text === "#ffffff"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(15, 23, 42, 0.2)",
              }}
            >
              <img
                src={currentProj.image}
                alt={currentProj.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
