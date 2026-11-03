import industrialObjImg from "../../assets/images/futuristic_industrial_object_1782239432045.webp";
import redCurvesImg from "../../assets/images/sculptural_red_curves_1782239373838.webp";
import type { ProjectData } from "../../types";

export const codingProjects: ProjectData[] = [
  {
    id: "automation-engine",
    title: "Workflow Automation Engine",
    category: "Coding • Node.js & Workflow Orchestration",
    image: industrialObjImg,
    aspectClass: "aspect-[16/10]",
    description: "A custom automation pipeline built to orchestrate, monitor, and streamline API operations and data movement.",
    year: "2026",
    scope: "Node.js | API Integration | Workflow Orchestration | Database Systems",
    client: "Internal System",
    duration: "4 Weeks",
    role: "Backend & Systems Engineer",
    tags: ["Node.js", "REST APIs", "Automation", "Workflow"],
    theme: {
      bg: "#18181b", // Solid Obsidian (100% Opaque, Not Transparent)
      text: "#ffffff",
      textMuted: "rgba(255, 255, 255, 0.88)",
      badgeBg: "#ffffff",
      badgeText: "#18181b",
      borderColor: "#ffffff",
      dotColor: "#ffffff",
    },
    facts: [
      { label: "Role", value: "Backend & Systems", color: "#b7c6ef", rotation: "-rotate-2", tapeSide: "left" },
      { label: "Timeline", value: "4 Weeks", color: "#f3e2ad", rotation: "rotate-2", tapeSide: "right" },
      { label: "Stack", value: "Node.js, Express, DB", color: "#cfbbf5", rotation: "rotate-1", tapeSide: "left" },
      { label: "Impact", value: "90% Manual Time Saved", color: "#ffc6da", rotation: "-rotate-1", tapeSide: "right" },
    ],
    story: {
      challenge: "Managing multi-service API interactions without centralized orchestration frequently caused data drift, silent failures, and redundant manual triggers across cloud and internal endpoints.",
      approach: "Architected an event-driven automation engine in Node.js with retry queues, telemetry tracking, webhooks, and automatic schema validation for all ingress/egress payloads.",
      results: "Achieved seamless synchronization across multiple database endpoints, eliminated manual overhead by 90%, and maintained 99.9% task reliability under peak load.",
    },
    url: "https://github.com/Pandyashweta",
    aboutText: `## Project Overview

The Workflow Automation Engine is designed to solve complex data flows across multiple cloud and REST API interfaces. By utilizing a modular, event-driven Node.js architecture, it schedules, runs, and monitors tasks with complete observability, preventing system drift and automating routine data operations.

---

## Outcome

Achieved seamless synchronization across multiple database endpoints, eliminated manual overhead by 90%, and maintained 99.9% task reliability under peak load.`,
    images: [industrialObjImg],
  },
  {
    id: "data-imaging",
    title: "Data-Driven Imaging Solutions",
    category: "Coding • Java & ImageJ Development",
    image: redCurvesImg,
    aspectClass: "aspect-[16/10]",
    description: "ImageJ plugins and scripts built to process high-throughput cellular data and microscopy imagery.",
    year: "2025",
    scope: "Java | ImageJ API | Image Analysis | Automated Scripts",
    client: "Research Project",
    duration: "8 Weeks",
    role: "Software Developer & Researcher",
    tags: ["Java", "ImageJ API", "Image Analysis", "Data Scripts"],
    theme: {
      bg: "#2d1423", // Solid Deep Plum/Wine (100% Opaque, Not Transparent)
      text: "#ffffff",
      textMuted: "rgba(255, 255, 255, 0.9)",
      badgeBg: "#ffffff",
      badgeText: "#2d1423",
      borderColor: "#ffffff",
      dotColor: "#ffffff",
    },
    facts: [
      { label: "Role", value: "Developer & Researcher", color: "#b7c6ef", rotation: "-rotate-2", tapeSide: "left" },
      { label: "Timeline", value: "8 Weeks", color: "#f3e2ad", rotation: "rotate-2", tapeSide: "right" },
      { label: "Stack", value: "Java, ImageJ API", color: "#cfbbf5", rotation: "rotate-1", tapeSide: "left" },
      { label: "Impact", value: "80% Faster Processing", color: "#ffc6da", rotation: "-rotate-1", tapeSide: "right" },
    ],
    story: {
      challenge: "Biological research teams were spending dozens of hours manually tracing, counting, and thresholding high-resolution cellular microscopy images, creating analytical bottlenecks and human measurement inconsistencies.",
      approach: "Developed custom modular Java plugins integrated directly into ImageJ. Built adaptive noise-reduction filters, automated contour-segmentation algorithms, and single-click CSV data export pipelines.",
      results: "Reduced image processing time from hours to seconds per batch, boosted measurement accuracy, and enabled high-throughput research analysis across multi-channel microscopy datasets.",
    },
    url: "https://github.com/Pandyashweta",
    aboutText: `## Project Overview

This project involved creating modular Java plugins and automation scripts for ImageJ to streamline microscopy analysis. The plugins handle automated thresholding, cell counting, and metric exportation, reducing manual analysis time for research teams by over 80%.

---

## Outcome

Reduced image processing time from hours to seconds per batch, boosted measurement accuracy, and enabled high-throughput research analysis across multi-channel microscopy datasets.`,
    images: [redCurvesImg],
  },
];
