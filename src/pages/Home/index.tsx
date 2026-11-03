import { useEffect } from "react";
import Hero from "./components/Hero";
import Footer from "../../components/common/Footer";

export default function HomePage() {
  useEffect(() => {
    document.title = "Pandyashweta";
  }, []);

  return (
    <main className="w-full min-h-screen md:h-screen md:max-h-screen md:overflow-hidden bg-[var(--bg-primary)] text-left transition-colors duration-300 flex flex-col justify-between relative selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
      {/* Hero viewport section filling available space */}
      <div className="w-full flex-1 flex items-center justify-center px-4 py-4 sm:px-8 lg:px-12 relative min-h-0">
        <Hero />
      </div>

      {/* Modern Frosted Glass Burgundy Footer locked to bottom */}
      <Footer compact />
    </main>
  );
}
