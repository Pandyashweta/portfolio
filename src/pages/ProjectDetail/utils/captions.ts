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

  // Developer Projects captions
  if (lowerSrc.includes("calendar-q-hero")) return "Platform Overview";
  if (lowerSrc.includes("calendar-q-app")) return "Full Month View";
  if (lowerSrc.includes("calendar-q-week")) return "Dual-Timezone Week View";
  if (lowerSrc.includes("calendar-q-astronomy")) return "Astronomy & Celestial Almanac";
  if (lowerSrc.includes("calendar-q-converter")) return "Universal Date Converter & Side Panel";
  if (lowerSrc.includes("calendar-q-widget")) return "Desktop & Mobile Offline Widgets";
  if (lowerSrc.includes("flowstate-hero")) return "Editorial Landing & Live Workspace Preview";
  if (lowerSrc.includes("flowstate-workflows")) return "Voice Capture, Grounding & Audit Receipts";
  if (lowerSrc.includes("flowstate-waitlist")) return "Early Access Waitlist & 3D Shader Emblem";
  if (lowerSrc.includes("flowstate-signin")) return "Workspace Sign-In & Core Capabilities";

  return `Screen ${idx + 1}`;
}
