import React, { useEffect } from "react";
import Hero from "./components/Hero";

export default function HomePage() {
  useEffect(() => {
    document.title = "shwetapandya";
  }, []);

  return (
    <main className="w-full min-h-screen lg:h-screen lg:max-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 sm:p-10 lg:p-12 transition-colors duration-300 overflow-x-hidden lg:overflow-hidden relative">
      <Hero />
    </main>
  );
}
