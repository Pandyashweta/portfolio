import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { figmaProjects } from "../../../data/projects/figma";
import { codingProjects } from "../../../data/projects/coding";
import uiuxCover from "../../../assets/images/uiux-folder-cover.png";
import codingCover from "../../../assets/images/coding-folder-cover.png";

// Solid 100% opaque folder themes
const defaultThemes = [
  {
    bg: "#f1f5f9", // Project 01: Solid Greyish (Histopedia)
    text: "#0f172a",
    textMuted: "#334155",
    badgeBg: "#0f172a",
    badgeText: "#ffffff",
    borderColor: "#0f172a",
    dotColor: "#0f172a",
  },
  {
    bg: "#310e4d", // Project 02: Solid Dark Purple (Eau de Perfume)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.9)",
    badgeBg: "#ffffff",
    badgeText: "#310e4d",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#18181b", // Project 03: Solid Obsidian (Workflow Automation Engine)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.88)",
    badgeBg: "#ffffff",
    badgeText: "#18181b",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
  {
    bg: "#2d1423", // Project 04: Solid Wine/Plum (Data-Driven Imaging)
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.9)",
    badgeBg: "#ffffff",
    badgeText: "#2d1423",
    borderColor: "#ffffff",
    dotColor: "#ffffff",
  },
];

interface ShowcaseProps {
  category?: "uiux" | "coding" | null;
  onSelectCategory?: (category: "uiux" | "coding") => void;
}

export default function Showcase({
  category = null,
  onSelectCategory,
}: ShowcaseProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // If NO category is selected, render ONLY the two Manila folder category cards!
  // Sized neatly to fit inside 100vh on desktop without scrolling!
  if (!category) {
    return (
      <div className="w-full">
        {/* Two Authentic Manila File Folder Cards Side-by-Side (Expanded to fit screen space) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl xl:max-w-7xl mx-auto w-full items-center">
          {/* Left Category: UI/UX Projects (Manila Folder Shape) */}
          <button
            onClick={() => onSelectCategory && onSelectCategory("uiux")}
            aria-label="Open UI/UX Projects folder"
            className="group flex flex-col text-left cursor-pointer transition-all duration-300 focus:outline-none hover:-translate-y-1.5"
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
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Title & Description Below the Folder */}
            <div className="mt-3 sm:mt-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[var(--text-primary)] group-hover:text-[var(--scar-color)] transition-colors">
                UI/UX Projects
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
                Figma design systems, mobile experiences, and interactive prototypes.
              </p>
            </div>
          </button>

          {/* Right Category: Coding Projects (Manila Folder Shape) */}
          <button
            onClick={() => onSelectCategory && onSelectCategory("coding")}
            aria-label="Open Coding Projects folder"
            className="group flex flex-col text-left cursor-pointer transition-all duration-300 focus:outline-none hover:-translate-y-1.5"
          >
            {/* Manila Folder Graphic Container */}
            <div className="w-full relative">
              {/* Top-Left Manila Folder Tab */}
              <div className="flex">
                <span className="ca-mono inline-flex items-center gap-2.5 py-2 sm:py-2.5 pl-5 sm:pl-6 pr-10 sm:pr-12 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#191510] bg-[#dde1e7] [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)] group-hover:brightness-95 transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#191510] shrink-0" />
                  <span>ENGINEERING</span>
                </span>
              </div>

              {/* Folder Body with Framed Mockup Image (Square Corners, No Shadow) */}
              <div className="w-full p-3 sm:p-4 lg:p-5 bg-[#dde1e7] rounded-none border border-[#191510]/15 transition-all duration-300">
                {/* Framed Image Container */}
                <div className="relative overflow-hidden h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full border-2 border-[#191510] bg-white flex items-center justify-center p-2.5 sm:p-3">
                  <img
                    src={codingCover}
                    alt="Coding Folder Cover"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Title & Description Below the Folder */}
            <div className="mt-3 sm:mt-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[var(--text-primary)] group-hover:text-[var(--scar-color)] transition-colors">
                Coding Projects
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
                Workflow automation engines, image pipelines, and full-stack solutions.
              </p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // If a category IS selected:
  // Render clean, non-scrollable interactive folder tabs (zero awkward sticky scroll track)
  const displayedProjects =
    category === "uiux" ? figmaProjects : codingProjects;
  
  // Safe bounded index
  const safeIndex = activeProjectIndex % displayedProjects.length;
  const currentProj = displayedProjects[safeIndex];
  const theme = currentProj.theme || defaultThemes[safeIndex % defaultThemes.length];
  const tags = currentProj.tags || [currentProj.category.split("•")[1]?.trim() || "Development"];
  const detailUrl = `/projects/${currentProj.id}`;

  return (
    <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col justify-center">
      {/* Folder Tab Switchers: Click to switch between Project 01 and Project 02 seamlessly */}
      <div className="flex items-end gap-1.5 sm:gap-2.5">
        {displayedProjects.map((proj, idx) => {
          const pTheme = proj.theme || defaultThemes[idx % defaultThemes.length];
          const isSelected = idx === safeIndex;
          const isFirst = idx === 0;

          return (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`ca-mono inline-flex items-center gap-2.5 py-2.5 sm:py-3 pr-10 sm:pr-14 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all cursor-pointer ${
                isFirst
                  ? "pl-5 sm:pl-7 [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)]"
                  : "pl-7 sm:pl-9 [clip-path:polygon(28px_0,calc(100%-28px)_0,100%_100%,0_100%)]"
              } ${
                isSelected
                  ? "translate-y-0.5 z-10"
                  : "opacity-60 hover:opacity-90 z-0 brightness-90"
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
                Project 0{idx + 1} : {proj.title}
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
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(15, 23, 42, 0.14)",
        }}
      >
        {/* Left Side: Metadata, Title, Description, Tags, Action */}
        <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            {/* Date + Project Counter */}
            <div className="flex items-center justify-between">
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

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setActiveProjectIndex(
                      (prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length
                    )
                  }
                  aria-label="Previous project"
                  className="p-1.5 rounded-none border border-current/20 hover:bg-black/10 transition-colors cursor-pointer"
                  style={{ color: theme.text }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs sm:text-sm font-mono opacity-65">
                  {safeIndex + 1}/{displayedProjects.length}
                </span>
                <button
                  onClick={() =>
                    setActiveProjectIndex((prev) => (prev + 1) % displayedProjects.length)
                  }
                  aria-label="Next project"
                  className="p-1.5 rounded-none border border-current/20 hover:bg-black/10 transition-colors cursor-pointer"
                  style={{ color: theme.text }}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
                className="ca-mono inline-flex items-center gap-2 border-b-2 pb-0.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all hover:translate-x-1 active:scale-95 cursor-pointer group"
                style={{
                  borderColor: theme.borderColor,
                  color: theme.text,
                }}
              >
                <span>VIEW PROJECT DETAILS</span>
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
              className="relative overflow-hidden border-3 sm:border-4 bg-[var(--ca-surface)] aspect-[16/10] sm:aspect-[16/11] w-full"
              style={{ borderColor: theme.borderColor }}
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
