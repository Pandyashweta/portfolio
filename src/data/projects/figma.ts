import histopediaThumbnail from "../../assets/images/histopedia/histopedia-dark.png";
import histopediaWelcome from "../../assets/images/histopedia/Welcome, log in, Sign in, Verify.png";
import histopediaHome from "../../assets/images/histopedia/home.png";
import histopediaCommunity from "../../assets/images/histopedia/Community Page.png";
import histopediaSearch from "../../assets/images/histopedia/Search page.png";
import histopediaProfile from "../../assets/images/histopedia/Profile Section.png";
import perfumeThumbnail from "../../assets/images/perfume/eau de perfume.png";
import perfumeLogin from "../../assets/images/perfume/login & sign in.png";
import perfumeAccount from "../../assets/images/perfume/created account & logged in.jpg";
import perfumeHomepage from "../../assets/images/perfume/Homepage before logged in & logged in message.jpg";
import perfumeWishlist from "../../assets/images/perfume/wishlist & checkout & order placed message.jpg";
import perfumeSubscribe from "../../assets/images/perfume/subscribe & error.png";
import type { ProjectData } from "../../types";

export const figmaProjects: ProjectData[] = [
  {
    id: "histopedia",
    title: "Histopedia",
    category: "UI/UX Design • History App",
    image: histopediaThumbnail,
    description:
      "An interactive digital platform designed for exploring world history through maps, timelines, and community discussions.",
    year: "2025",
    client: "MSc. IT Project",
    duration: "3 Weeks",
    role: "UI/UX & Researcher",
    tags: ["EdTech", "Interactive Maps", "Community"],
    facts: [
      { label: "Role", value: "UI/UX & Researcher" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Client", value: "MSc. IT Project" },
      { label: "Deliverables", value: "Research Report & Mockups" },
    ],
    story: {
      challenge:
        "Learning world history from static textbooks or dry archive databases is often disorienting and exhausting. Timelines are fragmented, historical maps are detached from modern context, and there is no social space for history enthusiasts to collaboratively contribute and discuss events.",
      approach:
        "Conducted user research surveys with students and history enthusiasts, built user personas and journey maps, designed interactive geographic map interfaces with temporal scrubbers, and created community discussion threads with verified citation flows.",
      results:
        "Histopedia transforms traditional historical archives into a modern, user-friendly experience that encourages exploration, learning, and community engagement while preserving cultural heritage.",
    },
    url: "https://www.figma.com/community/file/1632092961246977062",
    images: [
      histopediaThumbnail,
      histopediaWelcome,
      histopediaHome,
      histopediaCommunity,
      histopediaSearch,
      histopediaProfile,
    ],
    resources: [
      {
        label: "UX Report",
        url: "https://drive.google.com/drive/folders/1ocO14HdTun2shwa4dG2cUDbSPzOC-0CV?usp=sharing",
      },
      {
        label: "User Personas",
        url: "https://drive.google.com/drive/folders/1A_f9C8wQVJR_1GuMOKtLFtyQ-mTScpCC?usp=sharing",
      },
    ],
  },
  {
    id: "eau-de-perfume",
    title: "EAU DE PERFUME",
    category: "UI/UX Design • Luxury E-Commerce",
    image: perfumeThumbnail,
    description:
      "A luxury fragrance e-commerce concept designed to deliver a premium online shopping experience.",
    year: "2026",
    client: "Design Exploration",
    duration: "1 Week",
    role: "Lead UI/UX Designer",
    tags: ["Luxury E-Commerce", "UI/UX Design", "Figma"],
    facts: [
      { label: "Role", value: "Lead UI/UX Designer" },
      { label: "Timeline", value: "1 Week" },
      { label: "Client", value: "Design Exploration" },
      { label: "Deliverables", value: "Figma Prototype & Mockups" },
    ],
    story: {
      challenge:
        "Shoppers buying luxury fragrance online cannot smell the perfume through the screen. Most fragrance websites compensate with sterile layouts and clunky product filter lists that strip the magic away from scent exploration. The goal was to build a digital boutique where fragrance notes, bottle craftsmanship, and olfactory mood feel alive and effortlessly navigable.",
      approach:
        "Audited top Parisian perfume houses, designed high-fidelity interactive component libraries in Figma, and mapped user flows from mood-based scent discovery to zero-friction cart checkout with instant luxury packaging previews.",
      results:
        "Delivered a refined luxury shopping experience through elegant visual design, intuitive navigation, and frictionless purchasing flows. The project demonstrates how thoughtful UX and premium aesthetics elevate an online retail experience while maintaining usability and accessibility.",
    },
    url: "https://www.figma.com/community/file/1653804240648155757/eau-de-parfum",
    images: [
      perfumeThumbnail,
      perfumeLogin,
      perfumeAccount,
      perfumeHomepage,
      perfumeWishlist,
      perfumeSubscribe,
    ],
  },
];
