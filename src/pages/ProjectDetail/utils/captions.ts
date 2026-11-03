export function getImageCaption(projectId: string, src: string, idx: number): string {
  const lowerSrc = src.toLowerCase();

  // Histopedia captions
  if (lowerSrc.includes("histopedia.png") || lowerSrc.includes("histopedia-")) return "Cover";
  if (lowerSrc.includes("welcome")) return "Welcome, Log In, Sign In, Verify";
  if (lowerSrc.includes("home.png") || lowerSrc.includes("home-")) return "Home Page";
  if (lowerSrc.includes("community")) return "Community Page";
  if (lowerSrc.includes("search")) return "Search Page";
  if (lowerSrc.includes("profile")) return "Profile Section";

  // Eau de Perfume captions
  if (lowerSrc.includes("eau de perfume") || lowerSrc.includes("eau-de-perfume")) return "Cover";
  if (lowerSrc.includes("login & sign in") || lowerSrc.includes("login _ sign in") || lowerSrc.includes("login")) return "Login & Sign In";
  if (lowerSrc.includes("created account")) return "Created Account & Logged In";
  if (lowerSrc.includes("homepage before")) return "Homepage & Login Message";
  if (lowerSrc.includes("wishlist")) return "Wishlist, Checkout & Order Placed";
  if (lowerSrc.includes("subscribe")) return "Subscribe & Error";

  // Coding Projects captions
  if (lowerSrc.includes("futuristic_industrial") || lowerSrc.includes("automation")) return "Workflow Pipeline & Orchestration Architecture";
  if (lowerSrc.includes("sculptural_red") || lowerSrc.includes("imaging")) return "Cellular Microscopy Analysis & Automated Segmentation";

  return `Screen ${idx + 1}`;
}
