import calendarQHero from "../../assets/images/projects/calendar-q-hero.png";
import calendarQApp from "../../assets/images/projects/calendar-q-app.png";
import calendarQWeek from "../../assets/images/projects/calendar-q-week.png";
import calendarQAstronomy from "../../assets/images/projects/calendar-q-astronomy.png";
import calendarQConverter from "../../assets/images/projects/calendar-q-converter.png";
import calendarQWidget from "../../assets/images/projects/calendar-q-widget.png";
import flowstateHero from "../../assets/images/projects/flowstate-hero.png";
import flowstateWorkflows from "../../assets/images/projects/flowstate-workflows.png";
import flowstateWaitlist from "../../assets/images/projects/flowstate-waitlist.png";
import flowstateSignin from "../../assets/images/projects/flowstate-signin.png";
import type { ProjectData } from "../../types";

export const codingProjects: ProjectData[] = [
  {
    id: "calendar-q",
    title: "calendar.q",
    category: "Developer • Universal Calendar & Time Platform",
    image: calendarQHero,
    description:
      "A local-first universal calendar, astronomy, and time platform supporting 33 world calendars, dual-timezone views, universal date conversion, focus tracking, and offline widgets.",
    year: "2026",
    client: "Personal Project",
    duration: "Personal Build",
    role: "Creator & Developer",
    tags: ["Universal Calendar", "Local-First PWA", "33 World Calendars"],
    facts: [
      { label: "Role", value: "Creator & Developer" },
      { label: "Type", value: "Personal Project" },
      { label: "Platform", value: "Web, PWA & Offline Widgets" },
      { label: "Year", value: "2026" },
    ],
    story: {
      challenge:
        "Most calendar apps force either a stripped-down Gregorian grid or cluttered multi-calendar feeds where regional, traditional, and astronomical dates collide and overwhelm daily planning.",
      approach:
        "Built a local-first calendar engine that opens straight to a clean full-month view with regional holidays, while letting users toggle any of 33 world calendars (Gujarati Vikram Samvat, Hindu Panchang, Hijri, Hebrew, Chinese, ISO Week, and more) alongside dual-timezone views, a universal date converter, Astronomy & Celestial Almanac, weather, world clocks, and a focus timer.",
      results:
        "Shipped a privacy-first universal calendar across 21 interface languages with on-device storage, .ics import/export, keyboard shortcuts, optional Google Calendar sync, and installable desktop/mobile PWAs with 2×2, 4×2, and 4×4 offline widgets.",
    },
    url: "https://calander-v1.vercel.app/",
    images: [
      calendarQHero,
      calendarQApp,
      calendarQWeek,
      calendarQAstronomy,
      calendarQConverter,
      calendarQWidget,
    ],
    resources: [
      {
        label: "GitHub",
        url: "https://github.com/Pandyashweta/cal.q",
      },
    ],
  },
  {
    id: "flowstate",
    title: "FLOWSTATE",
    category: "Developer • Voice-Driven AI Automation",
    image: flowstateHero,
    description:
      "Voice-driven enterprise workflow automation that turns spoken or text instructions into runbook-grounded workflows, department-routed tasks, and 5-tier RBAC approval queues.",
    year: "2026",
    client: "Personal Project",
    duration: "Personal Build",
    role: "Creator & Developer",
    tags: ["Voice AI", "Grounded RAG", "5-Tier RBAC"],
    facts: [
      { label: "Role", value: "Creator & Developer" },
      { label: "Type", value: "Personal Project" },
      { label: "AI Engine", value: "Gemini & Grounded RAG" },
      { label: "Year", value: "2026" },
    ],
    story: {
      challenge:
        "Operations teams lose hours translating spoken decisions and scattered SOPs into manual tickets, policy checks, and follow-up pings—while ungrounded AI tools lack tenant isolation, policy citations, and human authorization gates.",
      approach:
        "Designed the updated Flowstate. editorial web platform—complete with an interactive app.flowstate.ai workflow preview, 4-tool operations walkthrough, blog archive, FAQ, and 3D shader early-access waitlist—backed by a voice-and-text AI Command Center, PDF/DOCX/TXT RAG Knowledge Base, and 5-tier RBAC Approvals Queue.",
      results:
        "Delivered an installable, browser-native PWA supporting isolated Personal and Organization workspaces, custom departments, webhooks/REST integrations, and verifiable .csv, .json, and .txt audit trail receipts.",
    },
    url: "https://flowstate-v1.vercel.app/",
    images: [
      flowstateHero,
      flowstateWorkflows,
      flowstateWaitlist,
      flowstateSignin,
    ],
    resources: [
      {
        label: "GitHub",
        url: "https://github.com/Pandyashweta/Flowstate",
      },
    ],
  },
];
