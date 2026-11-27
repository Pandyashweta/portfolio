import calendarQHero from "../../assets/images/projects/calendar-q-hero.png";
import calendarQApp from "../../assets/images/projects/calendar-q-app.png";
import flowstateHero from "../../assets/images/projects/flowstate-hero.png";
import type { ProjectData } from "../../types";

export const codingProjects: ProjectData[] = [
  {
    id: "calendar-q",
    title: "calendar.q",
    category: "Developer • Universal Calendar & Time Platform",
    image: calendarQHero,
    description:
      "A local-first universal calendar, astronomy, and time platform supporting 33 world calendars, local holidays, weather, and world clocks.",
    year: "2026",
    client: "Personal Project",
    duration: "Personal Build",
    role: "Creator & Developer",
    tags: ["Universal Calendar", "Local-First PWA", "33 World Calendars"],
    facts: [
      { label: "Role", value: "Creator & Developer" },
      { label: "Type", value: "Personal Project" },
      { label: "Platform", value: "Web, PWA & Desktop" },
      { label: "Year", value: "2026" },
    ],
    story: {
      challenge:
        "Most calendar apps force either a stripped-down Gregorian grid or cluttered multi-calendar feeds where traditional, regional, and astronomical dates collide and overwhelm daily planning.",
      approach:
        "Built a local-first calendar engine that opens straight to an uncluttered month view with local holidays, while letting users toggle any of 33 world calendars (Gujarati Vikram Samvat, Hindu Panchang, Hijri, Hebrew, Chinese, ISO Week, and more) alongside astronomy almanac data, weather, and world clocks.",
      results:
        "Shipped a fast, privacy-first universal calendar with on-device storage, .ics import/export, keyboard shortcuts, optional Google Calendar sync, and installable desktop/mobile PWA support.",
    },
    url: "https://calander-v1.vercel.app/",
    images: [calendarQHero, calendarQApp],
    resources: [
      {
        label: "GitHub",
        url: "https://github.com/Pandyashweta/calander.q",
      },
    ],
  },
  {
    id: "flowstate",
    title: "FLOWSTATE",
    category: "Developer • Voice-Driven AI Automation",
    image: flowstateHero,
    description:
      "Voice-driven enterprise workflow automation that turns spoken instructions into governed, RAG-grounded workflows with human-in-the-loop approvals.",
    year: "2026",
    client: "Personal Project",
    duration: "Personal Build",
    role: "Creator & Developer",
    tags: ["Voice AI", "Gemini Live", "RAG & RBAC"],
    facts: [
      { label: "Role", value: "Creator & Developer" },
      { label: "Type", value: "Personal Project" },
      { label: "AI Engine", value: "Gemini Live & RAG" },
      { label: "Year", value: "2026" },
    ],
    story: {
      challenge:
        "Operational teams waste time translating spoken decisions and SOPs into multi-step tickets, approvals, and cross-department tasks—while ungrounded AI tools lack workspace isolation and auditability.",
      approach:
        "Designed a monochrome, voice-first command center powered by Gemini Live that parses natural speech into structured workflows grounded in uploaded PDF/DOCX/TXT playbooks, gated by 5-tier RBAC human approval queues.",
      results:
        "Delivered a multi-tenant Personal and Organization workspace platform with department routing, real-time approval queues, REST/messaging integrations, and exportable CSV/JSON/TXT audit logs.",
    },
    url: "https://flowstate-v1.vercel.app/",
    images: [flowstateHero],
    resources: [
      {
        label: "GitHub",
        url: "https://github.com/Pandyashweta/Flowstate",
      },
    ],
  },
];
