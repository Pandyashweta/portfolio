import histopediaThumbnail from "../../assets/images/histopedia/histopedia.png";
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
    id: "eau-de-perfume",
    title: "EAU DE PERFUME",
    category: "Figma • UI/UX Design & Luxury E-Commerce",
    image: perfumeThumbnail,
    aspectClass: "aspect-[16/10]",
    description: "A luxury fragrance e-commerce concept designed to deliver a premium online shopping experience.",
    year: "2026",
    scope: "Figma | UI/UX Design | Web Mockups | Responsive Design",
    client: "Design Exploration",
    duration: "1 Week",
    url: "https://www.figma.com/community/file/1653804240648155757/eau-de-parfum",
    aboutText: `## Project Overview

EAU DE PERFUME is a luxury fragrance e-commerce concept designed to deliver a premium online shopping experience. The project combines elegant visuals, seamless user flows, and modern UI principles to create an immersive platform where users can discover, purchase, and manage luxury fragrances with ease.

---

## Outcome

EAU DE PERFUME delivers a refined luxury shopping experience through elegant visual design, intuitive navigation, and frictionless purchasing flows. The project demonstrates how thoughtful UX and premium aesthetics can elevate an online retail experience while maintaining usability and accessibility.`,
    images: [
      perfumeThumbnail,
      perfumeLogin,
      perfumeAccount,
      perfumeHomepage,
      perfumeWishlist,
      perfumeSubscribe
    ],
  },
  {
    id: "histopedia",
    title: "Histopedia",
    category: "Figma • UI/UX Design & History App",
    image: histopediaThumbnail,
    aspectClass: "aspect-[16/10]",
    description: "An interactive digital platform designed for exploring world history through maps, timelines, and community discussions.",
    year: "2025",
    scope: "Figma Community | UI/UX Design | High-fidelity Mockups | Interactive Prototyping",
    client: "MSc. IT student project",
    duration: "3 Weeks",
    url: "https://www.figma.com/community/file/1632092961246977062",
    aboutText: `## Project Overview

This is one of my favorite projects from my master's degree. For this project, I turned one of my hobbies, which is my love of history, into a small UI/UX app project. Because I wish there was an app like this when I was looking for history apps, I plan to make it available to the public when I am finished improving it.

Histopedia is my concept of a UI/UX app. It allows customers to search for any map of world history and then choose historical events based on the map they want to interact with and learn about. Users will also be able to learn about the historical events that other users have documented and will be able to contribute to the app by documenting historical events themselves.

---

## Outcome

Histopedia is an app that transforms traditional historical archives into a modern, user-friendly experience that encourages exploration, learning, and community engagement while preserving cultural heritage.`,
    images: [
      histopediaThumbnail,
      histopediaWelcome,
      histopediaHome,
      histopediaCommunity,
      histopediaSearch,
      histopediaProfile
    ],
    resources: [
      {
        label: "UX Report",
        url: "https://drive.google.com/drive/folders/1ocO14HdTun2shwa4dG2cUDbSPzOC-0CV?usp=sharing",
        description: "Explore the complete design process, research, usability analysis, and project documentation."
      },
      {
        label: "User Personas",
        url: "https://drive.google.com/drive/folders/1A_f9C8wQVJR_1GuMOKtLFtyQ-mTScpCC?usp=sharing",
        description: "View the research-driven personas that shaped key product decisions."
      }
    ],
  },
];
