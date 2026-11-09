import analyticsCover from "../../assets/images/analytics-folder-cover.png";
import automationCover from "../../assets/images/automation-folder-cover.png";
import fullstackCover from "../../assets/images/fullstack-folder-cover.png";
import type { ProjectData } from "../../types";

export interface DeveloperSubfolder {
  id: "data-analytics" | "automation-tools" | "fullstack-ai";
  label: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
  projectId?: string;
}

export const developerSubfolders: DeveloperSubfolder[] = [
  {
    id: "data-analytics",
    label: "Data & Analytics",
    tabLabel: "DATA & ANALYTICS",
    title: "Data & Analytics",
    description: "Updating soon",
    image: analyticsCover,
  },
  {
    id: "automation-tools",
    label: "Automation & Tools",
    tabLabel: "AUTOMATION & TOOLS",
    title: "Automation & Tools",
    description: "Updating soon",
    image: automationCover,
  },
  {
    id: "fullstack-ai",
    label: "Full Stack & AI",
    tabLabel: "FULL STACK & AI",
    title: "Full Stack & AI",
    description: "Updating soon",
    image: fullstackCover,
  },
];

export const codingProjects: ProjectData[] = [];
